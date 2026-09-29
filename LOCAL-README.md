# 个人博客本地使用

此项目使用 [Momo](https://github.com/Motues/Momo)（Astro）模板。原来的 Hugo 博客备份在 `D:\Cloud\blog-hugo-backup`。

## 预览

在 PowerShell 中运行：

```powershell
cd D:\Cloud\blog
pnpm install
pnpm dev
```

打开 `http://localhost:4321`。可视化编辑器在本机运行 `pnpm cms` 后访问 `http://localhost:5188`。

## 修改内容

- `src/config.ts`：网站名称、首页标题、作者资料和功能开关。正式部署前修改 `rootSiteUrl`、`indexPage`、姓名等占位值。
- `src/content/spec/about/zh-cn.md`：关于我、简历和联系方式。
- `src/content/blog/personal/`：自己的项目和文章。新增文章按现有 `zh-cn.md` 的 frontmatter 格式填写。

原模板文章仍保存在源码中供参考，但文章列表已设置为仅加载 `personal/` 目录。本地测试完成后可按需处理模板内容。评论功能和模板作者的统计脚本已关闭。

运行 `pnpm build` 生成 `dist/`。部署时只需让 Nginx 托管该目录，不需要在服务器上运行 Node.js。
