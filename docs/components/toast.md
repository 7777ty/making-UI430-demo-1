---
title:Toast
sidebarDepth:2
---

# Toast 吐司弹出
<Toast1></Toast1>
 ```html

<style>
    .toastWrapper {
        z-index: 30 !important;
    }
</style>

<g-button @click="$toast('点击弹出提示',{position:'top',autoClose:false})">上方弹出</g-button>
<g-button @click="$toast('点击弹出提示', {position:'middle',autoCloseDelay:1})">中间弹出</g-button>
<g-button @click="$toast('点击弹出提示', {position:'bottom'})">下方弹出</g-button>
```
<Toast2></Toast2>
```html
<style>
    .toastWrapper {
        z-index: 30 !important;
    }
</style>

<g-button @click="onClickButton">上方弹出</g-button>
```
```ts
methods: {
            onClickButton() {
                this.$toast('你知道我在等你吗？', {
                    closeButton: {
                        text: '知道了',
                        callback: () => {
                            console.log('他说知道了')
                        }
                    }
                })
            }
        }
```
<Toast3></Toast3>
```html
<style>
    .toastWrapper {
        z-index: 30 !important;
    }
</style>

<g-button @click="onClickButton">上方弹出</g-button>
```
```ts
methods: {
            onClickButton() {
                this.$toast('<strong style="color:red">红色加粗字体 </strong>', {
                    enableHtml:true
                })
            }
        }
```