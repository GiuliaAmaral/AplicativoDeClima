(this["webpackJsonpaplicativo-de-clima"]=this["webpackJsonpaplicativo-de-clima"]||[]).push([[0],{64:function(e,t,n){},66:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(4),r=n.n(a),s=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,83)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),r(e),s(e)}))},i=n(15),o=n(5),l=n(8),d=n(7),b=n(14),j=n.n(b),u=n(1);function m(e){return Object(c.useEffect)((function(){}),[]),Object(u.jsx)(u.Fragment,{children:Object(u.jsx)("div",{class:"container text-center mt-5",children:Object(u.jsx)("div",{class:"spinner-border",role:"status",children:Object(u.jsx)("span",{class:"visually-hidden",children:"Carregando..."})})})})}function x(e){return Object(c.useEffect)((function(){}),[]),Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("div",{class:"container text-center mt-5",children:[e.msg.icon,Object(u.jsx)("h1",{children:e.msg.titulo}),Object(u.jsx)("p",{children:e.msg.msg}),e.msg.btn]})})}function h(){var e,t,n,a,r,s,i,b,j,h,O,v,p,f,g,w=Object(c.useState)(!0),N=Object(d.a)(w,2),y=N[0],k=N[1],F=Object(c.useState)(null),C=Object(d.a)(F,2),E=C[0],S=C[1],T=Object(c.useState)(!1),I=Object(d.a)(T,2),D=I[0],P=I[1],q=Object(c.useState)({}),G=Object(d.a)(q,2),J=G[0],L=G[1];function _(){return(_=Object(l.a)(Object(o.a)().mark((function e(t){var n,c,a;return Object(o.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n={},new FormData(t.target).forEach((function(e,t){n[t]=e})),e.next=6,k(!0);case 6:return c={method:"GET",redirect:"follow"},e.prev=7,e.next=10,fetch("https://weather.contrateumdev.com.br/api/weather/city/?city=".concat(n.city),c);case 10:return a=e.sent,e.next=13,a.json();case 13:if("404"!==(a=e.sent).cod){e.next=21;break}return e.next=17,S({icon:Object(u.jsx)(u.Fragment,{children:Object(u.jsx)("i",{class:"bi bi-x-circle-fill fs-1"})}),titulo:"Erro",msg:"Cidade n\xe3o encontrada,verifique novamente",btn:Object(u.jsx)(u.Fragment,{children:Object(u.jsx)("button",{className:"btn btn-secondary",onClick:function(){window.location.reload()},children:"Tentar novamente!"})})});case 17:return e.next=19,k(!1);case 19:e.next=30;break;case 21:return e.next=23,B(a.coord.lat,a.coord.lon);case 23:return a.horas=e.sent,e.next=26,P(!1);case 26:return e.next=28,L(a);case 28:return e.next=30,k(!1);case 30:e.next=38;break;case 32:return e.prev=32,e.t0=e.catch(7),e.next=36,S({icon:Object(u.jsx)(u.Fragment,{children:Object(u.jsx)("i",{class:"bi bi-x-circle-fill fs-1"})}),titulo:"Erro",msg:"Erro inesperado, tente novamente mais tarde",btn:Object(u.jsx)(u.Fragment,{children:Object(u.jsx)("button",{className:"btn btn-secondary",onClick:function(){window.location.reload()},children:"Tentar novamente!"})})});case 36:return e.next=38,k(!1);case 38:case"end":return e.stop()}}),e,null,[[7,32]])})))).apply(this,arguments)}function B(e,t){return M.apply(this,arguments)}function M(){return M=Object(l.a)(Object(o.a)().mark((function e(t,n){return Object(o.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise(function(){var e=Object(l.a)(Object(o.a)().mark((function e(c,a){var r,s,i,l;return Object(o.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={method:"GET",redirect:"follow"},e.prev=1,e.next=4,fetch("https://clima-cors-anywhere.herokuapp.com/http://api.geonames.org/timezoneJSON?lat=".concat(t,"&lng=").concat(n,"&username=giuliaamaral"),r);case 4:return s=e.sent,e.next=7,s.json();case 7:return s=e.sent,i=new Date(s.time),(l=i.getHours())>=5&&l<=11&&(s.periodo="manha"),l>=12&&l<=17&&(s.periodo="tarde"),l>=18&&l<=23&&(s.periodo="noite"),l>=0&&l<=4&&(s.periodo="madrugada"),e.next=16,c(s);case 16:e.next=26;break;case 18:return e.prev=18,e.t0=e.catch(1),e.next=22,S({icon:Object(u.jsx)(u.Fragment,{children:Object(u.jsx)("i",{class:"bi bi-x-circle-fill fs-1"})}),titulo:"Erro",msg:"Erro inesperado, tente novamente mais tarde",btn:Object(u.jsx)(u.Fragment,{children:Object(u.jsx)("button",{className:"btn btn-secondary",onClick:function(){window.location.reload()},children:"Tentar novamente!"})})});case 22:return e.next=24,k(!1);case 24:return e.next=26,a(e.t0);case 26:case"end":return e.stop()}}),e,null,[[1,18]])})));return function(t,n){return e.apply(this,arguments)}}()));case 1:case"end":return e.stop()}}),e)}))),M.apply(this,arguments)}return Object(c.useEffect)((function(){Object(l.a)(Object(o.a)().mark((function e(){var t,n;return Object(o.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:window.navigator.geolocation&&(t=function(){var e=Object(l.a)(Object(o.a)().mark((function e(t){var n,c;return Object(o.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={method:"GET",redirect:"follow"},e.prev=1,e.next=4,fetch("https://weather.contrateumdev.com.br/api/weather?lat=".concat(t.coords.latitude,"&lon=").concat(t.coords.longitude),n);case 4:return c=e.sent,e.next=7,c.json();case 7:if("404"!==(c=e.sent).cod){e.next=15;break}return e.next=11,S({icon:Object(u.jsx)(u.Fragment,{children:Object(u.jsx)("i",{class:"bi bi-x-circle-fill fs-1"})}),titulo:"Erro",msg:"Cidade n\xe3o encontrada,verifique novamente",btn:Object(u.jsx)(u.Fragment,{children:Object(u.jsx)("button",{className:"btn btn-secondary",onClick:function(){window.location.reload()},children:"Tentar novamente!"})})});case 11:return e.next=13,k(!1);case 13:e.next=24;break;case 15:return e.next=17,B(c.coord.lat,c.coord.lon);case 17:return c.horas=e.sent,e.next=20,P(!1);case 20:return e.next=22,L(c);case 22:return e.next=24,k(!1);case 24:e.next=32;break;case 26:return e.prev=26,e.t0=e.catch(1),e.next=30,S({icon:Object(u.jsx)(u.Fragment,{children:Object(u.jsx)("i",{class:"bi bi-x-circle-fill fs-1"})}),titulo:"Erro",msg:"Erro inesperado, tente novamente mais tarde",btn:Object(u.jsx)(u.Fragment,{children:Object(u.jsx)("button",{className:"btn btn-secondary",onClick:function(){window.location.reload()},children:"Tentar novamente!"})})});case 30:return e.next=32,k(!1);case 32:case"end":return e.stop()}}),e,null,[[1,26]])})));return function(t){return e.apply(this,arguments)}}(),n=function(){var e=Object(l.a)(Object(o.a)().mark((function e(t){return Object(o.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P(!0);case 2:return e.next=4,k(!1);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),window.navigator.geolocation.getCurrentPosition(t,n));case 1:case"end":return e.stop()}}),e)})))()}),[]),Object(u.jsx)(u.Fragment,{children:y?Object(u.jsx)(u.Fragment,{children:Object(u.jsx)(m,{})}):Object(u.jsx)(u.Fragment,{children:null!==E?Object(u.jsx)(u.Fragment,{children:Object(u.jsx)(x,{msg:E})}):Object(u.jsx)(u.Fragment,{children:!1===D?Object(u.jsx)(u.Fragment,{children:Object(u.jsx)("div",{className:"Incio fundoNuvem ".concat(null===J||void 0===J||null===(e=J.horas)||void 0===e?void 0:e.periodo),children:Object(u.jsxs)("div",{className:"conteudoNasNuvens",children:[Object(u.jsxs)("nav",{className:"navbar navbar-light bg-light d-block shadow bg-body",onClick:function(){P(!0)},children:[Object(u.jsx)("button",{type:"button",className:"router float-start ms-2 text-dark btn btn-link p-0",children:Object(u.jsx)("i",{className:"bi bi-plus-lg fs-1"})}),Object(u.jsxs)("p",{className:"fs-5 text-center mt-2 mb-2",children:[(null===J||void 0===J?void 0:J.name)||"Escolha a cidade"," - ",null===J||void 0===J||null===(t=J.sys)||void 0===t?void 0:t.country]})]}),Object(u.jsxs)("section",{className:"text-center text-light m-5 p-5",children:[(null===J||void 0===J||null===(n=J.weather)||void 0===n||null===(a=n[0])||void 0===a?void 0:a.icon)&&Object(u.jsx)("img",{alt:"icone",src:"https://openweathermap.org/img/wn/".concat(null===J||void 0===J||null===(r=J.weather)||void 0===r||null===(s=r[0])||void 0===s?void 0:s.icon,"@2x.png")}),Object(u.jsxs)("h1",{className:"display-1 fw-bold",children:[null===J||void 0===J||null===(i=J.main)||void 0===i?void 0:i.temp,"\xb0C"]}),Object(u.jsx)("h3",{children:null===J||void 0===J||null===(b=J.weather)||void 0===b||null===(j=b[0])||void 0===j?void 0:j.description}),Object(u.jsxs)("p",{children:["Sensa\xe7\xe3o t\xe9rmica: ",null===J||void 0===J||null===(h=J.main)||void 0===h?void 0:h.feels_like,"\xb0C"]})]}),Object(u.jsx)("section",{children:Object(u.jsx)("div",{className:"container text-center",children:Object(u.jsxs)("div",{className:"row d-flex justify-content-center",children:[Object(u.jsx)("div",{className:"col-4 mb-3",children:Object(u.jsx)("div",{className:"card shadow bg-body rounded",children:Object(u.jsxs)("div",{className:"card-body",children:[Object(u.jsxs)("h5",{className:"card-title",children:[null===J||void 0===J||null===(O=J.main)||void 0===O?void 0:O.temp_min,"\xb0C"]}),Object(u.jsx)("p",{className:"card-text",children:"M\xednima"})]})})}),Object(u.jsx)("div",{className:"col-4 mb-3",children:Object(u.jsx)("div",{className:"card shadow bg-body rounded",children:Object(u.jsxs)("div",{className:"card-body",children:[Object(u.jsxs)("h5",{className:"card-title",children:[null===J||void 0===J||null===(v=J.main)||void 0===v?void 0:v.temp_max,"\xb0C"]}),Object(u.jsx)("p",{className:"card-text",children:"M\xe1xima"})]})})}),Object(u.jsx)("div",{className:"col-4 mb-3",children:Object(u.jsx)("div",{className:"card shadow bg-body rounded",children:Object(u.jsxs)("div",{className:"card-body",children:[Object(u.jsxs)("h5",{className:"card-title",children:[null===J||void 0===J||null===(p=J.main)||void 0===p?void 0:p.humidity,"%"]}),Object(u.jsx)("p",{className:"card-text",children:"\xdamidade"})]})})}),Object(u.jsx)("div",{className:"col-6 mb-3",children:Object(u.jsx)("div",{className:"card shadow bg-body rounded",children:Object(u.jsxs)("div",{className:"card-body",children:[Object(u.jsxs)("h5",{className:"card-title",children:[null===J||void 0===J||null===(f=J.main)||void 0===f?void 0:f.pressure,Object(u.jsx)("span",{className:"fs-6",children:"mba"})]}),Object(u.jsx)("p",{className:"card-text",children:"Press\xe3o"})]})})}),Object(u.jsx)("div",{className:"col-6 mb-3",children:Object(u.jsx)("div",{className:"card shadow bg-body rounded",children:Object(u.jsxs)("div",{className:"card-body",children:[Object(u.jsxs)("h5",{className:"card-title",children:[null===J||void 0===J||null===(g=J.wind)||void 0===g?void 0:g.speed,Object(u.jsx)("span",{className:"fs-6",children:"km/h"})]}),Object(u.jsx)("p",{className:"card-text",children:"Vel. Vento"})]})})})]})})})]})})}):Object(u.jsx)(u.Fragment,{children:Object(u.jsx)("div",{className:"Pesquisa",children:Object(u.jsx)("nav",{className:"navbar navbar-light bg-light d-block shadow bg-body",children:Object(u.jsxs)("form",{onSubmit:function(e){return _.apply(this,arguments)},children:[Object(u.jsx)("input",{class:"form-control d-inline-block ms-3 mb-1",name:"city",type:"text",placeholder:"Escreva aqui o nome de uma cidade",style:{width:"85%"},autoFocus:!0,required:!0}),Object(u.jsx)("button",{type:"submit",className:"router float-end me-2 text-dark btn btn-link p-0",children:Object(u.jsx)("i",{className:"bi bi-check-lg fs-1"})})]})})})})})})})}var O=n.p+"static/media/fav-clima.02f1373e.png";function v(){var e=Object(i.b)(),t=e.pwaInstall,n=e.supported,a=e.isInstalled,r=Object(c.useState)(!0),s=Object(d.a)(r,2),b=s[0],x=s[1],v=Object(c.useState)("Inicio"),p=Object(d.a)(v,2),f=p[0],g=p[1];return Object(c.useEffect)((function(){x(!1),setInterval((function(){j()("a.router").on("click",function(){var e=Object(l.a)(Object(o.a)().mark((function e(t){var n;return Object(o.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=j()(t.currentTarget),t.preventDefault(),e.next=4,x(!0);case 4:return e.next=6,g(n.attr("href"));case 6:return e.next=8,x(!1);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),500)}),[]),Object(u.jsxs)(u.Fragment,{children:[b?Object(u.jsx)(u.Fragment,{children:Object(u.jsx)(m,{})}):Object(u.jsx)(u.Fragment,{children:"Inicio"===f&&Object(u.jsx)(h,{})}),n()&&!a()&&Object(u.jsx)("div",{className:"d-flex justify-content-center",children:Object(u.jsx)("div",{class:"toast show position-fixed bottom-0 mb-3 ",role:"alert","aria-live":"assertive","aria-atomic":"true",children:Object(u.jsxs)("div",{class:"toast-body",children:["Deseja instalar esse App no seu cell?",Object(u.jsxs)("div",{class:"mt-2 pt-2 border-top",children:[Object(u.jsx)("button",{type:"button",class:"btn btn-primary btn-sm me-3",onClick:function(){t({title:"Clima",logo:O}).then((function(){return alert("Siga as instru\xe7\xf5es para instala\xe7\xe3o.")}))},children:"Sim, instalar app"}),Object(u.jsx)("button",{type:"button",class:"btn btn-secondary btn-sm","data-bs-dismiss":"toast",children:"N\xe3o"})]})]})})})]})}n(41),n(42),n(43),n(64);r.a.render(Object(u.jsx)(i.a,{enableLogging:!0,children:Object(u.jsx)(v,{})}),document.getElementById("root")),s()}},[[66,1,2]]]);
//# sourceMappingURL=main.3eb6d2d6.chunk.js.map