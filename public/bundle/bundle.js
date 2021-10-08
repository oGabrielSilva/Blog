(()=>{"use strict";function t(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function e(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var r=function(){function r(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,r)}var n,a;return n=r,a=[{key:"Node",value:function(e,r){var n=document.createElement(e);if(!r)return n;var a,o=function(e,r){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,r){if(e){if("string"==typeof e)return t(e,r);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?t(e,r):void 0}}(e))||r&&e&&"number"==typeof e.length){n&&(e=n);var a=0,o=function(){};return{s:o,n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,l=!0,c=!1;return{s:function(){n=n.call(e)},n:function(){var t=n.next();return l=t.done,t},e:function(t){c=!0,i=t},f:function(){try{l||null==n.return||n.return()}finally{if(c)throw i}}}}(r);try{for(o.s();!(a=o.n()).done;){var i=a.value;n.setAttribute(i.attr,i.val)}}catch(t){o.e(t)}finally{o.f()}return n}}],null&&e(n.prototype,null),a&&e(n,a),r}(),n=function(t){var e=t.src,n=t.text,a=t.title;if(!e&&!n&&!a)return null;var o=r.Node("section"),i=r.Node("img",[{attr:"src",val:e},{attr:"class",val:"mx-auto w-75 d-block mb-5 mt-5"}]),l=r.Node("p",[{attr:"class",val:"h2 mb-4 text-break"}]);l.innerText=String(a);var c=r.Node("p");return c.innerText=String(n),o.appendChild(l),o.appendChild(i),o.appendChild(c),o};function a(t){return function(t){if(Array.isArray(t))return o(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(t){if("string"==typeof t)return o(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?o(t,e):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function i(t,e){if(t){if("string"==typeof t)return l(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?l(t,e):void 0}}function l(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var c=function(t){t.preventDefault();var e,r,n=t.target,a=!(!(e=function(t){var e=t,r=[];for(var n in e)if(e[n].value.length<=0||"string"!=typeof e[n].value){r.push("Algum item foi mal digitado"),e=null;break}return{items:e,errors:r}}(function(t){if(Array.isArray(t))return l(t)}(r=n.querySelectorAll("input"))||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(r)||i(r)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}())).items||0!==e.errors.length)||e.errors;!0===a?t.target.submit():console.log(a)};function d(t,e){var n=t.elms,a=t.articles,o=t.editPanelHtml,i=t.p,l=t.panelHtml;n.forEach((function(t){var e=t.title,r=t.description,n=t.primary,o=t.createdAt,i=t._id;a.push({title:e,description:r,primary:n,_id:i,createdAt:o})})),a.forEach((function(t){var n=function(t,e){var n,a=t.title,o=t.primary,i=t.description,l=t._id,c=t.createdAt,d=function(t){return r.Node("div",[{attr:"class",val:t}])},u=function(t){return r.Node("a",[{attr:"href",val:t},{attr:"target",val:"_blank"},{attr:"class",val:"btn btn-primary m-1"}])},s=function(){return r.Node("small",[{attr:"class",val:"text-muted"}])},p=d("col"),v=d("card h-100"),f=(n=o,r.Node("img",[{attr:"src",val:n},{attr:"class",val:"card-img-top"}])),m=d("card-body"),y=r.Node("h5",[{attr:"class",val:"card-title"}]),h=r.Node("p",[{attr:"class",val:"card-text"}]),b=s(),g=u("/post=".concat(l)),S=u("/system.edition=".concat(l)),q=d(""),C=u("#");g.innerText="Acessar",S.innerText="Editar",C.innerText="Deletar",C.setAttribute("class","btn btn-danger m-1"),C.setAttribute("target","_self"),C.addEventListener("click",(function(t){return function(t,e,n){t.preventDefault(),document.body.appendChild(function(t){var e=window.innerWidth<768?80:50,n=r.Node("div",[{attr:"style",val:"height: 100vh; width: 100vw; position: fixed; top: 0; left: 0;"},{attr:"id",val:"div-delete-a-post"}]),a=r.Node("section",[{attr:"class",val:"border rounded shadow-sm p-3 d-flex overflow-auto bg-light justify-content-center flex-column"},{attr:"style",val:"min-height: 40vh; width: ".concat(e,"vw; position: fixed; \n\t\ttop: 50%; right: 50%; transform: translate(50%, -50%);")}]),o=r.Node("div",[{attr:"class",val:"row"}]),i=r.Node("div",[{attr:"class",val:"col text-center"}]);i.appendChild(r.Node("p",[{attr:"class",val:"h5 p-title-1"}])),i.appendChild(r.Node("p",[{attr:"class",val:"fw-light p-text-1"}])),i.querySelector(".p-title-1").innerText="Deletar post",i.querySelector(".p-text-1").innerText="Você realmente deseja remover o post ".concat(t,"? \n\tApós remover, todos os dados serão perdidos. Clique para confirmar.");var l=r.Node("div",[{attr:"class",val:"row"}]),c=r.Node("div",[{attr:"class",val:"col text-center"}]);return c.appendChild(r.Node("button",[{attr:"class",val:"btn btn-success m-1 b-confirm-1"}])),c.appendChild(r.Node("button",[{attr:"class",val:"btn btn-danger m-1 b-danger-1"}])),c.querySelector(".b-confirm-1").innerText="Excluir",c.querySelector(".b-danger-1").innerText="Manter",o.appendChild(i),l.appendChild(c),a.appendChild(o),a.appendChild(l),n.appendChild(a),n}(e)),document.body.querySelector("#div-delete-a-post").addEventListener("click",(function(r){var a=document.querySelector("#div-delete-a-post"),o=document.body.querySelector(".b-confirm-1"),i=document.body.querySelector(".b-danger-1"),l=r.target;return l===o?(n.on("post deleted",(function(){return console.log("Post deletado:",e),t.target.parentElement.parentElement.parentElement.parentElement.remove(),a.remove()})),n.emit("delete a post",e)):l===i||l===a?a.remove():void 0}))}(t,l,e)})),q.appendChild(g),q.appendChild(S),q.appendChild(C);var x=d("card-footer"),A=s();return y.innerText=a,h.innerText=i,b.innerText="ID: ".concat(l),A.innerText="Last update ".concat(moment(c,"YYYYMMDD").fromNow()),m.appendChild(y),m.appendChild(h),m.appendChild(b),m.appendChild(q),x.appendChild(A),v.appendChild(f),v.appendChild(m),v.appendChild(x),p.appendChild(v),p}(t,e);o.appendChild(n)})),document.querySelector("section").appendChild(l),document.querySelector("section").appendChild(i),document.querySelector("section").appendChild(o)}function u(t,e){t.preventDefault();var n=document.querySelector("main");return t.target.classList.add("disabled"),t.target.innerText="Carregando",function(t,e){var n=function(t){var e=r.Node("section",[{attr:"class",val:"mb-5"}]),n=r.Node("form",[{attr:"id",val:"form-edit-panel"},{attr:"class",val:"mb-3"}]),a=r.Node("div",[{attr:"class",val:"row"}]),o=function(){return r.Node("div",[{attr:"class",val:"col-sm-6"}])},i=function(){return r.Node("div",[{attr:"class",val:"form-group"}])},l=function(t){return r.Node("label",[{attr:"for",val:t},{attr:"class",val:"mt-4 mb-1"}])},c=function(t){return r.Node("input",[{attr:"autocomplete",val:"off"},{attr:"type",val:"text"},{attr:"class",val:"form-control"},{attr:"id",val:t},{attr:"placeholder",val:t}])},u=i(),s=i(),p=o(),v=o(),f=l("title"),m=l("id"),y=r.Node("p",[{attr:"class",val:"h4 mb-3 mt-3"}]),h=r.Node("a",[{attr:"class",val:"text-decoration-underline fw-light"},{attr:"href",val:"/system"}]),b=r.Node("button",[{attr:"class",val:"btn btn-primary mt-3"}]);return b.innerText="Pesquisar",h.innerText="Voltar",m.innerText="Por ID",f.innerText="Por título",u.appendChild(f),u.appendChild(c("title")),s.appendChild(m),s.appendChild(c("id")),p.appendChild(u),v.appendChild(s),a.appendChild(p),a.appendChild(v),n.appendChild(a),n.appendChild(b),y.innerText="Pesquise o post que quer editar por título ou id:",e.appendChild(h),e.appendChild(y),e.appendChild(n),n.addEventListener("submit",(function(e){return function(t,e){var r=t.form;t.event.preventDefault();var n=r.querySelector("#title"),a=r.querySelector("#id");if(!a.value&&!n.value)return n.focus();var o=n.value?String(n.value):null,i=a.value?String(a.value):null;return e.emit("search post by id or title",{id:i,title:o})}({event:e,form:n},t)})),t.on("error",(function(){titleForm.style.borderColor="#f00",idForm.style.borderColor="#f00"})),t.on("found article",(function(e){return function(t,e){var n=t.articles;document.querySelector("section").innerHTML="";var a=r.Node("div"),o=r.Node("a",[{attr:"class",val:"text-decoration-underline fw-light"},{attr:"href",val:"/system"}]);o.innerText="Voltar",a.appendChild(o);var i=r.Node("div",[{attr:"class",val:"row row-cols-1 row-cols-md-3 g-4"}]),l=r.Node("p",[{attr:"class",val:"h4 mb-3"}]);l.innerText="Posts encontrados: ".concat(n.length),d({elms:n,articles:[],editPanelHtml:i,p:l,panelHtml:a},e)}({articles:e},t)})),e}(t),a=r.Node("div",[{attr:"class",val:"row row-cols-1 row-cols-md-3 g-4"}]),o=r.Node("p",[{attr:"class",val:"h4 mb-3"}]);o.innerText="Veja os últimos posts:";var i=[];t.emit("req-articles"),t.on("re-articles",(function(r){return d({elms:r,articles:i,editPanelHtml:a,p:o,panelHtml:n},t),e.classList.toggle("d-none")}))}(e,n)}function s(t,e){t.preventDefault();var n=document.querySelector("main");return t.target.classList.add("disabled"),t.target.innerText="Carregando",function(t,e){t.emit("req-articles",10),t.on("re-articles",(function(t){return function(t){var e=t.main,n=t.arts,a=function(t){return r.Node("div",[{attr:"class",val:t}])},o=function(){return r.Node("h5",[{attr:"class",val:"card-title"}])},i=function(){return r.Node("small",[{attr:"class",val:"text-muted"}])},l=a(),c=r.Node("a",[{attr:"class",val:"text-decoration-underline fw-light"},{attr:"href",val:"/system"}]);c.innerText="Retornar",l.appendChild(c);var d=o();d.innerText="Veja as estatísticas dos posts em níveis (1 é o mais baixo):",l.appendChild(d);var u=a("row row-cols-1 row-cols-md-3 g-4 mt-2");return n.forEach((function(t){var e,n=a("col"),l=a("card h-100"),c=(e=t.primary,r.Node("img",[{attr:"src",val:e},{attr:"class",val:"card-img-top"}])),d=a("card-body"),s=a("card-footer"),p=o(),v=i(),f=i(),m=r.Node("p",[{attr:"class",val:"fw-light"}]);p.innerText=t.title,v.innerText=t._id,f.innerText="Last update ".concat(moment(t.createdAt,"YYYYMMDD").fromNow()),m.innerText="Nível da Estatística: +".concat(t.statistics),d.appendChild(p),d.appendChild(m),d.appendChild(v),s.appendChild(f),l.appendChild(c),l.appendChild(d),l.appendChild(s),n.appendChild(l),u.appendChild(n)})),e.innerHTML="",l.appendChild(u),e.appendChild(l)}({arts:t,main:e})}))}(e,n)}function p(t){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function v(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var f=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.body=e,this.errors=[],this.content=null}var e,r;return e=t,(r=[{key:"gap",value:function(){for(var t in this.body)"INPUT"===this.body[t].nodeName?this.cleanInp(t):"TEXTAREA"===this.body[t].nodeName&&this.cleanTex(t);if(!(this.errors.length>0))return this.body&&this.errors.length<1?this.content=!0:void 0;this.body=null}},{key:"replacing",value:function(){var t=this;for(var e in this.body)if("TEXTAREA"===this.body[e].nodeName){var r=function(){t.body[e].value=t.body[e].value.replace(/script/gi,'<span style="background: #000; color: #500">censored</span>');var r=t.body[e].value.match(/(https?:\/\/[^\s]+)/g);if(!r)return{v:void 0};for(var n in r=r.filter((function(t,e){return r.indexOf(t)===e}))){var a=new RegExp(r[n],"g");t.body[e].value=t.body[e].value.replace(a,'<a target="_blank" href="'.concat(r[n],'">').concat(r[n],"</a>"))}}();if("object"===p(r))return r.v}}},{key:"cleanInp",value:function(t){this.body[t].value.length>100&&this.errors.push("".concat(this.body[t].getAttribute("name")," está irregular")),"string"!=typeof this.body[t].value&&this.errors.push("falha no sistema, input irregular"),this.body[t].value.length<5&&this.errors.push("input ".concat(this.body[t].getAttribute("name")," está incompleto/pequeno"))}},{key:"cleanTex",value:function(t){this.body[t].value.length<400&&"ending"!==this.body[t].getAttribute("id")&&this.errors.push("".concat(this.body[t].getAttribute("name")," está incompleto")),"string"!=typeof this.body[t].value&&this.errors.push("falha no sistema, textarea irregular"),"ending"===this.body[t].getAttribute("id")&&this.body[t].value.length<100&&this.errors.push("ending pequena demais")}}])&&v(e.prototype,r),t}();function m(t){return function(t){if(Array.isArray(t))return h(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||y(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function y(t,e){if(t){if("string"==typeof t)return h(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?h(t,e):void 0}}function h(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var b=document.querySelector("#render-article"),g=0;function S(){var t=b.querySelector("#contents").querySelectorAll("textarea"),e=b.querySelector("#contents").querySelectorAll("input"),r=new f(m(e).concat(m(t)));return r.gap(),r.errors.length>0?(b.querySelector("#danger-help").innerText=r.errors.join("; "),setTimeout((function(){return b.querySelector("#add").classList.remove("bg-danger")}),5e3),b.querySelector("#add").classList.add("bg-danger"),!1):(b.querySelector("#add").classList.remove("bg-danger"),b.querySelector("#danger-help").innerText=r.errors.join("; "),b.querySelector("#add").classList.add("bg-success"),!0)}function q(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var C,x,A,w,N=io(),T=document.querySelector("#home-header"),E=document.querySelector("form"),k=document.querySelector("#_id"),j=document.querySelector("#system-edition"),I=document.querySelector("#system-email-render"),L=document.querySelector("#posts-category");k&&k.value===window.location.pathname.split("=")[1]&&function(t){var e=window.location.pathname.split("=")[1];t.emit("statistics",e),t.emit("search",e),t.on("re-article-by-id",(function(t){return function(t,e){var a=document.querySelector("main");if(e===t._id){for(var o=r.Node("div"),i=t.h21,l=t.h22,c=t.h23,d=t.h24,u=t.h25,s=t.h3,p=t.img1,v=t.img2,f=t.img3,m=t.img4,y=t.img5,h=t.development1,b=t.development2,g=t.development3,S=t.development4,q=t.development5,C=t.ending,x=0,A=[[i,p,h],[l,v,b],[c,f,g],[d,m,S],[u,y,q]];x<A.length;x++){var w=A[x];if(w[0]||w[2]){var N=n({title:w[0],src:w[1],text:w[2]});o.appendChild(N)}}var T=n({title:s,text:C,src:window.location.pathname});T.querySelector("img").remove(),o.appendChild(T),a.querySelector("#read-more").addEventListener("click",(function(t){t.preventDefault(),t.target.parentElement.parentElement.remove(),a.appendChild(o)}))}}(t,e)}))}(N),j&&function(t,e){t.addEventListener("click",(function(t){return u(t,e)})),document.querySelector("#system-statistics").addEventListener("click",(function(t){return s(t,e)})),document.querySelector("#system-delete").addEventListener("click",(function(t){return u(t,e)}))}(j,N),I&&(C=document.querySelector("#form-email-render"),x=C.querySelector('input[name="_csrf"]').value,A=(w=C.querySelector("#hidden").querySelectorAll("input"),function(t){if(Array.isArray(t))return q(t)}(w)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(w)||function(t,e){if(t){if("string"==typeof t)return q(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?q(t,e):void 0}}(w)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map((function(t){return{type:t.getAttribute("name"),value:t.value}})),C.querySelector("button").addEventListener("click",(function(){return function(t){var e=t.csurf,n=t.values,a=t.event,o=r.Node("form",[{attr:"method",val:"POST"},{attr:"action",val:"/postmail"}]);n.forEach((function(t){var e=r.Node("input",[{attr:"name",val:t.type},{attr:"value",val:t.value}]);o.appendChild(e)}));var i=r.Node("input",[{attr:"name",val:"to"}]),l=r.Node("input",[{attr:"name",val:"subject"}]),c=r.Node("textarea",[{attr:"name",val:"html"}]),d=r.Node("input",[{attr:"type",val:"hidden"},{attr:"name",val:"_csrf"}]);if(i.setAttribute("value","".concat(a.querySelector("#to").value)),l.setAttribute("value","".concat(a.querySelector("#subject").value)),c){var u='<span style="width:100%;color:#fff;">\n\t\t\t<div style="text-align: center;\n\t\t    padding: 1rem;">\n\t\t    \t<p>Escrito por:</p>\n\t\t\t\t<img style="height:60px;border-radius:100%;border:3px solid #fff;" \n\t\t\t\tsrc="'.concat(o.querySelector('input[name="_img"]').value,'">\n\t\t\t\t<p>').concat(o.querySelector('input[name="_name"]').value,'</p>\n\t\t\t\t<p>CEO | Desenvolvedor | Server-side | Client-side | GI</p>\n\t\t\t\t<p><strong>Geek Infinity</strong></p>\n\t\t\t\t<p><strong>Brasil</strong></p>\n\t\t\t</div>\n\t\t\t<div style="text-align:center;padding:0 0 1rem 0;">\n\t\t\t\t<div>\n\t\t\t\t\t<a target="_blank" href="').concat(o.querySelector('input[name="_github"]').value,'">Github</a>\n\t\t\t\t</div>\n\t\t\t\t<div>\n\t\t\t\t\t<a target="_blank" href="').concat(o.querySelector('input[name="_twitter"]').value,'">Twitter</a>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div style="text-align:center;padding:0 0 1rem 0;">\n\t\t\t\t<p>Para: <a href="mailto:').concat(i.value,'">').concat(i.value,"</a></p>\n\t\t\t</div>\n\t\t</span>");c.innerText='\n\t\t<span>\n\t\t\t<div style="background:linear-gradient(#0d1319, #08092d);color:#fff;min-height:100vh;border-radius: 1rem;">\n\t\t\t\t'.concat('<span style="display:block;\n\t    \tpadding: 1rem 0 1rem 0;\n\t    \twidth: 100%;\n\t    \tcolor: #fff;\n\t    \ttext-align: center;">\n\t\t\t<h1>GI - Geek Infinity</h1>\n\t\t</span>','\n\t\t\t\t<div style="padding:.5rem;">\n\t\t\t\t\t<div style="border-radius:.5rem;text-align:center;padding:1rem;color:#fff;">\n\t\t\t\t\t\t').concat(a.querySelector("#html-text").value,"\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t").concat(u,"\n\t\t\t</div>\n\t\t</span>")}d.setAttribute("value",e),o.appendChild(i),o.appendChild(l),o.appendChild(c),o.appendChild(d);var s=r.Node("div",[{attr:"class",val:"d-none"}]);s.appendChild(o),document.body.appendChild(s),o.submit()}({csurf:x,values:A,event:C})}))),L&&function(){var t=document.querySelector("#posts-category");setTimeout((function(){return t.querySelector("h3").remove()}),5e3)}(),T&&(N.emit("req-articles"),N.on("re-articles",(function(t){var e=[];t.forEach((function(t){var r=t.title,n=t.description,a=t.primary,o=t.createdAt,i=t._id;e.push({title:r,description:n,primary:a,createdAt:o,_id:i})})),function(t,e){var r=document.querySelector("#row"),n=document.querySelector("#featured"),o=[];if(t.forEach((function(t){o.length<1&&o.push(t),t._id>o[0]._id&&(o[0]=t)})),!0===function(t,e){return t.children[0].querySelector("img").setAttribute("src",e[0].primary),t.children[0].querySelector(".card-title").innerText=e[0].title,t.children[0].querySelector(".card-text").innerText=e[0].description,t.children[0].querySelector("a").setAttribute("href","/post=".concat(e[0]._id)),!0}(r,o)){var i=a(r.children[1].querySelectorAll(".col-sm-6")).concat(a(n.querySelectorAll(".card"))),l=0;i.forEach((function(e){if(l>=t.length&&(l=0),t[l]===o[0]&&(l+=1),e.querySelector(".card-title").innerText=t[l].title,e.querySelector(".card-text").innerText=t[l].description,e.querySelector("a").setAttribute("href","/post=".concat(t[l]._id)),e.querySelector("small")){var r=new Date(t[l].createdAt);e.querySelector("small").innerText=moment(r,"YYYYMMDD").fromNow()}l+=1}))}}(e)}))),E&&"render-article"!==E.getAttribute("id")?function(){var t,e=function(t,e){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=i(t))){r&&(t=r);var n=0,a=function(){};return{s:a,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,l=!0,c=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return l=t.done,t},e:function(t){c=!0,o=t},f:function(){try{l||null==r.return||r.return()}finally{if(c)throw o}}}}(document.querySelectorAll("form"));try{for(e.s();!(t=e.n()).done;)t.value.addEventListener("submit",c)}catch(t){e.e(t)}finally{e.f()}}():E&&"render-article"===E.getAttribute("id")&&(b.querySelector("#add").addEventListener("click",S),b.querySelector("#plus").addEventListener("click",(function(t){if(t.preventDefault(),confirm('Será criado um novo parágrafo. Clique em "OK" para confirmar.')){g+=1;var e=b.querySelector("#paragraph"),n=document.createElement("div");return n.appendChild(function(t){var e=r.Node("div",[{attr:"class",val:"row mt-5"}]),n=r.Node("div",[{attr:"class",val:"col-sm-6"}]),a=r.Node("div",[{attr:"class",val:"form-group"}]);a.appendChild(r.Node("input",[{attr:"autocomplete",val:"off"},{attr:"name",val:"h2".concat(t)},{attr:"aria-describedby",val:"Título do Parágrafo"},{attr:"required",val:""},{attr:"id",val:"h2".concat(t)},{attr:"type",val:"text"},{attr:"class",val:"form-control mb-2"},{attr:"placeholder",val:"Desenvolvimento - Subtítulo"},{attr:"maxlength",val:"70"}])),n.appendChild(a),e.appendChild(n);var o=r.Node("div",[{attr:"class",val:"col-sm-6"}]),i=r.Node("div",[{attr:"class",val:"form-group"}]);i.appendChild(r.Node("input",[{attr:"autocomplete",val:"off"},{attr:"name",val:"img".concat(t)},{attr:"aria-describedby",val:"Link para imagem"},{attr:"required",val:""},{attr:"id",val:"img".concat(t)},{attr:"type",val:"text"},{attr:"class",val:"form-control mb-2"},{attr:"placeholder",val:"Link para imagem"},{attr:"maxlength",val:"100"}])),o.appendChild(i),e.appendChild(o);var l=r.Node("div",[{attr:"class",val:"form-floating"}]);return l.appendChild(r.Node("textarea",[{attr:"minlength",val:"400"},{attr:"required",val:""},{attr:"style",val:"height: 300px;"},{attr:"class",val:"form-control"},{attr:"placeholder",val:"Leave a comment here"},{attr:"id",val:"development".concat(t)},{attr:"name",val:"development".concat(t)}])),l.appendChild(r.Node("label",[{attr:"for",val:"development".concat(t)}])),e.appendChild(l),e}(g)),e.appendChild(n),setTimeout((function(){return e.querySelector("#h2".concat(String(g))).focus()}),100),5===g?b.querySelector("#plus").setAttribute("class","nav-link disabled"):void 0}})),b.addEventListener("submit",(function(t){t.preventDefault();var e=S(),r=function(t){var e,r=function(t){for(var e in t){if(""===t[e].value)return t[e].focus();"string"!=typeof t[e].value||t[e].value.length>100?(t[e].focus(),t[e]=null):"primary"===t[e].getAttribute("name")&&(t[e].value.startsWith("https://")||(t[e].focus(),t[e]=null))}return t}(m(t.querySelectorAll("input"))),n=function(t,e){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=y(t))){r&&(t=r);var n=0,a=function(){};return{s:a,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,i=!0,l=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return i=t.done,t},e:function(t){l=!0,o=t},f:function(){try{i||null==r.return||r.return()}finally{if(l)throw o}}}}(r);try{for(n.s();!(e=n.n()).done;)if(null===e.value)return null}catch(t){n.e(t)}finally{n.f()}return r}(t.target);if(e&&r){var n=b.querySelector("#contents").querySelectorAll("textarea"),a=b.querySelector("#contents").querySelectorAll("input");return new f(m(a).concat(m(n))).replacing(),t.target.submit()}b.querySelector("button").classList.add("bg-danger"),setTimeout((function(){return b.querySelector("button").classList.remove("bg-danger")}),5e3)})))})();
//# sourceMappingURL=bundle.js.map