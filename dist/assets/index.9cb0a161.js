(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();const $={};function lc(e){$.context=e}const cc=(e,t)=>e===t,yi=Symbol("solid-proxy"),Sn={equals:cc};let Mo=Fo;const Re=1,En=2,$o={owned:null,cleanups:null,context:null,owner:null},vr={};var F=null;let Ke=null,B=null,K=null,Ie=null,bi=0;function uc(e,t){const n=B,r=F,i=e.length===0,s=i?$o:{owned:null,cleanups:null,context:null,owner:t||r},o=i?e:()=>e(()=>Se(()=>_i(s)));F=s,B=null;try{return Ze(o,!0)}finally{B=n,F=r}}function be(e,t){t=t?Object.assign({},Sn,t):Sn;const n={value:e,observers:null,observerSlots:null,comparator:t.equals||void 0},r=i=>(typeof i=="function"&&(i=i(n.value)),jo(n,i));return[Uo.bind(n),r]}function ms(e,t,n){const r=qn(e,t,!0,Re);yt(r)}function $e(e,t,n){const r=qn(e,t,!1,Re);yt(r)}function Gn(e,t,n){Mo=yc;const r=qn(e,t,!1,Re);r.user=!0,Ie?Ie.push(r):yt(r)}function V(e,t,n){n=n?Object.assign({},Sn,n):Sn;const r=qn(e,t,!0,0);return r.observers=null,r.observerSlots=null,r.comparator=n.equals||void 0,yt(r),Uo.bind(r)}function hc(e,t,n){let r,i,s;arguments.length===2&&typeof t=="object"||arguments.length===1?(r=!0,i=e,s=t||{}):(r=e,i=t,s=n||{});let o=null,a=vr,l=null,c=!1,u="initialValue"in s,d=typeof r=="function"&&V(r);const h=new Set,[f,g]=(s.storage||be)(s.initialValue),[b,v]=be(void 0),[y,S]=be(void 0,{equals:!1}),[A,T]=be(u?"ready":"unresolved");if($.context){l=`${$.context.id}${$.context.count++}`;let E;s.ssrLoadFrom==="initial"?a=s.initialValue:$.load&&(E=$.load(l))&&(a=E[0])}function M(E,k,R,j){return o===E&&(o=null,u=!0,(E===a||k===a)&&s.onHydrated&&queueMicrotask(()=>s.onHydrated(j,{value:k})),a=vr,x(k,R)),k}function x(E,k){Ze(()=>{k||g(()=>E),T(k?"errored":"ready"),v(k);for(const R of h.keys())R.decrement();h.clear()},!1)}function D(){const E=gc,k=f(),R=b();if(R&&!o)throw R;return B&&!B.user&&E&&ms(()=>{y(),o&&(E.resolved||h.has(E)||(E.increment(),h.add(E)))}),k}function N(E=!0){if(E!==!1&&c)return;c=!1;const k=d?d():r;if(k==null||k===!1){M(o,Se(f));return}const R=a!==vr?a:Se(()=>i(k,{value:f(),refetching:E}));return typeof R!="object"||!(R&&"then"in R)?(M(o,R),R):(o=R,c=!0,queueMicrotask(()=>c=!1),Ze(()=>{T(u?"refreshing":"pending"),S()},!1),R.then(j=>M(R,j,void 0,k),j=>M(R,void 0,zo(j))))}return Object.defineProperties(D,{state:{get:()=>A()},error:{get:()=>b()},loading:{get(){const E=A();return E==="pending"||E==="refreshing"}},latest:{get(){if(!u)return D();const E=b();if(E&&!o)throw E;return f()}}}),d?ms(()=>N(!1)):N(!1),[D,{refetch:N,mutate:g}]}function Se(e){const t=B;B=null;try{return e()}finally{B=t}}function dc(e){Gn(()=>Se(e))}function Bo(e){return F===null||(F.cleanups===null?F.cleanups=[e]:F.cleanups.push(e)),e}function mt(e,t){const n=Symbol("context");return{id:n,Provider:bc(n),defaultValue:e}}function Ft(e){let t;return(t=Wo(F,e.id))!==void 0?t:e.defaultValue}function fc(e){const t=V(e),n=V(()=>Wr(t()));return n.toArray=()=>{const r=n();return Array.isArray(r)?r:r!=null?[r]:[]},n}let gc;function Uo(){const e=Ke;if(this.sources&&(this.state||e))if(this.state===Re||e)yt(this);else{const t=K;K=null,Ze(()=>kn(this),!1),K=t}if(B){const t=this.observers?this.observers.length:0;B.sources?(B.sources.push(this),B.sourceSlots.push(t)):(B.sources=[this],B.sourceSlots=[t]),this.observers?(this.observers.push(B),this.observerSlots.push(B.sources.length-1)):(this.observers=[B],this.observerSlots=[B.sources.length-1])}return this.value}function jo(e,t,n){let r=e.value;return(!e.comparator||!e.comparator(r,t))&&(e.value=t,e.observers&&e.observers.length&&Ze(()=>{for(let i=0;i<e.observers.length;i+=1){const s=e.observers[i],o=Ke&&Ke.running;o&&Ke.disposed.has(s),(o&&!s.tState||!o&&!s.state)&&(s.pure?K.push(s):Ie.push(s),s.observers&&Ho(s)),o||(s.state=Re)}if(K.length>1e6)throw K=[],new Error},!1)),t}function yt(e){if(!e.fn)return;_i(e);const t=F,n=B,r=bi;B=F=e,pc(e,e.value,r),B=n,F=t}function pc(e,t,n){let r;try{r=e.fn(t)}catch(i){e.pure&&(e.state=Re),Vo(i)}(!e.updatedAt||e.updatedAt<=n)&&(e.updatedAt!=null&&"observers"in e?jo(e,r):e.value=r,e.updatedAt=n)}function qn(e,t,n,r=Re,i){const s={fn:e,state:r,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:F,context:null,pure:n};return F===null||F!==$o&&(F.owned?F.owned.push(s):F.owned=[s]),s}function Tn(e){const t=Ke;if(e.state===0||t)return;if(e.state===En||t)return kn(e);if(e.suspense&&Se(e.suspense.inFallback))return e.suspense.effects.push(e);const n=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<bi);)(e.state||t)&&n.push(e);for(let r=n.length-1;r>=0;r--)if(e=n[r],e.state===Re||t)yt(e);else if(e.state===En||t){const i=K;K=null,Ze(()=>kn(e,n[0]),!1),K=i}}function Ze(e,t){if(K)return e();let n=!1;t||(K=[]),Ie?n=!0:Ie=[],bi++;try{const r=e();return mc(n),r}catch(r){K||(Ie=null),Vo(r)}}function mc(e){if(K&&(Fo(K),K=null),e)return;const t=Ie;Ie=null,t.length&&Ze(()=>Mo(t),!1)}function Fo(e){for(let t=0;t<e.length;t++)Tn(e[t])}function yc(e){let t,n=0;for(t=0;t<e.length;t++){const r=e[t];r.user?e[n++]=r:Tn(r)}for($.context&&lc(),t=0;t<n;t++)Tn(e[t])}function kn(e,t){const n=Ke;e.state=0;for(let r=0;r<e.sources.length;r+=1){const i=e.sources[r];i.sources&&(i.state===Re||n?i!==t&&Tn(i):(i.state===En||n)&&kn(i,t))}}function Ho(e){const t=Ke;for(let n=0;n<e.observers.length;n+=1){const r=e.observers[n];(!r.state||t)&&(r.state=En,r.pure?K.push(r):Ie.push(r),r.observers&&Ho(r))}}function _i(e){let t;if(e.sources)for(;e.sources.length;){const n=e.sources.pop(),r=e.sourceSlots.pop(),i=n.observers;if(i&&i.length){const s=i.pop(),o=n.observerSlots.pop();r<i.length&&(s.sourceSlots[o]=r,i[r]=s,n.observerSlots[r]=o)}}if(e.owned){for(t=0;t<e.owned.length;t++)_i(e.owned[t]);e.owned=null}if(e.cleanups){for(t=0;t<e.cleanups.length;t++)e.cleanups[t]();e.cleanups=null}e.state=0,e.context=null}function zo(e){return e instanceof Error||typeof e=="string"?e:new Error("Unknown error")}function Vo(e){throw e=zo(e),e}function Wo(e,t){return e?e.context&&e.context[t]!==void 0?e.context[t]:Wo(e.owner,t):void 0}function Wr(e){if(typeof e=="function"&&!e.length)return Wr(e());if(Array.isArray(e)){const t=[];for(let n=0;n<e.length;n++){const r=Wr(e[n]);Array.isArray(r)?t.push.apply(t,r):t.push(r)}return t}return e}function bc(e,t){return function(r){let i;return $e(()=>i=Se(()=>(F.context={[e]:r.value},fc(()=>r.children))),void 0),i}}function _(e,t){return Se(()=>e(t||{}))}function ln(){return!0}const Go={get(e,t,n){return t===yi?n:e.get(t)},has(e,t){return e.has(t)},set:ln,deleteProperty:ln,getOwnPropertyDescriptor(e,t){return{configurable:!0,enumerable:!0,get(){return e.get(t)},set:ln,deleteProperty:ln}},ownKeys(e){return e.keys()}};function wr(e){return(e=typeof e=="function"?e():e)?e:{}}function X(...e){if(e.some(n=>n&&(yi in n||typeof n=="function")))return new Proxy({get(n){for(let r=e.length-1;r>=0;r--){const i=wr(e[r])[n];if(i!==void 0)return i}},has(n){for(let r=e.length-1;r>=0;r--)if(n in wr(e[r]))return!0;return!1},keys(){const n=[];for(let r=0;r<e.length;r++)n.push(...Object.keys(wr(e[r])));return[...new Set(n)]}},Go);const t={};for(let n=e.length-1;n>=0;n--)if(e[n]){const r=Object.getOwnPropertyDescriptors(e[n]);for(const i in r)i in t||Object.defineProperty(t,i,{enumerable:!0,get(){for(let s=e.length-1;s>=0;s--){const o=(e[s]||{})[i];if(o!==void 0)return o}}})}return t}function oe(e,...t){const n=new Set(t.flat()),r=Object.getOwnPropertyDescriptors(e),i=yi in e;i||t.push(Object.keys(r).filter(o=>!n.has(o)));const s=t.map(o=>{const a={};for(let l=0;l<o.length;l++){const c=o[l];!i&&!(c in e)||Object.defineProperty(a,c,r[c]?r[c]:{get(){return e[c]},set(){return!0},enumerable:!0})}return a});return i&&s.push(new Proxy({get(o){return n.has(o)?void 0:e[o]},has(o){return n.has(o)?!1:o in e},keys(){return Object.keys(e).filter(o=>!n.has(o))}},Go)),s}function de(e){let t=!1;const n=e.keyed,r=V(()=>e.when,void 0,{equals:(i,s)=>t?i===s:!i==!s});return V(()=>{const i=r();if(i){const s=e.children,o=typeof s=="function"&&s.length>0;return t=n||o,o?Se(()=>s(i)):s}return e.fallback})}const _c=["allowfullscreen","async","autofocus","autoplay","checked","controls","default","disabled","formnovalidate","hidden","indeterminate","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","seamless","selected"],vc=new Set(["className","value","readOnly","formNoValidate","isMap","noModule","playsInline",..._c]),wc=new Set(["innerHTML","textContent","innerText","children"]),Ic=Object.assign(Object.create(null),{className:"class",htmlFor:"for"}),ys=Object.assign(Object.create(null),{class:"className",formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly"}),Sc=new Set(["beforeinput","click","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"]),Ec=new Set(["altGlyph","altGlyphDef","altGlyphItem","animate","animateColor","animateMotion","animateTransform","circle","clipPath","color-profile","cursor","defs","desc","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","font","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignObject","g","glyph","glyphRef","hkern","image","line","linearGradient","marker","mask","metadata","missing-glyph","mpath","path","pattern","polygon","polyline","radialGradient","rect","set","stop","svg","switch","symbol","text","textPath","tref","tspan","use","view","vkern"]),Tc={xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace"};function kc(e,t,n){let r=n.length,i=t.length,s=r,o=0,a=0,l=t[i-1].nextSibling,c=null;for(;o<i||a<s;){if(t[o]===n[a]){o++,a++;continue}for(;t[i-1]===n[s-1];)i--,s--;if(i===o){const u=s<r?a?n[a-1].nextSibling:n[s-a]:l;for(;a<s;)e.insertBefore(n[a++],u)}else if(s===a)for(;o<i;)(!c||!c.has(t[o]))&&t[o].remove(),o++;else if(t[o]===n[s-1]&&n[a]===t[i-1]){const u=t[--i].nextSibling;e.insertBefore(n[a++],t[o++].nextSibling),e.insertBefore(n[--s],u),t[i]=n[s]}else{if(!c){c=new Map;let d=a;for(;d<s;)c.set(n[d],d++)}const u=c.get(t[o]);if(u!=null)if(a<u&&u<s){let d=o,h=1,f;for(;++d<i&&d<s&&!((f=c.get(t[d]))==null||f!==u+h);)h++;if(h>u-a){const g=t[o];for(;a<u;)e.insertBefore(n[a++],g)}else e.replaceChild(n[a++],t[o++])}else o++;else t[o++].remove()}}}const bs="_$DX_DELEGATE";function Cc(e,t,n,r={}){let i;return uc(s=>{i=s,t===document?e():vi(t,e(),t.firstChild?null:void 0,n)},r.owner),()=>{i(),t.textContent=""}}function Ht(e,t,n){const r=document.createElement("template");r.innerHTML=e;let i=r.content.firstChild;return n&&(i=i.firstChild),i}function Ac(e,t=window.document){const n=t[bs]||(t[bs]=new Set);for(let r=0,i=e.length;r<i;r++){const s=e[r];n.has(s)||(n.add(s),t.addEventListener(s,Bc))}}function qo(e,t,n){n==null?e.removeAttribute(t):e.setAttribute(t,n)}function Rc(e,t,n,r){r==null?e.removeAttributeNS(t,n):e.setAttributeNS(t,n,r)}function xc(e,t){t==null?e.removeAttribute("class"):e.className=t}function Oc(e,t,n,r){if(r)Array.isArray(n)?(e[`$$${t}`]=n[0],e[`$$${t}Data`]=n[1]):e[`$$${t}`]=n;else if(Array.isArray(n)){const i=n[0];e.addEventListener(t,n[0]=s=>i.call(e,n[1],s))}else e.addEventListener(t,n)}function Pc(e,t,n={}){const r=Object.keys(t||{}),i=Object.keys(n);let s,o;for(s=0,o=i.length;s<o;s++){const a=i[s];!a||a==="undefined"||t[a]||(_s(e,a,!1),delete n[a])}for(s=0,o=r.length;s<o;s++){const a=r[s],l=!!t[a];!a||a==="undefined"||n[a]===l||!l||(_s(e,a,!0),n[a]=l)}return n}function Nc(e,t,n){if(!t)return n?qo(e,"style"):t;const r=e.style;if(typeof t=="string")return r.cssText=t;typeof n=="string"&&(r.cssText=n=void 0),n||(n={}),t||(t={});let i,s;for(s in n)t[s]==null&&r.removeProperty(s),delete n[s];for(s in t)i=t[s],i!==n[s]&&(r.setProperty(s,i),n[s]=i);return n}function Dc(e,t={},n,r){const i={};return r||$e(()=>i.children=ft(e,t.children,i.children)),$e(()=>t.ref&&t.ref(e)),$e(()=>Lc(e,t,n,!0,i,!0)),i}function vi(e,t,n,r){if(n!==void 0&&!r&&(r=[]),typeof t!="function")return ft(e,t,r,n);$e(i=>ft(e,t(),i,n),r)}function Lc(e,t,n,r,i={},s=!1){t||(t={});for(const o in i)if(!(o in t)){if(o==="children")continue;i[o]=vs(e,o,null,i[o],n,s)}for(const o in t){if(o==="children"){r||ft(e,t.children);continue}const a=t[o];i[o]=vs(e,o,a,i[o],n,s)}}function Mc(e){let t,n;return!$.context||!(t=$.registry.get(n=Uc()))?e.cloneNode(!0):($.completed&&$.completed.add(t),$.registry.delete(n),t)}function $c(e){return e.toLowerCase().replace(/-([a-z])/g,(t,n)=>n.toUpperCase())}function _s(e,t,n){const r=t.trim().split(/\s+/);for(let i=0,s=r.length;i<s;i++)e.classList.toggle(r[i],n)}function vs(e,t,n,r,i,s){let o,a,l;if(t==="style")return Nc(e,n,r);if(t==="classList")return Pc(e,n,r);if(n===r)return r;if(t==="ref")s||n(e);else if(t.slice(0,3)==="on:"){const c=t.slice(3);r&&e.removeEventListener(c,r),n&&e.addEventListener(c,n)}else if(t.slice(0,10)==="oncapture:"){const c=t.slice(10);r&&e.removeEventListener(c,r,!0),n&&e.addEventListener(c,n,!0)}else if(t.slice(0,2)==="on"){const c=t.slice(2).toLowerCase(),u=Sc.has(c);if(!u&&r){const d=Array.isArray(r)?r[0]:r;e.removeEventListener(c,d)}(u||n)&&(Oc(e,c,n,u),u&&Ac([c]))}else if((l=wc.has(t))||!i&&(ys[t]||(a=vc.has(t)))||(o=e.nodeName.includes("-")))t==="class"||t==="className"?xc(e,n):o&&!a&&!l?e[$c(t)]=n:e[ys[t]||t]=n;else{const c=i&&t.indexOf(":")>-1&&Tc[t.split(":")[0]];c?Rc(e,c,t,n):qo(e,Ic[t]||t,n)}return n}function Bc(e){const t=`$$${e.type}`;let n=e.composedPath&&e.composedPath()[0]||e.target;for(e.target!==n&&Object.defineProperty(e,"target",{configurable:!0,value:n}),Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return n||document}}),$.registry&&!$.done&&($.done=!0,document.querySelectorAll("[id^=pl-]").forEach(r=>r.remove()));n!==null;){const r=n[t];if(r&&!n.disabled){const i=n[`${t}Data`];if(i!==void 0?r.call(n,i,e):r.call(n,e),e.cancelBubble)return}n=n.host&&n.host!==n&&n.host instanceof Node?n.host:n.parentNode}}function ft(e,t,n,r,i){for($.context&&!n&&(n=[...e.childNodes]);typeof n=="function";)n=n();if(t===n)return n;const s=typeof t,o=r!==void 0;if(e=o&&n[0]&&n[0].parentNode||e,s==="string"||s==="number"){if($.context)return n;if(s==="number"&&(t=t.toString()),o){let a=n[0];a&&a.nodeType===3?a.data=t:a=document.createTextNode(t),n=nt(e,n,r,a)}else n!==""&&typeof n=="string"?n=e.firstChild.data=t:n=e.textContent=t}else if(t==null||s==="boolean"){if($.context)return n;n=nt(e,n,r)}else{if(s==="function")return $e(()=>{let a=t();for(;typeof a=="function";)a=a();n=ft(e,a,n,r)}),()=>n;if(Array.isArray(t)){const a=[],l=n&&Array.isArray(n);if(Gr(a,t,n,i))return $e(()=>n=ft(e,a,n,r,!0)),()=>n;if($.context){if(!a.length)return n;for(let c=0;c<a.length;c++)if(a[c].parentNode)return n=a}if(a.length===0){if(n=nt(e,n,r),o)return n}else l?n.length===0?ws(e,a,r):kc(e,n,a):(n&&nt(e),ws(e,a));n=a}else if(t instanceof Node){if($.context&&t.parentNode)return n=o?[t]:t;if(Array.isArray(n)){if(o)return n=nt(e,n,r,t);nt(e,n,null,t)}else n==null||n===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);n=t}}return n}function Gr(e,t,n,r){let i=!1;for(let s=0,o=t.length;s<o;s++){let a=t[s],l=n&&n[s];if(a instanceof Node)e.push(a);else if(!(a==null||a===!0||a===!1))if(Array.isArray(a))i=Gr(e,a,l)||i;else if(typeof a=="function")if(r){for(;typeof a=="function";)a=a();i=Gr(e,Array.isArray(a)?a:[a],Array.isArray(l)?l:[l])||i}else e.push(a),i=!0;else{const c=String(a);l&&l.nodeType===3&&l.data===c?e.push(l):e.push(document.createTextNode(c))}}return i}function ws(e,t,n=null){for(let r=0,i=t.length;r<i;r++)e.insertBefore(t[r],n)}function nt(e,t,n,r){if(n===void 0)return e.textContent="";const i=r||document.createTextNode("");if(t.length){let s=!1;for(let o=t.length-1;o>=0;o--){const a=t[o];if(i!==a){const l=a.parentNode===e;!s&&!o?l?e.replaceChild(i,a):e.insertBefore(i,n):l&&a.remove()}else s=!0}}else e.insertBefore(i,n);return[i]}function Uc(){const e=$.context;return`${e.id}${e.count++}`}const jc="http://www.w3.org/2000/svg";function Fc(e,t=!1){return t?document.createElementNS(jc,e):document.createElement(e)}function Hc(e){const[t,n]=oe(e,["component"]),r=V(()=>t.component);return V(()=>{const i=r();switch(typeof i){case"function":return Se(()=>i(n));case"string":const s=Ec.has(i),o=$.context?Mc():Fc(i,s);return Dc(o,n,s),o}})}/*!
 * Original code by Chakra UI
 * MIT Licensed, Copyright (c) 2019 Segun Adebayo.
 *
 * Credits to the Chakra UI team:
 * https://github.com/chakra-ui/chakra-ui/blob/main/packages/utils/src/assertion.ts
 */function Ko(e){return typeof e=="number"}function Kn(e){return Array.isArray(e)}function Xo(e){return typeof e=="function"}function je(e){const t=typeof e;return e!=null&&(t==="object"||t==="function")&&!Kn(e)}function Jo(e){return je(e)&&Object.keys(e).length===0}function Yo(e){return Object.prototype.toString.call(e)==="[object String]"}/*!
 * Original code by Chakra UI
 * MIT Licensed, Copyright (c) 2019 Segun Adebayo.
 *
 * Credits to the Chakra UI team:
 * https://github.com/chakra-ui/chakra-ui/blob/main/packages/utils/src/array.ts
 */function zc(e){const t=e==null?0:e.length;return t?e[t-1]:void 0}function Vc(e){return e==null?[]:Kn(e)?e:[e]}/*!
 * Portions of this file are based on code from ariakit.
 * MIT Licensed, Copyright (c) Diego Haz.
 *
 * Credits to the Ariakit team:
 * https://github.com/ariakit/ariakit/blob/232bc79018ec20967fec1e097a9474aba3bb5be7/packages/ariakit-utils/src/dom.ts
 *
 * Portions of this file are based on code from chakra-ui.
 * MIT Licensed, Copyright (c) 2019 Segun Adebayo.
 *
 * Credits to the Chakra UI team:
 * https://github.com/chakra-ui/chakra-ui/blob/59391bb95b05a13feeb9fe84b0cdb027519460ce/packages/utilities/dom-utils/src/dom.ts
 */function Wc(e){return e?!0:void 0}function Gc(e,t){return n=>{e(n),t?.(n)}}/*!
 * Portions of this file are based on code from chakra-ui.
 * MIT Licensed, Copyright (c) 2019 Segun Adebayo.
 *
 * Credits to the Chakra UI team:
 * https://github.com/chakra-ui/chakra-ui/blob/main/packages/utils/src/function.ts
 */function qc(){}function Is(e,t){return e&&(Xo(e)?e(t):e[0](e[1],t)),t?.defaultPrevented}function Xe(e,...t){return Xo(e)?e(...t):e}function Qo(e){let t=!1;return function(...n){t||(t=!0,e(...n))}}function pn(e,t,n=1/0){return!je(e)&&!Array.isArray(e)||!n?e:Object.entries(e).reduce((r,[i,s])=>(je(s)||Kn(s)?Object.entries(pn(s,t,n-1)).forEach(([o,a])=>{r[`${i}${t}${o}`]=a}):r[i]=s,r),{})}function Kc(e,t){return Object.keys(e).reduce((n,r)=>(r.split(t).reduce((i,s,o,a)=>(i[s]!=null||(i[s]=a.length-1===o?e[r]:{}),i[s]),n),n),{})}function Xc(e,t){return t.split(".").reduce((n,r)=>n&&n[r],e)}/*!
 * Original code by Chakra UI
 * MIT Licensed, Copyright (c) 2019 Segun Adebayo.
 *
 * Credits to the Chakra UI team:
 * https://github.com/chakra-ui/chakra-ui/blob/main/packages/utils/src/object.ts
 */function Jc(e,t){const n={};return t.forEach(r=>{r in e&&(n[r]=e[r])}),n}const Yc=e=>Object.keys(e);function Qc(e,t){const n={};return Object.keys(e).forEach(r=>{const i=e[r];t(i,r,e)&&(n[r]=i)}),n}function qr(e){return Qc(e,t=>t!=null)}function Ss(e){return Yo(e)?e:void 0}/*!
 * Portions of this file are based on code from ariakit.
 * MIT Licensed, Copyright (c) Diego Haz.
 *
 * Credits to the Ariakit team:
 * https://github.com/ariakit/ariakit/blob/main/packages/ariakit-utils/src/hooks.ts
 */function Zc(e,t){const[n,r]=be(Ss(t?.()));return Gn(()=>{r(e()?.tagName.toLowerCase()||Ss(t?.()))}),n}var P="colors",Z="sizes",p="space",eu={gap:p,gridGap:p,columnGap:p,gridColumnGap:p,rowGap:p,gridRowGap:p,inset:p,insetBlock:p,insetBlockEnd:p,insetBlockStart:p,insetInline:p,insetInlineEnd:p,insetInlineStart:p,margin:p,marginTop:p,marginRight:p,marginBottom:p,marginLeft:p,marginBlock:p,marginBlockEnd:p,marginBlockStart:p,marginInline:p,marginInlineEnd:p,marginInlineStart:p,padding:p,paddingTop:p,paddingRight:p,paddingBottom:p,paddingLeft:p,paddingBlock:p,paddingBlockEnd:p,paddingBlockStart:p,paddingInline:p,paddingInlineEnd:p,paddingInlineStart:p,top:p,right:p,bottom:p,left:p,scrollMargin:p,scrollMarginTop:p,scrollMarginRight:p,scrollMarginBottom:p,scrollMarginLeft:p,scrollMarginX:p,scrollMarginY:p,scrollMarginBlock:p,scrollMarginBlockEnd:p,scrollMarginBlockStart:p,scrollMarginInline:p,scrollMarginInlineEnd:p,scrollMarginInlineStart:p,scrollPadding:p,scrollPaddingTop:p,scrollPaddingRight:p,scrollPaddingBottom:p,scrollPaddingLeft:p,scrollPaddingX:p,scrollPaddingY:p,scrollPaddingBlock:p,scrollPaddingBlockEnd:p,scrollPaddingBlockStart:p,scrollPaddingInline:p,scrollPaddingInlineEnd:p,scrollPaddingInlineStart:p,fontSize:"fontSizes",background:P,backgroundColor:P,backgroundImage:P,borderImage:P,border:P,borderBlock:P,borderBlockEnd:P,borderBlockStart:P,borderBottom:P,borderBottomColor:P,borderColor:P,borderInline:P,borderInlineEnd:P,borderInlineStart:P,borderLeft:P,borderLeftColor:P,borderRight:P,borderRightColor:P,borderTop:P,borderTopColor:P,caretColor:P,color:P,columnRuleColor:P,fill:P,outline:P,outlineColor:P,stroke:P,textDecorationColor:P,fontFamily:"fonts",fontWeight:"fontWeights",lineHeight:"lineHeights",letterSpacing:"letterSpacings",blockSize:Z,minBlockSize:Z,maxBlockSize:Z,inlineSize:Z,minInlineSize:Z,maxInlineSize:Z,width:Z,minWidth:Z,maxWidth:Z,height:Z,minHeight:Z,maxHeight:Z,flexBasis:Z,gridTemplateColumns:Z,gridTemplateRows:Z,borderWidth:"borderWidths",borderTopWidth:"borderWidths",borderRightWidth:"borderWidths",borderBottomWidth:"borderWidths",borderLeftWidth:"borderWidths",borderStyle:"borderStyles",borderTopStyle:"borderStyles",borderRightStyle:"borderStyles",borderBottomStyle:"borderStyles",borderLeftStyle:"borderStyles",borderRadius:"radii",borderTopLeftRadius:"radii",borderTopRightRadius:"radii",borderBottomRightRadius:"radii",borderBottomLeftRadius:"radii",boxShadow:"shadows",textShadow:"shadows",transition:"transitions",zIndex:"zIndices"},tu=(e,t)=>typeof t=="function"?{"()":Function.prototype.toString.call(t)}:t,zt=()=>{const e=Object.create(null);return(t,n,...r)=>{const i=(s=>JSON.stringify(s,tu))(t);return i in e?e[i]:e[i]=n(t,...r)}},mn=Symbol.for("sxs.internal"),wi=(e,t)=>Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)),Es=e=>{for(const t in e)return!0;return!1},{hasOwnProperty:nu}=Object.prototype,Kr=e=>e.includes("-")?e:e.replace(/[A-Z]/g,t=>"-"+t.toLowerCase()),ru=/\s+(?![^()]*\))/,rt=e=>t=>e(...typeof t=="string"?String(t).split(ru):[t]),Ts={appearance:e=>({WebkitAppearance:e,appearance:e}),backfaceVisibility:e=>({WebkitBackfaceVisibility:e,backfaceVisibility:e}),backdropFilter:e=>({WebkitBackdropFilter:e,backdropFilter:e}),backgroundClip:e=>({WebkitBackgroundClip:e,backgroundClip:e}),boxDecorationBreak:e=>({WebkitBoxDecorationBreak:e,boxDecorationBreak:e}),clipPath:e=>({WebkitClipPath:e,clipPath:e}),content:e=>({content:e.includes('"')||e.includes("'")||/^([A-Za-z]+\([^]*|[^]*-quote|inherit|initial|none|normal|revert|unset)$/.test(e)?e:`"${e}"`}),hyphens:e=>({WebkitHyphens:e,hyphens:e}),maskImage:e=>({WebkitMaskImage:e,maskImage:e}),maskSize:e=>({WebkitMaskSize:e,maskSize:e}),tabSize:e=>({MozTabSize:e,tabSize:e}),textSizeAdjust:e=>({WebkitTextSizeAdjust:e,textSizeAdjust:e}),userSelect:e=>({WebkitUserSelect:e,userSelect:e}),marginBlock:rt((e,t)=>({marginBlockStart:e,marginBlockEnd:t||e})),marginInline:rt((e,t)=>({marginInlineStart:e,marginInlineEnd:t||e})),maxSize:rt((e,t)=>({maxBlockSize:e,maxInlineSize:t||e})),minSize:rt((e,t)=>({minBlockSize:e,minInlineSize:t||e})),paddingBlock:rt((e,t)=>({paddingBlockStart:e,paddingBlockEnd:t||e})),paddingInline:rt((e,t)=>({paddingInlineStart:e,paddingInlineEnd:t||e}))},Ir=/([\d.]+)([^]*)/,iu=(e,t)=>e.length?e.reduce((n,r)=>(n.push(...t.map(i=>i.includes("&")?i.replace(/&/g,/[ +>|~]/.test(r)&&/&.*&/.test(i)?`:is(${r})`:r):r+" "+i)),n),[]):t,su=(e,t)=>e in ou&&typeof t=="string"?t.replace(/^((?:[^]*[^\w-])?)(fit-content|stretch)((?:[^\w-][^]*)?)$/,(n,r,i,s)=>r+(i==="stretch"?`-moz-available${s};${Kr(e)}:${r}-webkit-fill-available`:`-moz-fit-content${s};${Kr(e)}:${r}fit-content`)+s):String(t),ou={blockSize:1,height:1,inlineSize:1,maxBlockSize:1,maxHeight:1,maxInlineSize:1,maxWidth:1,minBlockSize:1,minHeight:1,minInlineSize:1,minWidth:1,width:1},Ee=e=>e?e+"-":"",Zo=(e,t,n)=>e.replace(/([+-])?((?:\d+(?:\.\d*)?|\.\d+)(?:[Ee][+-]?\d+)?)?(\$|--)([$\w-]+)/g,(r,i,s,o,a)=>o=="$"==!!s?r:(i||o=="--"?"calc(":"")+"var(--"+(o==="$"?Ee(t)+(a.includes("$")?"":Ee(n))+a.replace(/\$/g,"-"):a)+")"+(i||o=="--"?"*"+(i||"")+(s||"1")+")":"")),au=/\s*,\s*(?![^()]*\))/,lu=Object.prototype.toString,st=(e,t,n,r,i)=>{let s,o,a;const l=(c,u,d)=>{let h,f;const g=b=>{for(h in b){const S=h.charCodeAt(0)===64,A=S&&Array.isArray(b[h])?b[h]:[b[h]];for(f of A){const T=/[A-Z]/.test(y=h)?y:y.replace(/-[^]/g,x=>x[1].toUpperCase()),M=typeof f=="object"&&f&&f.toString===lu&&(!r.utils[T]||!u.length);if(T in r.utils&&!M){const x=r.utils[T];if(x!==o){o=x,g(x(f)),o=null;continue}}else if(T in Ts){const x=Ts[T];if(x!==a){a=x,g(x(f)),a=null;continue}}if(S&&(v=h.slice(1)in r.media?"@media "+r.media[h.slice(1)]:h,h=v.replace(/\(\s*([\w-]+)\s*(=|<|<=|>|>=)\s*([\w-]+)\s*(?:(<|<=|>|>=)\s*([\w-]+)\s*)?\)/g,(x,D,N,E,k,R)=>{const j=Ir.test(D),on=.0625*(j?-1:1),[an,ps]=j?[E,D]:[D,E];return"("+(N[0]==="="?"":N[0]===">"===j?"max-":"min-")+an+":"+(N[0]!=="="&&N.length===1?ps.replace(Ir,(ac,br,_r)=>Number(br)+on*(N===">"?1:-1)+_r):ps)+(k?") and ("+(k[0]===">"?"min-":"max-")+an+":"+(k.length===1?R.replace(Ir,(ac,br,_r)=>Number(br)+on*(k===">"?-1:1)+_r):R):"")+")"})),M){const x=S?d.concat(h):[...d],D=S?[...u]:iu(u,h.split(au));s!==void 0&&i(ks(...s)),s=void 0,l(f,D,x)}else s===void 0&&(s=[[],u,d]),h=S||h.charCodeAt(0)!==36?h:`--${Ee(r.prefix)}${h.slice(1).replace(/\$/g,"-")}`,f=M?f:typeof f=="number"?f&&T in cu?String(f)+"px":String(f):Zo(su(T,f??""),r.prefix,r.themeMap[T]),s[0].push(`${S?`${h} `:`${Kr(h)}:`}${f}`)}}var v,y};g(c),s!==void 0&&i(ks(...s)),s=void 0};l(e,t,n)},ks=(e,t,n)=>`${n.map(r=>`${r}{`).join("")}${t.length?`${t.join(",")}{`:""}${e.join(";")}${t.length?"}":""}${Array(n.length?n.length+1:0).join("}")}`,cu={animationDelay:1,animationDuration:1,backgroundSize:1,blockSize:1,border:1,borderBlock:1,borderBlockEnd:1,borderBlockEndWidth:1,borderBlockStart:1,borderBlockStartWidth:1,borderBlockWidth:1,borderBottom:1,borderBottomLeftRadius:1,borderBottomRightRadius:1,borderBottomWidth:1,borderEndEndRadius:1,borderEndStartRadius:1,borderInlineEnd:1,borderInlineEndWidth:1,borderInlineStart:1,borderInlineStartWidth:1,borderInlineWidth:1,borderLeft:1,borderLeftWidth:1,borderRadius:1,borderRight:1,borderRightWidth:1,borderSpacing:1,borderStartEndRadius:1,borderStartStartRadius:1,borderTop:1,borderTopLeftRadius:1,borderTopRightRadius:1,borderTopWidth:1,borderWidth:1,bottom:1,columnGap:1,columnRule:1,columnRuleWidth:1,columnWidth:1,containIntrinsicSize:1,flexBasis:1,fontSize:1,gap:1,gridAutoColumns:1,gridAutoRows:1,gridTemplateColumns:1,gridTemplateRows:1,height:1,inlineSize:1,inset:1,insetBlock:1,insetBlockEnd:1,insetBlockStart:1,insetInline:1,insetInlineEnd:1,insetInlineStart:1,left:1,letterSpacing:1,margin:1,marginBlock:1,marginBlockEnd:1,marginBlockStart:1,marginBottom:1,marginInline:1,marginInlineEnd:1,marginInlineStart:1,marginLeft:1,marginRight:1,marginTop:1,maxBlockSize:1,maxHeight:1,maxInlineSize:1,maxWidth:1,minBlockSize:1,minHeight:1,minInlineSize:1,minWidth:1,offsetDistance:1,offsetRotate:1,outline:1,outlineOffset:1,outlineWidth:1,overflowClipMargin:1,padding:1,paddingBlock:1,paddingBlockEnd:1,paddingBlockStart:1,paddingBottom:1,paddingInline:1,paddingInlineEnd:1,paddingInlineStart:1,paddingLeft:1,paddingRight:1,paddingTop:1,perspective:1,right:1,rowGap:1,scrollMargin:1,scrollMarginBlock:1,scrollMarginBlockEnd:1,scrollMarginBlockStart:1,scrollMarginBottom:1,scrollMarginInline:1,scrollMarginInlineEnd:1,scrollMarginInlineStart:1,scrollMarginLeft:1,scrollMarginRight:1,scrollMarginTop:1,scrollPadding:1,scrollPaddingBlock:1,scrollPaddingBlockEnd:1,scrollPaddingBlockStart:1,scrollPaddingBottom:1,scrollPaddingInline:1,scrollPaddingInlineEnd:1,scrollPaddingInlineStart:1,scrollPaddingLeft:1,scrollPaddingRight:1,scrollPaddingTop:1,shapeMargin:1,textDecoration:1,textDecorationThickness:1,textIndent:1,textUnderlineOffset:1,top:1,transitionDelay:1,transitionDuration:1,verticalAlign:1,width:1,wordSpacing:1},Cs=e=>String.fromCharCode(e+(e>25?39:97)),Je=e=>(t=>{let n,r="";for(n=Math.abs(t);n>52;n=n/52|0)r=Cs(n%52)+r;return Cs(n%52)+r})(((t,n)=>{let r=n.length;for(;r;)t=33*t^n.charCodeAt(--r);return t})(5381,JSON.stringify(e))>>>0),kt=["themed","global","styled","onevar","resonevar","allvar","inline"],uu=e=>{if(e.href&&!e.href.startsWith(location.origin))return!1;try{return!!e.cssRules}catch{return!1}},hu=e=>{let t;const n=()=>{const{cssRules:i}=t.sheet;return[].map.call(i,(s,o)=>{const{cssText:a}=s;let l="";if(a.startsWith("--sxs"))return"";if(i[o-1]&&(l=i[o-1].cssText).startsWith("--sxs")){if(!s.cssRules.length)return"";for(const c in t.rules)if(t.rules[c].group===s)return`--sxs{--sxs:${[...t.rules[c].cache].join(" ")}}${a}`;return s.cssRules.length?`${l}${a}`:""}return a}).join("")},r=()=>{if(t){const{rules:a,sheet:l}=t;if(!l.deleteRule){for(;Object(Object(l.cssRules)[0]).type===3;)l.cssRules.splice(0,1);l.cssRules=[]}for(const c in a)delete a[c]}const i=Object(e).styleSheets||[];for(const a of i)if(uu(a)){for(let l=0,c=a.cssRules;c[l];++l){const u=Object(c[l]);if(u.type!==1)continue;const d=Object(c[l+1]);if(d.type!==4)continue;++l;const{cssText:h}=u;if(!h.startsWith("--sxs"))continue;const f=h.slice(14,-3).trim().split(/\s+/),g=kt[f[0]];g&&(t||(t={sheet:a,reset:r,rules:{},toString:n}),t.rules[g]={group:d,index:l,cache:new Set(f)})}if(t)break}if(!t){const a=(l,c)=>({type:c,cssRules:[],insertRule(u,d){this.cssRules.splice(d,0,a(u,{import:3,undefined:1}[(u.toLowerCase().match(/^@([a-z]+)/)||[])[1]]||4))},get cssText(){return l==="@media{}"?`@media{${[].map.call(this.cssRules,u=>u.cssText).join("")}}`:l}});t={sheet:e?(e.head||e).appendChild(document.createElement("style")).sheet:a("","text/css"),rules:{},reset:r,toString:n}}const{sheet:s,rules:o}=t;for(let a=kt.length-1;a>=0;--a){const l=kt[a];if(!o[l]){const c=kt[a+1],u=o[c]?o[c].index:s.cssRules.length;s.insertRule("@media{}",u),s.insertRule(`--sxs{--sxs:${a}}`,u),o[l]={group:s.cssRules[u+1],index:u,cache:new Set([a])}}du(o[l])}};return r(),t},du=e=>{const t=e.group;let n=t.cssRules.length;e.apply=r=>{try{t.insertRule(r,n),++n}catch{}}},It=Symbol(),fu=zt(),gu=(e,t)=>fu(e,()=>(...n)=>{let r={type:null,composers:new Set};for(const i of n)if(i!=null)if(i[mn]){r.type==null&&(r.type=i[mn].type);for(const s of i[mn].composers)r.composers.add(s)}else i.constructor!==Object||i.$$typeof?r.type==null&&(r.type=i):r.composers.add(pu(i,e));return r.type==null&&(r.type="span"),r.composers.size||r.composers.add(["PJLV",{},[],[],{},[]]),mu(e,r,t)}),pu=({variants:e,compoundVariants:t,defaultVariants:n,...r},i)=>{const s=`${Ee(i.prefix)}c-${Je(r)}`,o=[],a=[],l=Object.create(null),c=[];for(const h in n)l[h]=String(n[h]);if(typeof e=="object"&&e)for(const h in e){u=l,d=h,nu.call(u,d)||(l[h]="undefined");const f=e[h];for(const g in f){const b={[h]:String(g)};String(g)==="undefined"&&c.push(h);const v=f[g],y=[b,v,!Es(v)];o.push(y)}}var u,d;if(typeof t=="object"&&t)for(const h of t){let{css:f,...g}=h;f=typeof f=="object"&&f||{};for(const v in g)g[v]=String(g[v]);const b=[g,f,!Es(f)];a.push(b)}return[s,r,o,a,l,c]},mu=(e,t,n)=>{const[r,i,s,o]=yu(t.composers),a=typeof t.type=="function"||t.type.$$typeof?(d=>{function h(){for(let f=0;f<h[It].length;f++){const[g,b]=h[It][f];d.rules[g].apply(b)}return h[It]=[],null}return h[It]=[],h.rules={},kt.forEach(f=>h.rules[f]={apply:g=>h[It].push([f,g])}),h})(n):null,l=(a||n).rules,c=`.${r}${i.length>1?`:where(.${i.slice(1).join(".")})`:""}`,u=d=>{d=typeof d=="object"&&d||bu;const{css:h,...f}=d,g={};for(const y in s)if(delete f[y],y in d){let S=d[y];typeof S=="object"&&S?g[y]={"@initial":s[y],...S}:(S=String(S),g[y]=S!=="undefined"||o.has(y)?S:s[y])}else g[y]=s[y];const b=new Set([...i]);for(const[y,S,A,T]of t.composers){n.rules.styled.cache.has(y)||(n.rules.styled.cache.add(y),st(S,[`.${y}`],[],e,D=>{l.styled.apply(D)}));const M=As(A,g,e.media),x=As(T,g,e.media,!0);for(const D of M)if(D!==void 0)for(const[N,E,k]of D){const R=`${y}-${Je(E)}-${N}`;b.add(R);const j=(k?n.rules.resonevar:n.rules.onevar).cache,on=k?l.resonevar:l.onevar;j.has(R)||(j.add(R),st(E,[`.${R}`],[],e,an=>{on.apply(an)}))}for(const D of x)if(D!==void 0)for(const[N,E]of D){const k=`${y}-${Je(E)}-${N}`;b.add(k),n.rules.allvar.cache.has(k)||(n.rules.allvar.cache.add(k),st(E,[`.${k}`],[],e,R=>{l.allvar.apply(R)}))}}if(typeof h=="object"&&h){const y=`${r}-i${Je(h)}-css`;b.add(y),n.rules.inline.cache.has(y)||(n.rules.inline.cache.add(y),st(h,[`.${y}`],[],e,S=>{l.inline.apply(S)}))}for(const y of String(d.className||"").trim().split(/\s+/))y&&b.add(y);const v=f.className=[...b].join(" ");return{type:t.type,className:v,selector:c,props:f,toString:()=>v,deferredInjector:a}};return wi(u,{className:r,selector:c,[mn]:t,toString:()=>(n.rules.styled.cache.has(r)||u(),r)})},yu=e=>{let t="";const n=[],r={},i=[];for(const[s,,,,o,a]of e){t===""&&(t=s),n.push(s),i.push(...a);for(const l in o){const c=o[l];(r[l]===void 0||c!=="undefined"||a.includes(c))&&(r[l]=c)}}return[t,n,r,new Set(i)]},As=(e,t,n,r)=>{const i=[];e:for(let[s,o,a]of e){if(a)continue;let l,c=0,u=!1;for(l in s){const d=s[l];let h=t[l];if(h!==d){if(typeof h!="object"||!h)continue e;{let f,g,b=0;for(const v in h){if(d===String(h[v])){if(v!=="@initial"){const y=v.slice(1);(g=g||[]).push(y in n?n[y]:v.replace(/^@media ?/,"")),u=!0}c+=b,f=!0}++b}if(g&&g.length&&(o={["@media "+g.join(", ")]:o}),!f)continue e}}}(i[c]=i[c]||[]).push([r?"cv":`${l}-${s[l]}`,o,u])}return i},bu={},_u=zt(),vu=(e,t)=>_u(e,()=>(...n)=>{const r=()=>{for(let i of n){i=typeof i=="object"&&i||{};let s=Je(i);if(!t.rules.global.cache.has(s)){if(t.rules.global.cache.add(s),"@import"in i){let o=[].indexOf.call(t.sheet.cssRules,t.rules.themed.group)-1;for(let a of[].concat(i["@import"]))a=a.includes('"')||a.includes("'")?a:`"${a}"`,t.sheet.insertRule(`@import ${a};`,o++);delete i["@import"]}st(i,[],[],e,o=>{t.rules.global.apply(o)})}}return""};return wi(r,{toString:r})}),wu=zt(),Iu=(e,t)=>wu(e,()=>n=>{const r=`${Ee(e.prefix)}k-${Je(n)}`,i=()=>{if(!t.rules.global.cache.has(r)){t.rules.global.cache.add(r);const s=[];st(n,[],[],e,a=>s.push(a));const o=`@keyframes ${r}{${s.join("")}}`;t.rules.global.apply(o)}return r};return wi(i,{get name(){return i()},toString:i})}),Su=class{constructor(e,t,n,r){this.token=e==null?"":String(e),this.value=t==null?"":String(t),this.scale=n==null?"":String(n),this.prefix=r==null?"":String(r)}get computedValue(){return"var("+this.variable+")"}get variable(){return"--"+Ee(this.prefix)+Ee(this.scale)+this.token}toString(){return this.computedValue}},Eu=zt(),Tu=(e,t)=>Eu(e,()=>(n,r)=>{r=typeof n=="object"&&n||Object(r);const i=`.${n=(n=typeof n=="string"?n:"")||`${Ee(e.prefix)}t-${Je(r)}`}`,s={},o=[];for(const l in r){s[l]={};for(const c in r[l]){const u=`--${Ee(e.prefix)}${l}-${c}`,d=Zo(String(r[l][c]),e.prefix,l);s[l][c]=new Su(c,d,l,e.prefix),o.push(`${u}:${d}`)}}const a=()=>{if(o.length&&!t.rules.themed.cache.has(n)){t.rules.themed.cache.add(n);const l=`${r===e.theme?":root,":""}.${n}{${o.join(";")}}`;t.rules.themed.apply(l)}return n};return{...s,get className(){return a()},selector:i,toString:a}}),ku=zt(),Cu=e=>{let t=!1;const n=ku(e,r=>{t=!0;const i="prefix"in(r=typeof r=="object"&&r||{})?String(r.prefix):"",s=typeof r.media=="object"&&r.media||{},o=typeof r.root=="object"?r.root||null:globalThis.document||null,a=typeof r.theme=="object"&&r.theme||{},l={prefix:i,media:s,theme:a,themeMap:typeof r.themeMap=="object"&&r.themeMap||{...eu},utils:typeof r.utils=="object"&&r.utils||{}},c=hu(o),u={css:gu(l,c),globalCss:vu(l,c),keyframes:Iu(l,c),createTheme:Tu(l,c),reset(){c.reset(),u.theme.toString()},theme:{},sheet:c,config:l,prefix:i,getCssText:c.toString,toString:c.toString};return String(u.theme=u.createTheme(a)),u});return t||n.reset(),n};const Au=Cu({prefix:"hope"}),{css:ea,globalCss:ta,getCssText:ky,keyframes:na}=Au,We={light:"hope-theme-light",dark:"hope-theme-dark"};function Ru(e){const t=Object.keys(e);return t.length>0&&t.every(n=>["light","dark"].includes(n))}/*!
 * Original code by Chakra UI
 * MIT Licensed, Copyright (c) 2019 Segun Adebayo.
 *
 * Credits to the Chakra UI team:
 * https://github.com/chakra-ui/chakra-ui/blob/2283faae3e361a8978a93b0ef7fd43b637153555/packages/utilities/breakpoint-utils/src/responsive.ts
 */function St(e,t){return Kn(e)?e.map(n=>n===null?null:t(n)):je(e)?Yc(e).reduce((n,r)=>(n[r]=t(e[r]),n),{}):e!=null?t(e):null}function xu(e,t){const n=t.map(r=>e[r]??null);for(;zc(n)===null;)n.pop();return n}function Ou(e,t){const n={};return e.forEach((r,i)=>{const s=t[i];r!=null&&(n[s]=r)}),n}function Pu(e,t){const n=Object.keys(e);return n.length>0&&n.every(r=>t.includes(r))}const Ii=["styleConfigOverride","unstyled"];/*!
 * Original code by Chakra UI
 * MIT Licensed, Copyright (c) 2019 Segun Adebayo.
 *
 * Credits to the Chakra UI team:
 * https://github.com/chakra-ui/chakra-ui/blob/main/packages/styled-system/src/pseudos.ts
 */const z={hover:(e,t)=>`${e}:hover ${t}, ${e}[data-hover] ${t}`,focus:(e,t)=>`${e}:focus ${t}, ${e}[data-focus] ${t}`,focusVisible:(e,t)=>`${e}:focus-visible ${t}`,focusWithin:(e,t)=>`${e}:focus-within ${t}`,active:(e,t)=>`${e}:active ${t}, ${e}[data-active] ${t}`,disabled:(e,t)=>`${e}:disabled ${t}, ${e}[data-disabled] ${t}`,invalid:(e,t)=>`${e}:invalid ${t}, ${e}[data-invalid] ${t}`,checked:(e,t)=>`${e}:checked ${t}, ${e}[data-checked] ${t}`,indeterminate:(e,t)=>`${e}:indeterminate ${t}, ${e}[aria-checked=mixed] ${t}, ${e}[data-indeterminate] ${t}`,readOnly:(e,t)=>`${e}:read-only ${t}, ${e}[readonly] ${t}, ${e}[data-read-only] ${t}`,expanded:(e,t)=>`${e}:read-only ${t}, ${e}[aria-expanded=true] ${t}, ${e}[data-expanded] ${t}`,placeholderShown:(e,t)=>`${e}:placeholder-shown ${t}`};function Oe(e){return ra(t=>e(t,"&"),"[role=group]","[data-group]",".group")}function ye(e){return ra(t=>e(t,"~ &"),"[data-peer]",".peer")}function ra(e,...t){return t.map(e).join(", ")}const Nu="_light",yn="_dark",Du=`.${We.light} &:not([data-theme]), [data-theme=light] &:not([data-theme]), &[data-theme=light]`,Lu=`.${We.dark} &:not([data-theme]), [data-theme=dark] &:not([data-theme]), &[data-theme=dark]`,Mu=new Map([["_hover","&:hover, &[data-hover]"],["_active","&:active, &[data-active]"],["_focus","&:focus, &[data-focus]"],["_highlighted","&[data-highlighted]"],["_focusWithin","&:focus-within"],["_focusVisible","&:focus-visible, &[data-focus-visible]"],["_disabled","&[disabled], &[aria-disabled=true], &[data-disabled]"],["_readOnly","&[aria-readonly=true], &[readonly], &[data-readonly]"],["_before","&::before"],["_after","&::after"],["_empty","&:empty"],["_expanded","&[aria-expanded=true], &[data-expanded]"],["_checked","&[aria-checked=true], &[data-checked]"],["_grabbed","&[aria-grabbed=true], &[data-grabbed]"],["_pressed","&[aria-pressed=true], &[data-pressed]"],["_invalid","&[aria-invalid=true], &[data-invalid]"],["_valid","&[data-valid], &[data-state=valid]"],["_loading","&[data-loading], &[aria-busy=true]"],["_selected","&[aria-selected=true], &[data-selected]"],["_hidden","&[hidden], &[data-hidden]"],["_autofill","&:-webkit-autofill"],["_even","&:nth-of-type(even)"],["_odd","&:nth-of-type(odd)"],["_first","&:first-child"],["_last","&:last-child"],["_notFirst","&:not(:first-child)"],["_notLast","&:not(:last-child)"],["_visited","&:visited"],["_activeLink","&[aria-current=page]"],["_activeStep","&[aria-current=step]"],["_indeterminate","&:indeterminate, &[aria-checked=mixed], &[data-indeterminate]"],["_groupHover",Oe(z.hover)],["_peerHover",ye(z.hover)],["_groupFocus",Oe(z.focus)],["_peerFocus",ye(z.focus)],["_groupFocusVisible",Oe(z.focusVisible)],["_peerFocusVisible",ye(z.focusVisible)],["_groupActive",Oe(z.active)],["_peerActive",ye(z.active)],["_groupDisabled",Oe(z.disabled)],["_peerDisabled",ye(z.disabled)],["_groupInvalid",Oe(z.invalid)],["_peerInvalid",ye(z.invalid)],["_groupChecked",Oe(z.checked)],["_peerChecked",ye(z.checked)],["_groupFocusWithin",Oe(z.focusWithin)],["_peerFocusWithin",ye(z.focusWithin)],["_peerPlaceholderShown",ye(z.placeholderShown)],["_placeholder","&::placeholder"],["_placeholderShown","&:placeholder-shown"],["_fullScreen","&:fullscreen"],["_selection","&::selection"],["_rtl","[dir=rtl] &, &[dir=rtl]"],["_ltr","[dir=ltr] &, &[dir=ltr]"],["_mediaDark","@media (prefers-color-scheme: dark)"],["_mediaReduceMotion","@media (prefers-reduced-motion: reduce)"],[Nu,Du],[yn,Lu]]),$u=new Map([["borderX",["borderRight","borderLeft"]],["borderY",["borderTop","borderBottom"]],["bg",["background"]],["bgColor",["backgroundColor"]],["d",["display"]],["marginStart",["marginInlineStart"]],["marginEnd",["marginInlineEnd"]],["m",["margin"]],["mt",["marginTop"]],["mr",["marginRight"]],["me",["marginInlineEnd"]],["mb",["marginBottom"]],["ml",["marginLeft"]],["ms",["marginInlineStart"]],["mx",["marginInlineStart","marginInlineEnd"]],["my",["marginTop","marginBottom"]],["paddingStart",["paddingInlineStart"]],["paddingEnd",["paddingInlineEnd"]],["p",["padding"]],["pt",["paddingTop"]],["pr",["paddingRight"]],["pe",["paddingInlineEnd"]],["pb",["paddingBottom"]],["pl",["paddingLeft"]],["ps",["paddingInlineStart"]],["px",["paddingInlineStart","paddingInlineEnd"]],["py",["paddingTop","paddingBottom"]],["pos",["position"]],["borderTopRadius",["borderTopLeftRadius","borderTopRightRadius"]],["borderRightRadius",["borderTopRightRadius","borderBottomRightRadius"]],["borderBottomRadius",["borderBottomRightRadius","borderBottomLeftRadius"]],["borderLeftRadius",["borderTopLeftRadius","borderBottomLeftRadius"]],["rounded",["borderRadius"]],["roundedTop",["borderTopLeftRadius","borderTopRightRadius"]],["roundedRight",["borderTopRightRadius","borderBottomRightRadius"]],["roundedBottom",["borderBottomRightRadius","borderBottomLeftRadius"]],["roundedLeft",["borderTopLeftRadius","borderBottomLeftRadius"]],["shadow",["boxShadow"]],["w",["width"]],["minW",["minWidth"]],["maxW",["maxWidth"]],["h",["height"]],["minH",["minHeight"]],["maxH",["maxHeight"]],["boxSize",["width","height"]]]);/*!
 * Portions of this file are based on code from chakra-ui.
 * MIT Licensed, Copyright (c) 2019 Segun Adebayo.
 *
 * Credits to the Chakra UI team:
 * https://github.com/chakra-ui/chakra-ui/blob/9de39921b983ad0eb2df7195e3b683c2e2e9e290/packages/components/styled-system/src/utils/expand-responsive.ts
 */const Bu=e=>t=>{if(!t.__breakpoints)return e;const{isResponsive:n,toArrayValue:r,medias:i}=t.__breakpoints,s={},o={};for(const a in e){let l=Xe(e[a],t);if(l==null||Sr(a,l,s))continue;if(l=je(l)&&n(l)?r(l):l,!Array.isArray(l)){s[a]=l;continue}const c=l.slice(0,i.length).length;for(let u=0;u<c;u+=1){const d=i?.[u],h=l[u];if(h!=null){if(!d){Sr(a,h,s)||(s[a]=h);continue}o[d]=o[d]||{},Sr(a,h,o[d])||(o[d][a]=h)}}}return{...s,...o}};function Sr(e,t,n){if(!je(t)||!Ru(t))return!1;const{light:r,dark:i}=t;return r!=null&&(n[e]=r),n[yn]=n[yn]||{},i!=null&&(n[yn][e]=i),!0}/*!
 * Original code by Chakra UI
 * MIT Licensed, Copyright (c) 2019 Segun Adebayo.
 *
 * Credits to the Chakra UI team:
 * https://github.com/chakra-ui/chakra-ui/blob/2283faae3e361a8978a93b0ef7fd43b637153555/packages/utilities/breakpoint-utils/src/breakpoint.ts
 */function Uu(e){const t=parseFloat(e.toString()),n=e.toString().replace(String(t),"");return{unitless:!n,value:t,unit:n}}function Cn(e){if(e==null)return e;const{unitless:t}=Uu(e);return t||Ko(e)?`${e}px`:e}const ia=(e,t)=>parseInt(e[1],10)>parseInt(t[1],10)?1:-1,Si=e=>Object.fromEntries(Object.entries(e).sort(ia));function Rs(e){const t=Si(e);return Object.assign(Object.values(t),t)}function ju(e){const t=Object.keys(Si(e));return new Set(t)}function xs(e){if(!e)return e;e=Cn(e)??e;const t=e.endsWith("px")?-1:-.0625;return Ko(e)?`${e+t}`:e.replace(/(\d+\.?\d*)/u,n=>`${parseFloat(n)+t}`)}function cn(e,t){const n=["@media screen"];return e&&n.push("and",`(min-width: ${Cn(e)})`),t&&n.push("and",`(max-width: ${Cn(t)})`),n.join(" ")}function Fu(e){if(!e)return null;e.base=e.base??"0px";const t=Rs(e),n=Object.entries(e).sort(ia).map(([s,o],a,l)=>{let[,c]=l[a+1]??[];return c=parseFloat(c)>0?xs(c):void 0,{_minW:xs(o),breakpoint:s,minW:o,maxW:c,maxWQuery:cn(null,c),minWQuery:cn(o),minMaxQuery:cn(o,c)}}),r=ju(e),i=Array.from(r.values());return{keys:r,normalized:t,asObject:Si(e),asArray:Rs(e),details:n,medias:[null,...t.map(s=>cn(s)).slice(1)],isResponsive(s){return Pu(s,i)},toArrayValue(s){if(!je(s))throw new Error("toArrayValue: value must be an object");return xu(s,i)},toObjectValue(s){if(!Array.isArray(s))throw new Error("toObjectValue: value must be an array");return Ou(s,i)}}}/*!
 * Portions of this file are based on code from chakra-ui.
 * MIT Licensed, Copyright (c) 2019 Segun Adebayo.
 *
 * Credits to the Chakra UI team:
 * https://github.com/chakra-ui/chakra-ui/blob/7d7e04d53d871e324debe0a2cb3ff44d7dbf3bca/packages/components/styled-system/src/utils/create-transform.ts
 */const Hu=["colors","fonts","fontWeights","lineHeights","shadows","zIndices"],sa=/!(important)?$/;function zu(e){return sa.test(e)}function Vu(e){return e.replace(sa,"").trim()}function Wu(e,t,n){if(e==null)return;const r=String(e),i=Vu(r);let s=n[t][i]??Xc(n[t],i);return s==null&&(s=Hu.includes(t)?i:Cn(i)),zu(r)?`${s} !important`:s}/*!
 * Original code by Chakra UI
 * MIT Licensed, Copyright (c) 2019 Segun Adebayo.
 *
 * Credits to the Chakra UI team:
 * https://github.com/chakra-ui/chakra-ui/blob/main/packages/styled-system/src/css.ts
 */function Ei(e,t){const n={},r=Bu(e)(t);for(let i in r){let s=Xe(r[i],t);if(s==null)continue;if(i.startsWith("_")){const a=Mu.get(i);if(a==null)continue;i=a}if(je(s)){n[i]=Object.assign({},n[i],Ei(s,t));continue}const o=$u.get(i)??[i];for(const a of o){const l=t.themeMap[a];l!=null&&(s=Wu(s,l,t.vars)),n[a]=s}}return n}/*!
 * Original code by Mantinedev
 * MIT Licensed, Copyright (c) 2021 Vitaly Rtishchev.
 *
 * Credits to the Mantinedev team:
 * https://github.com/mantinedev/mantine/blob/8546c580fdcaa9653edc6f4813103349a96cfb09/src/mantine-styles/src/theme/utils/to-rgba/to-rgba.ts
 */function Gu(e){return/^#?([0-9A-F]{3}){1,2}$/i.test(e)}function qu(e){let t=e.replace("#","");if(t.length===3){const o=t.split("");t=[o[0],o[0],o[1],o[1],o[2],o[2]].join("")}const n=parseInt(t,16),r=n>>16&255,i=n>>8&255,s=n&255;return{r,g:i,b:s,a:1}}function Ku(e){const[t,n,r,i]=e.replace(/[^0-9,.]/g,"").split(",").map(Number);return{r:t,g:n,b:r,a:i||1}}function Xu(e){return Gu(e)?qu(e):e.startsWith("rgb")?Ku(e):{r:0,g:0,b:0,a:1}}function Er(e){const{r:t,g:n,b:r}=Xu(e);return`${t} ${n} ${r}`}/*!
 * Original code by MUI
 * MIT Licensed, Copyright (c) 2014 Call-Em-All.
 *
 * Credits to the MUI team:
 * https://github.com/mui/material-ui/blob/master/packages/mui-joy/src/styles/extendTheme.ts
 */function it(e){return{...e,mainChannel:Er(e[500]),lightChannel:Er(e[100]),darkChannel:Er(e[900])}}/*!
 * Original code by Chakra UI
 * MIT Licensed, Copyright (c) 2019 Segun Adebayo.
 *
 * Credits to the Chakra UI team:
 * https://github.com/chakra-ui/chakra-ui/blob/main/packages/styled-system/src/create-theme-vars/css-var.ts
 */const Xn="hope";function Ju(e,t="-"){return e.replace(/\s+/g,t)}function Yu(e){const t=Ju(e.toString());return Zu(Qu(t))}function Qu(e){return e.includes("\\.")?e:!Number.isInteger(parseFloat(e.toString()))?e.replace(".","\\."):e}function Zu(e){return e.replace(/[!-,/:-@[-^`{-~]/g,"\\$&")}function eh(e,t=""){return[t,e].filter(Boolean).join("-")}function th(e,t){return`var(${e}${t?`, ${t}`:""})`}function nh(e,t=""){return Yu(`--${eh(e,t)}`)}function rh(e,t,n=Xn){const r=nh(e,n);return{variable:r,reference:th(r,t)}}function ih(e=Xn){return t=>`var(--${e?`${e}-`:""}${t})`}/*!
 * Original code by Chakra UI
 * MIT Licensed, Copyright (c) 2019 Segun Adebayo.
 *
 * Credits to the Chakra UI team:
 * https://github.com/chakra-ui/chakra-ui/blob/main/packages/styled-system/src/create-theme-vars/create-theme-vars.ts
 */const Et="__";function Tr(e,t,n){return rh(String(t).replace(e,"-"),void 0,n)}function sh(e,t){const n={},r={},i={},{colors:s,...o}=e,a={colors:s.light},l={colors:s.dark},c=pn(a,Et),u=pn(l,Et),d=pn(o,Et),h=new RegExp(`(${Et}|\\.)`,"g");for(const[b,v]of Object.entries(c)){const{variable:y,reference:S}=Tr(h,b,t);n[y]=v,i[b]=S}for(const[b,v]of Object.entries(u)){const{variable:y}=Tr(h,b,t);r[y]=v}for(const[b,v]of Object.entries(d)){const{variable:y,reference:S}=Tr(h,b,t);n[y]=v,i[b]=S}const f=Kc(i,Et);return{cssVarsValues:{root:n,dark:r},vars:f}}/*!
 * Original code by Chakra UI
 * MIT Licensed, Copyright (c) 2019 Segun Adebayo.
 *
 * Credits to the Chakra UI team:
 * https://github.com/chakra-ui/chakra-ui/blob/main/packages/styled-system/src/create-theme-vars/to-css-var.ts
 */const oh=["colors","fonts","fontSizes","fontWeights","lineHeights","letterSpacings","space","sizes","radii","shadows","zIndices","breakpoints"];function ah(e){return Jc(e,oh)}function lh(e){const{vars:t,__cssVarsValues:n,__breakpoints:r,...i}=e;return i}function ch(e){const t=lh(e),n=ah(t),{cssVarsValues:r,vars:i}=sh(n,t.cssVarPrefix);return Object.assign(t,{vars:i,__cssVarsValues:r,__breakpoints:Fu(t.breakpoints)}),t}/*!
 * Colors from TailwindCSS
 * MIT Licensed, Copyright (c) Tailwind Labs, Inc.
 *
 * Credits to the Tailwind Labs team:
 * https://github.com/tailwindlabs/tailwindcss/blob/master/src/public/colors.js
 *
 * Colors from Chakra UI
 * MIT Licensed, Copyright (c) 2019 Segun Adebayo.
 *
 * Credits to the Chakra UI team:
 * https://github.com/chakra-ui/chakra-ui/blob/main/packages/theme/src/foundations/colors.ts
 */function uh(e){const t=ih(e);return{light:{whiteAlpha:{50:"rgba(255, 255, 255, 0.04)",100:"rgba(255, 255, 255, 0.06)",200:"rgba(255, 255, 255, 0.08)",300:"rgba(255, 255, 255, 0.16)",400:"rgba(255, 255, 255, 0.24)",500:"rgba(255, 255, 255, 0.36)",600:"rgba(255, 255, 255, 0.48)",700:"rgba(255, 255, 255, 0.64)",800:"rgba(255, 255, 255, 0.80)",900:"rgba(255, 255, 255, 0.92)"},blackAlpha:{50:"rgba(0, 0, 0, 0.04)",100:"rgba(0, 0, 0, 0.06)",200:"rgba(0, 0, 0, 0.08)",300:"rgba(0, 0, 0, 0.16)",400:"rgba(0, 0, 0, 0.24)",500:"rgba(0, 0, 0, 0.36)",600:"rgba(0, 0, 0, 0.48)",700:"rgba(0, 0, 0, 0.64)",800:"rgba(0, 0, 0, 0.80)",900:"rgba(0, 0, 0, 0.92)"},primary:it({50:"#e6f6ff",100:"#bae3ff",200:"#7cc4fa",300:"#47a3f3",400:"#2186eb",500:"#0967d2",600:"#0552b5",700:"#03449e",800:"#01337d",900:"#002159"}),neutral:it({50:"#f9fafa",100:"#f4f5f6",200:"#e3e5e8",300:"#cfd3d8",400:"#9aa1ac",500:"#67707e",600:"#49505a",700:"#393e46",800:"#22252a",900:"#151619"}),success:it({50:"#e3f9e5",100:"#c1eac5",200:"#a3d9a5",300:"#7bc47f",400:"#57ae5b",500:"#3f9142",600:"#2f8132",700:"#207227",800:"#0e5814",900:"#05400a"}),info:it({50:"#eae2f8",100:"#cfbcf2",200:"#a081d9",300:"#8662c7",400:"#724bb7",500:"#653cad",600:"#51279b",700:"#421987",800:"#34126f",900:"#240754"}),warning:it({50:"#fffbea",100:"#fff3c4",200:"#fce588",300:"#fadb5f",400:"#f7c948",500:"#f0b429",600:"#de911d",700:"#cb6e17",800:"#b44d12",900:"#8d2b0b"}),danger:it({50:"#ffe3e3",100:"#ffbdbd",200:"#ff9b9b",300:"#f86a6a",400:"#ef4e4e",500:"#e12d39",600:"#cf1124",700:"#ab091e",800:"#8a041a",900:"#610316"}),common:{white:"#ffffff",black:"#121212",foreground:t("colors-neutral-800"),background:t("colors-common-white"),focusRing:t("colors-primary-500")}},dark:{common:{foreground:t("colors-neutral-200"),background:t("colors-neutral-900"),focusRing:t("colors-primary-600")}}}}/*!
 * Original code by WorkOS
 * MIT Licensed, Copyright (c) 2022 WorkOS.
 *
 * Credits to the WorkOS team:
 * https://github.com/stitchesjs/stitches/blob/96e8a523caf1724cf25bb0d07ee823365bbedd9c/packages/core/src/default/defaultThemeMap.js
 */const hh={gap:"space",gridGap:"space",columnGap:"space",gridColumnGap:"space",rowGap:"space",gridRowGap:"space",inset:"space",insetBlock:"space",insetBlockEnd:"space",insetBlockStart:"space",insetInline:"space",insetInlineEnd:"space",insetInlineStart:"space",margin:"space",marginTop:"space",marginRight:"space",marginBottom:"space",marginLeft:"space",marginBlock:"space",marginBlockEnd:"space",marginBlockStart:"space",marginInline:"space",marginInlineEnd:"space",marginInlineStart:"space",padding:"space",paddingTop:"space",paddingRight:"space",paddingBottom:"space",paddingLeft:"space",paddingBlock:"space",paddingBlockEnd:"space",paddingBlockStart:"space",paddingInline:"space",paddingInlineEnd:"space",paddingInlineStart:"space",top:"space",right:"space",bottom:"space",left:"space",background:"colors",backgroundColor:"colors",backgroundImage:"colors",borderImage:"colors",border:"colors",borderBlock:"colors",borderBlockEnd:"colors",borderBlockStart:"colors",borderBottom:"colors",borderBottomColor:"colors",borderColor:"colors",borderInline:"colors",borderInlineEnd:"colors",borderInlineStart:"colors",borderLeft:"colors",borderLeftColor:"colors",borderRight:"colors",borderRightColor:"colors",borderTop:"colors",borderTopColor:"colors",caretColor:"colors",color:"colors",columnRuleColor:"colors",fill:"colors",outline:"colors",outlineColor:"colors",stroke:"colors",textDecorationColor:"colors",fontFamily:"fonts",fontSize:"fontSizes",fontWeight:"fontWeights",lineHeight:"lineHeights",letterSpacing:"letterSpacings",borderWidth:"sizes",borderTopWidth:"sizes",borderRightWidth:"sizes",borderBottomWidth:"sizes",borderLeftWidth:"sizes",blockSize:"sizes",minBlockSize:"sizes",maxBlockSize:"sizes",inlineSize:"sizes",minInlineSize:"sizes",maxInlineSize:"sizes",width:"sizes",minWidth:"sizes",maxWidth:"sizes",height:"sizes",minHeight:"sizes",maxHeight:"sizes",flexBasis:"sizes",gridTemplateColumns:"sizes",gridTemplateRows:"sizes",strokeWidth:"sizes",borderRadius:"radii",borderTopLeftRadius:"radii",borderTopRightRadius:"radii",borderBottomRightRadius:"radii",borderBottomLeftRadius:"radii",boxShadow:"shadows",textShadow:"shadows",zIndex:"zIndices"},Os={"0.5":"0.125rem",1:"0.25rem","1.5":"0.375rem",2:"0.5rem","2.5":"0.625rem",3:"0.75rem","3.5":"0.875rem",4:"1rem",5:"1.25rem",6:"1.5rem",7:"1.75rem",8:"2rem",9:"2.25rem",10:"2.5rem",12:"3rem",14:"3.5rem",16:"4rem",20:"5rem",24:"6rem",28:"7rem",32:"8rem",36:"9rem",40:"10rem",44:"11rem",48:"12rem",52:"13rem",56:"14rem",60:"15rem",64:"16rem",72:"18rem",80:"20rem",96:"24rem"},dh={colors:uh(Xn),fonts:{sans:"ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'",serif:"ui-serif, Georgia, Cambria, 'Times New Roman', Times, serif",mono:"ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace"},fontSizes:{xs:"0.75rem",sm:"0.875rem",base:"1rem",lg:"1.125rem",xl:"1.25rem","2xl":"1.5rem","3xl":"1.875rem","4xl":"2.25rem","5xl":"3rem","6xl":"3.75rem","7xl":"4.5rem","8xl":"6rem","9xl":"8rem"},fontWeights:{hairline:100,thin:200,light:300,normal:400,medium:500,semibold:600,bold:700,extrabold:800,black:900},lineHeights:{none:1,shorter:1.25,short:1.375,base:1.5,tall:1.625,taller:2,3:"0.75rem",4:"1rem",5:"1.25rem",6:"1.5rem",7:"1.75rem",8:"2rem",9:"2.25rem",10:"2.5rem"},letterSpacings:{tighter:"-0.05em",tight:"-0.025em",normal:"0",wide:"0.025em",wider:"0.05em",widest:"0.1em"},space:Os,sizes:{...Os,max:"max-content",min:"min-content",full:"100%",screenW:"100vw",screenH:"100vh",xs:"20rem",sm:"24rem",md:"28rem",lg:"32rem",xl:"36rem","2xl":"42rem","3xl":"48rem","4xl":"56rem","5xl":"64rem","6xl":"72rem","7xl":"80rem","8xl":"90rem"},radii:{none:"0",xs:"0.125rem",sm:"0.25rem",md:"0.375rem",lg:"0.5rem",xl:"0.75rem","2xl":"1rem","3xl":"1.5rem",full:"9999px"},shadows:{none:"0 0 #0000",xs:"0px 1px 2px rgb(16 24 40 / 5%)",sm:"0px 1px 3px rgb(16 24 40 / 10%), 0px 1px 2px rgb(16 24 40 / 6%)",md:"0px 4px 8px -2px rgb(16 24 40 / 10%), 0px 2px 4px -2px rgb(16 24 40 / 6%)",lg:"0px 12px 16px -4px rgb(16 24 40 / 8%), 0px 4px 6px -2px rgb(16 24 40 / 3%)",xl:"0px 20px 24px -4px rgb(16 24 40 / 8%), 0px 8px 8px -4px rgb(16 24 40 / 3%)","2xl":"0px 24px 48px -12px rgb(16 24 40 / 18%)","3xl":"0px 32px 64px -12px rgb(16 24 40 / 14%)",inner:"inset 0 2px 4px 0 rgb(0 0 0 / 0.06)"},zIndices:{hide:-1,base:0,docked:10,sticky:1e3,banner:1100,overlay:1200,modal:1300,dropdown:1400,popover:1500,tooltip:1600,skipLink:1700,toast:1800},breakpoints:{base:"0px",sm:"640px",md:"768px",lg:"1024px",xl:"1280px","2xl":"1536px"}},fh={...dh,cssVarPrefix:Xn,themeMap:hh,components:{}},oa=ch(fh);function Xr(e,t,n){if(typeof e=="object"&&typeof t=="object"){if(Array.isArray(e)&&Array.isArray(t))for(n=0;n<t.length;n++)e[n]=Xr(e[n],t[n]);else for(n in t){if(n==="__proto__"||n==="constructor"||n==="prototype")break;e[n]=Xr(e[n],t[n])}return e}return t}function Ps(e,t,n){t.split&&(t=t.split("."));for(var r=0,i=t.length,s=e,o,a;r<i&&(a=t[r++],!(a==="__proto__"||a==="constructor"||a==="prototype"));)s=s[a]=r===i?Xr(s[a],n):typeof(o=s[a])==typeof t?o:t[r]*0!==0||!!~(""+t[r]).indexOf(".")?{}:[]}/*!
 * Original code by Mantinedev
 * MIT Licensed, Copyright (c) 2021 Vitaly Rtishchev.
 *
 * Credits to the Mantinedev team:
 * https://github.com/mantinedev/mantine/tree/master/src/mantine-styles/src/theme/functions/fns/focus-styles
 */function gh(e){return{WebkitTapHighlightColor:"transparent","&:focus":{outlineOffset:"2px",outline:`2px solid ${e.colors.common.focusRing}`},"&:focus:not(:focus-visible)":{outline:"none"}}}function ph(e){ta({":root":e.__cssVarsValues.root,[`.${We.dark}`]:e.__cssVarsValues.dark})()}/*!
 * Portions of this file are based on code from joshua comeau css reset.
 *
 * Credits to Joshua Comeau:
 * https://www.joshwcomeau.com/css/custom-css-reset/#the-css-reset
 */function mh(e){ta({"*, *::before, *::after":{boxSizing:"border-box"},"*":{margin:0},html:{fontFamily:e.fonts.sans,lineHeight:e.lineHeights.base,fontSize:"16px"},body:{backgroundColor:e.colors.common.background,color:e.colors.common.foreground,fontFamily:"inherit",lineHeight:"inherit",WebkitFontSmoothing:"antialiased",MozOsxFontSmoothing:"grayscale"},"img, picture, video, canvas, svg":{display:"block",maxWidth:"100%"},"button, input, textarea, select":{font:"inherit"},"h1, h2, h3, h4, h5, h6":{font:"inherit"},"p, h1, h2, h3, h4, h5, h6":{overflowWrap:"break-word"}})()}const aa=mt(oa);function Jn(){return Ft(aa)}function yh(e){const t=Jn();return V(()=>{if(e!=null)return t.components[e]??void 0})}function Ti(e,t,n){const r=Jn();return X(t,()=>r.components[e]?.defaultProps??{},n)}function bh(e){const t=e.theme??oa;return ph(t),e.withCssReset&&mh(t.vars),_(aa.Provider,{value:t,get children(){return e.children}})}function la(e){var t,n,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=la(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function xe(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=la(e))&&(r&&(r+=" "),r+=t);return r}function lt(e,t){return ea(Ei(e,t))().className}function Jr(e,t){for(const n of Object.keys(e))if(e[n]!==t[n])return!1;return!0}/*!
 * Original code by SEEK
 * MIT Licensed, Copyright (c) 2021 SEEK.
 *
 * Credits to the SEEK team:
 * https://github.com/seek-oss/vanilla-extract/blob/master/packages/recipes/src/createRuntimeFn.ts
 */function Ns(e,t){return Object.entries(e).reduce((n,[r,i])=>{const{baseStyle:s={},variants:o={},compoundVariants:a=[]}=i;return n[r]={baseClassName:lt(s,t),variantClassNames:Object.entries(o).reduce((l,[c,u])=>(l[c]=Object.entries(u).reduce((d,[h,f])=>(d[h]=lt(f,t),d),{}),l),{}),compoundVariants:a.map(l=>[l.variants,lt(l.style,t)])},n},{})}function ki(e,t){let n,r,i,s,o=[],a;const l=Qo((c,u,d)=>{n=Xe(e,u),r=Ns(n,u),i=Xe(d,u),s=i&&Ns(i,u),o=Object.keys(n),a=Object.fromEntries(o.map(h=>[h,`hope-${c}-${h}`]))});return function(u,d){const h=Jn(),f=yh(u);l(u,h,f()?.styleConfigOverride);const g=V(()=>Xe(d.styleConfigOverride,h)),b=V(()=>{const[S,A]=oe(d,["styleConfigOverride","unstyled"]);return{...t,...qr(A)}}),v=V(()=>o.reduce((S,A)=>{let T="",M={},x=[];d.unstyled||(T=r[A].baseClassName??"",M=r[A].variantClassNames??{},x=r[A].compoundVariants??[]);const D=s?.[A]?.baseClassName??"",N=s?.[A]?.variantClassNames??{},E=s?.[A]?.compoundVariants??[],k=[a[A],T,D];for(const R in b()){const j=b()[R];j!=null&&(k.push(M[R]?.[String(j)]),k.push(N[R]?.[String(j)]))}for(const[R,j]of[...x,...E])Jr(R,b())&&k.push(j);return S[A]=xe(...k),S},{})),y=V(()=>{const S=g();return S==null?{}:o.reduce((A,T)=>{const M=S[T]?.baseStyle??{},x=S[T]?.variants??{},D=S[T]?.compoundVariants??[];A[T]=M;for(const N in b()){const E=b()[N];if(E==null)continue;const k=x[N]?.[String(E)]??{};Jo(k)||Ps(A,T,k)}for(const N of D)Jr(N.variants,b())&&Ps(A,T,N.style);return A},{})});return{baseClasses:v,styleOverrides:y}}}/*!
 * Original code by SEEK
 * MIT Licensed, Copyright (c) 2021 SEEK.
 *
 * Credits to the SEEK team:
 * https://github.com/seek-oss/vanilla-extract/blob/master/packages/recipes/src/createRuntimeFn.ts
 */function _h(e,t){const{baseStyle:n={},variants:r={},compoundVariants:i=[]}=e;return{baseClassName:lt(n,t),variantClassNames:Object.entries(r).reduce((s,[o,a])=>(s[o]=Object.entries(a).reduce((l,[c,u])=>(l[c]=lt(u,t),l),{}),s),{}),compoundVariants:i.map(s=>[s.variants,lt(s.style,t)])}}function vh(e,t){const{variantClassNames:n={},compoundVariants:r=[]}=e,i=[];for(const s in t){const o=t[s];o!=null&&i.push(n[s]?.[String(o)])}for(const[s,o]of r)Jr(s,t)&&i.push(o);return i}const wh={border:!0,borderWidth:!0,borderStyle:!0,borderColor:!0,borderTop:!0,borderTopWidth:!0,borderTopStyle:!0,borderTopColor:!0,borderRight:!0,borderRightWidth:!0,borderRightStyle:!0,borderRightColor:!0,borderBottom:!0,borderBottomWidth:!0,borderBottomStyle:!0,borderBottomColor:!0,borderLeft:!0,borderLeftWidth:!0,borderLeftStyle:!0,borderLeftColor:!0,borderX:!0,borderY:!0},Ih={color:!0,background:!0,bg:!0,backgroundColor:!0,bgColor:!0,opacity:!0},Sh={alignItems:!0,alignContent:!0,alignSelf:!0,justifyItems:!0,justifyContent:!0,justifySelf:!0,flexDirection:!0,flexWrap:!0,flex:!0,flexGrow:!0,flexShrink:!0,flexBasis:!0,order:!0},Eh={gridTemplate:!0,gridTemplateColumns:!0,gridTemplateRows:!0,gridTemplateAreas:!0,gridArea:!0,gridRow:!0,gridRowStart:!0,gridRowEnd:!0,gridColumn:!0,gridColumnStart:!0,gridColumnEnd:!0,gridAutoFlow:!0,gridAutoColumns:!0,gridAutoRows:!0,placeItems:!0,placeContent:!0,placeSelf:!0,gap:!0,rowGap:!0,columnGap:!0},Th={appearance:!0,userSelect:!0,pointerEvents:!0,resize:!0,cursor:!0,outline:!0,outlineOffset:!0,outlineColor:!0},kh={display:!0,d:!0,verticalAlign:!0,overflow:!0,overflowX:!0,overflowY:!0},Ch={margin:!0,marginTop:!0,marginRight:!0,marginEnd:!0,marginBottom:!0,marginLeft:!0,marginStart:!0,m:!0,mt:!0,mr:!0,me:!0,mb:!0,ml:!0,ms:!0,mx:!0,my:!0},Ah={padding:!0,paddingTop:!0,paddingRight:!0,paddingEnd:!0,paddingBottom:!0,paddingLeft:!0,paddingStart:!0,p:!0,pt:!0,pr:!0,pe:!0,pb:!0,pl:!0,ps:!0,px:!0,py:!0},Rh={position:!0,pos:!0,zIndex:!0,top:!0,right:!0,bottom:!0,left:!0},xh={borderRadius:!0,borderTopRightRadius:!0,borderTopLeftRadius:!0,borderBottomRightRadius:!0,borderBottomLeftRadius:!0,borderTopRadius:!0,borderRightRadius:!0,borderBottomRadius:!0,borderLeftRadius:!0,rounded:!0,roundedTop:!0,roundedRight:!0,roundedBottom:!0,roundedLeft:!0},Oh={textShadow:!0,boxShadow:!0,shadow:!0},Ph={width:!0,minWidth:!0,maxWidth:!0,height:!0,minHeight:!0,maxHeight:!0,w:!0,minW:!0,maxW:!0,h:!0,minH:!0,maxH:!0,boxSize:!0},Nh={transform:!0,transformOrigin:!0,clipPath:!0},Dh={transition:!0,transitionProperty:!0,transitionTimingFunction:!0,transitionDuration:!0,transitionDelay:!0,animation:!0,willChange:!0},Lh={fontFamily:!0,fontSize:!0,fontWeight:!0,lineHeight:!0,letterSpacing:!0,textAlign:!0,fontStyle:!0,textTransform:!0,textDecoration:!0},Mh={objectFit:!0,objectPosition:!0},$h={_hover:!0,_active:!0,_focus:!0,_highlighted:!0,_focusWithin:!0,_focusVisible:!0,_disabled:!0,_readOnly:!0,_before:!0,_after:!0,_empty:!0,_expanded:!0,_checked:!0,_grabbed:!0,_pressed:!0,_invalid:!0,_valid:!0,_loading:!0,_selected:!0,_hidden:!0,_autofill:!0,_even:!0,_odd:!0,_first:!0,_last:!0,_notFirst:!0,_notLast:!0,_visited:!0,_activeLink:!0,_activeStep:!0,_indeterminate:!0,_groupHover:!0,_peerHover:!0,_groupFocus:!0,_peerFocus:!0,_groupFocusVisible:!0,_peerFocusVisible:!0,_groupActive:!0,_peerActive:!0,_groupDisabled:!0,_peerDisabled:!0,_groupInvalid:!0,_peerInvalid:!0,_groupChecked:!0,_peerChecked:!0,_groupFocusWithin:!0,_peerFocusWithin:!0,_peerPlaceholderShown:!0,_placeholder:!0,_placeholderShown:!0,_fullScreen:!0,_selection:!0,_rtl:!0,_ltr:!0,_mediaDark:!0,_mediaReduceMotion:!0,_dark:!0,_light:!0},Bh={...wh,...Ih,...Sh,...Eh,...Th,...kh,...Ch,...Ah,...Rh,...xh,...Oh,...Ph,...Nh,...Dh,...Lh,...Mh,...$h};function Uh(e){return Object.keys(e).filter(t=>t in Bh)}const ca=new Map([["htmlWidth","width"],["htmlHeight","height"],["htmlSize","size"]]);function jh(e){return Object.entries(e).reduce((t,[n,r])=>{const i=ca.get(n);return i!=null&&r!=null&&(t[i]=r),t},{})}const Fh=ea({});function kr(e,t,n){let r,i,s=[];const o=Qo(l=>{t!=null&&(r=Xe(t,l),i=_h(r,l),s=r.variants?Object.keys(r.variants):[])}),a=l=>{const c=Jn();o(c);const[u,d,h,f,g]=oe(l,["as","class","sx","__css"],[...ca.keys()],s,Uh(l)),b=V(()=>{if(i==null)return[];const y={...r?.defaultVariants,...qr(h)};return vh(i,y)}),v=V(()=>{const y=Object.assign({},u.__css,qr(f),...Vc(u.sx).map(S=>Xe(S,c)));if(!Jo(y))return Fh({css:Ei(y,c)}).className});return _(Hc,X({get component(){return u.as??e},get class(){return xe(n,i?.baseClassName,...b(),v(),u.class)||void 0}},()=>jh(d),g))};return n!=null&&(a.toString=()=>`.${n}`),a}function Hh(){const e=new Map;return new Proxy(kr,{apply(t,n,r){return kr(...r)},get(t,n){return e.has(n)||e.set(n,kr(n)),e.get(n)}})}const ce=Hh(),zh=na({from:{transform:"rotate(0deg)"},to:{transform:"rotate(360deg)"}});na({from:{opacity:0},to:{opacity:1}});/*!
 * Original code by Chakra UI
 * MIT Licensed, Copyright (c) 2019 Segun Adebayo.
 *
 * Credits to the Chakra UI team:
 * https://github.com/chakra-ui/chakra-ui/blob/main/packages/color-mode/src/color-mode-context.ts
 */const Vh=mt();/*!
 * Original code by Chakra UI
 * MIT Licensed, Copyright (c) 2019 Segun Adebayo.
 *
 * Credits to the Chakra UI team:
 * https://github.com/chakra-ui/chakra-ui/blob/main/packages/color-mode/src/storage-manager.ts
 */const Wh="hope-ui-color-mode";function Gh(e){return{ssr:!1,type:"localStorage",get:t=>{let n;try{n=localStorage.getItem(e)}catch{}return n??t},set:t=>{try{localStorage.setItem(e,t)}catch{}}}}const qh=Gh(Wh);/*!
 * Original code by Chakra UI
 * MIT Licensed, Copyright (c) 2019 Segun Adebayo.
 *
 * Credits to the Chakra UI team:
 * https://github.com/chakra-ui/chakra-ui/blob/main/packages/color-mode/src/color-mode.utils.ts
 */function ua(){return window.matchMedia("(prefers-color-scheme: dark)")}function Kh(){const e=document.createElement("style");return e.appendChild(document.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(e),()=>{window.getComputedStyle(document.body),requestAnimationFrame(()=>{requestAnimationFrame(()=>{document.head.removeChild(e)})})}}function Xh(e){document.body.classList.add(e?We.dark:We.light),document.body.classList.remove(e?We.light:We.dark)}function Jh(e,t=!0){const n=t?Kh():void 0;document.documentElement.dataset.theme=e,document.documentElement.style.colorScheme=e,n?.()}function ha(e){return ua().matches??e==="dark"?"dark":"light"}function Yh(e){const t="light",n=e.get(t)??t;return n==="system"?ha():n}function Qh(e){const t=ua(),n=r=>{e(r.matches?"dark":"light")};return t.addEventListener("change",n),()=>{t.removeEventListener("change",n)}}function Zh(e){const t=()=>e.storageManager??qh;let n;const[r,i]=be(Yh(t())),s=c=>{i(c),Xh(c==="dark"),Jh(c,e.disableTransitionOnChange)},o=c=>{n&&(n(),n=void 0);const u=c==="system";u&&(n=Qh(s)),s(u?ha():c),t().set(c)},a=()=>{o(r()==="dark"?"light":"dark")};Gn(()=>{o(t().get()??"system")}),Bo(()=>{n?.()});const l={colorMode:r,setColorMode:o,toggleColorMode:a};return _(Vh.Provider,{value:l,get children(){return e.children}})}function ed(e){return e==null?{}:{overflow:St(e,t=>t!=null?"hidden":void 0),textOverflow:St(e,t=>t!=null?"ellipsis":void 0),display:St(e,t=>t!=null?"-webkit-box":void 0),WebkitLineClamp:St(e,t=>t??void 0),WebkitBoxOrient:St(e,t=>t!=null?"vertical":void 0)}}function Ci(e,t){return X(e,t)}function ae(e,t){return`rgb(${e} / ${t})`}const td=Ht('<svg><path fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"></path></svg>',4,!0),Ds={viewBox:"0 0 24 24",path:()=>td.cloneNode(!0)},Ls=ce("svg",{baseStyle:{display:"inline-block",flexShrink:0,boxSize:"1em",color:"currentColor",lineHeight:"1em"}},"hope-Icon-root"),nd=e=>{e=Ci({children:Ds.path,viewBox:Ds.viewBox,color:"currentColor"},e);const[t,n]=oe(e,["as","children","viewBox"]),r=()=>t.as&&!Yo(t.as);return _(de,{get when(){return r()},get fallback(){return _(Ls,X({get viewBox(){return t.viewBox},verticalAlign:"middle"},n,{get children(){return t.children}}))},get children(){return _(Ls,X({get as(){return t.as}},n))}})};function da(e){const{viewBox:t="0 0 24 24",defaultProps:n={}}=e;return r=>_(nd,X({viewBox:t},n,r,{get children(){return e.path}}))}const rd=Ht('<svg><g fill="none"><path d="M12 19a7 7 0 1 0 0-14a7 7 0 0 0 0 14zm0 3c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10z" opacity="0.2" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path><path d="M2 12C2 6.477 6.477 2 12 2v3a7 7 0 0 0-7 7H2z" fill="currentColor"></path></g></svg>',8,!0),id=da({path:()=>rd.cloneNode(!0)});/*!
 * Portions of this file are based on code from react-spectrum.
 * Apache License Version 2.0, Copyright 2020 Adobe.
 *
 * Credits to the React Spectrum team:
 * https://github.com/adobe/react-spectrum/blob/main/packages/%40react-aria/aria-modal-polyfill/src/index.ts
 *
 * Portions of this file are based on code from mantinedev.
 * MIT Licensed, Copyright (c) 2021 Vitaly Rtishchev.
 *
 * Credits to the Mantinedev team:
 * https://github.com/mantinedev/mantine/blob/master/src/mantine-hooks/src/use-focus-trap/create-aria-hider.ts
 */const sd=typeof document<"u"?document:void 0,od="body > :not(script, style)",Cr='[aria-modal="true"], [data-ismodal="true"]';function Ms(e,t){const n=Array.from(e.querySelectorAll(od)).filter(r=>!r.contains(t)).map(r=>{const i=r.getAttribute("aria-hidden")||"";return r.setAttribute("aria-hidden","true"),{element:r,previousAriaHidden:i}});return()=>{n.forEach(({element:r,previousAriaHidden:i})=>{i?r.setAttribute("aria-hidden",i):r.removeAttribute("aria-hidden")})}}function ad(e="body",{document:t=sd}={}){const n=t?.querySelector(e);if(t==null||n==null)return qc;const r={childList:!0};let i=[],s;const o=new MutationObserver(a=>{for(const l of a)if(l.type==="childList"){if(l.addedNodes.length>0){const c=Array.from(l.addedNodes).find(u=>u.querySelector?.(Cr));if(c){i.push(c);const u=c.querySelector(Cr);s?.(),s=Ms(t,u)}}else if(l.removedNodes.length>0){const c=Array.from(l.removedNodes),u=i.findIndex(d=>c.includes(d));if(u>=0)if(s?.(),i=i.filter((d,h)=>h!==u),i.length>0){const d=i[i.length-1].querySelector(Cr);s=Ms(t,d)}else s=void 0}}});return o.observe(n,r),()=>{s?.(),o.disconnect()}}function ld(e){ad(),e=Ci({withCssReset:!0},e);const[t,n]=oe(e,["storageManager","disableTransitionOnChange"]);return _(Zh,{get storageManager(){return t.storageManager},get disableTransitionOnChange(){return t.disableTransitionOnChange},get children(){return _(bh,n)}})}/*!
 * Original code by Chakra UI
 * MIT Licensed, Copyright (c) 2019 Segun Adebayo.
 *
 * Credits to the Chakra UI team:
 * https://github.com/chakra-ui/chakra-ui/blob/main/packages/layout/src/box.tsx
 */const bn=ce("div"),Yn=["primary","neutral","success","info","warning","danger"];function cd(e){const t=[];for(const n of Yn){const r=n==="neutral",i=n==="warning";t.push({variants:{variant:"solid",colorScheme:n},style:{color:i?e.colors[n][900]:"common.white",backgroundColor:e.colors[n][r?"800":i?"300":"500"],borderColor:e.colors[n][r?"800":i?"300":"500"],_hover:{color:i?e.colors[n][900]:"common.white",backgroundColor:e.colors[n][r?"700":i?"400":"600"],borderColor:e.colors[n][r?"700":i?"400":"600"]},_active:{color:i?e.colors[n][900]:"common.white",backgroundColor:e.colors[n][r?"600":i?"500":"700"],borderColor:e.colors[n][r?"600":i?"500":"700"]},_disabled:{color:"neutral.200",backgroundColor:"neutral.100",borderColor:"neutral.100"},_dark:{color:i?e.colors[n][900]:"whiteAlpha.900",backgroundColor:e.colors[n][i?"500":"700"],borderColor:e.colors[n][i?"500":"700"],_hover:{color:i?e.colors[n][900]:"whiteAlpha.900",backgroundColor:e.colors[n][i?"400":"600"],borderColor:e.colors[n][i?"400":"600"]},_active:{color:i?e.colors[n][900]:"whiteAlpha.900",backgroundColor:e.colors[n][i?"300":"500"],borderColor:e.colors[n][i?"300":"500"]},_disabled:{color:"whiteAlpha.300",backgroundColor:"whiteAlpha.100",borderColor:"transparent"}}}})}return t}function ud(e){const t=[];for(const n of Yn){const r=n==="neutral",i=n==="warning";t.push({variants:{variant:"soft",colorScheme:n},style:{color:e.colors[n][i?"900":"700"],backgroundColor:e.colors[n][r?"200":i?"100":"50"],borderColor:e.colors[n][r?"200":i?"100":"50"],_hover:{color:e.colors[n][i?"900":"800"],backgroundColor:e.colors[n][r?"300":i?"200":"100"],borderColor:e.colors[n][r?"300":i?"200":"100"]},_active:{color:e.colors[n][i?"900":"800"],backgroundColor:e.colors[n][r?"400":i?"300":"200"],borderColor:e.colors[n][r?"400":i?"300":"200"]},_disabled:{color:"neutral.200",backgroundColor:"neutral.50",borderColor:"neutral.50"},_dark:{color:e.colors[n][200],backgroundColor:ae(e.colors[n].mainChannel,.2),borderColor:"transparent",_hover:{color:e.colors[n][200],backgroundColor:ae(e.colors[n].mainChannel,.3),borderColor:"transparent"},_active:{color:e.colors[n][200],backgroundColor:ae(e.colors[n].mainChannel,.4),borderColor:"transparent"},_disabled:{color:"whiteAlpha.200",backgroundColor:"whiteAlpha.50",borderColor:"transparent"}}}})}return t}function hd(e){const t=[];for(const n of Yn){const r=n==="neutral",i=n==="warning";t.push({variants:{variant:"outlined",colorScheme:n},style:{color:e.colors[n][i?"800":"700"],backgroundColor:"transparent",borderColor:e.colors[n][r||i?"400":"300"],_hover:{color:e.colors[n][i?"800":"700"],backgroundColor:e.colors[n][r||i?"100":"50"],borderColor:e.colors[n][r||i?"500":"400"]},_active:{color:e.colors[n][i?"800":"700"],backgroundColor:e.colors[n][r||i?"200":"100"],borderColor:e.colors[n][r||i?"500":"400"]},_disabled:{color:"neutral.200",backgroundColor:"transparent",borderColor:"neutral.100"},_dark:{color:e.colors[n][200],backgroundColor:"transparent",borderColor:e.colors[n][800],_hover:{color:e.colors[n][200],backgroundColor:ae(e.colors[n].mainChannel,.1),borderColor:e.colors[n][700]},_active:{color:e.colors[n][200],backgroundColor:ae(e.colors[n].mainChannel,.2),borderColor:e.colors[n][700]},_disabled:{color:"whiteAlpha.200",backgroundColor:"transparent",borderColor:"whiteAlpha.50"}}}})}return t}function dd(e){const t=[];for(const n of Yn){const r=n==="neutral",i=n==="warning";t.push({variants:{variant:"plain",colorScheme:n},style:{color:e.colors[n][i?"800":"700"],backgroundColor:"transparent",borderColor:"transparent",_hover:{color:e.colors[n][i?"800":"700"],backgroundColor:e.colors[n][r||i?"100":"50"],borderColor:e.colors[n][r||i?"100":"50"]},_active:{color:e.colors[n][i?"800":"700"],backgroundColor:e.colors[n][r||i?"200":"100"],borderColor:e.colors[n][r||i?"200":"100"]},_disabled:{color:"neutral.200",backgroundColor:"transparent",borderColor:"transparent"},_dark:{color:e.colors[n][200],backgroundColor:"transparent",borderColor:"transparent",_hover:{color:e.colors[n][200],backgroundColor:ae(e.colors[n].mainChannel,.1),borderColor:"transparent"},_active:{color:e.colors[n][200],backgroundColor:ae(e.colors[n].mainChannel,.2),borderColor:"transparent"},_disabled:{color:"whiteAlpha.200",backgroundColor:"transparent",borderColor:"transparent"}}}})}return t}const Ct=new Map([["xs","7"],["sm","8"],["md","10"],["lg","12"]]);function fd(){const e=[];for(const[t,n]of Ct)e.push({variants:{isIconButton:!0,size:t},style:{width:n,p:0}});return e}const gd=ki(({vars:e})=>({root:{baseStyle:{appearance:"none",position:"relative",display:"inline-flex",justifyContent:"center",alignItems:"center",gap:2,width:"auto",outline:"none",border:"1px solid transparent",borderRadius:"md",padding:0,fontFamily:"inherit",fontSize:"100%",fontWeight:"medium",lineHeight:"none",textDecoration:"none",userSelect:"none",whiteSpace:"nowrap",verticalAlign:"middle",transitionProperty:"color, background-color, border-color",transitionDuration:"250ms",_disabled:{cursor:"not-allowed"},_loading:{opacity:.8},...gh(e)},variants:{variant:{default:{color:"neutral.800",backgroundColor:"common.white",borderColor:"neutral.300",_hover:{color:"neutral.800",backgroundColor:"neutral.100",borderColor:"neutral.300"},_active:{color:"neutral.800",backgroundColor:"neutral.200",borderColor:"neutral.400"},_disabled:{color:"neutral.200",backgroundColor:"transparent",borderColor:"neutral.100"},_dark:{color:"whiteAlpha.900",backgroundColor:"whiteAlpha.50",borderColor:"whiteAlpha.200",_hover:{color:"whiteAlpha.900",backgroundColor:"whiteAlpha.100",borderColor:"whiteAlpha.200"},_active:{color:"whiteAlpha.900",backgroundColor:"whiteAlpha.200",borderColor:"whiteAlpha.300"},_disabled:{color:"whiteAlpha.200",backgroundColor:"transparent",borderColor:"whiteAlpha.50"}}}},size:{xs:{height:Ct.get("xs"),px:3,fontSize:"xs"},sm:{height:Ct.get("sm"),px:4,fontSize:"sm"},md:{height:Ct.get("md"),px:5,fontSize:"base"},lg:{height:Ct.get("lg"),px:6,fontSize:"lg"}},isFullWidth:{true:{display:"flex",width:"100%"}}},compoundVariants:[...cd(e),...ud(e),...hd(e),...dd(e),...fd()]},icon:{baseStyle:{display:"inline-flex",alignSelf:"center",flexShrink:0}},leftIcon:{},rightIcon:{},loaderWrapper:{baseStyle:{position:"absolute",display:"flex",alignItems:"center",flexShrink:0,fontSize:"1em",lineHeight:"normal"}},loaderIcon:{baseStyle:{fontSize:"1.3em",animation:`1s linear infinite ${zh}`}}}),{variant:"default",colorScheme:"primary",size:"md"}),fa=mt();function Ai(){const e=Ft(fa);if(!e)throw new Error("[hope-ui]: `useButtonContext` must be used within a `Button` component");return e}ce("div",{baseStyle:{display:"inline-flex","& > *:focus":{zIndex:1}},variants:{orientation:{horizontal:{flexDirection:"row","& > *:first-of-type:not(:last-of-type)":{borderRightRadius:0},"& > *:not(:first-of-type):not(:last-of-type)":{borderRadius:0,marginLeft:"-1px"},"& > *:not(:first-of-type):last-of-type":{borderLeftRadius:0,marginLeft:"-1px"}},vertical:{flexDirection:"column","& > *:first-of-type:not(:last-of-type)":{borderBottomRadius:0},"& > *:not(:first-of-type):not(:last-of-type)":{borderRadius:0,marginTop:"-1px"},"& > *:not(:first-of-type):last-of-type":{borderTopRadius:0,marginTop:"-1px"}}}},defaultVariants:{orientation:"horizontal"}},"hope-ButtonGroup-root");const pd=mt();function md(){return Ft(pd)}const $s=e=>{const t=Ai(),[n,r]=oe(e,["class","__css"]);return _(ce.span,X({"aria-hidden":!0,get class(){return xe(t.baseClasses().icon,n.class)},get __css(){return{...t.styleOverrides().icon,...n.__css}}},r))},Bs=e=>{const t=Ai(),[n,r]=oe(e,["class","children","hasLoadingText"]);return _(ce.div,X({get class(){return xe(t.baseClasses().loaderWrapper,n.class)},get position(){return n.hasLoadingText?"relative":"absolute"},get __css(){return t.styleOverrides().loaderWrapper}},r,{get children(){return _(de,{get when(){return n.children},get fallback(){return _(id,{get class(){return t.baseClasses().loaderIcon},get __css(){return t.styleOverrides().loaderIcon}})},get children(){return n.children}})}}))};/*!
 * Original code by Ariakit
 * MIT Licensed, Copyright (c) Diego Haz.
 *
 * Credits to the Ariakit team:
 * https://github.com/ariakit/ariakit/blob/main/packages/ariakit-utils/src/dom.ts
 */const yd=["button","color","file","image","reset","submit"];function Us(e){const t=e.tagName.toLowerCase();return t==="button"?!0:t==="input"&&e.type?yd.indexOf(e.type)!==-1:!1}const bd=Ht("<span></span>"),_d=e=>{let t;const n=md(),r=Ci({get variant(){return n?.variant},get colorScheme(){return n?.colorScheme},get size(){return n?.size},get isDisabled(){return n?.isDisabled}},e);e=Ti("Button",{loaderPlacement:"start"},r);const[i,s,o,a]=oe(e,["ref","class","type","as","isLoading","loaderPlacement","loadingText","loader","isDisabled"],["children","leftIcon","rightIcon"],[...Ii,"colorScheme","variant","size","isFullWidth","isIconButton"]),l=Zc(()=>t,()=>e.as||"button"),[c,u]=be(l()!=null&&Us({tagName:l(),type:i.type})),d=V(()=>i.type!=null?i.type:c()?"button":void 0),{baseClasses:h,styleOverrides:f}=gd("Button",o);return dc(()=>{t!=null&&u(Us(t))}),_(fa.Provider,{value:{baseClasses:h,styleOverrides:f},get children(){return _(ce.button,X({get as(){return i.as},ref(g){const b=Gc(v=>t=v,i.ref);typeof b=="function"&&b(g)},get role(){return!c()&&l()!=="a"?"button":void 0},get type(){return d()},get tabIndex(){return c()?void 0:0},get disabled(){return i.isDisabled},get["data-loading"](){return i.isLoading||void 0},get class(){return xe(h().root,i.class)},get __css(){return f().root}},a,{get children(){return[_(de,{get when(){return i.isLoading&&i.loaderPlacement==="start"},get children(){return _(Bs,{get hasLoadingText(){return!!i.loadingText},get children(){return i.loader}})}}),_(de,{get when(){return i.isLoading},get fallback(){return _(js,s)},get children(){return _(de,{get when(){return i.loadingText},get fallback(){return(()=>{const g=bd.cloneNode(!0);return g.style.setProperty("opacity","0"),vi(g,_(js,s)),g})()},get children(){return i.loadingText}})}}),_(de,{get when(){return i.isLoading&&i.loaderPlacement==="end"},get children(){return _(Bs,{get hasLoadingText(){return!!i.loadingText},get children(){return i.loader}})}})]}}))}})};function js(e){const t=Ai();return[_(de,{get when(){return e.leftIcon},get children(){return _($s,{get class(){return t.baseClasses().leftIcon},get __css(){return t.styleOverrides().leftIcon},get children(){return e.leftIcon}})}}),V(()=>e.children),_(de,{get when(){return e.rightIcon},get children(){return _($s,{get class(){return t.baseClasses().rightIcon},get __css(){return t.styleOverrides().rightIcon},get children(){return e.rightIcon}})}})]}const vd=e=>_(_d,X({isIconButton:!0},e)),wd=e=>{const[t,n]=oe(e,["class","direction","wrap","align","justify"]);return _(ce.div,X({get class(){return xe("hope-Flex-root",t.class)},get __css(){return{display:"flex",flexDirection:t.direction,flexWrap:t.wrap,alignItems:t.align,justifyContent:t.justify}}},n))},Id=mt();function Sd(){return Ft(Id)}const Ed=ki({root:{baseStyle:{margin:0,fontSize:"inherit",fontWeight:"semibold",lineHeight:"inherit"},variants:{size:{xs:{fontSize:"xs",lineHeight:4},sm:{fontSize:"sm",lineHeight:5},base:{fontSize:"base",lineHeight:6},lg:{fontSize:"lg",lineHeight:7},xl:{fontSize:"xl",lineHeight:7},"2xl":{fontSize:"2xl",lineHeight:8},"3xl":{fontSize:"3xl",lineHeight:9},"4xl":{fontSize:"4xl",lineHeight:10},"5xl":{fontSize:"5xl",lineHeight:"none"},"6xl":{fontSize:"6xl",lineHeight:"none"},"7xl":{fontSize:"7xl",lineHeight:"none"},"8xl":{fontSize:"8xl",lineHeight:"none"},"9xl":{fontSize:"9xl",lineHeight:"none"}}}}}),Td=e=>{e=Ti("Heading",{},e);const[t,n,r]=oe(e,["as","class","level","lineClamp"],[...Ii,"size"]),{baseClasses:i,styleOverrides:s}=Ed("Heading",n),o=()=>t.level?`h${t.level}`:t.as,a=V(()=>({...s().root,...ed(t.lineClamp)}));return _(ce.h2,X({get as(){return o()},get class(){return xe(i().root,t.class)},get __css(){return a()}},r))};/*!
 * Portions of this file are based on code from chakra-ui.
 * MIT Licensed, Copyright (c) 2019 Segun Adebayo.
 *
 * Credits to the Chakra UI team:
 * https://github.com/chakra-ui/chakra-ui/blob/7d7e04d53d871e324debe0a2cb3ff44d7dbf3bca/packages/components/image/src/use-image.ts
 */function kd(e){const[t,n]=be("pending"),r=()=>e.ignoreFallback?"loaded":t();let i=null;const s=()=>{i&&(i.onload=null,i.onerror=null,i=null)},o=()=>{if(!e.src)return;s();const a=new Image;a.src=e.src,e.crossOrigin&&(a.crossOrigin=e.crossOrigin),e.srcSet&&(a.srcset=e.srcSet),e.sizes&&(a.sizes=e.sizes),e.loading&&(a.loading=e.loading),a.onload=l=>{s(),n("loaded"),Is(e.onLoad,l)},a.onerror=l=>{s(),n("failed"),Is(e.onError,l)},i=a};return Gn(()=>{n(e.src?"loading":"pending")}),$e(()=>{e.ignoreFallback||(t()==="loading"&&o(),Bo(()=>{s()}))}),r}const Cd=e=>{const[t,n,r]=oe(e,["class","fallbackSrc","fallback","src","srcSet","align","fit","loading","ignoreFallback","crossOrigin"],["onError","onLoad"]),i=()=>t.loading!=null||t.ignoreFallback||t.fallbackSrc===void 0&&t.fallback===void 0,s=kd(X(e,{get ignoreFallback(){return i()}})),o=()=>({objectFit:t.fit,objectPosition:t.align,...i()?n:{},...r});return _(de,{get when(){return s()==="loaded"},get fallback(){return _(de,{get when(){return t.fallback},get fallback(){return _(ce.img,X({get src(){return t.fallbackSrc},class:"hope-Image-placeholder"},o))},get children(){return t.fallback}})},get children(){return _(ce.img,X({get src(){return t.src},get srcSet(){return t.srcSet},get crossOrigin(){return t.crossOrigin},get loading(){return t.loading},get class(){return xe("hope-Image-root",t.class)}},o))}})},Ad={variant:"outlined",size:"md"},Ar={sm:{minHeight:8,fontSize:"sm",lineHeight:5},md:{minHeight:10,fontSize:"base",lineHeight:6},lg:{minHeight:12,fontSize:"lg",lineHeight:7}},Rd=ki(({vars:e})=>({root:{baseStyle:{appearance:"none",position:"relative",width:"100%",minWidth:0,outline:"none",borderRadius:"sm",border:"1px solid transparent",backgroundColor:"transparent",padding:0,color:"common.foreground",fontSize:"base",lineHeight:"base",transitionProperty:"color, border-color, background-color, box-shadow 250ms",transitionDuration:"250ms","&::placeholder":{color:"neutral.500",opacity:1},"&[readonly]":{boxShadow:"none !important",userSelect:"all",cursor:"default"},"&:disabled":{opacity:.4,cursor:"not-allowed"},"&:focus":{boxShadow:{light:`0 0 0 3px ${ae(e.colors.primary.lightChannel,.75)}`,dark:`0 0 0 3px ${ae(e.colors.primary.darkChannel,.75)}`},borderColor:{light:"primary.400",dark:"primary.600"}},"&[aria-invalid=true]":{borderColor:{light:"danger.400",dark:"danger.600"}},"&[aria-invalid=true]:focus":{boxShadow:{light:`0 0 0 3px ${ae(e.colors.danger.lightChannel,.75)}`,dark:`0 0 0 3px ${ae(e.colors.danger.darkChannel,.75)}`}}},variants:{variant:{filled:{backgroundColor:{light:"neutral.100",dark:"neutral.800"}},outlined:{border:{light:`1px solid ${e.colors.neutral[300]}`,dark:`1px solid ${e.colors.neutral[700]}`},backgroundColor:{light:"transparent",dark:"rgb(255 255 255 / 0.02)"}},plain:{backgroundColor:"transparent"}},size:{sm:{...Ar.sm,px:2.5},md:{...Ar.md,px:3},lg:{...Ar.lg,px:4}}}}}),Ad),xd=mt();function Od(){return Ft(xd)}const Pd=e=>{const t=Sd(),n=Od();e=Ti("Input",{},e);const[r,i,s]=oe(e,["id","aria-describedby","class","__css","required","disabled","readonly","isRequired","isDisabled","isReadOnly","isInvalid","htmlSize"],[...Ii,"variant","size"]),{baseClasses:o,styleOverrides:a}=Rd("Input",{get variant(){return n?.variant()??i.variant},get size(){return n?.size()??i.size},get styleConfigOverride(){return i.styleConfigOverride},get unstyled(){return n?.unstyled()??i.unstyled}}),l=()=>r.isRequired??n?.isRequired()??t?.isRequired(),c=()=>r.isDisabled??n?.isDisabled()??t?.isDisabled(),u=()=>r.isReadOnly??n?.isReadOnly()??t?.isReadOnly(),d=()=>r.isInvalid??n?.isInvalid()??t?.isInvalid(),h=()=>t?.mergeAriaDescribedBy(r["aria-describedby"]);return _(ce.input,X({type:"text",get id(){return r.id??t?.id()},get required(){return l()},get disabled(){return c()},get readOnly(){return u()},get["aria-invalid"](){return Wc(d())},get["aria-describedby"](){return h()},get size(){return r.htmlSize},get class(){return xe(n?.baseClasses().input,o().root,r.class)},get __css(){return{...n?.styleOverrides().input,...a().root,...r.__css}}},s))};const Nd="/assets/logo_sm.454a671e.png",Dd=Ht('<svg><path fill="currentColor" stroke="currentColor" d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352c79.5 0 144-64.5 144-144s-64.5-144-144-144S64 128.5 64 208s64.5 144 144 144z"></path></svg>',4,!0),Ld=da({viewBox:"0 0 512 512",path:()=>Dd.cloneNode(!0)});function Md(e){let t;return _(bn,{display:"flex",flexDirection:"row",rounded:"lg",shadow:"lg",w:"full",bg:"white",_dark:{borderColor:"neutral.800",bg:"neutral.900"},get children(){return[_(Pd,{placeholder:"hostname",ref(n){const r=t;typeof r=="function"?r(n):t=n}}),_(vd,{"aria-label":"Search",variant:"solid",onClick:n=>t&&e.handleHostname(t.value),get children(){return _(Ld,{})}})]}})}function $d(e){return _(wd,{marginTop:4,alignItems:"center",get children(){return[_(bn,{marginLeft:4,maxWidth:24,get children(){return _(Cd,{src:Nd,objectFit:"cover"})}}),_(bn,{marginLeft:4,get children(){return _(Td,{level:1,size:"5xl",fontFamily:"mono",children:"DNSr"})}}),_(bn,{marginLeft:4,width:"96",get children(){return _(Md,{get handleHostname(){return e.handleHostname}})}})]}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ga=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):(i&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},Bd=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=e[n++];t[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=e[n++],o=e[n++],a=e[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;t[r++]=String.fromCharCode(55296+(l>>10)),t[r++]=String.fromCharCode(56320+(l&1023))}else{const s=e[n++],o=e[n++];t[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return t.join("")},pa={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const s=e[i],o=i+1<e.length,a=o?e[i+1]:0,l=i+2<e.length,c=l?e[i+2]:0,u=s>>2,d=(s&3)<<4|a>>4;let h=(a&15)<<2|c>>6,f=c&63;l||(f=64,o||(h=64)),r.push(n[u],n[d],n[h],n[f])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(ga(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):Bd(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const s=n[e.charAt(i++)],a=i<e.length?n[e.charAt(i)]:0;++i;const c=i<e.length?n[e.charAt(i)]:64;++i;const d=i<e.length?n[e.charAt(i)]:64;if(++i,s==null||a==null||c==null||d==null)throw Error();const h=s<<2|a>>4;if(r.push(h),c!==64){const f=a<<4&240|c>>2;if(r.push(f),d!==64){const g=c<<6&192|d;r.push(g)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},Ud=function(e){const t=ga(e);return pa.encodeByteArray(t,!0)},An=function(e){return Ud(e).replace(/\./g,"")},ma=function(e){try{return pa.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function jd(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Q())}function Fd(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function Hd(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function zd(){const e=Q();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function Vd(){return typeof indexedDB=="object"}function Wd(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;t(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){t(n)}})}function Gd(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qd=()=>Gd().__FIREBASE_DEFAULTS__,Kd=()=>{if(typeof process>"u"||typeof process.env>"u")return;const e=process.env.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},Xd=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&ma(e[1]);return t&&JSON.parse(t)},Ri=()=>{try{return qd()||Kd()||Xd()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},ya=e=>{var t,n;return(n=(t=Ri())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},xi=e=>{const t=ya(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),r]:[t.substring(0,n),r]},Jd=()=>{var e;return(e=Ri())===null||e===void 0?void 0:e.config},ba=e=>{var t;return(t=Ri())===null||t===void 0?void 0:t[`_${e}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yd{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _a(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=t||"demo-project",i=e.iat||0,s=e.sub||e.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},e),a="";return[An(JSON.stringify(n)),An(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qd="FirebaseError";class ue extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=Qd,Object.setPrototypeOf(this,ue.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Vt.prototype.create)}}class Vt{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},i=`${this.service}/${t}`,s=this.errors[t],o=s?Zd(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new ue(i,a,r)}}function Zd(e,t){return e.replace(ef,(n,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const ef=/\{\$([^}]+)}/g;function tf(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function Rn(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const s=e[i],o=t[i];if(Fs(s)&&Fs(o)){if(!Rn(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Fs(e){return e!==null&&typeof e=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wt(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(i=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function nf(e,t){const n=new rf(e,t);return n.subscribe.bind(n)}class rf{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(r=>{this.error(r)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,r){let i;if(t===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");sf(t,["next","error","complete"])?i=t:i={next:t,error:n,complete:r},i.next===void 0&&(i.next=Rr),i.error===void 0&&(i.error=Rr),i.complete===void 0&&(i.complete=Rr);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function sf(e,t){if(typeof e!="object"||e===null)return!1;for(const n of t)if(n in e&&typeof e[n]=="function")return!0;return!1}function Rr(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pe(e){return e&&e._delegate?e._delegate:e}class Te{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ve="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class of{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new Yd;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t?.identifier),i=(n=t?.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(lf(t))try{this.getOrInitializeService({instanceIdentifier:Ve})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(t=Ve){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Ve){return this.instances.has(t)}getOptions(t=Ve){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(t,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(t),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&t(o,i),()=>{s.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(!!r)for(const i of r)try{i(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:af(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=Ve){return this.component?this.component.multipleInstances?t:Ve:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function af(e){return e===Ve?void 0:e}function lf(e){return e.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cf{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new of(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var O;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(O||(O={}));const uf={debug:O.DEBUG,verbose:O.VERBOSE,info:O.INFO,warn:O.WARN,error:O.ERROR,silent:O.SILENT},hf=O.INFO,df={[O.DEBUG]:"log",[O.VERBOSE]:"log",[O.INFO]:"info",[O.WARN]:"warn",[O.ERROR]:"error"},ff=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),i=df[t];if(i)console[i](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Oi{constructor(t){this.name=t,this._logLevel=hf,this._logHandler=ff,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in O))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?uf[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,O.DEBUG,...t),this._logHandler(this,O.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,O.VERBOSE,...t),this._logHandler(this,O.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,O.INFO,...t),this._logHandler(this,O.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,O.WARN,...t),this._logHandler(this,O.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,O.ERROR,...t),this._logHandler(this,O.ERROR,...t)}}const gf=(e,t)=>t.some(n=>e instanceof n);let Hs,zs;function pf(){return Hs||(Hs=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function mf(){return zs||(zs=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const va=new WeakMap,Yr=new WeakMap,wa=new WeakMap,xr=new WeakMap,Pi=new WeakMap;function yf(e){const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("success",s),e.removeEventListener("error",o)},s=()=>{n(Be(e.result)),i()},o=()=>{r(e.error),i()};e.addEventListener("success",s),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&va.set(n,e)}).catch(()=>{}),Pi.set(t,e),t}function bf(e){if(Yr.has(e))return;const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("complete",s),e.removeEventListener("error",o),e.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",s),e.addEventListener("error",o),e.addEventListener("abort",o)});Yr.set(e,t)}let Qr={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return Yr.get(e);if(t==="objectStoreNames")return e.objectStoreNames||wa.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Be(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function _f(e){Qr=e(Qr)}function vf(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(Or(this),t,...n);return wa.set(r,t.sort?t.sort():[t]),Be(r)}:mf().includes(e)?function(...t){return e.apply(Or(this),t),Be(va.get(this))}:function(...t){return Be(e.apply(Or(this),t))}}function wf(e){return typeof e=="function"?vf(e):(e instanceof IDBTransaction&&bf(e),gf(e,pf())?new Proxy(e,Qr):e)}function Be(e){if(e instanceof IDBRequest)return yf(e);if(xr.has(e))return xr.get(e);const t=wf(e);return t!==e&&(xr.set(e,t),Pi.set(t,e)),t}const Or=e=>Pi.get(e);function If(e,t,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(e,t),a=Be(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Be(o.result),l.oldVersion,l.newVersion,Be(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const Sf=["get","getKey","getAll","getAllKeys","count"],Ef=["put","add","delete","clear"],Pr=new Map;function Vs(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(Pr.get(t))return Pr.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=Ef.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Sf.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&l.done]))[0]};return Pr.set(t,s),s}_f(e=>({...e,get:(t,n,r)=>Vs(t,n)||e.get(t,n,r),has:(t,n)=>!!Vs(t,n)||e.has(t,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tf{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(kf(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function kf(e){const t=e.getComponent();return t?.type==="VERSION"}const Zr="@firebase/app",Ws="0.8.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const et=new Oi("@firebase/app"),Cf="@firebase/app-compat",Af="@firebase/analytics-compat",Rf="@firebase/analytics",xf="@firebase/app-check-compat",Of="@firebase/app-check",Pf="@firebase/auth",Nf="@firebase/auth-compat",Df="@firebase/database",Lf="@firebase/database-compat",Mf="@firebase/functions",$f="@firebase/functions-compat",Bf="@firebase/installations",Uf="@firebase/installations-compat",jf="@firebase/messaging",Ff="@firebase/messaging-compat",Hf="@firebase/performance",zf="@firebase/performance-compat",Vf="@firebase/remote-config",Wf="@firebase/remote-config-compat",Gf="@firebase/storage",qf="@firebase/storage-compat",Kf="@firebase/firestore",Xf="@firebase/firestore-compat",Jf="firebase",Yf="9.14.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ei="[DEFAULT]",Qf={[Zr]:"fire-core",[Cf]:"fire-core-compat",[Rf]:"fire-analytics",[Af]:"fire-analytics-compat",[Of]:"fire-app-check",[xf]:"fire-app-check-compat",[Pf]:"fire-auth",[Nf]:"fire-auth-compat",[Df]:"fire-rtdb",[Lf]:"fire-rtdb-compat",[Mf]:"fire-fn",[$f]:"fire-fn-compat",[Bf]:"fire-iid",[Uf]:"fire-iid-compat",[jf]:"fire-fcm",[Ff]:"fire-fcm-compat",[Hf]:"fire-perf",[zf]:"fire-perf-compat",[Vf]:"fire-rc",[Wf]:"fire-rc-compat",[Gf]:"fire-gcs",[qf]:"fire-gcs-compat",[Kf]:"fire-fst",[Xf]:"fire-fst-compat","fire-js":"fire-js",[Jf]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xn=new Map,ti=new Map;function Zf(e,t){try{e.container.addComponent(t)}catch(n){et.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Fe(e){const t=e.name;if(ti.has(t))return et.debug(`There were multiple attempts to register component ${t}.`),!1;ti.set(t,e);for(const n of xn.values())Zf(n,e);return!0}function Gt(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eg={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Ue=new Vt("app","Firebase",eg);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tg{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Te("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Ue.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bt=Yf;function Ia(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:ei,automaticDataCollectionEnabled:!1},t),i=r.name;if(typeof i!="string"||!i)throw Ue.create("bad-app-name",{appName:String(i)});if(n||(n=Jd()),!n)throw Ue.create("no-options");const s=xn.get(i);if(s){if(Rn(n,s.options)&&Rn(r,s.config))return s;throw Ue.create("duplicate-app",{appName:i})}const o=new cf(i);for(const l of ti.values())o.addComponent(l);const a=new tg(n,r,o);return xn.set(i,a),a}function Qn(e=ei){const t=xn.get(e);if(!t&&e===ei)return Ia();if(!t)throw Ue.create("no-app",{appName:e});return t}function ie(e,t,n){var r;let i=(r=Qf[e])!==null&&r!==void 0?r:e;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=t.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${t}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),et.warn(a.join(" "));return}Fe(new Te(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ng="firebase-heartbeat-database",rg=1,Pt="firebase-heartbeat-store";let Nr=null;function Sa(){return Nr||(Nr=If(ng,rg,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(Pt)}}}).catch(e=>{throw Ue.create("idb-open",{originalErrorMessage:e.message})})),Nr}async function ig(e){var t;try{return(await Sa()).transaction(Pt).objectStore(Pt).get(Ea(e))}catch(n){if(n instanceof ue)et.warn(n.message);else{const r=Ue.create("idb-get",{originalErrorMessage:(t=n)===null||t===void 0?void 0:t.message});et.warn(r.message)}}}async function Gs(e,t){var n;try{const i=(await Sa()).transaction(Pt,"readwrite");return await i.objectStore(Pt).put(t,Ea(e)),i.done}catch(r){if(r instanceof ue)et.warn(r.message);else{const i=Ue.create("idb-set",{originalErrorMessage:(n=r)===null||n===void 0?void 0:n.message});et.warn(i.message)}}}function Ea(e){return`${e.name}!${e.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sg=1024,og=30*24*60*60*1e3;class ag{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new cg(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=qs();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=og}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const t=qs(),{heartbeatsToSend:n,unsentEntries:r}=lg(this._heartbeatsCache.heartbeats),i=An(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function qs(){return new Date().toISOString().substring(0,10)}function lg(e,t=sg){const n=[];let r=e.slice();for(const i of e){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Ks(n)>t){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Ks(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class cg{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Vd()?Wd().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await ig(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Gs(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Gs(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function Ks(e){return An(JSON.stringify({version:2,heartbeats:e})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ug(e){Fe(new Te("platform-logger",t=>new Tf(t),"PRIVATE")),Fe(new Te("heartbeat",t=>new ag(t),"PRIVATE")),ie(Zr,Ws,e),ie(Zr,Ws,"esm2017"),ie("fire-js","")}ug("");var hg="firebase",dg="9.14.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ie(hg,dg,"app");function Ni(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n}function Ta(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const fg=Ta,ka=new Vt("auth","Firebase",Ta());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xs=new Oi("@firebase/auth");function _n(e,...t){Xs.logLevel<=O.ERROR&&Xs.error(`Auth (${bt}): ${e}`,...t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ke(e,...t){throw Di(e,...t)}function fe(e,...t){return Di(e,...t)}function gg(e,t,n){const r=Object.assign(Object.assign({},fg()),{[t]:n});return new Vt("auth","Firebase",r).create(t,{appName:e.name})}function Di(e,...t){if(typeof e!="string"){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return ka.create(e,...t)}function w(e,t,...n){if(!e)throw Di(t,...n)}function _e(e){const t="INTERNAL ASSERTION FAILED: "+e;throw _n(t),new Error(t)}function Ce(e,t){e||_e(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Js=new Map;function ve(e){Ce(e instanceof Function,"Expected a class definition");let t=Js.get(e);return t?(Ce(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,Js.set(e,t),t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pg(e,t){const n=Gt(e,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Rn(s,t??{}))return i;ke(i,"already-initialized")}return n.initialize({options:t})}function mg(e,t){const n=t?.persistence||[],r=(Array.isArray(n)?n:[n]).map(ve);t?.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,t?.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ni(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.href)||""}function yg(){return Ys()==="http:"||Ys()==="https:"}function Ys(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bg(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(yg()||Fd()||"connection"in navigator)?navigator.onLine:!0}function _g(){if(typeof navigator>"u")return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qt{constructor(t,n){this.shortDelay=t,this.longDelay=n,Ce(n>t,"Short delay should be less than long delay!"),this.isMobile=jd()||Hd()}get(){return bg()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Li(e,t){Ce(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ca{static initialize(t,n,r){this.fetchImpl=t,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;_e("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;_e("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;_e("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vg={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wg=new qt(3e4,6e4);function Ig(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function Zn(e,t,n,r,i={}){return Aa(e,i,async()=>{let s={},o={};r&&(t==="GET"?o=r:s={body:JSON.stringify(r)});const a=Wt(Object.assign({key:e.config.apiKey},o)).slice(1),l=await e._getAdditionalHeaders();return l["Content-Type"]="application/json",e.languageCode&&(l["X-Firebase-Locale"]=e.languageCode),Ca.fetch()(Ra(e,e.config.apiHost,n,a),Object.assign({method:t,headers:l,referrerPolicy:"no-referrer"},s))})}async function Aa(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},vg),t);try{const i=new Eg(e),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw un(e,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw un(e,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw un(e,"email-already-in-use",o);if(l==="USER_DISABLED")throw un(e,"user-disabled",o);const u=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw gg(e,u,c);ke(e,u)}}catch(i){if(i instanceof ue)throw i;ke(e,"network-request-failed")}}async function Sg(e,t,n,r,i={}){const s=await Zn(e,t,n,r,i);return"mfaPendingCredential"in s&&ke(e,"multi-factor-auth-required",{_serverResponse:s}),s}function Ra(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?Li(e.config,i):`${e.config.apiScheme}://${i}`}class Eg{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(fe(this.auth,"network-request-failed")),wg.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function un(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=fe(e,t,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Tg(e,t){return Zn(e,"POST","/v1/accounts:delete",t)}async function kg(e,t){return Zn(e,"POST","/v1/accounts:lookup",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xt(e){if(!!e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function Cg(e,t=!1){const n=pe(e),r=await n.getIdToken(t),i=Mi(r);w(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s?.sign_in_provider;return{claims:i,token:r,authTime:xt(Dr(i.auth_time)),issuedAtTime:xt(Dr(i.iat)),expirationTime:xt(Dr(i.exp)),signInProvider:o||null,signInSecondFactor:s?.sign_in_second_factor||null}}function Dr(e){return Number(e)*1e3}function Mi(e){var t;const[n,r,i]=e.split(".");if(n===void 0||r===void 0||i===void 0)return _n("JWT malformed, contained fewer than 3 sections"),null;try{const s=ma(r);return s?JSON.parse(s):(_n("Failed to decode base64 JWT payload"),null)}catch(s){return _n("Caught error parsing JWT payload as JSON",(t=s)===null||t===void 0?void 0:t.toString()),null}}function Ag(e){const t=Mi(e);return w(t,"internal-error"),w(typeof t.exp<"u","internal-error"),w(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Nt(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof ue&&Rg(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}function Rg({code:e}){return e==="auth/user-disabled"||e==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xg{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var n;if(t){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){var t;try{await this.user.getIdToken(!0)}catch(n){((t=n)===null||t===void 0?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xa{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=xt(this.lastLoginAt),this.creationTime=xt(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function On(e){var t;const n=e.auth,r=await e.getIdToken(),i=await Nt(e,kg(n,{idToken:r}));w(i?.users.length,n,"internal-error");const s=i.users[0];e._notifyReloadListener(s);const o=!((t=s.providerUserInfo)===null||t===void 0)&&t.length?Ng(s.providerUserInfo):[],a=Pg(e.providerData,o),l=e.isAnonymous,c=!(e.email&&s.passwordHash)&&!a?.length,u=l?c:!1,d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new xa(s.createdAt,s.lastLoginAt),isAnonymous:u};Object.assign(e,d)}async function Og(e){const t=pe(e);await On(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function Pg(e,t){return[...e.filter(r=>!t.some(i=>i.providerId===r.providerId)),...t]}function Ng(e){return e.map(t=>{var{providerId:n}=t,r=Ni(t,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Dg(e,t){const n=await Aa(e,{},async()=>{const r=Wt({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:s}=e.config,o=Ra(e,i,"/v1/token",`key=${s}`),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Ca.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dt{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){w(t.idToken,"internal-error"),w(typeof t.idToken<"u","internal-error"),w(typeof t.refreshToken<"u","internal-error");const n="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):Ag(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}async getToken(t,n=!1){return w(!this.accessToken||this.refreshToken,t,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await Dg(t,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(t,n,r){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(t,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Dt;return r&&(w(typeof r=="string","internal-error",{appName:t}),o.refreshToken=r),i&&(w(typeof i=="string","internal-error",{appName:t}),o.accessToken=i),s&&(w(typeof s=="number","internal-error",{appName:t}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new Dt,this.toJSON())}_performRefresh(){return _e("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pe(e,t){w(typeof e=="string"||typeof e>"u","internal-error",{appName:t})}class Ye{constructor(t){var{uid:n,auth:r,stsTokenManager:i}=t,s=Ni(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new xg(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new xa(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(t){const n=await Nt(this,this.stsTokenManager.getToken(this.auth,t));return w(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return Cg(this,t)}reload(){return Og(this)}_assign(t){this!==t&&(w(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>Object.assign({},n)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){return new Ye(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(t){w(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let r=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),r=!0),n&&await On(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const t=await this.getIdToken();return await Nt(this,Tg(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){var r,i,s,o,a,l,c,u;const d=(r=n.displayName)!==null&&r!==void 0?r:void 0,h=(i=n.email)!==null&&i!==void 0?i:void 0,f=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,g=(o=n.photoURL)!==null&&o!==void 0?o:void 0,b=(a=n.tenantId)!==null&&a!==void 0?a:void 0,v=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,y=(c=n.createdAt)!==null&&c!==void 0?c:void 0,S=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:A,emailVerified:T,isAnonymous:M,providerData:x,stsTokenManager:D}=n;w(A&&D,t,"internal-error");const N=Dt.fromJSON(this.name,D);w(typeof A=="string",t,"internal-error"),Pe(d,t.name),Pe(h,t.name),w(typeof T=="boolean",t,"internal-error"),w(typeof M=="boolean",t,"internal-error"),Pe(f,t.name),Pe(g,t.name),Pe(b,t.name),Pe(v,t.name),Pe(y,t.name),Pe(S,t.name);const E=new Ye({uid:A,auth:t,email:h,emailVerified:T,displayName:d,isAnonymous:M,photoURL:g,phoneNumber:f,tenantId:b,stsTokenManager:N,createdAt:y,lastLoginAt:S});return x&&Array.isArray(x)&&(E.providerData=x.map(k=>Object.assign({},k))),v&&(E._redirectEventId=v),E}static async _fromIdTokenResponse(t,n,r=!1){const i=new Dt;i.updateFromServerResponse(n);const s=new Ye({uid:n.localId,auth:t,stsTokenManager:i,isAnonymous:r});return await On(s),s}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oa{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}Oa.type="NONE";const Qs=Oa;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vn(e,t,n){return`firebase:${e}:${t}:${n}`}class ct{constructor(t,n,r){this.persistence=t,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=vn(this.userKey,i.apiKey,s),this.fullPersistenceKey=vn("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?Ye._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,r="authUser"){if(!n.length)return new ct(ve(Qs),t,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||ve(Qs);const o=vn(r,t.config.apiKey,t.name);let a=null;for(const c of n)try{const u=await c._get(o);if(u){const d=Ye._fromJSON(t,u);c!==s&&(a=d),s=c;break}}catch{}const l=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new ct(s,t,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new ct(s,t,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zs(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(Da(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(Pa(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Ma(t))return"Blackberry";if($a(t))return"Webos";if($i(t))return"Safari";if((t.includes("chrome/")||Na(t))&&!t.includes("edge/"))return"Chrome";if(La(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=e.match(n);if(r?.length===2)return r[1]}return"Other"}function Pa(e=Q()){return/firefox\//i.test(e)}function $i(e=Q()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function Na(e=Q()){return/crios\//i.test(e)}function Da(e=Q()){return/iemobile/i.test(e)}function La(e=Q()){return/android/i.test(e)}function Ma(e=Q()){return/blackberry/i.test(e)}function $a(e=Q()){return/webos/i.test(e)}function er(e=Q()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function Lg(e=Q()){var t;return er(e)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function Mg(){return zd()&&document.documentMode===10}function Ba(e=Q()){return er(e)||La(e)||$a(e)||Ma(e)||/windows phone/i.test(e)||Da(e)}function $g(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ua(e,t=[]){let n;switch(e){case"Browser":n=Zs(Q());break;case"Worker":n=`${Zs(Q())}-${e}`;break;default:n=e}const r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${bt}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bg{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,n){const r=s=>new Promise((o,a)=>{try{const l=t(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(t){var n;if(this.auth.currentUser===t)return;const r=[];try{for(const i of this.queue)await i(t),i.onAbort&&r.push(i.onAbort)}catch(i){r.reverse();for(const s of r)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:(n=i)===null||n===void 0?void 0:n.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ug{constructor(t,n,r){this.app=t,this.heartbeatServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new eo(this),this.idTokenSubscription=new eo(this),this.beforeStateQueue=new Bg(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=ka,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=ve(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await ct.create(this,t),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUser(t){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i?._redirectEventId,l=await this.tryRedirectSignIn(t);(!o||o===a)&&l?.user&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return w(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){var n;try{await On(t)}catch(r){if(((n=r)===null||n===void 0?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=_g()}async _delete(){this._deleted=!0}async updateCurrentUser(t){const n=t?pe(t):null;return n&&w(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&w(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(t){return this.queue(async()=>{await this.assertedPersistence.setPersistence(ve(t))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new Vt("auth","Firebase",t())}onAuthStateChanged(t,n,r){return this.registerStateListener(this.authStateSubscription,t,n,r)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,r){return this.registerStateListener(this.idTokenSubscription,t,n,r)}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,n){const r=await this.getOrInitRedirectPersistenceManager(n);return t===null?r.removeCurrentUser():r.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&ve(t)||this._popupRedirectResolver;w(n,this,"argument-error"),this.redirectPersistenceManager=await ct.create(this,[ve(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===t?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return w(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?t.addObserver(n,r,i):t.addObserver(n)}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return w(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=Ua(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());return r&&(n["X-Firebase-Client"]=r),n}}function Bi(e){return pe(e)}class eo{constructor(t){this.auth=t,this.observer=null,this.addObserver=nf(n=>this.observer=n)}get next(){return w(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function jg(e,t,n){const r=Bi(e);w(r._canInitEmulator,r,"emulator-config-failed"),w(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!!n?.disableWarnings,s=ja(t),{host:o,port:a}=Fg(t),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||Hg()}function ja(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function Fg(e){const t=ja(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:to(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:to(o)}}}function to(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function Hg(){function e(){const t=document.createElement("p"),n=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",e):e())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fa{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return _e("not implemented")}_getIdTokenResponse(t){return _e("not implemented")}_linkToIdToken(t,n){return _e("not implemented")}_getReauthenticationResolver(t){return _e("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ut(e,t){return Sg(e,"POST","/v1/accounts:signInWithIdp",Ig(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zg="http://localhost";class tt extends Fa{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const n=new tt(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):ke("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:r,signInMethod:i}=n,s=Ni(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new tt(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(t){const n=this.buildRequest();return ut(t,n)}_linkToIdToken(t,n){const r=this.buildRequest();return r.idToken=n,ut(t,r)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,ut(t,n)}buildRequest(){const t={requestUri:zg,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=Wt(n)}return t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ha{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kt extends Ha{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ne extends Kt{constructor(){super("facebook.com")}static credential(t){return tt._fromParams({providerId:Ne.PROVIDER_ID,signInMethod:Ne.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Ne.credentialFromTaggedObject(t)}static credentialFromError(t){return Ne.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Ne.credential(t.oauthAccessToken)}catch{return null}}}Ne.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ne.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class De extends Kt{constructor(){super("google.com"),this.addScope("profile")}static credential(t,n){return tt._fromParams({providerId:De.PROVIDER_ID,signInMethod:De.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return De.credentialFromTaggedObject(t)}static credentialFromError(t){return De.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:r}=t;if(!n&&!r)return null;try{return De.credential(n,r)}catch{return null}}}De.GOOGLE_SIGN_IN_METHOD="google.com";De.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Le extends Kt{constructor(){super("github.com")}static credential(t){return tt._fromParams({providerId:Le.PROVIDER_ID,signInMethod:Le.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Le.credentialFromTaggedObject(t)}static credentialFromError(t){return Le.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Le.credential(t.oauthAccessToken)}catch{return null}}}Le.GITHUB_SIGN_IN_METHOD="github.com";Le.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Me extends Kt{constructor(){super("twitter.com")}static credential(t,n){return tt._fromParams({providerId:Me.PROVIDER_ID,signInMethod:Me.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return Me.credentialFromTaggedObject(t)}static credentialFromError(t){return Me.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=t;if(!n||!r)return null;try{return Me.credential(n,r)}catch{return null}}}Me.TWITTER_SIGN_IN_METHOD="twitter.com";Me.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,r,i=!1){const s=await Ye._fromIdTokenResponse(t,r,i),o=no(r);return new gt({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(t,n,r){await t._updateTokensIfNecessary(r,!0);const i=no(r);return new gt({user:t,providerId:i,_tokenResponse:r,operationType:n})}}function no(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pn extends ue{constructor(t,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Pn.prototype),this.customData={appName:t.name,tenantId:(s=t.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(t,n,r,i){return new Pn(t,n,r,i)}}function za(e,t,n,r){return(t==="reauthenticate"?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Pn._fromErrorAndOperation(e,s,t,r):s})}async function Vg(e,t,n=!1){const r=await Nt(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return gt._forOperation(e,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wg(e,t,n=!1){var r;const{auth:i}=e,s="reauthenticate";try{const o=await Nt(e,za(i,s,t,e),n);w(o.idToken,i,"internal-error");const a=Mi(o.idToken);w(a,i,"internal-error");const{sub:l}=a;return w(e.uid===l,i,"user-mismatch"),gt._forOperation(e,s,o)}catch(o){throw((r=o)===null||r===void 0?void 0:r.code)==="auth/user-not-found"&&ke(i,"user-mismatch"),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gg(e,t,n=!1){const r="signIn",i=await za(e,r,t),s=await gt._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(s.user),s}function qg(e,t,n,r){return pe(e).onIdTokenChanged(t,n,r)}function Kg(e,t,n){return pe(e).beforeAuthStateChanged(t,n)}const Nn="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Va{constructor(t,n){this.storageRetriever=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Nn,"1"),this.storage.removeItem(Nn),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xg(){const e=Q();return $i(e)||er(e)}const Jg=1e3,Yg=10;class Wa extends Va{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Xg()&&$g(),this.fallbackToPolling=Ba(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&t(n,i,r)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=t.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(t.newValue!==o)t.newValue!==null?this.storage.setItem(r,t.newValue):this.storage.removeItem(r);else if(this.localCache[r]===t.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);Mg()&&s!==t.newValue&&t.newValue!==t.oldValue?setTimeout(i,Yg):i()}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:r}),!0)})},Jg)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}Wa.type="LOCAL";const Qg=Wa;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ga extends Va{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,n){}_removeListener(t,n){}}Ga.type="SESSION";const qa=Ga;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zg(e){return Promise.all(e.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tr{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(i=>i.isListeningto(t));if(n)return n;const r=new tr(t);return this.receivers.push(r),r}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!o?.size)return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async c=>c(n.origin,s)),l=await Zg(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}tr.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ui(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(Math.random()*10);return e+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ep{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const c=Ui("",20);i.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(d){const h=d;if(h.data.eventId===c)switch(h.data.status){case"ack":clearTimeout(u),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(h.data.response);break;default:clearTimeout(u),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:t,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ge(){return window}function tp(e){ge().location.href=e}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ka(){return typeof ge().WorkerGlobalScope<"u"&&typeof ge().importScripts=="function"}async function np(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function rp(){var e;return((e=navigator?.serviceWorker)===null||e===void 0?void 0:e.controller)||null}function ip(){return Ka()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xa="firebaseLocalStorageDb",sp=1,Dn="firebaseLocalStorage",Ja="fbase_key";class Xt{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function nr(e,t){return e.transaction([Dn],t?"readwrite":"readonly").objectStore(Dn)}function op(){const e=indexedDB.deleteDatabase(Xa);return new Xt(e).toPromise()}function ri(){const e=indexedDB.open(Xa,sp);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const r=e.result;try{r.createObjectStore(Dn,{keyPath:Ja})}catch(i){n(i)}}),e.addEventListener("success",async()=>{const r=e.result;r.objectStoreNames.contains(Dn)?t(r):(r.close(),await op(),t(await ri()))})})}async function ro(e,t,n){const r=nr(e,!0).put({[Ja]:t,value:n});return new Xt(r).toPromise()}async function ap(e,t){const n=nr(e,!1).get(t),r=await new Xt(n).toPromise();return r===void 0?null:r.value}function io(e,t){const n=nr(e,!0).delete(t);return new Xt(n).toPromise()}const lp=800,cp=3;class Ya{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ri(),this.db)}async _withRetries(t){let n=0;for(;;)try{const r=await this._openDb();return await t(r)}catch(r){if(n++>cp)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Ka()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=tr._getInstance(ip()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){var t,n;if(this.activeServiceWorker=await np(),!this.activeServiceWorker)return;this.sender=new ep(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);!r||((t=r[0])===null||t===void 0?void 0:t.fulfilled)&&((n=r[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||rp()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await ri();return await ro(t,Nn,"1"),await io(t,Nn),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>ro(r,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(r=>ap(r,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>io(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(i=>{const s=nr(i,!1).getAll();return new Xt(s).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of t)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),lp)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Ya.type="LOCAL";const up=Ya;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hp(){var e,t;return(t=(e=document.getElementsByTagName("head"))===null||e===void 0?void 0:e[0])!==null&&t!==void 0?t:document}function dp(e){return new Promise((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=i=>{const s=fe("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",hp().appendChild(r)})}function fp(e){return`__${e}${Math.floor(Math.random()*1e6)}`}new qt(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gp(e,t){return t?ve(t):(w(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ji extends Fa{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return ut(t,this._buildIdpRequest())}_linkToIdToken(t,n){return ut(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return ut(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function pp(e){return Gg(e.auth,new ji(e),e.bypassAuthState)}function mp(e){const{auth:t,user:n}=e;return w(n,t,"internal-error"),Wg(n,new ji(e),e.bypassAuthState)}async function yp(e){const{auth:t,user:n}=e;return w(n,t,"internal-error"),Vg(n,new ji(e),e.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qa{constructor(t,n,r,i,s=!1){this.auth=t,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=t;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return pp;case"linkViaPopup":case"linkViaRedirect":return yp;case"reauthViaPopup":case"reauthViaRedirect":return mp;default:ke(this.auth,"internal-error")}}resolve(t){Ce(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){Ce(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bp=new qt(2e3,1e4);class ot extends Qa{constructor(t,n,r,i,s){super(t,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,ot.currentPopupAction&&ot.currentPopupAction.cancel(),ot.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return w(t,this.auth,"internal-error"),t}async onExecution(){Ce(this.filter.length===1,"Popup operations only handle one event");const t=Ui();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(fe(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(fe(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ot.currentPopupAction=null}pollUserCancellation(){const t=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(fe(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(t,bp.get())};t()}}ot.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _p="pendingRedirect",wn=new Map;class vp extends Qa{constructor(t,n,r=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let t=wn.get(this.auth._key());if(!t){try{const r=await wp(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(r)}catch(n){t=()=>Promise.reject(n)}wn.set(this.auth._key(),t)}return this.bypassAuthState||wn.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function wp(e,t){const n=Ep(t),r=Sp(e);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function Ip(e,t){wn.set(e._key(),t)}function Sp(e){return ve(e._redirectPersistence)}function Ep(e){return vn(_p,e.config.apiKey,e.name)}async function Tp(e,t,n=!1){const r=Bi(e),i=gp(r,t),o=await new vp(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,t)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kp=10*60*1e3;class Cp{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(t,r)&&(n=!0,this.sendToConsumer(t,r),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!Ap(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){var r;if(t.error&&!Za(t)){const i=((r=t.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(fe(this.auth,i))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const r=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&r}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=kp&&this.cachedEventUids.clear(),this.cachedEventUids.has(so(t))}saveEventToCache(t){this.cachedEventUids.add(so(t)),this.lastProcessedEventTime=Date.now()}}function so(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(t=>t).join("-")}function Za({type:e,error:t}){return e==="unknown"&&t?.code==="auth/no-auth-event"}function Ap(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Za(e);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Rp(e,t={}){return Zn(e,"GET","/v1/projects",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xp=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Op=/^https?/;async function Pp(e){if(e.config.emulator)return;const{authorizedDomains:t}=await Rp(e);for(const n of t)try{if(Np(n))return}catch{}ke(e,"unauthorized-domain")}function Np(e){const t=ni(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const o=new URL(e);return o.hostname===""&&r===""?n==="chrome-extension:"&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!Op.test(n))return!1;if(xp.test(e))return r===e;const i=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dp=new qt(3e4,6e4);function oo(){const e=ge().___jsl;if(e?.H){for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}}function Lp(e){return new Promise((t,n)=>{var r,i,s;function o(){oo(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{oo(),n(fe(e,"network-request-failed"))},timeout:Dp.get()})}if(!((i=(r=ge().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)t(gapi.iframes.getContext());else if(!((s=ge().gapi)===null||s===void 0)&&s.load)o();else{const a=fp("iframefcb");return ge()[a]=()=>{gapi.load?o():n(fe(e,"network-request-failed"))},dp(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(t=>{throw In=null,t})}let In=null;function Mp(e){return In=In||Lp(e),In}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $p=new qt(5e3,15e3),Bp="__/auth/iframe",Up="emulator/auth/iframe",jp={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Fp=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Hp(e){const t=e.config;w(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?Li(t,Up):`https://${e.config.authDomain}/${Bp}`,r={apiKey:t.apiKey,appName:e.name,v:bt},i=Fp.get(e.config.apiHost);i&&(r.eid=i);const s=e._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Wt(r).slice(1)}`}async function zp(e){const t=await Mp(e),n=ge().gapi;return w(n,e,"internal-error"),t.open({where:document.body,url:Hp(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:jp,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=fe(e,"network-request-failed"),a=ge().setTimeout(()=>{s(o)},$p.get());function l(){ge().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vp={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Wp=500,Gp=600,qp="_blank",Kp="http://localhost";class ao{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Xp(e,t,n,r=Wp,i=Gp){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},Vp),{width:r.toString(),height:i.toString(),top:s,left:o}),c=Q().toLowerCase();n&&(a=Na(c)?qp:n),Pa(c)&&(t=t||Kp,l.scrollbars="yes");const u=Object.entries(l).reduce((h,[f,g])=>`${h}${f}=${g},`,"");if(Lg(c)&&a!=="_self")return Jp(t||"",a),new ao(null);const d=window.open(t||"",a,u);w(d,e,"popup-blocked");try{d.focus()}catch{}return new ao(d)}function Jp(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yp="__/auth/handler",Qp="emulator/auth/handler";function lo(e,t,n,r,i,s){w(e.config.authDomain,e,"auth-domain-config-required"),w(e.config.apiKey,e,"invalid-api-key");const o={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:bt,eventId:i};if(t instanceof Ha){t.setDefaultLanguage(e.languageCode),o.providerId=t.providerId||"",tf(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[l,c]of Object.entries(s||{}))o[l]=c}if(t instanceof Kt){const l=t.getScopes().filter(c=>c!=="");l.length>0&&(o.scopes=l.join(","))}e.tenantId&&(o.tid=e.tenantId);const a=o;for(const l of Object.keys(a))a[l]===void 0&&delete a[l];return`${Zp(e)}?${Wt(a).slice(1)}`}function Zp({config:e}){return e.emulator?Li(e,Qp):`https://${e.authDomain}/${Yp}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lr="webStorageSupport";class em{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=qa,this._completeRedirectFn=Tp,this._overrideRedirectResult=Ip}async _openPopup(t,n,r,i){var s;Ce((s=this.eventManagers[t._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=lo(t,n,r,ni(),i);return Xp(t,o,Ui())}async _openRedirect(t,n,r,i){return await this._originValidation(t),tp(lo(t,n,r,ni(),i)),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Ce(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(t);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(t){const n=await zp(t),r=new Cp(t);return n.register("authEvent",i=>(w(i?.authEvent,t,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:r},this.iframes[t._key()]=n,r}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send(Lr,{type:Lr},i=>{var s;const o=(s=i?.[0])===null||s===void 0?void 0:s[Lr];o!==void 0&&n(!!o),ke(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Pp(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return Ba()||$i()||er()}}const tm=em;var co="@firebase/auth",uo="0.20.11";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nm{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(r=>{var i;t(((i=r)===null||i===void 0?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);!n||(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){w(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rm(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function im(e){Fe(new Te("auth",(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),{apiKey:s,authDomain:o}=r.options;return((a,l)=>{w(s&&!s.includes(":"),"invalid-api-key",{appName:a.name}),w(!o?.includes(":"),"argument-error",{appName:a.name});const c={apiKey:s,authDomain:o,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ua(e)},u=new Ug(a,l,c);return mg(u,n),u})(r,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,r)=>{t.getProvider("auth-internal").initialize()})),Fe(new Te("auth-internal",t=>{const n=Bi(t.getProvider("auth").getImmediate());return(r=>new nm(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),ie(co,uo,rm(e)),ie(co,uo,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sm=5*60,om=ba("authIdTokenMaxAge")||sm;let ho=null;const am=e=>async t=>{const n=t&&await t.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>om)return;const i=n?.token;ho!==i&&(ho=i,await fetch(e,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function lm(e=Qn()){const t=Gt(e,"auth");if(t.isInitialized())return t.getImmediate();const n=pg(e,{popupRedirectResolver:tm,persistence:[up,Qg,qa]}),r=ba("authTokenSyncURL");if(r){const s=am(r);Kg(n,s,()=>s(n.currentUser)),qg(n,o=>s(o))}const i=ya("auth");return i&&jg(n,`http://${i}`),n}im("Browser");var cm=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},m,Fi=Fi||{},I=cm||self;function Ln(){}function rr(e){var t=typeof e;return t=t!="object"?t:e?Array.isArray(e)?"array":t:"null",t=="array"||t=="object"&&typeof e.length=="number"}function Jt(e){var t=typeof e;return t=="object"&&e!=null||t=="function"}function um(e){return Object.prototype.hasOwnProperty.call(e,Mr)&&e[Mr]||(e[Mr]=++hm)}var Mr="closure_uid_"+(1e9*Math.random()>>>0),hm=0;function dm(e,t,n){return e.call.apply(e.bind,arguments)}function fm(e,t,n){if(!e)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),e.apply(t,i)}}return function(){return e.apply(t,arguments)}}function J(e,t,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?J=dm:J=fm,J.apply(null,arguments)}function hn(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),e.apply(this,r)}}function G(e,t){function n(){}n.prototype=t.prototype,e.X=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.Wb=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return t.prototype[i].apply(r,o)}}function He(){this.s=this.s,this.o=this.o}var gm=0;He.prototype.s=!1;He.prototype.na=function(){!this.s&&(this.s=!0,this.M(),gm!=0)&&um(this)};He.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const el=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if(typeof e=="string")return typeof t!="string"||t.length!=1?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1};function Hi(e){const t=e.length;if(0<t){const n=Array(t);for(let r=0;r<t;r++)n[r]=e[r];return n}return[]}function fo(e,t){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(rr(r)){const i=e.length||0,s=r.length||0;e.length=i+s;for(let o=0;o<s;o++)e[i+o]=r[o]}else e.push(r)}}function Y(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}Y.prototype.h=function(){this.defaultPrevented=!0};var pm=function(){if(!I.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{I.addEventListener("test",Ln,t),I.removeEventListener("test",Ln,t)}catch{}return e}();function Mn(e){return/^[\s\xa0]*$/.test(e)}var go=String.prototype.trim?function(e){return e.trim()}:function(e){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(e)[1]};function $r(e,t){return e<t?-1:e>t?1:0}function ir(){var e=I.navigator;return e&&(e=e.userAgent)?e:""}function he(e){return ir().indexOf(e)!=-1}function zi(e){return zi[" "](e),e}zi[" "]=Ln;function mm(e){var t=_m;return Object.prototype.hasOwnProperty.call(t,9)?t[9]:t[9]=e(9)}var ym=he("Opera"),Lt=he("Trident")||he("MSIE"),tl=he("Edge"),ii=tl||Lt,nl=he("Gecko")&&!(ir().toLowerCase().indexOf("webkit")!=-1&&!he("Edge"))&&!(he("Trident")||he("MSIE"))&&!he("Edge"),bm=ir().toLowerCase().indexOf("webkit")!=-1&&!he("Edge");function rl(){var e=I.document;return e?e.documentMode:void 0}var si;e:{var Br="",Ur=function(){var e=ir();if(nl)return/rv:([^\);]+)(\)|;)/.exec(e);if(tl)return/Edge\/([\d\.]+)/.exec(e);if(Lt)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e);if(bm)return/WebKit\/(\S+)/.exec(e);if(ym)return/(?:Version)[ \/]?(\S+)/.exec(e)}();if(Ur&&(Br=Ur?Ur[1]:""),Lt){var jr=rl();if(jr!=null&&jr>parseFloat(Br)){si=String(jr);break e}}si=Br}var _m={};function vm(){return mm(function(){let e=0;const t=go(String(si)).split("."),n=go("9").split("."),r=Math.max(t.length,n.length);for(let o=0;e==0&&o<r;o++){var i=t[o]||"",s=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],i[0].length==0&&s[0].length==0)break;e=$r(i[1].length==0?0:parseInt(i[1],10),s[1].length==0?0:parseInt(s[1],10))||$r(i[2].length==0,s[2].length==0)||$r(i[2],s[2]),i=i[3],s=s[3]}while(e==0)}return 0<=e})}I.document&&Lt&&rl();function Mt(e,t){if(Y.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,r=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(nl){e:{try{zi(t.nodeName);var i=!0;break e}catch{}i=!1}i||(t=null)}}else n=="mouseover"?t=e.fromElement:n=="mouseout"&&(t=e.toElement);this.relatedTarget=t,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=e.clientX!==void 0?e.clientX:e.pageX,this.clientY=e.clientY!==void 0?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType=typeof e.pointerType=="string"?e.pointerType:wm[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&Mt.X.h.call(this)}}G(Mt,Y);var wm={2:"touch",3:"pen",4:"mouse"};Mt.prototype.h=function(){Mt.X.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var Yt="closure_listenable_"+(1e6*Math.random()|0),Im=0;function Sm(e,t,n,r,i){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!r,this.ha=i,this.key=++Im,this.ba=this.ea=!1}function sr(e){e.ba=!0,e.listener=null,e.proxy=null,e.src=null,e.ha=null}function Vi(e,t,n){for(const r in e)t.call(n,e[r],r,e)}function il(e){const t={};for(const n in e)t[n]=e[n];return t}const po="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function sl(e,t){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)e[n]=r[n];for(let s=0;s<po.length;s++)n=po[s],Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}}function or(e){this.src=e,this.g={},this.h=0}or.prototype.add=function(e,t,n,r,i){var s=e.toString();e=this.g[s],e||(e=this.g[s]=[],this.h++);var o=ai(e,t,r,i);return-1<o?(t=e[o],n||(t.ea=!1)):(t=new Sm(t,this.src,s,!!r,i),t.ea=n,e.push(t)),t};function oi(e,t){var n=t.type;if(n in e.g){var r=e.g[n],i=el(r,t),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(sr(t),e.g[n].length==0&&(delete e.g[n],e.h--))}}function ai(e,t,n,r){for(var i=0;i<e.length;++i){var s=e[i];if(!s.ba&&s.listener==t&&s.capture==!!n&&s.ha==r)return i}return-1}var Wi="closure_lm_"+(1e6*Math.random()|0),Fr={};function ol(e,t,n,r,i){if(r&&r.once)return ll(e,t,n,r,i);if(Array.isArray(t)){for(var s=0;s<t.length;s++)ol(e,t[s],n,r,i);return null}return n=Ki(n),e&&e[Yt]?e.N(t,n,Jt(r)?!!r.capture:!!r,i):al(e,t,n,!1,r,i)}function al(e,t,n,r,i,s){if(!t)throw Error("Invalid event type");var o=Jt(i)?!!i.capture:!!i,a=qi(e);if(a||(e[Wi]=a=new or(e)),n=a.add(t,n,r,o,s),n.proxy)return n;if(r=Em(),n.proxy=r,r.src=e,r.listener=n,e.addEventListener)pm||(i=o),i===void 0&&(i=!1),e.addEventListener(t.toString(),r,i);else if(e.attachEvent)e.attachEvent(ul(t.toString()),r);else if(e.addListener&&e.removeListener)e.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function Em(){function e(n){return t.call(e.src,e.listener,n)}const t=Tm;return e}function ll(e,t,n,r,i){if(Array.isArray(t)){for(var s=0;s<t.length;s++)ll(e,t[s],n,r,i);return null}return n=Ki(n),e&&e[Yt]?e.O(t,n,Jt(r)?!!r.capture:!!r,i):al(e,t,n,!0,r,i)}function cl(e,t,n,r,i){if(Array.isArray(t))for(var s=0;s<t.length;s++)cl(e,t[s],n,r,i);else r=Jt(r)?!!r.capture:!!r,n=Ki(n),e&&e[Yt]?(e=e.i,t=String(t).toString(),t in e.g&&(s=e.g[t],n=ai(s,n,r,i),-1<n&&(sr(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete e.g[t],e.h--)))):e&&(e=qi(e))&&(t=e.g[t.toString()],e=-1,t&&(e=ai(t,n,r,i)),(n=-1<e?t[e]:null)&&Gi(n))}function Gi(e){if(typeof e!="number"&&e&&!e.ba){var t=e.src;if(t&&t[Yt])oi(t.i,e);else{var n=e.type,r=e.proxy;t.removeEventListener?t.removeEventListener(n,r,e.capture):t.detachEvent?t.detachEvent(ul(n),r):t.addListener&&t.removeListener&&t.removeListener(r),(n=qi(t))?(oi(n,e),n.h==0&&(n.src=null,t[Wi]=null)):sr(e)}}}function ul(e){return e in Fr?Fr[e]:Fr[e]="on"+e}function Tm(e,t){if(e.ba)e=!0;else{t=new Mt(t,this);var n=e.listener,r=e.ha||e.src;e.ea&&Gi(e),e=n.call(r,t)}return e}function qi(e){return e=e[Wi],e instanceof or?e:null}var Hr="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ki(e){return typeof e=="function"?e:(e[Hr]||(e[Hr]=function(t){return e.handleEvent(t)}),e[Hr])}function H(){He.call(this),this.i=new or(this),this.P=this,this.I=null}G(H,He);H.prototype[Yt]=!0;H.prototype.removeEventListener=function(e,t,n,r){cl(this,e,t,n,r)};function W(e,t){var n,r=e.I;if(r)for(n=[];r;r=r.I)n.push(r);if(e=e.P,r=t.type||t,typeof t=="string")t=new Y(t,e);else if(t instanceof Y)t.target=t.target||e;else{var i=t;t=new Y(r,e),sl(t,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=t.g=n[s];i=dn(o,r,!0,t)&&i}if(o=t.g=e,i=dn(o,r,!0,t)&&i,i=dn(o,r,!1,t)&&i,n)for(s=0;s<n.length;s++)o=t.g=n[s],i=dn(o,r,!1,t)&&i}H.prototype.M=function(){if(H.X.M.call(this),this.i){var e=this.i,t;for(t in e.g){for(var n=e.g[t],r=0;r<n.length;r++)sr(n[r]);delete e.g[t],e.h--}}this.I=null};H.prototype.N=function(e,t,n,r){return this.i.add(String(e),t,!1,n,r)};H.prototype.O=function(e,t,n,r){return this.i.add(String(e),t,!0,n,r)};function dn(e,t,n,r){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var i=!0,s=0;s<t.length;++s){var o=t[s];if(o&&!o.ba&&o.capture==n){var a=o.listener,l=o.ha||o.src;o.ea&&oi(e.i,o),i=a.call(l,r)!==!1&&i}}return i&&!r.defaultPrevented}var Xi=I.JSON.stringify;function km(){var e=fl;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class Cm{constructor(){this.h=this.g=null}add(t,n){const r=hl.get();r.set(t,n),this.h?this.h.next=r:this.g=r,this.h=r}}var hl=new class{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}(()=>new Am,e=>e.reset());class Am{constructor(){this.next=this.g=this.h=null}set(t,n){this.h=t,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function Rm(e){I.setTimeout(()=>{throw e},0)}function dl(e,t){li||xm(),ci||(li(),ci=!0),fl.add(e,t)}var li;function xm(){var e=I.Promise.resolve(void 0);li=function(){e.then(Om)}}var ci=!1,fl=new Cm;function Om(){for(var e;e=km();){try{e.h.call(e.g)}catch(n){Rm(n)}var t=hl;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}ci=!1}function ar(e,t){H.call(this),this.h=e||1,this.g=t||I,this.j=J(this.lb,this),this.l=Date.now()}G(ar,H);m=ar.prototype;m.ca=!1;m.R=null;m.lb=function(){if(this.ca){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-e):(this.R&&(this.g.clearTimeout(this.R),this.R=null),W(this,"tick"),this.ca&&(Ji(this),this.start()))}};m.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Ji(e){e.ca=!1,e.R&&(e.g.clearTimeout(e.R),e.R=null)}m.M=function(){ar.X.M.call(this),Ji(this),delete this.g};function Yi(e,t,n){if(typeof e=="function")n&&(e=J(e,n));else if(e&&typeof e.handleEvent=="function")e=J(e.handleEvent,e);else throw Error("Invalid listener argument");return 2147483647<Number(t)?-1:I.setTimeout(e,t||0)}function gl(e){e.g=Yi(()=>{e.g=null,e.i&&(e.i=!1,gl(e))},e.j);const t=e.h;e.h=null,e.m.apply(null,t)}class Pm extends He{constructor(t,n){super(),this.m=t,this.j=n,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:gl(this)}M(){super.M(),this.g&&(I.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function $t(e){He.call(this),this.h=e,this.g={}}G($t,He);var mo=[];function pl(e,t,n,r){Array.isArray(n)||(n&&(mo[0]=n.toString()),n=mo);for(var i=0;i<n.length;i++){var s=ol(t,n[i],r||e.handleEvent,!1,e.h||e);if(!s)break;e.g[s.key]=s}}function ml(e){Vi(e.g,function(t,n){this.g.hasOwnProperty(n)&&Gi(t)},e),e.g={}}$t.prototype.M=function(){$t.X.M.call(this),ml(this)};$t.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function lr(){this.g=!0}lr.prototype.Aa=function(){this.g=!1};function Nm(e,t,n,r,i,s){e.info(function(){if(e.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var c=a[l].split("=");if(1<c.length){var u=c[0];c=c[1];var d=u.split("_");o=2<=d.length&&d[1]=="type"?o+(u+"="+c+"&"):o+(u+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+t+`
`+n+`
`+o})}function Dm(e,t,n,r,i,s,o){e.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+t+`
`+n+`
`+s+" "+o})}function at(e,t,n,r){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+Mm(e,n)+(r?" "+r:"")})}function Lm(e,t){e.info(function(){return"TIMEOUT: "+t})}lr.prototype.info=function(){};function Mm(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n){for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var r=n[e];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return Xi(n)}catch{return t}}var _t={},yo=null;function Qi(){return yo=yo||new H}_t.Pa="serverreachability";function yl(e){Y.call(this,_t.Pa,e)}G(yl,Y);function Bt(e){const t=Qi();W(t,new yl(t))}_t.STAT_EVENT="statevent";function bl(e,t){Y.call(this,_t.STAT_EVENT,e),this.stat=t}G(bl,Y);function ee(e){const t=Qi();W(t,new bl(t,e))}_t.Qa="timingevent";function _l(e,t){Y.call(this,_t.Qa,e),this.size=t}G(_l,Y);function Qt(e,t){if(typeof e!="function")throw Error("Fn must not be null and must be a function");return I.setTimeout(function(){e()},t)}var Zi={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},$m={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function es(){}es.prototype.h=null;function bo(e){return e.h||(e.h=e.i())}function Bm(){}var Zt={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function ts(){Y.call(this,"d")}G(ts,Y);function ns(){Y.call(this,"c")}G(ns,Y);var ui;function cr(){}G(cr,es);cr.prototype.g=function(){return new XMLHttpRequest};cr.prototype.i=function(){return{}};ui=new cr;function en(e,t,n,r){this.l=e,this.j=t,this.m=n,this.U=r||1,this.S=new $t(this),this.O=Um,e=ii?125:void 0,this.T=new ar(e),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new vl}function vl(){this.i=null,this.g="",this.h=!1}var Um=45e3,hi={},$n={};m=en.prototype;m.setTimeout=function(e){this.O=e};function di(e,t,n){e.K=1,e.v=hr(Ae(t)),e.s=n,e.P=!0,wl(e,null)}function wl(e,t){e.F=Date.now(),tn(e),e.A=Ae(e.v);var n=e.A,r=e.U;Array.isArray(r)||(r=[String(r)]),Rl(n.i,"t",r),e.C=0,n=e.l.H,e.h=new vl,e.g=Jl(e.l,n?t:null,!e.s),0<e.N&&(e.L=new Pm(J(e.La,e,e.g),e.N)),pl(e.S,e.g,"readystatechange",e.ib),t=e.H?il(e.H):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.da(e.A,e.u,e.s,t)):(e.u="GET",e.g.da(e.A,e.u,null,t)),Bt(),Nm(e.j,e.u,e.A,e.m,e.U,e.s)}m.ib=function(e){e=e.target;const t=this.L;t&&we(e)==3?t.l():this.La(e)};m.La=function(e){try{if(e==this.g)e:{const u=we(this.g);var t=this.g.Ea();const d=this.g.aa();if(!(3>u)&&(u!=3||ii||this.g&&(this.h.h||this.g.fa()||Io(this.g)))){this.I||u!=4||t==7||(t==8||0>=d?Bt(3):Bt(2)),ur(this);var n=this.g.aa();this.Y=n;t:if(Il(this)){var r=Io(this.g);e="";var i=r.length,s=we(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Ge(this),Ot(this);var o="";break t}this.h.i=new I.TextDecoder}for(t=0;t<i;t++)this.h.h=!0,e+=this.h.i.decode(r[t],{stream:s&&t==i-1});r.splice(0,i),this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,Dm(this.j,this.u,this.A,this.m,this.U,u,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Mn(a)){var c=a;break t}}c=null}if(n=c)at(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,fi(this,n);else{this.i=!1,this.o=3,ee(12),Ge(this),Ot(this);break e}}this.P?(Sl(this,u,o),ii&&this.i&&u==3&&(pl(this.S,this.T,"tick",this.hb),this.T.start())):(at(this.j,this.m,o,null),fi(this,o)),u==4&&Ge(this),this.i&&!this.I&&(u==4?Gl(this.l,this):(this.i=!1,tn(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,ee(12)):(this.o=0,ee(13)),Ge(this),Ot(this)}}}catch{}finally{}};function Il(e){return e.g?e.u=="GET"&&e.K!=2&&e.l.Da:!1}function Sl(e,t,n){let r=!0,i;for(;!e.I&&e.C<n.length;)if(i=jm(e,n),i==$n){t==4&&(e.o=4,ee(14),r=!1),at(e.j,e.m,null,"[Incomplete Response]");break}else if(i==hi){e.o=4,ee(15),at(e.j,e.m,n,"[Invalid Chunk]"),r=!1;break}else at(e.j,e.m,i,null),fi(e,i);Il(e)&&i!=$n&&i!=hi&&(e.h.g="",e.C=0),t!=4||n.length!=0||e.h.h||(e.o=1,ee(16),r=!1),e.i=e.i&&r,r?0<n.length&&!e.$&&(e.$=!0,t=e.l,t.g==e&&t.$&&!t.K&&(t.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),cs(t),t.K=!0,ee(11))):(at(e.j,e.m,n,"[Invalid Chunked Response]"),Ge(e),Ot(e))}m.hb=function(){if(this.g){var e=we(this.g),t=this.g.fa();this.C<t.length&&(ur(this),Sl(this,e,t),this.i&&e!=4&&tn(this))}};function jm(e,t){var n=e.C,r=t.indexOf(`
`,n);return r==-1?$n:(n=Number(t.substring(n,r)),isNaN(n)?hi:(r+=1,r+n>t.length?$n:(t=t.substr(r,n),e.C=r+n,t)))}m.cancel=function(){this.I=!0,Ge(this)};function tn(e){e.V=Date.now()+e.O,El(e,e.O)}function El(e,t){if(e.B!=null)throw Error("WatchDog timer not null");e.B=Qt(J(e.gb,e),t)}function ur(e){e.B&&(I.clearTimeout(e.B),e.B=null)}m.gb=function(){this.B=null;const e=Date.now();0<=e-this.V?(Lm(this.j,this.A),this.K!=2&&(Bt(),ee(17)),Ge(this),this.o=2,Ot(this)):El(this,this.V-e)};function Ot(e){e.l.G==0||e.I||Gl(e.l,e)}function Ge(e){ur(e);var t=e.L;t&&typeof t.na=="function"&&t.na(),e.L=null,Ji(e.T),ml(e.S),e.g&&(t=e.g,e.g=null,t.abort(),t.na())}function fi(e,t){try{var n=e.l;if(n.G!=0&&(n.g==e||gi(n.h,e))){if(!e.J&&gi(n.h,e)&&n.G==3){try{var r=n.Fa.g.parse(t)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<e.F)jn(n),pr(n);else break e;ls(n),ee(18)}}else n.Ba=i[1],0<n.Ba-n.T&&37500>i[2]&&n.L&&n.A==0&&!n.v&&(n.v=Qt(J(n.cb,n),6e3));if(1>=Pl(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else qe(n,11)}else if((e.J||n.g==e)&&jn(n),!Mn(t))for(i=n.Fa.g.parse(t),t=0;t<i.length;t++){let c=i[t];if(n.T=c[0],c=c[1],n.G==2)if(c[0]=="c"){n.I=c[1],n.ka=c[2];const u=c[3];u!=null&&(n.ma=u,n.j.info("VER="+n.ma));const d=c[4];d!=null&&(n.Ca=d,n.j.info("SVER="+n.Ca));const h=c[5];h!=null&&typeof h=="number"&&0<h&&(r=1.5*h,n.J=r,n.j.info("backChannelRequestTimeoutMs_="+r)),r=n;const f=e.g;if(f){const g=f.g?f.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(g){var s=r.h;s.g||g.indexOf("spdy")==-1&&g.indexOf("quic")==-1&&g.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(rs(s,s.h),s.h=null))}if(r.D){const b=f.g?f.g.getResponseHeader("X-HTTP-Session-Id"):null;b&&(r.za=b,L(r.F,r.D,b))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-e.F,n.j.info("Handshake RTT: "+n.P+"ms")),r=n;var o=e;if(r.sa=Xl(r,r.H?r.ka:null,r.V),o.J){Nl(r.h,o);var a=o,l=r.J;l&&a.setTimeout(l),a.B&&(ur(a),tn(a)),r.g=o}else Vl(r);0<n.i.length&&mr(n)}else c[0]!="stop"&&c[0]!="close"||qe(n,7);else n.G==3&&(c[0]=="stop"||c[0]=="close"?c[0]=="stop"?qe(n,7):as(n):c[0]!="noop"&&n.l&&n.l.wa(c),n.A=0)}}Bt(4)}catch{}}function Fm(e){if(e.W&&typeof e.W=="function")return e.W();if(typeof Map<"u"&&e instanceof Map||typeof Set<"u"&&e instanceof Set)return Array.from(e.values());if(typeof e=="string")return e.split("");if(rr(e)){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t}t=[],n=0;for(r in e)t[n++]=e[r];return t}function Hm(e){if(e.oa&&typeof e.oa=="function")return e.oa();if(!e.W||typeof e.W!="function"){if(typeof Map<"u"&&e instanceof Map)return Array.from(e.keys());if(!(typeof Set<"u"&&e instanceof Set)){if(rr(e)||typeof e=="string"){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}t=[],n=0;for(const r in e)t[n++]=r;return t}}}function Tl(e,t){if(e.forEach&&typeof e.forEach=="function")e.forEach(t,void 0);else if(rr(e)||typeof e=="string")Array.prototype.forEach.call(e,t,void 0);else for(var n=Hm(e),r=Fm(e),i=r.length,s=0;s<i;s++)t.call(void 0,r[s],n&&n[s],e)}var kl=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function zm(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var r=e[n].indexOf("="),i=null;if(0<=r){var s=e[n].substring(0,r);i=e[n].substring(r+1)}else s=e[n];t(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Qe(e,t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof Qe){this.h=t!==void 0?t:e.h,Bn(this,e.j),this.s=e.s,this.g=e.g,Un(this,e.m),this.l=e.l,t=e.i;var n=new Ut;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),_o(this,n),this.o=e.o}else e&&(n=String(e).match(kl))?(this.h=!!t,Bn(this,n[1]||"",!0),this.s=At(n[2]||""),this.g=At(n[3]||"",!0),Un(this,n[4]),this.l=At(n[5]||"",!0),_o(this,n[6]||"",!0),this.o=At(n[7]||"")):(this.h=!!t,this.i=new Ut(null,this.h))}Qe.prototype.toString=function(){var e=[],t=this.j;t&&e.push(Rt(t,vo,!0),":");var n=this.g;return(n||t=="file")&&(e.push("//"),(t=this.s)&&e.push(Rt(t,vo,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&e.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&e.push("/"),e.push(Rt(n,n.charAt(0)=="/"?Gm:Wm,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.o)&&e.push("#",Rt(n,Km)),e.join("")};function Ae(e){return new Qe(e)}function Bn(e,t,n){e.j=n?At(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function Un(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function _o(e,t,n){t instanceof Ut?(e.i=t,Xm(e.i,e.h)):(n||(t=Rt(t,qm)),e.i=new Ut(t,e.h))}function L(e,t,n){e.i.set(t,n)}function hr(e){return L(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function At(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function Rt(e,t,n){return typeof e=="string"?(e=encodeURI(e).replace(t,Vm),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function Vm(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(e&15).toString(16)}var vo=/[#\/\?@]/g,Wm=/[#\?:]/g,Gm=/[#\?]/g,qm=/[#\?@]/g,Km=/#/g;function Ut(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function ze(e){e.g||(e.g=new Map,e.h=0,e.i&&zm(e.i,function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)}))}m=Ut.prototype;m.add=function(e,t){ze(this),this.i=null,e=vt(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this};function Cl(e,t){ze(e),t=vt(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function Al(e,t){return ze(e),t=vt(e,t),e.g.has(t)}m.forEach=function(e,t){ze(this),this.g.forEach(function(n,r){n.forEach(function(i){e.call(t,i,r,this)},this)},this)};m.oa=function(){ze(this);const e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let r=0;r<t.length;r++){const i=e[r];for(let s=0;s<i.length;s++)n.push(t[r])}return n};m.W=function(e){ze(this);let t=[];if(typeof e=="string")Al(this,e)&&(t=t.concat(this.g.get(vt(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t};m.set=function(e,t){return ze(this),this.i=null,e=vt(this,e),Al(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this};m.get=function(e,t){return e?(e=this.W(e),0<e.length?String(e[0]):t):t};function Rl(e,t,n){Cl(e,t),0<n.length&&(e.i=null,e.g.set(vt(e,t),Hi(n)),e.h+=n.length)}m.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var r=t[n];const s=encodeURIComponent(String(r)),o=this.W(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),e.push(i)}}return this.i=e.join("&")};function vt(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function Xm(e,t){t&&!e.j&&(ze(e),e.i=null,e.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(Cl(this,r),Rl(this,i,n))},e)),e.j=t}var Jm=class{constructor(e,t){this.h=e,this.g=t}};function xl(e){this.l=e||Ym,I.PerformanceNavigationTiming?(e=I.performance.getEntriesByType("navigation"),e=0<e.length&&(e[0].nextHopProtocol=="hq"||e[0].nextHopProtocol=="h2")):e=!!(I.g&&I.g.Ga&&I.g.Ga()&&I.g.Ga().$b),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Ym=10;function Ol(e){return e.h?!0:e.g?e.g.size>=e.j:!1}function Pl(e){return e.h?1:e.g?e.g.size:0}function gi(e,t){return e.h?e.h==t:e.g?e.g.has(t):!1}function rs(e,t){e.g?e.g.add(t):e.h=t}function Nl(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}xl.prototype.cancel=function(){if(this.i=Dl(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const e of this.g.values())e.cancel();this.g.clear()}};function Dl(e){if(e.h!=null)return e.i.concat(e.h.D);if(e.g!=null&&e.g.size!==0){let t=e.i;for(const n of e.g.values())t=t.concat(n.D);return t}return Hi(e.i)}function is(){}is.prototype.stringify=function(e){return I.JSON.stringify(e,void 0)};is.prototype.parse=function(e){return I.JSON.parse(e,void 0)};function Qm(){this.g=new is}function Zm(e,t,n){const r=n||"";try{Tl(e,function(i,s){let o=i;Jt(i)&&(o=Xi(i)),t.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw t.push(r+"type="+encodeURIComponent("_badmap")),i}}function e0(e,t){const n=new lr;if(I.Image){const r=new Image;r.onload=hn(fn,n,r,"TestLoadImage: loaded",!0,t),r.onerror=hn(fn,n,r,"TestLoadImage: error",!1,t),r.onabort=hn(fn,n,r,"TestLoadImage: abort",!1,t),r.ontimeout=hn(fn,n,r,"TestLoadImage: timeout",!1,t),I.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=e}else t(!1)}function fn(e,t,n,r,i){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,i(r)}catch{}}function dr(e){this.l=e.ac||null,this.j=e.jb||!1}G(dr,es);dr.prototype.g=function(){return new fr(this.l,this.j)};dr.prototype.i=function(e){return function(){return e}}({});function fr(e,t){H.call(this),this.D=e,this.u=t,this.m=void 0,this.readyState=ss,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}G(fr,H);var ss=0;m=fr.prototype;m.open=function(e,t){if(this.readyState!=ss)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,jt(this)};m.send=function(e){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.D||I).fetch(new Request(this.B,t)).then(this.Wa.bind(this),this.ga.bind(this))};m.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,nn(this)),this.readyState=ss};m.Wa=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,jt(this)),this.g&&(this.readyState=3,jt(this),this.g)))if(this.responseType==="arraybuffer")e.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof I.ReadableStream<"u"&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Ll(this)}else e.text().then(this.Va.bind(this),this.ga.bind(this))};function Ll(e){e.j.read().then(e.Ta.bind(e)).catch(e.ga.bind(e))}m.Ta=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?nn(this):jt(this),this.readyState==3&&Ll(this)}};m.Va=function(e){this.g&&(this.response=this.responseText=e,nn(this))};m.Ua=function(e){this.g&&(this.response=e,nn(this))};m.ga=function(){this.g&&nn(this)};function nn(e){e.readyState=4,e.l=null,e.j=null,e.A=null,jt(e)}m.setRequestHeader=function(e,t){this.v.append(e,t)};m.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""};m.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join(`\r
`)};function jt(e){e.onreadystatechange&&e.onreadystatechange.call(e)}Object.defineProperty(fr.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(e){this.m=e?"include":"same-origin"}});var t0=I.JSON.parse;function U(e){H.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Ml,this.K=this.L=!1}G(U,H);var Ml="",n0=/^https?$/i,r0=["POST","PUT"];m=U.prototype;m.Ka=function(e){this.L=e};m.da=function(e,t,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+e);t=t?t.toUpperCase():"GET",this.H=e,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():ui.g(),this.C=this.u?bo(this.u):bo(ui),this.g.onreadystatechange=J(this.Ha,this);try{this.F=!0,this.g.open(t,String(e),!0),this.F=!1}catch(s){wo(this,s);return}if(e=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=I.FormData&&e instanceof I.FormData,!(0<=el(r0,t))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Ul(this),0<this.B&&((this.K=i0(this.g))?(this.g.timeout=this.B,this.g.ontimeout=J(this.qa,this)):this.A=Yi(this.qa,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(s){wo(this,s)}};function i0(e){return Lt&&vm()&&typeof e.timeout=="number"&&e.ontimeout!==void 0}m.qa=function(){typeof Fi<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,W(this,"timeout"),this.abort(8))};function wo(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,$l(e),gr(e)}function $l(e){e.D||(e.D=!0,W(e,"complete"),W(e,"error"))}m.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,W(this,"complete"),W(this,"abort"),gr(this))};m.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),gr(this,!0)),U.X.M.call(this)};m.Ha=function(){this.s||(this.F||this.v||this.l?Bl(this):this.fb())};m.fb=function(){Bl(this)};function Bl(e){if(e.h&&typeof Fi<"u"&&(!e.C[1]||we(e)!=4||e.aa()!=2)){if(e.v&&we(e)==4)Yi(e.Ha,0,e);else if(W(e,"readystatechange"),we(e)==4){e.h=!1;try{const a=e.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break e;default:t=!1}var n;if(!(n=t)){var r;if(r=a===0){var i=String(e.H).match(kl)[1]||null;if(!i&&I.self&&I.self.location){var s=I.self.location.protocol;i=s.substr(0,s.length-1)}r=!n0.test(i?i.toLowerCase():"")}n=r}if(n)W(e,"complete"),W(e,"success");else{e.m=6;try{var o=2<we(e)?e.g.statusText:""}catch{o=""}e.j=o+" ["+e.aa()+"]",$l(e)}}finally{gr(e)}}}}function gr(e,t){if(e.g){Ul(e);const n=e.g,r=e.C[0]?Ln:null;e.g=null,e.C=null,t||W(e,"ready");try{n.onreadystatechange=r}catch{}}}function Ul(e){e.g&&e.K&&(e.g.ontimeout=null),e.A&&(I.clearTimeout(e.A),e.A=null)}function we(e){return e.g?e.g.readyState:0}m.aa=function(){try{return 2<we(this)?this.g.status:-1}catch{return-1}};m.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};m.Sa=function(e){if(this.g){var t=this.g.responseText;return e&&t.indexOf(e)==0&&(t=t.substring(e.length)),t0(t)}};function Io(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.J){case Ml:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch{return null}}m.Ea=function(){return this.m};m.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function jl(e){let t="";return Vi(e,function(n,r){t+=r,t+=":",t+=n,t+=`\r
`}),t}function os(e,t,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=jl(n),typeof e=="string"?n!=null&&encodeURIComponent(String(n)):L(e,t,n))}function Tt(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function Fl(e){this.Ca=0,this.i=[],this.j=new lr,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=Tt("failFast",!1,e),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=Tt("baseRetryDelayMs",5e3,e),this.bb=Tt("retryDelaySeedMs",1e4,e),this.$a=Tt("forwardChannelMaxRetries",2,e),this.ta=Tt("forwardChannelRequestTimeoutMs",2e4,e),this.ra=e&&e.xmlHttpFactory||void 0,this.Da=e&&e.Zb||!1,this.J=void 0,this.H=e&&e.supportsCrossDomainXhr||!1,this.I="",this.h=new xl(e&&e.concurrentRequestLimit),this.Fa=new Qm,this.O=e&&e.fastHandshake||!1,this.N=e&&e.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=e&&e.Xb||!1,e&&e.Aa&&this.j.Aa(),e&&e.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&e&&e.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}m=Fl.prototype;m.ma=8;m.G=1;function as(e){if(Hl(e),e.G==3){var t=e.U++,n=Ae(e.F);L(n,"SID",e.I),L(n,"RID",t),L(n,"TYPE","terminate"),rn(e,n),t=new en(e,e.j,t,void 0),t.K=2,t.v=hr(Ae(n)),n=!1,I.navigator&&I.navigator.sendBeacon&&(n=I.navigator.sendBeacon(t.v.toString(),"")),!n&&I.Image&&(new Image().src=t.v,n=!0),n||(t.g=Jl(t.l,null),t.g.da(t.v)),t.F=Date.now(),tn(t)}Kl(e)}function pr(e){e.g&&(cs(e),e.g.cancel(),e.g=null)}function Hl(e){pr(e),e.u&&(I.clearTimeout(e.u),e.u=null),jn(e),e.h.cancel(),e.m&&(typeof e.m=="number"&&I.clearTimeout(e.m),e.m=null)}function mr(e){Ol(e.h)||e.m||(e.m=!0,dl(e.Ja,e),e.C=0)}function s0(e,t){return Pl(e.h)>=e.h.j-(e.m?1:0)?!1:e.m?(e.i=t.D.concat(e.i),!0):e.G==1||e.G==2||e.C>=(e.Za?0:e.$a)?!1:(e.m=Qt(J(e.Ja,e,t),ql(e,e.C)),e.C++,!0)}m.Ja=function(e){if(this.m)if(this.m=null,this.G==1){if(!e){this.U=Math.floor(1e5*Math.random()),e=this.U++;const i=new en(this,this.j,e,void 0);let s=this.s;if(this.S&&(s?(s=il(s),sl(s,this.S)):s=this.S),this.o!==null||this.N||(i.H=s,s=null),this.O)e:{for(var t=0,n=0;n<this.i.length;n++){t:{var r=this.i[n];if("__data__"in r.g&&(r=r.g.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(t+=r,4096<t){t=n;break e}if(t===4096||n===this.i.length-1){t=n+1;break e}}t=1e3}else t=1e3;t=zl(this,i,t),n=Ae(this.F),L(n,"RID",e),L(n,"CVER",22),this.D&&L(n,"X-HTTP-Session-Id",this.D),rn(this,n),s&&(this.N?t="headers="+encodeURIComponent(String(jl(s)))+"&"+t:this.o&&os(n,this.o,s)),rs(this.h,i),this.Ya&&L(n,"TYPE","init"),this.O?(L(n,"$req",t),L(n,"SID","null"),i.Z=!0,di(i,n,null)):di(i,n,t),this.G=2}}else this.G==3&&(e?So(this,e):this.i.length==0||Ol(this.h)||So(this))};function So(e,t){var n;t?n=t.m:n=e.U++;const r=Ae(e.F);L(r,"SID",e.I),L(r,"RID",n),L(r,"AID",e.T),rn(e,r),e.o&&e.s&&os(r,e.o,e.s),n=new en(e,e.j,n,e.C+1),e.o===null&&(n.H=e.s),t&&(e.i=t.D.concat(e.i)),t=zl(e,n,1e3),n.setTimeout(Math.round(.5*e.ta)+Math.round(.5*e.ta*Math.random())),rs(e.h,n),di(n,r,t)}function rn(e,t){e.ia&&Vi(e.ia,function(n,r){L(t,r,n)}),e.l&&Tl({},function(n,r){L(t,r,n)})}function zl(e,t,n){n=Math.min(e.i.length,n);var r=e.l?J(e.l.Ra,e.l,e):null;e:{var i=e.i;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].h,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let l=0;l<n;l++){let c=i[l].h;const u=i[l].g;if(c-=s,0>c)s=Math.max(0,i[l].h-100),a=!1;else try{Zm(u,o,"req"+c+"_")}catch{r&&r(u)}}if(a){r=o.join("&");break e}}}return e=e.i.splice(0,n),t.D=e,r}function Vl(e){e.g||e.u||(e.Z=1,dl(e.Ia,e),e.A=0)}function ls(e){return e.g||e.u||3<=e.A?!1:(e.Z++,e.u=Qt(J(e.Ia,e),ql(e,e.A)),e.A++,!0)}m.Ia=function(){if(this.u=null,Wl(this),this.$&&!(this.K||this.g==null||0>=this.P)){var e=2*this.P;this.j.info("BP detection timer enabled: "+e),this.B=Qt(J(this.eb,this),e)}};m.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,ee(10),pr(this),Wl(this))};function cs(e){e.B!=null&&(I.clearTimeout(e.B),e.B=null)}function Wl(e){e.g=new en(e,e.j,"rpc",e.Z),e.o===null&&(e.g.H=e.s),e.g.N=0;var t=Ae(e.sa);L(t,"RID","rpc"),L(t,"SID",e.I),L(t,"CI",e.L?"0":"1"),L(t,"AID",e.T),L(t,"TYPE","xmlhttp"),rn(e,t),e.o&&e.s&&os(t,e.o,e.s),e.J&&e.g.setTimeout(e.J);var n=e.g;e=e.ka,n.K=1,n.v=hr(Ae(t)),n.s=null,n.P=!0,wl(n,e)}m.cb=function(){this.v!=null&&(this.v=null,pr(this),ls(this),ee(19))};function jn(e){e.v!=null&&(I.clearTimeout(e.v),e.v=null)}function Gl(e,t){var n=null;if(e.g==t){jn(e),cs(e),e.g=null;var r=2}else if(gi(e.h,t))n=t.D,Nl(e.h,t),r=1;else return;if(e.G!=0){if(e.pa=t.Y,t.i)if(r==1){n=t.s?t.s.length:0,t=Date.now()-t.F;var i=e.C;r=Qi(),W(r,new _l(r,n)),mr(e)}else Vl(e);else if(i=t.o,i==3||i==0&&0<e.pa||!(r==1&&s0(e,t)||r==2&&ls(e)))switch(n&&0<n.length&&(t=e.h,t.i=t.i.concat(n)),i){case 1:qe(e,5);break;case 4:qe(e,10);break;case 3:qe(e,6);break;default:qe(e,2)}}}function ql(e,t){let n=e.Xa+Math.floor(Math.random()*e.bb);return e.l||(n*=2),n*t}function qe(e,t){if(e.j.info("Error code "+t),t==2){var n=null;e.l&&(n=null);var r=J(e.kb,e);n||(n=new Qe("//www.google.com/images/cleardot.gif"),I.location&&I.location.protocol=="http"||Bn(n,"https"),hr(n)),e0(n.toString(),r)}else ee(2);e.G=0,e.l&&e.l.va(t),Kl(e),Hl(e)}m.kb=function(e){e?(this.j.info("Successfully pinged google.com"),ee(2)):(this.j.info("Failed to ping google.com"),ee(1))};function Kl(e){if(e.G=0,e.la=[],e.l){const t=Dl(e.h);(t.length!=0||e.i.length!=0)&&(fo(e.la,t),fo(e.la,e.i),e.h.i.length=0,Hi(e.i),e.i.length=0),e.l.ua()}}function Xl(e,t,n){var r=n instanceof Qe?Ae(n):new Qe(n,void 0);if(r.g!="")t&&(r.g=t+"."+r.g),Un(r,r.m);else{var i=I.location;r=i.protocol,t=t?t+"."+i.hostname:i.hostname,i=+i.port;var s=new Qe(null,void 0);r&&Bn(s,r),t&&(s.g=t),i&&Un(s,i),n&&(s.l=n),r=s}return n=e.D,t=e.za,n&&t&&L(r,n,t),L(r,"VER",e.ma),rn(e,r),r}function Jl(e,t,n){if(t&&!e.H)throw Error("Can't create secondary domain capable XhrIo object.");return t=n&&e.Da&&!e.ra?new U(new dr({jb:!0})):new U(e.ra),t.Ka(e.H),t}function Yl(){}m=Yl.prototype;m.xa=function(){};m.wa=function(){};m.va=function(){};m.ua=function(){};m.Ra=function(){};function se(e,t){H.call(this),this.g=new Fl(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.ya&&(e?e["X-WebChannel-Client-Profile"]=t.ya:e={"X-WebChannel-Client-Profile":t.ya}),this.g.S=e,(e=t&&t.Yb)&&!Mn(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!Mn(t)&&(this.g.D=t,e=this.h,e!==null&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new wt(this)}G(se,H);se.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var e=this.g,t=this.l,n=this.h||void 0;ee(0),e.V=t,e.ia=n||{},e.L=e.Y,e.F=Xl(e,null,e.V),mr(e)};se.prototype.close=function(){as(this.g)};se.prototype.u=function(e){var t=this.g;if(typeof e=="string"){var n={};n.__data__=e,e=n}else this.v&&(n={},n.__data__=Xi(e),e=n);t.i.push(new Jm(t.ab++,e)),t.G==3&&mr(t)};se.prototype.M=function(){this.g.l=null,delete this.j,as(this.g),delete this.g,se.X.M.call(this)};function Ql(e){ts.call(this);var t=e.__sm__;if(t){e:{for(const n in t){e=n;break e}e=void 0}(this.i=e)&&(e=this.i,t=t!==null&&e in t?t[e]:void 0),this.data=t}else this.data=e}G(Ql,ts);function Zl(){ns.call(this),this.status=1}G(Zl,ns);function wt(e){this.g=e}G(wt,Yl);wt.prototype.xa=function(){W(this.g,"a")};wt.prototype.wa=function(e){W(this.g,new Ql(e))};wt.prototype.va=function(e){W(this.g,new Zl)};wt.prototype.ua=function(){W(this.g,"b")};se.prototype.send=se.prototype.u;se.prototype.open=se.prototype.m;se.prototype.close=se.prototype.close;Zi.NO_ERROR=0;Zi.TIMEOUT=8;Zi.HTTP_ERROR=6;$m.COMPLETE="complete";Bm.EventType=Zt;Zt.OPEN="a";Zt.CLOSE="b";Zt.ERROR="c";Zt.MESSAGE="d";H.prototype.listen=H.prototype.N;U.prototype.listenOnce=U.prototype.O;U.prototype.getLastError=U.prototype.Oa;U.prototype.getLastErrorCode=U.prototype.Ea;U.prototype.getStatus=U.prototype.aa;U.prototype.getResponseJson=U.prototype.Sa;U.prototype.getResponseText=U.prototype.fa;U.prototype.send=U.prototype.da;U.prototype.setWithCredentials=U.prototype.Ka;const Eo="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}q.UNAUTHENTICATED=new q(null),q.GOOGLE_CREDENTIALS=new q("google-credentials-uid"),q.FIRST_PARTY=new q("first-party-uid"),q.MOCK_USER=new q("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let sn="9.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pt=new Oi("@firebase/firestore");function te(e,...t){if(pt.logLevel<=O.DEBUG){const n=t.map(hs);pt.debug(`Firestore (${sn}): ${e}`,...n)}}function us(e,...t){if(pt.logLevel<=O.ERROR){const n=t.map(hs);pt.error(`Firestore (${sn}): ${e}`,...n)}}function o0(e,...t){if(pt.logLevel<=O.WARN){const n=t.map(hs);pt.warn(`Firestore (${sn}): ${e}`,...n)}}function hs(e){if(typeof e=="string")return e;try{return t=e,JSON.stringify(t)}catch{return e}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ds(e="Unexpected state"){const t=`FIRESTORE (${sn}) INTERNAL ASSERTION FAILED: `+e;throw us(t),new Error(t)}function Fn(e,t){e||ds()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ne={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class re extends ue{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht{constructor(){this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ec{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class a0{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(q.UNAUTHENTICATED))}shutdown(){}}class l0{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,n){this.changeListener=n,t.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class c0{constructor(t){this.t=t,this.currentUser=q.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let s=new ht;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new ht,t.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;t.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{te("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(te("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new ht)}},0),o()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==t?(te("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Fn(typeof r.accessToken=="string"),new ec(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return Fn(t===null||typeof t=="string"),new q(t)}}class u0{constructor(t,n,r,i){this.h=t,this.l=n,this.m=r,this.g=i,this.type="FirstParty",this.user=q.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(Fn(!(typeof this.h!="object"||this.h===null||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const t=this.I();return t&&this.p.set("Authorization",t),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class h0{constructor(t,n,r,i){this.h=t,this.l=n,this.m=r,this.g=i}getToken(){return Promise.resolve(new u0(this.h,this.l,this.m,this.g))}start(t,n){t.enqueueRetryable(()=>n(q.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class d0{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class f0{constructor(t){this.T=t,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(t,n){const r=s=>{s.error!=null&&te("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.A;return this.A=s.token,te("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{t.enqueueRetryable(()=>r(s))};const i=s=>{te("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.T.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.T.getImmediate({optional:!0});s?i(s):te("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?(Fn(typeof n.token=="string"),this.A=n.token,new d0(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function g0(e){const t=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let r=0;r<e;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p0{static R(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/t.length)*t.length;let r="";for(;r.length<20;){const i=g0(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=t.charAt(i[s]%t.length))}return r}}function tc(e){return e.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m0{constructor(t,n,r,i,s,o,a,l){this.databaseId=t,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=l}}class Hn{constructor(t,n){this.projectId=t,this.database=n||"(default)"}static empty(){return new Hn("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof Hn&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var To,C;(C=To||(To={}))[C.OK=0]="OK",C[C.CANCELLED=1]="CANCELLED",C[C.UNKNOWN=2]="UNKNOWN",C[C.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",C[C.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",C[C.NOT_FOUND=5]="NOT_FOUND",C[C.ALREADY_EXISTS=6]="ALREADY_EXISTS",C[C.PERMISSION_DENIED=7]="PERMISSION_DENIED",C[C.UNAUTHENTICATED=16]="UNAUTHENTICATED",C[C.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",C[C.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",C[C.ABORTED=10]="ABORTED",C[C.OUT_OF_RANGE=11]="OUT_OF_RANGE",C[C.UNIMPLEMENTED=12]="UNIMPLEMENTED",C[C.INTERNAL=13]="INTERNAL",C[C.UNAVAILABLE=14]="UNAVAILABLE",C[C.DATA_LOSS=15]="DATA_LOSS";function zr(){return typeof document<"u"?document:null}class y0{constructor(t,n,r=1e3,i=1.5,s=6e4){this.Hs=t,this.timerId=n,this.mo=r,this.yo=i,this.po=s,this.Io=0,this.To=null,this.Eo=Date.now(),this.reset()}reset(){this.Io=0}Ao(){this.Io=this.po}Ro(t){this.cancel();const n=Math.floor(this.Io+this.bo()),r=Math.max(0,Date.now()-this.Eo),i=Math.max(0,n-r);i>0&&te("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Io} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.To=this.Hs.enqueueAfterDelay(this.timerId,i,()=>(this.Eo=Date.now(),t())),this.Io*=this.yo,this.Io<this.mo&&(this.Io=this.mo),this.Io>this.po&&(this.Io=this.po)}Po(){this.To!==null&&(this.To.skipDelay(),this.To=null)}cancel(){this.To!==null&&(this.To.cancel(),this.To=null)}bo(){return(Math.random()-.5)*this.Io}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fs{constructor(t,n,r,i,s){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new ht,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(t,n,r,i,s){const o=Date.now()+r,a=new fs(t,n,o,i,s);return a.start(r),a}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new re(ne.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function b0(e,t){if(us("AsyncQueue",`${t}: ${e}`),tc(e))return new re(ne.UNAVAILABLE,`${t}: ${e}`);throw e}function _0(e,t,n,r){if(t===!0&&r===!0)throw new re(ne.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function v0(e){if(e===void 0)return"undefined";if(e===null)return"null";if(typeof e=="string")return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if(typeof e=="number"||typeof e=="boolean")return""+e;if(typeof e=="object"){if(e instanceof Array)return"an array";{const t=function(n){return n.constructor?n.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return typeof e=="function"?"a function":ds()}function w0(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new re(ne.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=v0(e);throw new re(ne.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ko=new Map;class Co{constructor(t){var n;if(t.host===void 0){if(t.ssl!==void 0)throw new re(ne.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(n=t.ssl)===null||n===void 0||n;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new re(ne.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.useFetchStreams=!!t.useFetchStreams,_0("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling)}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nc{constructor(t,n,r,i){this._authCredentials=t,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Co({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new re(ne.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new re(ne.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Co(t),t.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new a0;switch(n.type){case"gapi":const r=n.client;return new h0(r,n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new re(ne.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const n=ko.get(t);n&&(te("ComponentProvider","Removing Datastore"),ko.delete(t),n.terminate())}(this),Promise.resolve()}}function I0(e,t,n,r={}){var i;const s=(e=w0(e,nc))._getSettings();if(s.host!=="firestore.googleapis.com"&&s.host!==t&&o0("Host has been set in both settings() and useEmulator(), emulator host will be used"),e._setSettings(Object.assign(Object.assign({},s),{host:`${t}:${n}`,ssl:!1})),r.mockUserToken){let o,a;if(typeof r.mockUserToken=="string")o=r.mockUserToken,a=q.MOCK_USER;else{o=_a(r.mockUserToken,(i=e._app)===null||i===void 0?void 0:i.options.projectId);const l=r.mockUserToken.sub||r.mockUserToken.user_id;if(!l)throw new re(ne.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new q(l)}e._authCredentials=new l0(new ec(o,a))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S0{constructor(t,n,r,i){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=q.UNAUTHENTICATED,this.clientId=p0.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{te("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(te("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new re(ne.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new ht;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){const r=b0(n,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}class E0{constructor(){this.Bc=Promise.resolve(),this.Lc=[],this.Uc=!1,this.qc=[],this.Kc=null,this.Gc=!1,this.Qc=!1,this.jc=[],this.xo=new y0(this,"async_queue_retry"),this.Wc=()=>{const n=zr();n&&te("AsyncQueue","Visibility state changed to "+n.visibilityState),this.xo.Po()};const t=zr();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Wc)}get isShuttingDown(){return this.Uc}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.zc(),this.Hc(t)}enterRestrictedMode(t){if(!this.Uc){this.Uc=!0,this.Qc=t||!1;const n=zr();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Wc)}}enqueue(t){if(this.zc(),this.Uc)return new Promise(()=>{});const n=new ht;return this.Hc(()=>this.Uc&&this.Qc?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Lc.push(t),this.Jc()))}async Jc(){if(this.Lc.length!==0){try{await this.Lc[0](),this.Lc.shift(),this.xo.reset()}catch(t){if(!tc(t))throw t;te("AsyncQueue","Operation failed with retryable error: "+t)}this.Lc.length>0&&this.xo.Ro(()=>this.Jc())}}Hc(t){const n=this.Bc.then(()=>(this.Gc=!0,t().catch(r=>{this.Kc=r,this.Gc=!1;const i=function(s){let o=s.message||"";return s.stack&&(o=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),o}(r);throw us("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Gc=!1,r))));return this.Bc=n,n}enqueueAfterDelay(t,n,r){this.zc(),this.jc.indexOf(t)>-1&&(n=0);const i=fs.createAndSchedule(this,t,n,r,s=>this.Yc(s));return this.qc.push(i),i}zc(){this.Kc&&ds()}verifyOperationInProgress(){}async Xc(){let t;do t=this.Bc,await t;while(t!==this.Bc)}Zc(t){for(const n of this.qc)if(n.timerId===t)return!0;return!1}ta(t){return this.Xc().then(()=>{this.qc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.qc)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.Xc()})}ea(t){this.jc.push(t)}Yc(t){const n=this.qc.indexOf(t);this.qc.splice(n,1)}}class T0 extends nc{constructor(t,n,r,i){super(t,n,r,i),this.type="firestore",this._queue=new E0,this._persistenceKey=i?.name||"[DEFAULT]"}_terminate(){return this._firestoreClient||C0(this),this._firestoreClient.terminate()}}function k0(e,t){const n=typeof e=="object"?e:Qn(),r=typeof e=="string"?e:t||"(default)",i=Gt(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=xi("firestore");s&&I0(i,...s)}return i}function C0(e){var t;const n=e._freezeSettings(),r=function(i,s,o,a){return new m0(i,s,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(e._databaseId,((t=e._app)===null||t===void 0?void 0:t.options.appId)||"",e._persistenceKey,n);e._firestoreClient=new S0(e._authCredentials,e._appCheckCredentials,e._queue,r)}(function(e,t=!0){(function(n){sn=n})(bt),Fe(new Te("firestore",(n,{instanceIdentifier:r,options:i})=>{const s=n.getProvider("app").getImmediate(),o=new T0(new c0(n.getProvider("auth-internal")),new f0(n.getProvider("app-check-internal")),function(a,l){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new re(ne.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Hn(a.options.projectId,l)}(s,r),s);return i=Object.assign({useFetchStreams:t},i),o._setSettings(i),o},"PUBLIC").setMultipleInstances(!0)),ie(Eo,"3.7.3",e),ie(Eo,"3.7.3","esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rc="firebasestorage.googleapis.com",A0="storageBucket",R0=2*60*1e3,x0=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class me extends ue{constructor(t,n,r=0){super(Vr(t),`Firebase Storage: ${n} (${Vr(t)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,me.prototype)}get status(){return this.status_}set status(t){this.status_=t}_codeEquals(t){return Vr(t)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(t){this.customData.serverResponse=t,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}function Vr(e){return"storage/"+e}function O0(){const e="An unknown error occurred, please check the error payload for server response.";return new me("unknown",e)}function P0(){return new me("retry-limit-exceeded","Max retry time for operation exceeded, please try again.")}function N0(){return new me("canceled","User canceled the upload/download.")}function D0(e){return new me("invalid-url","Invalid URL '"+e+"'.")}function L0(e){return new me("invalid-default-bucket","Invalid default bucket '"+e+"'.")}function Ao(e){return new me("invalid-argument",e)}function ic(){return new me("app-deleted","The Firebase app was deleted.")}function M0(e){return new me("invalid-root-operation","The operation '"+e+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class le{constructor(t,n){this.bucket=t,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o/"+t(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(t,n){let r;try{r=le.makeFromUrl(t,n)}catch{return new le(t,"")}if(r.path==="")return r;throw L0(t)}static makeFromUrl(t,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(T){T.path.charAt(T.path.length-1)==="/"&&(T.path_=T.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),l={bucket:1,path:3};function c(T){T.path_=decodeURIComponent(T.path)}const u="v[A-Za-z0-9_]+",d=n.replace(/[.]/g,"\\."),h="(/([^?#]*).*)?$",f=new RegExp(`^https?://${d}/${u}/b/${i}/o${h}`,"i"),g={bucket:1,path:3},b=n===rc?"(?:storage.googleapis.com|storage.cloud.google.com)":n,v="([^?#]*)",y=new RegExp(`^https?://${b}/${i}/${v}`,"i"),A=[{regex:a,indices:l,postModify:s},{regex:f,indices:g,postModify:c},{regex:y,indices:{bucket:1,path:2},postModify:c}];for(let T=0;T<A.length;T++){const M=A[T],x=M.regex.exec(t);if(x){const D=x[M.indices.bucket];let N=x[M.indices.path];N||(N=""),r=new le(D,N),M.postModify(r);break}}if(r==null)throw D0(t);return r}}class $0{constructor(t){this.promise_=Promise.reject(t)}getPromise(){return this.promise_}cancel(t=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function B0(e,t,n){let r=1,i=null,s=null,o=!1,a=0;function l(){return a===2}let c=!1;function u(...v){c||(c=!0,t.apply(null,v))}function d(v){i=setTimeout(()=>{i=null,e(f,l())},v)}function h(){s&&clearTimeout(s)}function f(v,...y){if(c){h();return}if(v){h(),u.call(null,v,...y);return}if(l()||o){h(),u.call(null,v,...y);return}r<64&&(r*=2);let A;a===1?(a=2,A=0):A=(r+Math.random())*1e3,d(A)}let g=!1;function b(v){g||(g=!0,h(),!c&&(i!==null?(v||(a=2),clearTimeout(i),d(0)):v||(a=1)))}return d(0),s=setTimeout(()=>{o=!0,b(!0)},n),b}function U0(e){e(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function j0(e){return e!==void 0}function Ro(e,t,n,r){if(r<t)throw Ao(`Invalid value for '${e}'. Expected ${t} or greater.`);if(r>n)throw Ao(`Invalid value for '${e}'. Expected ${n} or less.`)}function F0(e){const t=encodeURIComponent;let n="?";for(const r in e)if(e.hasOwnProperty(r)){const i=t(r)+"="+t(e[r]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var zn;(function(e){e[e.NO_ERROR=0]="NO_ERROR",e[e.NETWORK_ERROR=1]="NETWORK_ERROR",e[e.ABORT=2]="ABORT"})(zn||(zn={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function H0(e,t){const n=e>=500&&e<600,i=[408,429].indexOf(e)!==-1,s=t.indexOf(e)!==-1;return n||i||s}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z0{constructor(t,n,r,i,s,o,a,l,c,u,d,h=!0){this.url_=t,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=c,this.progressCallback_=u,this.connectionFactory_=d,this.retry=h,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((f,g)=>{this.resolve_=f,this.reject_=g,this.start_()})}start_(){const t=(r,i)=>{if(i){r(!1,new gn(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=a=>{const l=a.loaded,c=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,c)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const a=s.getErrorCode()===zn.NO_ERROR,l=s.getStatus();if((!a||H0(l,this.additionalRetryCodes_))&&this.retry){const u=s.getErrorCode()===zn.ABORT;r(!1,new gn(!1,null,u));return}const c=this.successCodes_.indexOf(l)!==-1;r(!0,new gn(c,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());j0(l)?s(l):s()}catch(l){o(l)}else if(a!==null){const l=O0();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(i.canceled){const l=this.appDelete_?ic():N0();o(l)}else{const l=P0();o(l)}};this.canceled_?n(!1,new gn(!1,null,!0)):this.backoffId_=B0(t,n,this.timeout_)}getPromise(){return this.promise_}cancel(t){this.canceled_=!0,this.appDelete_=t||!1,this.backoffId_!==null&&U0(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class gn{constructor(t,n,r){this.wasSuccessCode=t,this.connection=n,this.canceled=!!r}}function V0(e,t){t!==null&&t.length>0&&(e.Authorization="Firebase "+t)}function W0(e,t){e["X-Firebase-Storage-Version"]="webjs/"+(t??"AppManager")}function G0(e,t){t&&(e["X-Firebase-GMPID"]=t)}function q0(e,t){t!==null&&(e["X-Firebase-AppCheck"]=t)}function K0(e,t,n,r,i,s,o=!0){const a=F0(e.urlParams),l=e.url+a,c=Object.assign({},e.headers);return G0(c,t),V0(c,n),W0(c,s),q0(c,r),new z0(l,e.method,c,e.body,e.successCodes,e.additionalRetryCodes,e.handler,e.errorHandler,e.timeout,e.progressCallback,i,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function X0(e){if(e.length===0)return null;const t=e.lastIndexOf("/");return t===-1?"":e.slice(0,t)}function J0(e){const t=e.lastIndexOf("/",e.length-2);return t===-1?e:e.slice(t+1)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vn{constructor(t,n){this._service=t,n instanceof le?this._location=n:this._location=le.makeFromUrl(n,t.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(t,n){return new Vn(t,n)}get root(){const t=new le(this._location.bucket,"");return this._newRef(this._service,t)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return J0(this._location.path)}get storage(){return this._service}get parent(){const t=X0(this._location.path);if(t===null)return null;const n=new le(this._location.bucket,t);return new Vn(this._service,n)}_throwIfRoot(t){if(this._location.path==="")throw M0(t)}}function xo(e,t){const n=t?.[A0];return n==null?null:le.makeFromBucketSpec(n,e)}function Y0(e,t,n,r={}){e.host=`${t}:${n}`,e._protocol="http";const{mockUserToken:i}=r;i&&(e._overrideAuthToken=typeof i=="string"?i:_a(i,e.app.options.projectId))}class Q0{constructor(t,n,r,i,s){this.app=t,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=rc,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=R0,this._maxUploadRetryTime=x0,this._requests=new Set,i!=null?this._bucket=le.makeFromBucketSpec(i,this._host):this._bucket=xo(this._host,this.app.options)}get host(){return this._host}set host(t){this._host=t,this._url!=null?this._bucket=le.makeFromBucketSpec(this._url,t):this._bucket=xo(t,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(t){Ro("time",0,Number.POSITIVE_INFINITY,t),this._maxUploadRetryTime=t}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(t){Ro("time",0,Number.POSITIVE_INFINITY,t),this._maxOperationRetryTime=t}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const t=this._authProvider.getImmediate({optional:!0});if(t){const n=await t.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const t=this._appCheckProvider.getImmediate({optional:!0});return t?(await t.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(t=>t.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(t){return new Vn(this,t)}_makeRequest(t,n,r,i,s=!0){if(this._deleted)return new $0(ic());{const o=K0(t,this._appId,r,i,n,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(t,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(t,n,r,i).getPromise()}}const Oo="@firebase/storage",Po="0.9.14";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sc="storage";function Z0(e=Qn(),t){e=pe(e);const r=Gt(e,sc).getImmediate({identifier:t}),i=xi("storage");return i&&ey(r,...i),r}function ey(e,t,n,r={}){Y0(e,t,n,r)}function ty(e,{instanceIdentifier:t}){const n=e.getProvider("app").getImmediate(),r=e.getProvider("auth-internal"),i=e.getProvider("app-check-internal");return new Q0(n,r,i,t,bt)}function ny(){Fe(new Te(sc,ty,"PUBLIC").setMultipleInstances(!0)),ie(Oo,Po,""),ie(Oo,Po,"esm2017")}ny();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ry="type.googleapis.com/google.protobuf.Int64Value",iy="type.googleapis.com/google.protobuf.UInt64Value";function oc(e,t){const n={};for(const r in e)e.hasOwnProperty(r)&&(n[r]=t(e[r]));return n}function pi(e){if(e==null)return null;if(e instanceof Number&&(e=e.valueOf()),typeof e=="number"&&isFinite(e)||e===!0||e===!1||Object.prototype.toString.call(e)==="[object String]")return e;if(e instanceof Date)return e.toISOString();if(Array.isArray(e))return e.map(t=>pi(t));if(typeof e=="function"||typeof e=="object")return oc(e,t=>pi(t));throw new Error("Data cannot be encoded in JSON: "+e)}function Wn(e){if(e==null)return e;if(e["@type"])switch(e["@type"]){case ry:case iy:{const t=Number(e.value);if(isNaN(t))throw new Error("Data cannot be decoded from JSON: "+e);return t}default:throw new Error("Data cannot be decoded from JSON: "+e)}return Array.isArray(e)?e.map(t=>Wn(t)):typeof e=="function"||typeof e=="object"?oc(e,t=>Wn(t)):e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gs="functions";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const No={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class dt extends ue{constructor(t,n,r){super(`${gs}/${t}`,n||""),this.details=r}}function sy(e){if(e>=200&&e<300)return"ok";switch(e){case 0:return"internal";case 400:return"invalid-argument";case 401:return"unauthenticated";case 403:return"permission-denied";case 404:return"not-found";case 409:return"aborted";case 429:return"resource-exhausted";case 499:return"cancelled";case 500:return"internal";case 501:return"unimplemented";case 503:return"unavailable";case 504:return"deadline-exceeded"}return"unknown"}function oy(e,t){let n=sy(e),r=n,i;try{const s=t&&t.error;if(s){const o=s.status;if(typeof o=="string"){if(!No[o])return new dt("internal","internal");n=No[o],r=o}const a=s.message;typeof a=="string"&&(r=a),i=s.details,i!==void 0&&(i=Wn(i))}}catch{}return n==="ok"?null:new dt(n,r,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ay{constructor(t,n,r){this.auth=null,this.messaging=null,this.appCheck=null,this.auth=t.getImmediate({optional:!0}),this.messaging=n.getImmediate({optional:!0}),this.auth||t.get().then(i=>this.auth=i,()=>{}),this.messaging||n.get().then(i=>this.messaging=i,()=>{}),this.appCheck||r.get().then(i=>this.appCheck=i,()=>{})}async getAuthToken(){if(!!this.auth)try{const t=await this.auth.getToken();return t?.accessToken}catch{return}}async getMessagingToken(){if(!(!this.messaging||!("Notification"in self)||Notification.permission!=="granted"))try{return await this.messaging.getToken()}catch{return}}async getAppCheckToken(){if(this.appCheck){const t=await this.appCheck.getToken();return t.error?null:t.token}return null}async getContext(){const t=await this.getAuthToken(),n=await this.getMessagingToken(),r=await this.getAppCheckToken();return{authToken:t,messagingToken:n,appCheckToken:r}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mi="us-central1";function ly(e){let t=null;return{promise:new Promise((n,r)=>{t=setTimeout(()=>{r(new dt("deadline-exceeded","deadline-exceeded"))},e)}),cancel:()=>{t&&clearTimeout(t)}}}class cy{constructor(t,n,r,i,s=mi,o){this.app=t,this.fetchImpl=o,this.emulatorOrigin=null,this.contextProvider=new ay(n,r,i),this.cancelAllRequests=new Promise(a=>{this.deleteService=()=>Promise.resolve(a())});try{const a=new URL(s);this.customDomain=a.origin,this.region=mi}catch{this.customDomain=null,this.region=s}}_delete(){return this.deleteService()}_url(t){const n=this.app.options.projectId;return this.emulatorOrigin!==null?`${this.emulatorOrigin}/${n}/${this.region}/${t}`:this.customDomain!==null?`${this.customDomain}/${t}`:`https://${this.region}-${n}.cloudfunctions.net/${t}`}}function uy(e,t,n){e.emulatorOrigin=`http://${t}:${n}`}function hy(e,t,n){return r=>fy(e,t,r,n||{})}async function dy(e,t,n,r){n["Content-Type"]="application/json";let i;try{i=await r(e,{method:"POST",body:JSON.stringify(t),headers:n})}catch{return{status:0,json:null}}let s=null;try{s=await i.json()}catch{}return{status:i.status,json:s}}function fy(e,t,n,r){const i=e._url(t);return gy(e,i,n,r)}async function gy(e,t,n,r){n=pi(n);const i={data:n},s={},o=await e.contextProvider.getContext();o.authToken&&(s.Authorization="Bearer "+o.authToken),o.messagingToken&&(s["Firebase-Instance-ID-Token"]=o.messagingToken),o.appCheckToken!==null&&(s["X-Firebase-AppCheck"]=o.appCheckToken);const a=r.timeout||7e4,l=ly(a),c=await Promise.race([dy(t,i,s,e.fetchImpl),l.promise,e.cancelAllRequests]);if(l.cancel(),!c)throw new dt("cancelled","Firebase Functions instance was deleted.");const u=oy(c.status,c.json);if(u)throw u;if(!c.json)throw new dt("internal","Response is not valid JSON object.");let d=c.json.data;if(typeof d>"u"&&(d=c.json.result),typeof d>"u")throw new dt("internal","Response is missing data field.");return{data:Wn(d)}}const Do="@firebase/functions",Lo="0.8.8";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const py="auth-internal",my="app-check-internal",yy="messaging-internal";function by(e,t){const n=(r,{instanceIdentifier:i})=>{const s=r.getProvider("app").getImmediate(),o=r.getProvider(py),a=r.getProvider(yy),l=r.getProvider(my);return new cy(s,o,a,l,i,e)};Fe(new Te(gs,n,"PUBLIC").setMultipleInstances(!0)),ie(Do,Lo,t),ie(Do,Lo,"esm2017")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _y(e=Qn(),t=mi){const r=Gt(pe(e),gs).getImmediate({identifier:t}),i=xi("functions");return i&&vy(r,...i),r}function vy(e,t,n){uy(pe(e),t,n)}function wy(e,t,n){return hy(pe(e),t,n)}by(fetch.bind(self));const yr=Ia({apiKey:"AIzaSyAQbRVky1tCDAOa1v6DB5nEsE1cmlH5oP8",authDomain:"dsnr-app.firebaseapp.com",projectId:"dsnr-app",storageBucket:"dsnr-app.appspot.com",messagingSenderId:"414774640373",appId:"1:414774640373:web:36f620f8017f4b4e9f4fbc",measurementId:"G-00HH77QRP7"});lm(yr);k0(yr);Z0(yr);const Iy=_y(yr),Sy=Ht("<div><pre></pre></div>"),Ey=wy(Iy,"dnstest"),Ty=()=>{const[e,t]=be(),[n]=hc(e,Ey);return[_($d,{handleHostname:t}),(()=>{const r=Sy.cloneNode(!0),i=r.firstChild;return vi(i,()=>JSON.stringify(n(),null,2)),r})()]};Cc(()=>_(ld,{get children(){return _(Ty,{})}}),document.getElementById("root"));
