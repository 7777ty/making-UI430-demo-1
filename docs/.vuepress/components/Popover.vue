<template>
    <div>
        <h2>Popover简单用法</h2>
        <p>
            <strong>简介</strong>
        </p>
        <ul>
            <li>1.position属性用于设置弹出框的方向，仅接受'top','bottom','left','right'四种值。</li>
        </ul>
        <p>
            <strong>预览</strong>
        </p>
        <g-popover position="top">
            <g-button>上弹出</g-button>
            <template slot="content">
                弹出内容
            </template>
        </g-popover>
        <g-popover position="bottom">
            <g-button>下弹出</g-button>
            <template slot="content">
                弹出内容
            </template>
        </g-popover>
        <g-popover position="left">
            <g-button>左弹出</g-button>
            <template slot="content">
                弹出内容
            </template>
        </g-popover>
        <g-popover position="right">
            <g-button>右弹出</g-button>
            <template slot="content">
                弹出内容
            </template>
        </g-popover>
        <p>
            <strong>代码实例</strong>
        </p>
    </div>
</template>

<script lang='ts'>
    import Popover from '../../../src/Popover';
    import Button from '../../../src/Button.vue';

    export default {
        components:{
            'g-popover':Popover,
            'g-button':Button,
        }
    }
</script>

<style lang='scss' scoped>
    *{
        list-style: none;
    }
</style>