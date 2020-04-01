import Toast from'./Toast'
//js 引用Vue组件 详见方应杭知乎博客


let currentToast;

export default {
    install(Vue,options){
        Vue.prototype.$toast=function (message,toastOptions) {
            if(currentToast){
                currentToast.close();
            }
            currentToast = createToast({
                Vue,
                message,
                propsData: toastOptions,
                onClose: () => {
                    currentToast = null
                }
            })
        }
    }
};



/* helpers */
function createToast({Vue,message,propsData,onClose}){
    let Constructor =Vue.extend(Toast);
    let toast =new Constructor({propsData});
    toast.$slots.default=[message];
    toast.$mount();
    toast.$on('beforeClose',onClose);
    document.body.appendChild(toast.$el);
    return toast
}