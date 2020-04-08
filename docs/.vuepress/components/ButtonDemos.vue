<template>
    <div style="padding-top: 16px;">
        <h2>Button简单用法</h2>
        <p>
            <strong>简介</strong>
        </p>
        <ul>
            <li>1.icon属性用于设置按钮的图标，所支持图标详见本站图标库。</li>
            <li>2.将loading属性动态绑定，可以使其在点击后出现loading图标。</li>
            <li>3.icon-position属性可以设置按钮内图标方向，仅接受'left''right'两种值。</li>
            <li>4.设置disabled属性可以禁用该按钮。</li>
        </ul>
        <p>
            <strong>预览</strong>
        </p>
        <g-button>默认按钮</g-button>
        <g-button icon="shezhi">默认按钮</g-button>
        <g-button icon="shezhi" icon-position="right">默认按钮</g-button>
        <g-button :loading="true">默认按钮</g-button>
        <g-button disabled>默认按钮</g-button>
        <p>
            <strong>代码实例</strong>
        </p>
    </div>
</template>

<script>
    import Button from '../../../src/Button.vue';

    export default {
        components:{
            'g-button':Button,

        },

    }

</script>

<style lang='scss' scoped>
    *{
    list-style: none;
    }
</style>