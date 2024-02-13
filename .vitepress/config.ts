import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'YXBoot 文档',
  description: '开箱即用的前后台管理系统框架',
  lang: 'zh-CN',
  srcDir: 'src',

  themeConfig: {
    logo: '/logo.png',
    siteTitle: 'YXBoot 文档',

    nav: [
      { text: '指南', link: '/guide/', activeMatch: '/guide/' },
      { text: '配置', link: '/config/', activeMatch: '/config/' }
    ],

    sidebar: [
      {
        text: '指南',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [{ icon: 'github', link: 'https://github.com/boyazuo/yxboot' }]
  }
})
