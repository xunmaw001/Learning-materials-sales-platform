(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-register-register"],{"0838":function(r,e,t){var i=t("24fb");e=i(!1),e.push([r.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.content[data-v-2a6b31b4]{height:calc(100vh - 44px);overflow:auto}.content[data-v-2a6b31b4]:after{position:fixed;top:0;right:0;left:0;bottom:0;content:"";background-image:url(http://codegen.caihongy.cn/20220228/f47cd72ee9204918a52d33fd85627fc6.png);background-attachment:fixed;background-size:cover;background-position:50%}.logo[data-v-2a6b31b4]{text-align:center}.logo uni-image[data-v-2a6b31b4]{height:%?200?%;width:%?200?%;margin:0 0 %?60?%}.uni-form-item[data-v-2a6b31b4]{margin-bottom:%?40?%;padding:0}.uni-form-item .uni-input[data-v-2a6b31b4]{font-size:%?30?%;padding:7px 0}uni-button[type="primary"][data-v-2a6b31b4]{background-color:#b49950;border-radius:0;font-size:%?34?%;margin-top:%?60?%}.links[data-v-2a6b31b4]{text-align:center;margin-top:%?40?%;font-size:%?26?%;color:#999}.links uni-view[data-v-2a6b31b4]{display:inline-block;vertical-align:top;margin:0 %?10?%}.links .link-highlight[data-v-2a6b31b4]{color:#b49950}.picker-select-input[data-v-2a6b31b4]{line-height:%?88?%}',""]),r.exports=e},"1d8a":function(r,e,t){var i=t("e8fb");"string"===typeof i&&(i=[[r.i,i,""]]),i.locals&&(r.exports=i.locals);var o=t("4f06").default;o("55380e2e",i,!0,{sourceMap:!1,shadowMode:!1})},3735:function(r,e,t){"use strict";t.r(e);var i=t("6b89"),o=t("48c7");for(var n in o)"default"!==n&&function(r){t.d(e,r,(function(){return o[r]}))}(n);t("507b"),t("4afd");var a,u=t("f0c5"),d=Object(u["a"])(o["default"],i["b"],i["c"],!1,null,"2a6b31b4",null,!1,i["a"],a);e["default"]=d.exports},"48c7":function(r,e,t){"use strict";t.r(e);var i=t("4e2d"),o=t.n(i);for(var n in i)"default"!==n&&function(r){t.d(e,r,(function(){return i[r]}))}(n);e["default"]=o.a},"4afd":function(r,e,t){"use strict";var i=t("b746"),o=t.n(i);o.a},"4e2d":function(r,e,t){"use strict";var i=t("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,t("28a5"),t("96cf");var o=i(t("3b8d")),n={data:function(){return{yonghuxingbieOptions:[],yonghuxingbieIndex:0,ruleForm:{},emailcode:"",tableName:""}},onLoad:function(){var r=(0,o.default)(regeneratorRuntime.mark((function r(){var e;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:[],e=uni.getStorageSync("loginTable"),this.tableName=e,"yonghu"==this.tableName&&(this.yonghuxingbieOptions="男,女".split(","),this.ruleForm.xingbie=this.yonghuxingbieOptions[0]),this.styleChange();case 5:case"end":return r.stop()}}),r,this)})));function e(){return r.apply(this,arguments)}return e}(),methods:{yonghuxingbieChange:function(r){this.yonghuxingbieIndex=r.target.value,this.ruleForm.xingbie=this.yonghuxingbieOptions[this.yonghuxingbieIndex]},styleChange:function(){this.$nextTick((function(){}))},getUUID:function(){return(new Date).getTime()},register:function(){var r=(0,o.default)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(this.ruleForm.zhanghao||"yonghu"!=this.tableName){r.next=3;break}return this.$utils.msg("账号不能为空"),r.abrupt("return");case 3:if(this.ruleForm.mima||"yonghu"!=this.tableName){r.next=6;break}return this.$utils.msg("密码不能为空"),r.abrupt("return");case 6:if("yonghu"!=this.tableName||this.ruleForm.mima==this.ruleForm.mima2){r.next=9;break}return this.$utils.msg("两次密码输入不一致"),r.abrupt("return");case 9:if("yonghu"!=this.tableName||!this.ruleForm.shouji||this.$validate.isMobile(this.ruleForm.shouji)){r.next=12;break}return this.$utils.msg("手机应输入手机格式"),r.abrupt("return");case 12:if("yonghu"!=this.tableName||!this.ruleForm.money||this.$validate.isNumber(this.ruleForm.money)){r.next=15;break}return this.$utils.msg("余额应输入数字"),r.abrupt("return");case 15:return r.next=17,this.$api.register("".concat(this.tableName),this.ruleForm,this.emailcode);case 17:this.$utils.msgBack("注册成功");case 19:case"end":return r.stop()}}),r,this)})));function e(){return r.apply(this,arguments)}return e}()}};e.default=n},"507b":function(r,e,t){"use strict";var i=t("1d8a"),o=t.n(i);o.a},"6b89":function(r,e,t){"use strict";var i,o=function(){var r=this,e=r.$createElement,t=r._self._c||e;return t("v-uni-view",{staticClass:"content"},[t("v-uni-view",{staticClass:"box",style:{padding:"100rpx 15% 0",boxShadow:"0 2rpx 12rpx rgba(0,0,0,0)",margin:"0",borderColor:"rgba(255, 99, 8, 1)",backgroundColor:"rgba(255, 255, 255, 0)",borderRadius:"0",borderWidth:"0 12rpx 0 0",width:"100%",borderStyle:"solid",height:"100%"}},[r._e(),"yonghu"==r.tableName?t("v-uni-view",{staticClass:"uni-form-item uni-column",style:{padding:"0",boxShadow:"0 2rpx 12rpx rgba(0,0,0,0)",margin:"0 0 24rpx",borderColor:"#ccc",backgroundColor:"rgba(255, 255, 255, 0)",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"auto"}},[t("v-uni-input",{staticClass:"uni-input",style:{padding:"0 24rpx",boxShadow:"0 2rpx 12rpx rgba(0,0,0,0)",margin:"0",borderColor:"#ccc",backgroundColor:"#fff",color:"rgba(0, 0, 0, 1)",textAlign:"left",borderRadius:"40rpx",borderWidth:"0 0 4rpx",width:"100%",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{type:"text",name:"",placeholder:"账号"},model:{value:r.ruleForm.zhanghao,callback:function(e){r.$set(r.ruleForm,"zhanghao",e)},expression:"ruleForm.zhanghao"}})],1):r._e(),"yonghu"==r.tableName?t("v-uni-view",{staticClass:"uni-form-item uni-column",style:{padding:"0",boxShadow:"0 2rpx 12rpx rgba(0,0,0,0)",margin:"0 0 24rpx",borderColor:"#ccc",backgroundColor:"rgba(255, 255, 255, 0)",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"auto"}},[t("v-uni-input",{staticClass:"uni-input",style:{padding:"0 24rpx",boxShadow:"0 2rpx 12rpx rgba(0,0,0,0)",margin:"0",borderColor:"#ccc",backgroundColor:"#fff",color:"rgba(0, 0, 0, 1)",textAlign:"left",borderRadius:"40rpx",borderWidth:"0 0 4rpx",width:"100%",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{type:"password",name:"",placeholder:"密码"},model:{value:r.ruleForm.mima,callback:function(e){r.$set(r.ruleForm,"mima",e)},expression:"ruleForm.mima"}})],1):r._e(),"yonghu"==r.tableName?t("v-uni-view",{staticClass:"uni-form-item uni-column",style:{padding:"0",boxShadow:"0 2rpx 12rpx rgba(0,0,0,0)",margin:"0 0 24rpx",borderColor:"#ccc",backgroundColor:"rgba(255, 255, 255, 0)",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"auto"}},[t("v-uni-input",{staticClass:"uni-input",style:{padding:"0 24rpx",boxShadow:"0 2rpx 12rpx rgba(0,0,0,0)",margin:"0",borderColor:"#ccc",backgroundColor:"#fff",color:"rgba(0, 0, 0, 1)",textAlign:"left",borderRadius:"40rpx",borderWidth:"0 0 4rpx",width:"100%",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{type:"password",name:"",placeholder:"确认密码"},model:{value:r.ruleForm.mima2,callback:function(e){r.$set(r.ruleForm,"mima2",e)},expression:"ruleForm.mima2"}})],1):r._e(),"yonghu"==r.tableName?t("v-uni-view",{staticClass:"uni-form-item uni-column",style:{padding:"0",boxShadow:"0 2rpx 12rpx rgba(0,0,0,0)",margin:"0 0 24rpx",borderColor:"#ccc",backgroundColor:"rgba(255, 255, 255, 0)",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"auto"}},[t("v-uni-input",{staticClass:"uni-input",style:{padding:"0 24rpx",boxShadow:"0 2rpx 12rpx rgba(0,0,0,0)",margin:"0",borderColor:"#ccc",backgroundColor:"#fff",color:"rgba(0, 0, 0, 1)",textAlign:"left",borderRadius:"40rpx",borderWidth:"0 0 4rpx",width:"100%",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{type:"text",name:"",placeholder:"昵称"},model:{value:r.ruleForm.nicheng,callback:function(e){r.$set(r.ruleForm,"nicheng",e)},expression:"ruleForm.nicheng"}})],1):r._e(),"yonghu"==r.tableName?t("v-uni-view",{staticClass:"uni-form-item uni-column",style:{padding:"0",boxShadow:"0 2rpx 12rpx rgba(0,0,0,0)",margin:"0 0 24rpx",borderColor:"#ccc",backgroundColor:"rgba(255, 255, 255, 0)",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"auto"}},[t("v-uni-picker",{attrs:{value:r.yonghuxingbieIndex,range:r.yonghuxingbieOptions},on:{change:function(e){arguments[0]=e=r.$handleEvent(e),r.yonghuxingbieChange.apply(void 0,arguments)}}},[t("v-uni-view",{staticClass:"uni-input",style:{padding:"0 28rpx",boxShadow:"0 2rpx 12rpx rgba(0,0,0,0)",margin:"0",borderColor:"#ccc",backgroundColor:"rgba(255, 255, 255, 1)",color:"rgba(0, 0, 0, 1)",textAlign:"left",borderRadius:"40rpx",borderWidth:"0 0 4rpx",width:"100%",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"solid"}},[r._v(r._s(r.ruleForm.xingbie?r.ruleForm.xingbie:"请选择性别"))])],1)],1):r._e(),"yonghu"==r.tableName?t("v-uni-view",{staticClass:"uni-form-item uni-column",style:{padding:"0",boxShadow:"0 2rpx 12rpx rgba(0,0,0,0)",margin:"0 0 24rpx",borderColor:"#ccc",backgroundColor:"rgba(255, 255, 255, 0)",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"auto"}},[t("v-uni-input",{staticClass:"uni-input",style:{padding:"0 24rpx",boxShadow:"0 2rpx 12rpx rgba(0,0,0,0)",margin:"0",borderColor:"#ccc",backgroundColor:"#fff",color:"rgba(0, 0, 0, 1)",textAlign:"left",borderRadius:"40rpx",borderWidth:"0 0 4rpx",width:"100%",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{type:"text",name:"",placeholder:"手机"},model:{value:r.ruleForm.shouji,callback:function(e){r.$set(r.ruleForm,"shouji",e)},expression:"ruleForm.shouji"}})],1):r._e(),t("v-uni-button",{staticClass:"btn-submit",style:{padding:"0",boxShadow:"0 2rpx 12rpx rgba(0,0,0,0)",margin:"0",borderColor:"#ccc",backgroundColor:"rgba(255, 99, 8, 1)",borderRadius:"40rpx",color:"rgba(255, 255, 255, 1)",borderWidth:"0",width:"100%",fontSize:"32rpx",borderStyle:"solid",height:"88rpx"},attrs:{type:"primary"},on:{click:function(e){arguments[0]=e=r.$handleEvent(e),r.register.apply(void 0,arguments)}}},[r._v("注册")])],1)],1)},n=[];t.d(e,"b",(function(){return o})),t.d(e,"c",(function(){return n})),t.d(e,"a",(function(){return i}))},b746:function(r,e,t){var i=t("0838");"string"===typeof i&&(i=[[r.i,i,""]]),i.locals&&(r.exports=i.locals);var o=t("4f06").default;o("dff59c56",i,!0,{sourceMap:!1,shadowMode:!1})},e8fb:function(r,e,t){var i=t("24fb");e=i(!1),e.push([r.i,".btn-submit[data-v-2a6b31b4]{height:auto!important;line-height:%?88?%}",""]),r.exports=e}}]);