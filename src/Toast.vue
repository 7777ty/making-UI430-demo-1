<template>
    <div class="toast" ref="toast">
        <div class="message">
            <slot v-if="!enableHtml"></slot>
            <div v-else v-html="$slots.default[0]"></div>
        </div>
        <div class="line" ref="line"></div>
        <span class="close" v-if="closeButton" @click="onClickClose">{{closeButton.text}}</span>
    </div>
</template>

<script lang='ts'>
    export default {
        props:{
            autoClose: {
                type:Boolean,
                default:true
            },
            autoCloseDelay:{
                type:Number,
                default: 5
            },
            closeButton:{
                type:Object,
                default(){      //如果default的值是一个对象，那么就应该写成函数，这与组件的可复用性有关（详见Vue文档或他人博客）
                    return{
                        text:'关闭',
                        callback:undefined
                    }
                }
            },
            enableHtml:{
                type:Boolean,
                default:false
            }
        },
        mounted(){
            this.updateStyles();
            this.execAutoClose();


        },
        methods:{
            updateStyles(){
                this.$nextTick(()=>{
                    `${this.$refs.line.style.height=this.$refs.toast.getBoundingClientRect().height}px`
                })

            },
            execAutoClose(){
                if(this.autoClose){
                    setTimeout(()=>{
                        this.close()
                    },this.autoCloseDelay*1000)
                }
            },
            close(){
                this.$el.remove();
                this.$destroy();
            },
            log(){
              console.log('测试')
            },
            onClickClose()
            {
                this.close();
                if(this.closeButton&& typeof  this.closeButton.callback==='function'){
                    this.closeButton.callback(this)
                }

            }

        }
    }
</script>

<style lang='scss' scoped>
    $font-size:14px;
    $toast-min-height:40px;
    $toast-background:rgba(0,0,0,0.75);
    .toast{
        color: white;
        position: fixed;
        line-height: 1.8;
        min-height: $toast-min-height;
        font-size: $font-size;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        display: flex;
        align-items: center;
        background: $toast-background;
        border-radius: 4px;
        box-shadow: 0 0 3px 0 rgba(0,0,0,0.5);
        padding: 0 16px;
        .message{
            padding: 8px 0;
        }
        .close{
            padding-left: 16px;
            flex-shrink: 0;
        }
        .line{
            height: 100%;
            border-left: 1px solid #666;
            margin-left: 16px;
        }
    }

</style>