webpackJsonp([19],{EBC7:function(t,e){},EwUh:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("aA9S"),i=a.n(s),o={name:"",beforeRouteEnter:function(t,e,a){a(function(a){if("createVisit"!==e.name&&"detailNotEnter"!==e.name||(a.backPath="detailNotEnter/"+t.query.id),"/filter"===e.path){var s=a.$store.state.filter,o=s.busLineId,n=s.startTime,r=s.endTime,d=s.shopName,u=s.storeCity;a.$store.state.user.roleLevel,i()(a.form,{busLineId:o,endTime:r,shopName:d,startTime:n,storeCity:u})}t.query.id&&(a.form.customId=t.query.id),"/"!=e.path&&a.$store.dispatch({type:"BackPath",payload:a.backPath})})},created:function(){this.getData()},data:function(){return{backPath:"/home",form:{busLineId:"",customId:"",endTime:"",from:"bdcrm",page:1,rows:10,shopName:"",startTime:"",storeCity:"",token:this.$store.state.token,userName:"",userId:this.$store.state.user.userId},allLoaded:!1,items:{},pageIndex:"",pageCount:"",loading:!0}},methods:{getData:function(){var t=this;this.axios.visitList(this.form).then(function(e){var a=e.data;a.success&&(0===a.data.rowsCount&&(t.allLoaded=!0),t.pageIndex=a.data.pageIndex,t.pageCount=a.data.pageCount,(a.data.pageCount===a.data.pageIndex||0==a.data.rowsCount)&&(t.allLoaded=!0),t.$set(t,"items",i()(t.items,a.data.list)),t.loading=!1),a.success||t.$toast({message:a.msg,position:"model",duration:3e3})}).catch(function(t){console.log(t)})},request:function(){this.pageIndex===this.pageCount?this.allLoaded=!0:(this.form.page=++this.pageIndex,this.getData())}}},n={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.loading?t._e():a("div",{},[a("mt-header",{attrs:{title:"拜访记录"}},[a("router-link",{attrs:{slot:"left",to:t.$store.state.backPath},slot:"left"},[a("mt-button",{attrs:{icon:"back"}},[t._v("返回")])],1),t._v(" "),a("mt-button",{attrs:{slot:"right"},slot:"right"},[a("span",{staticClass:"rightbtn",on:{click:function(e){t.$router.push({path:"/filter"})}}},[t._v("筛选")])])],1),t._v(" "),a("pullup",{attrs:{allLoaded:t.allLoaded},on:{request:t.request}},t._l(t.util.sortDate(Object.keys(t.items)),function(e,s){return a("div",{key:s},[a("div",{staticClass:"head"},[t._v("\n        "+t._s(e)+"\n      ")]),t._v(" "),t._l(t.items[e],function(e,s){return a("cardvisit",{key:s,attrs:{type:"list",data:e},nativeOn:{click:function(a){t.$router.push({path:"/visitDetail/"+e.visitId})}}})})],2)}))],1)},staticRenderFns:[]};var r=a("vSla")(o,n,!1,function(t){a("EBC7")},"data-v-1e3dcd15",null);e.default=r.exports}});
//# sourceMappingURL=19.ab2795a221aa1d8f398e.js.map