(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{34:function(e,t,a){e.exports=a(49)},35:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){},49:function(e,t,a){"use strict";a.r(t);a(35),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var n=a(0),r=a.n(n),c=a(20),l=a.n(c),o=a(18),i=a(16),s=a(31),u=a(2),m=a(3),h=a(6),p=a(4),d=a(5),g=a(25),b=a(15),f=a(7),E=Object(f.a)(),v=a(17),O=a(11),S=a(9),j=(a(44),function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(h.a)(this,Object(p.a)(t).call(this,e))).state={value:""},a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("input",Object.assign({type:"text"},this.props))}}]),t}(r.a.PureComponent)),C=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(h.a)(this,Object(p.a)(t).call(this,e))).state={value:""},a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("input",Object.assign({type:"password"},this.props))}}]),t}(r.a.PureComponent),N=a(32),y=(a(45),function(e){var t=e.className,a=Object(N.a)(e,["className"]);return r.a.createElement("button",Object.assign({className:t,type:"button"},a),a.children)}),I=function(e){function t(e){var a;return Object(u.a)(this,t),a=Object(h.a)(this,Object(p.a)(t).call(this,e)),console.log(e,"props login form"),a.state={form:{}},a.onClick=a.onClick.bind(Object(S.a)(a)),a.handleChange=a.handleChange.bind(Object(S.a)(a)),a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"handleChange",value:function(e){var t=e.target,a=t.name,n=t.value;this.setState(function(e,t){return e.form=Object.assign({},Object(O.a)({},e.form),Object(v.a)({},a,n)),{form:e.form}})}},{key:"onClick",value:function(){this.props.onClick(this.state.form)}},{key:"componentDidUpdate",value:function(){console.log("props",this.props)}},{key:"render",value:function(){return console.log("rendering login form",this.props),r.a.createElement("div",{className:"form-vertical"},r.a.createElement("div",{className:"input-group"},r.a.createElement("label",null,"Username"),r.a.createElement(j,{className:"txt",name:"username",onChange:this.handleChange})),r.a.createElement("div",{className:"input-group"},r.a.createElement("label",null,"Password"),r.a.createElement(C,{name:"password",className:"txt",onChange:this.handleChange})),r.a.createElement("div",{className:"input-group"},r.a.createElement(y,{className:"btn btn-primary btn-large",disabled:this.props.login.isVerifying,onClick:this.onClick},this.props.login.isVerifying?"Verifying, Please wait...":"Log In")))}}]),t}(r.a.PureComponent),k=Object(o.b)(function(e,t){return console.log(e,t,"from container"),{login:e.login}},function(e,t){return{onClick:function(t){return e(function(e){console.log("Login Action perform",e);var t=new Promise(function(t,a){fetch("https://swapi.co/api/people/?search=".concat(e.username)).then(function(e){return e.json()}).then(function(n){n.results.filter(function(t){return t.name===e.username&&t.birth_year===e.password}).length?t(!0):a("invalid credentials")})});return function(a,n){return a({type:"USER_LOG_IN_INITITATED"}),t.then(function(t){a({type:"USER_LOG_IN_SUCCESS"}),localStorage.setItem("token","token-for-user@"+e.username),localStorage.setItem("sessionSearchCount",0),localStorage.setItem("prevSearchTimestamp",""),E.push("/home")},function(e){a({type:"USER_LOG_IN_FAILED"})})}}(t))}}})(I),w=(a(46),function(e){function t(){return Object(u.a)(this,t),Object(h.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("main",null,r.a.createElement("div",{className:"login-container"},r.a.createElement("h3",{className:"login-title"},"Log in"),r.a.createElement(k,null)))}}]),t}(r.a.PureComponent)),L=a(22),_=(a(47),function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(h.a)(this,Object(p.a)(t).call(this,e))).state={showDetails:!1,details:e.details},a.onClick=a.onClick.bind(Object(S.a)(a)),a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"onClick",value:function(){this.setState(function(e,t){return{showDetails:!e.showDetails}})}},{key:"render",value:function(){var e=this.props.index,t=this.props.details;return r.a.createElement("div",{key:e},r.a.createElement("div",{className:"size-".concat(e<=5?e:"other"," planet-row")},r.a.createElement("div",null,r.a.createElement("span",null,t.name),"-",r.a.createElement("span",null,t.population)),r.a.createElement("div",null,r.a.createElement(y,{className:"btn btn-primary btn-large",onClick:this.onClick},this.state.showDetails?"Hide details":"Show details"))),this.state.showDetails?r.a.createElement("div",{className:"table"},r.a.createElement("div",{className:"table-header"},r.a.createElement("div",{className:"table-header-cell"},"Climate"),r.a.createElement("div",{className:"table-header-cell"},"Created"),r.a.createElement("div",{className:"table-header-cell"},"Diameter"),r.a.createElement("div",{className:"table-header-cell"},"Gravity"),r.a.createElement("div",{className:"table-header-cell"},"Orbital Period"),r.a.createElement("div",{className:"table-header-cell"},"Surface Water"),r.a.createElement("div",{className:"table-header-cell"},"Terrain")),r.a.createElement("div",{className:"table-body"},r.a.createElement("div",{key:e,className:"table-rows"},r.a.createElement("div",{className:"table-row-cell"},t.climate),r.a.createElement("div",{className:"table-row-cell"},t.created),r.a.createElement("div",{className:"table-row-cell"},t.diameter),r.a.createElement("div",{className:"table-row-cell"},t.gravity),r.a.createElement("div",{className:"table-row-cell"},t.orbital_period),r.a.createElement("div",{className:"table-row-cell"},t.surface_water),r.a.createElement("div",{className:"table-row-cell"},t.terrain)))):"")}}]),t}(r.a.PureComponent)),T=function(e){var t=e.list;return r.a.createElement(n.Fragment,null,r.a.createElement("h3",null,"Order By Population:"),t.map(function(e,t){return r.a.createElement(_,{key:t,index:t,details:e})}))},A=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(h.a)(this,Object(p.a)(t).call(this,e))).state={form:{},planets:[],isSearching:!1,searchLimitExceed:!1},a.onKeyUp=a.onKeyUp.bind(Object(S.a)(a)),a.handleChange=a.handleChange.bind(Object(S.a)(a)),a.changeInterval="",a.THRESHOLD=6e4,a.LUKE="Luke Skywalker".toLocaleLowerCase(),a.SEARCH_LIMIT=15,a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"handleChange",value:function(e){var t=e.target,a=t.name,n=t.value;this.setState(function(e,t){return{isSearching:!1,gotResponse:!1,form:Object.assign({},Object(O.a)({},e.form),Object(v.a)({},a,n))}})}},{key:"onKeyUp",value:function(){var e=this;clearInterval(this.changeInterval),this.changeInterval=setInterval(function(){var t=localStorage.getItem("token"),a=+localStorage.getItem("sessionSearchCount")||0,n=t.replace("token-for-user@",""),r=+localStorage.getItem("prevSearchTimestamp")||0,c=0,l=!1;!r&&a<=e.SEARCH_LIMIT?(l=!0,localStorage.setItem("prevSearchTimestamp",Date.now())):(c=Date.now()-r,n.toLowerCase()===e.LUKE?l=!0:n.toLowerCase()!==e.LUKE&&c<=e.THRESHOLD&&a<=e.SEARCH_LIMIT?l=!0:c>e.THRESHOLD&&(l=!0,a=0,localStorage.setItem("sessionSearchCount",a),localStorage.setItem("prevSearchTimestamp",Date.now()))),l?(localStorage.setItem("sessionSearchCount",a+1),e.setState(function(e,t){return{isSearching:!0,searchLimitExceed:!1}}),e.props.onKeyUp(e.state.form).then(function(){e.setState(function(e,t){return{gotResponse:!0}})})):e.setState({searchLimitExceed:!0}),clearInterval(e.changeInterval)},1e3)}},{key:"componentDidUpdate",value:function(){var e=this;this.state.gotResponse&&this.setState(function(t,a){return{isSearching:!1,gotResponse:!1,planets:Object(L.a)(e.props.planets.planets)}})}},{key:"render",value:function(){return r.a.createElement("div",{className:"form-vertical"},r.a.createElement("div",{className:"input-group"},r.a.createElement("label",null,"Search your favourite Star Wars Planet"),r.a.createElement(j,{className:"txt",name:"searchStr",onChange:this.handleChange,onKeyUp:this.onKeyUp,placeholder:"Search..."})),this.state.isSearching?"Searching please wait....":this.state.planets.length?r.a.createElement(T,{list:this.state.planets}):this.state.searchLimitExceed?r.a.createElement("div",null,"Search Limit Exceed"):r.a.createElement("div",null,"No result(s) found."))}}]),t}(r.a.PureComponent),P=Object(o.b)(function(e,t){return console.log(e,t,"from container"),{planets:e.PlanetSearch}},function(e,t){return{onKeyUp:function(t){return e(function(e){var t=new Promise(function(t,a){fetch("https://swapi.co/api/planets/?search=".concat(e.searchStr)).then(function(e){return e.json()}).then(function(e){e.results.length?(e.results=e.results.sort(function(e,t){var a=isNaN(+e.population)?0:+e.population;return(isNaN(+t.population)?0:+t.population)-a}),t(e.results)):t([])})});return function(e,a){return e({type:"PLANET_SEARCH_INITIATED"}),t.then(function(t){e({type:"PLANET_SEARCH_SUCCESS",planets:t})},function(t){e({type:"PLANET_SEARCH_FAILED"})})}}(t))}}})(A),U=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(h.a)(this,Object(p.a)(t).call(this,e))).state={},a.onClick=a.onClick.bind(Object(S.a)(a)),a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"onClick",value:function(){console.log(this.props);var e=this.props,t=(e.match.params,e.history);localStorage.removeItem("token"),localStorage.removeItem("sessionSearchCount"),localStorage.removeItem("prevSearchTimestamp"),t.push("/login")}},{key:"render",value:function(){return r.a.createElement(n.Fragment,null,r.a.createElement("main",null,r.a.createElement("div",{className:"flex-header-row"},r.a.createElement("h3",{className:"login-title"}),r.a.createElement("h3",{className:"login-title"},"Home"),r.a.createElement(y,{className:"btn btn-primary btn-large",onClick:this.onClick},"Logout")),r.a.createElement(P,null)))}}]),t}(r.a.PureComponent),D=[{path:"/",exact:!0,render:function(e){return localStorage.getItem("token")?r.a.createElement(U,e):r.a.createElement(b.a,{to:{pathname:"/login",state:{from:e.location}}})}},{path:"/home",exact:!0,render:function(e){return localStorage.getItem("token")?r.a.createElement(U,e):r.a.createElement(b.a,{to:{pathname:"/login",state:{from:e.location}}})}},{path:"/login",exact:!0,render:function(e){return localStorage.getItem("token")?r.a.createElement(b.a,{to:{pathname:"/",state:{from:e.location}}}):r.a.createElement(w,null)}}],R=function(e){function t(){return Object(u.a)(this,t),Object(h.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement(g.a,{history:E},r.a.createElement(b.d,null,D.map(function(e,t){return r.a.createElement(b.b,Object.assign({key:t},e))}),r.a.createElement(b.b,{render:function(){return r.a.createElement(H,null)}})))}}]),t}(r.a.PureComponent),H=function(){return r.a.createElement("h1",null,"Not Found")},x={isVerifying:!1,isLoggedIn:!1,isLogInFailed:!1},F={isSearching:!1,planets:[]},K=Object(i.c)({todos:function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0];return{list:[]}},counter:function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0];return{counter:0}},login:function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0];var e=arguments.length>1?arguments[1]:void 0;switch(console.log(e,"inreducer"),e.type){case"USER_LOG_IN_INITITATED":return Object.assign(Object(O.a)({},x),{isVerifying:!0,isLogInFailed:!1});case"USER_LOG_IN_SUCCESS":return Object.assign({},Object(O.a)({},x),{isLoggedIn:!0});case"USER_LOG_IN_FAILED":return Object.assign({},Object(O.a)({},x),{isLogInFailed:!0});default:return x}},PlanetSearch:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"PLANET_SEARCH_INITIATED":return Object.assign(Object(O.a)({},e),{isSearching:!0});case"PLANET_SEARCH_SUCCESS":return Object.assign(Object(O.a)({},e),{isSearching:!1,planets:Object(L.a)(t.planets)});case"PLANET_SEARCH_FAILED":return Object.assign(Object(O.a)({},e),{isSearching:!1});default:return F}}}),G=Object(i.d)(K,Object(i.a)(s.a));(function(){l.a.render(r.a.createElement(o.a,{store:G},r.a.createElement(R,null)),document.getElementById("root"))})(),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[34,1,2]]]);
//# sourceMappingURL=main.7a3b570e.chunk.js.map