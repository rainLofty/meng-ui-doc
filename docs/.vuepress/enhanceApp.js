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