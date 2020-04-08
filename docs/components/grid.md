---
title:Grid
sidebarDepth:2
---

# Grid 网格系统

<Grid1></Grid1>
```html
        <g-row class="demoRow">
            <g-col span="8">
                <div class="demoCol">8</div>
            </g-col>
            <g-col span="8">
                <div class="demoCol">8</div>
            </g-col>
            <g-col span="8">
                <div class="demoCol">8</div>
            </g-col>
        </g-row>
        <g-row class="demoRow">
            <g-col span="6">
                <div class="demoCol">6</div>
            </g-col>
            <g-col span="6">
                <div class="demoCol">6</div>
            </g-col>
            <g-col span="6">
                <div class="demoCol">6</div>
            </g-col>
            <g-col span="6">
                <div class="demoCol">6</div>
            </g-col>
        </g-row>
        <g-row class="demoRow">
            <g-col span="4">
                <div class="demoCol">4</div>
            </g-col>
            <g-col span="4">
                <div class="demoCol">4</div>
            </g-col>
            <g-col span="4">
                <div class="demoCol">4</div>
            </g-col>
            <g-col span="4">
                <div class="demoCol">4</div>
            </g-col>
            <g-col span="4">
                <div class="demoCol">4</div>
            </g-col>
            <g-col span="4">
                <div class="demoCol">4</div>
            </g-col>
        </g-row>
        <g-row class="demoRow">
            <g-col span="2">
                <div class="demoCol">2</div>
            </g-col>
            <g-col span="2">
                <div class="demoCol">2</div>
            </g-col>
            <g-col span="2">
                <div class="demoCol">2</div>
            </g-col>
            <g-col span="2">
                <div class="demoCol">2</div>
            </g-col>
            <g-col span="2">
                <div class="demoCol">2</div>
            </g-col>
            <g-col span="2">
                <div class="demoCol">2</div>
            </g-col>
            <g-col span="2">
                <div class="demoCol">2</div>
            </g-col>
            <g-col span="2">
                <div class="demoCol">2</div>
            </g-col>
            <g-col span="2">
                <div class="demoCol">2</div>
            </g-col>
            <g-col span="2">
                <div class="demoCol">2</div>
            </g-col>
            <g-col span="2">
                <div class="demoCol">2</div>
            </g-col>
            <g-col span="2">
                <div class="demoCol">2</div>
            </g-col>
        </g-row>

<style lang='scss' scoped>
    * {
        box-sizing: border-box;
    }
</style>
```
<Grid2></Grid2>
```html
        <g-row class="demoRow" gutter="10">
            <g-col span="8">
                <div class="demoCol">8</div>
            </g-col>
            <g-col span="8">
                <div class="demoCol">8</div>
            </g-col>
            <g-col span="8">
                <div class="demoCol">8</div>
            </g-col>
        </g-row>
        <g-row class="demoRow" gutter="10">
            <g-col span="6">
                <div class="demoCol">6</div>
            </g-col>
            <g-col span="6">
                <div class="demoCol">6</div>
            </g-col>
            <g-col span="6">
                <div class="demoCol">6</div>
            </g-col>
            <g-col span="6">
                <div class="demoCol">6</div>
            </g-col>
        </g-row>
        <g-row class="demoRow" gutter="10">
            <g-col span="4">
                <div class="demoCol">4</div>
            </g-col>
            <g-col span="4">
                <div class="demoCol">4</div>
            </g-col>
            <g-col span="4">
                <div class="demoCol">4</div>
            </g-col>
            <g-col span="4">
                <div class="demoCol">4</div>
            </g-col>
            <g-col span="4">
                <div class="demoCol">4</div>
            </g-col>
            <g-col span="4">
                <div class="demoCol">4</div>
            </g-col>
        </g-row>
        <g-row class="demoRow" gutter="10">
            <g-col span="2">
                <div class="demoCol">2</div>
            </g-col>
            <g-col span="2">
                <div class="demoCol">2</div>
            </g-col>
            <g-col span="2">
                <div class="demoCol">2</div>
            </g-col>
            <g-col span="2">
                <div class="demoCol">2</div>
            </g-col>
            <g-col span="2">
                <div class="demoCol">2</div>
            </g-col>
            <g-col span="2">
                <div class="demoCol">2</div>
            </g-col>
            <g-col span="2">
                <div class="demoCol">2</div>
            </g-col>
            <g-col span="2">
                <div class="demoCol">2</div>
            </g-col>
            <g-col span="2">
                <div class="demoCol">2</div>
            </g-col>
            <g-col span="2">
                <div class="demoCol">2</div>
            </g-col>
            <g-col span="2">
                <div class="demoCol">2</div>
            </g-col>
            <g-col span="2">
                <div class="demoCol">2</div>
            </g-col>
        </g-row>

<style lang='scss' scoped>
    * {
        box-sizing: border-box;
    }
</style>
```
<Grid3></Grid3>
```html
        <g-row class="demoRow" gutter="10">
            <g-col span="8">
                <div class="demoCol">8</div>
            </g-col>
            <g-col span="8" offset="8">
                <div class="demoCol">8</div>
            </g-col>
        </g-row>
        <g-row class="demoRow" gutter="10">
            <g-col span="6" offset="6">
                <div class="demoCol">6</div>
            </g-col>
            <g-col span="6" offset="6">
                <div class="demoCol">6</div>
            </g-col>
        </g-row>
        <g-row class="demoRow" gutter="10">
            <g-col span="4">
                <div class="demoCol">4</div>
            </g-col>
            <g-col span="4" offset="4">
                <div class="demoCol">4</div>
            </g-col>
            <g-col span="4" offset="8">
                <div class="demoCol">4</div>
            </g-col>
        </g-row>
        <g-row class="demoRow" gutter="10">
            <g-col span="2">
                <div class="demoCol">2</div>
            </g-col>
            <g-col span="2" offset="2">
                <div class="demoCol">2</div>
            </g-col>
            <g-col span="2">
                <div class="demoCol">2</div>
            </g-col>
            <g-col span="2" offset="2">
                <div class="demoCol">2</div>
            </g-col>
            <g-col span="2">
                <div class="demoCol">2</div>
            </g-col>
            <g-col span="2" offset="2">
                <div class="demoCol">2</div>
            </g-col>
            <g-col span="2">
                <div class="demoCol">2</div>
            </g-col>
            <g-col span="2" offset="2">
                <div class="demoCol">2</div>
            </g-col>
        </g-row>



<style lang='scss' scoped>
    * {
        box-sizing: border-box;
    }
</style>
```