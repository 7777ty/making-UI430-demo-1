<template>
    <div class="collapseItem" @click="toggle">
        <div class="title">
            {{title}}
        </div>
        <div class="content" v-if="open">
            <slot></slot>
        </div>

    </div>
</template>

<script lang='ts'>
    export default {
        props:{
            title:{
                type:String,
                required:true,
            },
            name:{
                type:String,
                required: true
            }
        },
        data(){
            return{
                open:false,
            }
        },
        inject:['eventBus'],
        methods:{
            toggle(){
                if(this.open){
                    this.eventBus && this.eventBus.$emit('update:removeSelected',this.name)
                }else{
                    this.eventBus && this.eventBus.$emit('update:addSelected',this.name)
                }
            },
        },

        mounted(){
           this.eventBus && this.eventBus.$on('update:selected',(names)=>{
                this.open = names.indexOf(this.name) >= 0;
            })
        },

    }
</script>

<style lang='scss' scoped>
    $grey:#ddd;
    $border-radius:4px;
    .collapseItem{
        > .title{
            border: 1px solid $grey;
            margin-top: -1px;
            margin-right: -1px;
            margin-left:-1px;
            min-height: 32px;
            display: flex;
            align-items: center;
            padding: 0 8px;
        }
        &:first-child{
            > .title{
                border-top-left-radius:$border-radius ;
                border-top-right-radius: $border-radius;
            }
        }
        &:last-child{
            > .title:last-child{
                border-bottom-left-radius:$border-radius ;
                border-bottom-right-radius: $border-radius;
            }
        }
        > .content{
            padding: 8px;
        }

    }
</style>