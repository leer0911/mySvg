module.exports = {
  title: '📚 SVG',
  description: 'svg secrets',
  dest: 'vuepress',
  base,
  head: [
    [
      'link',
      {
        rel: 'icon',
        href: `/logo.png`
      }
    ]
  ],
  serviceWorker: true,
  themeConfig: {
    repo: 'leer0911/mySvg',
    editLinks: true,
    docsDir: 'docs',
    nav: [],
    sidebar: {}
  }
};
