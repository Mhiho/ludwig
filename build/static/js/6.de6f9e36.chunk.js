(this.webpackJsonpvanessa=this.webpackJsonpvanessa||[]).push([[6],{128:function(e,t,a){e.exports={submitContainer:"login_submitContainer__2DVxR",signUpButton:"login_signUpButton__8sgdX",pageTitle:"login_pageTitle__1NHe2",pageTitleHomePage:"login_pageTitleHomePage__37je0",emailInp:"login_emailInp__2JpwB",emailField:"login_emailField__1AQWh",marginLogin:"login_marginLogin__pEOjC"}},129:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a(130),n=Object.prototype.hasOwnProperty,s=Array.prototype.splice,o=Object.prototype.toString;function i(e){return o.call(e).slice(8,-1)}var c=Object.assign||function(e,t){return l(t).forEach((function(a){n.call(t,a)&&(e[a]=t[a])})),e},l="function"===typeof Object.getOwnPropertySymbols?function(e){return Object.keys(e).concat(Object.getOwnPropertySymbols(e))}:function(e){return Object.keys(e)};function u(e){return Array.isArray(e)?c(e.constructor(e.length),e):"Map"===i(e)?new Map(e):"Set"===i(e)?new Set(e):e&&"object"===typeof e?c(Object.create(Object.getPrototypeOf(e)),e):e}var p=function(){function e(){this.commands=c({},m),this.update=this.update.bind(this),this.update.extend=this.extend=this.extend.bind(this),this.update.isEquals=function(e,t){return e===t},this.update.newContext=function(){return(new e).update}}return Object.defineProperty(e.prototype,"isEquals",{get:function(){return this.update.isEquals},set:function(e){this.update.isEquals=e},enumerable:!0,configurable:!0}),e.prototype.extend=function(e,t){this.commands[e]=t},e.prototype.update=function(e,t){var a=this,s="function"===typeof t?{$apply:t}:t;Array.isArray(e)&&Array.isArray(s)||r(!Array.isArray(s),"update(): You provided an invalid spec to update(). The spec may not contain an array except as the value of $set, $push, $unshift, $splice or any custom command allowing an array value."),r("object"===typeof s&&null!==s,"update(): You provided an invalid spec to update(). The spec and every included key path must be plain objects containing one of the following commands: %s.",Object.keys(this.commands).join(", "));var o=e;return l(s).forEach((function(t){if(n.call(a.commands,t)){var r=e===o;o=a.commands[t](s[t],o,s,e),r&&a.isEquals(o,e)&&(o=e)}else{var c="Map"===i(e)?a.update(e.get(t),s[t]):a.update(e[t],s[t]),l="Map"===i(o)?o.get(t):o[t];a.isEquals(c,l)&&("undefined"!==typeof c||n.call(e,t))||(o===e&&(o=u(e)),"Map"===i(o)?o.set(t,c):o[t]=c)}})),o},e}();t.Context=p;var m={$push:function(e,t,a){return h(t,a,"$push"),e.length?t.concat(e):t},$unshift:function(e,t,a){return h(t,a,"$unshift"),e.length?e.concat(t):t},$splice:function(e,t,a,n){return function(e,t){r(Array.isArray(e),"Expected $splice target to be an array; got %s",e),f(t.$splice)}(t,a),e.forEach((function(e){f(e),t===n&&e.length&&(t=u(n)),s.apply(t,e)})),t},$set:function(e,t,a){return function(e){r(1===Object.keys(e).length,"Cannot have more than one key in an object with $set")}(a),e},$toggle:function(e,t){g(e,"$toggle");var a=e.length?u(t):t;return e.forEach((function(e){a[e]=!t[e]})),a},$unset:function(e,t,a,r){return g(e,"$unset"),e.forEach((function(e){Object.hasOwnProperty.call(t,e)&&(t===r&&(t=u(r)),delete t[e])})),t},$add:function(e,t,a,r){return b(t,"$add"),g(e,"$add"),"Map"===i(t)?e.forEach((function(e){var a=e[0],n=e[1];t===r&&t.get(a)!==n&&(t=u(r)),t.set(a,n)})):e.forEach((function(e){t!==r||t.has(e)||(t=u(r)),t.add(e)})),t},$remove:function(e,t,a,r){return b(t,"$remove"),g(e,"$remove"),e.forEach((function(e){t===r&&t.has(e)&&(t=u(r)),t.delete(e)})),t},$merge:function(e,t,a,n){var s,o;return s=t,r((o=e)&&"object"===typeof o,"update(): $merge expects a spec of type 'object'; got %s",o),r(s&&"object"===typeof s,"update(): $merge expects a target of type 'object'; got %s",s),l(e).forEach((function(a){e[a]!==t[a]&&(t===n&&(t=u(n)),t[a]=e[a])})),t},$apply:function(e,t){var a;return r("function"===typeof(a=e),"update(): expected spec of $apply to be a function; got %s.",a),e(t)}},d=new p;function h(e,t,a){r(Array.isArray(e),"update(): expected target of %s to be an array; got %s.",a,e),g(t[a],a)}function g(e,t){r(Array.isArray(e),"update(): expected spec of %s to be an array; got %s. Did you forget to wrap your parameter in an array?",t,e)}function f(e){r(Array.isArray(e),"update(): expected spec of $splice to be an array of arrays; got %s. Did you forget to wrap your parameters in an array?",e)}function b(e,t){var a=i(e);r("Map"===a||"Set"===a,"update(): %s expects a target of type Set or Map; got %s",t,a)}t.isEquals=d.update.isEquals,t.extend=d.extend,t.default=d.update,t.default.default=e.exports=c(t.default,t)},130:function(e,t,a){"use strict";e.exports=function(e,t,a,r,n,s,o,i){if(!e){var c;if(void 0===t)c=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var l=[a,r,n,s,o,i],u=0;(c=new Error(t.replace(/%s/g,(function(){return l[u++]})))).name="Invariant Violation"}throw c.framesToPop=1,c}}},151:function(e,t,a){"use strict";a.r(t);var r=a(23),n=a(51),s=a(29),o=a(30),i=a(32),c=a(31),l=a(0),u=a.n(l),p=a(19),m=(a(40),a(128)),d=a.n(m),h=(a(129),new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)),g=function(e){Object(i.a)(a,e);var t=Object(c.a)(a);function a(){var e;Object(s.a)(this,a);for(var o=arguments.length,i=new Array(o),c=0;c<o;c++)i[c]=arguments[c];return(e=t.call.apply(t,[this].concat(i))).state={email:"",birth:"",name:"",password:"",passwordConf:"",genre:"",description:"",error:"",errors:{name:!0,email:!0,birth:!0,description:!0,genre:!0,password:!0,button:!1}},e.handleSubmit=function(t){t.preventDefault();var a={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e.state.email,birth:e.state.birth,name:e.state.name,password:e.state.password,genre:e.state.genre,description:e.state.description})};return fetch("".concat(p.a,"/users/add"),a).then((function(a){return a.ok||(e.setState({error:"Co\u015b posz\u0142o nie tak. Prawdopodobnie masz ju\u017c konto na tym portalu."}),t.preventDefault()),a})).then((function(e){window.location.replace("/login")}))},e.handleChange=function(t){e.setState(Object(n.a)({},t.target.name,t.target.value)),"name"==[t.target.name]&&0==e.state.errors.name&&e.state.name.length<=3&&e.setState({errors:Object(r.a)(Object(r.a)({},e.state.errors),{},Object(n.a)({},t.target.name,!0))}),"email"!=[t.target.name]||0!=e.state.errors.email||h.test(e.state.email)||e.setState({errors:Object(r.a)(Object(r.a)({},e.state.errors),{},Object(n.a)({},t.target.name,!0))}),"birth"==[t.target.name]&&0==e.state.errors.birth&&""==e.state.birth&&e.setState({errors:Object(r.a)(Object(r.a)({},e.state.errors),{},Object(n.a)({},t.target.name,!0))}),"genre"==[t.target.name]&&0==e.state.errors.genre&&""==e.state.genre&&e.setState({errors:Object(r.a)(Object(r.a)({},e.state.errors),{},Object(n.a)({},t.target.name,!0))}),"description"==[t.target.name]&&0==e.state.errors.description&&""==e.state.description&&e.setState({errors:Object(r.a)(Object(r.a)({},e.state.errors),{},Object(n.a)({},t.target.name,!0))}),"password"==[t.target.name]&&0==e.state.errors.password&&e.state.password.length<6&&e.setState({errors:Object(r.a)(Object(r.a)({},e.state.errors),{},Object(n.a)({},t.target.name,!0))})},e.handleBlur=function(t){return function(a){e.setState({errors:Object(r.a)(Object(r.a)({},e.state.errors),{},Object(n.a)({},t,!1))}),"name"==t&&1==e.state.errors.name&&e.state.name.length>=3&&e.setState({errors:Object(r.a)(Object(r.a)({},e.state.errors),{},Object(n.a)({},t,!0))}),"email"==t&&1==e.state.errors.email&&h.test(e.state.email)&&e.setState({errors:Object(r.a)(Object(r.a)({},e.state.errors),{},Object(n.a)({},t,!0))}),"birth"==t&&1==e.state.errors.birth&&""!=e.state.birth&&e.setState({errors:Object(r.a)(Object(r.a)({},e.state.errors),{},Object(n.a)({},t,!0))}),"genre"==t&&1==e.state.errors.genre&&""!=e.state.genre&&e.setState({errors:Object(r.a)(Object(r.a)({},e.state.errors),{},Object(n.a)({},t,!0))}),"description"==t&&1==e.state.errors.description&&""!=e.state.description&&e.setState({errors:Object(r.a)(Object(r.a)({},e.state.errors),{},Object(n.a)({},t,!0))}),"password"==t&&1==e.state.errors.password&&e.state.password.length>=6&&e.setState({errors:Object(r.a)(Object(r.a)({},e.state.errors),{},Object(n.a)({},t,!0))})}},e}return Object(o.a)(a,[{key:"render",value:function(){return u.a.createElement("div",null,u.a.createElement("div",{style:{color:"red",width:"100%",height:"50px"}},this.state.error),u.a.createElement("form",{name:"form",onSubmit:this.handleSubmit},u.a.createElement("div",null,u.a.createElement("label",{htmlFor:"email"},u.a.createElement("span",null,"Email"),u.a.createElement("input",{type:"email",onBlur:this.handleBlur("email"),className:1==this.state.errors.email?"".concat(d.a.Input):"".concat(d.a.Input," ").concat(d.a.Error),name:"email",value:this.state.email,onChange:this.handleChange}))),u.a.createElement("div",{className:d.a.errMes},0!=this.state.errors.email||h.test(this.state.email)?"":u.a.createElement("span",null,"Wprowad\u017a w\u0142a\u015bciwy email")),u.a.createElement("div",null,u.a.createElement("label",{htmlFor:"name"},u.a.createElement("span",null,"Nazwa u\u017cytkownika"),u.a.createElement("input",{onBlur:this.handleBlur("name"),className:1==this.state.errors.name?"".concat(d.a.Input):"".concat(d.a.Input," ").concat(d.a.Error),type:"text",name:"name",value:this.state.name,onChange:this.handleChange}))),u.a.createElement("div",{className:d.a.errMes},0==this.state.errors.name&&this.state.name.length<3?u.a.createElement("span",null,"Nazwa musi sk\u0142ada\u0107 si\u0119 przynajmniej z trzech znak\xf3w"):""),u.a.createElement("div",null,u.a.createElement("label",{htmlFor:"birth"},u.a.createElement("span",null,"Data urodzenia"),u.a.createElement("input",{onBlur:this.handleBlur("birth"),className:1==this.state.errors.birth?"":"".concat(d.a.Error),type:"date",name:"birth",value:this.state.birth,onChange:this.handleChange}))),u.a.createElement("div",{className:d.a.errMes},0==this.state.errors.birth&&""==this.state.birth?u.a.createElement("span",null,"Uzupe\u0142nij dat\u0119 urodzenia"):""),u.a.createElement("div",null,u.a.createElement("label",{htmlFor:"genre"},u.a.createElement("span",null,"Wybierz gatunek"),u.a.createElement("select",{onBlur:this.handleBlur("genre"),className:1==this.state.errors.genre?"".concat(d.a.Input):"".concat(d.a.Input," ").concat(d.a.Error),name:"genre",value:this.state.genre,onChange:this.handleChange},u.a.createElement("option",{value:""}),u.a.createElement("option",{value:"papuga"},"Papuga"),u.a.createElement("option",{value:"kot"},"Kot")))),u.a.createElement("div",{className:d.a.errMes},0==this.state.errors.genre&&""==this.state.genre?u.a.createElement("span",null,"Pole wymagane"):""),u.a.createElement("div",null,u.a.createElement("label",{htmlFor:"description"},u.a.createElement("span",null,"Opis"),u.a.createElement("input",{onBlur:this.handleBlur("description"),className:1==this.state.errors.description?"".concat(d.a.Input):"".concat(d.a.Input," ").concat(d.a.Error),type:"textarea",name:"description",value:this.state.description,onChange:this.handleChange}))),u.a.createElement("div",{className:d.a.errMes},0==this.state.errors.description&&""==this.state.password?u.a.createElement("span",null,"Przyda\u0142by si\u0119 jeszcze jaki\u015b opis..."):""),u.a.createElement("div",null,u.a.createElement("label",{htmlFor:"password"},u.a.createElement("span",null,"Has\u0142o"),u.a.createElement("input",{onBlur:this.handleBlur("password"),className:1==this.state.errors.password?"".concat(d.a.Input):"".concat(d.a.Input," ").concat(d.a.Error),type:"password",name:"password",value:this.state.password,onChange:this.handleChange}))),u.a.createElement("div",{className:d.a.errMes},0==this.state.errors.password&&this.state.password.length<6?u.a.createElement("span",null,"Has\u0142o musi mie\u0107 przynajmniej 6 znak\xf3w"):""),u.a.createElement("div",null,u.a.createElement("label",{htmlFor:"password"},u.a.createElement("span",null,"Powt\xf3rz has\u0142o"),u.a.createElement("input",{type:"password",name:"passwordConf",value:this.state.passwordConf,onChange:this.handleChange}))),u.a.createElement("div",{className:d.a.errMes},1==this.state.errors.password&&this.state.password.length>=6&&this.state.password!=this.state.passwordConf?u.a.createElement("span",null,"Has\u0142a si\u0119 nie zgadzaj\u0105"):""),u.a.createElement("div",{className:d.a.submitContainer},u.a.createElement("input",{type:"submit",value:!0===this.state.errors.email&&!0===this.state.errors.name&&!0===this.state.errors.genre&&!0===this.state.errors.birth&&!0===this.state.errors.description&&!0===this.state.errors.password?"Rejestruj":"Wype\u0142nij pola"}))))}}]),a}(u.a.Component);t.default=g}}]);
//# sourceMappingURL=6.de6f9e36.chunk.js.map