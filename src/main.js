import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Vant from 'vant';
import 'vant/lib/index.css';
import { Dialog } from 'vant';
import VueQrcode from '@chenfengyuan/vue-qrcode';
Vue.component(VueQrcode.name, VueQrcode);
import HuiWeb from 'hui-web';
import 'hui-web/dist/css/hui-web.min.css';
import store from "../store";

import vueFilePreview from 'gxd-file-preview';
import VueResource from 'vue-resource';

//初始化自定义插件，（pdf.js,worker.js文件建议放在本地服务器),cdn有可能不稳定
Vue.use(vueFilePreview,{
  pdf: 'https://cdn.jsdelivr.net/npm/pdfjs-dist@2.0.288/build/pdf.min.js', //pdf插件
  worker:'https://cdn.jsdelivr.net/npm/pdfjs-dist@2.0.288/build/pdf.worker.min.js',//pdf.work插件
});



Vue.use(Dialog);
Vue.use(Vant);
Vue.use(ElementUI);
Vue.use(HuiWeb);
Vue.use(VueResource);

Vue.config.productionTip = false

var app = new Vue({
  store,
  router,
  render: function (h) { return h(App) }
}).$mount('#app')
!function(n){
  var  e=n.document,
    t=e.documentElement,
    i=375,
    d=i/100,
    o="orientationchange"in n?"orientationchange":"resize",
    a=function(){
      var n=t.clientWidth||320;n>720&&(n=720);
      t.style.fontSize=n/d+"px"
    };
  e.addEventListener&&(n.addEventListener(o,a,!1),e.addEventListener("DOMContentLoaded",a,!1))
}(window);
