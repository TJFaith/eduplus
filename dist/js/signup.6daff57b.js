(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["signup"],{"029e":function(e,t,r){},1331:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),u=(0,n.regex)("integer",/(^[0-9]*$)|(^-[0-9]+$)/);t.default=u},"2a12":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),u=function(e){return(0,n.withParams)({type:"maxLength",max:e},(function(t){return!(0,n.req)(t)||(0,n.len)(t)<=e}))};t.default=u},3360:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),u=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,n.withParams)({type:"and"},(function(){for(var e=this,r=arguments.length,n=new Array(r),u=0;u<r;u++)n[u]=arguments[u];return t.length>0&&t.reduce((function(t,r){return t&&r.apply(e,n)}),!0)}))};t.default=u},"3a54":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),u=(0,n.regex)("alphaNum",/^[a-zA-Z0-9]*$/);t.default=u},"45b8":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),u=(0,n.regex)("numeric",/^[0-9]*$/);t.default=u},"46bc":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),u=function(e){return(0,n.withParams)({type:"maxValue",max:e},(function(t){return!(0,n.req)(t)||(!/\s/.test(t)||t instanceof Date)&&+t<=+e}))};t.default=u},"5d75":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),u=/^(?:[A-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[A-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9]{2,}(?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/,i=(0,n.regex)("email",u);t.default=i},"5db3":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),u=function(e){return(0,n.withParams)({type:"minLength",min:e},(function(t){return!(0,n.req)(t)||(0,n.len)(t)>=e}))};t.default=u},6235:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),u=(0,n.regex)("alpha",/^[a-zA-Z]*$/);t.default=u},"62c4":function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("app-header"),r("app-snackbar",{attrs:{message:e.errorMessage,showSnackbarAlert:e.showSnackbarAlert}}),r("div",{staticClass:"pageWrapper"},[r("div",{staticClass:"container pushPageDown"},[0==e.signUp?r("div",{staticClass:"row justify-content-center"},[r("div",{staticClass:"col-md-8"},[r("div",{staticClass:"bg-white card"},[r("div",{staticClass:"card-header"},[e._v("Sign Up")]),r("div",{staticClass:"card-body"},[r("form",[r("v-text-field",{attrs:{"error-messages":e.nameErrors,label:"Name",required:""},on:{input:function(t){return e.$v.name.$touch()},blur:function(t){return e.$v.name.$touch()}},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}}),r("v-text-field",{attrs:{"error-messages":e.emailErrors,label:"E-mail",required:""},on:{"~keydown":function(t){e.checkMail=""},input:function(t){return e.$v.email.$touch()},blur:function(t){return e.$v.email.$touch()}},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}}),r("v-text-field",{attrs:{type:"password",counter:6,"error-messages":e.passwordErrors,label:"password",required:""},on:{input:function(t){return e.$v.password.$touch()},blur:function(t){return e.$v.password.$touch()}},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}),r("v-text-field",{attrs:{type:"password","error-messages":e.cpasswordErrors,label:"Confirm Password",required:""},on:{input:function(t){return e.$v.cpassword.$touch()},blur:function(t){return e.$v.cpassword.$touch()}},model:{value:e.cpassword,callback:function(t){e.cpassword=t},expression:"cpassword"}}),r("vue-tel-input-vuetify",{attrs:{required:"","error-messages":e.phoneErrors},on:{input:function(t){return e.$v.phone.$touch()},blur:function(t){return e.$v.phone.$touch()}},model:{value:e.phone,callback:function(t){e.phone=t},expression:"phone"}}),r("v-select",{attrs:{items:e.items,"error-messages":e.genderErrors,label:"Gender",required:""},on:{change:function(t){return e.$v.gender.$touch()},blur:function(t){return e.$v.gender.$touch()}},model:{value:e.gender,callback:function(t){e.gender=t},expression:"gender"}}),r("div",{staticClass:"d-flex align-center"},[r("v-checkbox",{attrs:{"error-messages":e.checkboxErrors,label:"Agree to our terms",required:""},on:{change:function(t){return e.$v.checkbox.$touch()},blur:function(t){return e.$v.checkbox.$touch()}},model:{value:e.checkbox,callback:function(t){e.checkbox=t},expression:"checkbox"}}),r("v-chip",{staticClass:"ma-2",attrs:{label:""},on:{click:function(t){e.showTerms=!e.showTerms}}},[e._v("Temrs and Conditon")])],1),r("v-btn",{staticClass:"mr-4",on:{click:e.submit}},[e.show_loader?r("div",[r("v-progress-circular",{attrs:{color:"primary",size:20,indeterminate:""}}),r("small",{staticClass:"text-primary"},[e._v(" Signing Up, Please Wait.....")])],1):r("div",[e._v("Sign Up")])]),r("v-btn",{staticClass:"btn-danger bg-danger"},[e._v(" Sign Up with Google ")])],1)])])])]):e._e(),e.signUp?r("div",{staticClass:"text-white",staticStyle:{"text-align":"center","margin-top":"20vh"}},[r("h3",[e._v("THANK YOU FOR SIGNING UP WITH EDUPLUS, CHECK YOUR EMAIL TO CONFIRM YOUR REGISTRATION")]),r("br"),r("v-btn",{attrs:{"btn-lg":"",color:"green",text:""}},[r("a",{attrs:{href:"/login"}},[e._v(" Login to your dashboard >>")])])],1):e._e()])]),r("app-footer"),r("app-terms",{attrs:{showTerms:e.showTerms}})],1)},u=[],i=(r("b0c0"),r("56d7")),a=r("1dce"),o=r("b5ae"),s={mixins:[a["validationMixin"]],validations:{name:{required:o["required"]},password:{required:o["required"],minLength:Object(o["minLength"])(6)},cpassword:{required:o["required"],minLength:Object(o["minLength"])(6)},email:{required:o["required"],email:o["email"]},phone:{required:o["required"]},gender:{required:o["required"]},checkbox:{checked:function(e){return e}}},data:function(){return{otp:"",errorMessage:"",showSnackbarAlert:!1,showTerms:!1,signUp:!1,show_loader:!1,name:"",email:"",password:"",cpassword:"",gender:null,checkbox:!1,phone:null,items:["Male","Female","Corss Gender"],checkMail:""}},computed:{nameErrors:function(){var e=[];return this.$v.name.$dirty?(!this.$v.name.required&&e.push("Name is required."),e):e},checkboxErrors:function(){var e=[];return this.$v.checkbox.$dirty?(!this.$v.checkbox.checked&&e.push("You must agree to continue!"),e):e},genderErrors:function(){var e=[];return this.$v.gender.$dirty?(!this.$v.gender.required&&e.push("Item is required"),e):e},phoneErrors:function(){var e=[];return this.$v.phone.$dirty?(!this.$v.phone.required&&e.push("Telephone Number is required"),e):e},emailErrors:function(){var e=[];return this.$v.email.$dirty?(!this.$v.email.email&&e.push("Must be valid e-mail"),!this.$v.email.required&&e.push("E-mail is required"),"Exist"==this.checkMail&&e.push("Email already exist, please login instead"),e):e},passwordErrors:function(){var e=[];return this.$v.password.$dirty?(!this.$v.password.minLength&&e.push("password must be at most 6 characters long"),!this.$v.password.required&&e.push("password is required"),e):e},cpasswordErrors:function(){var e=[];return this.$v.cpassword.$dirty?(!this.$v.cpassword.required&&e.push("please confirm your password"),this.$v.cpassword.$model!=this.$v.password.$model&&e.push("Password Missmatch"),e):e}},methods:{submit:function(){this.$v.$touch(),0==this.$v.$error&&(this.submitForm(),this.show_loader=!0)},submitForm:function(){var e=this,t={name:this.name,email:this.email,password:this.password,gender:this.gender,phone:this.phone};this.axios.post(this.$hostname+"general_api.php?action=signup",t).then((function(t){console.log(t),"Exist"==t.data.respond?(e.checkMail="Exist",e.show_loader=!1):"saved"==t.data.respond?(e.signUp=!0,e.show_loader=!1):(e.errorMessage=t.data,e.showSnackbarAlert=!0,e.show_loader=!1)})).catch((function(t){e.show_loader=!1,e.errorMessage=t,e.showSnackbarAlert=!0}))},clear:function(){this.$v.$reset(),this.name="",this.email="",this.gender=null,this.checkbox=!1}},mounted:function(){this.$session.has("user_login")&&this.$router.push({path:"/dashboard"}).catch((function(){}))},created:function(){var e=this;i["bus"].$on("showTerms",(function(t){e.showTerms=t}))}},c=s,d=(r("b630"),r("2877")),f=r("6544"),l=r.n(f),p=r("8336"),h=r("ac7c"),v=r("cc20"),m=r("490a"),b=r("b974"),g=r("8654"),y=Object(d["a"])(c,n,u,!1,null,"27f6055c",null);t["default"]=y.exports;l()(y,{VBtn:p["a"],VCheckbox:h["a"],VChip:v["a"],VProgressCircular:m["a"],VSelect:b["a"],VTextField:g["a"]})},6417:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),u=function(e){return(0,n.withParams)({type:"not"},(function(t,r){return!(0,n.req)(t)||!e.call(this,t,r)}))};t.default=u},"772d":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),u=/^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i,i=(0,n.regex)("url",u);t.default=i},"78ef":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"withParams",{enumerable:!0,get:function(){return n.default}}),t.regex=t.ref=t.len=t.req=void 0;var n=u(r("8750"));function u(e){return e&&e.__esModule?e:{default:e}}function i(e){return i="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i(e)}var a=function(e){if(Array.isArray(e))return!!e.length;if(void 0===e||null===e)return!1;if(!1===e)return!0;if(e instanceof Date)return!isNaN(e.getTime());if("object"===i(e)){for(var t in e)return!0;return!1}return!!String(e).length};t.req=a;var o=function(e){return Array.isArray(e)?e.length:"object"===i(e)?Object.keys(e).length:String(e).length};t.len=o;var s=function(e,t,r){return"function"===typeof e?e.call(t,r):r[e]};t.ref=s;var c=function(e,t){return(0,n.default)({type:e},(function(e){return!a(e)||t.test(e)}))};t.regex=c},8750:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n="web"===Object({NODE_ENV:"production",BASE_URL:"/"}).BUILD?r("cb69").withParams:r("0234").withParams,u=n;t.default=u},"91d3":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:":";return(0,n.withParams)({type:"macAddress"},(function(t){if(!(0,n.req)(t))return!0;if("string"!==typeof t)return!1;var r="string"===typeof e&&""!==e?t.split(e):12===t.length||16===t.length?t.match(/.{2}/g):null;return null!==r&&(6===r.length||8===r.length)&&r.every(i)}))};t.default=u;var i=function(e){return e.toLowerCase().match(/^[0-9a-f]{2}$/)}},aa82:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),u=function(e){return(0,n.withParams)({type:"requiredIf",prop:e},(function(t,r){return!(0,n.ref)(e,this,r)||(0,n.req)(t)}))};t.default=u},b5ae:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"alpha",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(t,"alphaNum",{enumerable:!0,get:function(){return u.default}}),Object.defineProperty(t,"numeric",{enumerable:!0,get:function(){return i.default}}),Object.defineProperty(t,"between",{enumerable:!0,get:function(){return a.default}}),Object.defineProperty(t,"email",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(t,"ipAddress",{enumerable:!0,get:function(){return s.default}}),Object.defineProperty(t,"macAddress",{enumerable:!0,get:function(){return c.default}}),Object.defineProperty(t,"maxLength",{enumerable:!0,get:function(){return d.default}}),Object.defineProperty(t,"minLength",{enumerable:!0,get:function(){return f.default}}),Object.defineProperty(t,"required",{enumerable:!0,get:function(){return l.default}}),Object.defineProperty(t,"requiredIf",{enumerable:!0,get:function(){return p.default}}),Object.defineProperty(t,"requiredUnless",{enumerable:!0,get:function(){return h.default}}),Object.defineProperty(t,"sameAs",{enumerable:!0,get:function(){return v.default}}),Object.defineProperty(t,"url",{enumerable:!0,get:function(){return m.default}}),Object.defineProperty(t,"or",{enumerable:!0,get:function(){return b.default}}),Object.defineProperty(t,"and",{enumerable:!0,get:function(){return g.default}}),Object.defineProperty(t,"not",{enumerable:!0,get:function(){return y.default}}),Object.defineProperty(t,"minValue",{enumerable:!0,get:function(){return w.default}}),Object.defineProperty(t,"maxValue",{enumerable:!0,get:function(){return x.default}}),Object.defineProperty(t,"integer",{enumerable:!0,get:function(){return _.default}}),Object.defineProperty(t,"decimal",{enumerable:!0,get:function(){return P.default}}),t.helpers=void 0;var n=j(r("6235")),u=j(r("3a54")),i=j(r("45b8")),a=j(r("ec11")),o=j(r("5d75")),s=j(r("c99d")),c=j(r("91d3")),d=j(r("2a12")),f=j(r("5db3")),l=j(r("d4f4")),p=j(r("aa82")),h=j(r("e652")),v=j(r("b6cb")),m=j(r("772d")),b=j(r("d294")),g=j(r("3360")),y=j(r("6417")),w=j(r("eb66")),x=j(r("46bc")),_=j(r("1331")),P=j(r("c301")),$=O(r("78ef"));function O(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}function j(e){return e&&e.__esModule?e:{default:e}}t.helpers=$},b630:function(e,t,r){"use strict";var n=r("029e"),u=r.n(n);u.a},b6cb:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),u=function(e){return(0,n.withParams)({type:"sameAs",eq:e},(function(t,r){return t===(0,n.ref)(e,this,r)}))};t.default=u},c301:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),u=(0,n.regex)("decimal",/^[-]?\d*(\.\d+)?$/);t.default=u},c99d:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),u=(0,n.withParams)({type:"ipAddress"},(function(e){if(!(0,n.req)(e))return!0;if("string"!==typeof e)return!1;var t=e.split(".");return 4===t.length&&t.every(i)}));t.default=u;var i=function(e){if(e.length>3||0===e.length)return!1;if("0"===e[0]&&"0"!==e)return!1;if(!e.match(/^\d+$/))return!1;var t=0|+e;return t>=0&&t<=255}},cb69:function(e,t,r){"use strict";(function(e){function r(e){return r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.withParams=void 0;var n="undefined"!==typeof window?window:"undefined"!==typeof e?e:{},u=function(e,t){return"object"===r(e)&&void 0!==t?t:e((function(){}))},i=n.vuelidate?n.vuelidate.withParams:u;t.withParams=i}).call(this,r("c8ba"))},d294:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),u=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,n.withParams)({type:"or"},(function(){for(var e=this,r=arguments.length,n=new Array(r),u=0;u<r;u++)n[u]=arguments[u];return t.length>0&&t.reduce((function(t,r){return t||r.apply(e,n)}),!1)}))};t.default=u},d4f4:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),u=(0,n.withParams)({type:"required"},(function(e){return"string"===typeof e?(0,n.req)(e.trim()):(0,n.req)(e)}));t.default=u},e652:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),u=function(e){return(0,n.withParams)({type:"requiredUnless",prop:e},(function(t,r){return!!(0,n.ref)(e,this,r)||(0,n.req)(t)}))};t.default=u},eb66:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),u=function(e){return(0,n.withParams)({type:"minValue",min:e},(function(t){return!(0,n.req)(t)||(!/\s/.test(t)||t instanceof Date)&&+t>=+e}))};t.default=u},ec11:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),u=function(e,t){return(0,n.withParams)({type:"between",min:e,max:t},(function(r){return!(0,n.req)(r)||(!/\s/.test(r)||r instanceof Date)&&+e<=+r&&+t>=+r}))};t.default=u}}]);
//# sourceMappingURL=signup.6daff57b.js.map