webpackJsonp([18],{V3By:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i={name:"",props:{id:String},created:function(){var t=this;this.axios.repayList(this.form).then(function(e){var s=e.data;console.log(s),s.success&&t.$set(t,"items",s.data.list),s.success||t.$toast({message:s.msg,position:"model",duration:3e3})}).catch(function(t){console.log(t)})},data:function(){return{form:{from:"bdcrm",orderId:this.id,token:this.$store.state.token},items:[]}},methods:{}},a={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{},[s("mt-header",{attrs:{title:"账单"}},[s("router-link",{attrs:{slot:"left",to:""},slot:"left"},[s("mt-button",{attrs:{icon:"back"},on:{click:function(e){t.$router.go(-1)}}},[t._v("返回")])],1)],1),t._v(" "),t._l(t.items,function(e,i){return s("div",{key:i,attrs:{data:e}},[s("div",{staticClass:"container"},[s("div",{staticClass:"item"},[t._v(t._s(e.period)+"期")]),t._v(" "),s("div",{staticClass:"item"},[t._v("¥"+t._s(t.util.fmoney(e.repayMoney,2))+"（含服务费"+t._s(t.util.fmoney(e.serviceCharge,2))+"）")])]),t._v(" "),s("div",{staticClass:"container"},[s("div",{staticClass:"item"},[t._v("还款日"+t._s(e.repayDay))]),t._v(" "),s("div",{staticClass:"item"},[s("span",[t._v(t._s(e.state))])])])])})],2)},staticRenderFns:[]};var n=s("vSla")(i,a,!1,function(t){s("WtDZ")},"data-v-29c84c9d",null);e.default=n.exports},WtDZ:function(t,e){}});
//# sourceMappingURL=18.88d78381b3f59724f37f.js.map