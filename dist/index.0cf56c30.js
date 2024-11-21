var e,t,r,n,i,a,o,s,c,u,l,d,p,f,g,h,v=globalThis;function m(e){return e&&e.__esModule?e.default:e}var _={},b={},y=v.parcelRequire94c2;null==y&&((y=function(e){if(e in _)return _[e].exports;if(e in b){var t=b[e];delete b[e];var r={id:e,exports:{}};return _[e]=r,t.call(r.exports,r,r.exports),r.exports}var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){b[e]=t},v.parcelRequire94c2=y),(0,y.register)("27Lyk",function(e,t){Object.defineProperty(e.exports,"register",{get:()=>r,set:e=>r=e,enumerable:!0,configurable:!0});var r,n=new Map;r=function(e,t){for(var r=0;r<t.length-1;r+=2)n.set(t[r],{baseUrl:e,path:t[r+1]})}}),y("27Lyk").register(new URL("",import.meta.url).toString(),JSON.parse('["f9fpV","index.0cf56c30.js","hfd23","icons.c5b0f01c.svg"]'));var w={},k={},S=function(e){return e&&e.Math===Math&&e};k=S("object"==typeof globalThis&&globalThis)||S("object"==typeof window&&window)||S("object"==typeof self&&self)||S("object"==typeof v&&v)||S("object"==typeof k&&k)||function(){return this}()||Function("return this")();var E={},$={};E=!($=function(e){try{return!!e()}catch(e){return!0}})(function(){return 7!==Object.defineProperty({},1,{get:function(){return 7}})[1]});var O={},j={};j=!$(function(){var e=(function(){}).bind();return"function"!=typeof e||e.hasOwnProperty("prototype")});var M=Function.prototype.call;O=j?M.bind(M):function(){return M.apply(M,arguments)};var P={}.propertyIsEnumerable,L=Object.getOwnPropertyDescriptor;n=L&&!P.call({1:2},1)?function(e){var t=L(this,e);return!!t&&t.enumerable}:P;var H={};H=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}};var T={},q={},N={},x=Function.prototype,I=x.call,R=j&&x.bind.bind(I,I),C={},F=(N=j?R:function(e){return function(){return I.apply(e,arguments)}})({}.toString),D=N("".slice);C=function(e){return D(F(e),8,-1)};var A=Object,B=N("".split);q=$(function(){return!A("z").propertyIsEnumerable(0)})?function(e){return"String"===C(e)?B(e,""):A(e)}:A;var W={},U={};U=function(e){return null==e};var z=TypeError;W=function(e){if(U(e))throw new z("Can't call method on "+e);return e},T=function(e){return q(W(e))};var J={},V={},Q={},Y={},G="object"==typeof document&&document.all;Y=void 0===G&&void 0!==G?function(e){return"function"==typeof e||e===G}:function(e){return"function"==typeof e},Q=function(e){return"object"==typeof e?null!==e:Y(e)};var K={},X={};X=function(e,t){var r;return arguments.length<2?(r=k[e],Y(r)?r:void 0):k[e]&&k[e][t]};var Z={};Z=N({}.isPrototypeOf);var ee={},et={},er={},en={},ei=k.navigator,ea=ei&&ei.userAgent;en=ea?String(ea):"";var eo=k.process,es=k.Deno,ec=eo&&eo.versions||es&&es.version,eu=ec&&ec.v8;eu&&(a=(i=eu.split("."))[0]>0&&i[0]<4?1:+(i[0]+i[1])),!a&&en&&(!(i=en.match(/Edge\/(\d+)/))||i[1]>=74)&&(i=en.match(/Chrome\/(\d+)/))&&(a=+i[1]),er=a;var el=k.String;ee=(et=!!Object.getOwnPropertySymbols&&!$(function(){var e=Symbol("symbol detection");return!el(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&er&&er<41}))&&!Symbol.sham&&"symbol"==typeof Symbol.iterator;var ed=Object;K=ee?function(e){return"symbol"==typeof e}:function(e){var t=X("Symbol");return Y(t)&&Z(t.prototype,ed(e))};var ep={},ef={},eg={},eh=String;eg=function(e){try{return eh(e)}catch(e){return"Object"}};var ev=TypeError;ef=function(e){if(Y(e))return e;throw new ev(eg(e)+" is not a function")},ep=function(e,t){var r=e[t];return U(r)?void 0:ef(r)};var em={},e_=TypeError;em=function(e,t){var r,n;if("string"===t&&Y(r=e.toString)&&!Q(n=O(r,e))||Y(r=e.valueOf)&&!Q(n=O(r,e))||"string"!==t&&Y(r=e.toString)&&!Q(n=O(r,e)))return n;throw new e_("Can't convert object to primitive value")};var eb={},ey={},ew={};ew=!1;var ek={},eS=Object.defineProperty;ek=function(e,t){try{eS(k,e,{value:t,configurable:!0,writable:!0})}catch(r){k[e]=t}return t};var eE="__core-js_shared__",e$=ey=k[eE]||ek(eE,{});(e$.versions||(e$.versions=[])).push({version:"3.39.0",mode:ew?"pure":"global",copyright:"© 2014-2024 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.39.0/LICENSE",source:"https://github.com/zloirock/core-js"}),eb=function(e,t){return ey[e]||(ey[e]=t||{})};var eO={},ej={},eM=Object;ej=function(e){return eM(W(e))};var eP=N({}.hasOwnProperty);eO=Object.hasOwn||function(e,t){return eP(ej(e),t)};var eL={},eH=0,eT=Math.random(),eq=N(1..toString);eL=function(e){return"Symbol("+(void 0===e?"":e)+")_"+eq(++eH+eT,36)};var eN=k.Symbol,ex=eb("wks"),eI=ee?eN.for||eN:eN&&eN.withoutSetter||eL,eR=TypeError,eC=(eO(ex,e="toPrimitive")||(ex[e]=et&&eO(eN,e)?eN[e]:eI("Symbol."+e)),ex[e]);V=function(e,t){if(!Q(e)||K(e))return e;var r,n=ep(e,eC);if(n){if(void 0===t&&(t="default"),r=O(n,e,t),!Q(r)||K(r))return r;throw new eR("Can't convert object to primitive value")}return void 0===t&&(t="number"),em(e,t)},J=function(e){var t=V(e,"string");return K(t)?t:t+""};var eF={},eD={},eA=k.document,eB=Q(eA)&&Q(eA.createElement);eD=function(e){return eB?eA.createElement(e):{}},eF=!E&&!$(function(){return 7!==Object.defineProperty(eD("div"),"a",{get:function(){return 7}}).a});var eW=Object.getOwnPropertyDescriptor;r=E?eW:function(e,t){if(e=T(e),t=J(t),eF)try{return eW(e,t)}catch(e){}if(eO(e,t))return H(!O(n,e,t),e[t])};var eU={},ez={};ez=E&&$(function(){return 42!==Object.defineProperty(function(){},"prototype",{value:42,writable:!1}).prototype});var eJ={},eV=String,eQ=TypeError;eJ=function(e){if(Q(e))return e;throw new eQ(eV(e)+" is not an object")};var eY=TypeError,eG=Object.defineProperty,eK=Object.getOwnPropertyDescriptor,eX="enumerable",eZ="configurable",e0="writable";o=E?ez?function(e,t,r){if(eJ(e),t=J(t),eJ(r),"function"==typeof e&&"prototype"===t&&"value"in r&&e0 in r&&!r[e0]){var n=eK(e,t);n&&n[e0]&&(e[t]=r.value,r={configurable:eZ in r?r[eZ]:n[eZ],enumerable:eX in r?r[eX]:n[eX],writable:!1})}return eG(e,t,r)}:eG:function(e,t,r){if(eJ(e),t=J(t),eJ(r),eF)try{return eG(e,t,r)}catch(e){}if("get"in r||"set"in r)throw new eY("Accessors not supported");return"value"in r&&(e[t]=r.value),e},eU=E?function(e,t,r){return o(e,t,H(1,r))}:function(e,t,r){return e[t]=r,e};var e1={},e2={},e9=Function.prototype,e4=E&&Object.getOwnPropertyDescriptor,e3=eO(e9,"name")&&(!E||E&&e4(e9,"name").configurable),e7={},e8=N(Function.toString);Y(ey.inspectSource)||(ey.inspectSource=function(e){return e8(e)}),e7=ey.inspectSource;var e6={},e5={},te=k.WeakMap;e5=Y(te)&&/native code/.test(String(te));var tt={},tr=eb("keys");tt=function(e){return tr[e]||(tr[e]=eL(e))};var tn={};tn={};var ti="Object already initialized",ta=k.TypeError,to=k.WeakMap;if(e5||ey.state){var ts=ey.state||(ey.state=new to);ts.get=ts.get,ts.has=ts.has,ts.set=ts.set,s=function(e,t){if(ts.has(e))throw new ta(ti);return t.facade=e,ts.set(e,t),t},c=function(e){return ts.get(e)||{}},u=function(e){return ts.has(e)}}else{var tc=tt("state");tn[tc]=!0,s=function(e,t){if(eO(e,tc))throw new ta(ti);return t.facade=e,eU(e,tc,t),t},c=function(e){return eO(e,tc)?e[tc]:{}},u=function(e){return eO(e,tc)}}var tu=(e6={set:s,get:c,has:u,enforce:function(e){return u(e)?c(e):s(e,{})},getterFor:function(e){return function(t){var r;if(!Q(t)||(r=c(t)).type!==e)throw new ta("Incompatible receiver, "+e+" required");return r}}}).enforce,tl=e6.get,td=String,tp=Object.defineProperty,tf=N("".slice),tg=N("".replace),th=N([].join),tv=E&&!$(function(){return 8!==tp(function(){},"length",{value:8}).length}),tm=String(String).split("String"),t_=e2=function(e,t,r){"Symbol("===tf(td(t),0,7)&&(t="["+tg(td(t),/^Symbol\(([^)]*)\).*$/,"$1")+"]"),r&&r.getter&&(t="get "+t),r&&r.setter&&(t="set "+t),(!eO(e,"name")||e3&&e.name!==t)&&(E?tp(e,"name",{value:t,configurable:!0}):e.name=t),tv&&r&&eO(r,"arity")&&e.length!==r.arity&&tp(e,"length",{value:r.arity});try{r&&eO(r,"constructor")&&r.constructor?E&&tp(e,"prototype",{writable:!1}):e.prototype&&(e.prototype=void 0)}catch(e){}var n=tu(e);return eO(n,"source")||(n.source=th(tm,"string"==typeof t?t:"")),e};Function.prototype.toString=t_(function(){return Y(this)&&tl(this).source||e7(this)},"toString"),e1=function(e,t,r,n){n||(n={});var i=n.enumerable,a=void 0!==n.name?n.name:t;if(Y(r)&&e2(r,a,n),n.global)i?e[t]=r:ek(t,r);else{try{n.unsafe?e[t]&&(i=!0):delete e[t]}catch(e){}i?e[t]=r:o(e,t,{value:r,enumerable:!1,configurable:!n.nonConfigurable,writable:!n.nonWritable})}return e};var tb={},ty={},tw={},tk={},tS={},tE={},t$=Math.ceil,tO=Math.floor;tE=Math.trunc||function(e){var t=+e;return(t>0?tO:t$)(t)},tS=function(e){var t=+e;return t!=t||0===t?0:tE(t)};var tj=Math.max,tM=Math.min;tk=function(e,t){var r=tS(e);return r<0?tj(r+t,0):tM(r,t)};var tP={},tL={},tH=Math.min;tL=function(e){var t=tS(e);return t>0?tH(t,0x1fffffffffffff):0},tP=function(e){return tL(e.length)};var tT=function(e){return function(t,r,n){var i,a=T(t),o=tP(a);if(0===o)return!e&&-1;var s=tk(n,o);if(e&&r!=r){for(;o>s;)if((i=a[s++])!=i)return!0}else for(;o>s;s++)if((e||s in a)&&a[s]===r)return e||s||0;return!e&&-1}},tq={includes:tT(!0),indexOf:tT(!1)}.indexOf,tN=N([].push);tw=function(e,t){var r,n=T(e),i=0,a=[];for(r in n)!eO(tn,r)&&eO(n,r)&&tN(a,r);for(;t.length>i;)eO(n,r=t[i++])&&(~tq(a,r)||tN(a,r));return a};var tx=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"].concat("length","prototype");l=Object.getOwnPropertyNames||function(e){return tw(e,tx)},d=Object.getOwnPropertySymbols;var tI=N([].concat);ty=X("Reflect","ownKeys")||function(e){var t=l(eJ(e));return d?tI(t,d(e)):t},tb=function(e,t,n){for(var i=ty(t),a=0;a<i.length;a++){var s=i[a];eO(e,s)||n&&eO(n,s)||o(e,s,r(t,s))}};var tR={},tC=/#|\.prototype\./,tF=function(e,t){var r=tA[tD(e)];return r===tW||r!==tB&&(Y(t)?$(t):!!t)},tD=tF.normalize=function(e){return String(e).replace(tC,".").toLowerCase()},tA=tF.data={},tB=tF.NATIVE="N",tW=tF.POLYFILL="P";tR=tF,w=function(e,t){var n,i,a,o,s,c=e.target,u=e.global,l=e.stat;if(n=u?k:l?k[c]||ek(c,{}):k[c]&&k[c].prototype)for(i in t){if(o=t[i],a=e.dontCallGetSet?(s=r(n,i))&&s.value:n[i],!tR(u?i:c+(l?".":"#")+i,e.forced)&&void 0!==a){if(typeof o==typeof a)continue;tb(o,a)}(e.sham||a&&a.sham)&&eU(o,"sham",!0),e1(n,i,o,e)}};var tU={},tz={},tJ=Function.prototype,tV=tJ.apply,tQ=tJ.call;tz="object"==typeof Reflect&&Reflect.apply||(j?tQ.bind(tV):function(){return tQ.apply(tV,arguments)});var tY={},tG={},tK=(tG=function(e){if("Function"===C(e))return N(e)})(tG.bind);tY=function(e,t){return ef(e),void 0===t?e:j?tK(e,t):function(){return e.apply(t,arguments)}};var tX={};tX=X("document","documentElement");var tZ={};tZ=N([].slice);var t0={},t1=TypeError;t0=function(e,t){if(e<t)throw new t1("Not enough arguments");return e};var t2={};t2=/(?:ipad|iphone|ipod).*applewebkit/i.test(en);var t9={},t4={},t3=function(e){return en.slice(0,e.length)===e};t9="NODE"==(t4=t3("Bun/")?"BUN":t3("Cloudflare-Workers")?"CLOUDFLARE":t3("Deno/")?"DENO":t3("Node.js/")?"NODE":k.Bun&&"string"==typeof Bun.version?"BUN":k.Deno&&"object"==typeof Deno.version?"DENO":"process"===C(k.process)?"NODE":k.window&&k.document?"BROWSER":"REST");var t7=k.setImmediate,t8=k.clearImmediate,t6=k.process,t5=k.Dispatch,re=k.Function,rt=k.MessageChannel,rr=k.String,rn=0,ri={},ra="onreadystatechange";$(function(){p=k.location});var ro=function(e){if(eO(ri,e)){var t=ri[e];delete ri[e],t()}},rs=function(e){return function(){ro(e)}},rc=function(e){ro(e.data)},ru=function(e){k.postMessage(rr(e),p.protocol+"//"+p.host)};t7&&t8||(t7=function(e){t0(arguments.length,1);var t=Y(e)?e:re(e),r=tZ(arguments,1);return ri[++rn]=function(){tz(t,void 0,r)},f(rn),rn},t8=function(e){delete ri[e]},t9?f=function(e){t6.nextTick(rs(e))}:t5&&t5.now?f=function(e){t5.now(rs(e))}:rt&&!t2?(h=(g=new rt).port2,g.port1.onmessage=rc,f=tY(h.postMessage,h)):k.addEventListener&&Y(k.postMessage)&&!k.importScripts&&p&&"file:"!==p.protocol&&!$(ru)?(f=ru,k.addEventListener("message",rc,!1)):f=ra in eD("script")?function(e){tX.appendChild(eD("script"))[ra]=function(){tX.removeChild(this),ro(e)}}:function(e){setTimeout(rs(e),0)});var rl=(tU={set:t7,clear:t8}).clear;w({global:!0,bind:!0,enumerable:!0,forced:k.clearImmediate!==rl},{clearImmediate:rl});var rd=tU.set,rp={},rf=k.Function,rg=/MSIE .\./.test(en)||"BUN"===t4&&((t=k.Bun.version.split(".")).length<3||"0"===t[0]&&(t[1]<3||"3"===t[1]&&"0"===t[2]));rp=function(e,t){var r=t?2:1;return rg?function(n,i){var a=t0(arguments.length,1)>r,o=Y(n)?n:rf(n),s=a?tZ(arguments,r):[],c=a?function(){tz(o,this,s)}:o;return t?e(c,i):e(c)}:e};var rh=k.setImmediate?rp(rd,!1):rd;w({global:!0,bind:!0,enumerable:!0,forced:k.setImmediate!==rh},{setImmediate:rh});const rv="https://forkify-api.herokuapp.com/api/v2/recipes",rm="d42dd229-744b-4a36-99de-11301a74c6d5",r_=async function(e,t){try{let r=t?fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}):fetch(e),n=await Promise.race([r,new Promise(function(e,t){setTimeout(function(){t(Error("Request took too long! Timeout after 10 second"))},1e4)})]),i=await n.json();if(!n.ok)throw Error(`${i.message} (${n.status})`);return i}catch(e){throw e}},rb={recipe:{},search:{query:"",results:[],resultsPerPage:10,page:1},bookmarks:[]},ry=function(e){let t=e.data.recipe;return{id:t.id,title:t.title,publisher:t.publisher,sourceURL:t.source_url,image:t.image_url,servings:t.servings,cookingTime:t.cooking_time,ingredients:t.ingredients,...t.key&&{key:t.key}}},rw=async function(e){try{let t=await r_(`${rv}/${e}?key=${rm}`);rb.recipe=ry(t),rb.bookmarks.some(t=>t.id===e)&&(rb.recipe.bookmarked=!0)}catch(e){throw e}},rk=async function(e){try{rb.search.query=e;let t=await r_(`${rv}?search=${e}&key=${rm}`);console.log("data",t),rb.search.results=t.data.recipes.map(e=>({id:e.id,title:e.title,publisher:e.publisher,image:e.image_url,...e.key&&{key:e.key}})),rb.search.page=1}catch(e){throw e}},rS=function(e=rb.search.page){rb.search.page=e;let t=e*rb.search.resultsPerPage;return rb.search.results.slice((e-1)*10,t)},rE=function(e){rb.recipe.ingredients.forEach(t=>{t.quantity=t.quantity*e/rb.recipe.servings}),rb.recipe.servings=e},r$=function(){localStorage.setItem("bookmarks",JSON.stringify(rb.bookmarks))},rO=function(e){rb.bookmarks.push(e),e.id===rb.recipe.id&&(rb.recipe.bookmarked=!0),r$()},rj=function(e){let t=rb.bookmarks.findIndex(t=>t.id===e);rb.bookmarks.splice(t,1),e===rb.recipe.id&&(rb.recipe.bookmarked=!1),r$()};!function(){let e=localStorage.getItem("bookmarks");e&&(rb.bookmarks=JSON.parse(e))}();const rM=async function(e){try{let t=Object.entries(e).filter(e=>e[0].startsWith("ingredient")&&""!==e[1]).map(e=>{let t=e[1].split(",").map(e=>e.trim());if(3!==t.length)throw Error("Wrong ingredient format.  Please use the correct format");let[r,n,i]=t;return{quantity:r?+r:null,unit:n,description:i}}),r={title:e.title,source_url:e.sourceUrl,image_url:e.image,publisher:e.publisher,cooking_time:+e.cookingTime,servings:+e.servings,ingredients:t},n=await r_(`${rv}?search=${r.title}&key=${rm}`,r);console.log("uploaded recipe",n),rb.recipe=ry(n),rO(rb.recipe)}catch(e){throw e}};var rP={};rP=new URL("icons.c5b0f01c.svg",import.meta.url).toString();var rL={};function rH(e,t,r,n,i){var a,o,s;let c=[2,3,5];if(!0===i)for(let t=3;t*t<=e;t+=2)e%t==0&&c.push(t);let u=0,l=e,d=t;for(;u<=c.length;)l%c[u]==0&&d%c[u]==0?(c[u],l/=c[u],d/=c[u]):u++;return a=d,o=l,s=r,1===a&&1===o?(s=`${n}${(parseInt(s)+1).toString()}`,`${s}`):0===o?`${n}${s}`:"0"==s?`${n}${o}/${a}`:`${n}${s} ${o}/${a}`}rL=function(e){let t,r;if(e<0?(e=Math.abs(e),t="-"):t="",void 0===e)return"Your input was undefined.";if(isNaN(e))return`"${e}" is not a number.`;if(1e16==e)return`${t}9999999999999999`;if(e>1e16)return"Too many digits in your integer to maintain IEEE 754 Floating Point conversion accuracy.";if(Number.isInteger(e))return`${t}${e}`;if(e<1e-6)return"0";let n=e.toString(),i=n.split("."),a=i[0];if("0"==r&&"0"!==a)return a;if("0"==r&&"0"==a)return"0";if("99"==(r=n.length>=17?i[1].slice(0,i[1].length-1):i[1])&&"0"!==a)return`${a} 99/100`;if("99"==r&&"0"==a)return"99/100";if(1-parseFloat(`.${r}`)<.0011&&(r="999"),void 0==r)return a;let o=r.split("").reverse().join("").match(/^(\d+)\1{1,2}/);if(!o||!(r.length>2)){var s,c;return s=r,c=t,rH(parseInt(s,10),Math.pow(10,s.length),a,c,!1)}{let e=o[0].split("").reverse().join(""),n=o[1].split("").reverse().join("");if(n.length>1){let e=n.split(""),t=1;for(let r=0;r<e.length;r++)t/=e[0]/e[r];1===t&&(n=e[0])}return n.length>1&&n.length%2==0&&(n=parseInt(n.slice(0,n.length/2),10)-parseInt(n.slice(n.length/2,n.length),10)==0?n.slice(0,n.length/2):n),function(e,t,r,n,i){let a=e.length-r.length>=1?e.length-r.length:1,o=Math.pow(10,a),s=parseFloat(`0.${e}`),c=Math.pow(10,t.length);return rH(Math.round((s*c-s)*Math.pow(10,a)),(c-1)*o,n,i,!0)}(r,n,e,a,t)}};class rT{_data;render(e,t=!0){if(!e||Array.isArray(e)&&0===e.length)return console.log("no data"),this.renderError();this._data=e;let r=this._generateMarkup();if(!t)return r;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",r)}update(e){this._data=e;let t=this._generateMarkup(),r=Array.from(document.createRange().createContextualFragment(t).querySelectorAll("*")),n=Array.from(this._parentElement.querySelectorAll("*"));r.forEach((e,t)=>{let r=n[t];e.isEqualNode(r)||e.firstChild?.nodeValue.trimEnd()===""||(r.textContent=e.textContent),e.isEqualNode(r)||Array.from(e.attributes).forEach(e=>r.setAttribute(e.name,e.value))})}renderSpinner(){let e=`
        <div class="spinner">
          <svg>
            <use href="${/*@__PURE__*/m(rP)}#icon-loader"></use>
          </svg>
        </div>
    `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",e)}renderError(e=this._errorMessage){let t=`
        <div class="error">
          <div>
            <svg>
              <use href="${/*@__PURE__*/m(rP)}#icon-alert-triangle"></use>
            </svg>
          </div>
          <p>${e}</p>
        </div> 
    `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",t)}renderMessage(e=this._message){let t=`
        <div class="message">
          <div>
            <svg>
              <use href="${/*@__PURE__*/m(rP)}#icon-smile"></use>
            </svg>
          </div>
          <p>${e}</p>
        </div> 
    `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",t)}_clear(){this._parentElement.innerHTML=""}}class rq extends rT{_parentElement=document.querySelector(".recipe");_errorMessage="We could not find that recipe.  Please try another one!";_message="";addHandleRender(e){["hashchange","load"].forEach(t=>window.addEventListener(t,e))}addHandlerUpdateServings(e){this._parentElement.addEventListener("click",function(t){let r=t.target.closest(".btn--update-servings");if(!r)return;let{updateTo:n}=r.dataset;+n>0&&e(+n)})}addHandlerAddBookmark(e){this._parentElement.addEventListener("click",function(t){t.target.closest(".btn--bookmark")&&e()})}_generateMarkup(){return` 
    <figure class="recipe__fig">
         <img src=${this._data.image} alt=${this._data.title} class="recipe__img" />
         <h1 class="recipe__title">
           <span>${this._data.title}</span>
         </h1>
       </figure>

       <div class="recipe__details">
         <div class="recipe__info">
           <svg class="recipe__info-icon">
             <use href="${/*@__PURE__*/m(rP)}#icon-clock"></use>
           </svg>
           <span class="recipe__info-data recipe__info-data--minutes">${this._data.cookingTime}</span>
           <span class="recipe__info-text">minutes</span>
         </div>
         <div class="recipe__info">
           <svg class="recipe__info-icon">
             <use href="${/*@__PURE__*/m(rP)}#icon-users"></use>
           </svg>
           <span class="recipe__info-data recipe__info-data--people">${this._data.servings}</span>
           <span class="recipe__info-text">servings</span>

           <div class="recipe__info-buttons">
             <button class="btn--tiny btn--update-servings" data-update-to="${this._data.servings-1}">
               <svg>
                 <use href="${/*@__PURE__*/m(rP)}#icon-minus-circle"></use>
               </svg>
             </button>
             <button class="btn--tiny btn--update-servings" data-update-to="${this._data.servings+1}">
               <svg>
                 <use href="${/*@__PURE__*/m(rP)}#icon-plus-circle"></use>
               </svg>
             </button>
           </div>
         </div>

         <div class="recipe__user-generated ${this._data.key?"":"hidden"}">
            <svg>
              <use href="${/*@__PURE__*/m(rP)}#icon-user"></use>
            </svg>
         </div>
         <button class="btn--round btn--bookmark">
           <svg class="">
             <use href="${/*@__PURE__*/m(rP)}#icon-bookmark${this._data.bookmarked?"-fill":""}"></use>
           </svg>
         </button>
       </div>

       <div class="recipe__ingredients">
         <h2 class="heading--2">Recipe ingredients</h2>
         <ul class="recipe__ingredient-list">
         ${this._data.ingredients.map(this._generateMarkupIngredient).join("")}


         </ul>
       </div>

       <div class="recipe__directions">
         <h2 class="heading--2">How to cook it</h2>
         <p class="recipe__directions-text">
           This recipe was carefully designed and tested by
           <span class="recipe__publisher">${this._data.publisher}</span>. Please check out
           directions at their website.
         </p>
         <a
           class="btn--small recipe__btn"
           href=${this._data.sourceURL}
           target="_blank"
         >
           <span>Directions</span>
           <svg class="search__icon">
             <use href="${/*@__PURE__*/m(rP)}#icon-arrow-right"></use>
           </svg>
         </a>
       </div>
   `}_generateMarkupIngredient(e){return`
      <li class="recipe__ingredient">
      <svg class="recipe__icon">
        <use href="${/*@__PURE__*/m(rP)}#icon-check"></use>
      </svg>
      <div class="recipe__quantity">${e.quantity?/*@__PURE__*/m(rL)(e.quantity):""}</div>
      <div class="recipe__description">
        <span class="recipe__unit">${e.unit}</span>
        ${e.description}
      </div>
    </li>
    `}}var rN=new rq;class rx{_parentElement=document.querySelector(".search");getQuery(){let e=this._parentElement.querySelector(".search__field").value;return this._clearInput(),e}_clearInput(){this._parentElement.querySelector(".search__field").value=""}addHandlerSearch(e){this._parentElement.addEventListener("submit",function(t){t.preventDefault(),e()})}}var rI=new rx,rR=new class extends rT{_parentElement="";_generateMarkup(){let e=window.location.hash.slice(1);return`
        <li class="preview">
          <a class="preview__link ${e===this._data.id?"preview__link--active":""}" href=#${this._data.id}>
            <figure class="preview__fig">
              <img src=${this._data.image} alt=${this._data.title} />
            </figure>
            <div class="preview__data">
              <h4 class="preview__title">${this._data.title}</h4>
              <p class="preview__publisher">${this._data.publisher}</p>
              <div class="preview__user-generated ${this._data.key?"":"hidden"}">
                <svg>
                <use href="${/*@__PURE__*/m(rP)}#icon-user"></use>
                </svg>
              </div>
            </div>
          </a>
        </li>
    `}};class rC extends rT{_errorMessage="No recipes found for your query! Please try again";_message="";_parentElement=document.querySelector(".results");_generateMarkup(){return this._data.map(e=>rR.render(e,!1)).join("")}}var rF=new rC;class rD extends rT{_errorMessage="No bookmarks yet! Find a nice recipe and bookmark it";_message="";_parentElement=document.querySelector(".bookmarks__list");addHandlerRender(e){window.addEventListener("load",e)}_generateMarkup(){return this._data.map(e=>rR.render(e,!1)).join("")}}var rA=new rD;class rB extends rT{_parentElement=document.querySelector(".pagination");addHanderClick(e){this._parentElement.addEventListener("click",function(t){let r=t.target.closest(".btn--inline");r&&e(+r.dataset.goto)})}_generateMarkup(){let e=this._data.page,t=!1,r=!1,n=Math.ceil(this._data.results.length/this._data.resultsPerPage);return 1===e&&n>1?(r=!0,this._getButtonHTML(t,r,e)):e===n&&n>1?(t=!0,this._getButtonHTML(t,r,e)):e<n?(t=!0,r=!0,this._getButtonHTML(t,r,e)):""}_getPrevButton(e){return`
        <button data-goto="${e-1}" class="btn--inline pagination__btn--prev">
          <svg class="search__icon">
            <use href="${/*@__PURE__*/m(rP)}#icon-arrow-left"></use>
          </svg>
          <span>Page ${e-1}</span>
        </button>
    `}_getNextButton(e){return`   
        <button data-goto="${e+1}" class="btn--inline pagination__btn--next">
          <span>Page ${e+1}</span>
          <svg class="search__icon">
            <use href="${/*@__PURE__*/m(rP)}#icon-arrow-right"></use>
          </svg>
        </button>`}_getButtonHTML(e,t,r){let n="";return(e||t)&&(e&&(n+=this._getPrevButton(r)),t&&(n+=this._getNextButton(r))),n}}var rW=new rB;class rU extends rT{_parentElement=document.querySelector(".upload");_window=document.querySelector(".add-recipe-window");_message="Recipe was successfully uploaded ;)";_overlay=document.querySelector(".overlay");_btnOpen=document.querySelector(".nav__btn--add-recipe");_btnClose=document.querySelector(".btn--close-modal");constructor(){super(),this._addHandlerShowWindow(),this._addHandlerHideWindow()}toggleWindow(){this._overlay.classList.toggle("hidden"),this._window.classList.toggle("hidden")}_addHandlerShowWindow(){console.log("addHandlerShowWindow"),this._btnOpen.addEventListener("click",this.toggleWindow.bind(this))}_addHandlerHideWindow(){this._btnClose.addEventListener("click",this.toggleWindow.bind(this)),this._overlay.addEventListener("click",this.toggleWindow.bind(this))}addHandlerUpload(e){this._parentElement.addEventListener("submit",function(t){t.preventDefault(),e(Object.fromEntries([...new FormData(this)]))})}_generateMarkup(){}}var rz=new rU;const rJ=async function(){try{let e=window.location.hash.slice(1);if(!e)return;rN.renderSpinner(),rF.update(rS()),rA.update(rb.bookmarks),await rw(e),rN.render(rb.recipe);let{recipe:t}=rb}catch(e){rN.renderError()}},rV=async function(){try{let e=rI.getQuery();if(!e)return;await rk(e),rF.render(rS()),rW.render(rb.search)}catch(e){console.log(e)}};rV();const rQ=async function(e){try{rz.renderSpinner(),await rM(e),console.log(rb.recipe),rN.render(rb.recipe),rz.renderMessage(),rA.render(rb.bookmarks),window.history.pushState(null,"",`#${rb.recipe.id}`),setTimeout(function(){rz.toggleWindow()},2500)}catch(e){console.error(e),rz.renderError(e.message)}};rA.addHandlerRender(function(){rA.render(rb.bookmarks)}),rN.addHandleRender(rJ),rN.addHandlerUpdateServings(function(e){rE(e),rN.update(rb.recipe)}),rN.addHandlerAddBookmark(function(){rb.recipe.bookmarked?rj(rb.recipe.id):rO(rb.recipe),rN.update(rb.recipe),rA.render(rb.bookmarks)}),rI.addHandlerSearch(rV),rW.addHanderClick(function(e){rF.render(rS(e)),rW.render(rb.search)}),rz.addHandlerUpload(rQ);
//# sourceMappingURL=index.0cf56c30.js.map
