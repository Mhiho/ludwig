(this.webpackJsonpvanessa=this.webpackJsonpvanessa||[]).push([[11],{109:function(t,e,n){"use strict";var a=n(29);var o=n(36);function m(t){return function(t){if(Array.isArray(t))return Object(a.a)(t)}(t)||function(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||Object(o.a)(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n.d(e,"a",(function(){return m}))},110:function(t,e,n){t.exports={Container:"mypoems_Container__33Gd_",Poem:"mypoems_Poem__peHnm",Opacity:"mypoems_Opacity___BPts",opacity:"mypoems_opacity__329wk",Frame:"mypoems_Frame__1bQ5k",addAkaBtn:"mypoems_addAkaBtn__ZkuB-",addLine:"mypoems_addLine__3lCU6",goBackBtn:"mypoems_goBackBtn__1bXlS",deleteBtn:"mypoems_deleteBtn__Sgj7X",Akapit:"mypoems_Akapit__-AIiE",Line:"mypoems_Line__2aOFC",NewPoemBtn:"mypoems_NewPoemBtn__3_GoL",ContainerPoem:"mypoems_ContainerPoem__1iUfi",ContainerReading:"mypoems_ContainerReading__3EHwV",MyPoem:"mypoems_MyPoem__KLae-"}},140:function(t,e,n){"use strict";n.r(e);var a=n(109),o=n(21),m=n(22),i=n(24),r=n(23),c=n(0),s=n.n(c),l=n(13),u=n(28),d=n(110),h=n.n(d),p=n(35),y=n.n(p),_=(s.a.Component,function(t){Object(i.a)(n,t);var e=Object(r.a)(n);function n(){var t;Object(o.a)(this,n);for(var a=arguments.length,m=new Array(a),i=0;i<a;i++)m[i]=arguments[i];return(t=e.call.apply(e,[this].concat(m))).state={isLoading:!0,id:null,data:null,comments:!1,commentsData:[],myCom:"",counter:0},t}return Object(m.a)(n,[{key:"componentDidMount",value:function(){var t=this,e=this.props.match.params.id;this.setState({id:e},(function(){var e="".concat(u.a,"poems/poem/").concat(t.state.id),n={"Content-Type":"application/json",Authorization:"Bearer "+"".concat(Object(l.a)().token)};fetch(e,{headers:n}).then((function(t){return t.json()})).then((function(e){t.setState({data:e},(function(){var e="".concat(u.a,"comments/showComments/").concat(t.state.id),n={"Content-Type":"application/json",Authorization:"Bearer "+"".concat(Object(l.a)().token)};fetch(e,{headers:n}).then((function(t){return t.json()})).then((function(e){t.setState({commentsData:e},(function(){t.setState({isLoading:!1,counter:t.state.commentsData.length})}))}))}))}))}))}},{key:"showCommentsHandler",value:function(){this.setState({comments:!this.state.comments})}},{key:"addComment",value:function(){var t=this;this.setState({counter:this.state.counter+1},(function(){var e="".concat(u.a,"comments/add/").concat(t.state.id),n={"Content-Type":"application/json",Authorization:"Bearer "+"".concat(Object(l.a)().token)},o=new Date,m=o.getDate()+"/"+(o.getMonth()+1)+"/"+o.getFullYear()+" @ "+o.getHours()+":"+o.getMinutes();console.log(m);var i={commentAuthor:Object(l.a)().user.name,comment:t.state.myCom,commentedAt:m},r=[].concat(Object(a.a)(t.state.commentsData),[i]);t.setState({commentsData:r}),fetch(e,{method:"POST",headers:n,body:JSON.stringify(i)}).then((function(t){return t.ok||console.log("b\u0142\u0105d"),t.json()})).then((function(t){}))}))}},{key:"render",value:function(){var t=this;return console.log(this.state.commentsData),!0===this.state.isLoading?s.a.createElement("div",{style:{marginTop:"-180px",width:"100vw",height:"100vh",display:"flex",justifyContent:"center",alignItems:"center"}},s.a.createElement("div",{className:y.a.loader})):s.a.createElement("div",{className:h.a.ContainerReading},s.a.createElement("h2",null,this.state.data.author),s.a.createElement("h3",null,this.state.data.title),s.a.createElement("h4",null,this.state.data.genre),s.a.createElement("div",null,this.state.data.categories.map((function(t,e){return s.a.createElement("h5",{key:e},t)}))),this.state.data.poem.akapits.map((function(t,e){return s.a.createElement("div",{className:h.a.Akapit,key:e},t.lines.map((function(t,e){return s.a.createElement("p",{className:h.a.Line,key:e},t)})))})),s.a.createElement("h5",null,this.state.data.year),s.a.createElement("p",null,this.state.data.description),s.a.createElement("div",{style:{marginTop:"30px"}},s.a.createElement("button",{onClick:function(){return t.showCommentsHandler()}},"Wy\u015bwietl komentarze")),s.a.createElement("div",null,!1===this.state.comments?null:s.a.createElement("div",null,s.a.createElement("div",null,this.state.commentsData.map((function(t){return s.a.createElement("div",null,s.a.createElement("h3",null,t.commentAuthor),s.a.createElement("h4",null,t.comment),s.a.createElement("h5",null,t.commentedAt))})))),s.a.createElement("div",null,s.a.createElement("input",{type:"text",onChange:function(e){return t.setState({myCom:e.target.value})},value:this.state.myCom,name:"comment"}),s.a.createElement("button",{onClick:function(){return t.addComment()}},"dodaj komentarz"))))}}]),n}(c.Component));e.default=_}}]);
//# sourceMappingURL=11.e2ba88a1.chunk.js.map