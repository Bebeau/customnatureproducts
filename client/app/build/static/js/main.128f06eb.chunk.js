(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),i=a(3),l=a.n(i),o=a(4),r=a(5),c=a(7),u=a(6),b=a(1),m=a(8),d=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={isLoading:!1,success:"",emailValue:"",response:"",status:""},a.onTextboxChange=a.onTextboxChange.bind(Object(b.a)(a)),a.subscribe=a.subscribe.bind(Object(b.a)(a)),a}return Object(m.a)(t,e),Object(r.a)(t,[{key:"onTextboxChange",value:function(e){this.setState({emailValue:e.target.value})}},{key:"subscribe",value:function(e){var t=this;this.setState({isLoading:!0}),this.state.emailValue?fetch("/subscribe").then(function(e){return e.json()}).then(function(e){e.success,t.setState({response:e.message,isLoading:!1})}):this.setState({status:"error",response:"Please enter a valid email address.",isLoading:!1})}},{key:"render",value:function(){var e=this.state,t=e.isLoading,a=e.emailValue,n=e.response,i=e.status;return s.a.createElement("div",null,s.a.createElement("header",null,s.a.createElement("div",{className:"logo"}),s.a.createElement("h3",null,"In case you haven\u2019t, is a grassroots initiative combating the extortion efforts of major record labels on musical talent."),s.a.createElement("h2",null,"Get Invited"),s.a.createElement("p",null,"Heard offers a $99/month subscription service allowing artists to download unlimited instrumentals, while automatically redistributing monthly earnings back to the producers on a per download basis."),s.a.createElement("input",{type:"email",placeholder:"email@address..",value:a,onChange:this.onTextboxChange}),s.a.createElement("button",{onClick:this.subscribe},t?s.a.createElement("span",null,"..."):s.a.createElement("span",null,"Subscribe")),n?s.a.createElement("p",{className:i},n):null))}}]),t}(s.a.Component);a(15);l.a.render(s.a.createElement(d,null),document.getElementById("root"))},9:function(e,t,a){e.exports=a(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.128f06eb.chunk.js.map