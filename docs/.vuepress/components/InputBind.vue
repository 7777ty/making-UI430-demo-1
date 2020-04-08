<template>
    <div style="padding-top: 16px;">
        <h2>该输入框还支持双向绑定</h2>
        <p>
            <strong>预览</strong>
        </p>

        <g-input v-model="message"></g-input>
        {{message}}
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
        data () {
            return {

                message:'双向绑定的内容'
            }
        }
    }
</script>

<style lang='scss' scoped>

</style>