module.exports = {
  // theme: 'reco',
  themeConfig: {
    // modePicker: false,
    displayAllHeaders: true, // 默认值：false
    type: 'blog',
    nav: [
      { text: '首页', link: '/' , icon:'reco-home'},
      {
        text: '学习笔记',
        items: [
          { text: '前端', link: '/accumulation/JS/' },
          { text: 'Python', link: '/accumulation/Python/' }
        ]
      },
      {
         text: '面试宝典',
         items: [
          { text: '面试基础积累', link: '/interview/my/' },
          { text: '公司面试题', link: '/interview/company/' },
      ]
    },
      { text: '算法积累', link: '/algorithm/' },
      { text: '优文转载', link: '/article/' },
      { text: '工具箱', link: '/tool/' },
      { text: 'TimeLine', link: '/timeline/', icon: 'reco-date' },
      { text: '学习日记', link: '/about/' },
      { text: '我的博客', link: 'https://luckyryan-web.github.io/' },
      { text: 'Github', link: 'https://github.com/LuckyRyan-web/' }
    ],
    // sidebar: 'auto',
  },
  plugins: {
    "vuepress-plugin-auto-sidebar": {
      // collapseList: [
      //   "/about/",
      // ],
      collapsable:true,
      sidebarDepth:2,
      titleMap: {
        "interview": "前端基础面试题",
        "JavaScript":"JavaScript基础知识",
        "article": "前端优化类",
        "tool": "常用工具栏",
        "company":"凡科面试题",
        "about":"关于我",
        "my": "JavaScript面试题",
        "JS":"前端工程化",
        "timeLine":"简介"
    	}
    }
  }
  // algolia: {
  //   apiKey: '<API_KEY>',
  //   indexName: '<INDEX_NAME>'
  // },
  // lastUpdated: 'Last Updated'
}