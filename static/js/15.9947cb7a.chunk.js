(this.webpackJsonpvanessa=this.webpackJsonpvanessa||[]).push([[15],{112:function(t,e,o){t.exports={Slider:"books_Slider__2MA9y",Slide:"books_Slide__3w9SK",Credits:"books_Credits__29Kb1",Description:"books_Description__P1rIz",Buttons:"books_Buttons__cSqRC",left:"books_left__1Un_s",right:"books_right__FWvtJ",slideLeft:"books_slideLeft__2Bc5t",slideRight:"books_slideRight__3RaJK",opacity:"books_opacity__1TjoB",nonopacity:"books_nonopacity__QT6_4",nopacity:"books_nopacity__3okSQ",title:"books_title__MxAxl",upTitle:"books_upTitle__2ZpsP",upPanel:"books_upPanel__2e8ZB",panel:"books_panel__3oqO5",changeSlideCircle:"books_changeSlideCircle__1k6S2",Cover:"books_Cover__18ka7",activeCircle:"books_activeCircle__GqskM"}},131:function(t,e,o){"use strict";o.r(e);var a=o(21),n=o(22),s=o(24),i=o(23),c=o(0),r=o.n(c),l=o(13),_=o(28),p=o(112),h=o.n(p),b=function(t){Object(s.a)(o,t);var e=Object(i.a)(o);function o(){var t;Object(a.a)(this,o);for(var n=arguments.length,s=new Array(n),i=0;i<n;i++)s[i]=arguments[i];return(t=e.call.apply(e,[this].concat(s))).state={id:null,book:void 0,chapterNr:null},t}return Object(n.a)(o,[{key:"componentDidMount",value:function(){var t=this,e=this.props.match.params.chapterNr,o=this.props.match.params.id;this.setState({id:o,chapterNr:e},(function(){var e="".concat(_.a,"books/").concat(t.state.id),o={"Content-Type":"application/json",Authorization:"Bearer "+"".concat(Object(l.a)().token)};fetch(e,{headers:o}).then((function(t){return t.json()})).then((function(e){t.setState({book:e})}))}))}},{key:"render",value:function(){return console.log(this.state.book),r.a.createElement("div",null,r.a.createElement("div",null,void 0!==this.state.book?this.state.book.chapters.map((function(t,e){return r.a.createElement("button",{className:h.a.btnChaptitle},t.chaptitle)})):null),void 0!==this.state.book?this.state.book.chapters[this.state.chapterNr].chaptitle:null,void 0!==this.state.book?this.state.book.chapters[this.state.chapterNr].akapits.map((function(t,e){return r.a.createElement("p",null,t)})):null)}}]),o}(c.Component);e.default=b}}]);
//# sourceMappingURL=15.9947cb7a.chunk.js.map