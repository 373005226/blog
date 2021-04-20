# 这个是我的个人网站

网站使用 vuepress 搭建

插件说明

[Vuepress 实现 vue 的 demo 示例](https://docs.chenjianhui.site/vuepress-plugin-demo-container/zh/#%E5%AE%83%E6%98%AF%E5%A6%82%E4%BD%95%E5%B7%A5%E4%BD%9C%E7%9A%84%EF%BC%9F)

## snippets 变量参考文档


[snippets 变量参考文档](https://juejin.cn/post/6844903869424599053)

## 使用方法

### markdown 在 vscode 中无法触发智能提示情况下

打开 vscode 设置，输入 quickSuggestions 查询 editor.quickSuggestions 选项打开 setting.json 然后写入如下配置

```json
"[markdown]": {
  "editor.quickSuggestions": {
    "other": true,
    "comments": false,
    "strings": true
  },
},

```

markdown 模板

```json
{
    "md-template": {
        "prefix": "md",
        "body": [
            "---",
            "  title: $TM_FILENAME",
            "  categories: $1",
            "---",
            "",
            "> 本片文章引用于：",
            "> [$1]($1)",
            "> "
        ],
        "description": "自动生成 md 模板文件"
    }
}

```