webpackJsonp([23],{HmyT:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r={name:"",data:function(){return{flag:"通过",slots:[{code:"通过",name:"通过"},{code:"驳回",name:"驳回"}],form:{approvalState:this.$route.query.approvalState,customId:this.$route.query.customId,enterFlowId:this.$route.query.enterFlowId,from:"bdcrm",remark:"",token:this.$store.state.token},cusForm:{customId:this.$route.query.customId,enterFlowId:this.$route.query.enterFlowId,from:"bdcrm",remark:"",token:this.$store.state.token}}},methods:{submit:function(){var t=this,e="";"4"===this.$route.query.type?(e="通过"===this.flag?"customApproval":"customReject",this.cusForm):(e="通过"===this.flag?"approval":"approvalReject",this.form),this.axios[e](this.form).then(function(e){var o=e.data;o.success&&t.$toast({message:o.msg,position:"model",duration:3e3}),o.success||t.$toast({message:o.msg,position:"model",duration:3e3})}).catch(function(t){console.log(t)})}}},s={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{},[o("mt-header",{attrs:{title:"审批"}},[o("router-link",{attrs:{slot:"left",to:""},slot:"left"},[o("mt-button",{attrs:{icon:"back"},on:{click:function(e){t.$router.go(-1)}}},[t._v("返回")])],1)],1),t._v(" "),o("selectList",{attrs:{title:"审批结果",slotsAll:t.slots,type:"all"},model:{value:t.flag,callback:function(e){t.flag=e},expression:"flag"}}),t._v(" "),o("mt-field",{attrs:{label:"备注说明",placeholder:"请输入",type:"textarea",rows:"4"},model:{value:t.form.remark,callback:function(e){t.$set(t.form,"remark",e)},expression:"form.remark"}}),t._v(" "),o("div",{staticClass:"btnl"},[o("mt-button",{attrs:{size:"large",type:"primary"},on:{click:t.submit}},[t._v("保存")])],1)],1)},staticRenderFns:[]};var a=o("vSla")(r,s,!1,function(t){o("Jyud")},"data-v-04012638",null);e.default=a.exports},Jyud:function(t,e){}});
//# sourceMappingURL=23.93e9c249f8a34b122175.js.map