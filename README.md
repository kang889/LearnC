# Mom English (Next.js PWA)

给中文母语用户（尤其是长辈）设计的基础英语学习 PWA：可离线、可安装、无后端、进度本地保存。

## 1) Windows 脚手架命令（从零创建）

```bash
npx create-next-app@latest mom-english --typescript --tailwind --eslint --app --src-dir --use-npm --import-alias "@/*"
cd mom-english
```

> 如果命令行询问选项：全部选择 TypeScript / Tailwind / App Router / src 目录 / npm。

## 2) 本地开发运行

```bash
npm install
npm run dev
```

打开：`http://localhost:3000`

## 3) 生产构建

```bash
npm run build
npm run start
```

## 4) 免费部署到 Vercel

1. 把代码推到 GitHub。
2. 登录 [https://vercel.com](https://vercel.com)（可用 GitHub 账号）。
3. 点击 **Add New Project**，选择仓库。
4. Framework 识别为 Next.js，保持默认配置。
5. 点击 **Deploy**。
6. 部署完成后得到公开 URL。

## 5) 手机添加到主屏幕

### iPhone (Safari)
1. 打开部署后的网址。
2. 点击底部分享按钮。
3. 选择“添加到主屏幕”。
4. 点击“添加”。

### Android (Chrome)
1. 打开部署后的网址。
2. 点击右上角菜单。
3. 选择“安装应用”或“添加到主屏幕”。
4. 确认安装。

## 功能说明

- 首页：今天 / 复习 / 短语，显示连续学习天数和今日到期数。
- 课程页：每次一条短语，支持慢速和正常 TTS。
- 复习页：仅出现到期条目。
- 离线：缓存 app shell + 访问过的路由。
- 本地进度：IndexedDB 保存 SRS 记录。
- 额外：导出/导入 JSON，重置进度。
