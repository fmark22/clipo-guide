import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "클리포",
  description: "처음 시작 가이드",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '홈', link: '/' },
      { text: '클리포로 이동', link: 'https://clipo.ai' },
      { text: '도입 문의', link: 'https://clipo.ai/helps/pricing-guide' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],
    socialLinks: [
      { icon: 'youtube', link: 'https://github.com/vuejs/vitepress' }
    ],
    footer: {
      copyright: 'Copyright © 2024 Datadriven'
    },
    search: {
      provider: 'local'
    }
  }
})
