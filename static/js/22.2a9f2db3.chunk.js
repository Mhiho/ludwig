(this.webpackJsonpvanessa=this.webpackJsonpvanessa||[]).push([[22],{150:function(e,t,n){"use strict";n.r(t);var a=n(29),s=n(30),r=n(32),o=n(31),u=n(0),c=n.n(u),i=n(20),l=n(19),h=function(e){Object(r.a)(n,e);var t=Object(o.a)(n);function n(){var e;Object(a.a)(this,n);for(var s=arguments.length,r=new Array(s),o=0;o<s;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={isLoading:!0,users:[]},e}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var e=this;this._isMounted=!0;var t="".concat(l.a,"/users/all"),n={"Content-Type":"application/json",Authorization:"Bearer "+Object(i.a)().token};fetch(t,{headers:n}).then((function(e){return e.json()})).then((function(t){e.setState({users:t},(function(){e.setState({isLoading:!1})}))}))}},{key:"render",value:function(){return console.log(this.state.users),c.a.createElement("div",null,c.a.createElement("h2",null,"Spo\u0142eczno\u015b\u0107 otch\u0142ani:"),0===this.state.users.length?null:this.state.users.map((function(e,t){return c.a.createElement("div",null,c.a.createElement("h3",null,e.name))})))}}]),n}(u.Component);t.default=h}}]);
//# sourceMappingURL=22.2a9f2db3.chunk.js.map