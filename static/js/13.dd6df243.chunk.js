(this.webpackJsonpvanessa=this.webpackJsonpvanessa||[]).push([[13],{126:function(e,t,a){e.exports={Category:"addBook_Category__dlvdX",categoriesContainer:"addBook_categoriesContainer__2Gkjs",frameContainer:"addBook_frameContainer__oVIwQ",fileAdd:"addBook_fileAdd__a2Xcg",inptsContainer:"addBook_inptsContainer__2wgYG",fileSbmt:"addBook_fileSbmt__1c8NE",buttonContainer:"addBook_buttonContainer__2ol1t",writingContainer:"addBook_writingContainer__2eQ8r",newChapContainer:"addBook_newChapContainer__2ShKR",delAkapit:"addBook_delAkapit__2jk60",oneUp:"addBook_oneUp__xAl5_",oneDown:"addBook_oneDown__M38nc",BackgroundForBook:"addBook_BackgroundForBook__13gGK"}},142:function(e,t,a){"use strict";a.r(t);var n=a(31),o=a(32),i=a(34),r=a(33),c=a(0),s=a.n(c),d=a(19),l=a(16),m=a(126),p=a.n(m),u=a(8),_=a.n(u),g=a(41),h=a.n(g),f=a(70),k=a.n(f),C=a(22),v=function(e){Object(i.a)(a,e);var t=Object(r.a)(a);function a(){var e;Object(n.a)(this,a);for(var o=arguments.length,i=new Array(o),r=0;r<o;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).state={file:"file",preview:null,id:"",sent:!1,error:"",btnCt:"",redirect:!1},e.addImg=function(t){t.preventDefault();var a="".concat(d.a,"books/mine/addImage/").concat(e.state.id),n={"content-type":"file",Authorization:"Bearer "+"".concat(Object(l.a)().token)};h.a.post(a,{headers:n}).then((function(t){e.setState({sent:!0,error:""})})).catch((function(t){console.log(t),e.setState({sent:!1,error:"Co\u015b posz\u0142o nie tak. Zdj\u0119cie musi by\u0107 w formacie png lub jpg i mie\u0107 nie wi\u0119cej ni\u017c 1 Mb."})}))},e.goFurther=function(){!0===e.state.sent?e.setState({redirect:!0}):e.setState({error:"Zdj\u0119cie musi by\u0107 dodane"})},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this.props.match.params.id;this.setState({id:e})}},{key:"handleImageChange",value:function(e){e.preventDefault()}},{key:"render",value:function(){var e=this;return!0===this.state.redirect?s.a.createElement(C.a,{to:"/myBooks/".concat(this.state.id,"/writing")}):s.a.createElement("div",null,s.a.createElement("div",{style:{color:"red",width:"100%",height:"50px"}},this.state.error),s.a.createElement("form",{onSubmit:function(t){return e.addImg(t)}},s.a.createElement("div",{className:p.a.inptsContainer},s.a.createElement("input",{className:"".concat(p.a.fileAdd," ").concat(p.a.inpt),name:"coverBookImage",accept:"image/png, image/jpeg, image/jpg",type:"file",onChange:function(t){return e.handleImageChange(t)}}),s.a.createElement("input",{className:"".concat(p.a.inpt," ").concat(p.a.fileSbmt),type:"submit",value:"Prze\u015blij"}))),s.a.createElement("div",{className:p.a.buttonContainer},s.a.createElement("button",{onClick:this.goFurther,className:_.a.typicalBtn},"Chc\u0119 przej\u015b\u0107 do pisania!")),s.a.createElement("div",{className:p.a.frameContainer},this.state.preview?s.a.createElement("img",{src:this.state.preview}):s.a.createElement("img",{src:k.a})))}}]),a}(c.Component);t.default=v}}]);
//# sourceMappingURL=13.dd6df243.chunk.js.map