(this.webpackJsonpvanessa=this.webpackJsonpvanessa||[]).push([[4],{126:function(t,e,a){t.exports={Category:"addBook_Category__dlvdX",categoriesContainer:"addBook_categoriesContainer__2Gkjs",frameContainer:"addBook_frameContainer__oVIwQ",fileAdd:"addBook_fileAdd__a2Xcg",inptsContainer:"addBook_inptsContainer__2wgYG",fileSbmt:"addBook_fileSbmt__1c8NE",buttonContainer:"addBook_buttonContainer__2ol1t",writingContainer:"addBook_writingContainer__2eQ8r",newChapContainer:"addBook_newChapContainer__2ShKR",delAkapit:"addBook_delAkapit__2jk60",oneUp:"addBook_oneUp__xAl5_",oneDown:"addBook_oneDown__M38nc",BackgroundForBook:"addBook_BackgroundForBook__13gGK"}},128:function(t,e,a){"use strict";var n=a(40);var r=a(50);function o(t){return function(t){if(Array.isArray(t))return Object(n.a)(t)}(t)||function(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||Object(r.a)(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}a.d(e,"a",(function(){return o}))},130:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(131),r=Object.prototype.hasOwnProperty,o=Array.prototype.splice,s=Object.prototype.toString;function i(t){return s.call(t).slice(8,-1)}var c=Object.assign||function(t,e){return p(e).forEach((function(a){r.call(e,a)&&(t[a]=e[a])})),t},p="function"===typeof Object.getOwnPropertySymbols?function(t){return Object.keys(t).concat(Object.getOwnPropertySymbols(t))}:function(t){return Object.keys(t)};function u(t){return Array.isArray(t)?c(t.constructor(t.length),t):"Map"===i(t)?new Map(t):"Set"===i(t)?new Set(t):t&&"object"===typeof t?c(Object.create(Object.getPrototypeOf(t)),t):t}var h=function(){function t(){this.commands=c({},l),this.update=this.update.bind(this),this.update.extend=this.extend=this.extend.bind(this),this.update.isEquals=function(t,e){return t===e},this.update.newContext=function(){return(new t).update}}return Object.defineProperty(t.prototype,"isEquals",{get:function(){return this.update.isEquals},set:function(t){this.update.isEquals=t},enumerable:!0,configurable:!0}),t.prototype.extend=function(t,e){this.commands[t]=e},t.prototype.update=function(t,e){var a=this,o="function"===typeof e?{$apply:e}:e;Array.isArray(t)&&Array.isArray(o)||n(!Array.isArray(o),"update(): You provided an invalid spec to update(). The spec may not contain an array except as the value of $set, $push, $unshift, $splice or any custom command allowing an array value."),n("object"===typeof o&&null!==o,"update(): You provided an invalid spec to update(). The spec and every included key path must be plain objects containing one of the following commands: %s.",Object.keys(this.commands).join(", "));var s=t;return p(o).forEach((function(e){if(r.call(a.commands,e)){var n=t===s;s=a.commands[e](o[e],s,o,t),n&&a.isEquals(s,t)&&(s=t)}else{var c="Map"===i(t)?a.update(t.get(e),o[e]):a.update(t[e],o[e]),p="Map"===i(s)?s.get(e):s[e];a.isEquals(c,p)&&("undefined"!==typeof c||r.call(t,e))||(s===t&&(s=u(t)),"Map"===i(s)?s.set(e,c):s[e]=c)}})),s},t}();e.Context=h;var l={$push:function(t,e,a){return f(e,a,"$push"),t.length?e.concat(t):e},$unshift:function(t,e,a){return f(e,a,"$unshift"),t.length?t.concat(e):e},$splice:function(t,e,a,r){return function(t,e){n(Array.isArray(t),"Expected $splice target to be an array; got %s",t),m(e.$splice)}(e,a),t.forEach((function(t){m(t),e===r&&t.length&&(e=u(r)),o.apply(e,t)})),e},$set:function(t,e,a){return function(t){n(1===Object.keys(t).length,"Cannot have more than one key in an object with $set")}(a),t},$toggle:function(t,e){y(t,"$toggle");var a=t.length?u(e):e;return t.forEach((function(t){a[t]=!e[t]})),a},$unset:function(t,e,a,n){return y(t,"$unset"),t.forEach((function(t){Object.hasOwnProperty.call(e,t)&&(e===n&&(e=u(n)),delete e[t])})),e},$add:function(t,e,a,n){return k(e,"$add"),y(t,"$add"),"Map"===i(e)?t.forEach((function(t){var a=t[0],r=t[1];e===n&&e.get(a)!==r&&(e=u(n)),e.set(a,r)})):t.forEach((function(t){e!==n||e.has(t)||(e=u(n)),e.add(t)})),e},$remove:function(t,e,a,n){return k(e,"$remove"),y(t,"$remove"),t.forEach((function(t){e===n&&e.has(t)&&(e=u(n)),e.delete(t)})),e},$merge:function(t,e,a,r){var o,s;return o=e,n((s=t)&&"object"===typeof s,"update(): $merge expects a spec of type 'object'; got %s",s),n(o&&"object"===typeof o,"update(): $merge expects a target of type 'object'; got %s",o),p(t).forEach((function(a){t[a]!==e[a]&&(e===r&&(e=u(r)),e[a]=t[a])})),e},$apply:function(t,e){var a;return n("function"===typeof(a=t),"update(): expected spec of $apply to be a function; got %s.",a),t(e)}},d=new h;function f(t,e,a){n(Array.isArray(t),"update(): expected target of %s to be an array; got %s.",a,t),y(e[a],a)}function y(t,e){n(Array.isArray(t),"update(): expected spec of %s to be an array; got %s. Did you forget to wrap your parameter in an array?",e,t)}function m(t){n(Array.isArray(t),"update(): expected spec of $splice to be an array of arrays; got %s. Did you forget to wrap your parameters in an array?",t)}function k(t,e){var a=i(t);n("Map"===a||"Set"===a,"update(): %s expects a target of type Set or Map; got %s",e,a)}e.isEquals=d.update.isEquals,e.extend=d.extend,e.default=d.update,e.default.default=t.exports=c(e.default,e)},131:function(t,e,a){"use strict";t.exports=function(t,e,a,n,r,o,s,i){if(!t){var c;if(void 0===e)c=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var p=[a,n,r,o,s,i],u=0;(c=new Error(e.replace(/%s/g,(function(){return p[u++]})))).name="Invariant Violation"}throw c.framesToPop=1,c}}},159:function(t,e,a){"use strict";a.r(e);var n=a(128),r=a(52),o=a(30),s=a(31),i=a(33),c=a(32),p=a(0),u=a.n(p),h=a(126),l=a.n(h),d=a(49),f=a.n(d),y=a(9),m=a(17),k=a(16),b=a(130),v=a.n(b),g=function(t){Object(i.a)(a,t);var e=Object(c.a)(a);function a(){var t;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(t=e.call.apply(e,[this].concat(r))).state={isLoading:!0,id:"",chapterNr:"",chaptitle:"",chaptitleSent:!1,nrOfAkapit:0,arrayOfNr:[],chapters:[]},t}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var t=this,e=this.props.match.params.id,a=this.props.match.params.chapterNr;this.setState({id:e,chapterNr:a},(function(){var e="".concat(k.a,"/books/mine/").concat(t.state.id),a={"Content-Type":"application/json",Authorization:"Bearer "+Object(m.a)().token};fetch(e,{headers:a}).then((function(t){return t.json()})).then((function(e){t.setState({chapters:e.chapters,isLoading:!1})}))}))}},{key:"handleSubmit",value:function(t){var e=this;t.preventDefault();var a="".concat(k.a,"users/updateMyBook/").concat(this.state.id),n={"Content-Type":"application/json",Authorization:"Bearer "+Object(m.a)().token};this.setState({chapters:v()(this.state.chapters,Object(r.a)({},this.state.chapterNr,{chaptitle:{$set:this.state.chaptitle}}))},(function(){fetch(a,{method:"PATCH",headers:n,body:JSON.stringify({chapters:e.state.chapters})}).then((function(e){return e.ok||(t.preventDefault(),console.log("b\u0142\u0105d")),e.json()})).then((function(t){""!=e.state.chapters[e.state.chapterNr].chaptitle&&e.setState({chaptitleSent:!0})}))}))}},{key:"handleAkapitS",value:function(t){var e=this;t.preventDefault();var a="".concat(k.a,"/users/updateMyBook/").concat(this.state.id),o={"Content-Type":"application/json",Authorization:"Bearer "+Object(m.a)().token};this.setState({nrOfAkapit:this.state.chapters[this.state.chapterNr].akapits.length},(function(){e.setState({chapters:v()(e.state.chapters,Object(r.a)({},e.state.chapterNr,{akapits:Object(r.a)({},e.state.nrOfAkapit,{$set:e.state.akapit})}))},(function(){fetch(a,{method:"PATCH",headers:o,body:JSON.stringify({chapters:e.state.chapters})}).then((function(e){return e.ok||(t.preventDefault(),console.log("b\u0142\u0105d")),e.json()})).then((function(t){})),e.setState({nrOfAkapit:e.state.nrOfAkapit+1}),e.setState({akapit:"",arrayOfNr:[].concat(Object(n.a)(e.state.arrayOfNr),[e.state.nrOfAkapit])})}))}))}},{key:"deleteAkapit",value:function(t){var e=this,a="".concat(k.a,"/users/updateMyBook/").concat(this.state.id),n={"Content-Type":"application/json",Authorization:"Bearer "+Object(m.a)().token},o=this.state.chapters[this.state.chapterNr].akapits.filter((function(e,a){return a!==t}));this.setState({chapters:v()(this.state.chapters,Object(r.a)({},this.state.chapterNr,{akapits:{$set:o}}))},(function(){fetch(a,{method:"PATCH",headers:n,body:JSON.stringify({chapters:e.state.chapters})}).then((function(t){return t.ok||console.log("b\u0142\u0105d"),t.json()})).then((function(t){}))}))}},{key:"oneDown",value:function(t){var e=this;var a=function(t,e,a){if(a>=t.length)for(var n=a-t.length+1;n--;)t.push(void 0);return t.splice(a,0,t.splice(e,1)[0]),t}(this.state.chapters[this.state.chapterNr].akapits,t,t+1),n="".concat(k.a,"/users/updateMyBook/").concat(this.state.id),o={"Content-Type":"application/json",Authorization:"Bearer "+Object(m.a)().token};this.setState({chapters:v()(this.state.chapters,Object(r.a)({},this.state.chapterNr,{akapits:{$set:a}}))},(function(){fetch(n,{method:"PATCH",headers:o,body:JSON.stringify({chapters:e.state.chapters})}).then((function(t){return t.ok||console.log("b\u0142\u0105d"),t.json()})).then((function(t){}))}))}},{key:"oneUp",value:function(t){var e=this;var a=function(t,e,a){if(a>=t.length)for(var n=a-t.length+1;n--;)t.push(void 0);return t.splice(a,0,t.splice(e,1)[0]),t}(this.state.chapters[this.state.chapterNr].akapits,t,t-1),n="".concat(k.a,"/users/updateMyBook/").concat(this.state.id),o={"Content-Type":"application/json",Authorization:"Bearer "+Object(m.a)().token};this.setState({chapters:v()(this.state.chapters,Object(r.a)({},this.state.chapterNr,{akapits:{$set:a}}))},(function(){fetch(n,{method:"PATCH",headers:o,body:JSON.stringify({chapters:e.state.chapters})}).then((function(t){return t.ok||console.log("b\u0142\u0105d"),t.json()})).then((function(t){}))}))}},{key:"componentDidUpdate",value:function(t,e){t.match.url!==this.props.match.url&&window.location.reload()}},{key:"nextChap",value:function(t){var e=this;t.preventDefault(),this.setState({chapterNr:parseInt(this.state.chapterNr,10)+1},(function(){e.state.chapters.push({chaptitle:"",akapits:[]});var t="".concat(k.a,"/users/updateMyBook/").concat(e.state.id),a={"Content-Type":"application/json",Authorization:"Bearer "+"".concat(Object(m.a)().token)};fetch(t,{method:"PATCH",headers:a,body:JSON.stringify({chapters:e.state.chapters})}).then((function(t){return t.ok||console.log("b\u0142\u0105d"),t.json()})).then((function(t){e.props.history.push("/myBooks/".concat(e.state.id,"/chapters/").concat(parseInt(e.state.chapterNr,10)))}))}))}},{key:"nextDoneChap",value:function(){this.props.history.push("/myBooks/".concat(this.state.id,"/chapters/").concat(parseInt(this.state.chapterNr,10)+1))}},{key:"render",value:function(){var t=this;return console.log(this.state.chapterNr),0===this.state.chapters.length?u.a.createElement("div",{style:{marginTop:"-180px",width:"100vw",height:"100vh",display:"flex",justifyContent:"center",alignItems:"center"}},u.a.createElement("div",{className:f.a.loader})):u.a.createElement("div",null,u.a.createElement("form",{onSubmit:function(e){return t.handleSubmit(e)}},u.a.createElement("div",{className:l.a.newChapContainer},"wpisz tytu\u0142 rozdzia\u0142u:",u.a.createElement("input",{name:"chaptitle",type:"text",onChange:function(e){return t.setState({chaptitle:e.target.value})},value:this.state.chaptitle})),u.a.createElement("h2",null,"Rozdzia\u0142:"," ",void 0===this.state.chapters[this.state.chapterNr]?null:this.state.chapters[this.state.chapterNr].chaptitle),u.a.createElement("input",{type:"submit",value:this.state.chaptitleSent?"\u2714":"Dodaj"})),u.a.createElement("br",null),u.a.createElement("form",{onSubmit:function(e){return t.handleAkapitS(e)}},u.a.createElement("textarea",{value:this.state.akapit,name:"akapit",onChange:function(e){return t.setState({akapit:e.target.value})}}),u.a.createElement("input",{type:"submit",value:"Dodaj akapit"})),u.a.createElement("div",null,u.a.createElement("div",null,this.state.chapters.length>0&&void 0!==this.state.chapters[this.state.chapterNr]?this.state.chapters[this.state.chapterNr].akapits.map((function(e,a){return u.a.createElement("p",{key:a},u.a.createElement("span",null,"(",a+1,")"),e,u.a.createElement("span",{className:l.a.oneUp,onClick:0===t.state.chapters[t.state.chapterNr].akapits?null:function(){return t.oneUp(a)}},"\u2191"),u.a.createElement("span",{className:l.a.oneDown,onClick:t.state.chapters[t.state.chapterNr].akapits.length-1===a?null:function(){return t.oneDown(a)}},"\u2193"),u.a.createElement("span",{className:l.a.delAkapit,onClick:function(){return t.deleteAkapit(a)}},"\xd7"," "))})):null)),u.a.createElement("br",null),u.a.createElement(y.b,{onClick:parseInt(this.state.chapterNr,10)!=this.state.chapters.length-1?function(){return t.nextDoneChap()}:function(e){return t.nextChap(e)},to:"/myBooks/".concat(this.state.id,"/chapters/").concat(parseInt(this.state.chapterNr,10)+1)},u.a.createElement("button",null,"Nast\u0119pny rozdzia\u0142")))}}]),a}(p.Component);e.default=g}}]);
//# sourceMappingURL=4.e70f821d.chunk.js.map