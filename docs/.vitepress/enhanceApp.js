export default {
    // VitePress의 클라이언트 애플리케이션 설정을 강화하는 함수
    enhanceApp({ app, router, siteData }) {
      // 마우스 우클릭 금지 이벤트 리스너 추가
      document.addEventListener('contextmenu', function (e) {
        e.preventDefault();
      });
    }
  }
  