(this.webpackJsonpvanessa=this.webpackJsonpvanessa||[]).push([[7],{128:function(e,t,a){e.exports={submitContainer:"login_submitContainer__2DVxR",signUpButton:"login_signUpButton__8sgdX",pageTitle:"login_pageTitle__1NHe2",pageTitleHomePage:"login_pageTitleHomePage__37je0",emailInp:"login_emailInp__2JpwB",emailField:"login_emailField__1AQWh",marginLogin:"login_marginLogin__pEOjC"}},132:function(e,t,a){e.exports={resultsField:"search_resultsField__3d-Yr",result:"search_result__3iyve",searchContainer:"search_searchContainer__1quUV",searchInp:"search_searchInp__Un9lJ",quantitySlider:"search_quantitySlider__1fgDz"}},152:function(e,t,a){"use strict";a.r(t);var n=a(29),r=a(30),i=a(32),l=a(31),s=a(0),u=a.n(s),c=a(19),o=a(132),m=a.n(o),h=a(128),g=a.n(h),p=function(e){Object(i.a)(a,e);var t=Object(l.a)(a);function a(e){var r;return Object(n.a)(this,a),(r=t.call(this,e)).handleChange=function(e){r.setState({value:e.target.value},(function(){return r.props.changeLimit(r.state.value)}))},r.result=function(e){return e<2?"wynik":e>1&e<5?"wyniki":"wynik\xf3w"},r.state={value:1},r}return Object(r.a)(a,[{key:"render",value:function(){var e=this;return u.a.createElement("div",{className:m.a.quantitySlider},u.a.createElement("label",{htmlFor:"customRange1"},"Wyszukaj ",this.state.value," ",this.result(this.state.value)),u.a.createElement("input",{type:"range",min:"1",max:"20",step:"1",onChange:function(t){return e.handleChange(t)},value:this.state.value,className:"custom-range",id:"customRange1"}))}}]),a}(u.a.Component),v=function(e){Object(i.a)(a,e);var t=Object(l.a)(a);function a(e){var r;return Object(n.a)(this,a),(r=t.call(this,e)).getMeCategory=function(e){r.setState({value:e.target.value},(function(){r.state.value<2?r.setState({category:"books"},(function(){return r.props.getMeCat(r.state.category)})):r.state.value>1&r.state.value<3?r.setState({category:"stories"},(function(){return r.props.getMeCat(r.state.category)})):r.setState({category:"poems"},(function(){return r.props.getMeCat(r.state.category)}))}))},r.state={value:1,category:"books"},r}return Object(r.a)(a,[{key:"result",value:function(e){return this.state.value<2?"ksi\u0105\u017ck\u0119":e>1&e<3?"opowiadanie":"wiersz"}},{key:"render",value:function(){var e=this;return u.a.createElement("div",{className:m.a.quantitySlider},u.a.createElement("label",{htmlFor:"customRange1"},"Wyszukaj ",this.result(this.state.value)),u.a.createElement("input",{type:"range",min:"1",max:"3",step:"1",onChange:function(t){return e.getMeCategory(t)},value:this.state.value,className:"custom-range",id:"customRange1"}))}}]),a}(u.a.Component),y=function(e){Object(i.a)(a,e);var t=Object(l.a)(a);function a(e){var r;return Object(n.a)(this,a),(r=t.call(this,e)).state={term:"",limit:1,data:[],error:"",category:"books"},r}return Object(r.a)(a,[{key:"handleSubmit",value:function(e){var t=this;e.preventDefault(),fetch("".concat(c.a).concat(this.state.category,"/search?term=").concat(this.state.term,"&limit=").concat(this.state.limit)).then((function(e){return e.json()})).then((function(e){t.setState({data:e}),0===t.state.data.length?t.setState({error:"Nie znaleziono \u017cadnej pozycji."}):t.setState({error:""})}))}},{key:"changeLimit",value:function(e){this.setState({limit:e})}},{key:"getMeCategory",value:function(e){this.setState({category:e})}},{key:"render",value:function(){var e=this;return console.log(this.state.category),u.a.createElement("div",null,u.a.createElement(v,{getMeCat:function(t){return e.getMeCategory(t)}}),u.a.createElement(p,{changeLimit:function(t){return e.changeLimit(t)}}),u.a.createElement("form",{onSubmit:function(t){return e.handleSubmit(t)}},u.a.createElement("div",{className:m.a.searchContainer},u.a.createElement("input",{className:"".concat(g.a.emailInp," ").concat(m.a.searchInp),type:"text",value:this.state.term,onChange:function(t){return e.setState({term:t.target.value})}}),u.a.createElement("input",{className:g.a.emailField,value:"szukaj",type:"submit"}))),u.a.createElement("div",{className:m.a.resultsField},u.a.createElement("h2",null," ",this.state.error),this.state.data.map((function(e,t){return u.a.createElement("div",{key:t,className:m.a.result},u.a.createElement("span",null,"tytu\u0142:\xa0",u.a.createElement("h4",null,e.title)),u.a.createElement("span",null,"autor:\xa0",u.a.createElement("h4",null,e.author)),u.a.createElement("span",null,"gatunek:\xa0",u.a.createElement("h5",null,e.genre)),u.a.createElement("span",null,"rok publikacji:\xa0",u.a.createElement("h5",null,e.year)))}))))}}]),a}(s.Component),f=function(e){Object(i.a)(a,e);var t=Object(l.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){return u.a.createElement("div",null,u.a.createElement(y,null))}}]),a}(u.a.Component);t.default=f}}]);
//# sourceMappingURL=7.e3c57b42.chunk.js.map