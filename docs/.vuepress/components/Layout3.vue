<template>
    <div style="padding-top: 16px;">
        <h2>侧边栏sider在外侧的布局</h2>
        <p>
            <strong>预览</strong>
        </p>
        <g-layout style="color: white; overflow:hidden; margin-bottom:50px;">
            <g-sider style=" background:#ddd; width:200px; color: black;">
                sider
            </g-sider>
            <g-layout>
                <g-header style="height: 50px; background:lightskyblue;">
                    header
                </g-header>
                <g-content style="height: 100px; background:deepskyblue;">
                    content
                </g-content>
                <g-footer style="height: 50px; background:lightskyblue;">
                    footer
                </g-footer>
            </g-layout>
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
