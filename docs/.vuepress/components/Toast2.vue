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