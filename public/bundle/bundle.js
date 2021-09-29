(()=>{"use strict";var t='\n\t<section>\n\t\t<img src="#" class="mx-auto w-75 d-block mb-5 mt-5">\n\t\t<p class="h2 mb-4 text-break">%</p>\n\t\t<p>@</p>\n\t</section>';function e(t){return function(t){if(Array.isArray(t))return r(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(t){if("string"==typeof t)return r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(t,e):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function r(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function n(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function a(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var o=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}var e,r;return e=t,r=[{key:"Node",value:function(t,e){var r=document.createElement(t);if(!e)return r;var a,o=function(t,e){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=function(t,e){if(t){if("string"==typeof t)return n(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(t,e):void 0}}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var a=0,o=function(){};return{s:o,n:function(){return a>=t.length?{done:!0}:{done:!1,value:t[a++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,l=!0,c=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return l=t.done,t},e:function(t){c=!0,i=t},f:function(){try{l||null==r.return||r.return()}finally{if(c)throw i}}}}(e);try{for(o.s();!(a=o.n()).done;){var i=a.value;r.setAttribute(i.attr,i.val)}}catch(t){o.e(t)}finally{o.f()}return r}}],null&&a(e.prototype,null),r&&a(e,r),t}();function i(t,e){if(t){if("string"==typeof t)return l(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?l(t,e):void 0}}function l(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var c=function(t){t.preventDefault();var e,r,n=t.target,a=!(!(e=function(t){var e=t,r=[];for(var n in e)if(e[n].value.length<=0||"string"!=typeof e[n].value){r.push("Algum item foi mal digitado"),e=null;break}return{items:e,errors:r}}(function(t){if(Array.isArray(t))return l(t)}(r=n.querySelectorAll("input"))||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(r)||i(r)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}())).items||0!==e.errors.length)||e.errors;!0===a?t.target.submit():console.log(a)};function u(t){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function d(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var s=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.body=e,this.errors=[],this.content=null}var e,r;return e=t,(r=[{key:"gap",value:function(){for(var t in this.body)"INPUT"===this.body[t].nodeName?this.cleanInp(t):"TEXTAREA"===this.body[t].nodeName&&this.cleanTex(t);if(!(this.errors.length>0))return this.body&&this.errors.length<1?this.content=!0:void 0;this.body=null}},{key:"replacing",value:function(){var t=this;for(var e in this.body)if("TEXTAREA"===this.body[e].nodeName){var r=function(){t.body[e].value=t.body[e].value.replace(/script/gi,'<span style="background: #000; color: #500">censored</span>');var r=t.body[e].value.match(/(https?:\/\/[^\s]+)/g);if(!r)return{v:void 0};for(var n in r=r.filter((function(t,e){return r.indexOf(t)===e}))){var a=new RegExp(r[n],"g");t.body[e].value=t.body[e].value.replace(a,'<a target="_blank" href="'.concat(r[n],'">').concat(r[n],"</a>"))}}();if("object"===u(r))return r.v}}},{key:"cleanInp",value:function(t){this.body[t].value.length>100&&this.errors.push("".concat(this.body[t].getAttribute("name")," está irregular")),"string"!=typeof this.body[t].value&&this.errors.push("falha no sistema, input irregular"),this.body[t].value.length<5&&this.errors.push("input ".concat(this.body[t].getAttribute("name")," está incompleto/pequeno"))}},{key:"cleanTex",value:function(t){this.body[t].value.length<400&&"ending"!==this.body[t].getAttribute("id")&&this.errors.push("".concat(this.body[t].getAttribute("name")," está incompleto")),"string"!=typeof this.body[t].value&&this.errors.push("falha no sistema, textarea irregular"),"ending"===this.body[t].getAttribute("id")&&this.body[t].value.length<100&&this.errors.push("ending pequena demais")}}])&&d(e.prototype,r),t}();function f(t){return function(t){if(Array.isArray(t))return v(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||p(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function p(t,e){if(t){if("string"==typeof t)return v(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?v(t,e):void 0}}function v(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var m=document.querySelector("#render-article"),y=0;function h(){var t=m.querySelector("#contents").querySelectorAll("textarea"),e=m.querySelector("#contents").querySelectorAll("input"),r=new s(f(e).concat(f(t)));return r.gap(),r.errors.length>0?(m.querySelector("#danger-help").innerText=r.errors.join("; "),setTimeout((function(){return m.querySelector("#add").classList.remove("bg-danger")}),5e3),m.querySelector("#add").classList.add("bg-danger"),!1):(m.querySelector("#add").classList.remove("bg-danger"),m.querySelector("#danger-help").innerText=r.errors.join("; "),m.querySelector("#add").classList.add("bg-success"),!0)}var b=io(),g=document.querySelector("#home-header"),S=document.querySelector("form"),A=document.querySelector("#_id"),q=document.querySelector("#system-edition");g&&(b.emit("req-articles"),b.on("re-articles",(function(t){var r=[];t.forEach((function(t){var e=t.title,n=t.description,a=t.primary,o=t.createdAt,i=t._id;r.push({title:e,description:n,primary:a,createdAt:o,_id:i})})),function(t,r){var n=document.querySelector("#row"),a=document.querySelector("#featured"),o=[];if(t.forEach((function(t){o.length<1&&o.push(t),t._id>o[0]._id&&(o[0]=t)})),!0===function(t,e){return t.children[0].querySelector("img").setAttribute("src",e[0].primary),t.children[0].querySelector(".card-title").innerText=e[0].title,t.children[0].querySelector(".card-text").innerText=e[0].description,t.children[0].querySelector("a").setAttribute("href","/post=".concat(e[0]._id)),!0}(n,o)){var i=e(n.children[1].querySelectorAll(".col-sm-6")).concat(e(a.querySelectorAll(".card"))),l=0;i.forEach((function(e){if(l>=t.length&&(l=0),t[l]===o[0]&&(l+=1),e.querySelector(".card-title").innerText=t[l].title,e.querySelector(".card-text").innerText=t[l].description,e.querySelector("a").setAttribute("href","/post=".concat(t[l]._id)),e.querySelector("small")){var r=new Date(t[l].createdAt);e.querySelector("small").innerText=moment(r,"YYYYMMDD").fromNow()}l+=1}))}}(r)}))),S&&"render-article"!==S.getAttribute("id")?function(){var t,e=function(t,e){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=i(t))){r&&(t=r);var n=0,a=function(){};return{s:a,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,l=!0,c=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return l=t.done,t},e:function(t){c=!0,o=t},f:function(){try{l||null==r.return||r.return()}finally{if(c)throw o}}}}(document.querySelectorAll("form"));try{for(e.s();!(t=e.n()).done;)t.value.addEventListener("submit",c)}catch(t){e.e(t)}finally{e.f()}}():S&&"render-article"===S.getAttribute("id")&&(m.querySelector("#add").addEventListener("click",h),m.querySelector("#plus").addEventListener("click",(function(t){if(t.preventDefault(),confirm('Será criado um novo parágrafo. Clique em "OK" para confirmar.')){y+=1;var e=m.querySelector("#paragraph"),r=document.createElement("div");return r.appendChild(function(t){var e=o.Node("div",[{attr:"class",val:"row mt-5"}]),r=o.Node("div",[{attr:"class",val:"col-sm-6"}]),n=o.Node("div",[{attr:"class",val:"form-group"}]);n.appendChild(o.Node("input",[{attr:"autocomplete",val:"off"},{attr:"name",val:"h2".concat(t)},{attr:"aria-describedby",val:"Título do Parágrafo"},{attr:"required",val:""},{attr:"id",val:"h2".concat(t)},{attr:"type",val:"text"},{attr:"class",val:"form-control mb-2"},{attr:"placeholder",val:"Desenvolvimento - Subtítulo"},{attr:"maxlength",val:"70"}])),r.appendChild(n),e.appendChild(r);var a=o.Node("div",[{attr:"class",val:"col-sm-6"}]),i=o.Node("div",[{attr:"class",val:"form-group"}]);i.appendChild(o.Node("input",[{attr:"autocomplete",val:"off"},{attr:"name",val:"img".concat(t)},{attr:"aria-describedby",val:"Link para imagem"},{attr:"required",val:""},{attr:"id",val:"img".concat(t)},{attr:"type",val:"text"},{attr:"class",val:"form-control mb-2"},{attr:"placeholder",val:"Link para imagem"},{attr:"maxlength",val:"100"}])),a.appendChild(i),e.appendChild(a);var l=o.Node("div",[{attr:"class",val:"form-floating"}]);return l.appendChild(o.Node("textarea",[{attr:"minlength",val:"400"},{attr:"required",val:""},{attr:"style",val:"height: 300px;"},{attr:"class",val:"form-control"},{attr:"placeholder",val:"Leave a comment here"},{attr:"id",val:"development".concat(t)},{attr:"name",val:"development".concat(t)}])),l.appendChild(o.Node("label",[{attr:"for",val:"development".concat(t)}])),e.appendChild(l),e}(y)),e.appendChild(r),setTimeout((function(){return e.querySelector("#h2".concat(String(y))).focus()}),100),5===y?m.querySelector("#plus").setAttribute("class","nav-link disabled"):void 0}})),m.addEventListener("submit",(function(t){t.preventDefault();var e=h(),r=function(t){var e,r=function(t){for(var e in t){if(""===t[e].value)return t[e].focus();"string"!=typeof t[e].value||t[e].value.length>100?(t[e].focus(),t[e]=null):"primary"===t[e].getAttribute("name")&&(t[e].value.startsWith("https://")||(t[e].focus(),t[e]=null))}return t}(f(t.querySelectorAll("input"))),n=function(t,e){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=p(t))){r&&(t=r);var n=0,a=function(){};return{s:a,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,i=!0,l=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return i=t.done,t},e:function(t){l=!0,o=t},f:function(){try{i||null==r.return||r.return()}finally{if(l)throw o}}}}(r);try{for(n.s();!(e=n.n()).done;)if(null===e.value)return null}catch(t){n.e(t)}finally{n.f()}return r}(t.target);if(e&&r){var n=m.querySelector("#contents").querySelectorAll("textarea"),a=m.querySelector("#contents").querySelectorAll("input");return new s(f(a).concat(f(n))).replacing(),t.target.submit()}m.querySelector("button").classList.add("bg-danger"),setTimeout((function(){return m.querySelector("button").classList.remove("bg-danger")}),5e3)}))),A&&A.value===window.location.pathname.split("=")[1]&&function(e){var r=window.location.pathname.split("=")[1];e.emit("search",r),e.on("re-article-by-id",(function(e){return function(e,r){var n=document.querySelector("main");if(r===e._id){for(var a="",o=e.h21,i=e.h22,l=e.h23,c=e.h24,u=e.h25,d=e.h3,s=e.img1,f=e.img2,p=e.img3,v=e.img4,m=e.img5,y=e.development1,h=e.development2,b=e.development3,g=e.development4,S=e.development5,A=e.ending,q=0,w=[[o,s,y],[i,f,h],[l,p,b],[c,v,g],[u,m,S]];q<w.length;q++){var C=w[q];if(C[0]||C[2]){var x=t.replace(/\#/g,C[1]);x=(x=x.replace(/\%/g,C[0])).replace(/\@/g,C[2]),a+=x}}var T=t.replace(/\%/g,d);T=(T=T.replace(/\@/g,A)).replace('<img src="#" class="mx-auto w-75 d-block mb-5 mt-5">',""),a+=T,n.querySelector("#read-more").addEventListener("click",(function(t){t.preventDefault(),t.target.parentElement.parentElement.remove(),n.innerHTML+=a}))}}(e,r)}))}(b),q&&function(t,e){t.addEventListener("click",(function(t){return function(t,e){t.preventDefault();var r=document.querySelector("main");return t.target.classList.add("disabled"),t.target.innerText="Carregando",function(t,e){var r=function(){var t=o.Node("section",[{attr:"class",val:"mb-5"}]),e=o.Node("form",[{attr:"id",val:"form-edit-panel"},{attr:"class",val:"row mb-3"}]),r=function(){return o.Node("div",[{attr:"class",val:"col-sm-6"}])},n=function(){return o.Node("div",[{attr:"class",val:"form-group"}])},a=function(t){return o.Node("label",[{attr:"for",val:t},{attr:"class",val:"mt-4 mb-1"}])},i=function(t){return o.Node("input",[{attr:"autocomplete",val:"off"},{attr:"type",val:"text"},{attr:"class",val:"form-control"},{attr:"id",val:t},{attr:"placeholder",val:t}])},l=n(),c=n(),u=r(),d=r(),s=a("title"),f=a("id"),p=o.Node("p",[{attr:"class",val:"h4 mb-3 mt-3"}]),v=o.Node("a",[{attr:"class",val:"text-decoration-underline fw-light"},{attr:"href",val:"/system"}]);return v.innerText="Voltar",f.innerText="Por ID",s.innerText="Por título",l.appendChild(s),l.appendChild(i("title")),c.appendChild(f),c.appendChild(i("id")),u.appendChild(l),d.appendChild(c),e.appendChild(u),e.appendChild(d),p.innerText="Pesquise o post que quer editar por título ou id:",t.appendChild(v),t.appendChild(p),t.appendChild(e),t}(),n=o.Node("div",[{attr:"class",val:"row row-cols-1 row-cols-md-3 g-4"}]),a=o.Node("p",[{attr:"class",val:"h4 mb-3"}]);a.innerText="Veja os últimos posts";var i=[];t.emit("req-articles"),t.on("re-articles",(function(t){return t.forEach((function(t){var e=t.title,r=t.description,n=t.primary,a=t.createdAt,o=t._id;i.push({title:e,description:r,primary:n,_id:o,createdAt:a})})),i.forEach((function(t){var e=function(t){var e,r=t.title,n=t.primary,a=t.description,i=t._id,l=t.createdAt,c=function(t){return o.Node("div",[{attr:"class",val:t}])},u=function(t){return o.Node("a",[{attr:"href",val:t},{attr:"target",val:"_blank"},{attr:"class",val:"btn btn-primary m-1"}])},d=function(){return o.Node("small",[{attr:"class",val:"text-muted"}])},s=c("col"),f=c("card h-100"),p=(e=n,o.Node("img",[{attr:"src",val:e},{attr:"class",val:"card-img-top"}])),v=c("card-body"),m=o.Node("h5",[{attr:"class",val:"card-title"}]),y=o.Node("p",[{attr:"class",val:"card-text"}]),h=d(),b=u("/post=".concat(i)),g=u("/system.edition=".concat(i)),S=c("");b.innerText="Acessar",g.innerText="Editar",S.appendChild(b),S.appendChild(g);var A=c("card-footer"),q=d();return m.innerText=r,y.innerText=a,h.innerText="ID: ".concat(i),q.innerText="Last update ".concat(moment(l,"YYYYMMDD").fromNow()),v.appendChild(m),v.appendChild(y),v.appendChild(h),v.appendChild(S),A.appendChild(q),f.appendChild(p),f.appendChild(v),f.appendChild(A),s.appendChild(f),s}(t);n.appendChild(e)})),document.querySelector("section").appendChild(r),document.querySelector("section").appendChild(a),document.querySelector("section").appendChild(n),e.classList.toggle("d-none")}))}(e,r)}(t,e)}))}(q,b)})();
//# sourceMappingURL=bundle.js.map