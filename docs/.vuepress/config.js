module.exports = {
  // theme: 'reco',
  themeConfig: {
    // modePicker: false,
    displayAllHeaders: true, // 默认值：false
    type: 'blog',
    nav: [
      { text: '首页', link: '/', icon: 'reco-home',sidebar:false },
      {text: '学习笔记',link: '/accumulation/',},
      {text: '面试宝典',link: '/interview/',},
      { text: '算法积累', link: '/algorithm/' },
      { text: '优文转载', link: '/article/' },
      { text: '工具箱', link: '/tool/' },
      { text: '学习日记', link: '/about/' },
      { text: 'TimeLine', link: '/timeline/', icon: 'reco-date' },
      { text: '我的博客', link: 'https://luckyryan-web.github.io/' },
      { text: 'Github', link: 'https://github.com/LuckyRyan-web/' },
    ]
  },
  sidebar:{
    '/tool/':['']
  },
  plugins: ['permalink-pinyin', ['autobar', { pinyinNav: true ,addReadMeToFirstGroup:false }],'rpurl'],
  // algolia: {
  //   apiKey: '<API_KEY>',
  //   indexName: '<INDEX_NAME>'
  // },
  // lastUpdated: 'Last Updated'
};
