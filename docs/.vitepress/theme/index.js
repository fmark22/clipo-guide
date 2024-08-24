import DefaultTheme from 'vitepress/theme';

export default {
  ...DefaultTheme,
  enhanceApp({ app, router, siteData }) {
    if (typeof window !== 'undefined') {
      window.addEventListener('contextmenu', (e) => {
        e.preventDefault();
      });
    }
  },
};
