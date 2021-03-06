<template>
    <div class="toastWrapper" :class="toastClasses">
        <div class="toast" ref="toast" >
            <div class="message">
                <slot v-if="!enableHtml"></slot>
                <div v-else v-html="$slots.default[0]"></div>
            </div>
            <div class="line" ref="line"></div>
            <span class="close" v-if="closeButton" @click="onClickClose">{{closeButton.text}}</span>
        </div>
    </div>

</template>

<script >
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
            },
            position:{
                type:String,
                default:'top',
                validator(value){
                    return ['top','bottom','middle'].indexOf(value)>=0
                }
            }
        },
        mounted(){
            this.updateStyles();
            this.execAutoClose();
        },
        methods:{
            updateStyles(){
                this.$nextTick(()=>{
                    this.$refs.line.style.height=
                    `${this.$refs.toast.getBoundingClientRect().height}px`
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
                this.$emit('beforeClose');
                this.$destroy();
            },
            onClickClose()
            {
                this.close();
                if(this.closeButton&& typeof  this.closeButton.callback==='function'){
                    this.closeButton.callback(this)
                }

            }

        },
        computed:{
            toastClasses(){
               return {
                   [`position-${this.position}`]:true
               }
            }
        }

    }
</script>

<style lang='scss' scoped>
    $font-size:14px;
    $toast-min-height:40px;
    $toast-background:rgba(0,0,0,0.75);
    @keyframes slide-up {
        0%{opacity: 0;transform: translateY(100%)}
        100%{opacity: 1;transform: translateY(0%)}
    }
    @keyframes slide-down {
         0%{opacity: 0;transform: translateY(-100%)}
         100%{opacity: 1;transform: translateY(0%)}
     }
    @keyframes fade-in {
        0%{opacity: 0;}
        100%{opacity: 1;}
    }
    .toastWrapper{
        position: fixed;
        left: 50%;
        transform: translateX(-50%);
        &.position-top{
            top: 0;
            .toast{
                border-top-left-radius: 0;
                border-top-right-radius: 0;
                animation: slide-down 500ms;
            }
        }
        &.position-bottom{
            bottom: 0;
            .toast{
                border-bottom-left-radius: 0;
                border-bottom-right-radius: 0;
                animation: slide-up 500ms;
            }

        }
        &.position-middle{
            top:50%;
            transform: translateX(-50%) translateY(-50%);
            .toast{
                animation: fade-in 500ms;
            }
        }
    }
    .toast{
        color: white;
        line-height: 1.8;
        min-height: $toast-min-height;
        font-size: $font-size;
        left: 50%;
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
            cursor: pointer;
        }
        .line{
            height: 100%;
            border-left: 1px solid #666;
            margin-left: 16px;
        }
    }
</style>