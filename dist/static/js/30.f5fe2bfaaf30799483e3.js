webpackJsonp([30],{"27RB":function(e,n,o){var t=o("gwwv");"string"==typeof t&&(t=[[e.i,t,""]]),t.locals&&(e.exports=t.locals);o("rjj0")("50ea5b19",t,!0)},FVph:function(e,n,o){"use strict";(function(e){var t=o("TuOd"),i=o.n(t);n.a={data:function(){return{activePane:"login",hostUrl:"/",imgUrl:"/checkcode",pic_location:i.a,login:{username:"",password:"",verCode:"",radio:1},loginRules:{username:[{required:!0,message:"请输入用户名",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"}],verCode:[{required:!0,message:"请输入验证码",trigger:"blur"}]}}},created:function(){this.getVerCode()},methods:{inputvalidation:function(e,n){if(""===e)return this.$message({type:"info",message:"请输入账号"}),0;if(""===n)return this.$message({type:"info",message:"请输入密码"}),0;this.login.username=this.login.username.trim(),this.login.password=this.login.password.trim();var o=Number(this.login.username);return isNaN(o)?(this.$message({type:"info",message:"账号错误"}),0):1},codeParsing:function(e){var n=this,o=function(e,o){n.$message({title:e,message:o,type:"error"})};switch(e){case-1:o("系统错误","未知错误，请上报管理员");break;case 201:o("输入域错误","验证码错误");break;case 300:o("输入域错误","邮箱或密码错误");break;case 301:o("权限问题","用户已禁用，请联系管理员");break;case 302:o("权限问题","用户未激活，请去邮箱激活用户");break;case 303:o("注册问题","邮箱已占用，请更改邮箱");break;case 304:o("注册问题","昵称已占用，请更改昵称");break;case 400:o("权限问题","用户未登录，请重新登录");break;case 401:o("权限问题","用户无权访问，请联系管理员");break;case 402:o("操作错误","删除错误,请刷新重试");break;case 500:o("系统错误","未知错误，请上报管理员");break;case 600:o("TIME_OUT","访问超时，请检查网络连接");break;case 700:o("激活错误","非法激活链接，请联系管理员");break;case 800:o("激活错误","用户已被激活，请直接登录")}},loginForm:function(n){var o=this.login.username;1===this.inputvalidation(this.login.username,this.login.password)&&(1===this.login.radio?e.ajax({type:"post",url:"/student/login",dataType:"json",data:{id:this.login.username,password:this.login.password},success:function(e){console.log(e.data),1===e.data?(alert("登陆成功"),localStorage?localStorage.setItem("stuId",o):alert("This browser supports localStorage"),window.location.href="/#/student"):alert("密码错误！")},error:function(e){console.log(e)}}):2===this.login.radio?e.ajax({type:"post",url:"/teacher/login",dataType:"json",data:{id:this.login.username,password:this.login.password},success:function(e){1===e.data?(alert("登陆成功"),localStorage?localStorage.setItem("teaId",o):alert("This browser supports localStorage"),window.location.href="/#/teacher"):alert("密码错误！")},error:function(e){console.log(e)}}):3===this.login.radio?e.ajax({type:"post",url:"/administor/login",dataType:"json",data:{id:this.login.username,password:this.login.password},success:function(e){1===e.data?(alert("登陆成功"),localStorage?localStorage.setItem("admId",o):alert("This browser supports localStorage"),window.location.href="/#/adminstrator"):alert("密码错误！")},error:function(e){console.log(e)}}):this.$message({type:"info",message:"请选择登录入口"}))},goToModifyPassword:function(){this.$router.push({path:"/modifyPassword"})},changeUrl:function(){var e=this.imgUrl,n=(new Date).valueOf();return e=e.substring(0,45),e=e.indexOf("&")>=0?e+"xtamp="+n:e+"?timestamp="+n},getVerCode:function(){var e=this;e.imgUrl=e.changeUrl()}}}}).call(n,o("7t+N"))},"M+ZD":function(e,n,o){"use strict";function t(e){o("27RB")}Object.defineProperty(n,"__esModule",{value:!0});var i=o("FVph"),a=o("lSva"),r=o("VU/8"),s=t,l=r(i.a,a.a,!1,s,null,null);n.default=l.exports},TuOd:function(e,n,o){e.exports=o.p+"static/img/jiemian.f55dfc2.jpg"},gwwv:function(e,n,o){n=e.exports=o("FZ+f")(!0),n.push([e.i,"#ForgetPassword,#login{color:#fff;font-weight:700;cursor:help;text-decoration:underline}#login{margin-top:100px}.logo{float:left;padding-left:40px;font-size:30px;color:#6495ed}.ms-login img{float:right;height:34px;width:100%;font-size:inherit;display:inline-block;border-radius:4px;border:1px solid #bfcbd9;cursor:pointer}.el-radio{color:#fff}.login-btn span{text-decoration:none}.ms-login{position:absolute;display:inline-block;left:75%;top:50%;width:300px;height:300px;margin:-100px 0 100px -190px;padding:40px;border-radius:5px}.ms-login el-tabs__item{position:relative;padding:0 60px}.login-wrap{position:absolute;margin-top:0;width:100%;height:100%;overflow-y:scroll}.background{position:relative;width:100%;height:200px}.background-img{position:absolute;width:100%;height:200px}.login-btn{margin-top:10px;text-align:center}.login-btn button{width:100%;height:36px}.forgetpassword{margin-top:20px;text-align:center}","",{version:3,sources:["C:/vue/Acase2/src/components/pages/login.vue"],names:[],mappings:"AAOA,uBALQ,WAAY,AACZ,gBAAkB,AAClB,YAAa,AACb,yBAA2B,CAQlC,AAND,OAKQ,gBAAiB,CACxB,AACD,MACM,WAAY,AACZ,kBAAmB,AACnB,eAAgB,AAChB,aAAoB,CACzB,AACD,cACQ,YAAa,AACb,YAAa,AACb,WAAY,AACZ,kBAAmB,AACnB,qBAAsB,AACtB,kBAAmB,AACnB,yBAA0B,AAC1B,cAAgB,CACvB,AACD,UACM,UAAY,CACjB,AACD,gBACQ,oBAAsB,CAC7B,AACD,UACM,kBAAmB,AACnB,qBAAsB,AACtB,SAAS,AACT,QAAQ,AACR,YAAY,AACZ,aAAa,AACb,6BAA+B,AAC/B,aAAc,AACd,iBAAmB,CACxB,AACD,wBACM,kBAAmB,AACnB,cAAgB,CACrB,AACD,YACQ,kBAAmB,AACzB,aAAe,AACT,WAAW,AACX,YAAY,AACZ,iBAAmB,CAC1B,AACD,YAEQ,kBAAkB,AAClB,WAAY,AACZ,YAAc,CACrB,AACD,gBAKQ,kBAAmB,AACnB,WAAY,AACZ,YAAa,CACpB,AACD,WACK,gBAAgB,AACb,iBAAmB,CAC1B,AACD,kBACQ,WAAW,AACX,WAAY,CACnB,AACD,gBACC,gBAAgB,AAChB,iBAAmB,CACnB",file:"login.vue",sourcesContent:["\n#ForgetPassword {\n        color: #fff;\n        font-weight: bold;\n        cursor: help;\n        text-decoration: underline;\n}\n#login {\n        color: #fff;\n        font-weight: bold;\n        cursor: help;\n        text-decoration: underline;\n        margin-top:100px;\n}\n.logo{\n      float: left;\n      padding-left: 40px;\n      font-size: 30px;\n      color:cornflowerblue\n}\n.ms-login img {\n        float: right;\n        height: 34px;\n        width: 100%;\n        font-size: inherit;\n        display: inline-block;\n        border-radius: 4px;\n        border: 1px solid #bfcbd9;\n        cursor: pointer;\n}\n.el-radio{\n      color: #fff;\n}\n.login-btn span{\n        text-decoration: none;\n}\n.ms-login{\n      position: absolute;\n      display: inline-block;\n      left:75%;\n      top:50%;\n      width:300px;\n      height:300px;\n      margin:-100px 0px 100px -190px;\n      padding: 40px;\n      border-radius: 5px;\n}\n.ms-login el-tabs__item {\n      position: relative;\n      padding: 0 60px;\n}\n.login-wrap{\n        position: absolute;\n\t\tmargin-top:0px;\n        width:100%;\n        height:100%;\n        overflow-y: scroll;\n}\n.background{\n\t\n        position:relative;\n        width: 100%;\n        height: 200px;\n}\n.background-img{\n        /*background-image: url(../assets/LoginWallpaper.jpg);\n        background: no-repeat center top;\n        background-size: contain;*/\n\t\t\n        position: absolute;\n        width: 100%;\n        height:200px;\n}\n.login-btn{\n\t    margin-top:10px;\n        text-align: center;\n}\n.login-btn button{\n        width:100%;\n        height:36px;\n}\n.forgetpassword{\n\tmargin-top:20px;\n\ttext-align: center;\n}\n\t\n\n"],sourceRoot:""}])},lSva:function(e,n,o){"use strict";var t=function(){var e=this,n=e.$createElement,o=e._self._c||n;return o("div",{staticClass:"login-wrap"},[o("div",{staticClass:"background"},[o("div",{staticClass:"background-img"},[o("img",{staticStyle:{width:"100%"},attrs:{src:e.pic_location}})]),e._v(" "),o("div",{staticClass:"ms-login"},[o("el-tabs",{attrs:{id:"login"},model:{value:e.activePane,callback:function(n){e.activePane=n},expression:"activePane"}},[o("el-form",{ref:"login",attrs:{model:e.login,rules:e.loginRules,"label-width":"0px"}},[o("el-form-item",{attrs:{prop:"username"}},[o("el-input",{attrs:{placeholder:"账号"},model:{value:e.login.username,callback:function(n){e.$set(e.login,"username",n)},expression:"login.username"}})],1),e._v(" "),o("el-form-item",{attrs:{prop:"password"}},[o("el-input",{attrs:{type:"password",placeholder:"密码"},model:{value:e.login.password,callback:function(n){e.$set(e.login,"password",n)},expression:"login.password"}})],1),e._v(" "),o("el-form",{ref:"login",attrs:{model:e.login,rules:e.loginRules,"label-width":"0px"}},[o("el-form-item",{attrs:{prop:"verCode"}},[o("el-popover",{ref:"a",attrs:{placement:"right-end",trigger:"hover"}},[o("img",{attrs:{src:e.imgUrl,alt:"验证码图片",width:"200px"},on:{click:e.getVerCode}})]),e._v(" "),o("el-input",{directives:[{name:"popover",rawName:"v-popover:a",arg:"a"}],attrs:{placeholder:"验证码"},nativeOn:{keyup:function(n){if(!("button"in n)&&e._k(n.keyCode,"enter",13,n.key))return null;e.loginForm("login")}},model:{value:e.login.verCode,callback:function(n){e.$set(e.login,"verCode",n)},expression:"login.verCode"}})],1)],1),e._v(" "),o("div",{staticClass:"login-radio"},[o("el-radio-group",{model:{value:e.login.radio,callback:function(n){e.$set(e.login,"radio",n)},expression:"login.radio"}},[o("el-radio",{attrs:{label:1}},[e._v("学生")]),e._v(" "),o("el-radio",{attrs:{label:2}},[e._v("教师")]),e._v(" "),o("el-radio",{attrs:{label:3}},[e._v("管理员")])],1)],1),e._v(" "),o("div",{staticClass:"login-btn"},[o("el-button",{attrs:{type:"primary"},on:{click:function(n){e.loginForm("login")}}},[e._v("登录")])],1),e._v(" "),o("div",{staticClass:"forgetpassword"},[o("span",{attrs:{id:"ForgetPassword"},on:{click:e.goToModifyPassword}},[e._v("忘记密码 ")])])],1)],1)],1)])])},i=[],a={render:t,staticRenderFns:i};n.a=a}});
//# sourceMappingURL=30.f5fe2bfaaf30799483e3.js.map