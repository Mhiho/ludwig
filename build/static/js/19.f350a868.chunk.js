(this.webpackJsonpvanessa=this.webpackJsonpvanessa||[]).push([[19],{127:function(e,t,a){e.exports={Container:"mypoems_Container__33Gd_",Poem:"mypoems_Poem__peHnm",Opacity:"mypoems_Opacity___BPts",opacity:"mypoems_opacity__329wk",Frame:"mypoems_Frame__1bQ5k",addAkaBtn:"mypoems_addAkaBtn__ZkuB-",addLine:"mypoems_addLine__3lCU6",goBackBtn:"mypoems_goBackBtn__1bXlS",deleteBtn:"mypoems_deleteBtn__Sgj7X",Akapit:"mypoems_Akapit__-AIiE",Line:"mypoems_Line__2aOFC",NewPoemBtn:"mypoems_NewPoemBtn__3_GoL",ContainerPoem:"mypoems_ContainerPoem__1iUfi",ContainerReading:"mypoems_ContainerReading__3EHwV",MyPoem:"mypoems_MyPoem__KLae-",progressBar:"mypoems_progressBar__3ULVK"}},153:function(e,t,a){"use strict";a.r(t);var n=a(30),o=a(31),i=a(33),m=a(32),s=a(0),r=a.n(s),c=a(9),_=a(16),p=a(17),l=a(127),d=a.n(l),y=a(49),u=a.n(y),h=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(n.a)(this,a);for(var o=arguments.length,i=new Array(o),m=0;m<o;m++)i[m]=arguments[m];return(e=t.call.apply(t,[this].concat(i)))._isMounted=!1,e.state={isLoading:!0,poems:[]},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;this._isMounted=!0;var t="".concat(_.a,"/poems/mine"),a={"Content-Type":"application/json",Authorization:"Bearer "+Object(p.a)().token};fetch(t,{headers:a}).then((function(e){return e.json()})).then((function(t){e.setState({poems:t},(function(){e.setState({isLoading:!1})}))}))}},{key:"componentWillUnmount",value:function(){this._isMounted=!1}},{key:"render",value:function(){return!0===this.state.isLoading?r.a.createElement("div",{style:{marginTop:"-180px",width:"100vw",height:"100vh",display:"flex",justifyContent:"center",alignItems:"center"}},r.a.createElement("div",{className:u.a.loader})):r.a.createElement("div",{className:d.a.Frame},r.a.createElement(c.b,{to:"/addPoem"},r.a.createElement("h2",null,"Dodaj nowy wiersz!")),r.a.createElement("div",{className:d.a.Container},r.a.createElement("div",null,"Kliknij na tytu\u0142, \u017ceby edytowa\u0107:",this.state.poems.map((function(e,t){return r.a.createElement(c.b,{key:e.id,className:d.a.Item,to:"addBody/".concat(e.id)},r.a.createElement("div",{className:d.a.MyPoem},r.a.createElement("p",null,r.a.createElement("span",null,t+1,". "),e.title)))})))))}}]),a}(s.Component);t.default=h}}]);
//# sourceMappingURL=19.f350a868.chunk.js.map