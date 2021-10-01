(()=>{"use strict";function e(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function t(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var r=function(){function r(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,r)}var n,a;return n=r,a=[{key:"Node",value:function(t,r){var n=document.createElement(t);if(!r)return n;var a,o=function(t,r){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,r){if(t){if("string"==typeof t)return e(t,r);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?e(t,r):void 0}}(t))||r&&t&&"number"==typeof t.length){n&&(t=n);var a=0,o=function(){};return{s:o,n:function(){return a>=t.length?{done:!0}:{done:!1,value:t[a++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,l=!0,c=!1;return{s:function(){n=n.call(t)},n:function(){var e=n.next();return l=e.done,e},e:function(e){c=!0,i=e},f:function(){try{l||null==n.return||n.return()}finally{if(c)throw i}}}}(r);try{for(o.s();!(a=o.n()).done;){var i=a.value;n.setAttribute(i.attr,i.val)}}catch(e){o.e(e)}finally{o.f()}return n}}],null&&t(n.prototype,null),a&&t(n,a),r}(),n=function(e){var t=e.src,n=e.text,a=e.title;if(!t&&!n&&!a)return null;var o=r.Node("section"),i=r.Node("img",[{attr:"src",val:t},{attr:"class",val:"mx-auto w-75 d-block mb-5 mt-5"}]),l=r.Node("p",[{attr:"class",val:"h2 mb-4 text-break"}]);l.innerText=String(a);var c=r.Node("p");return c.innerText=String(n),o.appendChild(l),o.appendChild(i),o.appendChild(c),o};function a(e){return function(e){if(Array.isArray(e))return o(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return o(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?o(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function i(e,t){if(e){if("string"==typeof e)return l(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?l(e,t):void 0}}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var c=function(e){e.preventDefault();var t,r,n=e.target,a=!(!(t=function(e){var t=e,r=[];for(var n in t)if(t[n].value.length<=0||"string"!=typeof t[n].value){r.push("Algum item foi mal digitado"),t=null;break}return{items:t,errors:r}}(function(e){if(Array.isArray(e))return l(e)}(r=n.querySelectorAll("input"))||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(r)||i(r)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}())).items||0!==t.errors.length)||t.errors;!0===a?e.target.submit():console.log(a)};function d(e,t){var n=e.elms,a=e.articles,o=e.editPanelHtml,i=e.p,l=e.panelHtml;n.forEach((function(e){var t=e.title,r=e.description,n=e.primary,o=e.createdAt,i=e._id;a.push({title:t,description:r,primary:n,_id:i,createdAt:o})})),a.forEach((function(e){var n=function(e,t){var n,a=e.title,o=e.primary,i=e.description,l=e._id,c=e.createdAt,d=function(e){return r.Node("div",[{attr:"class",val:e}])},u=function(e){return r.Node("a",[{attr:"href",val:e},{attr:"target",val:"_blank"},{attr:"class",val:"btn btn-primary m-1"}])},s=function(){return r.Node("small",[{attr:"class",val:"text-muted"}])},p=d("col"),f=d("card h-100"),v=(n=o,r.Node("img",[{attr:"src",val:n},{attr:"class",val:"card-img-top"}])),m=d("card-body"),h=r.Node("h5",[{attr:"class",val:"card-title"}]),y=r.Node("p",[{attr:"class",val:"card-text"}]),b=s(),g=u("/post=".concat(l)),S=u("/system.edition=".concat(l)),q=d(""),A=u("#");g.innerText="Acessar",S.innerText="Editar",A.innerText="Deletar",A.setAttribute("class","btn btn-danger m-1"),A.setAttribute("target","_self"),A.addEventListener("click",(function(e){return function(e,t,n){e.preventDefault(),document.body.appendChild(function(e){var t=window.innerWidth<768?80:50,n=r.Node("div",[{attr:"style",val:"height: 100vh; width: 100vw; position: fixed; top: 0; left: 0;"},{attr:"id",val:"div-delete-a-post"}]),a=r.Node("section",[{attr:"class",val:"border rounded shadow-sm p-3 d-flex overflow-auto bg-light justify-content-center flex-column"},{attr:"style",val:"min-height: 40vh; width: ".concat(t,"vw; position: fixed; \n\t\ttop: 50%; right: 50%; transform: translate(50%, -50%);")}]),o=r.Node("div",[{attr:"class",val:"row"}]),i=r.Node("div",[{attr:"class",val:"col text-center"}]);i.appendChild(r.Node("p",[{attr:"class",val:"h5 p-title-1"}])),i.appendChild(r.Node("p",[{attr:"class",val:"fw-light p-text-1"}])),i.querySelector(".p-title-1").innerText="Deletar post",i.querySelector(".p-text-1").innerText="Você realmente deseja remover o post ".concat(e,"? \n\tApós remover, todos os dados serão perdidos. Clique para confirmar.");var l=r.Node("div",[{attr:"class",val:"row"}]),c=r.Node("div",[{attr:"class",val:"col text-center"}]);return c.appendChild(r.Node("button",[{attr:"class",val:"btn btn-success m-1 b-confirm-1"}])),c.appendChild(r.Node("button",[{attr:"class",val:"btn btn-danger m-1 b-danger-1"}])),c.querySelector(".b-confirm-1").innerText="Excluir",c.querySelector(".b-danger-1").innerText="Manter",o.appendChild(i),l.appendChild(c),a.appendChild(o),a.appendChild(l),n.appendChild(a),n}(t)),document.body.querySelector("#div-delete-a-post").addEventListener("click",(function(r){var a=document.querySelector("#div-delete-a-post"),o=document.body.querySelector(".b-confirm-1"),i=document.body.querySelector(".b-danger-1"),l=r.target;return l===o?(n.on("post deleted",(function(){return console.log("Post deletado:",t),e.target.parentElement.parentElement.parentElement.parentElement.remove(),a.remove()})),n.emit("delete a post",t)):l===i||l===a?a.remove():void 0}))}(e,l,t)})),q.appendChild(g),q.appendChild(S),q.appendChild(A);var C=d("card-footer"),x=s();return h.innerText=a,y.innerText=i,b.innerText="ID: ".concat(l),x.innerText="Last update ".concat(moment(c,"YYYYMMDD").fromNow()),m.appendChild(h),m.appendChild(y),m.appendChild(b),m.appendChild(q),C.appendChild(x),f.appendChild(v),f.appendChild(m),f.appendChild(C),p.appendChild(f),p}(e,t);o.appendChild(n)})),document.querySelector("section").appendChild(l),document.querySelector("section").appendChild(i),document.querySelector("section").appendChild(o)}function u(e,t){e.preventDefault();var n=document.querySelector("main");return e.target.classList.add("disabled"),e.target.innerText="Carregando",function(e,t){var n=function(e){var t=r.Node("section",[{attr:"class",val:"mb-5"}]),n=r.Node("form",[{attr:"id",val:"form-edit-panel"},{attr:"class",val:"mb-3"}]),a=r.Node("div",[{attr:"class",val:"row"}]),o=function(){return r.Node("div",[{attr:"class",val:"col-sm-6"}])},i=function(){return r.Node("div",[{attr:"class",val:"form-group"}])},l=function(e){return r.Node("label",[{attr:"for",val:e},{attr:"class",val:"mt-4 mb-1"}])},c=function(e){return r.Node("input",[{attr:"autocomplete",val:"off"},{attr:"type",val:"text"},{attr:"class",val:"form-control"},{attr:"id",val:e},{attr:"placeholder",val:e}])},u=i(),s=i(),p=o(),f=o(),v=l("title"),m=l("id"),h=r.Node("p",[{attr:"class",val:"h4 mb-3 mt-3"}]),y=r.Node("a",[{attr:"class",val:"text-decoration-underline fw-light"},{attr:"href",val:"/system"}]),b=r.Node("button",[{attr:"class",val:"btn btn-primary mt-3"}]);return b.innerText="Pesquisar",y.innerText="Voltar",m.innerText="Por ID",v.innerText="Por título",u.appendChild(v),u.appendChild(c("title")),s.appendChild(m),s.appendChild(c("id")),p.appendChild(u),f.appendChild(s),a.appendChild(p),a.appendChild(f),n.appendChild(a),n.appendChild(b),h.innerText="Pesquise o post que quer editar por título ou id:",t.appendChild(y),t.appendChild(h),t.appendChild(n),n.addEventListener("submit",(function(t){return function(e,t){var r=e.form;e.event.preventDefault();var n=r.querySelector("#title"),a=r.querySelector("#id");if(!a.value&&!n.value)return n.focus();var o=n.value?String(n.value):null,i=a.value?String(a.value):null;return t.emit("search post by id or title",{id:i,title:o})}({event:t,form:n},e)})),e.on("error",(function(){titleForm.style.borderColor="#f00",idForm.style.borderColor="#f00"})),e.on("found article",(function(t){return function(e,t){var n=e.articles;document.querySelector("section").innerHTML="";var a=r.Node("div"),o=r.Node("a",[{attr:"class",val:"text-decoration-underline fw-light"},{attr:"href",val:"/system"}]);o.innerText="Voltar",a.appendChild(o);var i=r.Node("div",[{attr:"class",val:"row row-cols-1 row-cols-md-3 g-4"}]),l=r.Node("p",[{attr:"class",val:"h4 mb-3"}]);l.innerText="Posts encontrados: ".concat(n.length),d({elms:n,articles:[],editPanelHtml:i,p:l,panelHtml:a},t)}({articles:t},e)})),t}(e),a=r.Node("div",[{attr:"class",val:"row row-cols-1 row-cols-md-3 g-4"}]),o=r.Node("p",[{attr:"class",val:"h4 mb-3"}]);o.innerText="Veja os últimos posts:";var i=[];e.emit("req-articles"),e.on("re-articles",(function(r){return d({elms:r,articles:i,editPanelHtml:a,p:o,panelHtml:n},e),t.classList.toggle("d-none")}))}(t,n)}function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var f=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.body=t,this.errors=[],this.content=null}var t,r;return t=e,(r=[{key:"gap",value:function(){for(var e in this.body)"INPUT"===this.body[e].nodeName?this.cleanInp(e):"TEXTAREA"===this.body[e].nodeName&&this.cleanTex(e);if(!(this.errors.length>0))return this.body&&this.errors.length<1?this.content=!0:void 0;this.body=null}},{key:"replacing",value:function(){var e=this;for(var t in this.body)if("TEXTAREA"===this.body[t].nodeName){var r=function(){e.body[t].value=e.body[t].value.replace(/script/gi,'<span style="background: #000; color: #500">censored</span>');var r=e.body[t].value.match(/(https?:\/\/[^\s]+)/g);if(!r)return{v:void 0};for(var n in r=r.filter((function(e,t){return r.indexOf(e)===t}))){var a=new RegExp(r[n],"g");e.body[t].value=e.body[t].value.replace(a,'<a target="_blank" href="'.concat(r[n],'">').concat(r[n],"</a>"))}}();if("object"===s(r))return r.v}}},{key:"cleanInp",value:function(e){this.body[e].value.length>100&&this.errors.push("".concat(this.body[e].getAttribute("name")," está irregular")),"string"!=typeof this.body[e].value&&this.errors.push("falha no sistema, input irregular"),this.body[e].value.length<5&&this.errors.push("input ".concat(this.body[e].getAttribute("name")," está incompleto/pequeno"))}},{key:"cleanTex",value:function(e){this.body[e].value.length<400&&"ending"!==this.body[e].getAttribute("id")&&this.errors.push("".concat(this.body[e].getAttribute("name")," está incompleto")),"string"!=typeof this.body[e].value&&this.errors.push("falha no sistema, textarea irregular"),"ending"===this.body[e].getAttribute("id")&&this.body[e].value.length<100&&this.errors.push("ending pequena demais")}}])&&p(t.prototype,r),e}();function v(e){return function(e){if(Array.isArray(e))return h(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||m(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function m(e,t){if(e){if("string"==typeof e)return h(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?h(e,t):void 0}}function h(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var y=document.querySelector("#render-article"),b=0;function g(){var e=y.querySelector("#contents").querySelectorAll("textarea"),t=y.querySelector("#contents").querySelectorAll("input"),r=new f(v(t).concat(v(e)));return r.gap(),r.errors.length>0?(y.querySelector("#danger-help").innerText=r.errors.join("; "),setTimeout((function(){return y.querySelector("#add").classList.remove("bg-danger")}),5e3),y.querySelector("#add").classList.add("bg-danger"),!1):(y.querySelector("#add").classList.remove("bg-danger"),y.querySelector("#danger-help").innerText=r.errors.join("; "),y.querySelector("#add").classList.add("bg-success"),!0)}var S=io(),q=document.querySelector("#home-header"),A=document.querySelector("form"),C=document.querySelector("#_id"),x=document.querySelector("#system-edition");q&&(S.emit("req-articles"),S.on("re-articles",(function(e){var t=[];e.forEach((function(e){var r=e.title,n=e.description,a=e.primary,o=e.createdAt,i=e._id;t.push({title:r,description:n,primary:a,createdAt:o,_id:i})})),function(e,t){var r=document.querySelector("#row"),n=document.querySelector("#featured"),o=[];if(e.forEach((function(e){o.length<1&&o.push(e),e._id>o[0]._id&&(o[0]=e)})),!0===function(e,t){return e.children[0].querySelector("img").setAttribute("src",t[0].primary),e.children[0].querySelector(".card-title").innerText=t[0].title,e.children[0].querySelector(".card-text").innerText=t[0].description,e.children[0].querySelector("a").setAttribute("href","/post=".concat(t[0]._id)),!0}(r,o)){var i=a(r.children[1].querySelectorAll(".col-sm-6")).concat(a(n.querySelectorAll(".card"))),l=0;i.forEach((function(t){if(l>=e.length&&(l=0),e[l]===o[0]&&(l+=1),t.querySelector(".card-title").innerText=e[l].title,t.querySelector(".card-text").innerText=e[l].description,t.querySelector("a").setAttribute("href","/post=".concat(e[l]._id)),t.querySelector("small")){var r=new Date(e[l].createdAt);t.querySelector("small").innerText=moment(r,"YYYYMMDD").fromNow()}l+=1}))}}(t)}))),A&&"render-article"!==A.getAttribute("id")?function(){var e,t=function(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=i(e))){r&&(e=r);var n=0,a=function(){};return{s:a,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,l=!0,c=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return l=e.done,e},e:function(e){c=!0,o=e},f:function(){try{l||null==r.return||r.return()}finally{if(c)throw o}}}}(document.querySelectorAll("form"));try{for(t.s();!(e=t.n()).done;)e.value.addEventListener("submit",c)}catch(e){t.e(e)}finally{t.f()}}():A&&"render-article"===A.getAttribute("id")&&(y.querySelector("#add").addEventListener("click",g),y.querySelector("#plus").addEventListener("click",(function(e){if(e.preventDefault(),confirm('Será criado um novo parágrafo. Clique em "OK" para confirmar.')){b+=1;var t=y.querySelector("#paragraph"),n=document.createElement("div");return n.appendChild(function(e){var t=r.Node("div",[{attr:"class",val:"row mt-5"}]),n=r.Node("div",[{attr:"class",val:"col-sm-6"}]),a=r.Node("div",[{attr:"class",val:"form-group"}]);a.appendChild(r.Node("input",[{attr:"autocomplete",val:"off"},{attr:"name",val:"h2".concat(e)},{attr:"aria-describedby",val:"Título do Parágrafo"},{attr:"required",val:""},{attr:"id",val:"h2".concat(e)},{attr:"type",val:"text"},{attr:"class",val:"form-control mb-2"},{attr:"placeholder",val:"Desenvolvimento - Subtítulo"},{attr:"maxlength",val:"70"}])),n.appendChild(a),t.appendChild(n);var o=r.Node("div",[{attr:"class",val:"col-sm-6"}]),i=r.Node("div",[{attr:"class",val:"form-group"}]);i.appendChild(r.Node("input",[{attr:"autocomplete",val:"off"},{attr:"name",val:"img".concat(e)},{attr:"aria-describedby",val:"Link para imagem"},{attr:"required",val:""},{attr:"id",val:"img".concat(e)},{attr:"type",val:"text"},{attr:"class",val:"form-control mb-2"},{attr:"placeholder",val:"Link para imagem"},{attr:"maxlength",val:"100"}])),o.appendChild(i),t.appendChild(o);var l=r.Node("div",[{attr:"class",val:"form-floating"}]);return l.appendChild(r.Node("textarea",[{attr:"minlength",val:"400"},{attr:"required",val:""},{attr:"style",val:"height: 300px;"},{attr:"class",val:"form-control"},{attr:"placeholder",val:"Leave a comment here"},{attr:"id",val:"development".concat(e)},{attr:"name",val:"development".concat(e)}])),l.appendChild(r.Node("label",[{attr:"for",val:"development".concat(e)}])),t.appendChild(l),t}(b)),t.appendChild(n),setTimeout((function(){return t.querySelector("#h2".concat(String(b))).focus()}),100),5===b?y.querySelector("#plus").setAttribute("class","nav-link disabled"):void 0}})),y.addEventListener("submit",(function(e){e.preventDefault();var t=g(),r=function(e){var t,r=function(e){for(var t in e){if(""===e[t].value)return e[t].focus();"string"!=typeof e[t].value||e[t].value.length>100?(e[t].focus(),e[t]=null):"primary"===e[t].getAttribute("name")&&(e[t].value.startsWith("https://")||(e[t].focus(),e[t]=null))}return e}(v(e.querySelectorAll("input"))),n=function(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=m(e))){r&&(e=r);var n=0,a=function(){};return{s:a,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,i=!0,l=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return i=e.done,e},e:function(e){l=!0,o=e},f:function(){try{i||null==r.return||r.return()}finally{if(l)throw o}}}}(r);try{for(n.s();!(t=n.n()).done;)if(null===t.value)return null}catch(e){n.e(e)}finally{n.f()}return r}(e.target);if(t&&r){var n=y.querySelector("#contents").querySelectorAll("textarea"),a=y.querySelector("#contents").querySelectorAll("input");return new f(v(a).concat(v(n))).replacing(),e.target.submit()}y.querySelector("button").classList.add("bg-danger"),setTimeout((function(){return y.querySelector("button").classList.remove("bg-danger")}),5e3)}))),C&&C.value===window.location.pathname.split("=")[1]&&function(e){var t=window.location.pathname.split("=")[1];e.emit("search",t),e.on("re-article-by-id",(function(e){return function(e,t){var a=document.querySelector("main");if(t===e._id){for(var o=r.Node("div"),i=e.h21,l=e.h22,c=e.h23,d=e.h24,u=e.h25,s=e.h3,p=e.img1,f=e.img2,v=e.img3,m=e.img4,h=e.img5,y=e.development1,b=e.development2,g=e.development3,S=e.development4,q=e.development5,A=e.ending,C=0,x=[[i,p,y],[l,f,b],[c,v,g],[d,m,S],[u,h,q]];C<x.length;C++){var w=x[C];if(w[0]||w[2]){var N=n({title:w[0],src:w[1],text:w[2]});o.appendChild(N)}}var T=n({title:s,text:A,src:window.location.pathname});T.querySelector("img").remove(),o.appendChild(T),a.querySelector("#read-more").addEventListener("click",(function(e){e.preventDefault(),e.target.parentElement.parentElement.remove(),a.appendChild(o)}))}}(e,t)}))}(S),x&&function(e,t){e.addEventListener("click",(function(e){return u(e,t)})),document.querySelector("#system-delete").addEventListener("click",(function(e){e.preventDefault(),u(e,t)}))}(x,S)})();
//# sourceMappingURL=bundle.js.map