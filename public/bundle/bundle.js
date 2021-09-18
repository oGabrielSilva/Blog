(()=>{"use strict";function e(e){return function(e){if(Array.isArray(e))return t(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,r){if(e){if("string"==typeof e)return t(e,r);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?t(e,r):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function r(e,t){if(e){if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}}function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var o=function(e){e.preventDefault();var t,o,i=e.target;!0===(!(!(t=function(e){var t=e,r=[];for(var n in t)if(t[n].value.length<=0||"string"!=typeof t[n].value||"_csrf"!==t[n].getAttribute(name)&&t[n].value.length>50){r.push("Algum item foi mal digitado"),t=null;break}return{items:t,errors:r}}(function(e){if(Array.isArray(e))return n(e)}(o=i.querySelectorAll("input"))||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(o)||r(o)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}())).items||0!==t.errors.length)||null)?e.target.submit():window.location.href="/"};function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function a(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var u=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.body=t,this.errors=[],this.content=null}var t,r;return t=e,(r=[{key:"gap",value:function(){for(var e in this.body)"INPUT"===this.body[e].nodeName?this.cleanInp(e):"TEXTAREA"===this.body[e].nodeName&&this.cleanTex(e);if(!(this.errors.length>0))return this.body&&this.errors.length<1?this.content=!0:void 0;this.body=null}},{key:"replacing",value:function(){var e=this;for(var t in this.body)if("TEXTAREA"===this.body[t].nodeName){var r=function(){e.body[t].value=e.body[t].value.replace(/script/gi,'<span style="background: #000; color: #500">censored</span>');var r=e.body[t].value.match(/(https?:\/\/[^\s]+)/g);if(!r)return{v:void 0};for(var n in r=r.filter((function(e,t){return r.indexOf(e)===t}))){var o=new RegExp(r[n],"g");e.body[t].value=e.body[t].value.replace(o,'<a target="_blank" href="'.concat(r[n],'">').concat(r[n],"</a>"))}}();if("object"===i(r))return r.v}}},{key:"cleanInp",value:function(e){this.body[e].value.length>100&&this.errors.push("".concat(this.body[e].getAttribute("name")," está irregular")),"string"!=typeof this.body[e].value&&this.errors.push("falha no sistema, input irregular"),this.body[e].value.length<5&&this.errors.push("input ".concat(this.body[e].getAttribute("name")," está incompleto/pequeno"))}},{key:"cleanTex",value:function(e){this.body[e].value.length<400&&"ending"!==this.body[e].getAttribute("id")&&this.errors.push("".concat(this.body[e].getAttribute("name")," está incompleto")),"string"!=typeof this.body[e].value&&this.errors.push("falha no sistema, textarea irregular"),"ending"===this.body[e].getAttribute("id")&&this.body[e].value.length<100&&this.errors.push("ending pequena demais")}}])&&a(t.prototype,r),e}();function l(e){return function(e){if(Array.isArray(e))return s(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||c(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(e,t){if(e){if("string"==typeof e)return s(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?s(e,t):void 0}}function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var f=document.querySelector("#render-article"),y=0,d=null;function h(){var e=f.querySelector("#contents").querySelectorAll("textarea"),t=f.querySelector("#contents").querySelectorAll("input"),r=new u(l(t).concat(l(e)));return r.gap(),r.errors.length>0?(f.querySelector("#danger-help").innerText=r.errors.join("; "),setTimeout((function(){return f.querySelector("#add").classList.remove("bg-danger")}),5e3),f.querySelector("#add").classList.add("bg-danger"),!1):(f.querySelector("#add").classList.remove("bg-danger"),f.querySelector("#danger-help").innerText=r.errors.join("; "),f.querySelector("#add").classList.add("bg-success"),!0)}var m=io(),b=document.querySelector("#home-header"),p=document.querySelector("form");b&&(m.emit("req-articles"),m.on("re-articles",(function(t){var r=[];t.forEach((function(e){var t=e.title,n=e.description,o=e.primary,i=e.createdAt,a=e._id;r.push({title:t,description:n,primary:o,createdAt:i,_id:a})})),function(t,r){var n=document.querySelector(".row"),o=document.querySelector("#featured"),i=[];if(t.forEach((function(e){i.length<1&&i.push(e),e._id>i[0]._id&&(i[0]=e)})),!0===function(e,t){return e.children[0].querySelector("img").setAttribute("src",t[0].primary),e.children[0].querySelector(".card-title").innerText=t[0].title,e.children[0].querySelector(".card-text").innerText=t[0].description,e.children[0].querySelector("a").setAttribute("href","/".concat(t[0]._id)),!0}(n,i)){var a=e(n.children[1].querySelectorAll(".col-sm-6")).concat(e(o.querySelectorAll(".card"))),u=0;a.forEach((function(e){if(u>=t.length&&(u=0),t[u]===i[0]&&(u+=1),e.querySelector(".card-title").innerText=t[u].title,e.querySelector(".card-text").innerText=t[u].description,e.querySelector("a").setAttribute("href","/".concat(t[u]._id)),e.querySelector("small")){var r=new Date(t[u].createdAt);e.querySelector("small").innerText=moment(r,"YYYYMMDD").fromNow()}u+=1}))}}(r)}))),p&&"render-article"!==p.getAttribute("id")?function(){var e,t=function(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=r(e))){n&&(e=n);var o=0,i=function(){};return{s:i,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,u=!0,l=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return u=e.done,e},e:function(e){l=!0,a=e},f:function(){try{u||null==n.return||n.return()}finally{if(l)throw a}}}}(document.querySelectorAll("form"));try{for(t.s();!(e=t.n()).done;)e.value.addEventListener("submit",o)}catch(e){t.e(e)}finally{t.f()}}():p&&"render-article"===p.getAttribute("id")&&(f.querySelector("#add").addEventListener("click",h),f.querySelector("#plus").addEventListener("click",(function(e){e.preventDefault(),y+=1;var t=f.querySelector("#paragraph"),r=document.createElement("div");d||(d=t.querySelector(".row").parentElement.innerHTML),r.innerHTML+=d,r.innerHTML=r.innerHTML.replace(/development/g,"development"+String(y)),r.innerHTML=r.innerHTML.replace(/h2/g,"h2"+String(y)),r.innerHTML=r.innerHTML.replace(/img/g,"img"+String(y)),t.innerHTML+=r.innerHTML})),f.addEventListener("submit",(function(e){e.preventDefault();var t=h(),r=function(e){var t,r=function(e){for(var t in e){if(""===e[t].value)return e[t].focus();"string"!=typeof e[t].value||e[t].value.length>100?(e[t].focus(),e[t]=null):"primary"===e[t].getAttribute("name")&&(e[t].value.startsWith("https://")||(e[t].focus(),e[t]=null))}return e}(l(e.querySelectorAll("input"))),n=function(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=c(e))){r&&(e=r);var n=0,o=function(){};return{s:o,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,u=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return a=e.done,e},e:function(e){u=!0,i=e},f:function(){try{a||null==r.return||r.return()}finally{if(u)throw i}}}}(r);try{for(n.s();!(t=n.n()).done;)if(null===t.value)return null}catch(e){n.e(e)}finally{n.f()}return r}(e.target);if(t&&r){var n=f.querySelector("#contents").querySelectorAll("textarea"),o=f.querySelector("#contents").querySelectorAll("input");return new u(l(o).concat(l(n))).replacing(),setTimeout((function(){return console.log("Oi")}),6e3),e.target.submit()}f.querySelector("button").classList.add("bg-danger"),setTimeout((function(){return f.querySelector("button").classList.remove("bg-danger")}),5e3)})))})();
//# sourceMappingURL=bundle.js.map