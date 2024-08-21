import { defineConfig } from 'vitepress'

// TypeScript에 타입을 명시적으로 추가
interface MarkdownConfig {
  config: (md: any) => void
}

export default defineConfig({
  title: "클리포 가이드",
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
    ['link', { rel: 'stylesheet', href: '/styles.css' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
    ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Nanum+Gothic&display=swap' }],
     
    // Open Graph meta tags
    ['meta', { property: 'og:title', content: '클리포 가이드' }],
    ['meta', { property: 'og:description', content: '클리포를 쉽게 배워보세요' }],
    ['meta', { property: 'og:image', content: '/public/og.png' }],
    ['meta', { property: 'og:url', content: 'https://guide.clipo.ai' }],
    ['meta', { property: 'og:type', content: 'website' }],
  ],
  sitemap: {
    hostname: "https://guide.clipo.ai",
  },
  // 기본 테마 설정
  themeConfig: {
    // logo: '/',
    search: {
      provider: 'local', // 기본 제공 로컬 검색 기능 사용
    },
    nav: [
      { text: '홈', link: '/' },
      { text: '클리포로 이동', link: 'https://clipo.ai' },
      { text: '연수 및 도입 문의', link: 'https://clipo.ai/helps/pricing-guide' }
    ],
    sidebar: {
    '/teacher/': [
      {
        text: '클리포 시작하기',
        collapsed: false,
        items: [
          //{ text: '<strong>클리포 시작하기</strong>' },
          { text: '회원가입', link: '/teacher/account/signup' },
          { text: '로그인', link: '/teacher/account/login' },
          { text: '비밀번호 변경', link: '/teacher/account/password' },
          { text: '교사인증', link: '/teacher/account/teacher-verification' },
          { text: '내정보', link: '/teacher/account/myinfo' }
        ]
      },
      {
        text: '학교정보',
        collapsed: false,
        items: [
          { text: '학기설정', link: '/teacher/school/semester' },
          { text: '선생님 관리', link: '/teacher/school/teachers' },
          { text: '학생 관리', link: '/teacher/school/students' }
        ]
      },
      {
        text: '수업 관리',
        collapsed: false,
        items: [
          { text: '수업 등록', link: '/teacher/course/make' },
          { text: '수업 홈', link: '/teacher/course/home' },
          { text: '참여학생 등록', link: '/teacher/course/student' },
          { text: '관찰 기록', link: '/teacher/course/record' }
        ]
      },
      {
        text: '수행평가 설계',
        collapsed: false,
        items: [
          { text: '등록', link: '/teacher/assessment/make' },
        ]
      },
      {
        text: '수행평가 과제',
        collapsed: false,
        items: [
          { text: '등록', link: '/teacher/assessment_task/make' },
          { text: '관리', link: '/teacher/assessment_task/manage' },
          { text: 'PDF 업로드', link: '/teacher/assessment_task/upload' },
        ]
      },
      {
        text: '수행평가 채점',
        collapsed: false,
        items: [
          { text: '채점', link: '/teacher/assessment_grade/grading' },
          { text: 'AI Assistant', link: '/teacher/assessment_grade/assistant' },
          { text: '채점 결과', link: '/teacher/assessment_grade/result' }
        ]
      },
      {
        text: '종합기록', link: '/teacher/records/make',
        collapsed: false,
        items: [
          { text: '종합기록 생성', link: '/teacher/records/make' }
        ]
      },
      {
        text: '리포트',
        collapsed: false,
        items: [
          { text: '등록', link: '/teacher/reports/make' },
          { text: '확인', link: '/teacher/reports/see' },
          { text: '공유', link: '/teacher/reports/share' }
        ]
      },
      {
        text: 'AI 커뮤니티', link: '/teacher/community/content',
        items: [
          { text: '', link: '/teacher/community/content' }
        ]
      }
    ],
    '/student/': [
      {
        text: '클리포 시작하기',
        collapsed: false,
        items: [
          { text: '로그인', link: '/student/account/login' },
          { text: '비밀번호 변경', link: '/student/account/password' },
          { text: '홈화면', link: '/student/account/home' }
        ]
      },
      {
        text: '과제 제출 및 결과 확인',
        collapsed: false,
        items: [
          { text: '과제 제출', link: '/student/assessment/submit' },
          { text: '과제 확인', link: '/student/assessment/check' },
          { text: '과제 결과 확인', link: '/student/assessment/results' }
        ]
      },
      {
        text: '리포트 확인',
        collapsed: false,
        items: [
          { text: '리포트 조회', link: '/student/reports/see' },
          { text: '리포트 확인', link: '/student/reports/check' },
        ]
      },
      {
        text: '기초진단',
        collapsed: false,
        items: [
          { text: '기초진단 시작', link: '/student/basic/start' },
          { text: '기초진단 결과 확인', link: '/student/basic/results' },
        ]
      }
    ],
    '/video/': [
      {
        text: '기본 소개',
        collapsed: false,
        items: [
          { text: '소개', link: '/video/intro' },
          { text: '설계 이념', link: '/video/philosophy' },
          { text: '주요 기능', link: '/video/features' },
        ]
      },
      {
        text: '기능 소개',
        collapsed: false,
        items: [
          { text: '기본 설정', link: '/video/setting' },
          { text: '관찰 기록', link: '/video/records' },
          { text: '수행평가 설계', link: '/video/design' },
          { text: '수행평가 과제', link: '/video/tasks' },
          { text: '수행평가 채점', link: '/video/grading' },
          { text: '수행평가 자동 채점', link: '/video/aigrading' },
          { text: '종합 기록', link: '/video/recording' },
          { text: '리포트', link: '/video/reports' },
        ]
      },
      {
        text: '<strong>온라인 연수</strong>', link: '/video/training'
      },
    ]
  },
    socialLinks: [
      { icon: 'youtube', link: 'https://www.youtube.com/@clipo-ai' }
    ],
    footer: { 
      copyright: 'Copyright © 2024 Datadriven'
    },
    outlineTitle: '개요',
    sidebarMenuLabel: '메뉴',
    returnToTopLabel: '🔼 맨 위로',
    docFooter: {
      prev: '이전',
      next: '다음'
    },
  }
})
