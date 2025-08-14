# UoBD Important Websites - Next.js Version

> 🎉 **全新设计** - 使用 Next.js 14 重构，炫酷的 UI 设计，完美的 SEO 优化，专为 University of Birmingham Dubai 校区定制。

## ✨ 特性

- 🚀 **现代化框架**: Next.js 14 (App Router) + TypeScript
- 🎨 **炫酷设计**: Tailwind CSS + Framer Motion 动效
- 🌓 **暗色模式**: 支持明暗主题切换
- 📱 **响应式**: 完美适配桌面、平板、手机
- 🔍 **SEO 友好**: 静态生成 + 结构化数据 + 元信息优化
- ⚡ **性能优化**: 图片优化 + 代码分割 + 预加载
- 🏫 **UoB 品牌**: 符合 University of Birmingham 官方色调
- 🇦🇪 **Dubai 专区**: 专门的迪拜校区资源区域

## 🏗️ 技术栈

- **框架**: Next.js 14 (App Router)
- **语言**: TypeScript
- **样式**: Tailwind CSS + CSS Variables
- **动效**: Framer Motion
- **图标**: Lucide React
- **主题**: next-themes
- **SEO**: next-sitemap
- **部署**: GitHub Pages (静态导出)

## 🚀 快速开始

### 1. 安装依赖
```bash
npm install
```

### 2. 开发环境
```bash
npm run dev
```
打开 [http://localhost:3000](http://localhost:3000) 查看效果。

### 3. 构建和预览
```bash
npm run build    # 静态导出到 out/ 目录
npm run start    # 预览构建结果
```

## 📁 项目结构

```
├── app/                    # Next.js App Router 页面
│   ├── layout.tsx         # 全局布局 + SEO 配置
│   ├── page.tsx           # 首页
│   └── globals.css        # 全局样式
├── components/            # React 组件
│   ├── header.tsx         # 顶部导航
│   ├── hero-section.tsx   # 英雄区块
│   ├── category-grid.tsx  # 分类网格
│   ├── featured-links.tsx # 特色链接
│   └── footer.tsx         # 页脚
├── data/                  # 数据文件
│   └── links.json         # 链接数据
├── public/                # 静态资源
│   ├── CNAME              # 自定义域名
│   ├── robots.txt         # 搜索引擎配置
│   └── site.webmanifest   # PWA 配置
└── .github/workflows/     # GitHub Actions
    └── deploy.yml         # 自动部署配置
```

## 📊 数据管理

所有链接数据存储在 `data/links.json` 中，支持：

- 📂 **分类管理**: 按功能分组 (Main Websites, IT Services, 等)
- 🏷️ **标签系统**: 多标签支持，便于筛选
- 🇦🇪 **Dubai 标识**: `isDubaiSpecific` 字段标记迪拜校区专有资源
- 📝 **富信息**: 标题、描述、相关链接等详细信息

### 添加新链接

编辑 `data/links.json`，在对应分类下添加：

```json
{
  "id": "unique-id",
  "title": "Link Title",
  "url": "https://example.com",
  "description": "Link description",
  "tags": ["tag1", "tag2"],
  "isDubaiSpecific": true  // 可选，标记迪拜专有
}
```

## 🎨 品牌定制

### UoB 品牌色

在 `tailwind.config.ts` 和 `globals.css` 中定义了 UoB 品牌色变量：

```css
:root {
  --uob-primary: #1e3a8a;    /* UoB 蓝色 */
  --uob-secondary: #f59e0b;  /* UoB 金色 */
  --uob-accent: #059669;     /* UoB 绿色 */
}
```

> 💡 **品牌色占位**: 当前使用占位色，可根据官方品牌指南替换为精确色值。

### 定制组件

所有组件使用 Tailwind 工具类，支持：
- 🌓 暗色模式 (`dark:` 前缀)
- 🎭 悬停效果 (`hover:` 前缀)
- 📱 响应式 (`sm:`, `md:`, `lg:` 前缀)

## 🚀 部署

### GitHub Pages (自动)

1. 推送代码到 `main` 分支
2. GitHub Actions 自动构建并部署
3. 访问 `https://uobd.inology.tech`

### 手动部署

```bash
npm run build
# 将 out/ 目录内容上传到静态服务器
```

## 🔧 配置

### SEO 配置

在 `app/layout.tsx` 中配置：
- 页面标题和描述
- Open Graph 社交分享
- 结构化数据 (JSON-LD)
- 搜索引擎验证

### 分析追踪

已配置 Google Analytics (ID: `G-MTYH758FNF`)，在 `layout.tsx` 中可修改。

## 🆔 版本历史

- **v2.0.0**: Next.js 重构，全新 UI，完整 SEO
- **v1.x**: Jekyll 静态站点 (已废弃)

## 🤝 贡献

1. Fork 项目
2. 创建特性分支: `git checkout -b feature/amazing-feature`
3. 提交更改: `git commit -m 'Add amazing feature'`
4. 推送分支: `git push origin feature/amazing-feature`
5. 提交 Pull Request

## 📄 许可证

MIT License - 详见 [LICENSE](LICENSE) 文件。

## 🙏 致谢

- University of Birmingham Dubai
- Next.js 团队
- Tailwind CSS 社区
- 所有贡献者

---

**由 ZNing 用 ❤️ 为 UoB Dubai 学生制作**
