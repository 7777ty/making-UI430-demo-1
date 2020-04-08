<template>
    <div style="padding-top: 16px;">
        <h2>设置关闭按钮</h2>
        <p>
            <strong>预览</strong>
        </p>
        <g-button @click="onClickButton">上方弹出</g-button>

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
        methods: {
            onClickButton() {
                this.$toast('<strong style="color:red">红色加粗字体 </strong>', {
                    enableHtml:true
                })
            }
        }
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