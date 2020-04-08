<template>
    <div style="padding-top: 16px;">
        <h2>Collapse手风琴简单用法</h2>
        <p>
            <strong>简介</strong>
        </p>
        <ul>
            <li>1.single属性可以设置每次展开的内容是否仅唯一</li>
            <li>2.title属性用于设置标题名。</li>
            <li>3.selected可以于设置初始展开页</li>
        </ul>
        <p>
            <strong>预览</strong>
        </p>
        <g-collapse :selected.sync="selectedTab" single>
            <g-collapse-item  title="标题1" name="1">内容1</g-collapse-item>
            <g-collapse-item class="title2" title="标题2" name="2">内容2</g-collapse-item>
            <g-collapse-item class="title3" title="标题3" name="3">内容3</g-collapse-item>
        </g-collapse>
        <p>
            <strong>代码实例</strong>
        </p>
    </div>
</template>

<script lang='ts'>

    import Collapse from '../../../src/Collapse.vue';
    import CollapseItem from '../../../src/Collapse-item.vue';
    export default {
        components:{
            'g-collapse':Collapse,
            'g-collapse-item':CollapseItem
        },
        data(){
            return{
                selectedTab:['2']
            }
        }

    }
</script>

<style lang='scss' scoped>
    *{
        list-style: none;
    }

    .title2{
        background: #ccc;
    }
    .title3{
        background: #bbb;
    }


</style>