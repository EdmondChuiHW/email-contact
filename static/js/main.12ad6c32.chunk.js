(this["webpackJsonpemail-contact"]=this["webpackJsonpemail-contact"]||[]).push([[0],{1023:function(e,n){},1117:function(e,n,t){},1118:function(e,n,t){},1130:function(e,n,t){"use strict";t.r(n);t(517),t(519),t(520),t(521),t(522),t(523),t(524),t(525),t(526),t(527),t(528),t(529),t(530),t(531),t(532),t(533),t(534),t(535),t(536),t(537),t(538),t(539),t(540),t(541),t(542),t(543),t(544),t(154),t(545),t(546),t(547),t(548),t(549),t(550),t(551),t(552),t(553),t(554),t(555),t(556),t(557),t(558),t(559),t(560),t(561),t(562),t(564),t(565),t(567),t(568),t(214),t(570),t(571),t(572),t(573),t(574),t(575),t(576),t(577),t(578),t(579),t(580),t(581),t(582),t(583),t(584),t(585),t(586),t(587),t(588),t(589),t(590),t(591),t(592),t(593),t(594),t(595),t(596),t(597),t(598),t(599),t(600),t(601),t(602),t(603),t(604),t(605),t(606),t(607),t(608),t(609),t(610),t(611),t(612),t(613),t(614),t(615),t(616),t(617),t(618),t(619),t(621),t(622),t(623),t(624),t(625),t(626),t(627),t(629),t(630),t(631),t(632),t(633),t(634),t(635),t(636),t(637),t(638),t(639),t(640),t(641),t(642),t(300),t(643),t(644),t(645),t(646),t(301),t(647),t(648),t(649),t(650),t(651),t(652),t(653),t(654),t(655),t(656),t(657),t(658),t(659),t(660),t(661),t(662),t(663),t(664),t(665),t(666),t(667),t(668),t(669),t(670),t(671),t(672),t(673),t(674),t(675),t(676),t(677),t(678),t(679),t(680),t(681),t(682),t(683),t(684),t(685),t(686),t(687),t(688),t(689),t(690),t(691),t(692),t(693),t(694),t(695),t(696),t(225),t(697),t(698),t(699),t(700),t(701),t(702),t(703),t(704),t(705),t(706),t(707),t(708),t(709),t(710),t(711),t(713),t(714),t(715),t(716),t(717),t(718),t(719),t(720),t(721),t(722),t(723),t(724),t(725),t(726),t(727),t(728),t(729),t(730),t(731),t(732),t(733),t(734),t(735),t(736),t(737),t(738),t(739),t(740),t(741),t(742),t(743),t(744),t(745),t(746),t(747),t(748),t(749),t(750),t(751),t(752),t(753),t(754),t(755),t(756),t(757),t(758),t(759),t(760),t(761),t(762),t(763),t(764),t(765),t(766),t(767),t(768),t(769),t(772),t(773),t(774),t(775),t(776),t(777),t(778),t(779),t(780),t(781),t(782),t(783),t(784),t(785),t(786),t(787),t(789),t(312);var a=t(1),o=t.n(a),c=t(149),r=t.n(c),i=(t(794),t(62)),l=(t(795),t(193)),s=t.n(l),u=t(409),d=t(410),m=t(42),f=t.n(m),v=t(198),p=t(108),b=t.n(p),h=t(107),g=t.n(h),y=t(190),j=t.n(y),E=t(413),O=t.n(E),w=(t(810),t(1131)),C=t(189),k=t.n(C),N={isLoading:!1,size:24,className:"",children:o.a.createElement(o.a.Fragment,null)},I=function(e){var n=e.isLoading,t=e.size,a=e.className,c=e.children;return n?o.a.createElement(k.a,{size:t,thickness:4.8,className:a}):c};I.defaultProps=N;var P=I,S=t(412),Q=t.n(S),F=function(e){var n=e.onClearQuery;return o.a.createElement(g.a,{"aria-label":"Clear",onClick:n},o.a.createElement(Q.a,null))};F.defaultProps={onClearQuery:w.a};var R=F,x={label:"",query:"",isLoading:!1,autoFocus:!0,onQueryChange:w.a,onClearQuery:w.a,ClearButton:R,SearchButton:function(){return o.a.createElement(g.a,{"aria-label":"Search"},o.a.createElement(O.a,null))},Input:j.a},A=function(e){var n=e.label,t=e.query,a=e.isLoading,c=e.autoFocus,r=e.onQueryChange,i=e.onClearQuery,l=e.ClearButton,s=e.SearchButton,u=e.Input;return o.a.createElement(b.a,{className:"root",elevation:1},o.a.createElement(u,{autoComplete:"postal-code",className:"input",autoFocus:c,placeholder:n,value:t,onChange:r}),o.a.createElement(P,{isLoading:a,className:"loading"},t?o.a.createElement(l,{onClearQuery:i}):o.a.createElement(s,null)))};A.defaultProps=x;var L=A,M=t(112),T=t(414),_=t(1135),B=function(e){var n=e.debounceInMs;return function(e){var t=function(t){var c=t.onQueryChange,r=Object(M.a)(t,["onQueryChange"]),l=Object(a.useState)(""),s=Object(i.a)(l,2),u=s[0],d=s[1],m=Object(T.useDebouncedCallback)(c,n),f=Object(i.a)(m,1)[0],v=Object(_.a)([d,f]),p=Object(a.useCallback)((function(){return v("")}),[v]),b=Object(a.useCallback)((function(e){return v(e.target.value)}),[v]);return o.a.createElement(e,Object.assign({query:u,onQueryChange:b,onClearQuery:p},r))};return t.defaultProps={onQueryChange:w.a},t}}({debounceInMs:300})(L),U=t(1136),W=t(415),q=t.n(W),z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return q()({url:"".concat("https://address2contact.herokuapp.com","/address2councillor"),json:!0,qs:{address:e}})},G=function(e){var n=e.address,t=void 0===n?"":n,o=e.coords,c=void 0===o?{latitude:0,longitude:0}:o,r=Object(a.useState)(void 0),l=Object(i.a)(r,2),s=l[0],u=l[1],d=Object(a.useState)(void 0),m=Object(i.a)(d,2),f=m[0],v=m[1],p=Object(U.a)(u,(function(){return v(t)}));return Object(a.useEffect)((function(){var e=c&&!t?function(e){var n=e.latitude,t=void 0===n?0:n,a=e.longitude;return z("geo: lng: ".concat(void 0===a?0:a,", lat: ").concat(t))}(c):z(t);return e.then(p),function(){return e.abort()}}),[t,c,p]),[s,f]},J=t(266),Y=t(192),D=t.n(Y),H=t(191),Z=t.n(H),$=t(95),K=t.n($),V=t(421),X=t.n(V),ee=t(111),ne=t.n(ee),te=t(1133),ae=t(1134),oe=(t(1117),t(416)),ce=Object(_.a)([function(e){var n=e.role,t=void 0===n?"Mayor":n,a=e.lastName,o=void 0===a?"Iveson":a,c=e.ward,r=void 0===c?"":c;return"Hello ".concat(t," ").concat(o,",\n\nI want safe and liveable streets. That means 30 km/hr in residential areas. The #YEGCoreZone is the only option to move Edmonton in this direction.\n\nPlease vote to approve the #YEGCoreZone on February 26. \n\nThank you,\nConstituent from ").concat(r||"Edmonton")},Object(w.a)("Support letter for #YEGCoreZone")]),re=Object(_.a)([function(e){var n=e.role,t=void 0===n?"Mayor":n,a=e.lastName,o=void 0===a?"Iveson":a,c=e.ward,r=void 0===c?"":c;return"Dear ".concat(t," ").concat(o,",\n\nAs one of your constituents, I would like to register my concern on the issue of parking minimums that is coming to council on January 28.\n\nParking minimums are an unnecessary intrusion on businesses and households. They incentivize car use, force our city to sprawl, and make land unproductive, all factors that contribute to climate change. \n\nI expect Edmonton to be a leader in acting to mitigate the climate emergency.\n\n=====================\nPlease vote for Full Implementation of Open Parking on January 28.\n=====================\n\nSincerely,\nConstituent from ").concat(r||"Edmonton")},Object(w.a)("I Support Full Implementation of Open Parking")]),ie=t(201),le=t(1132),se=t(150),ue=t(422),de=(t(1118),{src:"",alt:"",left:o.a.createElement(o.a.Fragment,null)}),me=function(e){var n=e.src,t=e.alt,a=e.left;return n?o.a.createElement("img",{className:"left-icon button-img",width:24,height:24,src:n,alt:t}):a};me.defaultProps=de;var fe=me,ve={name:"",src:"",href:"",left:o.a.createElement(o.a.Fragment,null)},pe=function(e){var n=e.name,t=e.src,a=e.href,c=e.left;return o.a.createElement(K.a,{color:"primary",href:a,target:"_blank",rel:"noopener noreferrer"},o.a.createElement(fe,{src:t,alt:n,left:c}),o.a.createElement("span",null,n))};pe.defaultProps=ve;var be=pe,he=t(417),ge={name:"Gmail",src:t.n(he).a,hrefResolver:function(e){var n=e.email,t=void 0===n?"":n,a=e.cc,o=void 0===a?"":a,c=e.subject,r=void 0===c?"":c,i=e.body,l=void 0===i?"":i;return("https://mail.google.com/mail/?view=cm&fs=1&to=".concat(t,"&cc=").concat(o,"&su=").concat(r,"&body=").concat(l))}},ye=t(418),je={name:"Outlook",src:t.n(ye).a,hrefResolver:function(e){var n=e.email,t=void 0===n?"":n,a=e.cc,o=void 0===a?"":a,c=e.subject,r=void 0===c?"":c,i=e.body,l=void 0===i?"":i;return("https://outlook.live.com/?path=/mail/action/compose&to=".concat(t,"&cc=").concat(o,"&subject=").concat(r,"&body=").concat(l))}},Ee=t(419),Oe={name:"Yahoo",src:t.n(Ee).a,hrefResolver:function(e){var n=e.email,t=void 0===n?"":n,a=e.cc,o=void 0===a?"":a,c=e.subject,r=void 0===c?"":c,i=e.body,l=void 0===i?"":i;return("https://compose.mail.yahoo.com/?to=".concat(t,"&cc=").concat(o,"&subject=").concat(r,"&body=").concat(l))}},we=t(420),Ce=t.n(we),ke={name:"Mail app",left:o.a.createElement(Ce.a,{className:"left-icon"}),hrefResolver:function(e){var n=e.email,t=void 0===n?"":n,a=e.cc,o=void 0===a?"":a,c=e.subject,r=void 0===c?"":c,i=e.body,l=void 0===i?"":i;return"mailto:".concat(t,"?subject=").concat(r,"&body=").concat(l,"&cc=").concat(o)}},Ne=[ge,je,Oe],Ie=function(e){var n=e.subject,t=void 0===n?"":n,a=e.body,o=void 0===a?"":a,c=Object(M.a)(e,["subject","body"]);return Object(ie.a)({subject:encodeURIComponent(t),body:encodeURIComponent(o)},c)},Pe={email:"",cc:"",subject:"",body:""},Se=Object(le.a)(Object(se.a)(Pe)),Qe=Object(U.a)(Se,(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Pe,n=function(n){var t=n.name,a=n.hrefResolver,c=Object(M.a)(n,["name","hrefResolver"]);return o.a.createElement(be,Object.assign({key:t,name:t,href:Object(U.a)(Ie,a)(e)},c))};return n.defaultProps={name:""},n})),Fe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Object(ie.a)({providers:Ne},Pe);return Object(ue.a)(Qe(e),e.providers)};var Re=function(e){var n=e.firstName,t=e.lastName,a=e.ward,c=e.role,r=e.phone,l=e.email,s=e.photoUrl,u=e.campaignId,d="".concat(n," ").concat(t),m=Object(te.a)(Object(ae.a)("Councillor"),(function(e){return"".concat(e," \u2013 ").concat(a)}))(c),f=Object(te.a)(Object(ae.a)("City"),Object(w.a)("Edmonton")),p=function(e){switch(e){case"open_parking":return re;default:return ce}}(u)({role:c,lastName:t,ward:f(a)}),h=Object(i.a)(p,2),g=h[0],y=h[1],j=oe.isMobile?[ke].concat(Object(J.a)(Ne)):[].concat(Object(J.a)(Ne),[ke]);return o.a.createElement(b.a,null,o.a.createElement("div",{className:"contact"},o.a.createElement("img",{className:"image",src:s,alt:d}),o.a.createElement(Z.a,null,o.a.createElement(ne.a,{variant:"h5",component:"h2"},d),o.a.createElement(ne.a,{color:"textSecondary",paragraph:!0},m),o.a.createElement(ne.a,{component:"pre",className:"template"},g))),o.a.createElement(v.a,null),o.a.createElement(D.a,null,o.a.createElement("div",{className:"email-array"},o.a.createElement(Fe,{email:l,subject:y,body:g,cc:"council@edmonton.ca",providers:j}),o.a.createElement(K.a,{color:"primary",href:"tel:".concat(r)},o.a.createElement(X.a,{className:"left-icon"}),"Call"))))};Re.defaultProps={firstName:"",lastName:"",ward:"",role:"",phone:"",email:"",photoUrl:"https://www.edmonton.ca/city_government/documents/Mayor-Headshot_800x494_rdax_500x309.jpg",campaignId:""};var xe=Re,Ae={positionOptions:{enableHighAccuracy:!1,timeout:5e3},userDecisionTimeout:5e3,geolocationProvider:"undefined"!==typeof navigator&&navigator.geolocation},Le=function(e){var n=e.coords,t=Object(a.useState)(""),c=Object(i.a)(t,2),r=c[0],l=c[1],u=G({address:r,coords:n}),m=Object(i.a)(u,2),p=m[0],b=m[1],h=d.parse(window.location.search),g=h.iframe_pls,y=h.cid,j=f()("app",{"iframe-pls":g});return"open_parking"===y&&(document.title="Parking Minimums - Take Action On Climate"),o.a.createElement("div",{className:j},o.a.createElement(s.a,null),o.a.createElement(B,{label:"Find your councillor by postal code/address",onQueryChange:l,isLoading:r!==b,autoFocus:!g}),o.a.createElement(v.b,{gutterBottom:!0}),p&&o.a.createElement(xe,Object.assign({},p,{campaignId:y})))};Le.defaultProps={coords:void 0};var Me=Object(u.geolocated)(Ae)(Le),Te=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function _e(e,n){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}r.a.render(o.a.createElement(Me,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/email-contact",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat("/email-contact","/service-worker.js");Te?(!function(e,n){fetch(e).then((function(t){var a=t.headers.get("content-type");404===t.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):_e(e,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):_e(n,e)}))}}()},417:function(e,n,t){e.exports=t.p+"static/media/gmail.2db0d88c.ico"},418:function(e,n,t){e.exports=t.p+"static/media/outlook.759fade9.ico"},419:function(e,n,t){e.exports=t.p+"static/media/yahoo.9796ed78.ico"},516:function(e,n,t){e.exports=t(1130)},794:function(e,n,t){},795:function(e,n,t){},810:function(e,n,t){},925:function(e,n){},927:function(e,n){},957:function(e,n){},958:function(e,n){}},[[516,1,2]]]);
//# sourceMappingURL=main.12ad6c32.chunk.js.map