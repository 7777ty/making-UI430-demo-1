<template>
    <div style="padding-top: 16px;">
        <h2>this.$toast简单用法</h2>
        <p>
            <strong>简介</strong>
        </p>
        <ul>
            <li>1.position属性用于设置弹出框的方向，仅接受'top','bottom','left','right'四种值。</li>
            <li>2.autoClose属性用于设定弹出框是否关闭，接受一个布尔值。</li>
            <li>3.autoCloseDelay属性用于设置弹出框的自动关闭事件，单位为秒。</li>
            <li>4.可通过closeButton属性的text值设置关闭按钮文本，此外它还可以接受一个回调函数，在点击关闭按钮后调用这个回调函数。</li>
            <li>5.enableHtml属性用于设定弹出框是否支持HTML，接受一个布尔值。</li>

        </ul>
        <p>
            <strong>预览</strong>
        </p>
        <g-button @click="$toast('点击弹出提示',{position:'top',autoClose:false})">上方弹出</g-button>
        <g-button @click="$toast('点击弹出提示', {position:'middle',autoCloseDelay:1})">中间弹出</g-button>
        <g-button @click="$toast('点击弹出提示', {position:'bottom'})">下方弹出</g-button>
        <p>
            <strong>代码实例</strong>
        </p>

    </div>
</template>

<script lang='ts'>
    import Vue from 'vue';
    import Button from '../../../src/Button.vue';
    import plugin from '../../../src/plugin';
    Vue.use(plugin);
    export default {
        components:{
            'g-button':Button
        },
    }
</script>

<style lang='scss' scoped>
    *{
        list-style: none;
    }

</style>
<style>
    .toastWrapper {
        z-index: 30 !important;
    }

</style>