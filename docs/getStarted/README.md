---
title:快速上手
---

# 快速上手

1. 使用本框架前请将CSS的盒模型设置为border-box
```css
*,*::before,*::after{
    box-sizing: border-box;
}
```

2.引入ui430就像平时使用Vue组件一样
```js
import { Button, ButtonGroup, Icon } from "ui430";
import "ui430/dist/index.css";
import Vue from 'vue'

new Vue({
          name: "app",
          components: {
            "g-button": Button,
            "g-icon": Icon,
            "g-button-group": ButtonGroup
          }
        }) 
```