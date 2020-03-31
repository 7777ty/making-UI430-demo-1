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

new Vue({
    el: '#app',
    data: {
        loading1: false,
        loading2: true,
        loading3: false,
    }
});
