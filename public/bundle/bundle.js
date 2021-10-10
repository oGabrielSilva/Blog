(()=>{"use strict";function t(t){return function(t){if(Array.isArray(t))return e(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,r){if(t){if("string"==typeof t)return e(t,r);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?e(t,r):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function e(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function r(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function n(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var a=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}var e,a;return e=t,a=[{key:"Node",value:function(t,e){var n=document.createElement(t);if(!e)return n;var a,o=function(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(t){if("string"==typeof t)return r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(t,e):void 0}}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var a=0,o=function(){};return{s:o,n:function(){return a>=t.length?{done:!0}:{done:!1,value:t[a++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,l=!0,c=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return l=t.done,t},e:function(t){c=!0,i=t},f:function(){try{l||null==n.return||n.return()}finally{if(c)throw i}}}}(e);try{for(o.s();!(a=o.n()).done;){var i=a.value;n.setAttribute(i.attr,i.val)}}catch(t){o.e(t)}finally{o.f()}return n}}],null&&n(e.prototype,null),a&&n(e,a),t}();function o(t,e){if(t){if("string"==typeof t)return i(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?i(t,e):void 0}}function i(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var l=function(t){t.preventDefault();var e,r,n=t.target,a=!(!(e=function(t){var e=t,r=[];for(var n in e)if(e[n].value.length<=0||"string"!=typeof e[n].value){r.push("Algum item foi mal digitado"),e=null;break}return{items:e,errors:r}}(function(t){if(Array.isArray(t))return i(t)}(r=n.querySelectorAll("input"))||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(r)||o(r)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}())).items||0!==e.errors.length)||e.errors;!0===a?t.target.submit():console.log(a)};function c(t,e){var r=t.elms,n=t.articles,o=t.editPanelHtml,i=t.p,l=t.panelHtml,c=e.socket,d=e.userID;r.forEach((function(t){var e=t.title,r=t.description,a=t.primary,o=t.createdAt,i=t._id;n.push({title:e,description:r,primary:a,_id:i,createdAt:o})})),n.forEach((function(t){var e=function(t,e){var r,n=t.title,o=t.primary,i=t.description,l=t._id,c=t.createdAt,d=e.socket,u=e.userID,s=function(t){return a.Node("div",[{attr:"class",val:t}])},p=function(t){return a.Node("a",[{attr:"href",val:t},{attr:"target",val:"_blank"},{attr:"class",val:"btn btn-primary m-1"}])},v=function(){return a.Node("small",[{attr:"class",val:"text-muted"}])},f=s("col"),m=s("card h-100"),y=(r=o,a.Node("img",[{attr:"src",val:r},{attr:"class",val:"card-img-top"}])),h=s("card-body"),b=a.Node("h5",[{attr:"class",val:"card-title"}]),g=a.Node("p",[{attr:"class",val:"card-text"}]),S=v(),C=p("/post=".concat(l)),x=p("/system.edition=".concat(l)),q=s(""),A=p("#");C.innerText="Acessar",x.innerText="Editar",A.innerText="Deletar",A.setAttribute("class","btn btn-danger m-1"),A.setAttribute("target","_self"),A.addEventListener("click",(function(t){return function(t,e,r){var n=r.socket,o=r.userID;t.preventDefault(),document.body.appendChild(function(t){var e=window.innerWidth<768?80:50,r=a.Node("div",[{attr:"style",val:"height: 100vh; width: 100vw; position: fixed; top: 0; left: 0;"},{attr:"id",val:"div-delete-a-post"}]),n=a.Node("section",[{attr:"class",val:"border rounded shadow-sm p-3 d-flex overflow-auto bg-light justify-content-center flex-column"},{attr:"style",val:"min-height: 40vh; width: ".concat(e,"vw; position: fixed; \n\t\ttop: 50%; right: 50%; transform: translate(50%, -50%);")}]),o=a.Node("div",[{attr:"class",val:"row"}]),i=a.Node("div",[{attr:"class",val:"col text-center"}]);i.appendChild(a.Node("p",[{attr:"class",val:"h5 p-title-1"}])),i.appendChild(a.Node("p",[{attr:"class",val:"fw-light p-text-1"}])),i.querySelector(".p-title-1").innerText="Deletar post",i.querySelector(".p-text-1").innerText="Você realmente deseja remover o post ".concat(t,"? \n\tApós remover, todos os dados serão perdidos. Clique para confirmar.");var l=a.Node("div",[{attr:"class",val:"row"}]),c=a.Node("div",[{attr:"class",val:"col text-center"}]);return c.appendChild(a.Node("button",[{attr:"class",val:"btn btn-success m-1 b-confirm-1"}])),c.appendChild(a.Node("button",[{attr:"class",val:"btn btn-danger m-1 b-danger-1"}])),c.querySelector(".b-confirm-1").innerText="Excluir",c.querySelector(".b-danger-1").innerText="Manter",o.appendChild(i),l.appendChild(c),n.appendChild(o),n.appendChild(l),r.appendChild(n),r}(e)),document.body.querySelector("#div-delete-a-post").addEventListener("click",(function(r){var a=document.querySelector("#div-delete-a-post"),i=document.body.querySelector(".b-confirm-1"),l=document.body.querySelector(".b-danger-1"),c=r.target;return c===i?(n.on("post deleted",(function(e){return e.userID!==o?console.log("Socket error"):(console.log("Post deletado:",e),t.target.parentElement.parentElement.parentElement.parentElement.remove(),a.remove())})),n.emit("delete a post",{id:e,userID:o})):c===l||c===a?a.remove():void 0}))}(t,l,{socket:d,userID:u})})),q.appendChild(C),q.appendChild(x),q.appendChild(A);var w=s("card-footer"),N=v();return b.innerText=n,g.innerText=i,S.innerText="ID: ".concat(l),N.innerText="Last update ".concat(moment(c,"YYYYMMDD").fromNow()),h.appendChild(b),h.appendChild(g),h.appendChild(S),h.appendChild(q),w.appendChild(N),m.appendChild(y),m.appendChild(h),m.appendChild(w),f.appendChild(m),f}(t,{socket:c,userID:d});o.appendChild(e)})),document.querySelector("section").appendChild(l),document.querySelector("section").appendChild(i),document.querySelector("section").appendChild(o)}function d(t,e){var r=e.socket,n=e.userID;t.preventDefault();var o=document.querySelector("main");return t.target.classList.add("disabled"),t.target.innerText="Carregando",function(t,e){var r=t.socket,n=t.userID,o=function(t){var e=t.userID,r=t.socket,n=a.Node("section",[{attr:"class",val:"mb-5"}]),o=a.Node("form",[{attr:"id",val:"form-edit-panel"},{attr:"class",val:"mb-3"}]),i=a.Node("div",[{attr:"class",val:"row"}]),l=function(){return a.Node("div",[{attr:"class",val:"col-sm-6"}])},d=function(){return a.Node("div",[{attr:"class",val:"form-group"}])},u=function(t){return a.Node("label",[{attr:"for",val:t},{attr:"class",val:"mt-4 mb-1"}])},s=function(t){return a.Node("input",[{attr:"autocomplete",val:"off"},{attr:"type",val:"text"},{attr:"class",val:"form-control"},{attr:"id",val:t},{attr:"placeholder",val:t}])},p=d(),v=d(),f=l(),m=l(),y=u("title"),h=u("id"),b=a.Node("p",[{attr:"class",val:"h4 mb-3 mt-3"}]),g=a.Node("a",[{attr:"class",val:"text-decoration-underline fw-light"},{attr:"href",val:"/system"}]),S=a.Node("button",[{attr:"class",val:"btn btn-primary mt-3"}]);return S.innerText="Pesquisar",g.innerText="Voltar",h.innerText="Por ID",y.innerText="Por título",p.appendChild(y),p.appendChild(s("title")),v.appendChild(h),v.appendChild(s("id")),f.appendChild(p),m.appendChild(v),i.appendChild(f),i.appendChild(m),o.appendChild(i),o.appendChild(S),b.innerText="Pesquise o post que quer editar por título ou id:",n.appendChild(g),n.appendChild(b),n.appendChild(o),o.addEventListener("submit",(function(t){return function(t,e){var r=t.form,n=e.socket,a=e.userID;t.event.preventDefault();var o=r.querySelector("#title"),i=r.querySelector("#id");if(!i.value&&!o.value)return o.focus();var l=o.value?String(o.value):null,c=i.value?String(i.value):null;return n.emit("search post by id or title",{id:c,title:l,userID:a})}({event:t,form:o},{socket:r,userID:e})})),r.on("error",(function(t){if(t!==e)return console.log("Socket error");titleForm.style.borderColor="#f00",idForm.style.borderColor="#f00"})),r.on("found article",(function(t){if(t.user!==e)return console.log("Socket error");!function(t,e){var r=t.articles,n=e.socket,o=e.userID;document.querySelector("section").innerHTML="";var i=a.Node("div"),l=a.Node("a",[{attr:"class",val:"text-decoration-underline fw-light"},{attr:"href",val:"/system"}]);l.innerText="Voltar",i.appendChild(l);var d=a.Node("div",[{attr:"class",val:"row row-cols-1 row-cols-md-3 g-4"}]),u=a.Node("p",[{attr:"class",val:"h4 mb-3"}]);u.innerText="Posts encontrados: ".concat(r.length),c({elms:r,articles:[],editPanelHtml:d,p:u,panelHtml:i},{socket:n,userID:o})}({articles:t.at},{socket:r,userID:e})})),n}({socket:r,userID:n}),i=a.Node("div",[{attr:"class",val:"row row-cols-1 row-cols-md-3 g-4"}]),l=a.Node("p",[{attr:"class",val:"h4 mb-3"}]);l.innerText="Veja os últimos posts:";var d=[];r.emit("req-articles",{num:10,userID:n}),r.on("re-articles",(function(t){return n!==t.userID?console.log("Socket error"):(c({elms:t.e,articles:d,editPanelHtml:i,p:l,panelHtml:o},{socket:r,userID:n}),e.classList.toggle("d-none"))}))}({socket:r,userID:n},o)}function u(t,e){var r=e.socket,n=e.userID;t.preventDefault();var o=document.querySelector("main");return t.target.classList.add("disabled"),t.target.innerText="Carregando",function(t,e){var r=t.socket,n=t.userID;r.emit("req-articles",{num:10,userID:n}),r.on("re-articles",(function(t){if(t.userID!==n)return console.log("Socket error");!function(t){var e=t.main,r=t.arts,n=function(t){return a.Node("div",[{attr:"class",val:t}])},o=function(){return a.Node("h5",[{attr:"class",val:"card-title"}])},i=function(){return a.Node("small",[{attr:"class",val:"text-muted"}])},l=n(),c=a.Node("a",[{attr:"class",val:"text-decoration-underline fw-light"},{attr:"href",val:"/system"}]);c.innerText="Retornar",l.appendChild(c);var d=o();d.innerText="Veja as estatísticas dos posts em níveis (1 é o mais baixo):",l.appendChild(d);var u=n("row row-cols-1 row-cols-md-3 g-4 mt-2");r.forEach((function(t){var e,r=n("col"),l=n("card h-100"),c=(e=t.primary,a.Node("img",[{attr:"src",val:e},{attr:"class",val:"card-img-top"}])),d=n("card-body"),s=n("card-footer"),p=o(),v=i(),f=i(),m=a.Node("p",[{attr:"class",val:"fw-light"}]);p.innerText=t.title,v.innerText=t._id,f.innerText="Last update ".concat(moment(t.createdAt,"YYYYMMDD").fromNow()),m.innerText="Nível da Estatística: +".concat(t.statistics),d.appendChild(p),d.appendChild(m),d.appendChild(v),s.appendChild(f),l.appendChild(c),l.appendChild(d),l.appendChild(s),r.appendChild(l),u.appendChild(r)})),e.innerHTML="",l.appendChild(u),e.appendChild(l)}({arts:t.e,main:e})}))}({socket:r,userID:n},o)}function s(t){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function p(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var v=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.body=e,this.errors=[],this.content=null}var e,r;return e=t,(r=[{key:"gap",value:function(){for(var t in this.body)"INPUT"===this.body[t].nodeName?this.cleanInp(t):"TEXTAREA"===this.body[t].nodeName&&this.cleanTex(t);if(!(this.errors.length>0))return this.body&&this.errors.length<1?this.content=!0:void 0;this.body=null}},{key:"replacing",value:function(){var t=this;for(var e in this.body)if("TEXTAREA"===this.body[e].nodeName){var r=function(){t.body[e].value=t.body[e].value.replace(/script/gi,'<span style="background: #000; color: #500">censored</span>');var r=t.body[e].value.match(/(https?:\/\/[^\s]+)/g);if(!r)return{v:void 0};for(var n in r=r.filter((function(t,e){return r.indexOf(t)===e}))){var a=new RegExp(r[n],"g");t.body[e].value=t.body[e].value.replace(a,'<a target="_blank" href="'.concat(r[n],'">').concat(r[n],"</a>"))}}();if("object"===s(r))return r.v}}},{key:"cleanInp",value:function(t){this.body[t].value.length>100&&this.errors.push("".concat(this.body[t].getAttribute("name")," está irregular")),"string"!=typeof this.body[t].value&&this.errors.push("falha no sistema, input irregular"),this.body[t].value.length<5&&this.errors.push("input ".concat(this.body[t].getAttribute("name")," está incompleto/pequeno"))}},{key:"cleanTex",value:function(t){this.body[t].value.length<400&&"ending"!==this.body[t].getAttribute("id")&&this.errors.push("".concat(this.body[t].getAttribute("name")," está incompleto")),"string"!=typeof this.body[t].value&&this.errors.push("falha no sistema, textarea irregular"),"ending"===this.body[t].getAttribute("id")&&this.body[t].value.length<100&&this.errors.push("ending pequena demais")}}])&&p(e.prototype,r),t}();function f(t){return function(t){if(Array.isArray(t))return y(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||m(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function m(t,e){if(t){if("string"==typeof t)return y(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?y(t,e):void 0}}function y(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var h=document.querySelector("#render-article"),b=0;function g(){var t=h.querySelector("#contents").querySelectorAll("textarea"),e=h.querySelector("#contents").querySelectorAll("input"),r=new v(f(e).concat(f(t)));return r.gap(),r.errors.length>0?(h.querySelector("#danger-help").innerText=r.errors.join("; "),setTimeout((function(){return h.querySelector("#add").classList.remove("bg-danger")}),5e3),h.querySelector("#add").classList.add("bg-danger"),!1):(h.querySelector("#add").classList.remove("bg-danger"),h.querySelector("#danger-help").innerText=r.errors.join("; "),h.querySelector("#add").classList.add("bg-success"),!0)}function S(t,e){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=function(t,e){if(t){if("string"==typeof t)return C(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?C(t,e):void 0}}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var n=0,a=function(){};return{s:a,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,i=!0,l=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return i=t.done,t},e:function(t){l=!0,o=t},f:function(){try{i||null==r.return||r.return()}finally{if(l)throw o}}}}function C(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var x=["desenvolvimento","artigo-infinity","dia-a-dia","mundo-geek"];function q(t){var e=a.Node("div",[{attr:"class",val:"col-sm-4 col-card"}]),r=a.Node("div",[{attr:"class",val:"card"}]),n=a.Node("img",[{attr:"class",val:"card-img-top"},{attr:"src",val:t.primary}]);r.appendChild(n);var o=a.Node("div",[{attr:"class",val:"card-body"}]),i=a.Node("h5",[{attr:"class",val:"card-title"}]);i.innerText=t.title,o.appendChild(i);var l=a.Node("p",[{attr:"class",val:"card-text"}]);l.innerText=t.description,o.appendChild(l);var c=a.Node("a",[{attr:"class",val:"btn btn-primary mt-2 mb-2"},{attr:"href",val:"/post=".concat(t._id)}]);c.innerText="Acessar post",o.appendChild(c);var d=a.Node("p",[{attr:"class",val:"card-text"}]),u=a.Node("small",[{attr:"class",val:"text-muted"}]),s=new Date(t.createdAt);return u.innerText="Last update ".concat(moment(s,"YYYYMMDD").fromNow()),d.appendChild(u),o.appendChild(d),r.appendChild(o),e.appendChild(r),e}var A=function(t){var e=t.src,r=t.text,n=t.title;if(!e&&!r&&!n)return null;var o=a.Node("section"),i=a.Node("img",[{attr:"src",val:e},{attr:"class",val:"mx-auto w-75 d-block mb-5 mt-5"}]),l=a.Node("p",[{attr:"class",val:"h2 mb-4 text-break"}]);l.innerText=String(n);var c=a.Node("p");return c.innerText=String(r),o.appendChild(l),o.appendChild(i),o.appendChild(c),o};function w(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var N,I,k,T,D,E=io(),j=(N="_"+Math.random().toString(36).substr(2,9)+Math.random().toFixed(5),"".concat(N.replace(".","&"))),L=document.querySelector("#home-header"),_=document.querySelector("form"),M=document.querySelector("#_id"),O=document.querySelector("#system-edition"),Y=document.querySelector("#system-email-render"),P=document.querySelector("#posts-category");M&&M.value===window.location.pathname.split("=")[1]&&function(t){var e=t.socket,r=t.userID,n=window.location.pathname.split("=")[1];e.emit("statistics",{pathname:n,userID:r}),e.emit("search",{id:n,userID:r}),e.on("re-article-by-id",(function(t){if(r!==t.userID)return console.log("Socket error");!function(t,e){var r=document.querySelector("main");if(e===t._id){for(var n=a.Node("div"),o=t.h21,i=t.h22,l=t.h23,c=t.h24,d=t.h25,u=t.h3,s=t.img1,p=t.img2,v=t.img3,f=t.img4,m=t.img5,y=t.development1,h=t.development2,b=t.development3,g=t.development4,S=t.development5,C=t.ending,x=0,q=[[o,s,y],[i,p,h],[l,v,b],[c,f,g],[d,m,S]];x<q.length;x++){var w=q[x];if(w[0]||w[2]){var N=A({title:w[0],src:w[1],text:w[2]});n.appendChild(N)}}var I=A({title:u,text:C,src:window.location.pathname});I.querySelector("img").remove(),n.appendChild(I),r.querySelector("#read-more").addEventListener("click",(function(t){t.preventDefault(),t.target.parentElement.parentElement.remove(),r.appendChild(n)}))}}(t.e,n)}))}({userID:j,socket:E}),O&&function(t,e){var r=e.socket,n=e.userID;t.addEventListener("click",(function(t){return d(t,{socket:r,userID:n})})),document.querySelector("#system-statistics").addEventListener("click",(function(t){return u(t,{socket:r,userID:n})})),document.querySelector("#system-delete").addEventListener("click",(function(t){return d(t,{socket:r,userID:n})}))}(O,{socket:E,userID:j}),Y&&(I=document.querySelector("#form-email-render"),k=I.querySelector('input[name="_csrf"]').value,T=(D=I.querySelector("#hidden").querySelectorAll("input"),function(t){if(Array.isArray(t))return w(t)}(D)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(D)||function(t,e){if(t){if("string"==typeof t)return w(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?w(t,e):void 0}}(D)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map((function(t){return{type:t.getAttribute("name"),value:t.value}})),I.querySelector("button").addEventListener("click",(function(){return function(t){var e=t.csurf,r=t.values,n=t.event,o=a.Node("form",[{attr:"method",val:"POST"},{attr:"action",val:"/postmail"}]);r.forEach((function(t){var e=a.Node("input",[{attr:"name",val:t.type},{attr:"value",val:t.value}]);o.appendChild(e)}));var i=a.Node("input",[{attr:"name",val:"to"}]),l=a.Node("input",[{attr:"name",val:"subject"}]),c=a.Node("textarea",[{attr:"name",val:"html"}]),d=a.Node("input",[{attr:"type",val:"hidden"},{attr:"name",val:"_csrf"}]);if(i.setAttribute("value","".concat(n.querySelector("#to").value)),l.setAttribute("value","".concat(n.querySelector("#subject").value)),c){var u='<span style="width:100%;color:#000;">\n\t\t\t<div style="text-align: center;\n\t\t    padding: 1rem;">\n\t\t    \t<p>Escrito por:</p>\n\t\t\t\t<img style="height:60px;border-radius:100%;border:3px solid #000;" \n\t\t\t\tsrc="'.concat(o.querySelector('input[name="_img"]').value,'">\n\t\t\t\t<p>').concat(o.querySelector('input[name="_name"]').value,'</p>\n\t\t\t\t<p>CEO | Desenvolvedor | Server-side | Client-side | GI</p>\n\t\t\t\t<p><strong>Geek Infinity</strong></p>\n\t\t\t\t<p><strong>Brasil</strong></p>\n\t\t\t</div>\n\t\t\t<div style="text-align:center;padding:0 0 1rem 0;">\n\t\t\t\t<div>\n\t\t\t\t\t<a target="_blank" href="').concat(o.querySelector('input[name="_github"]').value,'">Github</a>\n\t\t\t\t</div>\n\t\t\t\t<div>\n\t\t\t\t\t<a target="_blank" href="').concat(o.querySelector('input[name="_twitter"]').value,'">Twitter</a>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div style="text-align:center;padding:0 0 1rem 0;">\n\t\t\t\t<p>Para: <a href="mailto:').concat(i.value,'">').concat(i.value,"</a></p>\n\t\t\t</div>\n\t\t</span>");c.innerText='\n\t\t<span>\n\t\t\t<div style="background:#f8f9fa;color:#000;min-height:100vh;border-radius: 1rem;">\n\t\t\t\t'.concat('<span style="display:block;\n\t    \tpadding: 1rem 0 1rem 0;\n\t    \twidth: 100%;\n\t    \tcolor: #000;\n\t    \ttext-align: center;">\n\t\t\t<h1>GI - Geek Infinity</h1>\n\t\t</span>','\n\t\t\t\t<div style="padding:.5rem;">\n\t\t\t\t\t<div style="border-radius:.5rem;text-align:center;padding:1rem;color:#000;">\n\t\t\t\t\t\t').concat(n.querySelector("#html-text").value,"\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t").concat(u,"\n\t\t\t</div>\n\t\t</span>")}d.setAttribute("value",e),o.appendChild(i),o.appendChild(l),o.appendChild(c),o.appendChild(d);var s=a.Node("div",[{attr:"class",val:"d-none"}]);s.appendChild(o),document.body.appendChild(s),o.submit()}({csurf:k,values:T,event:I})}))),P&&function(t){var e=t.userID,r=t.socket,n=document.querySelector("#posts-category"),o=window.location.pathname.split("/posts=")[1];r.on("post find by category",(function(t){var r=t.posts;if(t.id!==e)return console.log("Socket error");!function(t){var e=t.posts,r=t.main;if(!e||e.length<1)return function(t){t.querySelector("h3").innerText="Aconteceu algum erro.",t.appendChild(a.Node("a",[{attr:"class",val:"nav-link"},{attr:"href",val:"/"}])),t.querySelector("a").innerText="Retornar"}(r);var n,o=a.Node("div",[{attr:"class",val:"card-group row"}]),i=S(e);try{for(i.s();!(n=i.n()).done;){var l=n.value;o.appendChild(q(l))}}catch(t){i.e(t)}finally{i.f()}r.innerHTML="",r.appendChild(a.Node("section",[{attr:"class",val:"container"}])),r.querySelector("section").appendChild(o)}({main:n,posts:r})}));var i,l=S(x);try{for(l.s();!(i=l.n()).done;){var c=i.value;c===o&&r.emit("search by category",{key:c,userID:e})}}catch(t){l.e(t)}finally{l.f()}}({socket:E,userID:j}),L&&(E.emit("req-articles",{userID:j,num:null}),E.on("re-articles",(function(e){if(e.userID!==j)return console.log("Socket error");var r=[];e.e.forEach((function(t){var e=t.title,n=t.description,a=t.primary,o=t.createdAt,i=t._id;r.push({title:e,description:n,primary:a,createdAt:o,_id:i})})),function(e,r){var n=document.querySelector("#row"),a=document.querySelector("#featured"),o=[];if(e.forEach((function(t){o.length<1&&o.push(t),t._id>o[0]._id&&(o[0]=t)})),!0===function(t,e){return t.children[0].querySelector("img").setAttribute("src",e[0].primary),t.children[0].querySelector(".card-title").innerText=e[0].title,t.children[0].querySelector(".card-text").innerText=e[0].description,t.children[0].querySelector("a").setAttribute("href","/post=".concat(e[0]._id)),!0}(n,o)){var i=t(n.children[1].querySelectorAll(".col-sm-6")).concat(t(a.querySelectorAll(".card"))),l=0;i.forEach((function(t){if(l>=e.length&&(l=0),e[l]===o[0]&&(l+=1),t.querySelector(".card-title").innerText=e[l].title,t.querySelector(".card-text").innerText=e[l].description,t.querySelector("a").setAttribute("href","/post=".concat(e[l]._id)),t.querySelector("small")){var r=new Date(e[l].createdAt);t.querySelector("small").innerText=moment(r,"YYYYMMDD").fromNow()}l+=1}))}}(r)}))),_&&"render-article"!==_.getAttribute("id")?function(){var t,e=function(t,e){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=o(t))){r&&(t=r);var n=0,a=function(){};return{s:a,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,l=!0,c=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return l=t.done,t},e:function(t){c=!0,i=t},f:function(){try{l||null==r.return||r.return()}finally{if(c)throw i}}}}(document.querySelectorAll("form"));try{for(e.s();!(t=e.n()).done;)t.value.addEventListener("submit",l)}catch(t){e.e(t)}finally{e.f()}}():_&&"render-article"===_.getAttribute("id")&&(h.querySelector("#add").addEventListener("click",g),h.querySelector("#plus").addEventListener("click",(function(t){if(t.preventDefault(),confirm('Será criado um novo parágrafo. Clique em "OK" para confirmar.')){b+=1;var e=h.querySelector("#paragraph"),r=document.createElement("div");return r.appendChild(function(t){var e=a.Node("div",[{attr:"class",val:"row mt-5"}]),r=a.Node("div",[{attr:"class",val:"col-sm-6"}]),n=a.Node("div",[{attr:"class",val:"form-group"}]);n.appendChild(a.Node("input",[{attr:"autocomplete",val:"off"},{attr:"name",val:"h2".concat(t)},{attr:"aria-describedby",val:"Título do Parágrafo"},{attr:"required",val:""},{attr:"id",val:"h2".concat(t)},{attr:"type",val:"text"},{attr:"class",val:"form-control mb-2"},{attr:"placeholder",val:"Desenvolvimento - Subtítulo"},{attr:"maxlength",val:"70"}])),r.appendChild(n),e.appendChild(r);var o=a.Node("div",[{attr:"class",val:"col-sm-6"}]),i=a.Node("div",[{attr:"class",val:"form-group"}]);i.appendChild(a.Node("input",[{attr:"autocomplete",val:"off"},{attr:"name",val:"img".concat(t)},{attr:"aria-describedby",val:"Link para imagem"},{attr:"required",val:""},{attr:"id",val:"img".concat(t)},{attr:"type",val:"text"},{attr:"class",val:"form-control mb-2"},{attr:"placeholder",val:"Link para imagem"},{attr:"maxlength",val:"100"}])),o.appendChild(i),e.appendChild(o);var l=a.Node("div",[{attr:"class",val:"form-floating"}]);return l.appendChild(a.Node("textarea",[{attr:"minlength",val:"400"},{attr:"required",val:""},{attr:"style",val:"height: 300px;"},{attr:"class",val:"form-control"},{attr:"placeholder",val:"Leave a comment here"},{attr:"id",val:"development".concat(t)},{attr:"name",val:"development".concat(t)}])),l.appendChild(a.Node("label",[{attr:"for",val:"development".concat(t)}])),e.appendChild(l),e}(b)),e.appendChild(r),setTimeout((function(){return e.querySelector("#h2".concat(String(b))).focus()}),100),5===b?h.querySelector("#plus").setAttribute("class","nav-link disabled"):void 0}})),h.addEventListener("submit",(function(t){t.preventDefault();var e=g(),r=function(t){var e,r=function(t){for(var e in t){if(""===t[e].value)return t[e].focus();"string"!=typeof t[e].value||t[e].value.length>100?(t[e].focus(),t[e]=null):"primary"===t[e].getAttribute("name")&&(t[e].value.startsWith("https://")||(t[e].focus(),t[e]=null))}return t}(f(t.querySelectorAll("input"))),n=function(t,e){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=m(t))){r&&(t=r);var n=0,a=function(){};return{s:a,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,i=!0,l=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return i=t.done,t},e:function(t){l=!0,o=t},f:function(){try{i||null==r.return||r.return()}finally{if(l)throw o}}}}(r);try{for(n.s();!(e=n.n()).done;)if(null===e.value)return null}catch(t){n.e(t)}finally{n.f()}return r}(t.target);if(e&&r){var n=h.querySelector("#contents").querySelectorAll("textarea"),a=h.querySelector("#contents").querySelectorAll("input");return new v(f(a).concat(f(n))).replacing(),t.target.submit()}h.querySelector("button").classList.add("bg-danger"),setTimeout((function(){return h.querySelector("button").classList.remove("bg-danger")}),5e3)})))})();
//# sourceMappingURL=bundle.js.map