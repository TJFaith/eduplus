(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["login"],{"40e2":function(t,s,a){},"79ee":function(t,s,a){"use strict";var o=a("40e2"),e=a.n(o);e.a},a55b:function(t,s,a){"use strict";a.r(s);var o=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("app-header"),a("div",{staticClass:"container pushPageDown"},[a("div",{staticClass:"row justify-content-center"},[a("div",{staticClass:"col-md-8"},[a("div",{staticClass:"card"},[t._m(0),a("div",{staticClass:"card-body"},[a("form",{on:{submit:function(s){return s.preventDefault(),t.login()}}},[a("div",{staticClass:"from-group row"},[a("label",{staticClass:"col-md-4 col-form-label text-md-right",attrs:{for:"email"}}),a("div",{staticClass:"col-md-6"},[a("label",{attrs:{for:"response"},domProps:{innerHTML:t._s(t.login_response)}})])]),a("div",{staticClass:"form-group row"},[a("label",{staticClass:"col-md-4 col-form-label text-md-right",attrs:{for:"email"}},[t._v("E-Mail Address")]),a("div",{staticClass:"col-md-6"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.login_data.email,expression:"login_data.email"}],staticClass:"form-control",attrs:{id:"email",type:"email",name:"email",required:"required"},domProps:{value:t.login_data.email},on:{input:function(s){s.target.composing||t.$set(t.login_data,"email",s.target.value)}}})])]),a("div",{staticClass:"form-group row"},[a("label",{staticClass:"col-md-4 col-form-label text-md-right",attrs:{for:"password"}},[t._v("Password")]),a("div",{staticClass:"col-md-6"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.login_data.password,expression:"login_data.password"}],staticClass:"form-control ",attrs:{id:"password",type:"password",name:"password",required:"required"},domProps:{value:t.login_data.password},on:{input:function(s){s.target.composing||t.$set(t.login_data,"password",s.target.value)}}})])]),t._m(1),a("div",{staticClass:"form-group row mb-0"},[a("div",{staticClass:"col-md-8 offset-md-4"},[a("button",{staticClass:"btn btn-primary",attrs:{type:"submit",disabled:t.showLoading}},[t.showLoading?t._e():a("span",[t._v(" Login ")]),t.showLoading?a("v-progress-circular",{attrs:{color:"white",size:20,indeterminate:""}}):t._e()],1),a("a",{staticClass:"btn bg-light text-muted ml-3",attrs:{href:""}},[t._v("Forgot Your Password?")]),a("hr"),a("button",{directives:[{name:"google-signin-button",rawName:"v-google-signin-button",value:t.clientId,expression:"clientId"}],staticClass:"google-signin-button btn bg-danger text-white",attrs:{disabled:t.showLoading,type:"button"}},[t._v(" Continue with Google")])])])])])])])])]),a("app-footer")],1)},e=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"card-header"},[a("i",{staticClass:"fa fa-user"}),t._v("Login")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"form-group row"},[a("div",{staticClass:"col-md-6 offset-md-4"},[a("div",{staticClass:"form-check"},[a("input",{staticClass:"form-check-input",attrs:{type:"checkbox",name:"remember",id:"remember"}}),a("label",{staticClass:"form-check-label",attrs:{for:"remember"}},[t._v(" Remember Me")])])])])}],i=(a("b0c0"),a("56d7")),n={data:function(){return{showLoading:!1,login_data:{},login_response:"",clientId:"444741050365-iv78pe1mmrkbll31t888vpvundu44phg.apps.googleusercontent.com"}},methods:{OnGoogleAuthSuccess:function(t){var s=this;this.showLoading=!0,this.axios.get("https://oauth2.googleapis.com/tokeninfo?id_token="+t).then((function(t){var a=t.data;s.axios.post(s.$hostname+"general_api.php?action=google_login",a).then((function(t){"success"!=t.data.respond?s.login_response=t.data.respond:(s.login_response="",s.$session.start(),s.$session.set("user_login",t.data.user_data[0]),i["bus"].$emit("login_status",{login_status:!0,user_id:t.data.user_data[0].id,user_name:t.data.user_data[0].name}),window.location="/dashboard",s.showLoading=!1)})).catch((function(t){s.showLoading=!1,alert(t)}))})).catch((function(t){s.showLoading=!1,alert(t)}))},OnGoogleAuthFail:function(t){this.showLoading=!1,alert(t)},login:function(){var t=this;this.showLoading=!0,this.axios.post(this.$hostname+"general_api.php?action=login",this.login_data).then((function(s){"success"!=s.data.respond?(t.showLoading=!1,t.login_response=s.data.respond):(t.login_response="",t.$session.start(),t.$session.set("user_login",s.data.user_data[0]),i["bus"].$emit("login_status",{login_status:!0,user_id:s.data.user_data[0].id,user_name:s.data.user_data[0].name}),window.location="/dashboard",t.showLoading=!1)})).catch((function(s){t.showLoading=!1,alert(s)}))}},mounted:function(){this.$session.has("user_login")&&(window.location="/dashboard")}},r=n,l=(a("79ee"),a("2877")),d=a("6544"),c=a.n(d),u=a("490a"),m=Object(l["a"])(r,o,e,!1,null,"c84e7392",null);s["default"]=m.exports;c()(m,{VProgressCircular:u["a"]})}}]);
//# sourceMappingURL=login.522675e0.js.map