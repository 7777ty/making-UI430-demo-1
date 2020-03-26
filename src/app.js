import Vue from 'vue'
import Button from "./Button";
import Icon from "./Icon";
import ButtonGroup from "./Button-group"

Vue.component('g-button', Button);
Vue.component('g-icon', Icon);
Vue.component('g-button-group', ButtonGroup);

new Vue({
    el: '#app',
    data: {
        loading1: false,
        loading2: true,
        loading3: false,
    }
});

import chai from 'chai'
import spies from 'chai-spies';

const expect = chai.expect;
chai.use(spies);


try {

    {
        const Constructor = Vue.extend(Button);
        const vm = new Constructor({
            propsData: {
                icon: 'shezhi'
            }
        });
        vm.$mount();
        let useElement = vm.$el.querySelector('use');
        let href = useElement.getAttribute('xlink:href');
        expect(href).to.eq('#icon-shezhi')
        vm.$el.remove();
        vm.$destroy()
    }
    {
        const Constructor = Vue.extend(Button);
        const vm = new Constructor({
            propsData: {
                icon: 'shezhi',
                loading:true
            }
        });
        vm.$mount();
        let useElement = vm.$el.querySelector('use');
        let href = useElement.getAttribute('xlink:href');
        expect(href).to.eq('#icon-dengdai')
        vm.$el.remove();
        vm.$destroy()

    }
    {
        const div =document.createElement('div');
        document.body.appendChild(div)
        const Constructor = Vue.extend(Button);
        const vm = new Constructor({
            propsData: {
                icon: 'shezhi'
            }
        });
        vm.$mount(div);
        let svg = vm.$el.querySelector('svg');
        let order =window.getComputedStyle(svg).order;
        expect(order).to.eq('1');
        vm.$el.remove();
        vm.$destroy()
    }
    {
        const div =document.createElement('div');
        document.body.appendChild(div);
        const Constructor = Vue.extend(Button);
        const vm = new Constructor({
            propsData: {
                icon: 'shezhi',
                iconPosition:'right'
            }
        });
        vm.$mount(div);
        let svg = vm.$el.querySelector('svg');
        let order =window.getComputedStyle(svg).order;
        expect(order).to.eq('2');
        vm.$el.remove();
        vm.$destroy()
    }
    {
        const div =document.createElement('div');
        document.body.appendChild(div)
        const Constructor = Vue.extend(Button);
        const vm = new Constructor({
            propsData: {
                icon: 'shezhi',
                iconPosition:'right'
            }
        });
        vm.$mount(div);
        let svg = vm.$el.querySelector('svg');
        let order =window.getComputedStyle(svg).order;
        expect(order).to.eq('2');
        vm.$el.remove();
        vm.$destroy()
    }
    {
        const Constructor = Vue.extend(Button);
        const vm = new Constructor({
            propsData: {
                icon: 'shezhi',
            }
        });
        vm.$mount();
        const spy = chai.spy(function () {
        });
        vm.$on('click', spy);
        let button = vm.$el;
        button.click();
        expect(spy).to.have.been.called();
    }

}catch (error) {
    window.errors = [error]
}