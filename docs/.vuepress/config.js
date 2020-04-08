module.exports = {
    base:'/UI430-website/',
    title: 'UI430',
    description: '一个好用的UI轮子',
    themeConfig: {
        nav:[
            {text:'主页',link:'/'},
            {text:'文档',link:'/guide'},
            {text:'交流',link:'https://google.com'},
        ],
        sidebar: [
            {
                title: '入门',
                children: [
                    '/install/',
                    '/getStarted/',
                ]
            },
            {
                title:'组件',
                children:['/components/button','/components/input','/components/tabs','/components/popover','/components/toast','/components/grid','/components/layout','/components/collapse']
            },
        ]
    }

};