module.exports = {
  themeConfig: {
    subSidebar: 'auto',
    displayAllHeaders: true, // 默认值：false
    type: 'blog',
    lang: 'zh-CN',
    title: '刘渊的网站',
    lastUpdated: '文章最后更新时间',
    friendLink: [
      {
        title: '知音必答',
        desc: '网上冲浪发现的一个dalao',
        logo: "https://www.quickask.net/assets/icons/logo.png",
        link: 'https://www.quickask.net/'
      },
      {
        title: '前端日志',
        desc: '有丰富的前端知识',
        logo:'',
        link: 'https://lmjben.github.io/blog/js-jsBridge.html#js-native'
      }
    ],
    authorAvatar: '/icon.png',
    nav: [
      { text: '首页', link: '/' , icon:'reco-home'},
      {
        text: '学习笔记',link: '/accumulation/JS/'
        // items: [
        //   { text: '前端', link: '/accumulation/JS/' },
        //   { text: 'Python', link: '/accumulation/Python/' }
        // ]
      },
      {
         text: '面试宝典',
         items: [
          { text: '面试基础积累', link: '/Interview/my/' },
          { text: '公司面试题', link: '/Interview/company/' },
      ]
    },
      { text: '算法积累', link: '/algorithm/' },
      { text: '文章积累', link: '/article/' },
      { text: '工具箱', link: '/tool/' },
      { text: '关于我', link: '/about/' },
      { text: '标签', link: '/tag/' },
      { text: '分类', 
        items: [
          { text: '前端', link: '/categories/前端/' },
        ]
      },
      { text: 'TimeLine', link: '/timeline/', icon: 'reco-date' },
      { text: '我的博客', link: 'https://luckyryan-web.github.io/' },
      { text: 'Github', link: 'https://github.com/LuckyRyan-web/' }
    ],
    sidebar: {
      '/accumulation/JS/':[
        { 
          title: '前端',
          collapsable: false,
          children:[
            '开发风格',
            '包管理工具'
          ]
        }
      ],
      // '/accumulation/Python/':[
      //   { 
      //     title: 'Python',
      //     collapsable: false,
      //     children:[
      //       ''
      //     ]
      //   }
      // ],
      '/Interview/my/':[
        { 
          title:'Javascript',
          collapsable:true,
          children:[
            '闭包',
            '变量拼接问题',
            '变量声明顺序的问题',
            '等号的区别',
            '渐进增强和优雅降级',
            '去重',
            '运算表达式的问题',
            'data的属性是什么',
            'ES6语法',
            'instanceof',
            'JS封装',
            'JS构造函数的继承',
            'JS非构造函数的继承',
            'JS加载的方式',
            'JS箭头函数',
            'JS判断数据类型的方法和区别',
            'JS实例',
            'JS原型链',
            'JS原型详解'
          ]
        },
        { 
          title:'Javascript面试题案例',
          collapsable:true,
          children:[
            '节流防抖的实现',
            '如何阻止冒泡事件和默认事件',
            '三种存储方式的区别',
            '实现JS的深浅拷贝',
            '微任务和宏任务',
            '限制promise的并发数量',
            '域名',
            'get和post的区别',
            'HTTP请求的方式',
            'JS如何避免全局变量污染',
            'JS实现数组的find方法',
            'JS数组有对象的形式去重',
            'JS中存储的方式',
            'JS中this的指向',
            'Json字符串和JavaScript对象区别',
            'NaN是什么数据类型',
            'new操作符都实现了什么',
            'Promise',
            'promise的链式调用',
            'promise解决多个异步回调问题',
            'typeof的原理'
          ]
        },
        { 
          title:'Vue面试题案例',
          collapsable:true,
          children:[
            'vue组件通信的6种方法',
          ]
        },
        { 
          title: 'CSS',
          collapsable: true,
          children:[
            'BFC',
            '盒子模型',
            'CSS绘制直角梯形',
            'CSS属性的继承',
            'CSS样式覆盖问题',
            'CSS隐藏元素的方式和区别',
            '垂直居中问题',
            '如何解决img底下空白',
            '无闪烁样式'
          ]
        },
        { 
          title:'计算机基础知识',
          collapsable:true,
          children:[
            '从浏览器输入URl到显示出页面的过程',
            '计算机的五层协议',
          ]
        },
      ],
      '/Interview/company/':[
        { 
          title:'Javascript',
          collapsable:true,
          children:[
            '',
            '节流防抖的实现',
            'JS实现数组的find方法'
          ]
        }
      ],
      '/algorithm/':[
        '两数相加',
        '深度优先遍历和广度优先遍历'
      ],
      '/article/': [
        '',
      ],
      '/about/': [
        '',
        'todo'
      ],
      '/tool/':[
        ''
      ]
    }
  },
  plugins: ['@vuepress/last-updated']
  // algolia: {
  //   apiKey: '<API_KEY>',
  //   indexName: '<INDEX_NAME>'
  // },
  // lastUpdated: 'Last Updated'
}