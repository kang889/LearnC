import type { PhraseProgress } from "@/lib/srs";

const DB_NAME = "mom-english-db";
const DB_VERSION = 1;
const STORE_NAME = "progress";

type ProgressRecord = PhraseProgress;

function openDb(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, DB_VERSION);

    request.onupgradeneeded = () => {
      const db = request.result;
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME, { keyPath: "phraseId" });
      }
    };

    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

function withStore<T>(mode: IDBTransactionMode, action: (store: IDBObjectStore) => IDBRequest<T>): Promise<T> {
  return openDb().then(
    (db) =>
      new Promise<T>((resolve, reject) => {
        const tx = db.transaction(STORE_NAME, mode);
        const store = tx.objectStore(STORE_NAME);
        const request = action(store);

        request.onsuccess = () => resolve(request.result);
        request.onerror = () => reject(request.error);
        tx.oncomplete = () => db.close();
        tx.onerror = () => reject(tx.error);
      }),
  );
}

export function getProgress(phraseId: string): Promise<ProgressRecord | null> {
  return withStore("readonly", (store) => store.get(phraseId)).then((result) => result ?? null);
}

export function setProgress(phraseId: string, progress: ProgressRecord): Promise<void> {
  const record: ProgressRecord = { ...progress, phraseId };
  return withStore("readwrite", (store) => store.put(record)).then(() => undefined);
}

export function getAllProgress(): Promise<ProgressRecord[]> {
  return withStore("readonly", (store) => store.getAll()).then((result) => result ?? []);
}

export async function resetAllProgress() {
  await withStore("readwrite", (store) => store.clear());
}

export async function exportProgressJson() {
  const all = await getAllProgress();
  return JSON.stringify(all, null, 2);
}

export async function importProgressJson(input: string) {
  const parsed = JSON.parse(input) as ProgressRecord[];
  if (!Array.isArray(parsed)) {
    throw new Error("JSON 格式不正确：必须是数组");
  }

  const db = await openDb();
  await new Promise<void>((resolve, reject) => {
    const tx = db.transaction(STORE_NAME, "readwrite");
    const store = tx.objectStore(STORE_NAME);
    store.clear();

    for (const item of parsed) {
      if (!item.phraseId || !item.nextDueISO || !item.updatedAtISO) {
        reject(new Error("JSON 内容缺少必要字段"));
        return;
      }
      store.put(item);
    }

    tx.oncomplete = () => {
      db.close();
      resolve();
    };
    tx.onerror = () => reject(tx.error);
  });
}
