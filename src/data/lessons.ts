export type Phrase = {
  id: string;
  lessonId: string;
  topic: string;
  english: string;
  chinese: string;
  pinyin?: string;
};

export type Lesson = {
  id: string;
  topic: string;
  phrases: Phrase[];
};

export const lessons: Lesson[] = [
  {
    id: "greetings",
    topic: "问候",
    phrases: [
      { id: "g1", lessonId: "greetings", topic: "问候", english: "Hello", chinese: "你好", pinyin: "nǐ hǎo" },
      { id: "g2", lessonId: "greetings", topic: "问候", english: "Good morning", chinese: "早上好", pinyin: "zǎo shang hǎo" },
      { id: "g3", lessonId: "greetings", topic: "问候", english: "How are you?", chinese: "你好吗？", pinyin: "nǐ hǎo ma" },
      { id: "g4", lessonId: "greetings", topic: "问候", english: "I am fine", chinese: "我很好", pinyin: "wǒ hěn hǎo" },
      { id: "g5", lessonId: "greetings", topic: "问候", english: "See you tomorrow", chinese: "明天见", pinyin: "míng tiān jiàn" },
    ],
  },
  {
    id: "food-drinks",
    topic: "饮食",
    phrases: [
      { id: "f1", lessonId: "food-drinks", topic: "饮食", english: "I am hungry", chinese: "我饿了", pinyin: "wǒ è le" },
      { id: "f2", lessonId: "food-drinks", topic: "饮食", english: "I want water", chinese: "我想要水", pinyin: "wǒ xiǎng yào shuǐ" },
      { id: "f3", lessonId: "food-drinks", topic: "饮食", english: "No sugar, please", chinese: "请不要糖", pinyin: "qǐng bú yào táng" },
      { id: "f4", lessonId: "food-drinks", topic: "饮食", english: "This is delicious", chinese: "这个很好吃", pinyin: "zhè ge hěn hǎo chī" },
      { id: "f5", lessonId: "food-drinks", topic: "饮食", english: "The bill, please", chinese: "请结账", pinyin: "qǐng jié zhàng" },
    ],
  },
  {
    id: "shopping",
    topic: "购物",
    phrases: [
      { id: "s1", lessonId: "shopping", topic: "购物", english: "How much is this?", chinese: "这个多少钱？", pinyin: "zhè ge duō shǎo qián" },
      { id: "s2", lessonId: "shopping", topic: "购物", english: "Too expensive", chinese: "太贵了", pinyin: "tài guì le" },
      { id: "s3", lessonId: "shopping", topic: "购物", english: "Can I try this?", chinese: "我可以试试吗？", pinyin: "wǒ kě yǐ shì shi ma" },
      { id: "s4", lessonId: "shopping", topic: "购物", english: "I will take it", chinese: "我要这个", pinyin: "wǒ yào zhè ge" },
      { id: "s5", lessonId: "shopping", topic: "购物", english: "Do you take cash?", chinese: "可以付现金吗？", pinyin: "kě yǐ fù xiàn jīn ma" },
    ],
  },
  {
    id: "transport",
    topic: "交通",
    phrases: [
      { id: "t1", lessonId: "transport", topic: "交通", english: "Where is the bus stop?", chinese: "公交站在哪里？", pinyin: "gōng jiāo zhàn zài nǎ lǐ" },
      { id: "t2", lessonId: "transport", topic: "交通", english: "I need a taxi", chinese: "我需要出租车", pinyin: "wǒ xū yào chū zū chē" },
      { id: "t3", lessonId: "transport", topic: "交通", english: "One ticket, please", chinese: "请给我一张票", pinyin: "qǐng gěi wǒ yì zhāng piào" },
      { id: "t4", lessonId: "transport", topic: "交通", english: "Which line should I take?", chinese: "我应该坐哪条线？", pinyin: "wǒ yīng gāi zuò nǎ tiáo xiàn" },
      { id: "t5", lessonId: "transport", topic: "交通", english: "Please stop here", chinese: "请在这里停车", pinyin: "qǐng zài zhè lǐ tíng chē" },
    ],
  },
  {
    id: "clinic",
    topic: "看病",
    phrases: [
      { id: "c1", lessonId: "clinic", topic: "看病", english: "I need a doctor", chinese: "我需要医生", pinyin: "wǒ xū yào yī shēng" },
      { id: "c2", lessonId: "clinic", topic: "看病", english: "I feel dizzy", chinese: "我头晕", pinyin: "wǒ tóu yūn" },
      { id: "c3", lessonId: "clinic", topic: "看病", english: "I have a fever", chinese: "我发烧了", pinyin: "wǒ fā shāo le" },
      { id: "c4", lessonId: "clinic", topic: "看病", english: "I am allergic to penicillin", chinese: "我对青霉素过敏", pinyin: "wǒ duì qīng méi sù guò mǐn" },
      { id: "c5", lessonId: "clinic", topic: "看病", english: "Where is the pharmacy?", chinese: "药店在哪里？", pinyin: "yào diàn zài nǎ lǐ" },
    ],
  },
  {
    id: "directions",
    topic: "问路",
    phrases: [
      { id: "d1", lessonId: "directions", topic: "问路", english: "Where am I?", chinese: "我在哪里？", pinyin: "wǒ zài nǎ lǐ" },
      { id: "d2", lessonId: "directions", topic: "问路", english: "Turn left", chinese: "向左转", pinyin: "xiàng zuǒ zhuǎn" },
      { id: "d3", lessonId: "directions", topic: "问路", english: "Turn right", chinese: "向右转", pinyin: "xiàng yòu zhuǎn" },
      { id: "d4", lessonId: "directions", topic: "问路", english: "Go straight", chinese: "直走", pinyin: "zhí zǒu" },
      { id: "d5", lessonId: "directions", topic: "问路", english: "Is it far?", chinese: "远吗？", pinyin: "yuǎn ma" },
    ],
  },
  {
    id: "numbers",
    topic: "数字",
    phrases: [
      { id: "n1", lessonId: "numbers", topic: "数字", english: "One, two, three", chinese: "一，二，三", pinyin: "yī, èr, sān" },
      { id: "n2", lessonId: "numbers", topic: "数字", english: "Ten", chinese: "十", pinyin: "shí" },
      { id: "n3", lessonId: "numbers", topic: "数字", english: "Twenty", chinese: "二十", pinyin: "èr shí" },
      { id: "n4", lessonId: "numbers", topic: "数字", english: "One hundred", chinese: "一百", pinyin: "yì bǎi" },
      { id: "n5", lessonId: "numbers", topic: "数字", english: "What number is this?", chinese: "这是什么号码？", pinyin: "zhè shì shén me hào mǎ" },
    ],
  },
  {
    id: "time",
    topic: "时间",
    phrases: [
      { id: "ti1", lessonId: "time", topic: "时间", english: "What time is it?", chinese: "现在几点？", pinyin: "xiàn zài jǐ diǎn" },
      { id: "ti2", lessonId: "time", topic: "时间", english: "Today", chinese: "今天", pinyin: "jīn tiān" },
      { id: "ti3", lessonId: "time", topic: "时间", english: "Tomorrow", chinese: "明天", pinyin: "míng tiān" },
      { id: "ti4", lessonId: "time", topic: "时间", english: "Morning", chinese: "早上", pinyin: "zǎo shang" },
      { id: "ti5", lessonId: "time", topic: "时间", english: "Afternoon", chinese: "下午", pinyin: "xià wǔ" },
    ],
  },
  {
    id: "emergency",
    topic: "紧急情况",
    phrases: [
      { id: "e1", lessonId: "emergency", topic: "紧急情况", english: "Help!", chinese: "救命！", pinyin: "jiù mìng" },
      { id: "e2", lessonId: "emergency", topic: "紧急情况", english: "Call the police", chinese: "请报警", pinyin: "qǐng bào jǐng" },
      { id: "e3", lessonId: "emergency", topic: "紧急情况", english: "I am lost", chinese: "我迷路了", pinyin: "wǒ mí lù le" },
      { id: "e4", lessonId: "emergency", topic: "紧急情况", english: "Please speak slowly", chinese: "请说慢一点", pinyin: "qǐng shuō màn yì diǎn" },
      { id: "e5", lessonId: "emergency", topic: "紧急情况", english: "I need help", chinese: "我需要帮助", pinyin: "wǒ xū yào bāng zhù" },
    ],
  },
  {
    id: "daily-life",
    topic: "日常生活",
    phrases: [
      { id: "dl1", lessonId: "daily-life", topic: "日常生活", english: "I am tired", chinese: "我累了", pinyin: "wǒ lèi le" },
      { id: "dl2", lessonId: "daily-life", topic: "日常生活", english: "I need rest", chinese: "我需要休息", pinyin: "wǒ xū yào xiū xi" },
      { id: "dl3", lessonId: "daily-life", topic: "日常生活", english: "Please wait a moment", chinese: "请稍等", pinyin: "qǐng shāo děng" },
      { id: "dl4", lessonId: "daily-life", topic: "日常生活", english: "I understand", chinese: "我明白", pinyin: "wǒ míng bái" },
      { id: "dl5", lessonId: "daily-life", topic: "日常生活", english: "I do not understand", chinese: "我不明白", pinyin: "wǒ bù míng bái" },
    ],
  },
];

export const allPhrases = lessons.flatMap((lesson) => lesson.phrases);

export function getLessonById(lessonId: string) {
  return lessons.find((lesson) => lesson.id === lessonId);
}
