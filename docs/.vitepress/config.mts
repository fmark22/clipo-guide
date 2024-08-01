import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "클리포 매뉴얼",
  description: "처음 시작 가이드",
  head: [
    //구글 GA 설치
    [
      "script",
      {
        async: "",
        src: "https://www.googletagmanager.com/gtag/js?id=G-RJSLGW428L",
      },
    ],
    [
      "script",
      {},
      `window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-RJSLGW428L');`,
    ],
    //구글 tag manager 설치
    [
      "script",
      {},
      `(function(w,d,s,l,i){
        w[l]=w[l]||[];
        w[l].push({'gtm.start': new Date().getTime(), event:'gtm.js'});
        var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),
        dl=l!='dataLayer'?'&l='+l:'';
        j.async=true;
        j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
        f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-WXPK527L');
    `],
      // GTM noscript 추가
      ['noscript', {}, `
        <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WXPK527L" height="0" width="0" style="display:none;visibility:hidden"></iframe>
      `],
    //ms-clarity 설치
    ['script', { type: 'text/javascript' }, `
      (function(c,l,a,r,i,t,y){
          c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
          t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
          y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
      })(window, document, "clarity", "script", "net3mhon8c");
    `],
    ['link', { rel: 'stylesheet', href: '/styles.css' }]
  ],
  sitemap: {
    hostname: "https://clipo-guide.vercel.app/",
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/',
    nav: [
      { text: '홈', link: '/' },
      { text: '클리포로 이동', link: 'https://clipo.ai' },
      { text: '도입 문의', link: 'https://clipo.ai/helps/pricing-guide' }
    ],
    sidebar: {
    '/manual/': [
      {
        text: '클리포 시작하기',
        collapsed: false,
        items: [
          //{ text: '<strong>클리포 시작하기</strong>' },
          { text: '회원가입', link: '/manual/account/signup' },
          { text: '로그인', link: '/manual/account/login' },
          { text: '비밀번호 변경', link: '/manual/account/password' },
          { text: '교사인증', link: '/manual/account/teacher-verification' },
          { text: '내정보', link: '/manual/account/myinfo' }
        ]
      },
      {
        text: '학교정보',
        collapsed: false,
        items: [
          { text: '학기설정', link: '/manual/school/semester' },
          { text: '선생님 관리', link: '/manual/school/teachers' },
          { text: '학생 관리', link: '/manual/school/students' }
        ]
      },
      {
        text: '수업 관리',
        collapsed: false,
        items: [
          { text: '수업 홈', link: '/manual/course/home' },
          { text: '참여학생 등록', link: '/manual/course/student' },
          { text: '관찰 기록', link: '/manual/course/record' }
        ]
      },
      {
        text: '수행평가 설계',
        collapsed: false,
        items: [
          { text: '등록', link: '/manual/assessment/make' },
        ]
      },
      {
        text: '수행평가 과제',
        collapsed: false,
        items: [
          { text: '등록', link: '/manual/assessment_task/make' },
          { text: '관리', link: '/manual/assessment_task/manage' },
          { text: 'PDF 업로드', link: '/manual/assessment_task/upload' },
        ]
      },
      {
        text: '수행평가 채점',
        collapsed: false,
        items: [
          { text: '채점', link: '/manual/assessment_grade/grading' },
          { text: 'AI Assistant', link: '/manual/assessment_grade/ai-assisatant' },
          { text: '채점 결과', link: '/manual/assessment_grade/ai-assisatant/result' }
        ]
      },
      {
        text: '종합기록',
        collapsed: false,
        items: [
          { text: '종합기록 생성', link: '/manual/records/make' }
        ]
      },
      {
        text: '리포트',
        collapsed: false,
        items: [
          { text: '등록', link: '/manual/reports/make' },
          { text: '확인', link: '/manual/reports/see' },
          { text: '공유', link: '/manual/reports/share' }
        ]
      },
      {
        text: 'AI 커뮤니티',
        collapsed: false,
        items: [
          { text: '목록', link: '/manual/community/list' },
          { text: '만들기', link: '/manual/community/make' },
          { text: '요청', link: '/manual/community/request' }
        ]
      }
    ],
    '/manualS/': [
      {
        text: '클리포 시작하기',
        collapsed: false,
        items: [
          //{ text: '<strong>클리포 시작하기</strong>' },
          { text: '로그인', link: '/manualS/account/login' },
          { text: '비밀번호 변경', link: '/manualS/account/password' },
          { text: '홈화면', link: '/manualS/account/home' }
        ]
      },
      {
        text: '과제 제출 및 결과 확인',
        collapsed: false,
        items: [
          { text: '과제 제출', link: '/manualS/assessment/submit' },
          { text: '과제 확인', link: '/manualS/assessment/check' },
          { text: '과제 결과 확인', link: '/manualS/assessment/results' }
        ]
      },
      {
        text: '리포트 확인',
        collapsed: false,
        items: [
          { text: '리포트 조회', link: '/manualS/reports/see' },
          { text: '리포트 확인', link: '/manualS/reports/check' },
        ]
      },
      {
        text: '기초진단',
        collapsed: false,
        items: [
          { text: '기초진단 시작', link: '/manualS/basic/start' },
          { text: '기초진단 결과 확인', link: '/manualS/basic/results' }
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
    },
    outlineTitle: '개요',
    docFooter: {
      prev: '이전',
      next: '다음'
    }
  }
})
