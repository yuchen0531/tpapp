webpackJsonp([0],{

/***/ "BfY/":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "JKao":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/private.0796dca.png";

/***/ }),

/***/ "NHnr":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm.js
var vue_esm = __webpack_require__("7+uW");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/App.vue
//
//
//
//
//
//
//
//

/* harmony default export */ var App = ({
  name: 'App'
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-d38623ce","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/App.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"app"}},[_c('router-view')],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var selectortype_template_index_0_src_App = (esExports);
// CONCATENATED MODULE: ./src/App.vue
function injectStyle (ssrContext) {
  __webpack_require__("BfY/")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  App,
  selectortype_template_index_0_src_App,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var src_App = (Component.exports);

// EXTERNAL MODULE: ./node_modules/vue-router/dist/vue-router.esm.js
var vue_router_esm = __webpack_require__("/ocq");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/views/Home.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

// import $ from 'jquery'
/* harmony default export */ var Home = ({
  name: 'Home',
  data: function data() {
    return {
      psw: '',
      account: '',
      newaccount: '',
      newpsw: '',
      newpsw2: '',
      successmodal: false,
      exist: false,
      checkbox: false,
      detail: false,
      wrongpsw: false,
      errorpsw: false,
      seepsw: false,
      seenewpsw2: false,
      seenewpsw: false,
      checkboxnotice: false
    };
  },
  created: function created() {
    this.account = document.querySelector('#mbNo').value;
    this.newaccount = document.querySelector('#mbNo').value;
    console.log(document.querySelector('#mbNo').value);
  },

  methods: {
    login: function login() {
      if (this.psw !== '' && this.account !== '') {
        this.successmodal = true;
      }
      this.errorpsw = true;
    },
    submit: function submit() {
      if (this.newpsw2 === '' || this.newpsw === '' || this.newpsw2 !== this.newpsw) {
        this.wrongpsw = true;
        return;
      }
      if (this.checkbox === false) {
        this.checkboxnotice = true;
        return;
      }
      if (this.newpsw2 !== '' && this.newpsw !== '' && this.newaccount !== '') {
        this.successmodal = true;
      }
    },
    closemodal: function closemodal(item) {
      this.successmodal = false;
      switch (item.type) {
        case 'disagree':
          console.log('不同意');
          break;
        case 'agree':
          console.log('同意');
          break;
        default:
      }
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-5d3b1474","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/views/Home.vue
var Home_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"home bg-first"},[_c('div',[_c('section',[(_vm.exist)?_c('div',{staticClass:"w-90 mx-auto pt-3 mb-1"},[_c('p',[_vm._v("綁定UUPON會員")])]):_c('div',{staticClass:"w-90 mx-auto pt-3 mb-1"},[_c('p',[_vm._v("快速註冊")]),_vm._v(" "),_c('p',[_vm._v("成為UUPON新會員")])])]),_vm._v(" "),_c('section',{staticClass:"d-flex justify-content-center mt-5"},[(_vm.exist)?_c('form',{attrs:{"action":""}},[_c('div',{staticClass:"d-flex p-2 bg-white input-frame"},[_c('p',{staticClass:"mb-0 mr-1"},[_vm._v("帳號")]),_vm._v(" "),_c('p',{staticClass:"text-gray"},[_vm._v(_vm._s(_vm.account))])]),_vm._v(" "),_c('div',{staticClass:"d-flex mt-3 p-2 bg-white input-frame"},[_c('p',{staticClass:"mb-0 mr-1"},[_vm._v("密碼")]),_vm._v(" "),(_vm.seepsw)?_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.psw),expression:"psw"}],attrs:{"type":"text"},domProps:{"value":(_vm.psw)},on:{"input":function($event){if($event.target.composing){ return; }_vm.psw=$event.target.value}}}):_vm._e(),_vm._v(" "),(!_vm.seepsw)?_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.psw),expression:"psw"}],attrs:{"type":"password"},domProps:{"value":(_vm.psw)},on:{"input":function($event){if($event.target.composing){ return; }_vm.psw=$event.target.value}}}):_vm._e(),_vm._v(" "),(_vm.seepsw)?_c('img',{attrs:{"src":__webpack_require__("gr1r"),"width":"20px","alt":""},on:{"click":function($event){_vm.seepsw = !_vm.seepsw}}}):_vm._e(),_vm._v(" "),(!_vm.seepsw)?_c('img',{attrs:{"src":__webpack_require__("JKao"),"width":"20px","alt":""},on:{"click":function($event){_vm.seepsw = !_vm.seepsw}}}):_vm._e()])]):_c('form',{attrs:{"action":""}},[_c('div',{staticClass:"d-flex p-2 bg-white input-frame"},[_c('p',{staticClass:"mb-0 mr-1"},[_vm._v("帳號")]),_vm._v(" "),_c('p',{staticClass:"text-gray"},[_vm._v(_vm._s(_vm.newaccount))])]),_vm._v(" "),_c('div',{staticClass:"d-flex justify-content-between mt-3 p-2 bg-white input-frame"},[_c('div',{staticClass:"d-flex"},[_c('p',{staticClass:"mb-0 mr-1"},[_vm._v("密碼")]),_vm._v(" "),(_vm.seenewpsw)?_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.newpsw),expression:"newpsw"}],attrs:{"type":"text"},domProps:{"value":(_vm.newpsw)},on:{"input":function($event){if($event.target.composing){ return; }_vm.newpsw=$event.target.value}}}):_vm._e(),_vm._v(" "),(!_vm.seenewpsw)?_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.newpsw),expression:"newpsw"}],attrs:{"type":"password"},domProps:{"value":(_vm.newpsw)},on:{"input":function($event){if($event.target.composing){ return; }_vm.newpsw=$event.target.value}}}):_vm._e()]),_vm._v(" "),(_vm.seenewpsw)?_c('img',{attrs:{"src":__webpack_require__("gr1r"),"width":"20px","alt":""},on:{"click":function($event){_vm.seenewpsw = !_vm.seenewpsw}}}):_vm._e(),_vm._v(" "),(!_vm.seenewpsw)?_c('img',{attrs:{"src":__webpack_require__("JKao"),"width":"20px","alt":""},on:{"click":function($event){_vm.seenewpsw = !_vm.seenewpsw}}}):_vm._e()]),_vm._v(" "),_c('div',{staticClass:"d-flex justify-content-between mt-3 p-2 bg-white input-frame"},[_c('div',{staticClass:"d-flex"},[_c('p',{staticClass:"mb-0 mr-1"},[_vm._v("再次輸入密碼")]),_vm._v(" "),(_vm.seenewpsw2)?_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.newpsw2),expression:"newpsw2"}],attrs:{"type":"text"},domProps:{"value":(_vm.newpsw2)},on:{"input":function($event){if($event.target.composing){ return; }_vm.newpsw2=$event.target.value}}}):_vm._e(),_vm._v(" "),(!_vm.seenewpsw2)?_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.newpsw2),expression:"newpsw2"}],attrs:{"type":"password"},domProps:{"value":(_vm.newpsw2)},on:{"input":function($event){if($event.target.composing){ return; }_vm.newpsw2=$event.target.value}}}):_vm._e()]),_vm._v(" "),(_vm.seenewpsw2)?_c('img',{attrs:{"src":__webpack_require__("gr1r"),"width":"20px","alt":""},on:{"click":function($event){_vm.seenewpsw2 = !_vm.seenewpsw2}}}):_vm._e(),_vm._v(" "),(!_vm.seenewpsw2)?_c('img',{attrs:{"src":__webpack_require__("JKao"),"width":"20px","alt":""},on:{"click":function($event){_vm.seenewpsw2 = !_vm.seenewpsw2}}}):_vm._e()]),_vm._v(" "),(_vm.wrongpsw)?_c('p',{staticClass:"text-center text-danger mt-2"},[_c('u',[_vm._v("密碼不一致")])]):_vm._e(),_vm._v(" "),_c('div',{staticClass:"d-flex mt-4 align-items-center justify-content-center"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.checkbox),expression:"checkbox"}],attrs:{"type":"checkbox"},domProps:{"checked":Array.isArray(_vm.checkbox)?_vm._i(_vm.checkbox,null)>-1:(_vm.checkbox)},on:{"change":function($event){var $$a=_vm.checkbox,$$el=$event.target,$$c=$$el.checked?(true):(false);if(Array.isArray($$a)){var $$v=null,$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&(_vm.checkbox=$$a.concat([$$v]))}else{$$i>-1&&(_vm.checkbox=$$a.slice(0,$$i).concat($$a.slice($$i+1)))}}else{_vm.checkbox=$$c}}}}),_vm._v(" "),_c('p',{staticClass:"mb-0 ml-1 text-white bg-second"},[_vm._v("同意UUPON"),_c('u',{staticClass:"h3",on:{"click":function($event){_vm.detail = true}}},[_vm._v("會員條款&使用者隱私權條款")])])]),_vm._v(" "),(_vm.checkboxnotice)?_c('p',{staticClass:"text-center text-danger mt-2 h3"},[_vm._v("*請先勾選同意")]):_vm._e(),_vm._v(" "),_c('div',{staticClass:"mt-4 mx-auto py-3 px-5 bg-second text-white w-fit font-weight-bold login-btn mb-3",on:{"click":_vm.submit}},[_vm._v("送出")])])]),_vm._v(" "),_c('section',[(_vm.errorpsw)?_c('div',{staticClass:"text-center text-danger mt-2"},[_c('p',[_vm._v("【輸入密碼錯誤】")]),_vm._v(" "),_c('p',{},[_vm._v("請重新確認密碼或到UUPON重設密碼")]),_vm._v(" "),_c('p',{staticClass:"h3"},[_vm._v("忘記密碼請聯繫UUPON客服")])]):_vm._e()]),_vm._v(" "),(_vm.exist)?_c('section',{},[_c('div',{staticClass:"mx-auto py-3 px-5 bg-second w-fit text-white font-weight-bold login-btn mt-5",on:{"click":_vm.login}},[_vm._v("確認登入")])]):_vm._e()]),_vm._v(" "),(_vm.successmodal)?_c('div',{staticClass:"modal-frame d-flex justify-cintent-center align-items-center"},[_c('div',{staticClass:"modal-box bg-white w-85 mx-auto"},[_vm._m(0),_vm._v(" "),_c('div',{staticClass:"p-3 text-center"},[_c('p',{staticClass:"h7"},[_vm._v("同意授權UUPON會員資料給台北通APP")]),_vm._v(" "),_c('div',{staticClass:"mt-4 d-flex justify-content-around mx-auto py-1"},[_c('div',{staticClass:"w-40 border py-2 mr-2",on:{"click":function($event){return _vm.closemodal({type: 'disagree'})}}},[_vm._v("不同意")]),_vm._v(" "),_c('div',{staticClass:"w-40 border py-2",on:{"click":function($event){return _vm.closemodal({type: 'agree'})}}},[_vm._v("同意")])])])])]):_vm._e(),_vm._v(" "),(_vm.detail)?_c('div',{staticClass:"modal-frame d-flex justify-cintent-center align-items-center"},[_c('div',{staticClass:"modal-box-green bg-green w-90 mx-auto"},[_c('div',{staticClass:"p-3 text-center"},[_c('p',{staticClass:"w-fit mx-auto bg-second h6"},[_vm._v("UUPON會員條款")]),_vm._v(" "),_c('p',[_vm._v("qwewfgvewgbvrsrfbh")]),_vm._v(" "),_c('p',[_vm._v("qwewfgvewgbvrsrfbh")]),_vm._v(" "),_c('p',[_vm._v("qwewfgvewgbvrsrfbh")]),_vm._v(" "),_c('p',[_vm._v("qwewfgvewgbvrsrfbh")]),_vm._v(" "),_c('div',{staticClass:"mt-4 w-fit border mx-auto px-2 py-1 bg-white",on:{"click":function($event){_vm.detail = false}}},[_vm._v("已閱讀完畢")])])])]):_vm._e()])}
var Home_staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"text-center modal-box-header p-2"},[_c('p',{staticClass:"h7 mb-0"},[_vm._v("恭喜! 僅差最後一步")])])}]
var Home_esExports = { render: Home_render, staticRenderFns: Home_staticRenderFns }
/* harmony default export */ var views_Home = (Home_esExports);
// CONCATENATED MODULE: ./src/views/Home.vue
function Home_injectStyle (ssrContext) {
  __webpack_require__("vRde")
}
var Home_normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var Home___vue_template_functional__ = false
/* styles */
var Home___vue_styles__ = Home_injectStyle
/* scopeId */
var Home___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var Home___vue_module_identifier__ = null
var Home_Component = Home_normalizeComponent(
  Home,
  views_Home,
  Home___vue_template_functional__,
  Home___vue_styles__,
  Home___vue_scopeId__,
  Home___vue_module_identifier__
)

/* harmony default export */ var src_views_Home = (Home_Component.exports);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/views/Forgetpsw.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

// import $ from 'jquery'
/* harmony default export */ var Forgetpsw = ({
  name: 'Home',
  data: function data() {
    return {
      code: '',
      account: '',
      newaccount: '',
      newpsw: '',
      newpsw2: '',
      detail: false,
      alreadysend: false,
      successmodal: false,
      sencond: 120,
      successmodaltext: '驗證成功',
      time: null
    };
  },
  created: function created() {},

  methods: {
    closemodal: function closemodal() {
      this.successmodal = false;
      this.$router.push({ name: 'Home' });
    },
    sendcode: function sendcode() {
      var _this = this;

      if (this.account !== '') {
        this.alreadysend = true;
        this.time = setInterval(function () {
          if (_this.sencond < 1) {
            clearInterval(_this.time);
          } else {
            _this.sencond -= 1;
          }
        }, 1000);
      }
    },
    renew: function renew() {
      console.log('重新發送驗證碼');
      clearInterval(this.time);
      this.sencond = 120;
      this.sendcode();
    },
    submitcode: function submitcode() {
      if (this.code !== '') {
        console.log('已送出驗證碼');
        this.successmodal = true;
      }
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-5f3b82d9","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/views/Forgetpsw.vue
var Forgetpsw_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"home bg-first"},[_c('div',[_vm._m(0),_vm._v(" "),_c('section',{staticClass:"d-flex justify-content-center my-5"},[_c('form',{attrs:{"action":""}},[_c('div',{staticClass:"d-flex p-2 bg-white input-frame"},[_c('p',{staticClass:"mb-0 mr-1"},[_vm._v("帳號")]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.account),expression:"account"}],attrs:{"type":"tel","maxlength":"10","placeholder":"輸入手機號碼"},domProps:{"value":(_vm.account)},on:{"input":function($event){if($event.target.composing){ return; }_vm.account=$event.target.value}}})]),_vm._v(" "),(_vm.alreadysend)?_c('div',{staticClass:"d-flex mt-2 p-2 bg-white input-frame"},[_c('p',{staticClass:"mb-0 mr-1"},[_vm._v("驗證碼")]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.code),expression:"code"}],attrs:{"type":"text"},domProps:{"value":(_vm.code)},on:{"input":function($event){if($event.target.composing){ return; }_vm.code=$event.target.value}}})]):_vm._e(),_vm._v(" "),(!_vm.alreadysend)?_c('div',{staticClass:"mt-3 mx-auto py-3 px-5 bg-second w-fit text-white font-weight-bold login-btn mb-3",on:{"click":_vm.sendcode}},[_vm._v("發送驗證碼")]):_vm._e(),_vm._v(" "),(_vm.alreadysend)?_c('div',[_c('div',{staticClass:"d-flex mx-auto"},[_c('div',{staticClass:"mt-3 py-3 px-2 bg-second w-fit text-white font-weight-bold login-btn mb-3 h6 mr-3"},[_vm._v("倒數"+_vm._s(_vm.sencond)+"秒")]),_vm._v(" "),_c('div',{staticClass:"mt-3 py-3 px-2 bg-second w-fit text-white font-weight-bold login-btn mb-3 h6",on:{"click":_vm.renew,"":function($event){}}},[_vm._v("重新發送驗證碼")])]),_vm._v(" "),_c('div',{staticClass:"mt-2 mx-auto py-3 px-5 bg-second w-fit text-white font-weight-bold login-btn mb-3 h6",on:{"click":_vm.submitcode}},[_vm._v("送出驗證碼")])]):_vm._e()])]),_vm._v(" "),_c('section',{staticClass:"pt-5"},[_c('p',{staticClass:"mb-1 mx-auto text-white bg-second w-fit px-1",on:{"click":function($event){return _vm.$router.push({name: 'Home'})}}},[_c('u',[_vm._v("返回登入首頁")])]),_vm._v(" "),_vm._m(1)])]),_vm._v(" "),(_vm.successmodal)?_c('div',{staticClass:"modal-frame d-flex justify-cintent-center align-items-center"},[_c('div',{staticClass:"modal-box bg-white w-85 mx-auto"},[_c('div',{staticClass:"text-right modal-box-header p-2"},[_c('p',{on:{"click":_vm.closemodal}},[_vm._v("X")])]),_vm._v(" "),_c('div',{staticClass:"p-3 text-center"},[_c('p',{staticClass:"h6 font-weight-bold"},[_vm._v(_vm._s(_vm.successmodaltext))]),_vm._v(" "),_c('div',{staticClass:"mt-4 w-50 border mx-auto py-1",on:{"click":_vm.closemodal}},[_vm._v("OK")])])])]):_vm._e()])}
var Forgetpsw_staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',[_c('div',{staticClass:"w-90 mx-auto pt-3 mb-1"},[_c('p',[_vm._v("忘記密碼流程")]),_vm._v(" "),_c('p',[_vm._v("寄送驗證碼")])]),_vm._v(" "),_c('div',{staticClass:"d-flex align-items-center position-relative w-100 "},[_c('div',{staticClass:"d-flex justify-content-between w-90 mx-auto z-2"},[_c('div',{staticClass:"circle-num d-flex align-items-center justify-content-center font-weight-bold bg-white"},[_vm._v("1")]),_vm._v(" "),_c('div',{staticClass:"circle-num d-flex align-items-center justify-content-center font-weight-bold bg-white"},[_vm._v("2")]),_vm._v(" "),_c('div',{staticClass:"circle-num d-flex align-items-center justify-content-center font-weight-bold bg-white"},[_vm._v("3")])]),_vm._v(" "),_c('div',{staticClass:"w-100 line position-absolute z-1"})])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('p',{staticClass:"text-white mx-auto bg-second w-fit px-1 text-center"},[_c('u',[_vm._v("帳號異常"),_c('br'),_vm._v("聯繫UUPON客服")])])}]
var Forgetpsw_esExports = { render: Forgetpsw_render, staticRenderFns: Forgetpsw_staticRenderFns }
/* harmony default export */ var views_Forgetpsw = (Forgetpsw_esExports);
// CONCATENATED MODULE: ./src/views/Forgetpsw.vue
function Forgetpsw_injectStyle (ssrContext) {
  __webpack_require__("ks5Z")
}
var Forgetpsw_normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var Forgetpsw___vue_template_functional__ = false
/* styles */
var Forgetpsw___vue_styles__ = Forgetpsw_injectStyle
/* scopeId */
var Forgetpsw___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var Forgetpsw___vue_module_identifier__ = null
var Forgetpsw_Component = Forgetpsw_normalizeComponent(
  Forgetpsw,
  views_Forgetpsw,
  Forgetpsw___vue_template_functional__,
  Forgetpsw___vue_styles__,
  Forgetpsw___vue_scopeId__,
  Forgetpsw___vue_module_identifier__
)

/* harmony default export */ var src_views_Forgetpsw = (Forgetpsw_Component.exports);

// CONCATENATED MODULE: ./src/router/index.js





vue_esm["a" /* default */].use(vue_router_esm["a" /* default */]);

/* harmony default export */ var router = (new vue_router_esm["a" /* default */]({
  mode: 'hash',
  routes: [{
    path: '/',
    name: 'Home',
    component: src_views_Home
  }, {
    path: '/forgetpsw',
    name: 'Forgetpsw',
    component: src_views_Forgetpsw
  }]
}));
// EXTERNAL MODULE: ./src/assets/all.scss
var assets_all = __webpack_require__("pc4J");
var all_default = /*#__PURE__*/__webpack_require__.n(assets_all);

// EXTERNAL MODULE: ./node_modules/vue-awesome-swiper/dist/vue-awesome-swiper.js
var vue_awesome_swiper = __webpack_require__("7QTg");
var vue_awesome_swiper_default = /*#__PURE__*/__webpack_require__.n(vue_awesome_swiper);

// EXTERNAL MODULE: ./node_modules/swiper/swiper-bundle.css
var swiper_bundle = __webpack_require__("wNQb");
var swiper_bundle_default = /*#__PURE__*/__webpack_require__.n(swiper_bundle);

// CONCATENATED MODULE: ./src/main.js
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.




// import './assets/js/loader.min.js'



vue_esm["a" /* default */].use(vue_awesome_swiper_default.a);

vue_esm["a" /* default */].config.productionTip = false;

/* eslint-disable no-new */
new vue_esm["a" /* default */]({
  el: '#app',
  router: router,
  components: { App: src_App },
  template: '<App/>'
});

/***/ }),

/***/ "gr1r":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "ks5Z":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "pc4J":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "vRde":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "wNQb":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

},["NHnr"]);
//# sourceMappingURL=app-20210505-a.js.map