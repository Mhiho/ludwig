(this.webpackJsonpvanessa=this.webpackJsonpvanessa||[]).push([[20],{127:function(e,t,a){e.exports={Container:"mypoems_Container__33Gd_",Poem:"mypoems_Poem__peHnm",Opacity:"mypoems_Opacity___BPts",opacity:"mypoems_opacity__329wk",Frame:"mypoems_Frame__1bQ5k",addAkaBtn:"mypoems_addAkaBtn__ZkuB-",addLine:"mypoems_addLine__3lCU6",goBackBtn:"mypoems_goBackBtn__1bXlS",deleteBtn:"mypoems_deleteBtn__Sgj7X",Akapit:"mypoems_Akapit__-AIiE",Line:"mypoems_Line__2aOFC",NewPoemBtn:"mypoems_NewPoemBtn__3_GoL",ContainerPoem:"mypoems_ContainerPoem__1iUfi",ContainerReading:"mypoems_ContainerReading__3EHwV",MyPoem:"mypoems_MyPoem__KLae-",progressBar:"mypoems_progressBar__3ULVK"}},149:function(e,t,a){"use strict";a.r(t);var n=a(15),o=a.n(n),c=a(22),m=a(21),s=a(0),i=a.n(s),r=a(9),_=a(16),u=a(127),p=a.n(u),l=(a(49),a(41)),d=a.n(l);a(52);t.default=function(){var e=Object(s.useState)(!0),t=Object(m.a)(e,2),a=(t[0],t[1]),n=Object(s.useState)([]),u=Object(m.a)(n,2),l=u[0],y=u[1],b=Object(s.useState)(0),f=Object(m.a)(b,2),O=f[0],j=f[1],B=Object(s.useState)(!1),P=Object(m.a)(B,2),k=P[0],g=P[1],h=Object(s.useState)([!1,!1,!1,!1,!1]),v=Object(m.a)(h,2),E=(v[0],v[1],Object(s.useState)(!1)),C=Object(m.a)(E,2),w=(C[0],C[1],function(){var e=Object(c.a)(o.a.mark((function e(){var t,n,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.get("".concat(_.a,"/poems/all"));case 2:t=e.sent,n=t.data.sort((function(){return.5-Math.random()})),c=n.slice(0,5),y(c),c.length>0&&a(!1),!0===k&&setTimeout((function(){g(!1)}),300);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}());Object(s.useEffect)((function(){w()}),[O]);return i.a.createElement("div",null,i.a.createElement("div",{className:p.a.ContainerPoem},i.a.createElement("div",null,i.a.createElement("button",{className:p.a.NewPoemBtn,onClick:k?null:function(){O>=3?(setTimeout((function(){j(0)}),1e3),g(!0)):(setTimeout((function(){j(O+1)}),1e3),g(!0))}},"Przegl\u0105daj dalej"),0===l.length?null:i.a.createElement("div",{className:!0!==k?"".concat(p.a.Poem):"".concat(p.a.Poem," ").concat(p.a.Opacity)},i.a.createElement(r.b,{to:"/poemReading/".concat(l[O].id)},i.a.createElement("h3",null,l[O].title),i.a.createElement("h4",null,l[O].author))))))}}}]);
//# sourceMappingURL=20.b986f5c1.chunk.js.map