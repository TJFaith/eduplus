(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["login"],{2984:function(t,a,s){"use strict";var e=s("de40"),o=s.n(e);o.a},a55b:function(t,a,s){"use strict";s.r(a);var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("app-header"),s("div",{staticClass:"container pushPageDown"},[s("div",{staticClass:"row justify-content-center"},[s("div",{staticClass:"col-md-8"},[s("div",{staticClass:"card"},[t._m(0),s("div",{staticClass:"card-body"},[s("form",{on:{submit:function(a){return a.preventDefault(),t.login()}}},[s("div",{staticClass:"from-group row"},[s("label",{staticClass:"col-md-4 col-form-label text-md-right",attrs:{for:"email"}}),s("div",{staticClass:"col-md-6"},[s("label",{attrs:{for:"response"},domProps:{innerHTML:t._s(t.login_response)}})])]),s("div",{staticClass:"form-group row"},[s("label",{staticClass:"col-md-4 col-form-label text-md-right",attrs:{for:"email"}},[t._v("E-Mail Address")]),s("div",{staticClass:"col-md-6"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.login_data.email,expression:"login_data.email"}],staticClass:"form-control",attrs:{id:"email",type:"email",name:"email",required:"required"},domProps:{value:t.login_data.email},on:{input:function(a){a.target.composing||t.$set(t.login_data,"email",a.target.value)}}})])]),s("div",{staticClass:"form-group row"},[s("label",{staticClass:"col-md-4 col-form-label text-md-right",attrs:{for:"password"}},[t._v("Password")]),s("div",{staticClass:"col-md-6"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.login_data.password,expression:"login_data.password"}],staticClass:"form-control ",attrs:{id:"password",type:"password",name:"password",required:"required"},domProps:{value:t.login_data.password},on:{input:function(a){a.target.composing||t.$set(t.login_data,"password",a.target.value)}}})])]),t._m(1),s("div",{staticClass:"form-group row mb-0"},[s("div",{staticClass:"col-md-8 offset-md-4"},[s("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[t._v(" Login ")]),s("a",{staticClass:"btn bg-light text-muted ml-3",attrs:{href:""}},[t._v("Forgot Your Password?")]),s("hr"),s("button",{directives:[{name:"google-signin-button",rawName:"v-google-signin-button",value:t.clientId,expression:"clientId"}],staticClass:"google-signin-button btn bg-danger text-white",attrs:{type:"button"}},[t._v(" Continue with Google")])])])])])])])])]),s("app-footer")],1)},o=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"card-header"},[s("i",{staticClass:"fa fa-user"}),t._v("Login")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"form-group row"},[s("div",{staticClass:"col-md-6 offset-md-4"},[s("div",{staticClass:"form-check"},[s("input",{staticClass:"form-check-input",attrs:{type:"checkbox",name:"remember",id:"remember"}}),s("label",{staticClass:"form-check-label",attrs:{for:"remember"}},[t._v(" Remember Me")])])])])}],i=(s("b0c0"),s("56d7")),n={data:function(){return{login_data:{},login_response:"",clientId:"339735205850-oc0pamnamh5s68e53h14sgl6v9ncvefv.apps.googleusercontent.com"}},methods:{OnGoogleAuthSuccess:function(t){var a=this;this.axios.get("https://oauth2.googleapis.com/tokeninfo?id_token="+t).then((function(t){var s=t.data;a.axios.post(a.$hostname+"general_api.php?action=google_login",s).then((function(t){"success"!=t.data.respond?a.login_response=t.data.respond:(a.login_response="",a.$session.start(),a.$session.set("user_login",t.data.user_data[0]),i["bus"].$emit("login_status",{login_status:!0,user_id:t.data.user_data[0].id,user_name:t.data.user_data[0].name}),window.location="/dashboard")})).catch((function(t){alert(t)}))})).catch((function(t){alert(t)}))},OnGoogleAuthFail:function(t){alert(t)},login:function(){var t=this;this.axios.post(this.$hostname+"general_api.php?action=login",this.login_data).then((function(a){"success"!=a.data.respond?t.login_response=a.data.respond:(t.login_response="",t.$session.start(),t.$session.set("user_login",a.data.user_data[0]),i["bus"].$emit("login_status",{login_status:!0,user_id:a.data.user_data[0].id,user_name:a.data.user_data[0].name}),window.location="/dashboard")})).catch((function(t){alert(t)}))}},mounted:function(){this.$session.has("user_login")&&(window.location="/dashboard")}},r=n,l=(s("2984"),s("2877")),d=Object(l["a"])(r,e,o,!1,null,"c8446086",null);a["default"]=d.exports},de40:function(t,a,s){}}]);
//# sourceMappingURL=login.75ae732c.js.map