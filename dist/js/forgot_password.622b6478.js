(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["forgot_password"],{"3b5f":function(t,s,a){"use strict";var e=a("a141"),i=a.n(e);i.a},5432:function(t,s,a){"use strict";a.r(s);var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("app-header"),a("div",{staticClass:"container pushPageDown",staticStyle:{"mini-height":"100vh"}},[a("div",{staticClass:"row justify-content-center"},[a("div",{staticClass:"col-md-8"},[a("div",{staticClass:"card mt-5"},[t._m(0),a("div",{staticClass:"card-body"},[t.emailInput?a("form",{on:{submit:function(s){return s.preventDefault(),t.sendOTP()}}},[t._m(1),a("div",{staticClass:"form-group row"},[a("label",{staticClass:"col-md-4 mt-3 col-form-label text-md-right",attrs:{for:"email"}},[t._v("E-Mail Address")]),a("div",{staticClass:"col-md-6"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.userEmail,expression:"userEmail"}],staticClass:"form-control",attrs:{id:"email",type:"email",name:"email",required:"required"},domProps:{value:t.userEmail},on:{input:function(s){s.target.composing||(t.userEmail=s.target.value)}}})])]),a("div",{staticClass:"form-group row mb-0"},[a("div",{staticClass:"col-md-8 offset-md-4"},[a("button",{staticClass:"btn btn-primary",attrs:{type:"submit",disabled:t.showLoading}},[t.showLoading?t._e():a("span",[t._v(" Send Code ")]),t.showLoading?a("v-progress-circular",{attrs:{color:"white",size:20,indeterminate:""}}):t._e()],1),a("a",{staticClass:"btn bg-light text-muted ml-3",attrs:{href:"/login"}},[t._v("Login")])])])]):t._e(),t.otpInput?a("form",{on:{submit:function(s){return s.preventDefault(),t.confirmOTP()}}},[t._m(2),a("div",{staticClass:"form-group row"},[a("label",{staticClass:"col-md-4 mt-3 col-form-label text-md-right",attrs:{for:"text"}},[t._v("Input Otp")]),a("div",{staticClass:"col-md-6"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.otp,expression:"otp"}],staticClass:"form-control",attrs:{id:"otp",type:"text",name:"otp",required:"required",maxlength:"6"},domProps:{value:t.otp},on:{input:function(s){s.target.composing||(t.otp=s.target.value)}}})])]),a("div",{staticClass:"form-group row mb-0"},[a("div",{staticClass:"col-md-8 offset-md-4"},[a("button",{staticClass:"btn btn-primary",attrs:{type:"submit",disabled:t.showLoading}},[t.showLoading?t._e():a("span",[t._v(" Verify ")]),t.showLoading?a("v-progress-circular",{attrs:{color:"white",size:20,indeterminate:""}}):t._e()],1),a("span",{staticClass:"mr-3 btn btn-light",attrs:{text:""},on:{click:function(s){return t.resendOTP()}}},[t._v("Resend Otp")]),a("a",{staticClass:"btn bg-light text-muted ml-3",attrs:{href:"/login"}},[t._v("Login")])])])]):t._e(),t.newPassword?a("form",{on:{submit:function(s){return s.preventDefault(),t.updatePassword()}}},[a("h6",[t._v("CREATE NEW PASSWORD")]),a("hr"),a("div",{staticClass:"form-group row"},[a("label",{staticClass:"col-md-4 col-form-label text-md-right",attrs:{for:"password"}},[t._v("Password ")]),a("div",{staticClass:"col-md-6"},[t._m(3),a("input",{directives:[{name:"model",rawName:"v-model",value:t.signup_data.password,expression:"signup_data.password"}],staticClass:"form-control",attrs:{id:"password",type:"password",name:"password",required:"required",autocomplete:"new-password",minlength:"6"},domProps:{value:t.signup_data.password},on:{keyup:function(s){return t.confirmPassword(t.signup_data.password,t.signup_data.c_password)},input:function(s){s.target.composing||t.$set(t.signup_data,"password",s.target.value)}}})])]),a("div",{staticClass:"form-group row"},[a("label",{staticClass:"col-md-4 col-form-label text-md-right",attrs:{for:"password-confirm"}},[t._v("Confirm Password")]),a("div",{staticClass:"col-md-6"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.signup_data.c_password,expression:"signup_data.c_password"}],staticClass:"form-control",attrs:{id:"password-confirm",type:"password",name:"password_confirmation",required:"required",autocomplete:"new-password"},domProps:{value:t.signup_data.c_password},on:{keyup:function(s){return t.confirmPassword(t.signup_data.password,t.signup_data.c_password)},input:function(s){s.target.composing||t.$set(t.signup_data,"c_password",s.target.value)}}}),a("span",{staticClass:"text-danger"},[t._v(t._s(t.passwordMissmatch))])])]),a("div",{staticClass:"form-group row mb-0"},[a("div",{staticClass:"col-md-8 offset-md-4"},[a("button",{staticClass:"btn btn-primary",attrs:{type:"submit",disabled:t.showLoading}},[t.showLoading?t._e():a("span",[t._v(" Update ")]),t.showLoading?a("v-progress-circular",{attrs:{color:"white",size:20,indeterminate:""}}):t._e()],1)])])]):t._e()])])])])]),a("app-footer"),a("v-snackbar",{attrs:{timeout:t.alertNotify.timeout,centered:"",color:t.alertNotify.colorTheme},scopedSlots:t._u([{key:"action",fn:function(s){var e=s.attrs;return[a("v-icon",t._b({on:{click:function(s){t.alertNotify.showAlert=!1}}},"v-icon",e,!1),[t._v(" mdi-close ")])]}}]),model:{value:t.alertNotify.showAlert,callback:function(s){t.$set(t.alertNotify,"showAlert",s)},expression:"alertNotify.showAlert"}},[t._v(" "+t._s(t.alertNotify.text)+" ")])],1)},i=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"card-header"},[a("i",{staticClass:"fa fa-key"}),t._v(" Forgotten password")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"from-group row"},[a("label",{staticClass:"col-md-4 col-form-label text-md-right",attrs:{for:"email"}}),a("div",{staticClass:"col-md-6"})])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"from-group row"},[a("label",{staticClass:"col-md-4 col-form-label text-md-right",attrs:{for:"email"}})])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("i",[a("small",{staticClass:"text-danger"},[t._v("Length should be six characters or more")])])}],o={data:function(){return{showLoading:!1,userEmail:"",emailInput:!0,otpInput:!1,signup_data:{},newPassword:!1,confirm_email:"",passwordMissmatch:"",otp:"",alertNotify:{showAlert:!1,text:"",timeout:3e3,colorTheme:""}}},methods:{alertMethod:function(t,s,a){this.alertNotify.showAlert=t,this.alertNotify.text=s,this.alertNotify.colorTheme=a},sendOTP:function(){var t=this;this.showLoading=!0;var s={email:this.userEmail};this.axios.post(this.$hostname+"general_api.php?action=retrivePassword",s).then((function(s){"Not found"==s.data.respond?t.alertMethod(!0,"Email not found in database","red"):"No password"==s.data.respond?t.alertMethod(!0,"This account is linked with email, Login to email instead","red"):"sent"==s.data.respond?(t.emailInput=!1,t.otpInput=!0,t.alertMethod(!0,"Code sent to your email","green")):t.alertMethod(!0,s.data.respond,"red"),t.showLoading=!1})).catch((function(s){t.showLoading=!1,t.alertNotify.showAlert=!0,t.alertNotify.text=s,t.alertNotify.colorTheme="red"}))},confirmOTP:function(){var t=this;this.showLoading=!0;var s={otp:this.otp};this.axios.post(this.$hostname+"general_api.php?action=confirmOTP",s).then((function(s){"Correct"==s.data.respond?(t.emailInput=!1,t.otpInput=!1,t.newPassword=!0):t.alertMethod(!0,s.data.respond,s.data.alertColor),t.showLoading=!1})).catch((function(s){t.showLoading=!1,t.alertNotify.showAlert=!0,t.alertNotify.text=s,t.alertNotify.colorTheme="red"}))},resendOTP:function(){this.emailInput=!0,this.otpInput=!1},confirmPassword:function(t,s){void 0==s?this.passwordMissmatch="":t!=s?(this.passwordMissmatch="password does not match",this.showLoading=!0):(this.passwordMissmatch="",this.showLoading=!1)},updatePassword:function(){var t=this;this.showLoading=!0;var s={userEmail:this.userEmail,newPassword:this.signup_data.password};this.axios.post(this.$hostname+"general_api.php?action=updatePassword",s).then((function(s){"success"==s.data.response&&(t.alertMethod(!0,"Password changed successfully!","green"),t.$router.push({path:"/login"})),t.showLoading=!1})).catch((function(s){t.alertMethod(!0,s,"red")}))}}},r=o,n=(a("3b5f"),a("2877")),c=a("6544"),l=a.n(c),d=a("132d"),u=a("490a"),p=(a("caad"),a("a9e3"),a("ade3")),m=(a("ca71"),a("8dd9")),h=a("a9ad"),f=a("7560"),v=a("f2e7"),g=a("fe6c"),w=a("58df"),b=a("80d2"),_=a("d9bd"),C=Object(w["a"])(m["a"],h["a"],v["a"],Object(g["b"])(["absolute","bottom","left","right","top"])).extend({name:"v-snackbar",props:{app:Boolean,centered:Boolean,contentClass:{type:String,default:""},multiLine:Boolean,text:Boolean,timeout:{type:[Number,String],default:5e3},transition:{type:[Boolean,String],default:"v-snack-transition",validator:function(t){return"string"===typeof t||!1===t}},vertical:Boolean},data:function(){return{activeTimeout:-1}},computed:{classes:function(){return{"v-snack--absolute":this.absolute,"v-snack--active":this.isActive,"v-snack--bottom":this.bottom||!this.top,"v-snack--centered":this.centered,"v-snack--has-background":this.hasBackground,"v-snack--left":this.left,"v-snack--multi-line":this.multiLine&&!this.vertical,"v-snack--right":this.right,"v-snack--text":this.text,"v-snack--top":this.top,"v-snack--vertical":this.vertical}},hasBackground:function(){return!this.text&&!this.outlined},isDark:function(){return this.hasBackground?!this.light:f["a"].options.computed.isDark.call(this)},styles:function(){if(this.absolute)return{};var t=this.$vuetify.application,s=t.bar,a=t.bottom,e=t.footer,i=t.insetFooter,o=t.left,r=t.right,n=t.top;return{paddingBottom:Object(b["f"])(a+e+i),paddingLeft:this.app?Object(b["f"])(o):void 0,paddingRight:this.app?Object(b["f"])(r):void 0,paddingTop:Object(b["f"])(s+n)}}},watch:{isActive:"setTimeout",timeout:"setTimeout"},mounted:function(){this.isActive&&this.setTimeout()},created:function(){this.$attrs.hasOwnProperty("auto-height")&&Object(_["e"])("auto-height",this),0==this.timeout&&Object(_["d"])('timeout="0"',"-1",this)},methods:{genActions:function(){return this.$createElement("div",{staticClass:"v-snack__action "},[Object(b["n"])(this,"action",{attrs:{class:"v-snack__btn"}})])},genContent:function(){return this.$createElement("div",{staticClass:"v-snack__content",class:Object(p["a"])({},this.contentClass,!0),attrs:{role:"status","aria-live":"polite"}},[Object(b["n"])(this)])},genWrapper:function(){var t=this.hasBackground?this.setBackgroundColor:this.setTextColor,s=t(this.color,{staticClass:"v-snack__wrapper",class:m["a"].options.computed.classes.call(this),directives:[{name:"show",value:this.isActive}]});return this.$createElement("div",s,[this.genContent(),this.genActions()])},genTransition:function(){return this.$createElement("transition",{props:{name:this.transition}},[this.genWrapper()])},setTimeout:function(){var t=this;window.clearTimeout(this.activeTimeout);var s=Number(this.timeout);this.isActive&&![0,-1].includes(s)&&(this.activeTimeout=window.setTimeout((function(){t.isActive=!1}),s))}},render:function(t){return t("div",{staticClass:"v-snack",class:this.classes,style:this.styles},[!1!==this.transition?this.genTransition():this.genWrapper()])}}),y=Object(n["a"])(r,e,i,!1,null,"fefb66e6",null);s["default"]=y.exports;l()(y,{VIcon:d["a"],VProgressCircular:u["a"],VSnackbar:C})},a141:function(t,s,a){},ca71:function(t,s,a){}}]);
//# sourceMappingURL=forgot_password.622b6478.js.map