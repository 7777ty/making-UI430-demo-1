<template>
    <label class="wrapper" :class="{error}">
        <input :value="value" :disabled="disabled" type="text" :readonly="readonly">
        <template v-if="error">
            <Icon name="error" class="icon-error"></Icon>
            <span class="error-message">{{error}}</span>
        </template>
    </label>
</template>

<script lang='ts'>
    import Icon from './Icon.vue';
    export default{
        components: {Icon},
        props:{
        value:{
            type:String
        },
        disabled:{
            type:Boolean,
            default:false
        },
        readonly:{
            type:Boolean,
            default: false,
        },
        error:{
            type:String
        }
    }
    }
</script>

<style lang='scss' scoped>
    $height:32px;
    $border-color:#999;
    $border-color-hover:#666;
    $border-radius:4px;
    $font-size:12px;
    $red: #F1453D;
    .wrapper{
        font-size: $font-size;
        display: inline-flex;
        align-items: center;
        > :not(:last-child){
            margin-right: 0.5em;
        }
        > input{
            height: $height;
            border:1px solid $border-color;
            outline-style: none;
            border-radius: $border-radius;
            padding: 0 8px;
            font-size: inherit;
            $box-shadow-color:rgba(0,0,0,0.5);
            &:hover{
                border-color: $border-color-hover;
            }
            &:focus{
                box-shadow: inset 0 1px 1px $box-shadow-color;
                outline: none;
            }
            &[disabled],&[readonly]{
                border-color: #bbb;
                color: #bbb;
                cursor: not-allowed;
            }
        }
        &.error{
            > input{border-color:$red; }
        }
        .icon-error{
            fill:$red;
        }
        .error-message{
            color:$red;
        }
    }
</style>