const path = require('path')

module.exports = {
    themeConfig: {
        subSidebar: 'auto',
        search: true,
        displayAllHeaders: true, // 默认值：false
        type: 'blog',
        lang: 'zh-CN',
        title: '刘渊的网站',
        record: '粤ICP备2020117319号-1',
        recordLink: 'http://beian.miit.gov.cn',
        lastUpdated: '文章最后更新时间',
        // algolia: {
        //     apiKey: '<API_KEY>',
        //     indexName: '<INDEX_NAME>'
        // },
        friendLink: [
            {
                title: '知音必答',
                desc: '网上冲浪发现的一个dalao',
                logo: 'https://www.quickask.net/assets/icons/logo.png',
                link: 'https://www.quickask.net/'
            },
            {
                title: '前端日志',
                desc: '有丰富的前端知识',
                logo: '',
                link: 'https://lmjben.github.io/'
            }
        ],
        authorAvatar:
            'https://avatars.githubusercontent.com/u/28999580?s=460&u=064f01b792abf774ee8236da3a227dd334b8ddd4&v=4',
        nav: [
            { text: '首页', link: '/', icon: 'reco-home' },
            {
                text: '学习笔记',
                link: '/accumulation/'
                // items: [
                //   { text: '前端', link: '/accumulation/JS/' },
                //   { text: 'Python', link: '/accumulation/Python/' }
                // ]
            },
            {
                text: '面试宝典',
                link: '/Interview/'
            },
            { text: '源码学习', link: '/Code/' },
            { text: '算法积累', link: '/algorithm/' },
            { text: '文章积累', link: '/article/' },
            { text: '工具箱', link: '/tool/' },
            { text: '标签', link: '/tag/' },
            { text: '分类', items: [{ text: '前端', link: '/categories/前端/' }] },
            // { text: 'TimeLine', link: '/timeline/', icon: 'reco-date' },
            { text: '我的博客', link: 'https://luckyryan-web.github.io/' },
            { text: 'Github', link: 'https://github.com/LuckyRyan-web/' }
        ],
        sidebar: {
            '/accumulation/': [
                {
                    title: '前端',
                    collapsable: false,
                    children: ['JS/开发风格', 'JS/包管理工具', 'JS/前端模块化', 'JS/AMD']
                },
                {
                    title: 'Git',
                    collapsable: false,
                    children: ['Git/撤销代码', 'Git/修改注释', 'Git/缓存代码']
                }
            ],
            '/Interview/': [
                {
                    title: 'Javascript',
                    collapsable: false,
                    children: [
                        {
                            title: '基本数据类型',
                            collapsable: false,
                            children: [
                                'JS/基本数据类型/NaN是什么数据类型',
                                'JS/基本数据类型/运算表达式的问题',
                                'JS/基本数据类型/data的属性是什么'
                            ]
                        },
                        {
                            title: '数据类型检测',
                            collapsable: false,
                            children: [
                                'JS/数据类型检测/JS判断数据类型的方法和区别',
                                'JS/数据类型检测/instanceof',
                                'JS/数据类型检测/typeof的原理',
                                'JS/数据类型检测/等号的区别',
                                'JS/数据类型检测/0.1+0.2.md',
                                'JS/数据类型检测/Json字符串和JavaScript对象区别',
                                'JS/数据类型检测/JS如何避免全局变量污染',
                                'JS/数据类型检测/stringfly和parse的区别'
                            ]
                        },
                        {
                            title: '变量声明',
                            collapsable: false,
                            children: [
                                'JS/变量声明/变量拼接问题',
                                'JS/变量声明/变量声明顺序的问题',
                                'JS/变量声明/闭包',
                                'JS/变量声明/闭包copy',
                                'JS/变量声明/JS中this的指向'
                            ]
                        },
                        {
                            title: '数组',
                            collapsable: false,
                            children: [
                                'JS/数组/去重',
                                'JS/数组/JS数组有对象的形式去重',
                                'JS/数组/数组的交并差补',
                                'JS/数组/不产生新数组，删除数组里的重复元素'
                            ]
                        },
                        {
                            title: '面向对象',
                            collapsable: false,
                            children: ['JS/面向对象/new操作符都实现了什么']
                        },
                        {
                            title: 'ES6语法',
                            collapsable: false,
                            children: [
                                'JS/ES6语法/ES6语法',
                                'JS/ES6语法/JS箭头函数',
                                'JS/ES6语法/ES6解构赋值',
                                'JS/ES6语法/Symbol',
                                'JS/ES6语法/Map与Set'
                            ]
                        },
                        {
                            title: 'Event Loop',
                            collapsable: false,
                            children: [
                                'JS/JS事件流/微任务和宏任务',
                                'JS/JS事件流/Node中的EventLoop',
                                'JS/JS事件流/Promise',
                                'JS/JS事件流/promise的链式调用',
                                'JS/JS事件流/promise解决多个异步回调问题',
                                'JS/JS事件流/限制promise的并发数量',
                                'JS/JS事件流/JS加载的方式',
                                'JS/JS事件流/发起请求的失败.md'
                            ]
                        },
                        {
                            title: '原型与原型链',
                            collapsable: false,
                            children: [
                                'JS/原型与原型链/JS封装',
                                'JS/原型与原型链/JS构造函数的继承',
                                'JS/原型与原型链/JS非构造函数的继承',
                                'JS/原型与原型链/JS实例',
                                'JS/原型与原型链/JS原型链',
                                'JS/原型与原型链/JS原型详解'
                            ]
                        },
                        {
                            title: '手写源码系列',
                            collapsable: false,
                            children: [
                                'JS/手写源码系列/节流防抖的实现',
                                'JS/手写源码系列/如何阻止冒泡事件和默认事件',
                                'JS/手写源码系列/实现JS的深浅拷贝',
                                'JS/手写源码系列/JS实现数组的find方法',
                                'JS/手写源码系列/手写bind'
                            ]
                        },
                        {
                            title: 'JS存储',
                            collapsable: false,
                            children: [
                                'JS/JS存储/三种存储方式的区别',
                                'JS/JS存储/域名',
                                'JS/JS存储/JS中存储的方式',
                                'JS/JS存储/Localstorage缓存淘汰机制.md'
                            ]
                        }
                    ]
                },
                {
                    title: 'Typesscript',
                    collapsable: false,
                    children: ['TS/ts简便操作', 'TS/ts中的泛型']
                },
                {
                    title: 'CSS',
                    collapsable: false,
                    children: [
                        {
                            title: '基础',
                            collapsable: false,
                            children: [
                                'CSS/CSS常识',
                                'CSS/属性的继承',
                                'CSS/样式覆盖问题',
                                'CSS/隐藏元素的方式和区别',
                                'CSS/无闪烁样式',
                                'CSS/直角梯形',
                                'CSS/如何解决img底下空白',
                                'CSS/隐藏元素的区别'
                            ]
                        },
                        {
                            title: '布局',
                            collapsable: false,
                            children: [
                                'CSS/垂直居中问题',
                                'CSS/CSS两列布局的N种实现',
                                'CSS/宽度自适应'
                            ]
                        },
                        {
                            title: '盒子模型',
                            collapsable: false,
                            children: ['CSS/BFC', 'CSS/盒子模型']
                        }
                    ]
                },
                {
                    title: 'Vue面试题案例',
                    collapsable: false,
                    children: [
                        {
                            title: '组件通信',
                            collapsable: false,
                            children: ['Vue/vue组件通信的方法']
                        }
                    ]
                },
                {
                    title: '计算机基础知识',
                    collapsable: false,
                    children: [
                        {
                            title: '基础',
                            collapsable: false,
                            children: [
                                'Browser/从浏览器输入URl到显示出页面的过程',
                                'Browser/从输入URL到显示',
                                'Browser/计算机的五层协议',
                                'Browser/渐进增强和优雅降级',
                                'Browser/get和post的区别'
                            ]
                        },
                        {
                            title: 'HTTP',
                            collapsable: false,
                            children: ['Browser/HTTP请求的方式', 'Browser/HTTP详解']
                        }
                    ]
                }
            ],
            '/Code/': [
                {
                    title: 'Node源码学习',
                    collapsable: false,
                    children: ['Node/commonjs.md']
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
                    children: ['String/两数相加.md']
                },
                {
                    title: '栈',
                    collapsable: false,
                    children: ['栈/有效的括号.md']
                },
                {
                    title: '队列',
                    collapsable: false,
                    children: ['队列/最近的请求次数.md']
                },
                {
                    title: '链表',
                    collapsable: false,
                    children: ['链表/删除链表中的节点.md', '链表/反转链表.md']
                }
            ],
            '/article/': [
                {
                    title: 'JS基础题',
                    collapsable: false,
                    children: [
                        'JS每日一题/JavaScript中的类型转换机制.md',
                        'JS每日一题/JavaScript中的数据类型区别.md',
                        'JS每日一题/Javscript数组的常用方法有哪些.md',
                        'JS每日一题/Javscript字符串的常用方法有哪些.md',
                        'JS每日一题/JavaScript深拷贝与浅拷贝.md',
                        'JS每日一题/JavaScript== 和 ===区别.md'
                    ]
                },
                {
                    title: 'JS拓展',
                    collapsable: false,
                    children: ['全栈开发者/JavaScript数组反转.md']
                },
                {
                    title: 'JS面试题汇总',
                    collapsable: false,
                    children: ['掘金/字节跳动基础题.md', '其他/给定一组url实现并发请求.md']
                }
            ],
            '/about/': ['', 'todo'],
            '/tool/': ['']
        }
    },
    configureWebpack: {
        resolve: {
            alias: {
                '@code': path.join(__dirname, './code')
            }
        }
    },
    plugins: ['@vuepress/last-updated', 'demo-container']
}
