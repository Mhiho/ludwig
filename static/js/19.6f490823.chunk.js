(this.webpackJsonpvanessa=this.webpackJsonpvanessa||[]).push([[19],{126:function(e,t,n){e.exports={Container:"mypoems_Container__33Gd_",Poem:"mypoems_Poem__peHnm",Opacity:"mypoems_Opacity___BPts",opacity:"mypoems_opacity__329wk",Frame:"mypoems_Frame__1bQ5k",addAkaBtn:"mypoems_addAkaBtn__ZkuB-",addLine:"mypoems_addLine__3lCU6",goBackBtn:"mypoems_goBackBtn__1bXlS",deleteBtn:"mypoems_deleteBtn__Sgj7X",Akapit:"mypoems_Akapit__-AIiE",Line:"mypoems_Line__2aOFC",NewPoemBtn:"mypoems_NewPoemBtn__3_GoL",ContainerPoem:"mypoems_ContainerPoem__1iUfi",ContainerReading:"mypoems_ContainerReading__3EHwV",MyPoem:"mypoems_MyPoem__KLae-"}},149:function(e,t,n){"use strict";n.r(t);var a=n(29),o=n(30),i=n(32),m=n(31),s=n(0),c=n.n(s),r=n(9),_=n(19),l=n(20),p=n(126),d=n.n(p),y=n(49),u=n.n(y),h=function(e){Object(i.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(a.a)(this,n);for(var o=arguments.length,i=new Array(o),m=0;m<o;m++)i[m]=arguments[m];return(e=t.call.apply(t,[this].concat(i)))._isMounted=!1,e.state={isLoading:!0,poems:[]},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=this;this._isMounted=!0;var t="".concat(_.a,"/poems/mine"),n={"Content-Type":"application/json",Authorization:"Bearer "+Object(l.a)().token};fetch(t,{headers:n}).then((function(e){return e.json()})).then((function(t){e.setState({poems:t},(function(){e.setState({isLoading:!1})}))}))}},{key:"componentWillUnmount",value:function(){this._isMounted=!1}},{key:"render",value:function(){return!0===this.state.isLoading?c.a.createElement("div",{style:{marginTop:"-180px",width:"100vw",height:"100vh",display:"flex",justifyContent:"center",alignItems:"center"}},c.a.createElement("div",{className:u.a.loader})):c.a.createElement("div",{className:d.a.Frame},c.a.createElement(r.b,{to:"/addPoem"},c.a.createElement("h2",null,"Dodaj nowy wiersz!")),c.a.createElement("div",{className:d.a.Container},c.a.createElement("div",null,"Kliknij na tytu\u0142, \u017ceby edytowa\u0107:",this.state.poems.map((function(e,t){return c.a.createElement(r.b,{key:e.id,className:d.a.Item,to:"addBody/".concat(e.id)},c.a.createElement("div",{className:d.a.MyPoem},c.a.createElement("p",null,c.a.createElement("span",null,t+1,". "),e.title)))})))))}}]),n}(s.Component);t.default=h}}]);
//# sourceMappingURL=19.6f490823.chunk.js.map