webpackJsonp([20],{K31e:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s={name:"login",created:function(){this.getcaptchaKey()},data:function(){return{form:{from:"bdcrm",phone:"",password:"",smsVerifyCode:"",captchaKey:""},captchaUrl:null,errCount:null,isCaptcha:!0,flag:!0}},methods:{getcaptchaKey:function(){var t=Date.parse(new Date);this.form.captchaKey=t,this.captchaUrl="https://bdcrm-h5-api.juzifenqi.com/captcha?captchaKey="+t},regExp:function(t,e,a,s){""===e?(this.$toast({message:s+"不能为空",position:"model",duration:3e3}),this.flag=!1):t.test(e)?this.flag=!0:(this.$toast({message:a,position:"model",duration:3e3}),this.flag=!1)},login:function(){var t=this;this.flag&&this.regExp(/^[1][3,4,5,7,8][0-9]{9}$/,this.form.phone,"请输入正确的手机号码","手机号码"),this.flag&&this.regExp(/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,}$/,this.form.password,"请输入由数字字母组成的不小于8位的密码","密码"),this.flag&&this.regExp(/^[0-9A-Za-z]{1,}$/,this.form.smsVerifyCode,"请输入正确的验证码","验证码"),this.flag&&this.axios.login(this.form).then(function(e){var a=e.data;a.success&&(t.$store.dispatch({type:"Login",login:{pwd:t.form.password,token:a.data.token}}),"1"===a.data.pwdFlg?t.$router.push({path:"/home"}):t.$router.push({path:"/setPwd/"+a.data.userId})),a.success||t.$toast({message:a.msg,position:"model",duration:3e3})}).catch(function(t){console.log(t)})}}},o={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"bg-con"},[a("h1",{staticClass:"title"},[t._v("hi,欢迎登录BD_CRM系统~")]),t._v(" "),a("mt-field",{attrs:{label:"手机号码",placeholder:"请输入登录账号",type:"tel",attr:{maxlength:11}},nativeOn:{change:function(e){t.regExp(/^[1][3,4,5,7,8][0-9]{9}$/,t.form.phone,"请输入正确的手机号码","手机号码")}},model:{value:t.form.phone,callback:function(e){t.$set(t.form,"phone",e)},expression:"form.phone"}}),t._v(" "),a("mt-field",{attrs:{label:"密码",placeholder:"请输入密码",type:"password"},nativeOn:{change:function(e){t.regExp(/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,}$/,t.form.password,"请输入由数字字母组成的不小于8位的密码","密码")}},model:{value:t.form.password,callback:function(e){t.$set(t.form,"password",e)},expression:"form.password"}}),t._v(" "),t.isCaptcha?a("mt-field",{attrs:{label:"验证码"},nativeOn:{change:function(e){t.regExp(/^[0-9A-Za-z]{1,}$/,t.form.smsVerifyCode,"请输入正确的验证码","验证码")}},model:{value:t.form.smsVerifyCode,callback:function(e){t.$set(t.form,"smsVerifyCode",e)},expression:"form.smsVerifyCode"}},[t.captchaUrl?a("img",{attrs:{src:t.captchaUrl,height:"30px",width:"100px"},on:{click:function(e){t.getcaptchaKey()}}}):t._e()]):t._e(),t._v(" "),a("p",{staticClass:"forget"},[a("span",{on:{click:function(e){t.$toast({message:"请与BD运营中心人员联系",position:"model",duration:3e3})}}},[t._v("忘记密码？")])]),t._v(" "),a("div",{staticClass:"btnm"},[a("mt-button",{attrs:{size:"large",type:"primary"},on:{click:t.login}},[t._v("登录")])],1),t._v(" "),t.errCount>=3?a("p",{staticClass:"error"},[t._v("输入错误5次后，账户将被冻结。您已输入错误"+t._s(t.errCount)+"次")]):t._e()],1)},staticRenderFns:[]};var r=a("vSla")(s,o,!1,function(t){a("mBCc")},"data-v-1c961bde",null);e.default=r.exports},mBCc:function(t,e){}});
//# sourceMappingURL=20.e57f122de893eefef35b.js.map