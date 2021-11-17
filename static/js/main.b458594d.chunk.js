(this.webpackJsonpmeet=this.webpackJsonpmeet||[]).push([[0],{200:function(e,t,n){},201:function(e,t,n){},356:function(e,t,n){},357:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n(65),o=n.n(r),s=(n(200),n(23)),i=n(30),c=n(24),u=n(25),l=(n(201),n(6)),h=function(e){Object(c.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={event:{},showHideDetails:!1},e.handleShowHideButton=function(){!0===e.state.showHideDetails?e.setState({showHideDetails:!1}):e.setState({showHideDetails:!0})},e}return Object(i.a)(n,[{key:"render",value:function(){var e=this,t=this.props.event;return Object(l.jsxs)("div",{className:"event",children:[Object(l.jsx)("h1",{className:"name",children:t.summary}),Object(l.jsx)("p",{children:t.start.dateTime}),Object(l.jsx)("p",{className:"locations",children:t.location}),this.state.showHideDetails&&Object(l.jsxs)("div",{className:"event-details",children:[Object(l.jsx)("h2",{children:"About event:"}),Object(l.jsx)("a",{href:t.htmlLink,children:"See Details on Google Calendar"}),Object(l.jsx)("p",{children:t.description})]}),Object(l.jsx)("button",{className:"details-btn",onClick:function(){return e.handleShowHideButton()},children:this.state.showHideDetails?"Hide Details":"Show Details"})]})}}]),n}(a.Component),d=function(e){Object(c.a)(n,e);var t=Object(u.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){var e=this.props.events;return Object(l.jsx)("ul",{className:"EventList",children:e.map((function(e){return Object(l.jsx)("li",{children:Object(l.jsx)(h,{event:e})},e.id)}))})}}]),n}(a.Component),f=function(e){Object(c.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).getStyle=function(){return{color:a.color,fontSize:"13px"}},a.color=null,a}return Object(i.a)(n,[{key:"render",value:function(){return Object(l.jsx)("div",{className:"Alert",children:Object(l.jsx)("p",{className:"alert-message",style:this.getStyle(),children:this.props.text})})}}]),n}(a.Component),p=function(e){Object(c.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).color="blue",a}return n}(f),v=function(e){Object(c.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).color="red",a}return n}(f),m=function(e){Object(c.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).color="orange",a}return n}(f),b=function(e){Object(c.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={query:"",suggestions:[],showSuggestions:!1,infoText:""},e.handleInputChanged=function(t){var n=t.target.value;e.setState({showSuggestions:!0});var a=e.props.locations.filter((function(e){return e.toUpperCase().indexOf(n.toUpperCase())>-1}));if(""===n&&e.setState({suggestions:[],query:"",showSuggestions:!1}),0!==a.length)return e.setState({query:n,suggestions:a,infoText:""});e.setState({query:n,infoText:"We cannot find the city you are looking for. Please try another city",suggestions:[]})},e.handleItemClicked=function(t){e.setState({query:t,showSuggestions:!1,infoText:""}),e.props.updateEvents(t,0)},e}return Object(i.a)(n,[{key:"render",value:function(){var e=this;return Object(l.jsxs)("div",{className:"CitySearch",children:[Object(l.jsx)("label",{htmlFor:"CitySearch",children:"Event Location"}),Object(l.jsx)("input",{type:"text",className:"city",value:this.state.query,placeholder:"Enter Event Location",onChange:this.handleInputChanged,onFocus:function(){e.setState({showSuggestions:!0})}}),this.state.suggestions.length>=1?Object(l.jsxs)("ul",{className:"suggestions",style:this.state.showSuggestions?{}:{display:"none"},children:[this.state.suggestions.map((function(t){return Object(l.jsx)("li",{onClick:function(){return e.handleItemClicked(t)},children:t},t)})),Object(l.jsx)("li",{onClick:function(){return e.handleItemClicked("all")},children:Object(l.jsx)("b",{children:"See all cities"})},"all")]}):Object(l.jsx)(p,{text:this.state.infoText})]})}}]),n}(a.Component),j=function(e){Object(c.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={numberOfEvents:12,errorText:""},e.handleInputChanged=function(t){var n=t.target.value;return n<1||n>32?e.setState({errorText:"Please choose a number between 1 and 32",numberOfEvents:""}):(e.setState({numberOfEvents:n,errorText:""}),void e.props.updateEvents("",n))},e}return Object(i.a)(n,[{key:"render",value:function(){return Object(l.jsxs)("div",{className:"NumberOfEvents",children:[Object(l.jsx)("label",{htmlFor:"numberOfEvent",children:"Number of Events"}),Object(l.jsx)("input",{type:"number",className:"numberInput",placeholder:"Enter Number of Events",value:this.state.numberOfEvents,onChange:this.handleInputChanged}),Object(l.jsx)(v,{text:this.state.errorText})]})}}]),n}(a.Component),g=n(18),w=n(358),O=n(365),x=n(180),y=n(93),k=n(73),S=function(e){var t=e.events,n=Object(a.useState)([]),r=Object(g.a)(n,2),o=r[0],s=r[1],i=["React","JavaScript","Node","jQuery","AngularJS","Angular","Node.js"],c=["#f2a365","#BBE1FA","#903749","#219897","#616f39","#3B8EFF","#FF891A"];return Object(a.useEffect)((function(){s((function(){return function(){var e=i.map((function(e){var n=t.filter((function(t){return t.summary.split(" ").includes(e)})).length;return{name:e,value:n}}));return e.filter((function(e){return e.value}))}()}))}),[t]),Object(l.jsx)(w.a,{height:400,children:Object(l.jsxs)(O.a,{width:400,height:400,children:[Object(l.jsx)(x.a,{data:o,cx:200,cy:200,labelLine:!1,outerRadius:80,innerRadius:10,fill:"#8884d8",dataKey:"value",label:function(e){var t=e.percent;return"".concat((100*t).toFixed(0),"%")},children:o.map((function(e,t){return Object(l.jsx)(y.a,{fill:c[t]},"cell-".concat(t))}))}),Object(l.jsx)(k.a,{align:"center",height:45})]})})},T=n(189),E=n(33),C=n.n(E),N=n(76),Z=[{kind:"calendar#event",etag:'"3181161784712000"',id:"4eahs9ghkhrvkld72hogu9ph3e_20200519T140000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA1MTlUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:17:46.000Z",updated:"2020-05-27T12:01:32.356Z",summary:"Learn JavaScript",description:"Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",location:"London, UK",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-19T17:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"4eahs9ghkhrvkld72hogu9ph3e",originalStartTime:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"4eahs9ghkhrvkld72hogu9ph3e@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"},{kind:"calendar#event",etag:'"3181159875584000"',id:"3qtd6uscq4tsi6gc7nmmtpqlct_20200520T120000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=M3F0ZDZ1c2NxNHRzaTZnYzdubW10cHFsY3RfMjAyMDA1MjBUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:14:30.000Z",updated:"2020-05-27T11:45:37.792Z",summary:"React is Fun",description:"Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ",location:"Berlin, Germany",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-20T15:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"3qtd6uscq4tsi6gc7nmmtpqlct",originalStartTime:{dateTime:"2020-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"3qtd6uscq4tsi6gc7nmmtpqlct@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"}],A=n(120),D=n.n(A),I=n(77),W=n.n(I),B=function(){if(window.history.pushState&&window.location.pathname){var e=window.location.protocol+"//"+window.location.host+window.location.pathname;window.history.pushState("","",e)}else e=window.location.protocol+"//"+window.location.host,window.history.pushState("","",e)},L=function(){var e=Object(N.a)(C.a.mark((function e(t){var n;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=".concat(t)).then((function(e){return e.json()})).catch((function(e){return e.json()}));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),F=function(e){var t=e.map((function(e){return e.location}));return Object(T.a)(new Set(t))},q=function(){var e=Object(N.a)(C.a.mark((function e(){var t,n,a,r,o;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(W.a.start(),!window.location.href.startsWith("http://localhost")){e.next=4;break}return W.a.done(),e.abrupt("return",Z);case 4:if(navigator.onLine){e.next=8;break}return t=localStorage.getItem("lastEvents"),W.a.done(),e.abrupt("return",t?JSON.parse(t).events:[]);case 8:return e.next=10,J();case 10:if(!(n=e.sent)){e.next=20;break}return B(),a="https://kd2pljzma0.execute-api.eu-central-1.amazonaws.com/dev/api/get-events/".concat(n),e.next=16,D.a.get(a);case 16:return(r=e.sent).data&&(o=F(r.data.events),localStorage.setItem("lastEvents",JSON.stringify(r.data)),localStorage.setItem("locations",JSON.stringify(o))),W.a.done(),e.abrupt("return",r.data.events);case 20:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),J=function(){var e=Object(N.a)(C.a.mark((function e(){var t,n,a,r,o,s;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=localStorage.getItem("access_token"),e.t0=t,!e.t0){e.next=6;break}return e.next=5,L(t);case 5:e.t0=e.sent;case 6:if(n=e.t0,t&&!n.error){e.next=21;break}return e.next=10,localStorage.removeItem("access_token");case 10:return a=new URLSearchParams(window.location.search),e.next=13,a.get("code");case 13:if(r=e.sent){e.next=20;break}return e.next=17,D.a.get("https://kd2pljzma0.execute-api.eu-central-1.amazonaws.com/dev/api/get-auth-url");case 17:return o=e.sent,s=o.data.authUrl,e.abrupt("return",window.location.href=s);case 20:return e.abrupt("return",r&&H(r));case 21:return e.abrupt("return",t);case 22:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),H=function(){var e=Object(N.a)(C.a.mark((function e(t){var n,a,r;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=encodeURIComponent(t),e.next=3,fetch("https://kd2pljzma0.execute-api.eu-central-1.amazonaws.com/dev/api/token/".concat(n)).then((function(e){return e.json()})).catch((function(e){return e}));case 3:return a=e.sent,(r=a.access_token)&&localStorage.setItem("access_token",r),e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),M=(n(356),n(362)),R=n(363),U=n(185),z=n(186),P=n(78),_=n(190),Y=function(e){Object(c.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={events:[],locations:[],numberOfEvents:10,warningText:""},e.updateEvents=function(t,n){var a;q().then((function(r){"all"===t&&0===n?a=r:"all"!==t&&0===n?a=r.filter((function(e){return e.location===t})):""===t&&n>0?a=r.slice(0,n):""===t&&""===n&&(a=r),e.setState({events:a,numberOfEvents:n})}))},e.getData=function(){var t=e.state,n=t.locations,a=t.events;return n.map((function(e){var t=a.filter((function(t){return t.location===e})).length;return{city:e.split(", ").shift(),number:t}}))},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.mounted=!0,navigator.onLine?this.setState({warningText:""}):this.setState({warningText:"Cached data is being displayed."}),q().then((function(t){e.mounted&&e.setState({events:t.slice(0,e.state.numberOfEvents),locations:F(t)})}))}},{key:"componentWillUnmount",value:function(){this.mounted=!1}},{key:"render",value:function(){return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)("h1",{className:"app-name",children:"Meet App"}),Object(l.jsx)(b,{locations:this.state.locations,updateEvents:this.updateEvents,numberOfEvents:this.state.numberOfEvents}),Object(l.jsx)(j,{numberOfEvents:this.state.numberOfEvents,updateEvents:this.updateEvents}),Object(l.jsx)(m,{text:this.state.warningText}),Object(l.jsx)("h4",{children:"Events in each city"}),Object(l.jsxs)("div",{className:"data-vis-wrapper",children:[Object(l.jsx)(S,{events:this.state.events}),Object(l.jsx)(w.a,{height:400,children:Object(l.jsxs)(M.a,{margin:{top:20,right:20,bottom:20,left:20},children:[Object(l.jsx)(R.a,{}),Object(l.jsx)(U.a,{type:"category",dataKey:"city",name:"City"}),Object(l.jsx)(z.a,{allowDecimals:!1,type:"number",dataKey:"number",name:"Number of events"}),Object(l.jsx)(P.a,{cursor:{strokeDasharray:"3 3"}}),Object(l.jsx)(_.a,{data:this.getData(),fill:"#8884d8"})]})})]}),Object(l.jsx)(d,{events:this.state.events})]})}}]),n}(a.Component),G=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function K(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var V=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,366)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,o=t.getLCP,s=t.getTTFB;n(e),a(e),r(e),o(e),s(e)}))},X=n(187);o.a.render(Object(l.jsx)(Y,{}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/meet",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/meet","/service-worker.js");G?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):K(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):K(t,e)}))}}(),X.config("bbdcbaeb20d449fab951d3c47aaed6ea").install(),V()}},[[357,1,2]]]);
//# sourceMappingURL=main.b458594d.chunk.js.map