import Vue from 'vue'
import Button from "./Button";
import Icon from "./Icon";
import ButtonGroup from "./Button-group"
import Input from "./Input";
import Col from "./Col"
import Row from "./Row"
import Layout from "./Layout"
import Content from "./Content"
import Footer from "./Footer"
import Header from "./Header"
import Sider from "./Sider"
import plugin from "./plugin";
import Toast from "./Toast"

Vue.component('g-button', Button);
Vue.component('g-icon', Icon);
Vue.component('g-button-group', ButtonGroup);
Vue.component('g-input',Input);
Vue.component('g-col',Col);
Vue.component('g-row',Row);
Vue.component('g-layout',Layout);
Vue.component('g-content',Content);
Vue.component('g-footer',Footer);
Vue.component('g-header',Header);
Vue.component('g-sider',Sider);
Vue.component('g-toast',Toast);
Vue.use(plugin);

new Vue({
    el: '#app',
    data: {
        loading1: false,
        loading2: true,
        loading3: false,
    },
    created(){
      this.$toast('很多文字',{
          closeButton:{
           text:'知道了',
              callback(toast){
               toast.log();
                  console.log('用户说他知道了');
              }
          }
      })
    },
    methods:{
        showToast(){
            this.$toast('我是message')
        }
    }
});
