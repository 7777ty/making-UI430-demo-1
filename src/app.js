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
import Tabs from "./Tabs"
import TabsHead from "./Tabs-head"
import TabsItem from "./Tabs-item"
import TabsBody from "./Tabs-body"
import TabsPane from "./Tabs-pane"
import Popover from "./Popover"
import Collapse from "./Collapse";
import CollapseItem from "./Collapse-item"

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
Vue.component('g-tabs-head',TabsHead);
Vue.component('g-tabs-item',TabsItem);
Vue.component('g-tabs-body',TabsBody);
Vue.component('g-tabs-pane',TabsPane);
Vue.component('g-popover',Popover);
Vue.component('g-tabs',Tabs);
Vue.component('g-collapse',Collapse);
Vue.component('g-collapse-item',CollapseItem);

Vue.use(plugin);

new Vue({
    el: '#app',
    data: {

            selectedTab: ['2','3']
    },
    created(){

    },
    methods: {

    }
});
