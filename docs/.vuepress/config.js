module.exports = {
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '我的博客', link: 'https://www.ly-blog.top/' },
      // { text: '学习笔记', link: '/accumulation/' },
      {
        text: '学习笔记',
        ariaLabel: 'Language Menu',
        items: [
          { text: 'HTML', link: '/accumulation/HTML/' },
          { text: 'CSS', link: '/accumulation/CSS/' },
          { text: 'JavaScript', link: '/accumulation/JavaScript/' },
          { text: 'Python', link: '/accumulation/Python/' }
        ]
      },
      { text: '面试宝典', link: '/Interview/' },
      { text: '算法积累', link: '/algorithm/' },
      { text: '优文转载', link: '/article/' },
      { text: '工具箱', link: '/tool/' },
      { text: '关于我', link: '/about/' },
    ],
    sidebar: 'auto'
  },
  plugins: {
    "vuepress-plugin-auto-sidebar": {
      collapsable:true
    }
  }
}