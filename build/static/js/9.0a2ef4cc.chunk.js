(this.webpackJsonpvanessa=this.webpackJsonpvanessa||[]).push([[9],{125:function(e,t,a){e.exports={Category:"addBook_Category__dlvdX",categoriesContainer:"addBook_categoriesContainer__2Gkjs",frameContainer:"addBook_frameContainer__oVIwQ",fileAdd:"addBook_fileAdd__a2Xcg",inptsContainer:"addBook_inptsContainer__2wgYG",fileSbmt:"addBook_fileSbmt__1c8NE",buttonContainer:"addBook_buttonContainer__2ol1t",writingContainer:"addBook_writingContainer__2eQ8r",newChapContainer:"addBook_newChapContainer__2ShKR",delAkapit:"addBook_delAkapit__2jk60",oneUp:"addBook_oneUp__xAl5_",oneDown:"addBook_oneDown__M38nc",BackgroundForBook:"addBook_BackgroundForBook__13gGK"}},127:function(e,t,a){"use strict";var n=a(41);var o=a(50);function r(e){return function(e){if(Array.isArray(e))return Object(n.a)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||Object(o.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}a.d(t,"a",(function(){return r}))},147:function(e,t,a){"use strict";a.r(t);var n=a(127),o=a(29),r=a(30),i=a(32),l=a(31),c=a(0),s=a.n(c),u=a(19),d=a(125),m=a.n(d),p=a(24),v=a(21),h=function(e){Object(i.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(o.a)(this,a);for(var r=arguments.length,i=new Array(r),l=0;l<r;l++)i[l]=arguments[l];return(e=t.call.apply(t,[this].concat(i))).state={title:"",author:"",year:"",categories:[],description:"",redirect:!1,id:"",poem:{akapits:[{lines:[]}]}},e.addPoem=function(t){var a="".concat(u.a,"poems/add"),n={"Content-Type":"application/json",Authorization:"Bearer "+"".concat(Object(p.a)().token)};t.preventDefault(),fetch(a,{method:"POST",headers:n,body:JSON.stringify(e.state)}).then((function(e){return e.ok||(console.log("fock"),t.preventDefault()),e.json()})).then((function(t){e.setState({redirect:!0,id:t.id})}))},e.addCat=function(t){var a=Object(n.a)(e.state.categories);a=[].concat(Object(n.a)(a),[t.target.value]);var o=Object(n.a)(new Set(a));e.setState({categories:o})},e}return Object(r.a)(a,[{key:"deleteCategory",value:function(e){var t=this.state.categories;t.splice(e,1),this.setState({categories:t})}},{key:"render",value:function(){var e=this;return console.log(this.state),!0===this.state.redirect?s.a.createElement(v.a,{to:"/addBody/".concat(this.state.id)}):s.a.createElement("div",null,s.a.createElement("h1",null,"Dodaj wiersz"),s.a.createElement("form",{method:"post",onSubmit:this.addPoem},s.a.createElement("label",null,s.a.createElement("span",null,"Tytu\u0142"),s.a.createElement("input",{name:"title",type:"text",onChange:function(t){return e.setState({title:t.target.value})},value:this.state.title})),s.a.createElement("label",null,s.a.createElement("span",null,"Autor"),s.a.createElement("input",{name:"author",type:"text",onChange:function(t){return e.setState({author:t.target.value})},value:this.state.author})),s.a.createElement("label",null,s.a.createElement("span",null,"Rok powstania"),s.a.createElement("input",{name:"year",type:"text",onChange:function(t){return e.setState({year:t.target.value})},value:this.state.year})),s.a.createElement("label",null,s.a.createElement("span",null,"Opis wiersza (okoliczno\u015bci powstania, ciekawostki)"),s.a.createElement("textarea",{name:"description",onChange:function(t){return e.setState({description:t.target.value})},value:this.state.description})),s.a.createElement("label",null,s.a.createElement("span",null,"Kategoria"),s.a.createElement("select",{multiple:!0,value:this.state.categories,onChange:this.addCat},s.a.createElement("option",{value:"mi\u0142o\u015b\u0107"},"mi\u0142o\u015b\u0107"),s.a.createElement("option",{value:"nienawi\u015b\u0107"},"nienawi\u015b\u0107"),s.a.createElement("option",{value:"smutek"},"smutek"),s.a.createElement("option",{value:"z\u0142o\u015b\u0107"},"z\u0142o\u015b\u0107"),s.a.createElement("option",{value:"rado\u015b\u0107"},"rado\u015b\u0107"),s.a.createElement("option",{value:"romantyk"},"romantyk"),s.a.createElement("option",{value:"klasycznie"},"klasycznie"),s.a.createElement("option",{value:"prawda"},"prawda"),s.a.createElement("option",{value:"B\xf3g"},"B\xf3g"),s.a.createElement("option",{value:"relacje"},"relacje"),s.a.createElement("option",{value:"ambiwalencja"},"ambiwalencja"),s.a.createElement("option",{value:"dziwny"},"dziwny"),s.a.createElement("option",{value:"abstrakcja"},"abstrakcja"),s.a.createElement("option",{value:"gorycz"},"gorycz"),s.a.createElement("option",{value:"pochwa\u0142a \u017cycia"},"pochwa\u0142a \u017cycia"))),s.a.createElement("div",{className:m.a.categoriesContainer},this.state.categories.map((function(t,a){return s.a.createElement("span",{className:m.a.Category,key:a},"#",t," ",s.a.createElement("strong",{onClick:function(){return e.deleteCategory(a)}},"\xd7 ")," ")}))),s.a.createElement("input",{type:"submit",value:"Opublikuj"})))}}]),a}(c.Component);t.default=h}}]);
//# sourceMappingURL=9.0a2ef4cc.chunk.js.map