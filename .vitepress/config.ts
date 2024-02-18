import { defineConfig, type DefaultTheme } from 'vitepress'

function nav(): DefaultTheme.NavItem[] {
  return [
    { text: '指南', link: '/guide/', activeMatch: '/guide/' },
    { text: '配置', link: '/config/', activeMatch: '/config/' }
  ]
}

function sidebarGuide(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: '指南',
      collapsed: false,
      items: [
        { text: '介绍', link: 'index' },
        { text: '为什么选 YXBoot', link: 'why' },
        { text: '快速开始', link: 'getting-started' }
      ]
    },
    {
      text: '前端说明',
      collapsed: false,
      items: [
        { text: '介绍', link: 'front/index' },
        { text: '环境部署', link: 'front/deploy' },
        { text: '项目配置', link: 'front/setting' },
        { text: '开发规范', link: 'front/lint' },
        { text: '路由', link: 'front/router' },
        { text: '菜单', link: 'front/menu' },
        { text: '表单', link: 'front/form' },
        { text: '表格', link: 'front/table' },
        { text: '字典', link: 'front/dict' },
        { text: '图标', link: 'front/icon' }
      ]
    },
    {
      text: '后端说明',
      collapsed: false,
      items: [
        { text: '介绍', link: 'back/index' },
        { text: '环境部署', link: 'back/deploy' },
        { text: '开发规范', link: 'back/lint' },
        { text: '接口设计', link: 'back/api' },
        { text: '权限设计', link: 'back/auth' },
        { text: '文件上传', link: 'back/file-upload' },
        { text: '字典设计', link: 'back/dict' }
      ]
    },
    {
      text: '其他',
      collapsed: false,
      items: [{ text: '常见问题', link: 'other/faq' }]
    }
  ]
}

function sidebarConfig(): DefaultTheme.SidebarItem[] {
  return []
}

export default defineConfig({
  title: 'YXBoot 文档',
  description: '开箱即用的前后台管理系统框架',
  lang: 'zh-CN',
  srcDir: 'src',

  themeConfig: {
    logo: '/logo.png',
    siteTitle: 'YXBoot 文档',

    socialLinks: [
      {
        icon: {
          svg: '<svg height="32" viewBox="0 0 32 32" width="32" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><circle cx="16" cy="16" fill="#c71d23" r="16"/><path d="m24.0987698 14.2225144h-9.0863697c-.4362899.000207-.7900048.3538292-.790326.7901191l-.0005173 1.9752185c-.0003277.4363707.353328.7902117.7896987.790326.0000712 0 .0001424 0 .0002135-.0002135l5.5317648-.0000461c.4363708-.0000102.7901221.3537352.7901257.790106 0 .0000022 0 .0000044-.0000066.0000066v.1975077.1975318c0 1.3091122-1.0612451 2.3703573-2.3703573 2.3703573h-7.5067195c-.4363081-.0000218-.790009-.353713-.7900429-.7900211l-.0002069-7.5059917c-.0001014-1.3091122 1.0611145-2.3703865 2.3702267-2.3704226.0000217 0 .0000435 0 .0000653.0000653h11.0602463c.4361793-.0004902.7898484-.35394.7906091-.79011894l.0012251-1.97521881c.0007606-.43637034-.3527683-.79033806-.7891389-.79060871-.0001634-.0000001-.0003268-.00000015-.0004901.00048976h-11.0617654c-3.27278051 0-5.92589329 2.65311278-5.92589329 5.9258933v11.0612755c0 .4363707.35374837.7901191.7901191.7901191h11.65447149c2.9454379 0 5.3331872-2.3877493 5.3331872-5.3331872v-4.5430682c0-.4363707-.3537484-.7901191-.7901191-.7901191z" fill="#fff"/></g></svg>'
        },
        link: 'https://gitee.com/yxboot/yxboot'
      },
      { icon: 'github', link: 'https://github.com/boyazuo/yxboot' }
    ],

    nav: nav(),

    sidebar: {
      '/guide/': { base: '/guide/', items: sidebarGuide() },

      '/config/': { base: '/config/', items: sidebarConfig() }
    },

    footer: {
      message: '基于 MIT 许可发布',
      copyright: `版权所有 © 2023-${new Date().getFullYear()} YXBoot`
    },

    docFooter: {
      prev: '上一页',
      next: '下一页'
    },

    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium'
      }
    },

    outline: {
      label: '页面导航'
    },

    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式'
  }
})
