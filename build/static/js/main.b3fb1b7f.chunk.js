(this["webpackJsonpemail-contact"]=this["webpackJsonpemail-contact"]||[]).push([[0],{1023:function(e,t){},1117:function(e,t,n){},1118:function(e,t,n){},1130:function(e,t,n){"use strict";n.r(t);n(517),n(519),n(520),n(521),n(522),n(523),n(524),n(525),n(526),n(527),n(528),n(529),n(530),n(531),n(532),n(533),n(534),n(535),n(536),n(537),n(538),n(539),n(540),n(541),n(542),n(543),n(544),n(154),n(545),n(546),n(547),n(548),n(549),n(550),n(551),n(552),n(553),n(554),n(555),n(556),n(557),n(558),n(559),n(560),n(561),n(562),n(564),n(565),n(567),n(568),n(214),n(570),n(571),n(572),n(573),n(574),n(575),n(576),n(577),n(578),n(579),n(580),n(581),n(582),n(583),n(584),n(585),n(586),n(587),n(588),n(589),n(590),n(591),n(592),n(593),n(594),n(595),n(596),n(597),n(598),n(599),n(600),n(601),n(602),n(603),n(604),n(605),n(606),n(607),n(608),n(609),n(610),n(611),n(612),n(613),n(614),n(615),n(616),n(617),n(618),n(619),n(621),n(622),n(623),n(624),n(625),n(626),n(627),n(629),n(630),n(631),n(632),n(633),n(634),n(635),n(636),n(637),n(638),n(639),n(640),n(641),n(642),n(300),n(643),n(644),n(645),n(646),n(301),n(647),n(648),n(649),n(650),n(651),n(652),n(653),n(654),n(655),n(656),n(657),n(658),n(659),n(660),n(661),n(662),n(663),n(664),n(665),n(666),n(667),n(668),n(669),n(670),n(671),n(672),n(673),n(674),n(675),n(676),n(677),n(678),n(679),n(680),n(681),n(682),n(683),n(684),n(685),n(686),n(687),n(688),n(689),n(690),n(691),n(692),n(693),n(694),n(695),n(696),n(225),n(697),n(698),n(699),n(700),n(701),n(702),n(703),n(704),n(705),n(706),n(707),n(708),n(709),n(710),n(711),n(713),n(714),n(715),n(716),n(717),n(718),n(719),n(720),n(721),n(722),n(723),n(724),n(725),n(726),n(727),n(728),n(729),n(730),n(731),n(732),n(733),n(734),n(735),n(736),n(737),n(738),n(739),n(740),n(741),n(742),n(743),n(744),n(745),n(746),n(747),n(748),n(749),n(750),n(751),n(752),n(753),n(754),n(755),n(756),n(757),n(758),n(759),n(760),n(761),n(762),n(763),n(764),n(765),n(766),n(767),n(768),n(769),n(772),n(773),n(774),n(775),n(776),n(777),n(778),n(779),n(780),n(781),n(782),n(783),n(784),n(785),n(786),n(787),n(789),n(312);var a=n(1),o=n.n(a),c=n(149),r=n.n(c),i=(n(794),n(62)),l=(n(795),n(193)),s=n.n(l),u=n(409),m=n(410),d=n(42),v=n.n(d),b=n(198),f=n(108),p=n.n(f),h=n(107),g=n.n(h),y=n(190),j=n.n(y),E=n(413),O=n.n(E),C=(n(810),n(1131)),k=n(189),w=n.n(k),N={isLoading:!1,size:24,className:"",children:o.a.createElement(o.a.Fragment,null)},I=function(e){var t=e.isLoading,n=e.size,a=e.className,c=e.children;return t?o.a.createElement(w.a,{size:n,thickness:4.8,className:a}):c};I.defaultProps=N;var P=I,S=n(412),F=n.n(S),Q=function(e){var t=e.onClearQuery;return o.a.createElement(g.a,{"aria-label":"Clear",onClick:t},o.a.createElement(F.a,null))};Q.defaultProps={onClearQuery:C.a};var x=Q,M={label:"",query:"",isLoading:!1,autoFocus:!0,onQueryChange:C.a,onClearQuery:C.a,ClearButton:x,SearchButton:function(){return o.a.createElement(g.a,{"aria-label":"Search"},o.a.createElement(O.a,null))},Input:j.a},R=function(e){var t=e.label,n=e.query,a=e.isLoading,c=e.autoFocus,r=e.onQueryChange,i=e.onClearQuery,l=e.ClearButton,s=e.SearchButton,u=e.Input;return o.a.createElement(p.a,{className:"root",elevation:1},o.a.createElement(u,{autoComplete:"postal-code",className:"input",autoFocus:c,placeholder:t,value:n,onChange:r}),o.a.createElement(P,{isLoading:a,className:"loading"},n?o.a.createElement(l,{onClearQuery:i}):o.a.createElement(s,null)))};R.defaultProps=M;var _=R,B=n(112),L=n(414),T=n(1135),Y=function(e){var t=e.debounceInMs;return function(e){var n=function(n){var c=n.onQueryChange,r=Object(B.a)(n,["onQueryChange"]),l=Object(a.useState)(""),s=Object(i.a)(l,2),u=s[0],m=s[1],d=Object(L.useDebouncedCallback)(c,t),v=Object(i.a)(d,1)[0],b=Object(T.a)([m,v]),f=Object(a.useCallback)((function(){return b("")}),[b]),p=Object(a.useCallback)((function(e){return b(e.target.value)}),[b]);return o.a.createElement(e,Object.assign({query:u,onQueryChange:p,onClearQuery:f},r))};return n.defaultProps={onQueryChange:C.a},n}}({debounceInMs:300})(_),q=n(1136),z=n(415),J=n.n(z),U=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return J()({url:"".concat("https://address2contact.herokuapp.com","/address2councillor"),json:!0,qs:{address:e}})},Z=function(e){var t=e.address,n=void 0===t?"":t,o=e.coords,c=void 0===o?{latitude:0,longitude:0}:o,r=Object(a.useState)(void 0),l=Object(i.a)(r,2),s=l[0],u=l[1],m=Object(a.useState)(void 0),d=Object(i.a)(m,2),v=d[0],b=d[1],f=Object(q.a)(u,(function(){return b(n)}));return Object(a.useEffect)((function(){var e=c&&!n?function(e){var t=e.latitude,n=void 0===t?0:t,a=e.longitude;return U("geo: lng: ".concat(void 0===a?0:a,", lat: ").concat(n))}(c):U(n);return e.then(f),function(){return e.abort()}}),[n,c,f]),[s,v]},A=n(266),D=n(192),G=n.n(D),H=n(191),W=n.n(H),V=n(95),$=n.n(V),K=n(421),X=n.n(K),ee=n(111),te=n.n(ee),ne=n(1133),ae=n(1134),oe=(n(1117),n(416)),ce=Object(T.a)([function(e){var t=e.role,n=void 0===t?"Mayor":t,a=e.lastName,o=void 0===a?"Iveson":a,c=e.ward,r=void 0===c?"":c;return"Hello ".concat(n," ").concat(o,",\n\nI want safe and liveable streets. That means 30 km/hr for residential streets in Edmonton. The #YEGCoreZone is the only option being presented to get us there. Please vote to approve the #YEGCoreZone on February 26.\n\nPlease also consider voting to reduce speed limits throughout the rest of Edmonton, in addition to the 30 km/hr Core Zone. It's time for Edmonton's residential streets to become the vibrant, community-building spaces our neighbourhoods and their residents would like to see. Vote YES to the Core Zone on February 26 and YES to slower streets in Edmonton's neighbourhoods.\n\nSincerely,\nConstituent from ").concat(r||"Edmonton")},Object(C.a)("Speed Limits: Feb 26 Committee Meeting Item 6.1")]),re=Object(T.a)([function(e){var t=e.role,n=void 0===t?"Mayor":t,a=e.lastName,o=void 0===a?"Iveson":a,c=e.ward,r=void 0===c?"":c;return"Dear ".concat(n," ").concat(o,",\n\nAs one of your constituents, I would like to register my concern on the issue of parking minimums that is coming to council on January 28.\n\nParking minimums are an unnecessary intrusion on businesses and households. They incentivize car use, force our city to sprawl, and make land unproductive, all factors that contribute to climate change. \n\nI expect Edmonton to be a leader in acting to mitigate the climate emergency.\n\n=====================\nPlease vote for Full Implementation of Open Parking on January 28.\n=====================\n\nSincerely,\nConstituent from ").concat(r||"Edmonton")},Object(C.a)("I Support Full Implementation of Open Parking")]),ie=n(201),le=n(1132),se=n(150),ue=n(422),me=(n(1118),{src:"",alt:"",left:o.a.createElement(o.a.Fragment,null)}),de=function(e){var t=e.src,n=e.alt,a=e.left;return t?o.a.createElement("img",{className:"left-icon button-img",width:24,height:24,src:t,alt:n}):a};de.defaultProps=me;var ve=de,be={name:"",src:"",href:"",left:o.a.createElement(o.a.Fragment,null)},fe=function(e){var t=e.name,n=e.src,a=e.href,c=e.left;return o.a.createElement($.a,{color:"primary",href:a,target:"_blank",rel:"noopener noreferrer"},o.a.createElement(ve,{src:n,alt:t,left:c}),o.a.createElement("span",null,t))};fe.defaultProps=be;var pe=fe,he=n(417),ge={name:"Gmail",src:n.n(he).a,hrefResolver:function(e){var t=e.email,n=void 0===t?"":t,a=e.cc,o=void 0===a?"":a,c=e.subject,r=void 0===c?"":c,i=e.body,l=void 0===i?"":i;return("https://mail.google.com/mail/?view=cm&fs=1&to=".concat(n,"&cc=").concat(o,"&su=").concat(r,"&body=").concat(l))}},ye=n(418),je={name:"Outlook",src:n.n(ye).a,hrefResolver:function(e){var t=e.email,n=void 0===t?"":t,a=e.cc,o=void 0===a?"":a,c=e.subject,r=void 0===c?"":c,i=e.body,l=void 0===i?"":i;return("https://outlook.live.com/?path=/mail/action/compose&to=".concat(n,"&cc=").concat(o,"&subject=").concat(r,"&body=").concat(l))}},Ee=n(419),Oe={name:"Yahoo",src:n.n(Ee).a,hrefResolver:function(e){var t=e.email,n=void 0===t?"":t,a=e.cc,o=void 0===a?"":a,c=e.subject,r=void 0===c?"":c,i=e.body,l=void 0===i?"":i;return("https://compose.mail.yahoo.com/?to=".concat(n,"&cc=").concat(o,"&subject=").concat(r,"&body=").concat(l))}},Ce=n(420),ke=n.n(Ce),we={name:"Mail app",left:o.a.createElement(ke.a,{className:"left-icon"}),hrefResolver:function(e){var t=e.email,n=void 0===t?"":t,a=e.cc,o=void 0===a?"":a,c=e.subject,r=void 0===c?"":c,i=e.body,l=void 0===i?"":i;return"mailto:".concat(n,"?subject=").concat(r,"&body=").concat(l,"&cc=").concat(o)}},Ne=[ge,je,Oe],Ie=function(e){var t=e.subject,n=void 0===t?"":t,a=e.body,o=void 0===a?"":a,c=Object(B.a)(e,["subject","body"]);return Object(ie.a)({subject:encodeURIComponent(n),body:encodeURIComponent(o)},c)},Pe={email:"",cc:"",subject:"",body:""},Se=Object(le.a)(Object(se.a)(Pe)),Fe=Object(q.a)(Se,(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Pe,t=function(t){var n=t.name,a=t.hrefResolver,c=Object(B.a)(t,["name","hrefResolver"]);return o.a.createElement(pe,Object.assign({key:n,name:n,href:Object(q.a)(Ie,a)(e)},c))};return t.defaultProps={name:""},t})),Qe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Object(ie.a)({providers:Ne},Pe);return Object(ue.a)(Fe(e),e.providers)};var xe=function(e){var t=e.firstName,n=e.lastName,a=e.ward,c=e.role,r=e.phone,l=e.email,s=e.photoUrl,u=e.campaignId,m="".concat(t," ").concat(n),d=Object(ne.a)(Object(ae.a)("Councillor"),(function(e){return"".concat(e," \u2013 ").concat(a)}))(c),v=Object(ne.a)(Object(ae.a)("City"),Object(C.a)("Edmonton")),f=function(e){switch(e){case"open_parking":return re;default:return ce}}(u)({role:c,lastName:n,ward:v(a)}),h=Object(i.a)(f,2),g=h[0],y=h[1],j=oe.isMobile?[we].concat(Object(A.a)(Ne)):[].concat(Object(A.a)(Ne),[we]);return o.a.createElement(p.a,null,o.a.createElement("div",{className:"contact"},o.a.createElement("img",{className:"image",src:s,alt:m}),o.a.createElement(W.a,null,o.a.createElement(te.a,{variant:"h5",component:"h2"},m),o.a.createElement(te.a,{color:"textSecondary",paragraph:!0},d),o.a.createElement(te.a,{component:"pre",className:"template"},g))),o.a.createElement(b.a,null),o.a.createElement(G.a,null,o.a.createElement("div",{className:"email-array"},o.a.createElement(Qe,{email:[l,"council@edmonton.ca","city.clerk@edmonton.ca"].join(","),subject:y,body:g,providers:j}),o.a.createElement($.a,{color:"primary",href:"tel:".concat(r)},o.a.createElement(X.a,{className:"left-icon"}),"Call"))))};xe.defaultProps={firstName:"",lastName:"",ward:"",role:"",phone:"",email:"",photoUrl:"https://www.edmonton.ca/city_government/documents/Mayor-Headshot_800x494_rdax_500x309.jpg",campaignId:""};var Me=xe,Re={positionOptions:{enableHighAccuracy:!1,timeout:5e3},userDecisionTimeout:5e3,geolocationProvider:"undefined"!==typeof navigator&&navigator.geolocation},_e=function(e){var t=e.coords,n=Object(a.useState)(""),c=Object(i.a)(n,2),r=c[0],l=c[1],u=Z({address:r,coords:t}),d=Object(i.a)(u,2),f=d[0],p=d[1],h=m.parse(window.location.search),g=h.iframe_pls,y=h.cid,j=v()("app",{"iframe-pls":g});return"open_parking"===y&&(document.title="Parking Minimums - Take Action On Climate"),o.a.createElement("div",{className:j},o.a.createElement(s.a,null),o.a.createElement(Y,{label:"Find your councillor by postal code/address",onQueryChange:l,isLoading:r!==p,autoFocus:!g}),o.a.createElement(b.b,{gutterBottom:!0}),f&&o.a.createElement(Me,Object.assign({},f,{campaignId:y})))};_e.defaultProps={coords:void 0};var Be=Object(u.geolocated)(Re)(_e);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(Be,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},417:function(e,t,n){e.exports=n.p+"static/media/gmail.2db0d88c.ico"},418:function(e,t,n){e.exports=n.p+"static/media/outlook.759fade9.ico"},419:function(e,t,n){e.exports=n.p+"static/media/yahoo.9796ed78.ico"},516:function(e,t,n){e.exports=n(1130)},794:function(e,t,n){},795:function(e,t,n){},810:function(e,t,n){},925:function(e,t){},927:function(e,t){},957:function(e,t){},958:function(e,t){}},[[516,1,2]]]);
//# sourceMappingURL=main.b3fb1b7f.chunk.js.map