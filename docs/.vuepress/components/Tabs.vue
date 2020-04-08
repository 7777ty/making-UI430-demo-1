<template>
    <div style="padding-top: 16px;">
        <h2>Tabs简单用法</h2>
        <p>
            <strong>简介</strong>
        </p>
        <ul>
            <li>1.value属性用于设置输入框的默认值。</li>
            <li>2.设置disabled属性可以将该输入框设为只读。</li>
            <li>3.设置disabled属性可以禁用该输入框。</li>
            <li>4.使用error属性可以实现输入框的报错。</li>
        </ul>
        <p>
            <strong>预览</strong>
        </p>
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
        <p>
            <strong>代码实例</strong>
        </p>

    </div>
</template>

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

<style lang='scss' scoped>
    *{
        list-style: none;
    }

</style>