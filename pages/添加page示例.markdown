---
# 引用模板
# 可选：default | page | post | static
layout: page

# url路由
permalink: /example/

# page标题
title: 添加page示例

# 导航和面板icon
# 默认: 无icon
# 可选：http://www.bootstrapicons.com/index.htm?version=3.0.2
icon: leaf

# 面板风格：
# 默认： 无风格
# 可选: info | success | danger | warning | primary
style: info

# 是否加到导航栏
# 默认false
# 可选：true | false
addNavbar: true

# 是否在导航栏进行强调
# 默认flase
# 可选：false | [颜色值]
navbarStress: false

# 页面描述（seo）
# 默认false
# 可选：false | [描述文本]
desc: false

# 是否发表
# 默认: true
# 可选：true | false
published: false
---

!!! 重要 !!!
根据需要使用合适的后缀
需要解析 markdown 语法，使用 .markdown 后缀
不需要解析 markdown 语法，而是一般的html页面，则使用 .html 后缀

!!! 重要 !!!
导航栏的顺序由文件名控制

#### 标题1
    我是标题1的内容   
    
#### 标题2
    我是标题2的内容   
    
#### 标题3   
    我是标题3的内容   
