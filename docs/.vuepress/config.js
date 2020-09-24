module.exports = {
  themeConfig: {
    type: 'blog',
    nav: [
      { text: '首页', link: '/', icon: 'reco-home'},
      // {text: '学习笔记',link: '/accumulation/',},
      // {text: '面试宝典',link: '/interview/',},
      // { text: '算法积累', link: '/algorithm/' },
      // { text: '优文转载', link: '/article/' },
      // { text: '工具箱', link: '/tool/' },
      // { text: '学习日记', link: '/about/' },

      // {text: '学习笔记',link: '/nav.01.accumulation/',},
      // {text: '面试宝典',link: '/nav.02.interview/',},
      // { text: '算法积累', link: '/nav.03.algorithm/' },
      // { text: '优文转载', link: '/nav.04.article/' },
      // { text: '工具箱', link: '/nav.05.tool/' },
      // { text: '学习日记', link: '/nav.06.about/' },
      { text: 'TimeLine', link: '/timeline/', icon: 'reco-date' },
      { text: '我的博客', link: 'https://luckyryan-web.github.io/' },
      { text: 'Github', link: 'https://github.com/LuckyRyan-web/' },
    ],
    // sidebar: [] //Without Navbar
    sidebar:{ //With Navbar
      '/nav.01.accumulation/' : [{title: '积累'}]
    }
  },
  subSidebar: 'auto',   //文章标题的侧边栏
  plugins: [
    'permalink-pinyin',
    ['autobar', {
       pinyinNav: true, 
       addReadMeToFirstGroup: false, //将README.md添加到侧边栏的第一组中
       skipEmptySidebar: true,  //如果目录为空，请勿将项目添加到侧栏
       MultipleSideBar:false  //	如果有导航栏项目，请创建多个侧栏
      }
    ]
  ],
  // algolia: {
  //   apiKey: '<API_KEY>',
  //   indexName: '<INDEX_NAME>'
  // },
  // lastUpdated: 'Last Updated'
};
