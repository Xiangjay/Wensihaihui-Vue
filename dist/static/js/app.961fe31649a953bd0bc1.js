webpackJsonp([1],{"2qHL":function(e,t,n){"use strict";e.exports=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}},"3ZBI":function(e,t,n){"use strict";e.exports=function(e,t,n,r,o){return e.config=t,n&&(e.code=n),e.request=r,e.response=o,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code}},e}},"9xM4":function(e,t,n){"use strict";var r,o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};!function(){function n(e,t){if(!n.installed){if(n.installed=!0,!t)return void console.error("You have to install axios");e.axios=t,Object.defineProperties(e.prototype,{axios:{get:function(){return t}},$http:{get:function(){return t}}})}}"object"==o(t)?e.exports=n:void 0===(r=function(){return n}.apply(t,[]))||(e.exports=r)}()},"Di/a":function(e,t,n){"use strict";var r=n("La2s"),o=n("H2iV"),s=n("x+/8"),i=n("nAs4"),a=n("qw5y"),u=n("wsXG");e.exports=function(e){return new Promise(function(t,c){var f=e.data,p=e.headers;r.isFormData(f)&&delete p["Content-Type"];var l=new XMLHttpRequest;if(e.auth){var d=e.auth.username||"",h=e.auth.password||"";p.Authorization="Basic "+btoa(d+":"+h)}if(l.open(e.method.toUpperCase(),s(e.url,e.params,e.paramsSerializer),!0),l.timeout=e.timeout,l.onreadystatechange=function(){if(l&&4===l.readyState&&(0!==l.status||l.responseURL&&0===l.responseURL.indexOf("file:"))){var n="getAllResponseHeaders"in l?i(l.getAllResponseHeaders()):null,r={data:e.responseType&&"text"!==e.responseType?l.response:l.responseText,status:l.status,statusText:l.statusText,headers:n,config:e,request:l};o(t,c,r),l=null}},l.onabort=function(){l&&(c(u("Request aborted",e,"ECONNABORTED",l)),l=null)},l.onerror=function(){c(u("Network Error",e,null,l)),l=null},l.ontimeout=function(){c(u("timeout of "+e.timeout+"ms exceeded",e,"ECONNABORTED",l)),l=null},r.isStandardBrowserEnv()){var m=n("k3ra"),v=(e.withCredentials||a(e.url))&&e.xsrfCookieName?m.read(e.xsrfCookieName):void 0;v&&(p[e.xsrfHeaderName]=v)}if("setRequestHeader"in l&&r.forEach(p,function(e,t){void 0===f&&"content-type"===t.toLowerCase()?delete p[t]:l.setRequestHeader(t,e)}),e.withCredentials&&(l.withCredentials=!0),e.responseType)try{l.responseType=e.responseType}catch(t){if("json"!==e.responseType)throw t}"function"==typeof e.onDownloadProgress&&l.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&l.upload&&l.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then(function(e){l&&(l.abort(),c(e),l=null)}),void 0===f&&(f=null),l.send(f)})}},FYPw:function(e,t,n){"use strict";e.exports=function(e){return function(t){return e.apply(null,t)}}},H1pc:function(e,t,n){"use strict";var r=n("MqSD");function o(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise(function(e){t=e});var n=this;e(function(e){n.reason||(n.reason=new r(e),t(n.reason))})}o.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},o.source=function(){var e;return{token:new o(function(t){e=t}),cancel:e}},e.exports=o},H2iV:function(e,t,n){"use strict";var r=n("wsXG");e.exports=function(e,t,n){var o=n.config.validateStatus;!o||o(n.status)?e(n):t(r("Request failed with status code "+n.status,n.config,null,n.request,n))}},La2s:function(e,t,n){"use strict";var r=n("NwEK"),o=n("fPF1"),s=Object.prototype.toString;function i(e){return"[object Array]"===s.call(e)}function a(e){return null!==e&&"object"==typeof e}function u(e){return"[object Function]"===s.call(e)}function c(e,t){if(null!==e&&void 0!==e)if("object"!=typeof e&&(e=[e]),i(e))for(var n=0,r=e.length;n<r;n++)t.call(null,e[n],n,e);else for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.call(null,e[o],o,e)}e.exports={isArray:i,isArrayBuffer:function(e){return"[object ArrayBuffer]"===s.call(e)},isBuffer:o,isFormData:function(e){return"undefined"!=typeof FormData&&e instanceof FormData},isArrayBufferView:function(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer},isString:function(e){return"string"==typeof e},isNumber:function(e){return"number"==typeof e},isObject:a,isUndefined:function(e){return void 0===e},isDate:function(e){return"[object Date]"===s.call(e)},isFile:function(e){return"[object File]"===s.call(e)},isBlob:function(e){return"[object Blob]"===s.call(e)},isFunction:u,isStream:function(e){return a(e)&&u(e.pipe)},isURLSearchParams:function(e){return"undefined"!=typeof URLSearchParams&&e instanceof URLSearchParams},isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&"undefined"!=typeof window&&"undefined"!=typeof document},forEach:c,merge:function e(){var t={};function n(n,r){"object"==typeof t[r]&&"object"==typeof n?t[r]=e(t[r],n):t[r]=n}for(var r=0,o=arguments.length;r<o;r++)c(arguments[r],n);return t},deepMerge:function e(){var t={};function n(n,r){"object"==typeof t[r]&&"object"==typeof n?t[r]=e(t[r],n):t[r]="object"==typeof n?e({},n):n}for(var r=0,o=arguments.length;r<o;r++)c(arguments[r],n);return t},extend:function(e,t,n){return c(t,function(t,o){e[o]=n&&"function"==typeof t?r(t,n):t}),e},trim:function(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")}}},MqSD:function(e,t,n){"use strict";function r(e){this.message=e}r.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},r.prototype.__CANCEL__=!0,e.exports=r},NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n("7+uW"),o={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},staticRenderFns:[]};var s=n("VU/8")({name:"App"},o,!1,function(e){n("W43E")},null,null).exports,i=n("/ocq"),a=n("BO1k"),u=n.n(a),c=n("gI3o"),f=n.n(c),p={data:function(){return{male:[],female:[]}},mounted:function(){this.getResult()},methods:{getResult:function(){var e=this;f.a.get("http://5c92dbfae7b1a00014078e61.mockapi.io/owners").then(function(t){var n=!0,r=!1,o=void 0;try{for(var s,i=u()(t.data);!(n=(s=i.next()).done);n=!0){var a=s.value;null!=a.pets&&a.pets.sort(function(e,t){return e.type>t.type?1:-1}),"Male"==a.gender?e.male.push(a):e.female.push(a)}}catch(e){r=!0,o=e}finally{try{!n&&i.return&&i.return()}finally{if(r)throw o}}e.male.sort(function(e,t){return e.name>t.name?1:-1}),e.female.sort(function(e,t){return e.name>t.name?1:-1})})}}},l={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e._m(0),e._v(" "),n("div",{staticClass:"result"},[n("div",{staticClass:"left-side"},[n("h3",[e._v("Male")]),e._v(" "),n("ol",e._l(e.male,function(t){return n("li",[n("p",[n("span",[e._v("Name: ")]),e._v(e._s(t.name))]),e._v(" "),n("p",[n("span",[e._v("Age: ")]),e._v(e._s(t.age))]),e._v(" "),null!=t.pets?n("ul",[n("span",[e._v("Pets: ")]),e._v(" "),e._l(t.pets,function(t){return n("li",[n("p",[n("span",[e._v("Pet Name: ")]),e._v(e._s(t.name))]),n("p"),e._v(" "),n("p",[n("span",[e._v("Pet Type: ")]),e._v(e._s(t.type))]),n("p")])})],2):e._e()])}),0)]),e._v(" "),n("div",{staticClass:"right-side"},[n("h3",[e._v("Female")]),e._v(" "),n("ol",e._l(e.female,function(t){return n("li",[n("p",[n("span",[e._v("Name: ")]),e._v(e._s(t.name))]),e._v(" "),n("p",[n("span",[e._v("Age: ")]),e._v(e._s(t.age))]),e._v(" "),null!=t.pets?n("ul",[n("span",[e._v("Pets: ")]),e._v(" "),e._l(t.pets,function(t){return n("li",[n("p",[n("span",[e._v("Pet Name: ")]),e._v(e._s(t.name))]),n("p"),e._v(" "),n("p",[n("span",[e._v("Pet Type: ")]),e._v(e._s(t.type))]),n("p")])})],2):e._e()])}),0)])])])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("header",[t("img",{attrs:{src:"/static/images/image001.png",alt:""}})])}]};var d=n("VU/8")(p,l,!1,function(e){n("T7K8")},"data-v-35ecfd9a",null).exports;r.a.use(i.a);var h=new i.a({routes:[{path:"/",name:"Home",component:d}]}),m=n("9xM4"),v=n.n(m);r.a.use(v.a,f.a),r.a.config.productionTip=!1,new r.a({el:"#app",router:h,components:{App:s},template:"<App/>"})},NwEK:function(e,t,n){"use strict";e.exports=function(e,t){return function(){for(var n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];return e.apply(t,n)}}},T7K8:function(e,t){},U60K:function(e,t,n){"use strict";var r=n("La2s"),o=n("NwEK"),s=n("koPw"),i=n("lxi1");function a(e){var t=new s(e),n=o(s.prototype.request,t);return r.extend(n,s.prototype,t),r.extend(n,t),n}var u=a(n("zBDM"));u.Axios=s,u.create=function(e){return a(i(u.defaults,e))},u.Cancel=n("MqSD"),u.CancelToken=n("H1pc"),u.isCancel=n("oYZ2"),u.all=function(e){return Promise.all(e)},u.spread=n("FYPw"),e.exports=u,e.exports.default=u},VbyR:function(e,t,n){"use strict";e.exports=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)}},Vq9p:function(e,t,n){"use strict";var r=n("La2s");function o(){this.handlers=[]}o.prototype.use=function(e,t){return this.handlers.push({fulfilled:e,rejected:t}),this.handlers.length-1},o.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},o.prototype.forEach=function(e){r.forEach(this.handlers,function(t){null!==t&&e(t)})},e.exports=o},W43E:function(e,t){},fPF1:function(e,t){
/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
e.exports=function(e){return null!=e&&null!=e.constructor&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)}},feM3:function(e,t,n){"use strict";var r=n("La2s");e.exports=function(e,t){r.forEach(e,function(n,r){r!==t&&r.toUpperCase()===t.toUpperCase()&&(e[t]=n,delete e[r])})}},gI3o:function(e,t,n){e.exports=n("U60K")},k3ra:function(e,t,n){"use strict";var r=n("La2s");e.exports=r.isStandardBrowserEnv()?{write:function(e,t,n,o,s,i){var a=[];a.push(e+"="+encodeURIComponent(t)),r.isNumber(n)&&a.push("expires="+new Date(n).toGMTString()),r.isString(o)&&a.push("path="+o),r.isString(s)&&a.push("domain="+s),!0===i&&a.push("secure"),document.cookie=a.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}}},koPw:function(e,t,n){"use strict";var r=n("La2s"),o=n("x+/8"),s=n("Vq9p"),i=n("vUUJ"),a=n("lxi1");function u(e){this.defaults=e,this.interceptors={request:new s,response:new s}}u.prototype.request=function(e){"string"==typeof e?(e=arguments[1]||{}).url=arguments[0]:e=e||{},(e=a(this.defaults,e)).method=e.method?e.method.toLowerCase():"get";var t=[i,void 0],n=Promise.resolve(e);for(this.interceptors.request.forEach(function(e){t.unshift(e.fulfilled,e.rejected)}),this.interceptors.response.forEach(function(e){t.push(e.fulfilled,e.rejected)});t.length;)n=n.then(t.shift(),t.shift());return n},u.prototype.getUri=function(e){return e=a(this.defaults,e),o(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")},r.forEach(["delete","get","head","options"],function(e){u.prototype[e]=function(t,n){return this.request(r.merge(n||{},{method:e,url:t}))}}),r.forEach(["post","put","patch"],function(e){u.prototype[e]=function(t,n,o){return this.request(r.merge(o||{},{method:e,url:t,data:n}))}}),e.exports=u},lxi1:function(e,t,n){"use strict";var r=n("La2s");e.exports=function(e,t){t=t||{};var n={};return r.forEach(["url","method","params","data"],function(e){void 0!==t[e]&&(n[e]=t[e])}),r.forEach(["headers","auth","proxy"],function(o){r.isObject(t[o])?n[o]=r.deepMerge(e[o],t[o]):void 0!==t[o]?n[o]=t[o]:r.isObject(e[o])?n[o]=r.deepMerge(e[o]):void 0!==e[o]&&(n[o]=e[o])}),r.forEach(["baseURL","transformRequest","transformResponse","paramsSerializer","timeout","withCredentials","adapter","responseType","xsrfCookieName","xsrfHeaderName","onUploadProgress","onDownloadProgress","maxContentLength","validateStatus","maxRedirects","httpAgent","httpsAgent","cancelToken","socketPath"],function(r){void 0!==t[r]?n[r]=t[r]:void 0!==e[r]&&(n[r]=e[r])}),n}},nAs4:function(e,t,n){"use strict";var r=n("La2s"),o=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];e.exports=function(e){var t,n,s,i={};return e?(r.forEach(e.split("\n"),function(e){if(s=e.indexOf(":"),t=r.trim(e.substr(0,s)).toLowerCase(),n=r.trim(e.substr(s+1)),t){if(i[t]&&o.indexOf(t)>=0)return;i[t]="set-cookie"===t?(i[t]?i[t]:[]).concat([n]):i[t]?i[t]+", "+n:n}}),i):i}},oYZ2:function(e,t,n){"use strict";e.exports=function(e){return!(!e||!e.__CANCEL__)}},qw5y:function(e,t,n){"use strict";var r=n("La2s");e.exports=r.isStandardBrowserEnv()?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");function o(e){var r=e;return t&&(n.setAttribute("href",r),r=n.href),n.setAttribute("href",r),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:"/"===n.pathname.charAt(0)?n.pathname:"/"+n.pathname}}return e=o(window.location.href),function(t){var n=r.isString(t)?o(t):t;return n.protocol===e.protocol&&n.host===e.host}}():function(){return!0}},tLbi:function(e,t,n){"use strict";var r=n("La2s");e.exports=function(e,t,n){return r.forEach(n,function(n){e=n(e,t)}),e}},vUUJ:function(e,t,n){"use strict";var r=n("La2s"),o=n("tLbi"),s=n("oYZ2"),i=n("zBDM"),a=n("VbyR"),u=n("2qHL");function c(e){e.cancelToken&&e.cancelToken.throwIfRequested()}e.exports=function(e){return c(e),e.baseURL&&!a(e.url)&&(e.url=u(e.baseURL,e.url)),e.headers=e.headers||{},e.data=o(e.data,e.headers,e.transformRequest),e.headers=r.merge(e.headers.common||{},e.headers[e.method]||{},e.headers||{}),r.forEach(["delete","get","head","post","put","patch","common"],function(t){delete e.headers[t]}),(e.adapter||i.adapter)(e).then(function(t){return c(e),t.data=o(t.data,t.headers,e.transformResponse),t},function(t){return s(t)||(c(e),t&&t.response&&(t.response.data=o(t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)})}},wsXG:function(e,t,n){"use strict";var r=n("3ZBI");e.exports=function(e,t,n,o,s){var i=new Error(e);return r(i,t,n,o,s)}},"x+/8":function(e,t,n){"use strict";var r=n("La2s");function o(e){return encodeURIComponent(e).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}e.exports=function(e,t,n){if(!t)return e;var s;if(n)s=n(t);else if(r.isURLSearchParams(t))s=t.toString();else{var i=[];r.forEach(t,function(e,t){null!==e&&void 0!==e&&(r.isArray(e)?t+="[]":e=[e],r.forEach(e,function(e){r.isDate(e)?e=e.toISOString():r.isObject(e)&&(e=JSON.stringify(e)),i.push(o(t)+"="+o(e))}))}),s=i.join("&")}if(s){var a=e.indexOf("#");-1!==a&&(e=e.slice(0,a)),e+=(-1===e.indexOf("?")?"?":"&")+s}return e}},zBDM:function(e,t,n){"use strict";(function(t){var r=n("La2s"),o=n("feM3"),s={"Content-Type":"application/x-www-form-urlencoded"};function i(e,t){!r.isUndefined(e)&&r.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var a,u={adapter:(void 0!==t&&"[object process]"===Object.prototype.toString.call(t)?a=n("Di/a"):"undefined"!=typeof XMLHttpRequest&&(a=n("Di/a")),a),transformRequest:[function(e,t){return o(t,"Accept"),o(t,"Content-Type"),r.isFormData(e)||r.isArrayBuffer(e)||r.isBuffer(e)||r.isStream(e)||r.isFile(e)||r.isBlob(e)?e:r.isArrayBufferView(e)?e.buffer:r.isURLSearchParams(e)?(i(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):r.isObject(e)?(i(t,"application/json;charset=utf-8"),JSON.stringify(e)):e}],transformResponse:[function(e){if("string"==typeof e)try{e=JSON.parse(e)}catch(e){}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,validateStatus:function(e){return e>=200&&e<300}};u.headers={common:{Accept:"application/json, text/plain, */*"}},r.forEach(["delete","get","head"],function(e){u.headers[e]={}}),r.forEach(["post","put","patch"],function(e){u.headers[e]=r.merge(s)}),e.exports=u}).call(t,n("W2nU"))}},["NHnr"]);
//# sourceMappingURL=app.961fe31649a953bd0bc1.js.map