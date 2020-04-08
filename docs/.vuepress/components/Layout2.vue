<template>
    <div style="padding-top: 16px;">
        <h2>有侧边栏sider的布局</h2>
        <p>
            <strong>预览</strong>
        </p>
        <g-layout style="color: white; overflow:hidden; margin-bottom:50px;">
            <g-header style="height: 50px; background:lightskyblue;">
                header
            </g-header>
            <g-layout>
                <g-sider style="height: 100px; background:#ddd; width:200px; color: black;">
                    sider
                </g-sider>
                <g-content style="height: 100px; background:deepskyblue;">
                    content
                </g-content>
            </g-layout>
            <g-footer style="height: 50px; background:lightskyblue;">
                footer
            </g-footer>
        </g-layout>

        <p>
            <strong>代码实例</strong>
        </p>

    </div>
</template>

<script lang='ts'>

    import Layout from '../../../src/Layout.vue';
    import Header from '../../../src/Header.vue';
    import Footer from '../../../src/Footer.vue';
    import Content from '../../../src/Content.vue';
    import Sider from '../../../src/Sider.vue';

    export default {
        components:{
            'g-layout':Layout,
            'g-header':Header,
            'g-footer':Footer,
            'g-content':Content,
            'g-sider':Sider
        },
    }
</script>

<style lang='scss' scoped>
    *{
        box-sizing: border-box;
        list-style: none;
    }

</style>
