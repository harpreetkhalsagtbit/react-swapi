(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{32:function(e,t,a){e.exports=a(47)},33:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){},47:function(e,t,a){"use strict";a.r(t);a(33),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var n=a(0),r=a.n(n),c=a(18),l=a.n(c),o=a(15),i=a(13),s=a(28),u=a(1),m=a(2),h=a(5),p=a(3),d=a(4),b=a(48),g=a(11),f=Object(g.a)(),E=a(14),v=a(8),O=a(7),S=(a(42),function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(h.a)(this,Object(p.a)(t).call(this,e))).state={value:""},a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("input",Object.assign({type:"text"},this.props))}}]),t}(r.a.PureComponent)),j=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(h.a)(this,Object(p.a)(t).call(this,e))).state={value:""},a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("input",Object.assign({type:"password"},this.props))}}]),t}(r.a.PureComponent),C=a(29),N=(a(43),function(e){var t=e.className,a=Object(C.a)(e,["className"]);return r.a.createElement("button",Object.assign({className:t,type:"button"},a),a.children)}),y=function(e){function t(e){var a;return Object(u.a)(this,t),a=Object(h.a)(this,Object(p.a)(t).call(this,e)),console.log(e,"props login form"),a.state={form:{}},a.onClick=a.onClick.bind(Object(O.a)(a)),a.handleChange=a.handleChange.bind(Object(O.a)(a)),a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"handleChange",value:function(e){var t=e.target,a=t.name,n=t.value;this.setState(function(e,t){return e.form=Object.assign({},Object(v.a)({},e.form),Object(E.a)({},a,n)),{form:e.form}})}},{key:"onClick",value:function(){this.props.onClick(this.state.form)}},{key:"componentDidUpdate",value:function(){console.log("props",this.props)}},{key:"render",value:function(){return console.log("rendering login form",this.props),r.a.createElement("div",{className:"form-vertical"},r.a.createElement("div",{className:"input-group"},r.a.createElement("label",null,"Username"),r.a.createElement(S,{className:"txt",name:"username",onChange:this.handleChange})),r.a.createElement("div",{className:"input-group"},r.a.createElement("label",null,"Password"),r.a.createElement(j,{name:"password",className:"txt",onChange:this.handleChange})),r.a.createElement("div",{className:"input-group"},r.a.createElement(N,{className:"btn btn-primary btn-large",disabled:this.props.login.isVerifying,onClick:this.onClick},this.props.login.isVerifying?"Verifying, Please wait...":"Log In")))}}]),t}(r.a.PureComponent),I=Object(o.b)(function(e,t){return console.log(e,t,"from container"),{login:e.login}},function(e,t){return{onClick:function(t){return e(function(e){console.log("Login Action perform",e);var t=new Promise(function(t,a){fetch("https://swapi.co/api/people/?search=".concat(e.username)).then(function(e){return e.json()}).then(function(n){n.results.filter(function(t){return t.name===e.username&&t.birth_year===e.password}).length?t(!0):a("invalid credentials")})});return function(a,n){return a({type:"USER_LOG_IN_INITITATED"}),t.then(function(t){a({type:"USER_LOG_IN_SUCCESS"}),localStorage.setItem("token","token-for-user@"+e.username),localStorage.setItem("sessionSearchCount",0),localStorage.setItem("prevSearchTimestamp",""),f.push("/")},function(e){a({type:"USER_LOG_IN_FAILED"})})}}(t))}}})(y),k=(a(44),function(e){function t(){return Object(u.a)(this,t),Object(h.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("main",null,r.a.createElement("div",{className:"login-container"},r.a.createElement("h3",{className:"login-title"},"Log in"),r.a.createElement(I,null)))}}]),t}(r.a.PureComponent)),w=a(20),L=(a(45),function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(h.a)(this,Object(p.a)(t).call(this,e))).state={showDetails:!1,details:e.details},a.onClick=a.onClick.bind(Object(O.a)(a)),a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"onClick",value:function(){this.setState(function(e,t){return{showDetails:!e.showDetails}})}},{key:"render",value:function(){var e=this.props.index,t=this.props.details;return r.a.createElement("div",{key:e},r.a.createElement("div",{className:"size-".concat(e<=5?e:"other"," planet-row")},r.a.createElement("div",null,r.a.createElement("span",null,t.name),"-",r.a.createElement("span",null,t.population)),r.a.createElement("div",null,r.a.createElement(N,{className:"btn btn-primary btn-large",onClick:this.onClick},this.state.showDetails?"Hide details":"Show details"))),this.state.showDetails?r.a.createElement("div",{className:"table"},r.a.createElement("div",{className:"table-header"},r.a.createElement("div",{className:"table-header-cell"},"Climate"),r.a.createElement("div",{className:"table-header-cell"},"Created"),r.a.createElement("div",{className:"table-header-cell"},"Diameter"),r.a.createElement("div",{className:"table-header-cell"},"Gravity"),r.a.createElement("div",{className:"table-header-cell"},"Orbital Period"),r.a.createElement("div",{className:"table-header-cell"},"Surface Water"),r.a.createElement("div",{className:"table-header-cell"},"Terrain")),r.a.createElement("div",{className:"table-body"},r.a.createElement("div",{key:e,className:"table-rows"},r.a.createElement("div",{className:"table-row-cell"},t.climate),r.a.createElement("div",{className:"table-row-cell"},t.created),r.a.createElement("div",{className:"table-row-cell"},t.diameter),r.a.createElement("div",{className:"table-row-cell"},t.gravity),r.a.createElement("div",{className:"table-row-cell"},t.orbital_period),r.a.createElement("div",{className:"table-row-cell"},t.surface_water),r.a.createElement("div",{className:"table-row-cell"},t.terrain)))):"")}}]),t}(r.a.PureComponent)),_=function(e){var t=e.list;return r.a.createElement(n.Fragment,null,r.a.createElement("h3",null,"Order By Population:"),t.map(function(e,t){return r.a.createElement(L,{key:t,index:t,details:e})}))},T=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(h.a)(this,Object(p.a)(t).call(this,e))).state={form:{},planets:[],isSearching:!1,searchLimitExceed:!1},a.onKeyUp=a.onKeyUp.bind(Object(O.a)(a)),a.handleChange=a.handleChange.bind(Object(O.a)(a)),a.changeInterval="",a.THRESHOLD=6e4,a.LUKE="Luke Skywalker".toLocaleLowerCase(),a.SEARCH_LIMIT=15,a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"handleChange",value:function(e){var t=e.target,a=t.name,n=t.value;this.setState(function(e,t){return{isSearching:!1,gotResponse:!1,form:Object.assign({},Object(v.a)({},e.form),Object(E.a)({},a,n))}})}},{key:"onKeyUp",value:function(){var e=this;clearInterval(this.changeInterval),this.changeInterval=setInterval(function(){var t=localStorage.getItem("token"),a=+localStorage.getItem("sessionSearchCount")||0,n=t.replace("token-for-user@",""),r=+localStorage.getItem("prevSearchTimestamp")||0,c=0,l=!1;!r&&a<=e.SEARCH_LIMIT?(l=!0,localStorage.setItem("prevSearchTimestamp",Date.now())):(c=Date.now()-r,n.toLowerCase()===e.LUKE?l=!0:n.toLowerCase()!==e.LUKE&&c<=e.THRESHOLD&&a<=e.SEARCH_LIMIT?l=!0:c>e.THRESHOLD&&(l=!0,a=0,localStorage.setItem("sessionSearchCount",a),localStorage.setItem("prevSearchTimestamp",Date.now()))),l?(localStorage.setItem("sessionSearchCount",a+1),e.setState(function(e,t){return{isSearching:!0,searchLimitExceed:!1}}),e.props.onKeyUp(e.state.form).then(function(){e.setState(function(e,t){return{gotResponse:!0}})})):e.setState({searchLimitExceed:!0}),clearInterval(e.changeInterval)},1e3)}},{key:"componentDidUpdate",value:function(){var e=this;this.state.gotResponse&&this.setState(function(t,a){return{isSearching:!1,gotResponse:!1,planets:Object(w.a)(e.props.planets.planets)}})}},{key:"render",value:function(){return r.a.createElement("div",{className:"form-vertical"},r.a.createElement("div",{className:"input-group"},r.a.createElement("label",null,"Search your favourite Star Wars Planet"),r.a.createElement(S,{className:"txt",name:"searchStr",onChange:this.handleChange,onKeyUp:this.onKeyUp,placeholder:"Search..."})),this.state.isSearching?"Searching please wait....":this.state.planets.length?r.a.createElement(_,{list:this.state.planets}):this.state.searchLimitExceed?r.a.createElement("div",null,"Search Limit Exceed"):r.a.createElement("div",null,"No result(s) found."))}}]),t}(r.a.PureComponent),A=Object(o.b)(function(e,t){return console.log(e,t,"from container"),{planets:e.PlanetSearch}},function(e,t){return{onKeyUp:function(t){return e(function(e){var t=new Promise(function(t,a){fetch("https://swapi.co/api/planets/?search=".concat(e.searchStr)).then(function(e){return e.json()}).then(function(e){e.results.length?(e.results=e.results.sort(function(e,t){var a=isNaN(+e.population)?0:+e.population;return(isNaN(+t.population)?0:+t.population)-a}),t(e.results)):t([])})});return function(e,a){return e({type:"PLANET_SEARCH_INITIATED"}),t.then(function(t){e({type:"PLANET_SEARCH_SUCCESS",planets:t})},function(t){e({type:"PLANET_SEARCH_FAILED"})})}}(t))}}})(T),P=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(h.a)(this,Object(p.a)(t).call(this,e))).state={},a.onClick=a.onClick.bind(Object(O.a)(a)),a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"onClick",value:function(){console.log(this.props);var e=this.props,t=(e.match.params,e.history);localStorage.removeItem("token"),localStorage.removeItem("sessionSearchCount"),localStorage.removeItem("prevSearchTimestamp"),t.push("/login")}},{key:"render",value:function(){return r.a.createElement(n.Fragment,null,r.a.createElement("main",null,r.a.createElement("div",{className:"flex-header-row"},r.a.createElement("h3",{className:"login-title"}),r.a.createElement("h3",{className:"login-title"},"Home"),r.a.createElement(N,{className:"btn btn-primary btn-large",onClick:this.onClick},"Logout")),r.a.createElement(A,null)))}}]),t}(r.a.PureComponent),U=[{path:"/",exact:!0,render:function(e){return localStorage.getItem("token")?r.a.createElement(P,e):r.a.createElement(b.a,{to:{pathname:"/login",state:{from:e.location}}})}},{path:"/login",exact:!0,render:function(e){return localStorage.getItem("token")?r.a.createElement(b.a,{to:{pathname:"/",state:{from:e.location}}}):r.a.createElement(k,null)}}],D=function(e){function t(){return Object(u.a)(this,t),Object(h.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement(b.c,{history:f},r.a.createElement(b.d,null,U.map(function(e,t){return r.a.createElement(b.b,Object.assign({key:t},e))}),r.a.createElement(b.b,{render:function(){return r.a.createElement(R,null)}})))}}]),t}(r.a.PureComponent),R=function(){return r.a.createElement("h1",null,"Not Found")},H={isVerifying:!1,isLoggedIn:!1,isLogInFailed:!1},x={isSearching:!1,planets:[]},F=Object(i.c)({todos:function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0];return{list:[]}},counter:function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0];return{counter:0}},login:function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0];var e=arguments.length>1?arguments[1]:void 0;switch(console.log(e,"inreducer"),e.type){case"USER_LOG_IN_INITITATED":return Object.assign(Object(v.a)({},H),{isVerifying:!0,isLogInFailed:!1});case"USER_LOG_IN_SUCCESS":return Object.assign({},Object(v.a)({},H),{isLoggedIn:!0});case"USER_LOG_IN_FAILED":return Object.assign({},Object(v.a)({},H),{isLogInFailed:!0});default:return H}},PlanetSearch:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"PLANET_SEARCH_INITIATED":return Object.assign(Object(v.a)({},e),{isSearching:!0});case"PLANET_SEARCH_SUCCESS":return Object.assign(Object(v.a)({},e),{isSearching:!1,planets:Object(w.a)(t.planets)});case"PLANET_SEARCH_FAILED":return Object.assign(Object(v.a)({},e),{isSearching:!1});default:return x}}}),K=Object(i.d)(F,Object(i.a)(s.a));(function(){l.a.render(r.a.createElement(o.a,{store:K},r.a.createElement(D,null)),document.getElementById("root"))})(),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[32,1,2]]]);
//# sourceMappingURL=main.31e81eb9.chunk.js.map