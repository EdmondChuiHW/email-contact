(this["webpackJsonpemail-contact"]=this["webpackJsonpemail-contact"]||[]).push([[0],{1023:function(e,t){},1117:function(e,t,a){},1118:function(e,t,a){},1130:function(e,t,a){"use strict";a.r(t);a(517),a(519),a(520),a(521),a(522),a(523),a(524),a(525),a(526),a(527),a(528),a(529),a(530),a(531),a(532),a(533),a(534),a(535),a(536),a(537),a(538),a(539),a(540),a(541),a(542),a(543),a(544),a(154),a(545),a(546),a(547),a(548),a(549),a(550),a(551),a(552),a(553),a(554),a(555),a(556),a(557),a(558),a(559),a(560),a(561),a(562),a(564),a(565),a(567),a(568),a(214),a(570),a(571),a(572),a(573),a(574),a(575),a(576),a(577),a(578),a(579),a(580),a(581),a(582),a(583),a(584),a(585),a(586),a(587),a(588),a(589),a(590),a(591),a(592),a(593),a(594),a(595),a(596),a(597),a(598),a(599),a(600),a(601),a(602),a(603),a(604),a(605),a(606),a(607),a(608),a(609),a(610),a(611),a(612),a(613),a(614),a(615),a(616),a(617),a(618),a(619),a(621),a(622),a(623),a(624),a(625),a(626),a(627),a(629),a(630),a(631),a(632),a(633),a(634),a(635),a(636),a(637),a(638),a(639),a(640),a(641),a(642),a(300),a(643),a(644),a(645),a(646),a(301),a(647),a(648),a(649),a(650),a(651),a(652),a(653),a(654),a(655),a(656),a(657),a(658),a(659),a(660),a(661),a(662),a(663),a(664),a(665),a(666),a(667),a(668),a(669),a(670),a(671),a(672),a(673),a(674),a(675),a(676),a(677),a(678),a(679),a(680),a(681),a(682),a(683),a(684),a(685),a(686),a(687),a(688),a(689),a(690),a(691),a(692),a(693),a(694),a(695),a(696),a(225),a(697),a(698),a(699),a(700),a(701),a(702),a(703),a(704),a(705),a(706),a(707),a(708),a(709),a(710),a(711),a(713),a(714),a(715),a(716),a(717),a(718),a(719),a(720),a(721),a(722),a(723),a(724),a(725),a(726),a(727),a(728),a(729),a(730),a(731),a(732),a(733),a(734),a(735),a(736),a(737),a(738),a(739),a(740),a(741),a(742),a(743),a(744),a(745),a(746),a(747),a(748),a(749),a(750),a(751),a(752),a(753),a(754),a(755),a(756),a(757),a(758),a(759),a(760),a(761),a(762),a(763),a(764),a(765),a(766),a(767),a(768),a(769),a(772),a(773),a(774),a(775),a(776),a(777),a(778),a(779),a(780),a(781),a(782),a(783),a(784),a(785),a(786),a(787),a(789),a(312);var n=a(1),o=a.n(n),c=a(149),r=a.n(c),i=(a(794),a(54)),l=(a(795),a(193)),s=a.n(l),u=a(409),m=a(410),d=a(42),v=a.n(d),f=a(198),b=a(108),p=a.n(b),h=a(107),g=a.n(h),y=a(190),j=a.n(y),E=a(413),O=a.n(E),C=(a(810),a(1131)),k=a(189),w=a.n(k),N={isLoading:!1,size:24,className:"",children:o.a.createElement(o.a.Fragment,null)},I=function(e){var t=e.isLoading,a=e.size,n=e.className,c=e.children;return t?o.a.createElement(w.a,{size:a,thickness:4.8,className:n}):c};I.defaultProps=N;var P=I,S=a(412),F=a.n(S),Q=function(e){var t=e.onClearQuery;return o.a.createElement(g.a,{"aria-label":"Clear",onClick:t},o.a.createElement(F.a,null))};Q.defaultProps={onClearQuery:C.a};var x=Q,M={label:"",query:"",isLoading:!1,autoFocus:!0,onQueryChange:C.a,onClearQuery:C.a,ClearButton:x,SearchButton:function(){return o.a.createElement(g.a,{"aria-label":"Search"},o.a.createElement(O.a,null))},Input:j.a},R=function(e){var t=e.label,a=e.query,n=e.isLoading,c=e.autoFocus,r=e.onQueryChange,i=e.onClearQuery,l=e.ClearButton,s=e.SearchButton,u=e.Input;return o.a.createElement(p.a,{className:"root",elevation:1},o.a.createElement(u,{autoComplete:"postal-code",className:"input",autoFocus:c,placeholder:t,value:a,onChange:r}),o.a.createElement(P,{isLoading:n,className:"loading"},a?o.a.createElement(l,{onClearQuery:i}):o.a.createElement(s,null)))};R.defaultProps=M;var _=R,z=a(112),B=a(414),L=a(1135),Z=function(e){var t=e.debounceInMs;return function(e){var a=function(a){var c=a.onQueryChange,r=Object(z.a)(a,["onQueryChange"]),l=Object(n.useState)(""),s=Object(i.a)(l,2),u=s[0],m=s[1],d=Object(B.useDebouncedCallback)(c,t),v=Object(i.a)(d,1)[0],f=Object(L.a)([m,v]),b=Object(n.useCallback)((function(){return f("")}),[f]),p=Object(n.useCallback)((function(e){return f(e.target.value)}),[f]);return o.a.createElement(e,Object.assign({query:u,onQueryChange:p,onClearQuery:b},r))};return a.defaultProps={onQueryChange:C.a},a}}({debounceInMs:300})(_),A=a(1136),T=a(415),Y=a.n(T),q=/^\s*([A-Za-z]\d[A-Za-z])[ -]?(\d[A-Za-z]\d)\s*$/i;function J(e){var t=q.exec(e);if(!t)return e;var a=Object(i.a)(t,3),n=a[1],o=a[2];return"".concat(n," ").concat(o)}var U=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return Y()({url:"".concat("https://address2contact.herokuapp.com","/address2councillor"),json:!0,qs:{address:J(e)}})},D=function(e){var t=e.address,a=void 0===t?"":t,o=e.coords,c=void 0===o?{latitude:0,longitude:0}:o,r=Object(n.useState)(void 0),l=Object(i.a)(r,2),s=l[0],u=l[1],m=Object(n.useState)(void 0),d=Object(i.a)(m,2),v=d[0],f=d[1],b=Object(A.a)(u,(function(){return f(a)}));return Object(n.useEffect)((function(){var e=c&&!a?function(e){var t=e.latitude,a=void 0===t?0:t,n=e.longitude;return U("geo: lng: ".concat(void 0===n?0:n,", lat: ").concat(a))}(c):U(a);return e.then(b),function(){return e.abort()}}),[a,c]),[s,v]},G=a(266),H=a(192),W=a.n(H),$=a(191),V=a.n($),K=a(95),X=a.n(K),ee=a(421),te=a.n(ee),ae=a(111),ne=a.n(ae),oe=a(1133),ce=a(1134),re=(a(1117),a(416)),ie=Object(L.a)([function(e){var t=e.role,a=void 0===t?"Mayor":t,n=e.lastName,o=void 0===n?"Iveson":n,c=e.ward,r=void 0===c?"":c;return"Hello ".concat(a," ").concat(o,",\n\nI want safe and liveable streets. That means 30 km/hr for residential streets in Edmonton. The #YEGCoreZone is the only option being presented to get us there. Please vote to approve the #YEGCoreZone on February 26.\n\nPlease also consider voting to reduce speed limits throughout the rest of Edmonton, in addition to the 30 km/hr Core Zone. It's time for Edmonton's residential streets to become the vibrant, community-building spaces our neighbourhoods and their residents would like to see. Vote YES to the Core Zone on February 26 and YES to slower streets in Edmonton's neighbourhoods.\n\nSincerely,\nConstituent from ").concat(r||"Edmonton")},Object(C.a)("Speed Limits: Feb 26 Committee Meeting Item 6.1")]),le=Object(L.a)([function(e){var t=e.role,a=void 0===t?"Mayor":t,n=e.lastName,o=void 0===n?"Iveson":n,c=e.ward,r=void 0===c?"":c;return"Dear ".concat(a," ").concat(o,",\n\nAs one of your constituents, I would like to register my concern on the issue of parking minimums that is coming to council on January 28.\n\nParking minimums are an unnecessary intrusion on businesses and households. They incentivize car use, force our city to sprawl, and make land unproductive, all factors that contribute to climate change. \n\nI expect Edmonton to be a leader in acting to mitigate the climate emergency.\n\n=====================\nPlease vote for Full Implementation of Open Parking on January 28.\n=====================\n\nSincerely,\nConstituent from ").concat(r||"Edmonton")},Object(C.a)("I Support Full Implementation of Open Parking")]),se=a(201),ue=a(1132),me=a(150),de=a(422),ve=(a(1118),{src:"",alt:"",left:o.a.createElement(o.a.Fragment,null)}),fe=function(e){var t=e.src,a=e.alt,n=e.left;return t?o.a.createElement("img",{className:"left-icon button-img",width:24,height:24,src:t,alt:a}):n};fe.defaultProps=ve;var be=fe,pe={name:"",src:"",href:"",left:o.a.createElement(o.a.Fragment,null)},he=function(e){var t=e.name,a=e.src,n=e.href,c=e.left;return o.a.createElement(X.a,{color:"primary",href:n,target:"_blank",rel:"noopener noreferrer"},o.a.createElement(be,{src:a,alt:t,left:c}),o.a.createElement("span",null,t))};he.defaultProps=pe;var ge=he,ye=a(417),je={name:"Gmail",src:a.n(ye).a,hrefResolver:function(e){var t=e.email,a=void 0===t?"":t,n=e.cc,o=void 0===n?"":n,c=e.subject,r=void 0===c?"":c,i=e.body,l=void 0===i?"":i;return("https://mail.google.com/mail/?view=cm&fs=1&to=".concat(a,"&cc=").concat(o,"&su=").concat(r,"&body=").concat(l))}},Ee=a(418),Oe={name:"Outlook",src:a.n(Ee).a,hrefResolver:function(e){var t=e.email,a=void 0===t?"":t,n=e.cc,o=void 0===n?"":n,c=e.subject,r=void 0===c?"":c,i=e.body,l=void 0===i?"":i;return("https://outlook.live.com/?path=/mail/action/compose&to=".concat(a,"&cc=").concat(o,"&subject=").concat(r,"&body=").concat(l))}},Ce=a(419),ke={name:"Yahoo",src:a.n(Ce).a,hrefResolver:function(e){var t=e.email,a=void 0===t?"":t,n=e.cc,o=void 0===n?"":n,c=e.subject,r=void 0===c?"":c,i=e.body,l=void 0===i?"":i;return("https://compose.mail.yahoo.com/?to=".concat(a,"&cc=").concat(o,"&subject=").concat(r,"&body=").concat(l))}},we=a(420),Ne=a.n(we),Ie={name:"Mail app",left:o.a.createElement(Ne.a,{className:"left-icon"}),hrefResolver:function(e){var t=e.email,a=void 0===t?"":t,n=e.cc,o=void 0===n?"":n,c=e.subject,r=void 0===c?"":c,i=e.body,l=void 0===i?"":i;return"mailto:".concat(a,"?subject=").concat(r,"&body=").concat(l,"&cc=").concat(o)}},Pe=[je,Oe,ke],Se=function(e){var t=e.subject,a=void 0===t?"":t,n=e.body,o=void 0===n?"":n,c=Object(z.a)(e,["subject","body"]);return Object(se.a)({subject:encodeURIComponent(a),body:encodeURIComponent(o)},c)},Fe={email:"",cc:"",subject:"",body:""},Qe=Object(ue.a)(Object(me.a)(Fe)),xe=Object(A.a)(Qe,(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Fe,t=function(t){var a=t.name,n=t.hrefResolver,c=Object(z.a)(t,["name","hrefResolver"]);return o.a.createElement(ge,Object.assign({key:a,name:a,href:Object(A.a)(Se,n)(e)},c))};return t.defaultProps={name:""},t})),Me=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Object(se.a)({providers:Pe},Fe);return Object(de.a)(xe(e),e.providers)};var Re=function(e){var t=e.firstName,a=e.lastName,n=e.ward,c=e.role,r=e.phone,l=e.email,s=e.photoUrl,u=e.campaignId,m="".concat(t," ").concat(a),d=Object(oe.a)(Object(ce.a)("Councillor"),(function(e){return"".concat(e," \u2013 ").concat(n)}))(c),v=Object(oe.a)(Object(ce.a)("City"),Object(C.a)("Edmonton")),b=function(e){switch(e){case"open_parking":return le;default:return ie}}(u)({role:c,lastName:a,ward:v(n)}),h=Object(i.a)(b,2),g=h[0],y=h[1],j=re.isMobile?[Ie].concat(Object(G.a)(Pe)):[].concat(Object(G.a)(Pe),[Ie]);return o.a.createElement(p.a,null,o.a.createElement("div",{className:"contact"},o.a.createElement("img",{className:"image",src:s,alt:m}),o.a.createElement(V.a,null,o.a.createElement(ne.a,{variant:"h5",component:"h2"},m),o.a.createElement(ne.a,{color:"textSecondary",paragraph:!0},d),o.a.createElement(ne.a,{component:"pre",className:"template"},g))),o.a.createElement(f.a,null),o.a.createElement(W.a,null,o.a.createElement("div",{className:"email-array"},o.a.createElement(Me,{email:[l,"council@edmonton.ca","city.clerk@edmonton.ca"].join(","),subject:y,body:g,providers:j}),o.a.createElement(X.a,{color:"primary",href:"tel:".concat(r)},o.a.createElement(te.a,{className:"left-icon"}),"Call"))))};Re.defaultProps={firstName:"",lastName:"",ward:"",role:"",phone:"",email:"",photoUrl:"https://www.edmonton.ca/city_government/documents/Mayor-Headshot_800x494_rdax_500x309.jpg",campaignId:""};var _e=Re,ze={positionOptions:{enableHighAccuracy:!1,timeout:5e3},userDecisionTimeout:5e3,geolocationProvider:"undefined"!==typeof navigator&&navigator.geolocation},Be=function(e){var t=e.coords,a=Object(n.useState)(""),c=Object(i.a)(a,2),r=c[0],l=c[1],u=D({address:r,coords:t}),d=Object(i.a)(u,2),b=d[0],p=d[1],h=m.parse(window.location.search),g=h.iframe_pls,y=h.cid,j=v()("app",{"iframe-pls":g});return"open_parking"===y&&(document.title="Parking Minimums - Take Action On Climate"),o.a.createElement("div",{className:j},o.a.createElement(s.a,null),o.a.createElement(Z,{label:"Find your councillor by postal code/address",onQueryChange:l,isLoading:r!==p,autoFocus:!g}),o.a.createElement(f.b,{gutterBottom:!0}),b&&o.a.createElement(_e,Object.assign({},b,{campaignId:y})))};Be.defaultProps={coords:void 0};var Le=Object(u.geolocated)(ze)(Be);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(Le,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},417:function(e,t,a){e.exports=a.p+"static/media/gmail.2db0d88c.ico"},418:function(e,t,a){e.exports=a.p+"static/media/outlook.759fade9.ico"},419:function(e,t,a){e.exports=a.p+"static/media/yahoo.9796ed78.ico"},516:function(e,t,a){e.exports=a(1130)},794:function(e,t,a){},795:function(e,t,a){},810:function(e,t,a){},925:function(e,t){},927:function(e,t){},957:function(e,t){},958:function(e,t){}},[[516,1,2]]]);
//# sourceMappingURL=main.bf0ee952.chunk.js.map