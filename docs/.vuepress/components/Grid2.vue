<template>
    <div style="padding-top: 16px;">
        <h2>设置间隔（gutter）</h2>
        <p>
            <strong>预览</strong>
        </p>
        <g-row class="demoRow" gutter="10">
            <g-col span="8">
                <div class="demoCol">8</div>
            </g-col>
            <g-col span="8">
                <div class="demoCol">8</div>
            </g-col>
            <g-col span="8">
                <div class="demoCol">8</div>
            </g-col>
        </g-row>
        <g-row class="demoRow" gutter="10">
            <g-col span="6">
                <div class="demoCol">6</div>
            </g-col>
            <g-col span="6">
                <div class="demoCol">6</div>
            </g-col>
            <g-col span="6">
                <div class="demoCol">6</div>
            </g-col>
            <g-col span="6">
                <div class="demoCol">6</div>
            </g-col>
        </g-row>
        <g-row class="demoRow" gutter="10">
            <g-col span="4">
                <div class="demoCol">4</div>
            </g-col>
            <g-col span="4">
                <div class="demoCol">4</div>
            </g-col>
            <g-col span="4">
                <div class="demoCol">4</div>
            </g-col>
            <g-col span="4">
                <div class="demoCol">4</div>
            </g-col>
            <g-col span="4">
                <div class="demoCol">4</div>
            </g-col>
            <g-col span="4">
                <div class="demoCol">4</div>
            </g-col>
        </g-row>
        <g-row class="demoRow" gutter="10">
            <g-col span="2">
                <div class="demoCol">2</div>
            </g-col>
            <g-col span="2">
                <div class="demoCol">2</div>
            </g-col>
            <g-col span="2">
                <div class="demoCol">2</div>
            </g-col>
            <g-col span="2">
                <div class="demoCol">2</div>
            </g-col>
            <g-col span="2">
                <div class="demoCol">2</div>
            </g-col>
            <g-col span="2">
                <div class="demoCol">2</div>
            </g-col>
            <g-col span="2">
                <div class="demoCol">2</div>
            </g-col>
            <g-col span="2">
                <div class="demoCol">2</div>
            </g-col>
            <g-col span="2">
                <div class="demoCol">2</div>
            </g-col>
            <g-col span="2">
                <div class="demoCol">2</div>
            </g-col>
            <g-col span="2">
                <div class="demoCol">2</div>
            </g-col>
            <g-col span="2">
                <div class="demoCol">2</div>
            </g-col>
        </g-row>

        <p>
            <strong>代码预览</strong>
        </p>
    </div>
</template>

<script lang='ts'>

    import Row from '../../../src/Row.vue';
    import Col from '../../../src/Col.vue';

    export default {
        components:{
            'g-row':Row,
            'g-col':Col
        }
    }
</script>

<style lang='scss' scoped>
    * {
        box-sizing: border-box;
    }
    .demoRow{
        margin: 10px 0;
    }
    .demoCol {
        height: 50px;
        border: 1px solid #ccc;
        background: #eee;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>