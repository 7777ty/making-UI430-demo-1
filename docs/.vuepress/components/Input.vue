<template>
    <div style="padding-top: 16px;">
        <h2>Input简单用法</h2>
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
        <g-input value="这是一个默认的输入框"></g-input>
        <g-input value="这是一个只读的输入框" readonly></g-input>
        <g-input value="这是一个被禁用的输入框" disabled></g-input>
        <g-input error="这是一个可以报错的输入框"></g-input>
        <p>
            <strong>代码实例</strong>
        </p>
    </div>
</template>

<script lang='ts'>
    import Input from '../../../src/Input.vue';
    export default {
        components:{
            'g-input':Input
        },

    }
</script>

<style lang='scss' scoped>
    *{
    list-style: none;
    }
    .wrapper{
        padding: 5px 0;
    }
</style>