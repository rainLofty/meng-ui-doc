# 说明
使用vuePress+Vue制作的一个ui组件demo，仅供参考制作文档使用

## config.js 的代码

```js
module.exports = {
    title: 'meng-ui',
    description: 'ui组件',
    // 注入到当前页面的 HTML <head> 中的标签
    head: [
        ['link', {
            rel: 'icon',
            href: '/favicon.ico'
        }], 
    ],
    base: '/',
    markdown: {
        lineNumbers: true // 代码块显示行号
    },
    themeConfig: {
        nav: [{
                text: '使用说明',
                link: '/guide/'
            },
            {
                text: '组件',
                link: '/component/'
            },
            {
                text: 'API',
                link: '/api/'
            },
            {
                text: '更改日志',
                link: '/log/'
            },
        ],
        sidebar: {
            '/guide/': [''],
            '/component/': [
                '',
                'menginput',
                'mengnav',
            ],
            '/api/': [''],
            '/log/': [''],
        },
        sidebarDepth: 2
    },
};
```

## enhanceApp 的代码

```js
import Vue from 'vue'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/zzcommon.less'

import mengFunc from './utils/mengFunc';
Vue.prototype.mengFunc = mengFunc;

//引入组件
import mengInput from './components/mengInput'
import mengNav from './components/mengNav'
const components =[
    mengInput,
    mengNav,
];
components.install = function(Vue, opts = {}) {
    components.forEach((element) => {
      Vue.component(element.name, element);
    });
};
if (typeof window !== "undefined" && Vue) {
    Vue.use(components);
}
export default ({
    Vue,
}) => {
    Vue.use(Element);
}
```