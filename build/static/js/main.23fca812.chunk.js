(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1010:function(e,t){},1011:function(e,t){},1059:function(e,t){},1061:function(e,t){},1084:function(e,t){},1178:function(e,t,n){},1179:function(e,t,n){},1191:function(e,t,n){"use strict";n.r(t);var a=n(1),o=n.n(a),r=n(156),c=n.n(r),i=(n(529),n(530),n(68)),l=(n(852),n(199)),s=n.n(l),u=n(417),d=n(418),m=n(41),f=n.n(m),v=n(204),p=n(118),b=n.n(p),h=n(117),g=n.n(h),j=n(196),y=n.n(j),E=n(421),w=n.n(E),O=(n(866),n(1192)),C=n(195),N=n.n(C),k={isLoading:!1,size:24,className:"",children:o.a.createElement(o.a.Fragment,null)},P=function(e){var t=e.isLoading,n=e.size,a=e.className,r=e.children;return t?o.a.createElement(N.a,{size:n,thickness:4.8,className:a}):r};P.defaultProps=k;var Q=P,R=n(420),S=n.n(R),I=function(e){var t=e.onClearQuery;return o.a.createElement(g.a,{"aria-label":"Clear",onClick:t},o.a.createElement(S.a,null))};I.defaultProps={onClearQuery:O.a};var x=I,L={label:"",query:"",isLoading:!1,onQueryChange:O.a,onClearQuery:O.a,ClearButton:x,SearchButton:function(){return o.a.createElement(g.a,{"aria-label":"Search"},o.a.createElement(w.a,null))},Input:y.a},B=function(e){var t=e.label,n=e.query,a=e.isLoading,r=e.onQueryChange,c=e.onClearQuery,i=e.ClearButton,l=e.SearchButton,s=e.Input;return o.a.createElement(b.a,{className:"root",elevation:1},o.a.createElement(s,{autoComplete:"postal-code",className:"input",autoFocus:!0,placeholder:t,value:n,onChange:r}),o.a.createElement(Q,{isLoading:a,className:"loading"},n?o.a.createElement(i,{onClearQuery:c}):o.a.createElement(l,null)))};B.defaultProps=L;var M=B,U=n(122),W=n(422),_=n(1196),A=function(e){var t=e.debounceInMs;return function(e){var n=function(n){var r=n.onQueryChange,c=Object(U.a)(n,["onQueryChange"]),l=Object(a.useState)(""),s=Object(i.a)(l,2),u=s[0],d=s[1],m=Object(W.useDebouncedCallback)(r,t),f=Object(i.a)(m,1)[0],v=Object(_.a)([d,f]),p=Object(a.useCallback)(function(){return v("")},[]),b=Object(a.useCallback)(function(e){return v(e.target.value)},[]);return o.a.createElement(e,Object.assign({query:u,onQueryChange:b,onClearQuery:p},c))};return n.defaultProps={onQueryChange:O.a},n}}({debounceInMs:300})(M),F=n(1197),T=n(423),q=n.n(T),G=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return q()({url:"".concat("https://address2contact.herokuapp.com","/address2councillor"),json:!0,qs:{address:e}})},Y=function(e){var t=e.address,n=void 0===t?"":t,o=e.coords,r=void 0===o?{latitude:0,longitude:0}:o,c=Object(a.useState)(void 0),l=Object(i.a)(c,2),s=l[0],u=l[1],d=Object(a.useState)(void 0),m=Object(i.a)(d,2),f=m[0],v=m[1],p=Object(F.a)(u,function(){return v(n)});return Object(a.useEffect)(function(){var e=r&&!n?function(e){var t=e.latitude,n=void 0===t?0:t,a=e.longitude;return G("geo: lng: ".concat(void 0===a?0:a,", lat: ").concat(n))}(r):G(n);return e.then(p),function(){return e.abort()}},[n,r]),[s,f]},D=n(267),Z=n(198),z=n.n(Z),H=n(197),J=n.n(H),$=n(102),K=n.n($),V=n(429),X=n.n(V),ee=n(121),te=n.n(ee),ne=n(1194),ae=n(1195),oe=(n(1178),n(424)),re=n(19),ce=o.a.createElement("a",{href:"https://twitter.com/search?q=YEGCoreZone",target:"_blank",rel:"noopener noreferrer"},"#YEGCoreZone"),ie={role:re.string,lastName:re.string,ward:re.string},le=function(e){var t=e.role,n=e.lastName,a=e.ward;return o.a.createElement(o.a.Fragment,null,"Dear ".concat(t," ").concat(n,",\n\nI'm writing in support of the")," ",ce," ","proposal.\n\nThank you,\nResident of ".concat(a||"Edmonton"))};le.propTypes=ie,le.defaultProps={role:"Mayor",lastName:"Iveson",ward:""};var se=Object(_.a)([function(e){var t=e.role,n=void 0===t?"Mayor":t,a=e.lastName,o=void 0===a?"Iveson":a,r=e.ward,c=void 0===r?"":r;return"Dear ".concat(n," ").concat(o,",\n\nI'm writing in support of the #YEGCoreZone proposal.\n\nThank you,\nResident of ").concat(c||"Edmonton")},le,Object(O.a)("Support letter for #YEGCoreZone")]),ue=n(207),de=n(1193),me=n(157),fe=n(430),ve=(n(1179),{src:"",alt:"",left:o.a.createElement(o.a.Fragment,null)}),pe=function(e){var t=e.src,n=e.alt,a=e.left;return t?o.a.createElement("img",{className:"left-icon button-img",width:24,height:24,src:t,alt:n}):a};pe.defaultProps=ve;var be=pe,he={name:"",src:"",href:"",left:o.a.createElement(o.a.Fragment,null)},ge=function(e){var t=e.name,n=e.src,a=e.href,r=e.left;return o.a.createElement(K.a,{color:"primary",href:a,target:"_blank",rel:"noopener noreferrer"},o.a.createElement(be,{src:n,alt:t,left:r}),o.a.createElement("span",null,t))};ge.defaultProps=he;var je=ge,ye=n(425),Ee={name:"Gmail",src:n.n(ye).a,hrefResolver:function(e){var t=e.email,n=void 0===t?"":t,a=e.cc,o=void 0===a?"":a,r=e.subject,c=void 0===r?"":r,i=e.body,l=void 0===i?"":i;return"https://mail.google.com/mail/?view=cm&fs=1&to=".concat(n,"&cc=").concat(o,"&su=").concat(c,"&body=").concat(l)}},we=n(426),Oe={name:"Outlook",src:n.n(we).a,hrefResolver:function(e){var t=e.email,n=void 0===t?"":t,a=e.cc,o=void 0===a?"":a,r=e.subject,c=void 0===r?"":r,i=e.body,l=void 0===i?"":i;return"https://outlook.live.com/?path=/mail/action/compose&to=".concat(n,"&cc=").concat(o,"&subject=").concat(c,"&body=").concat(l)}},Ce=n(427),Ne={name:"Yahoo",src:n.n(Ce).a,hrefResolver:function(e){var t=e.email,n=void 0===t?"":t,a=e.cc,o=void 0===a?"":a,r=e.subject,c=void 0===r?"":r,i=e.body,l=void 0===i?"":i;return"https://compose.mail.yahoo.com/?to=".concat(n,"&cc=").concat(o,"&subject=").concat(c,"&body=").concat(l)}},ke=n(428),Pe=n.n(ke),Qe={name:"Mail app",left:o.a.createElement(Pe.a,{className:"left-icon"}),hrefResolver:function(e){var t=e.email,n=void 0===t?"":t,a=e.cc,o=void 0===a?"":a,r=e.subject,c=void 0===r?"":r,i=e.body,l=void 0===i?"":i;return"mailto:".concat(n,"?subject=").concat(c,"&body=").concat(l,"&cc=").concat(o)}},Re=[Ee,Oe,Ne],Se=function(e){var t=e.subject,n=void 0===t?"":t,a=e.body,o=void 0===a?"":a,r=Object(U.a)(e,["subject","body"]);return Object(ue.a)({subject:encodeURIComponent(n),body:encodeURIComponent(o)},r)},Ie={email:"",cc:"",subject:"",body:""},xe=Object(de.a)(Object(me.a)(Ie)),Le=Object(F.a)(xe,function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ie,t=function(t){var n=t.name,a=t.hrefResolver,r=Object(U.a)(t,["name","hrefResolver"]);return o.a.createElement(je,Object.assign({key:n,name:n,href:Object(F.a)(Se,a)(e)},r))};return t.defaultProps={name:""},t}),Be=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Object(ue.a)({providers:Re},Ie);return Object(fe.a)(Le(e),e.providers)},Me=function(e){var t=e.firstName,n=e.lastName,a=e.ward,r=e.role,c=e.phone,l=e.email,s=e.photoUrl,u="".concat(t," ").concat(n),d=Object(ne.a)(Object(ae.a)("Councillor"),function(e){return"".concat(e," \u2013 ").concat(a)})(r),m=Object(ne.a)(Object(ae.a)("City"),Object(O.a)("Edmonton")),f=se({role:r,lastName:n,ward:m(a)}),p=Object(i.a)(f,3),h=p[0],g=p[1],j=p[2],y=oe.isMobile?[Qe].concat(Object(D.a)(Re)):[].concat(Object(D.a)(Re),[Qe]);return o.a.createElement(b.a,null,o.a.createElement("div",{className:"contact"},o.a.createElement("img",{className:"image",src:s,alt:u}),o.a.createElement(J.a,null,o.a.createElement(te.a,{variant:"h5",component:"h2"},u),o.a.createElement(te.a,{color:"textSecondary",paragraph:!0},d),o.a.createElement(te.a,{component:"pre",className:"template"},g))),o.a.createElement(v.a,null),o.a.createElement(z.a,null,o.a.createElement("div",{className:"email-array"},o.a.createElement(Be,{email:l,subject:j,body:h,cc:"council@edmonton.ca",providers:y}),o.a.createElement(K.a,{color:"primary",href:"tel:".concat(c)},o.a.createElement(X.a,{className:"left-icon"}),"Call"))))};Me.defaultProps={firstName:"",lastName:"",ward:"",role:"",phone:"",email:"",photoUrl:"https://www.edmonton.ca/city_government/documents/Mayor-Headshot_800x494_rdax_500x309.jpg"};var Ue=Me,We={positionOptions:{enableHighAccuracy:!1,timeout:5e3},userDecisionTimeout:5e3,geolocationProvider:"undefined"!==typeof navigator&&navigator.geolocation},_e=function(e){var t=e.coords,n=Object(a.useState)(""),r=Object(i.a)(n,2),c=r[0],l=r[1],u=Y({address:c,coords:t}),m=Object(i.a)(u,2),p=m[0],b=m[1],h=d.parse(window.location.search).iframe_pls,g=f()("app",{"iframe-pls":h});return o.a.createElement("div",{className:g},o.a.createElement(s.a,null),o.a.createElement(A,{label:"Find your councillor by postal code/address",onQueryChange:l,isLoading:c!==b}),o.a.createElement(v.b,{gutterBottom:!0}),p&&o.a.createElement(Ue,p))};_e.defaultProps={coords:void 0};var Ae=Object(u.geolocated)(We)(_e),Fe=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Te(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}c.a.render(o.a.createElement(Ae,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/email-contact",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/email-contact","/service-worker.js");Fe?(function(e,t){fetch(e).then(function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):Te(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):Te(t,e)})}}()},425:function(e,t,n){e.exports=n.p+"static/media/gmail.2db0d88c.ico"},426:function(e,t,n){e.exports=n.p+"static/media/outlook.759fade9.ico"},427:function(e,t,n){e.exports=n.p+"static/media/yahoo.9796ed78.ico"},524:function(e,t,n){e.exports=n(1191)},529:function(e,t,n){},852:function(e,t,n){},866:function(e,t,n){},977:function(e,t){},979:function(e,t){}},[[524,1,2]]]);
//# sourceMappingURL=main.23fca812.chunk.js.map