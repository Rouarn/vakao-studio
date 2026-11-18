export interface RepoEntry {
  name: string;
  desc: string;
  tag: string;
  url: string;
  /** 仓库已归档（只读），页面会显示「已归档」标记 */
  archived?: boolean;
}

export const products: RepoEntry[] = [
  {
    name: "vakao-studio",
    desc: "VaKao 团队官网：Nuxt 4 + Tailwind CSS + Three.js，静态生成。",
    tag: "官网",
    url: "https://github.com/Rouarn/vakao-studio",
  },
  {
    name: "wiredeck",
    desc: "在电脑上无线管理安卓手机：扫码配对、应用管理、APK 安装、文件传输、实时日志与 Shell。",
    tag: "桌面工具",
    url: "https://github.com/Rouarn/wiredeck",
  },
  {
    name: "dianmo",
    desc: "点墨：Android 单机离线场景的内存扫描与修改工具。Kotlin 悬浮窗 + C++ native 扫描器。",
    tag: "Android",
    url: "https://github.com/Rouarn/dianmo",
  },
  {
    name: "onmyoji-tools",
    desc: "阴阳师 Windows 工具：多开、窗口网格排列、声音跟随聚焦与一键关闭。",
    tag: "Windows",
    url: "https://github.com/Rouarn/onmyoji-tools",
  },
  {
    name: "simple-bookkeeping",
    desc: "小绿记账 App：uni-app（Vue 3 + Pinia）前端，含深色模式、持久化与 App 在线更新。",
    tag: "移动应用",
    url: "https://github.com/Rouarn/simple-bookkeeping",
  },
  {
    name: "simple-bookkeeping-service",
    desc: "小绿记账服务端：NestJS + MySQL + Redis，认证、账本、账单、分类统计与文件访问。",
    tag: "后端",
    url: "https://github.com/Rouarn/simple-bookkeeping-service",
  },
  {
    name: "text-chat",
    desc: "实时文本聊天：Vue 3 前端 + Express/Socket.IO 后端，支持昵称、在线列表与输入状态。",
    tag: "Web",
    url: "https://github.com/Rouarn/text-chat",
  },
  {
    name: "image-crawler",
    desc: "图片批量抓取工具：NestJS 后端 + React/AntD 前端，支持静态解析、无头浏览器、分页与并发下载。",
    tag: "工具",
    url: "https://github.com/Rouarn/image-crawler",
  },
  {
    name: "vakao-static-hub",
    desc: "静态资源管理系统：多根目录文件、分片上传、分享、图片处理与 App 更新中心。",
    tag: "平台",
    url: "https://github.com/Rouarn/vakao-static-hub",
  },
  {
    name: "vakao-hub",
    desc: "VaKao Hub：Android 与桌面应用统一的版本、产物与更新分发中心，含 Wails 桌面启动器。",
    tag: "平台",
    url: "https://github.com/Rouarn/vakao-hub",
  },
  {
    name: "video-speed-control",
    desc: "浏览器扩展：为全网 HTML5 视频提供统一倍速控制与快捷键。",
    tag: "扩展",
    url: "https://github.com/Rouarn/video-speed-control",
  },
  {
    name: "request-interceptor-debugger",
    desc: "浏览器扩展：请求捕获、过滤、Mock、改包、重定向与规则导入导出。",
    tag: "扩展",
    url: "https://github.com/Rouarn/request-interceptor-debugger",
  },
  {
    name: "rouarn-isle",
    desc: "我屿闲记：配置驱动的纯静态个人主页，Vue 3 + UnoCSS + animal-island-vue。",
    tag: "个人站",
    url: "https://github.com/Rouarn/rouarn-isle",
    archived: true,
  },
  {
    name: "woyuxiaji-site",
    desc: "我与夏季：Vue 3 + Vite + Pinia + GSAP 的个人主页。",
    tag: "个人站",
    url: "https://github.com/Rouarn/woyuxiaji-site",
  },
  {
    name: "woyuxiaji-site-v1",
    desc: "我与夏季：个人主页的早期版本。",
    tag: "个人站",
    url: "https://github.com/Rouarn/woyuxiaji-site-v1",
    archived: true,
  },
  {
    name: "wallpaper-tool",
    desc: "壁纸工具：壁纸抓取与管理的个人项目。",
    tag: "工具",
    url: "https://github.com/Rouarn/wallpaper-tool",
  },
  {
    name: "localsend-share",
    desc: "LocalSend 相关的个人项目。",
    tag: "实验",
    url: "https://github.com/Rouarn/localsend-share",
    archived: true,
  },
  {
    name: "localsend-ws",
    desc: "LocalSend WebSocket 相关的个人实验。",
    tag: "实验",
    url: "https://github.com/Rouarn/localsend-ws",
    archived: true,
  },
  {
    name: "frontend-samples",
    desc: "HTML / CSS / JavaScript / jQuery / Vue 前端实例合集。",
    tag: "示例",
    url: "https://github.com/Rouarn/frontend-samples",
    archived: true,
  },
  {
    name: "onmyoji-pages",
    desc: "GitHub Pages 个人页面实验。",
    tag: "实验",
    url: "https://github.com/Rouarn/onmyoji-pages",
    archived: true,
  },
];

export const foundations: RepoEntry[] = [
  {
    name: "frontend-template",
    desc: "Vue 3 + Vite + TypeScript 前端模板，内置路由、权限、i18n 与主题。",
    tag: "模板",
    url: "https://github.com/Rouarn/frontend-template",
  },
  {
    name: "nestjs-template",
    desc: "NestJS 企业级后端 API 模板，含认证、RBAC、文件服务与统一响应。",
    tag: "模板",
    url: "https://github.com/Rouarn/nestjs-template",
  },
  {
    name: "electron-template",
    desc: "基于 Vue 3 + Vite 的 Electron 开发模板。",
    tag: "模板",
    url: "https://github.com/Rouarn/electron-template",
  },
  {
    name: "wails-template",
    desc: "基于 Wails v3 + Go + Vue 3 + Vite+ 的桌面应用模板，Go 契约直接生成前端类型。",
    tag: "模板",
    url: "https://github.com/Rouarn/wails-template",
  },
  {
    name: "blog-reset-server",
    desc: "博客重置版后端：认证、用户、文章、分类、文件、缓存与导入导出。",
    tag: "后端",
    url: "https://github.com/Rouarn/blog-reset-server",
  },
  {
    name: "blog-reset-web",
    desc: "博客重置版前端：Vue 3 + Naive UI + md-editor-v3，含文章、归档、标签与用户中心。",
    tag: "前端",
    url: "https://github.com/Rouarn/blog-reset-web",
  },
  {
    name: "vakao-axios",
    desc: "VaKao axios 二次封装：统一信封、401 单飞刷新、重复请求取消与全局 loading。",
    tag: "库",
    url: "https://github.com/Rouarn/vakao-axios",
  },
  {
    name: "vakao-scripts-utils",
    desc: "VaKao 脚本工具库：终端颜色、图标、横幅、日志与常用工具函数。",
    tag: "库",
    url: "https://github.com/Rouarn/vakao-scripts-utils",
  },
  {
    name: "vakao-socket-system",
    desc: "VaKao Socket 客户端：连接管理、自动重连、房间恢复、类型安全消息与错误出口。",
    tag: "库",
    url: "https://github.com/Rouarn/vakao-socket-system",
  },
  {
    name: "vakao-ui",
    desc: "基于 Vue 3 与 TypeScript 的现代化组件库。",
    tag: "库",
    url: "https://github.com/Rouarn/vakao-ui",
  },
  {
    name: "vakao-mascot",
    desc: "零依赖的右下角看板娘 Web Component：呼吸、眨眼、视线跟随，并以子路径提供可选的 React / Vue 封装。",
    tag: "库",
    url: "https://github.com/Rouarn/vakao-mascot",
  },
];
