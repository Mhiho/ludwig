(this.webpackJsonpvanessa=this.webpackJsonpvanessa||[]).push([[9],{113:function(e,t,a){"use strict";a.r(t);var n=a(98),o=a(21),r=a(22),l=a(24),i=a(23),c=a(25),u=a(0),s=a.n(u),m=a(16),p=a(97),d=a.n(p),h=a(10),v=a(12),y=function(e){function t(){var e,a;Object(o.a)(this,t);for(var r=arguments.length,c=new Array(r),u=0;u<r;u++)c[u]=arguments[u];return(a=Object(l.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(c)))).state={title:"",author:"",year:"",cat:[],genre:"",description:"",sample:"",public:!0,redirect:!1,id:""},a.addBook=function(e){var t="".concat(m.a,"books/add"),n={"Content-Type":"application/json",Authorization:"Bearer "+"".concat(Object(h.a)().token)};e.preventDefault(),fetch(t,{method:"POST",headers:n,body:JSON.stringify(a.state)}).then((function(t){return t.ok||e.preventDefault(),t.json()})).then((function(e){a.setState({redirect:!0,id:e.id})}))},a.addCat=function(e){var t=Object(n.a)(a.state.cat);t=[].concat(Object(n.a)(t),[e.target.value]);var o=Object(n.a)(new Set(t));a.setState({cat:o})},a.handleChangeGenre=function(e){a.setState({genre:e.target.value})},a.handleChangePublic=function(e){"true"==e.target.value?a.setState({public:!0}):a.setState({public:!1})},a}return Object(c.a)(t,e),Object(r.a)(t,[{key:"deleteCategory",value:function(e){var t=this.state.cat;t.splice(e,1),this.setState({cat:t})}},{key:"render",value:function(){var e=this;return!0===this.state.redirect?s.a.createElement(v.a,{to:"/myBooks/".concat(this.state.id,"/addBookCover")}):s.a.createElement("div",null,s.a.createElement("h1",null,"Dodaj ksi\u0105\u017ck\u0119"),s.a.createElement("form",{method:"post",onSubmit:this.addBook},s.a.createElement("label",null,s.a.createElement("span",null,"Tytu\u0142"),s.a.createElement("input",{name:"title",type:"text",onChange:function(t){return e.setState({title:t.target.value})},value:this.state.title})),s.a.createElement("label",null,s.a.createElement("span",null,"Autor"),s.a.createElement("input",{name:"author",type:"text",onChange:function(t){return e.setState({author:t.target.value})},value:this.state.author})),s.a.createElement("label",null,s.a.createElement("span",null,"Rok powstania"),s.a.createElement("input",{name:"year",type:"text",onChange:function(t){return e.setState({year:t.target.value})},value:this.state.year})),s.a.createElement("label",null,s.a.createElement("span",null,"Streszczenie"),s.a.createElement("textarea",{name:"description",onChange:function(t){return e.setState({description:t.target.value})},value:this.state.description})),s.a.createElement("label",null,s.a.createElement("span",null,"Pr\xf3bka tekstu"),s.a.createElement("textarea",{name:"sample",onChange:function(t){return e.setState({sample:t.target.value})},value:this.state.sample})),s.a.createElement("label",null,s.a.createElement("span",null,"Gatunek"),s.a.createElement("select",{value:this.state.genre,onChange:this.handleChangeGenre},s.a.createElement("option",{value:""}),s.a.createElement("option",{value:"krymina\u0142"},"Krymina\u0142"),s.a.createElement("option",{value:"powie\u015b\u0107 psychologiczna"},"Powie\u015b\u0107 psychologiczna"),s.a.createElement("option",{value:"powie\u015b\u0107 romantyczna"},"Powie\u015b\u0107 romantyczna"),s.a.createElement("option",{value:"powie\u015b\u0107 obyczajowa"},"Powie\u015b\u0107 obyczajowa"),s.a.createElement("option",{value:"eseje"},"Eseje"),s.a.createElement("option",{value:"thriller"},"Thriller"),s.a.createElement("option",{value:"powie\u015b\u0107 humorystyczna"},"Powie\u015b\u0107 humorystycza"),s.a.createElement("option",{value:"horror"},"Horror"),s.a.createElement("option",{value:"si-fi"},"Si-Fi"),s.a.createElement("option",{value:"fantastyka"},"Fantastyka"),s.a.createElement("option",{value:"literatura faktu"},"Literatura faktu"),s.a.createElement("option",{value:"dla dzieci i m\u0142odzie\u017cy"},"Dla dzieci i m\u0142odzie\u017cy"))),s.a.createElement("label",null,s.a.createElement("span",null,"Kategoria"),s.a.createElement("select",{multiple:!0,value:this.state.cat,onChange:this.addCat},s.a.createElement("option",{value:"czytad\u0142o"},"czytad\u0142o"),s.a.createElement("option",{value:"nowela"},"nowela"),s.a.createElement("option",{value:"borgesowska"},"borgesowska"),s.a.createElement("option",{value:"realizm magiczny"},"realizm magiczny"),s.a.createElement("option",{value:"opera mydlana"},"opera mydlana"),s.a.createElement("option",{value:"dekadencja"},"dekadencja"),s.a.createElement("option",{value:"romantyzm"},"romantyzm"),s.a.createElement("option",{value:"klasycznie"},"klasycznie"),s.a.createElement("option",{value:"cyberpunk"},"cyberpunk"),s.a.createElement("option",{value:"przy \u015bwiecy"},"przy \u015bwiecy"),s.a.createElement("option",{value:"kropla dr\u0105\u017cy ska\u0142\u0119"},"kropla dr\u0105\u017cy ska\u0142\u0119"),s.a.createElement("option",{value:"brutalna"},"brutalna"),s.a.createElement("option",{value:"abstrakcja"},"abstrakcja"),s.a.createElement("option",{value:"ko\u015bci zosta\u0142y rzucone"},"ko\u015bci zosta\u0142y rzucone"))),s.a.createElement("div",{className:d.a.categoriesContainer},this.state.cat.map((function(t,a){return s.a.createElement("span",{className:d.a.Category,key:a},"#",t," ",s.a.createElement("strong",{onClick:function(){return e.deleteCategory(a)}},"\xd7 ")," ")}))),s.a.createElement("label",null,s.a.createElement("span",null,"Og\xf3lnodost\u0119pna?"),s.a.createElement("select",{value:this.state.public,onChange:this.handleChangePublic},s.a.createElement("option",{value:"true"},"Tak"),s.a.createElement("option",{value:"false"},"Nie"))),s.a.createElement("input",{type:"submit",value:"Opublikuj"})))}}]),t}(u.Component);t.default=y},97:function(e,t,a){e.exports={Category:"addBook_Category__dlvdX",categoriesContainer:"addBook_categoriesContainer__2Gkjs",frameContainer:"addBook_frameContainer__oVIwQ",fileAdd:"addBook_fileAdd__a2Xcg",inptsContainer:"addBook_inptsContainer__2wgYG",fileSbmt:"addBook_fileSbmt__1c8NE",buttonContainer:"addBook_buttonContainer__2ol1t",writingContainer:"addBook_writingContainer__2eQ8r",newChapContainer:"addBook_newChapContainer__2ShKR",delAkapit:"addBook_delAkapit__2jk60",oneUp:"addBook_oneUp__xAl5_",oneDown:"addBook_oneDown__M38nc",BackgroundForBook:"addBook_BackgroundForBook__13gGK"}},98:function(e,t,a){"use strict";function n(e){return function(e){if(Array.isArray(e)){for(var t=0,a=new Array(e.length);t<e.length;t++)a[t]=e[t];return a}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}a.d(t,"a",(function(){return n}))}}]);
//# sourceMappingURL=9.846bd10e.chunk.js.map