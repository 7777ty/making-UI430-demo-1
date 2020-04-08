<template>
    <div style="padding-top: 16px;">
        <h2>ButtonGroup简单用法</h2>
        <p>
            <strong>预览</strong>
        </p>
        <g-button-group>
            <g-button icon="left">上一页</g-button>
            <g-button >更多</g-button>
            <g-button icon="right">下一页</g-button>
        </g-button-group>
        <p>
            <strong>代码实例</strong>
        </p>
    </div>
</template>

<script>
    import ButtonGroup from '../../../src/Button-group';
    import Button from '../../../src/Button.vue';
    export default {
        components:{
            'g-button-group':ButtonGroup,
            'g-button':Button,
        },
    }

</script>

<style lang='scss' scoped>

</style>