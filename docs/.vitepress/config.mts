import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "클리포",
  description: "처음 시작 가이드",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/',
    nav: [
      { text: '홈', link: '/' },
      { text: '클리포로 이동', link: 'https://clipo.ai' },
      { text: '도입 문의', link: 'https://clipo.ai/helps/pricing-guide' }
    ],

    sidebar: [
        {
          text: '클리포 시작하기',
          collapsed: false,
          items: [
            { text: '회원가입', link: '/manual/signup' },
            { text: '로그인', link: '/manual/login' },
            { text: '교사인증', link: '/manual/teacher-verification' }
            ]  
          }
        ]
      },
    socialLinks: [
      { icon: 'youtube', link: 'https://www.youtube.com/@clipo-ai' }
    ],
    footer: {
      copyright: 'Copyright © 2024 Datadriven'
    },
    search: {
      provider: 'local'
    }
  })
