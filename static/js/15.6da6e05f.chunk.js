(this.webpackJsonpvanessa=this.webpackJsonpvanessa||[]).push([[15],{132:function(t,e,o){t.exports={Slider:"books_Slider__2MA9y",Slide:"books_Slide__3w9SK",Credits:"books_Credits__29Kb1",Description:"books_Description__P1rIz",Buttons:"books_Buttons__cSqRC",left:"books_left__1Un_s",right:"books_right__FWvtJ",slideLeft:"books_slideLeft__2Bc5t",slideRight:"books_slideRight__3RaJK",opacity:"books_opacity__1TjoB",nonopacity:"books_nonopacity__QT6_4",nopacity:"books_nopacity__3okSQ",title:"books_title__MxAxl",upTitle:"books_upTitle__2ZpsP",upPanel:"books_upPanel__2e8ZB",panel:"books_panel__3oqO5",changeSlideCircle:"books_changeSlideCircle__1k6S2",Cover:"books_Cover__18ka7",activeCircle:"books_activeCircle__GqskM"}},148:function(t,e,o){"use strict";o.r(e);var a=o(15),n=o.n(a),s=o(22),i=o(30),c=o(31),r=o(33),l=o(32),p=o(0),h=o.n(p),_=o(16),u=o(9),d=o(132),k=o.n(d),b=o(26),f=o(49),g=o.n(f),v=o(17),m=o(52),y=o(53),C=function(t){Object(r.a)(o,t);var e=Object(l.a)(o);function o(){var t;Object(i.a)(this,o);for(var a=arguments.length,n=new Array(a),s=0;s<a;s++)n[s]=arguments[s];return(t=e.call.apply(e,[this].concat(n))).state={id:null,book:{},loading:!0,purchased:!1,chapterNr:null},t}return Object(c.a)(o,[{key:"componentDidMount",value:function(){var t=Object(s.a)(n.a.mark((function t(){var e,o,a,s,i,c,r,l=this;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.props.fetchCheckpoints();case 2:return t.next=4,this.props.match.params;case 4:return e=t.sent,o=e.id,console.log(o),this.setState({id:o}),t.next=10,this.props.checkpoints.checkpoints.find((function(t){return t.bookId===l.state.id}));case 10:return a=t.sent,console.log(a),a?this.setState({chapterNr:a.checkpointCh}):this.setState({chpaterNr:0}),console.log(this.state.chapterNr),console.log(this.book),s="".concat(_.a,"/books/gatePurchased/").concat(this.state.id),i={"Content-Type":"application/json",Authorization:"Bearer "+Object(v.a)().token},t.next=19,b.a.get(s,{headers:i});case 19:return c=t.sent,this.setState({purchased:c.data.flag}),t.next=23,b.a.get("".concat(_.a,"/books/sample/").concat(this.state.id));case 23:r=t.sent,this.setState({book:r.data},(function(){l.setState({loading:!1})}));case 25:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){return this.state.loading?h.a.createElement("div",{style:{marginTop:"-180px",width:"100vw",height:"100vh",display:"flex",justifyContent:"center",alignItems:"center"}},h.a.createElement("div",{className:g.a.loader})):h.a.createElement("div",null,h.a.createElement("div",null,this.state.book?this.state.book.sample:"Autor nie doda\u0142 jeszcze pr\xf3bki swojej ksi\u0105\u017cki"),h.a.createElement(u.b,{to:this.state.purchased?"/".concat(this.state.id,"/reading/").concat(this.state.chapterNr):"/"},h.a.createElement("button",{className:k.a.btnChaptitle},"Czytaj dalej")))}}]),o}(p.Component);e.default=Object(m.b)((function(t){return{checkpoints:t.checkpointsReadingState}}),(function(t){return{fetchCheckpoints:function(){return t(Object(y.b)())}}}))(C)}}]);
//# sourceMappingURL=15.6da6e05f.chunk.js.map