---
title:Tabs
sidebarDepth:2
---

# Tabs 标签页
<Tabs></Tabs>

```html
<g-tabs :selected="selected">
            <g-tabs-head>
                <g-tabs-item name="1">用户管理</g-tabs-item>
                <g-tabs-item name="2">配置管理</g-tabs-item>
                <g-tabs-item name="3">角色管理</g-tabs-item>
            </g-tabs-head>
            <g-tab-body>
                <g-tabs-pane name="1">用户管理</g-tabs-pane>
                <g-tabs-pane name="2">配置管理</g-tabs-pane>
                <g-tabs-pane name="3">角色管理</g-tabs-pane>
            </g-tab-body>
        </g-tabs>
```

```ts
<script lang='ts'>
    import Tabs from '../../../src/Tabs.vue';
    import TabsBody from'../../../src/Tabs-body'
    import TabsHead from'../../../src/Tabs-head'
    import TabsItem from'../../../src/Tabs-item'
    import TabsPane from'../../../src/Tabs-pane'
    export default {
        components:{
            'g-tabs':Tabs,
            'g-tabs-head':TabsHead,
            'g-tab-body':TabsBody,
            'g-tabs-item':TabsItem,
            'g-tabs-pane':TabsPane
        },
        data () {
            return {
                selected:'1'
            }
        }
    }
</script>
```