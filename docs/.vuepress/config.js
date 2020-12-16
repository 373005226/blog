module.exports = {
  themeConfig: {
    subSidebar: 'auto',
    displayAllHeaders: true, // 默认值：false
    type: 'blog',
    lang: 'zh-CN',
    title: '刘渊的网站',
    record: '粤ICP备2020117319号-1',
    recordLink: 'http://beian.miit.gov.cn',
    lastUpdated: '文章最后更新时间',
    algolia: {
      apiKey: '<API_KEY>',
      indexName: '<INDEX_NAME>',
    },
    friendLink: [
      {
        title: '知音必答',
        desc: '网上冲浪发现的一个dalao',
        logo: 'https://www.quickask.net/assets/icons/logo.png',
        link: 'https://www.quickask.net/',
      },
      {
        title: '前端日志',
        desc: '有丰富的前端知识',
        logo: '',
        link: 'https://lmjben.github.io/',
      },
    ],
    authorAvatar: '/icon.png',
    nav: [
      { text: '首页', link: '/', icon: 'reco-home' },
      {
        text: '学习笔记',
        link: '/accumulation/',
        // items: [
        //   { text: '前端', link: '/accumulation/JS/' },
        //   { text: 'Python', link: '/accumulation/Python/' }
        // ]
      },
      {
        text: '面试宝典',
        link: '/Interview/',
      },
      { text: '源码学习', link: '/Code/' },
      { text: '算法积累', link: '/algorithm/' },
      // { text: '每日时报', link: '/article/' },
      { text: '工具箱', link: '/tool/' },
      { text: '标签', link: '/tag/' },
      { text: '分类', items: [{ text: '前端', link: '/categories/前端/' }] },
      // { text: 'TimeLine', link: '/timeline/', icon: 'reco-date' },
      { text: '我的博客', link: 'https://luckyryan-web.github.io/' },
      { text: 'Github', link: 'https://github.com/LuckyRyan-web/' },
    ],
    sidebar: {
      '/accumulation/': [
        {
          title: '前端',
          collapsable: false,
          children: ['JS/开发风格', 'JS/包管理工具', 'JS/前端模块化', 'JS/AMD'],
        },
        {
          title: 'Git',
          collapsable: false,
          children: ['Git/撤销代码', 'Git/修改注释'],
        },
      ],
      '/Interview/': [
        {
          title: 'Javascript',
          collapsable: true,
          children: [
            {
              title: '基本数据类型',
              collapsable: true,
              children: ['JS/NaN是什么数据类型', 'JS/运算表达式的问题', 'JS/data的属性是什么'],
            },
            {
              title: '闭包',
              collapsable: true,
              children: ['JS/闭包'],
            },
            {
              title: '变量声明',
              collapsable: true,
              children: ['JS/变量拼接问题', 'JS/变量声明顺序的问题'],
            },
            {
              title: '数据类型检测',
              collapsable: true,
              children: [
                'JS/JS判断数据类型的方法和区别',
                'JS/instanceof',
                'JS/typeof的原理',
                'JS/等号的区别',
                'JS/0.1+0.2.md'
              ],
            },
            {
              title: '数组去重',
              collapsable: true,
              children: ['JS/去重', 'JS/JS数组有对象的形式去重', 'JS/数组的交并差补'],
            },
            {
              title: 'Event Loop',
              collapsable: true,
              children: [
                'JS/微任务和宏任务',
                'JS/Node中的EventLoop',
                'JS/Promise',
                'JS/promise的链式调用',
                'JS/promise解决多个异步回调问题',
                'JS/限制promise的并发数量',
                'JS/JS加载的方式',
                'JS/发起请求的失败.md'
              ],
            },
            {
              title: '原型与原型链',
              collapsable: true,
              children: [
                'JS/JS封装',
                'JS/JS构造函数的继承',
                'JS/JS非构造函数的继承',
                'JS/JS实例',
                'JS/JS原型链',
                'JS/JS原型详解',
              ],
            },
            {
              title: 'this',
              collapsable: true,
              children: ['JS/JS中this的指向'],
            },
            {
              title: 'ES6语法',
              collapsable: true,
              children: ['JS/ES6语法', 'JS/JS箭头函数'],
            },
            {
              title: '面向对象',
              collapsable: true,
              children: ['JS/new操作符都实现了什么'],
            },
            {
              title: '手写源码系列',
              collapsable: true,
              children: [
                'JS/节流防抖的实现',
                'JS/如何阻止冒泡事件和默认事件',
                'JS/实现JS的深浅拷贝',
                'JS/JS实现数组的find方法',
              ],
            },
            {
              title: 'JS存储',
              collapsable: true,
              children: ['JS/三种存储方式的区别', 'JS/域名', 'JS/JS中存储的方式','JS/Localstorage缓存淘汰机制.md'],
            },
            {
              title: '其他',
              collapsable: true,
              children: ['JS/JS如何避免全局变量污染', 'JS/Json字符串和JavaScript对象区别'],
            },
          ],
        },
        {
          title: 'CSS',
          collapsable: true,
          children: [
            'CSS/BFC',
            'CSS/盒子模型',
            'CSS/直角梯形',
            'CSS/属性的继承',
            'CSS/样式覆盖问题',
            'CSS/隐藏元素的方式和区别',
            'CSS/垂直居中问题',
            'CSS/如何解决img底下空白',
            'CSS/无闪烁样式',
            'CSS/隐藏元素的区别',
            'CSS/CSS常识',
            'CSS/CSS两列布局的N种实现',
            'CSS/宽度自适应'
          ],
        },
        {
          title: 'Vue面试题案例',
          collapsable: true,
          children: ['Vue/vue组件通信的方法'],
        },
        {
          title: '计算机基础知识',
          collapsable: true,
          children: [
            'Browser/从浏览器输入URl到显示出页面的过程',
            'Browser/从输入URL到显示',
            'Browser/计算机的五层协议',
            'Browser/渐进增强和优雅降级',
            'Browser/get和post的区别',
            'Browser/HTTP请求的方式',
            'Browser/HTTP详解',
          ],
        },
      ],
      '/Code/': [
        {
          title: 'Node源码学习',
          collapsable: false,
          children: ['Node/commonjs.md'],
        }
      ],
      '/algorithm/': [
        // {
        //   title: '数组相关',
        //   collapsable: false,
        //   children: ['Array/README.md'],
        // },
        {
          title: '字符串相关',
          collapsable: false,
          children: ['String/两数相加.md'],
        }
      ],
      // '/article/': [
      //   {
      //     title: '2020年12月',
      //     collapsable: false,
      //     children: ['2020-12-8'],
      //   },
      // ],
      '/about/': ['', 'todo'],
      '/tool/': [''],
    },
  },
  plugins: ['@vuepress/last-updated'],
};
