# 一个Vue UI组件轮子
[![Build Status](https://travis-ci.com/7777ty/making-UI430-demo-1.svg?branch=master)](https://travis-ci.com/7777ty/making-UI430-demo-1)

作者：7777ty

##介绍
这是我在巩固Vue时，造的一个Vue UI框架，希望对你有用。

##开始使用

## 安装
1. 添加CSS样式

    使用本框架前，请在CSS中开启border-box
    ```css
    *,*::before,*::after{box-sizing: border-box}
    ```
    IE8及以上浏览器都支持此样式。
    
    你还需要设置默认颜色等变量（后续会改为SCSS变量）
    ```css
            :root {
                --button-height: 32px;
                --font-size: 14px;
                --button-bg: white;
                --button-active-bg: #eee;
                --border-radius: 4px;
                --color: #333;
                --border-color: #999;
                --border-color-hover: #666;
    
            }
    ```
2. 安装UI430
    ```
    npm i --save ui430
    ```
3. 引入ui430
    ```
    import {Button,Buttongroup,Icon} from 'ui430'
    import 'ui430/dist/index.css'
   
    export default{
        name:'app',
        components:{
           'g-button':Button,
            'g-icon':Icon
        }          
    } 
   
    ```

##文档


##提问


##变更记录


##联系方式


##贡献代码
