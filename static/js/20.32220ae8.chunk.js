(this.webpackJsonpvanessa=this.webpackJsonpvanessa||[]).push([[20],{126:function(e,t,a){e.exports={Container:"mypoems_Container__33Gd_",Poem:"mypoems_Poem__peHnm",Opacity:"mypoems_Opacity___BPts",opacity:"mypoems_opacity__329wk",Frame:"mypoems_Frame__1bQ5k",addAkaBtn:"mypoems_addAkaBtn__ZkuB-",addLine:"mypoems_addLine__3lCU6",goBackBtn:"mypoems_goBackBtn__1bXlS",deleteBtn:"mypoems_deleteBtn__Sgj7X",Akapit:"mypoems_Akapit__-AIiE",Line:"mypoems_Line__2aOFC",NewPoemBtn:"mypoems_NewPoemBtn__3_GoL",ContainerPoem:"mypoems_ContainerPoem__1iUfi",ContainerReading:"mypoems_ContainerReading__3EHwV",MyPoem:"mypoems_MyPoem__KLae-"}},145:function(e,t,a){"use strict";a.r(t);var n=a(18),o=a.n(n),c=a(25),m=a(17),s=a(0),i=a.n(s),_=a(9),r=a(19),u=a(126),l=a.n(u),p=(a(49),a(40)),d=a.n(p);a(52);t.default=function(){var e=Object(s.useState)(!0),t=Object(m.a)(e,2),a=(t[0],t[1]),n=Object(s.useState)([]),u=Object(m.a)(n,2),p=u[0],y=u[1],b=Object(s.useState)(0),f=Object(m.a)(b,2),O=f[0],j=f[1],P=Object(s.useState)(!1),k=Object(m.a)(P,2),B=k[0],h=k[1],v=Object(s.useState)([!1,!1,!1,!1,!1]),E=Object(m.a)(v,2),g=(E[0],E[1],Object(s.useState)(!1)),C=Object(m.a)(g,2),w=(C[0],C[1],function(){var e=Object(c.a)(o.a.mark((function e(){var t,n,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.get("".concat(r.a,"/poems/all"));case 2:t=e.sent,n=t.data.sort((function(){return.5-Math.random()})),c=n.slice(0,5),y(c),c.length>0&&a(!1),!0===B&&setTimeout((function(){h(!1)}),300);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}());Object(s.useEffect)((function(){w()}),[O]);return i.a.createElement("div",null,i.a.createElement("div",{className:l.a.ContainerPoem},i.a.createElement("div",null,i.a.createElement("button",{className:l.a.NewPoemBtn,onClick:B?null:function(){O>=3?(setTimeout((function(){j(0)}),1e3),h(!0)):(setTimeout((function(){j(O+1)}),1e3),h(!0))}},"Przegl\u0105daj dalej"),0===p.length?null:i.a.createElement("div",{className:!0!==B?"".concat(l.a.Poem):"".concat(l.a.Poem," ").concat(l.a.Opacity)},i.a.createElement(_.b,{to:"/poemReading/".concat(p[O].id)},i.a.createElement("h3",null,p[O].title),i.a.createElement("h4",null,p[O].author))))))}}}]);
//# sourceMappingURL=20.32220ae8.chunk.js.map