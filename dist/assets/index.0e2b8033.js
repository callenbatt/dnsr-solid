(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();const $={};function Wl(e){$.context=e}const Vl=(e,t)=>e===t,xi=Symbol("solid-proxy"),Nn={equals:Vl};let ra=ca;const Pe=1,Dn=2,ia={owned:null,cleanups:null,context:null,owner:null},xr={};var F=null;let Je=null,B=null,K=null,ke=null,Oi=0;function Gl(e,t){const n=B,r=F,i=e.length===0,s=i?ia:{owned:null,cleanups:null,context:null,owner:t||r},o=i?e:()=>e(()=>Ce(()=>Pi(s)));F=s,B=null;try{return tt(o,!0)}finally{B=n,F=r}}function Ie(e,t){t=t?Object.assign({},Nn,t):Nn;const n={value:e,observers:null,observerSlots:null,comparator:t.equals||void 0},r=i=>(typeof i=="function"&&(i=i(n.value)),aa(n,i));return[oa.bind(n),r]}function Os(e,t,n){const r=rr(e,t,!0,Pe);wt(r)}function je(e,t,n){const r=rr(e,t,!1,Pe);wt(r)}function nr(e,t,n){ra=Zl;const r=rr(e,t,!1,Pe);r.user=!0,ke?ke.push(r):wt(r)}function W(e,t,n){n=n?Object.assign({},Nn,n):Nn;const r=rr(e,t,!0,0);return r.observers=null,r.observerSlots=null,r.comparator=n.equals||void 0,wt(r),oa.bind(r)}function ql(e,t,n){let r,i,s;arguments.length===2&&typeof t=="object"||arguments.length===1?(r=!0,i=e,s=t||{}):(r=e,i=t,s=n||{});let o=null,a=xr,c=null,l=!1,u="initialValue"in s,d=typeof r=="function"&&W(r);const h=new Set,[f,g]=(s.storage||Ie)(s.initialValue),[b,v]=Ie(void 0),[y,E]=Ie(void 0,{equals:!1}),[A,T]=Ie(u?"ready":"unresolved");if($.context){c=`${$.context.id}${$.context.count++}`;let S;s.ssrLoadFrom==="initial"?a=s.initialValue:$.load&&(S=$.load(c))&&(a=S[0])}function M(S,k,R,j){return o===S&&(o=null,u=!0,(S===a||k===a)&&s.onHydrated&&queueMicrotask(()=>s.onHydrated(j,{value:k})),a=xr,x(k,R)),k}function x(S,k){tt(()=>{k||g(()=>S),T(k?"errored":"ready"),v(k);for(const R of h.keys())R.decrement();h.clear()},!1)}function D(){const S=Jl,k=f(),R=b();if(R&&!o)throw R;return B&&!B.user&&S&&Os(()=>{y(),o&&(S.resolved||h.has(S)||(S.increment(),h.add(S)))}),k}function N(S=!0){if(S!==!1&&l)return;l=!1;const k=d?d():r;if(k==null||k===!1){M(o,Ce(f));return}const R=a!==xr?a:Ce(()=>i(k,{value:f(),refetching:S}));return typeof R!="object"||!(R&&"then"in R)?(M(o,R),R):(o=R,l=!0,queueMicrotask(()=>l=!1),tt(()=>{T(u?"refreshing":"pending"),E()},!1),R.then(j=>M(R,j,void 0,k),j=>M(R,void 0,ua(j))))}return Object.defineProperties(D,{state:{get:()=>A()},error:{get:()=>b()},loading:{get(){const S=A();return S==="pending"||S==="refreshing"}},latest:{get(){if(!u)return D();const S=b();if(S&&!o)throw S;return f()}}}),d?Os(()=>N(!1)):N(!1),[D,{refetch:N,mutate:g}]}function Ce(e){const t=B;B=null;try{return e()}finally{B=t}}function Kl(e){nr(()=>Ce(e))}function sa(e){return F===null||(F.cleanups===null?F.cleanups=[e]:F.cleanups.push(e)),e}function vt(e,t){const n=Symbol("context");return{id:n,Provider:eu(n),defaultValue:e}}function Xt(e){let t;return(t=da(F,e.id))!==void 0?t:e.defaultValue}function Xl(e){const t=W(e),n=W(()=>ni(t()));return n.toArray=()=>{const r=n();return Array.isArray(r)?r:r!=null?[r]:[]},n}let Jl;function oa(){const e=Je;if(this.sources&&(this.state||e))if(this.state===Pe||e)wt(this);else{const t=K;K=null,tt(()=>Mn(this),!1),K=t}if(B){const t=this.observers?this.observers.length:0;B.sources?(B.sources.push(this),B.sourceSlots.push(t)):(B.sources=[this],B.sourceSlots=[t]),this.observers?(this.observers.push(B),this.observerSlots.push(B.sources.length-1)):(this.observers=[B],this.observerSlots=[B.sources.length-1])}return this.value}function aa(e,t,n){let r=e.value;return(!e.comparator||!e.comparator(r,t))&&(e.value=t,e.observers&&e.observers.length&&tt(()=>{for(let i=0;i<e.observers.length;i+=1){const s=e.observers[i],o=Je&&Je.running;o&&Je.disposed.has(s),(o&&!s.tState||!o&&!s.state)&&(s.pure?K.push(s):ke.push(s),s.observers&&la(s)),o||(s.state=Pe)}if(K.length>1e6)throw K=[],new Error},!1)),t}function wt(e){if(!e.fn)return;Pi(e);const t=F,n=B,r=Oi;B=F=e,Yl(e,e.value,r),B=n,F=t}function Yl(e,t,n){let r;try{r=e.fn(t)}catch(i){e.pure&&(e.state=Pe),ha(i)}(!e.updatedAt||e.updatedAt<=n)&&(e.updatedAt!=null&&"observers"in e?aa(e,r):e.value=r,e.updatedAt=n)}function rr(e,t,n,r=Pe,i){const s={fn:e,state:r,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:F,context:null,pure:n};return F===null||F!==ia&&(F.owned?F.owned.push(s):F.owned=[s]),s}function Ln(e){const t=Je;if(e.state===0||t)return;if(e.state===Dn||t)return Mn(e);if(e.suspense&&Ce(e.suspense.inFallback))return e.suspense.effects.push(e);const n=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<Oi);)(e.state||t)&&n.push(e);for(let r=n.length-1;r>=0;r--)if(e=n[r],e.state===Pe||t)wt(e);else if(e.state===Dn||t){const i=K;K=null,tt(()=>Mn(e,n[0]),!1),K=i}}function tt(e,t){if(K)return e();let n=!1;t||(K=[]),ke?n=!0:ke=[],Oi++;try{const r=e();return Ql(n),r}catch(r){K||(ke=null),ha(r)}}function Ql(e){if(K&&(ca(K),K=null),e)return;const t=ke;ke=null,t.length&&tt(()=>ra(t),!1)}function ca(e){for(let t=0;t<e.length;t++)Ln(e[t])}function Zl(e){let t,n=0;for(t=0;t<e.length;t++){const r=e[t];r.user?e[n++]=r:Ln(r)}for($.context&&Wl(),t=0;t<n;t++)Ln(e[t])}function Mn(e,t){const n=Je;e.state=0;for(let r=0;r<e.sources.length;r+=1){const i=e.sources[r];i.sources&&(i.state===Pe||n?i!==t&&Ln(i):(i.state===Dn||n)&&Mn(i,t))}}function la(e){const t=Je;for(let n=0;n<e.observers.length;n+=1){const r=e.observers[n];(!r.state||t)&&(r.state=Dn,r.pure?K.push(r):ke.push(r),r.observers&&la(r))}}function Pi(e){let t;if(e.sources)for(;e.sources.length;){const n=e.sources.pop(),r=e.sourceSlots.pop(),i=n.observers;if(i&&i.length){const s=i.pop(),o=n.observerSlots.pop();r<i.length&&(s.sourceSlots[o]=r,i[r]=s,n.observerSlots[r]=o)}}if(e.owned){for(t=0;t<e.owned.length;t++)Pi(e.owned[t]);e.owned=null}if(e.cleanups){for(t=0;t<e.cleanups.length;t++)e.cleanups[t]();e.cleanups=null}e.state=0,e.context=null}function ua(e){return e instanceof Error||typeof e=="string"?e:new Error("Unknown error")}function ha(e){throw e=ua(e),e}function da(e,t){return e?e.context&&e.context[t]!==void 0?e.context[t]:da(e.owner,t):void 0}function ni(e){if(typeof e=="function"&&!e.length)return ni(e());if(Array.isArray(e)){const t=[];for(let n=0;n<e.length;n++){const r=ni(e[n]);Array.isArray(r)?t.push.apply(t,r):t.push(r)}return t}return e}function eu(e,t){return function(r){let i;return je(()=>i=Ce(()=>(F.context={[e]:r.value},Xl(()=>r.children))),void 0),i}}function _(e,t){return Ce(()=>e(t||{}))}function mn(){return!0}const fa={get(e,t,n){return t===xi?n:e.get(t)},has(e,t){return e.has(t)},set:mn,deleteProperty:mn,getOwnPropertyDescriptor(e,t){return{configurable:!0,enumerable:!0,get(){return e.get(t)},set:mn,deleteProperty:mn}},ownKeys(e){return e.keys()}};function Or(e){return(e=typeof e=="function"?e():e)?e:{}}function X(...e){if(e.some(n=>n&&(xi in n||typeof n=="function")))return new Proxy({get(n){for(let r=e.length-1;r>=0;r--){const i=Or(e[r])[n];if(i!==void 0)return i}},has(n){for(let r=e.length-1;r>=0;r--)if(n in Or(e[r]))return!0;return!1},keys(){const n=[];for(let r=0;r<e.length;r++)n.push(...Object.keys(Or(e[r])));return[...new Set(n)]}},fa);const t={};for(let n=e.length-1;n>=0;n--)if(e[n]){const r=Object.getOwnPropertyDescriptors(e[n]);for(const i in r)i in t||Object.defineProperty(t,i,{enumerable:!0,get(){for(let s=e.length-1;s>=0;s--){const o=(e[s]||{})[i];if(o!==void 0)return o}}})}return t}function ce(e,...t){const n=new Set(t.flat()),r=Object.getOwnPropertyDescriptors(e),i=xi in e;i||t.push(Object.keys(r).filter(o=>!n.has(o)));const s=t.map(o=>{const a={};for(let c=0;c<o.length;c++){const l=o[c];!i&&!(l in e)||Object.defineProperty(a,l,r[l]?r[l]:{get(){return e[l]},set(){return!0},enumerable:!0})}return a});return i&&s.push(new Proxy({get(o){return n.has(o)?void 0:e[o]},has(o){return n.has(o)?!1:o in e},keys(){return Object.keys(e).filter(o=>!n.has(o))}},fa)),s}function me(e){let t=!1;const n=e.keyed,r=W(()=>e.when,void 0,{equals:(i,s)=>t?i===s:!i==!s});return W(()=>{const i=r();if(i){const s=e.children,o=typeof s=="function"&&s.length>0;return t=n||o,o?Ce(()=>s(i)):s}return e.fallback})}const tu=["allowfullscreen","async","autofocus","autoplay","checked","controls","default","disabled","formnovalidate","hidden","indeterminate","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","seamless","selected"],nu=new Set(["className","value","readOnly","formNoValidate","isMap","noModule","playsInline",...tu]),ru=new Set(["innerHTML","textContent","innerText","children"]),iu=Object.assign(Object.create(null),{className:"class",htmlFor:"for"}),Ps=Object.assign(Object.create(null),{class:"className",formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly"}),su=new Set(["beforeinput","click","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"]),ou=new Set(["altGlyph","altGlyphDef","altGlyphItem","animate","animateColor","animateMotion","animateTransform","circle","clipPath","color-profile","cursor","defs","desc","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","font","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignObject","g","glyph","glyphRef","hkern","image","line","linearGradient","marker","mask","metadata","missing-glyph","mpath","path","pattern","polygon","polyline","radialGradient","rect","set","stop","svg","switch","symbol","text","textPath","tref","tspan","use","view","vkern"]),au={xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace"};function cu(e,t,n){let r=n.length,i=t.length,s=r,o=0,a=0,c=t[i-1].nextSibling,l=null;for(;o<i||a<s;){if(t[o]===n[a]){o++,a++;continue}for(;t[i-1]===n[s-1];)i--,s--;if(i===o){const u=s<r?a?n[a-1].nextSibling:n[s-a]:c;for(;a<s;)e.insertBefore(n[a++],u)}else if(s===a)for(;o<i;)(!l||!l.has(t[o]))&&t[o].remove(),o++;else if(t[o]===n[s-1]&&n[a]===t[i-1]){const u=t[--i].nextSibling;e.insertBefore(n[a++],t[o++].nextSibling),e.insertBefore(n[--s],u),t[i]=n[s]}else{if(!l){l=new Map;let d=a;for(;d<s;)l.set(n[d],d++)}const u=l.get(t[o]);if(u!=null)if(a<u&&u<s){let d=o,h=1,f;for(;++d<i&&d<s&&!((f=l.get(t[d]))==null||f!==u+h);)h++;if(h>u-a){const g=t[o];for(;a<u;)e.insertBefore(n[a++],g)}else e.replaceChild(n[a++],t[o++])}else o++;else t[o++].remove()}}}const Ns="_$DX_DELEGATE";function lu(e,t,n,r={}){let i;return Gl(s=>{i=s,t===document?e():Ni(t,e(),t.firstChild?null:void 0,n)},r.owner),()=>{i(),t.textContent=""}}function Jt(e,t,n){const r=document.createElement("template");r.innerHTML=e;let i=r.content.firstChild;return n&&(i=i.firstChild),i}function uu(e,t=window.document){const n=t[Ns]||(t[Ns]=new Set);for(let r=0,i=e.length;r<i;r++){const s=e[r];n.has(s)||(n.add(s),t.addEventListener(s,vu))}}function ga(e,t,n){n==null?e.removeAttribute(t):e.setAttribute(t,n)}function hu(e,t,n,r){r==null?e.removeAttributeNS(t,n):e.setAttributeNS(t,n,r)}function du(e,t){t==null?e.removeAttribute("class"):e.className=t}function fu(e,t,n,r){if(r)Array.isArray(n)?(e[`$$${t}`]=n[0],e[`$$${t}Data`]=n[1]):e[`$$${t}`]=n;else if(Array.isArray(n)){const i=n[0];e.addEventListener(t,n[0]=s=>i.call(e,n[1],s))}else e.addEventListener(t,n)}function gu(e,t,n={}){const r=Object.keys(t||{}),i=Object.keys(n);let s,o;for(s=0,o=i.length;s<o;s++){const a=i[s];!a||a==="undefined"||t[a]||(Ds(e,a,!1),delete n[a])}for(s=0,o=r.length;s<o;s++){const a=r[s],c=!!t[a];!a||a==="undefined"||n[a]===c||!c||(Ds(e,a,!0),n[a]=c)}return n}function pu(e,t,n){if(!t)return n?ga(e,"style"):t;const r=e.style;if(typeof t=="string")return r.cssText=t;typeof n=="string"&&(r.cssText=n=void 0),n||(n={}),t||(t={});let i,s;for(s in n)t[s]==null&&r.removeProperty(s),delete n[s];for(s in t)i=t[s],i!==n[s]&&(r.setProperty(s,i),n[s]=i);return n}function mu(e,t={},n,r){const i={};return r||je(()=>i.children=yt(e,t.children,i.children)),je(()=>t.ref&&t.ref(e)),je(()=>yu(e,t,n,!0,i,!0)),i}function Ni(e,t,n,r){if(n!==void 0&&!r&&(r=[]),typeof t!="function")return yt(e,t,r,n);je(i=>yt(e,t(),i,n),r)}function yu(e,t,n,r,i={},s=!1){t||(t={});for(const o in i)if(!(o in t)){if(o==="children")continue;i[o]=Ls(e,o,null,i[o],n,s)}for(const o in t){if(o==="children"){r||yt(e,t.children);continue}const a=t[o];i[o]=Ls(e,o,a,i[o],n,s)}}function bu(e){let t,n;return!$.context||!(t=$.registry.get(n=wu()))?e.cloneNode(!0):($.completed&&$.completed.add(t),$.registry.delete(n),t)}function _u(e){return e.toLowerCase().replace(/-([a-z])/g,(t,n)=>n.toUpperCase())}function Ds(e,t,n){const r=t.trim().split(/\s+/);for(let i=0,s=r.length;i<s;i++)e.classList.toggle(r[i],n)}function Ls(e,t,n,r,i,s){let o,a,c;if(t==="style")return pu(e,n,r);if(t==="classList")return gu(e,n,r);if(n===r)return r;if(t==="ref")s||n(e);else if(t.slice(0,3)==="on:"){const l=t.slice(3);r&&e.removeEventListener(l,r),n&&e.addEventListener(l,n)}else if(t.slice(0,10)==="oncapture:"){const l=t.slice(10);r&&e.removeEventListener(l,r,!0),n&&e.addEventListener(l,n,!0)}else if(t.slice(0,2)==="on"){const l=t.slice(2).toLowerCase(),u=su.has(l);if(!u&&r){const d=Array.isArray(r)?r[0]:r;e.removeEventListener(l,d)}(u||n)&&(fu(e,l,n,u),u&&uu([l]))}else if((c=ru.has(t))||!i&&(Ps[t]||(a=nu.has(t)))||(o=e.nodeName.includes("-")))t==="class"||t==="className"?du(e,n):o&&!a&&!c?e[_u(t)]=n:e[Ps[t]||t]=n;else{const l=i&&t.indexOf(":")>-1&&au[t.split(":")[0]];l?hu(e,l,t,n):ga(e,iu[t]||t,n)}return n}function vu(e){const t=`$$${e.type}`;let n=e.composedPath&&e.composedPath()[0]||e.target;for(e.target!==n&&Object.defineProperty(e,"target",{configurable:!0,value:n}),Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return n||document}}),$.registry&&!$.done&&($.done=!0,document.querySelectorAll("[id^=pl-]").forEach(r=>r.remove()));n!==null;){const r=n[t];if(r&&!n.disabled){const i=n[`${t}Data`];if(i!==void 0?r.call(n,i,e):r.call(n,e),e.cancelBubble)return}n=n.host&&n.host!==n&&n.host instanceof Node?n.host:n.parentNode}}function yt(e,t,n,r,i){for($.context&&!n&&(n=[...e.childNodes]);typeof n=="function";)n=n();if(t===n)return n;const s=typeof t,o=r!==void 0;if(e=o&&n[0]&&n[0].parentNode||e,s==="string"||s==="number"){if($.context)return n;if(s==="number"&&(t=t.toString()),o){let a=n[0];a&&a.nodeType===3?a.data=t:a=document.createTextNode(t),n=st(e,n,r,a)}else n!==""&&typeof n=="string"?n=e.firstChild.data=t:n=e.textContent=t}else if(t==null||s==="boolean"){if($.context)return n;n=st(e,n,r)}else{if(s==="function")return je(()=>{let a=t();for(;typeof a=="function";)a=a();n=yt(e,a,n,r)}),()=>n;if(Array.isArray(t)){const a=[],c=n&&Array.isArray(n);if(ri(a,t,n,i))return je(()=>n=yt(e,a,n,r,!0)),()=>n;if($.context){if(!a.length)return n;for(let l=0;l<a.length;l++)if(a[l].parentNode)return n=a}if(a.length===0){if(n=st(e,n,r),o)return n}else c?n.length===0?Ms(e,a,r):cu(e,n,a):(n&&st(e),Ms(e,a));n=a}else if(t instanceof Node){if($.context&&t.parentNode)return n=o?[t]:t;if(Array.isArray(n)){if(o)return n=st(e,n,r,t);st(e,n,null,t)}else n==null||n===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);n=t}}return n}function ri(e,t,n,r){let i=!1;for(let s=0,o=t.length;s<o;s++){let a=t[s],c=n&&n[s];if(a instanceof Node)e.push(a);else if(!(a==null||a===!0||a===!1))if(Array.isArray(a))i=ri(e,a,c)||i;else if(typeof a=="function")if(r){for(;typeof a=="function";)a=a();i=ri(e,Array.isArray(a)?a:[a],Array.isArray(c)?c:[c])||i}else e.push(a),i=!0;else{const l=String(a);c&&c.nodeType===3&&c.data===l?e.push(c):e.push(document.createTextNode(l))}}return i}function Ms(e,t,n=null){for(let r=0,i=t.length;r<i;r++)e.insertBefore(t[r],n)}function st(e,t,n,r){if(n===void 0)return e.textContent="";const i=r||document.createTextNode("");if(t.length){let s=!1;for(let o=t.length-1;o>=0;o--){const a=t[o];if(i!==a){const c=a.parentNode===e;!s&&!o?c?e.replaceChild(i,a):e.insertBefore(i,n):c&&a.remove()}else s=!0}}else e.insertBefore(i,n);return[i]}function wu(){const e=$.context;return`${e.id}${e.count++}`}const Iu="http://www.w3.org/2000/svg";function Eu(e,t=!1){return t?document.createElementNS(Iu,e):document.createElement(e)}function Su(e){const[t,n]=ce(e,["component"]),r=W(()=>t.component);return W(()=>{const i=r();switch(typeof i){case"function":return Ce(()=>i(n));case"string":const s=ou.has(i),o=$.context?bu():Eu(i,s);return mu(o,n,s),o}})}/*!
 * Original code by Chakra UI
 * MIT Licensed, Copyright (c) 2019 Segun Adebayo.
 *
 * Credits to the Chakra UI team:
 * https://github.com/chakra-ui/chakra-ui/blob/main/packages/utils/src/assertion.ts
 */function pa(e){return typeof e=="number"}function ir(e){return Array.isArray(e)}function ma(e){return typeof e=="function"}function ze(e){const t=typeof e;return e!=null&&(t==="object"||t==="function")&&!ir(e)}function ya(e){return ze(e)&&Object.keys(e).length===0}function ba(e){return Object.prototype.toString.call(e)==="[object String]"}/*!
 * Original code by Chakra UI
 * MIT Licensed, Copyright (c) 2019 Segun Adebayo.
 *
 * Credits to the Chakra UI team:
 * https://github.com/chakra-ui/chakra-ui/blob/main/packages/utils/src/array.ts
 */function Tu(e){const t=e==null?0:e.length;return t?e[t-1]:void 0}function ku(e){return e==null?[]:ir(e)?e:[e]}/*!
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
 */function Cu(e){return e?!0:void 0}function Au(e,t){return n=>{e(n),t?.(n)}}/*!
 * Portions of this file are based on code from chakra-ui.
 * MIT Licensed, Copyright (c) 2019 Segun Adebayo.
 *
 * Credits to the Chakra UI team:
 * https://github.com/chakra-ui/chakra-ui/blob/main/packages/utils/src/function.ts
 */function Ru(){}function $s(e,t){return e&&(ma(e)?e(t):e[0](e[1],t)),t?.defaultPrevented}function Ye(e,...t){return ma(e)?e(...t):e}function _a(e){let t=!1;return function(...n){t||(t=!0,e(...n))}}function Tn(e,t,n=1/0){return!ze(e)&&!Array.isArray(e)||!n?e:Object.entries(e).reduce((r,[i,s])=>(ze(s)||ir(s)?Object.entries(Tn(s,t,n-1)).forEach(([o,a])=>{r[`${i}${t}${o}`]=a}):r[i]=s,r),{})}function xu(e,t){return Object.keys(e).reduce((n,r)=>(r.split(t).reduce((i,s,o,a)=>(i[s]!=null||(i[s]=a.length-1===o?e[r]:{}),i[s]),n),n),{})}function Ou(e,t){return t.split(".").reduce((n,r)=>n&&n[r],e)}/*!
 * Original code by Chakra UI
 * MIT Licensed, Copyright (c) 2019 Segun Adebayo.
 *
 * Credits to the Chakra UI team:
 * https://github.com/chakra-ui/chakra-ui/blob/main/packages/utils/src/object.ts
 */function Pu(e,t){const n={};return t.forEach(r=>{r in e&&(n[r]=e[r])}),n}const Nu=e=>Object.keys(e);function Du(e,t){const n={};return Object.keys(e).forEach(r=>{const i=e[r];t(i,r,e)&&(n[r]=i)}),n}function ii(e){return Du(e,t=>t!=null)}function Bs(e){return ba(e)?e:void 0}/*!
 * Portions of this file are based on code from ariakit.
 * MIT Licensed, Copyright (c) Diego Haz.
 *
 * Credits to the Ariakit team:
 * https://github.com/ariakit/ariakit/blob/main/packages/ariakit-utils/src/hooks.ts
 */function Lu(e,t){const[n,r]=Ie(Bs(t?.()));return nr(()=>{r(e()?.tagName.toLowerCase()||Bs(t?.()))}),n}var P="colors",Z="sizes",p="space",Mu={gap:p,gridGap:p,columnGap:p,gridColumnGap:p,rowGap:p,gridRowGap:p,inset:p,insetBlock:p,insetBlockEnd:p,insetBlockStart:p,insetInline:p,insetInlineEnd:p,insetInlineStart:p,margin:p,marginTop:p,marginRight:p,marginBottom:p,marginLeft:p,marginBlock:p,marginBlockEnd:p,marginBlockStart:p,marginInline:p,marginInlineEnd:p,marginInlineStart:p,padding:p,paddingTop:p,paddingRight:p,paddingBottom:p,paddingLeft:p,paddingBlock:p,paddingBlockEnd:p,paddingBlockStart:p,paddingInline:p,paddingInlineEnd:p,paddingInlineStart:p,top:p,right:p,bottom:p,left:p,scrollMargin:p,scrollMarginTop:p,scrollMarginRight:p,scrollMarginBottom:p,scrollMarginLeft:p,scrollMarginX:p,scrollMarginY:p,scrollMarginBlock:p,scrollMarginBlockEnd:p,scrollMarginBlockStart:p,scrollMarginInline:p,scrollMarginInlineEnd:p,scrollMarginInlineStart:p,scrollPadding:p,scrollPaddingTop:p,scrollPaddingRight:p,scrollPaddingBottom:p,scrollPaddingLeft:p,scrollPaddingX:p,scrollPaddingY:p,scrollPaddingBlock:p,scrollPaddingBlockEnd:p,scrollPaddingBlockStart:p,scrollPaddingInline:p,scrollPaddingInlineEnd:p,scrollPaddingInlineStart:p,fontSize:"fontSizes",background:P,backgroundColor:P,backgroundImage:P,borderImage:P,border:P,borderBlock:P,borderBlockEnd:P,borderBlockStart:P,borderBottom:P,borderBottomColor:P,borderColor:P,borderInline:P,borderInlineEnd:P,borderInlineStart:P,borderLeft:P,borderLeftColor:P,borderRight:P,borderRightColor:P,borderTop:P,borderTopColor:P,caretColor:P,color:P,columnRuleColor:P,fill:P,outline:P,outlineColor:P,stroke:P,textDecorationColor:P,fontFamily:"fonts",fontWeight:"fontWeights",lineHeight:"lineHeights",letterSpacing:"letterSpacings",blockSize:Z,minBlockSize:Z,maxBlockSize:Z,inlineSize:Z,minInlineSize:Z,maxInlineSize:Z,width:Z,minWidth:Z,maxWidth:Z,height:Z,minHeight:Z,maxHeight:Z,flexBasis:Z,gridTemplateColumns:Z,gridTemplateRows:Z,borderWidth:"borderWidths",borderTopWidth:"borderWidths",borderRightWidth:"borderWidths",borderBottomWidth:"borderWidths",borderLeftWidth:"borderWidths",borderStyle:"borderStyles",borderTopStyle:"borderStyles",borderRightStyle:"borderStyles",borderBottomStyle:"borderStyles",borderLeftStyle:"borderStyles",borderRadius:"radii",borderTopLeftRadius:"radii",borderTopRightRadius:"radii",borderBottomRightRadius:"radii",borderBottomLeftRadius:"radii",boxShadow:"shadows",textShadow:"shadows",transition:"transitions",zIndex:"zIndices"},$u=(e,t)=>typeof t=="function"?{"()":Function.prototype.toString.call(t)}:t,Yt=()=>{const e=Object.create(null);return(t,n,...r)=>{const i=(s=>JSON.stringify(s,$u))(t);return i in e?e[i]:e[i]=n(t,...r)}},kn=Symbol.for("sxs.internal"),Di=(e,t)=>Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)),Us=e=>{for(const t in e)return!0;return!1},{hasOwnProperty:Bu}=Object.prototype,si=e=>e.includes("-")?e:e.replace(/[A-Z]/g,t=>"-"+t.toLowerCase()),Uu=/\s+(?![^()]*\))/,ot=e=>t=>e(...typeof t=="string"?String(t).split(Uu):[t]),js={appearance:e=>({WebkitAppearance:e,appearance:e}),backfaceVisibility:e=>({WebkitBackfaceVisibility:e,backfaceVisibility:e}),backdropFilter:e=>({WebkitBackdropFilter:e,backdropFilter:e}),backgroundClip:e=>({WebkitBackgroundClip:e,backgroundClip:e}),boxDecorationBreak:e=>({WebkitBoxDecorationBreak:e,boxDecorationBreak:e}),clipPath:e=>({WebkitClipPath:e,clipPath:e}),content:e=>({content:e.includes('"')||e.includes("'")||/^([A-Za-z]+\([^]*|[^]*-quote|inherit|initial|none|normal|revert|unset)$/.test(e)?e:`"${e}"`}),hyphens:e=>({WebkitHyphens:e,hyphens:e}),maskImage:e=>({WebkitMaskImage:e,maskImage:e}),maskSize:e=>({WebkitMaskSize:e,maskSize:e}),tabSize:e=>({MozTabSize:e,tabSize:e}),textSizeAdjust:e=>({WebkitTextSizeAdjust:e,textSizeAdjust:e}),userSelect:e=>({WebkitUserSelect:e,userSelect:e}),marginBlock:ot((e,t)=>({marginBlockStart:e,marginBlockEnd:t||e})),marginInline:ot((e,t)=>({marginInlineStart:e,marginInlineEnd:t||e})),maxSize:ot((e,t)=>({maxBlockSize:e,maxInlineSize:t||e})),minSize:ot((e,t)=>({minBlockSize:e,minInlineSize:t||e})),paddingBlock:ot((e,t)=>({paddingBlockStart:e,paddingBlockEnd:t||e})),paddingInline:ot((e,t)=>({paddingInlineStart:e,paddingInlineEnd:t||e}))},Pr=/([\d.]+)([^]*)/,ju=(e,t)=>e.length?e.reduce((n,r)=>(n.push(...t.map(i=>i.includes("&")?i.replace(/&/g,/[ +>|~]/.test(r)&&/&.*&/.test(i)?`:is(${r})`:r):r+" "+i)),n),[]):t,Fu=(e,t)=>e in Hu&&typeof t=="string"?t.replace(/^((?:[^]*[^\w-])?)(fit-content|stretch)((?:[^\w-][^]*)?)$/,(n,r,i,s)=>r+(i==="stretch"?`-moz-available${s};${si(e)}:${r}-webkit-fill-available`:`-moz-fit-content${s};${si(e)}:${r}fit-content`)+s):String(t),Hu={blockSize:1,height:1,inlineSize:1,maxBlockSize:1,maxHeight:1,maxInlineSize:1,maxWidth:1,minBlockSize:1,minHeight:1,minInlineSize:1,minWidth:1,width:1},Ae=e=>e?e+"-":"",va=(e,t,n)=>e.replace(/([+-])?((?:\d+(?:\.\d*)?|\.\d+)(?:[Ee][+-]?\d+)?)?(\$|--)([$\w-]+)/g,(r,i,s,o,a)=>o=="$"==!!s?r:(i||o=="--"?"calc(":"")+"var(--"+(o==="$"?Ae(t)+(a.includes("$")?"":Ae(n))+a.replace(/\$/g,"-"):a)+")"+(i||o=="--"?"*"+(i||"")+(s||"1")+")":"")),zu=/\s*,\s*(?![^()]*\))/,Wu=Object.prototype.toString,ct=(e,t,n,r,i)=>{let s,o,a;const c=(l,u,d)=>{let h,f;const g=b=>{for(h in b){const E=h.charCodeAt(0)===64,A=E&&Array.isArray(b[h])?b[h]:[b[h]];for(f of A){const T=/[A-Z]/.test(y=h)?y:y.replace(/-[^]/g,x=>x[1].toUpperCase()),M=typeof f=="object"&&f&&f.toString===Wu&&(!r.utils[T]||!u.length);if(T in r.utils&&!M){const x=r.utils[T];if(x!==o){o=x,g(x(f)),o=null;continue}}else if(T in js){const x=js[T];if(x!==a){a=x,g(x(f)),a=null;continue}}if(E&&(v=h.slice(1)in r.media?"@media "+r.media[h.slice(1)]:h,h=v.replace(/\(\s*([\w-]+)\s*(=|<|<=|>|>=)\s*([\w-]+)\s*(?:(<|<=|>|>=)\s*([\w-]+)\s*)?\)/g,(x,D,N,S,k,R)=>{const j=Pr.test(D),gn=.0625*(j?-1:1),[pn,xs]=j?[S,D]:[D,S];return"("+(N[0]==="="?"":N[0]===">"===j?"max-":"min-")+pn+":"+(N[0]!=="="&&N.length===1?xs.replace(Pr,(zl,Ar,Rr)=>Number(Ar)+gn*(N===">"?1:-1)+Rr):xs)+(k?") and ("+(k[0]===">"?"min-":"max-")+pn+":"+(k.length===1?R.replace(Pr,(zl,Ar,Rr)=>Number(Ar)+gn*(k===">"?-1:1)+Rr):R):"")+")"})),M){const x=E?d.concat(h):[...d],D=E?[...u]:ju(u,h.split(zu));s!==void 0&&i(Fs(...s)),s=void 0,c(f,D,x)}else s===void 0&&(s=[[],u,d]),h=E||h.charCodeAt(0)!==36?h:`--${Ae(r.prefix)}${h.slice(1).replace(/\$/g,"-")}`,f=M?f:typeof f=="number"?f&&T in Vu?String(f)+"px":String(f):va(Fu(T,f??""),r.prefix,r.themeMap[T]),s[0].push(`${E?`${h} `:`${si(h)}:`}${f}`)}}var v,y};g(l),s!==void 0&&i(Fs(...s)),s=void 0};c(e,t,n)},Fs=(e,t,n)=>`${n.map(r=>`${r}{`).join("")}${t.length?`${t.join(",")}{`:""}${e.join(";")}${t.length?"}":""}${Array(n.length?n.length+1:0).join("}")}`,Vu={animationDelay:1,animationDuration:1,backgroundSize:1,blockSize:1,border:1,borderBlock:1,borderBlockEnd:1,borderBlockEndWidth:1,borderBlockStart:1,borderBlockStartWidth:1,borderBlockWidth:1,borderBottom:1,borderBottomLeftRadius:1,borderBottomRightRadius:1,borderBottomWidth:1,borderEndEndRadius:1,borderEndStartRadius:1,borderInlineEnd:1,borderInlineEndWidth:1,borderInlineStart:1,borderInlineStartWidth:1,borderInlineWidth:1,borderLeft:1,borderLeftWidth:1,borderRadius:1,borderRight:1,borderRightWidth:1,borderSpacing:1,borderStartEndRadius:1,borderStartStartRadius:1,borderTop:1,borderTopLeftRadius:1,borderTopRightRadius:1,borderTopWidth:1,borderWidth:1,bottom:1,columnGap:1,columnRule:1,columnRuleWidth:1,columnWidth:1,containIntrinsicSize:1,flexBasis:1,fontSize:1,gap:1,gridAutoColumns:1,gridAutoRows:1,gridTemplateColumns:1,gridTemplateRows:1,height:1,inlineSize:1,inset:1,insetBlock:1,insetBlockEnd:1,insetBlockStart:1,insetInline:1,insetInlineEnd:1,insetInlineStart:1,left:1,letterSpacing:1,margin:1,marginBlock:1,marginBlockEnd:1,marginBlockStart:1,marginBottom:1,marginInline:1,marginInlineEnd:1,marginInlineStart:1,marginLeft:1,marginRight:1,marginTop:1,maxBlockSize:1,maxHeight:1,maxInlineSize:1,maxWidth:1,minBlockSize:1,minHeight:1,minInlineSize:1,minWidth:1,offsetDistance:1,offsetRotate:1,outline:1,outlineOffset:1,outlineWidth:1,overflowClipMargin:1,padding:1,paddingBlock:1,paddingBlockEnd:1,paddingBlockStart:1,paddingBottom:1,paddingInline:1,paddingInlineEnd:1,paddingInlineStart:1,paddingLeft:1,paddingRight:1,paddingTop:1,perspective:1,right:1,rowGap:1,scrollMargin:1,scrollMarginBlock:1,scrollMarginBlockEnd:1,scrollMarginBlockStart:1,scrollMarginBottom:1,scrollMarginInline:1,scrollMarginInlineEnd:1,scrollMarginInlineStart:1,scrollMarginLeft:1,scrollMarginRight:1,scrollMarginTop:1,scrollPadding:1,scrollPaddingBlock:1,scrollPaddingBlockEnd:1,scrollPaddingBlockStart:1,scrollPaddingBottom:1,scrollPaddingInline:1,scrollPaddingInlineEnd:1,scrollPaddingInlineStart:1,scrollPaddingLeft:1,scrollPaddingRight:1,scrollPaddingTop:1,shapeMargin:1,textDecoration:1,textDecorationThickness:1,textIndent:1,textUnderlineOffset:1,top:1,transitionDelay:1,transitionDuration:1,verticalAlign:1,width:1,wordSpacing:1},Hs=e=>String.fromCharCode(e+(e>25?39:97)),Qe=e=>(t=>{let n,r="";for(n=Math.abs(t);n>52;n=n/52|0)r=Hs(n%52)+r;return Hs(n%52)+r})(((t,n)=>{let r=n.length;for(;r;)t=33*t^n.charCodeAt(--r);return t})(5381,JSON.stringify(e))>>>0),Ot=["themed","global","styled","onevar","resonevar","allvar","inline"],Gu=e=>{if(e.href&&!e.href.startsWith(location.origin))return!1;try{return!!e.cssRules}catch{return!1}},qu=e=>{let t;const n=()=>{const{cssRules:i}=t.sheet;return[].map.call(i,(s,o)=>{const{cssText:a}=s;let c="";if(a.startsWith("--sxs"))return"";if(i[o-1]&&(c=i[o-1].cssText).startsWith("--sxs")){if(!s.cssRules.length)return"";for(const l in t.rules)if(t.rules[l].group===s)return`--sxs{--sxs:${[...t.rules[l].cache].join(" ")}}${a}`;return s.cssRules.length?`${c}${a}`:""}return a}).join("")},r=()=>{if(t){const{rules:a,sheet:c}=t;if(!c.deleteRule){for(;Object(Object(c.cssRules)[0]).type===3;)c.cssRules.splice(0,1);c.cssRules=[]}for(const l in a)delete a[l]}const i=Object(e).styleSheets||[];for(const a of i)if(Gu(a)){for(let c=0,l=a.cssRules;l[c];++c){const u=Object(l[c]);if(u.type!==1)continue;const d=Object(l[c+1]);if(d.type!==4)continue;++c;const{cssText:h}=u;if(!h.startsWith("--sxs"))continue;const f=h.slice(14,-3).trim().split(/\s+/),g=Ot[f[0]];g&&(t||(t={sheet:a,reset:r,rules:{},toString:n}),t.rules[g]={group:d,index:c,cache:new Set(f)})}if(t)break}if(!t){const a=(c,l)=>({type:l,cssRules:[],insertRule(u,d){this.cssRules.splice(d,0,a(u,{import:3,undefined:1}[(u.toLowerCase().match(/^@([a-z]+)/)||[])[1]]||4))},get cssText(){return c==="@media{}"?`@media{${[].map.call(this.cssRules,u=>u.cssText).join("")}}`:c}});t={sheet:e?(e.head||e).appendChild(document.createElement("style")).sheet:a("","text/css"),rules:{},reset:r,toString:n}}const{sheet:s,rules:o}=t;for(let a=Ot.length-1;a>=0;--a){const c=Ot[a];if(!o[c]){const l=Ot[a+1],u=o[l]?o[l].index:s.cssRules.length;s.insertRule("@media{}",u),s.insertRule(`--sxs{--sxs:${a}}`,u),o[c]={group:s.cssRules[u+1],index:u,cache:new Set([a])}}Ku(o[c])}};return r(),t},Ku=e=>{const t=e.group;let n=t.cssRules.length;e.apply=r=>{try{t.insertRule(r,n),++n}catch{}}},Ct=Symbol(),Xu=Yt(),Ju=(e,t)=>Xu(e,()=>(...n)=>{let r={type:null,composers:new Set};for(const i of n)if(i!=null)if(i[kn]){r.type==null&&(r.type=i[kn].type);for(const s of i[kn].composers)r.composers.add(s)}else i.constructor!==Object||i.$$typeof?r.type==null&&(r.type=i):r.composers.add(Yu(i,e));return r.type==null&&(r.type="span"),r.composers.size||r.composers.add(["PJLV",{},[],[],{},[]]),Qu(e,r,t)}),Yu=({variants:e,compoundVariants:t,defaultVariants:n,...r},i)=>{const s=`${Ae(i.prefix)}c-${Qe(r)}`,o=[],a=[],c=Object.create(null),l=[];for(const h in n)c[h]=String(n[h]);if(typeof e=="object"&&e)for(const h in e){u=c,d=h,Bu.call(u,d)||(c[h]="undefined");const f=e[h];for(const g in f){const b={[h]:String(g)};String(g)==="undefined"&&l.push(h);const v=f[g],y=[b,v,!Us(v)];o.push(y)}}var u,d;if(typeof t=="object"&&t)for(const h of t){let{css:f,...g}=h;f=typeof f=="object"&&f||{};for(const v in g)g[v]=String(g[v]);const b=[g,f,!Us(f)];a.push(b)}return[s,r,o,a,c,l]},Qu=(e,t,n)=>{const[r,i,s,o]=Zu(t.composers),a=typeof t.type=="function"||t.type.$$typeof?(d=>{function h(){for(let f=0;f<h[Ct].length;f++){const[g,b]=h[Ct][f];d.rules[g].apply(b)}return h[Ct]=[],null}return h[Ct]=[],h.rules={},Ot.forEach(f=>h.rules[f]={apply:g=>h[Ct].push([f,g])}),h})(n):null,c=(a||n).rules,l=`.${r}${i.length>1?`:where(.${i.slice(1).join(".")})`:""}`,u=d=>{d=typeof d=="object"&&d||eh;const{css:h,...f}=d,g={};for(const y in s)if(delete f[y],y in d){let E=d[y];typeof E=="object"&&E?g[y]={"@initial":s[y],...E}:(E=String(E),g[y]=E!=="undefined"||o.has(y)?E:s[y])}else g[y]=s[y];const b=new Set([...i]);for(const[y,E,A,T]of t.composers){n.rules.styled.cache.has(y)||(n.rules.styled.cache.add(y),ct(E,[`.${y}`],[],e,D=>{c.styled.apply(D)}));const M=zs(A,g,e.media),x=zs(T,g,e.media,!0);for(const D of M)if(D!==void 0)for(const[N,S,k]of D){const R=`${y}-${Qe(S)}-${N}`;b.add(R);const j=(k?n.rules.resonevar:n.rules.onevar).cache,gn=k?c.resonevar:c.onevar;j.has(R)||(j.add(R),ct(S,[`.${R}`],[],e,pn=>{gn.apply(pn)}))}for(const D of x)if(D!==void 0)for(const[N,S]of D){const k=`${y}-${Qe(S)}-${N}`;b.add(k),n.rules.allvar.cache.has(k)||(n.rules.allvar.cache.add(k),ct(S,[`.${k}`],[],e,R=>{c.allvar.apply(R)}))}}if(typeof h=="object"&&h){const y=`${r}-i${Qe(h)}-css`;b.add(y),n.rules.inline.cache.has(y)||(n.rules.inline.cache.add(y),ct(h,[`.${y}`],[],e,E=>{c.inline.apply(E)}))}for(const y of String(d.className||"").trim().split(/\s+/))y&&b.add(y);const v=f.className=[...b].join(" ");return{type:t.type,className:v,selector:l,props:f,toString:()=>v,deferredInjector:a}};return Di(u,{className:r,selector:l,[kn]:t,toString:()=>(n.rules.styled.cache.has(r)||u(),r)})},Zu=e=>{let t="";const n=[],r={},i=[];for(const[s,,,,o,a]of e){t===""&&(t=s),n.push(s),i.push(...a);for(const c in o){const l=o[c];(r[c]===void 0||l!=="undefined"||a.includes(l))&&(r[c]=l)}}return[t,n,r,new Set(i)]},zs=(e,t,n,r)=>{const i=[];e:for(let[s,o,a]of e){if(a)continue;let c,l=0,u=!1;for(c in s){const d=s[c];let h=t[c];if(h!==d){if(typeof h!="object"||!h)continue e;{let f,g,b=0;for(const v in h){if(d===String(h[v])){if(v!=="@initial"){const y=v.slice(1);(g=g||[]).push(y in n?n[y]:v.replace(/^@media ?/,"")),u=!0}l+=b,f=!0}++b}if(g&&g.length&&(o={["@media "+g.join(", ")]:o}),!f)continue e}}}(i[l]=i[l]||[]).push([r?"cv":`${c}-${s[c]}`,o,u])}return i},eh={},th=Yt(),nh=(e,t)=>th(e,()=>(...n)=>{const r=()=>{for(let i of n){i=typeof i=="object"&&i||{};let s=Qe(i);if(!t.rules.global.cache.has(s)){if(t.rules.global.cache.add(s),"@import"in i){let o=[].indexOf.call(t.sheet.cssRules,t.rules.themed.group)-1;for(let a of[].concat(i["@import"]))a=a.includes('"')||a.includes("'")?a:`"${a}"`,t.sheet.insertRule(`@import ${a};`,o++);delete i["@import"]}ct(i,[],[],e,o=>{t.rules.global.apply(o)})}}return""};return Di(r,{toString:r})}),rh=Yt(),ih=(e,t)=>rh(e,()=>n=>{const r=`${Ae(e.prefix)}k-${Qe(n)}`,i=()=>{if(!t.rules.global.cache.has(r)){t.rules.global.cache.add(r);const s=[];ct(n,[],[],e,a=>s.push(a));const o=`@keyframes ${r}{${s.join("")}}`;t.rules.global.apply(o)}return r};return Di(i,{get name(){return i()},toString:i})}),sh=class{constructor(e,t,n,r){this.token=e==null?"":String(e),this.value=t==null?"":String(t),this.scale=n==null?"":String(n),this.prefix=r==null?"":String(r)}get computedValue(){return"var("+this.variable+")"}get variable(){return"--"+Ae(this.prefix)+Ae(this.scale)+this.token}toString(){return this.computedValue}},oh=Yt(),ah=(e,t)=>oh(e,()=>(n,r)=>{r=typeof n=="object"&&n||Object(r);const i=`.${n=(n=typeof n=="string"?n:"")||`${Ae(e.prefix)}t-${Qe(r)}`}`,s={},o=[];for(const c in r){s[c]={};for(const l in r[c]){const u=`--${Ae(e.prefix)}${c}-${l}`,d=va(String(r[c][l]),e.prefix,c);s[c][l]=new sh(l,d,c,e.prefix),o.push(`${u}:${d}`)}}const a=()=>{if(o.length&&!t.rules.themed.cache.has(n)){t.rules.themed.cache.add(n);const c=`${r===e.theme?":root,":""}.${n}{${o.join(";")}}`;t.rules.themed.apply(c)}return n};return{...s,get className(){return a()},selector:i,toString:a}}),ch=Yt(),lh=e=>{let t=!1;const n=ch(e,r=>{t=!0;const i="prefix"in(r=typeof r=="object"&&r||{})?String(r.prefix):"",s=typeof r.media=="object"&&r.media||{},o=typeof r.root=="object"?r.root||null:globalThis.document||null,a=typeof r.theme=="object"&&r.theme||{},c={prefix:i,media:s,theme:a,themeMap:typeof r.themeMap=="object"&&r.themeMap||{...Mu},utils:typeof r.utils=="object"&&r.utils||{}},l=qu(o),u={css:Ju(c,l),globalCss:nh(c,l),keyframes:ih(c,l),createTheme:ah(c,l),reset(){l.reset(),u.theme.toString()},theme:{},sheet:l,config:c,prefix:i,getCssText:l.toString,toString:l.toString};return String(u.theme=u.createTheme(a)),u});return t||n.reset(),n};const uh=lh({prefix:"hope"}),{css:wa,globalCss:Ia,getCssText:Jb,keyframes:Ea}=uh,qe={light:"hope-theme-light",dark:"hope-theme-dark"};function hh(e){const t=Object.keys(e);return t.length>0&&t.every(n=>["light","dark"].includes(n))}/*!
 * Original code by Chakra UI
 * MIT Licensed, Copyright (c) 2019 Segun Adebayo.
 *
 * Credits to the Chakra UI team:
 * https://github.com/chakra-ui/chakra-ui/blob/2283faae3e361a8978a93b0ef7fd43b637153555/packages/utilities/breakpoint-utils/src/responsive.ts
 */function At(e,t){return ir(e)?e.map(n=>n===null?null:t(n)):ze(e)?Nu(e).reduce((n,r)=>(n[r]=t(e[r]),n),{}):e!=null?t(e):null}function dh(e,t){const n=t.map(r=>e[r]??null);for(;Tu(n)===null;)n.pop();return n}function fh(e,t){const n={};return e.forEach((r,i)=>{const s=t[i];r!=null&&(n[s]=r)}),n}function gh(e,t){const n=Object.keys(e);return n.length>0&&n.every(r=>t.includes(r))}const Li=["styleConfigOverride","unstyled"];/*!
 * Original code by Chakra UI
 * MIT Licensed, Copyright (c) 2019 Segun Adebayo.
 *
 * Credits to the Chakra UI team:
 * https://github.com/chakra-ui/chakra-ui/blob/main/packages/styled-system/src/pseudos.ts
 */const z={hover:(e,t)=>`${e}:hover ${t}, ${e}[data-hover] ${t}`,focus:(e,t)=>`${e}:focus ${t}, ${e}[data-focus] ${t}`,focusVisible:(e,t)=>`${e}:focus-visible ${t}`,focusWithin:(e,t)=>`${e}:focus-within ${t}`,active:(e,t)=>`${e}:active ${t}, ${e}[data-active] ${t}`,disabled:(e,t)=>`${e}:disabled ${t}, ${e}[data-disabled] ${t}`,invalid:(e,t)=>`${e}:invalid ${t}, ${e}[data-invalid] ${t}`,checked:(e,t)=>`${e}:checked ${t}, ${e}[data-checked] ${t}`,indeterminate:(e,t)=>`${e}:indeterminate ${t}, ${e}[aria-checked=mixed] ${t}, ${e}[data-indeterminate] ${t}`,readOnly:(e,t)=>`${e}:read-only ${t}, ${e}[readonly] ${t}, ${e}[data-read-only] ${t}`,expanded:(e,t)=>`${e}:read-only ${t}, ${e}[aria-expanded=true] ${t}, ${e}[data-expanded] ${t}`,placeholderShown:(e,t)=>`${e}:placeholder-shown ${t}`};function De(e){return Sa(t=>e(t,"&"),"[role=group]","[data-group]",".group")}function we(e){return Sa(t=>e(t,"~ &"),"[data-peer]",".peer")}function Sa(e,...t){return t.map(e).join(", ")}const ph="_light",Cn="_dark",mh=`.${qe.light} &:not([data-theme]), [data-theme=light] &:not([data-theme]), &[data-theme=light]`,yh=`.${qe.dark} &:not([data-theme]), [data-theme=dark] &:not([data-theme]), &[data-theme=dark]`,bh=new Map([["_hover","&:hover, &[data-hover]"],["_active","&:active, &[data-active]"],["_focus","&:focus, &[data-focus]"],["_highlighted","&[data-highlighted]"],["_focusWithin","&:focus-within"],["_focusVisible","&:focus-visible, &[data-focus-visible]"],["_disabled","&[disabled], &[aria-disabled=true], &[data-disabled]"],["_readOnly","&[aria-readonly=true], &[readonly], &[data-readonly]"],["_before","&::before"],["_after","&::after"],["_empty","&:empty"],["_expanded","&[aria-expanded=true], &[data-expanded]"],["_checked","&[aria-checked=true], &[data-checked]"],["_grabbed","&[aria-grabbed=true], &[data-grabbed]"],["_pressed","&[aria-pressed=true], &[data-pressed]"],["_invalid","&[aria-invalid=true], &[data-invalid]"],["_valid","&[data-valid], &[data-state=valid]"],["_loading","&[data-loading], &[aria-busy=true]"],["_selected","&[aria-selected=true], &[data-selected]"],["_hidden","&[hidden], &[data-hidden]"],["_autofill","&:-webkit-autofill"],["_even","&:nth-of-type(even)"],["_odd","&:nth-of-type(odd)"],["_first","&:first-child"],["_last","&:last-child"],["_notFirst","&:not(:first-child)"],["_notLast","&:not(:last-child)"],["_visited","&:visited"],["_activeLink","&[aria-current=page]"],["_activeStep","&[aria-current=step]"],["_indeterminate","&:indeterminate, &[aria-checked=mixed], &[data-indeterminate]"],["_groupHover",De(z.hover)],["_peerHover",we(z.hover)],["_groupFocus",De(z.focus)],["_peerFocus",we(z.focus)],["_groupFocusVisible",De(z.focusVisible)],["_peerFocusVisible",we(z.focusVisible)],["_groupActive",De(z.active)],["_peerActive",we(z.active)],["_groupDisabled",De(z.disabled)],["_peerDisabled",we(z.disabled)],["_groupInvalid",De(z.invalid)],["_peerInvalid",we(z.invalid)],["_groupChecked",De(z.checked)],["_peerChecked",we(z.checked)],["_groupFocusWithin",De(z.focusWithin)],["_peerFocusWithin",we(z.focusWithin)],["_peerPlaceholderShown",we(z.placeholderShown)],["_placeholder","&::placeholder"],["_placeholderShown","&:placeholder-shown"],["_fullScreen","&:fullscreen"],["_selection","&::selection"],["_rtl","[dir=rtl] &, &[dir=rtl]"],["_ltr","[dir=ltr] &, &[dir=ltr]"],["_mediaDark","@media (prefers-color-scheme: dark)"],["_mediaReduceMotion","@media (prefers-reduced-motion: reduce)"],[ph,mh],[Cn,yh]]),_h=new Map([["borderX",["borderRight","borderLeft"]],["borderY",["borderTop","borderBottom"]],["bg",["background"]],["bgColor",["backgroundColor"]],["d",["display"]],["marginStart",["marginInlineStart"]],["marginEnd",["marginInlineEnd"]],["m",["margin"]],["mt",["marginTop"]],["mr",["marginRight"]],["me",["marginInlineEnd"]],["mb",["marginBottom"]],["ml",["marginLeft"]],["ms",["marginInlineStart"]],["mx",["marginInlineStart","marginInlineEnd"]],["my",["marginTop","marginBottom"]],["paddingStart",["paddingInlineStart"]],["paddingEnd",["paddingInlineEnd"]],["p",["padding"]],["pt",["paddingTop"]],["pr",["paddingRight"]],["pe",["paddingInlineEnd"]],["pb",["paddingBottom"]],["pl",["paddingLeft"]],["ps",["paddingInlineStart"]],["px",["paddingInlineStart","paddingInlineEnd"]],["py",["paddingTop","paddingBottom"]],["pos",["position"]],["borderTopRadius",["borderTopLeftRadius","borderTopRightRadius"]],["borderRightRadius",["borderTopRightRadius","borderBottomRightRadius"]],["borderBottomRadius",["borderBottomRightRadius","borderBottomLeftRadius"]],["borderLeftRadius",["borderTopLeftRadius","borderBottomLeftRadius"]],["rounded",["borderRadius"]],["roundedTop",["borderTopLeftRadius","borderTopRightRadius"]],["roundedRight",["borderTopRightRadius","borderBottomRightRadius"]],["roundedBottom",["borderBottomRightRadius","borderBottomLeftRadius"]],["roundedLeft",["borderTopLeftRadius","borderBottomLeftRadius"]],["shadow",["boxShadow"]],["w",["width"]],["minW",["minWidth"]],["maxW",["maxWidth"]],["h",["height"]],["minH",["minHeight"]],["maxH",["maxHeight"]],["boxSize",["width","height"]]]);/*!
 * Portions of this file are based on code from chakra-ui.
 * MIT Licensed, Copyright (c) 2019 Segun Adebayo.
 *
 * Credits to the Chakra UI team:
 * https://github.com/chakra-ui/chakra-ui/blob/9de39921b983ad0eb2df7195e3b683c2e2e9e290/packages/components/styled-system/src/utils/expand-responsive.ts
 */const vh=e=>t=>{if(!t.__breakpoints)return e;const{isResponsive:n,toArrayValue:r,medias:i}=t.__breakpoints,s={},o={};for(const a in e){let c=Ye(e[a],t);if(c==null||Nr(a,c,s))continue;if(c=ze(c)&&n(c)?r(c):c,!Array.isArray(c)){s[a]=c;continue}const l=c.slice(0,i.length).length;for(let u=0;u<l;u+=1){const d=i?.[u],h=c[u];if(h!=null){if(!d){Nr(a,h,s)||(s[a]=h);continue}o[d]=o[d]||{},Nr(a,h,o[d])||(o[d][a]=h)}}}return{...s,...o}};function Nr(e,t,n){if(!ze(t)||!hh(t))return!1;const{light:r,dark:i}=t;return r!=null&&(n[e]=r),n[Cn]=n[Cn]||{},i!=null&&(n[Cn][e]=i),!0}/*!
 * Original code by Chakra UI
 * MIT Licensed, Copyright (c) 2019 Segun Adebayo.
 *
 * Credits to the Chakra UI team:
 * https://github.com/chakra-ui/chakra-ui/blob/2283faae3e361a8978a93b0ef7fd43b637153555/packages/utilities/breakpoint-utils/src/breakpoint.ts
 */function wh(e){const t=parseFloat(e.toString()),n=e.toString().replace(String(t),"");return{unitless:!n,value:t,unit:n}}function $n(e){if(e==null)return e;const{unitless:t}=wh(e);return t||pa(e)?`${e}px`:e}const Ta=(e,t)=>parseInt(e[1],10)>parseInt(t[1],10)?1:-1,Mi=e=>Object.fromEntries(Object.entries(e).sort(Ta));function Ws(e){const t=Mi(e);return Object.assign(Object.values(t),t)}function Ih(e){const t=Object.keys(Mi(e));return new Set(t)}function Vs(e){if(!e)return e;e=$n(e)??e;const t=e.endsWith("px")?-1:-.0625;return pa(e)?`${e+t}`:e.replace(/(\d+\.?\d*)/u,n=>`${parseFloat(n)+t}`)}function yn(e,t){const n=["@media screen"];return e&&n.push("and",`(min-width: ${$n(e)})`),t&&n.push("and",`(max-width: ${$n(t)})`),n.join(" ")}function Eh(e){if(!e)return null;e.base=e.base??"0px";const t=Ws(e),n=Object.entries(e).sort(Ta).map(([s,o],a,c)=>{let[,l]=c[a+1]??[];return l=parseFloat(l)>0?Vs(l):void 0,{_minW:Vs(o),breakpoint:s,minW:o,maxW:l,maxWQuery:yn(null,l),minWQuery:yn(o),minMaxQuery:yn(o,l)}}),r=Ih(e),i=Array.from(r.values());return{keys:r,normalized:t,asObject:Mi(e),asArray:Ws(e),details:n,medias:[null,...t.map(s=>yn(s)).slice(1)],isResponsive(s){return gh(s,i)},toArrayValue(s){if(!ze(s))throw new Error("toArrayValue: value must be an object");return dh(s,i)},toObjectValue(s){if(!Array.isArray(s))throw new Error("toObjectValue: value must be an array");return fh(s,i)}}}/*!
 * Portions of this file are based on code from chakra-ui.
 * MIT Licensed, Copyright (c) 2019 Segun Adebayo.
 *
 * Credits to the Chakra UI team:
 * https://github.com/chakra-ui/chakra-ui/blob/7d7e04d53d871e324debe0a2cb3ff44d7dbf3bca/packages/components/styled-system/src/utils/create-transform.ts
 */const Sh=["colors","fonts","fontWeights","lineHeights","shadows","zIndices"],ka=/!(important)?$/;function Th(e){return ka.test(e)}function kh(e){return e.replace(ka,"").trim()}function Ch(e,t,n){if(e==null)return;const r=String(e),i=kh(r);let s=n[t][i]??Ou(n[t],i);return s==null&&(s=Sh.includes(t)?i:$n(i)),Th(r)?`${s} !important`:s}/*!
 * Original code by Chakra UI
 * MIT Licensed, Copyright (c) 2019 Segun Adebayo.
 *
 * Credits to the Chakra UI team:
 * https://github.com/chakra-ui/chakra-ui/blob/main/packages/styled-system/src/css.ts
 */function $i(e,t){const n={},r=vh(e)(t);for(let i in r){let s=Ye(r[i],t);if(s==null)continue;if(i.startsWith("_")){const a=bh.get(i);if(a==null)continue;i=a}if(ze(s)){n[i]=Object.assign({},n[i],$i(s,t));continue}const o=_h.get(i)??[i];for(const a of o){const c=t.themeMap[a];c!=null&&(s=Ch(s,c,t.vars)),n[a]=s}}return n}/*!
 * Original code by Mantinedev
 * MIT Licensed, Copyright (c) 2021 Vitaly Rtishchev.
 *
 * Credits to the Mantinedev team:
 * https://github.com/mantinedev/mantine/blob/8546c580fdcaa9653edc6f4813103349a96cfb09/src/mantine-styles/src/theme/utils/to-rgba/to-rgba.ts
 */function Ah(e){return/^#?([0-9A-F]{3}){1,2}$/i.test(e)}function Rh(e){let t=e.replace("#","");if(t.length===3){const o=t.split("");t=[o[0],o[0],o[1],o[1],o[2],o[2]].join("")}const n=parseInt(t,16),r=n>>16&255,i=n>>8&255,s=n&255;return{r,g:i,b:s,a:1}}function xh(e){const[t,n,r,i]=e.replace(/[^0-9,.]/g,"").split(",").map(Number);return{r:t,g:n,b:r,a:i||1}}function Oh(e){return Ah(e)?Rh(e):e.startsWith("rgb")?xh(e):{r:0,g:0,b:0,a:1}}function Dr(e){const{r:t,g:n,b:r}=Oh(e);return`${t} ${n} ${r}`}/*!
 * Original code by MUI
 * MIT Licensed, Copyright (c) 2014 Call-Em-All.
 *
 * Credits to the MUI team:
 * https://github.com/mui/material-ui/blob/master/packages/mui-joy/src/styles/extendTheme.ts
 */function at(e){return{...e,mainChannel:Dr(e[500]),lightChannel:Dr(e[100]),darkChannel:Dr(e[900])}}/*!
 * Original code by Chakra UI
 * MIT Licensed, Copyright (c) 2019 Segun Adebayo.
 *
 * Credits to the Chakra UI team:
 * https://github.com/chakra-ui/chakra-ui/blob/main/packages/styled-system/src/create-theme-vars/css-var.ts
 */const sr="hope";function Ph(e,t="-"){return e.replace(/\s+/g,t)}function Nh(e){const t=Ph(e.toString());return Lh(Dh(t))}function Dh(e){return e.includes("\\.")?e:!Number.isInteger(parseFloat(e.toString()))?e.replace(".","\\."):e}function Lh(e){return e.replace(/[!-,/:-@[-^`{-~]/g,"\\$&")}function Mh(e,t=""){return[t,e].filter(Boolean).join("-")}function $h(e,t){return`var(${e}${t?`, ${t}`:""})`}function Bh(e,t=""){return Nh(`--${Mh(e,t)}`)}function Uh(e,t,n=sr){const r=Bh(e,n);return{variable:r,reference:$h(r,t)}}function jh(e=sr){return t=>`var(--${e?`${e}-`:""}${t})`}/*!
 * Original code by Chakra UI
 * MIT Licensed, Copyright (c) 2019 Segun Adebayo.
 *
 * Credits to the Chakra UI team:
 * https://github.com/chakra-ui/chakra-ui/blob/main/packages/styled-system/src/create-theme-vars/create-theme-vars.ts
 */const Rt="__";function Lr(e,t,n){return Uh(String(t).replace(e,"-"),void 0,n)}function Fh(e,t){const n={},r={},i={},{colors:s,...o}=e,a={colors:s.light},c={colors:s.dark},l=Tn(a,Rt),u=Tn(c,Rt),d=Tn(o,Rt),h=new RegExp(`(${Rt}|\\.)`,"g");for(const[b,v]of Object.entries(l)){const{variable:y,reference:E}=Lr(h,b,t);n[y]=v,i[b]=E}for(const[b,v]of Object.entries(u)){const{variable:y}=Lr(h,b,t);r[y]=v}for(const[b,v]of Object.entries(d)){const{variable:y,reference:E}=Lr(h,b,t);n[y]=v,i[b]=E}const f=xu(i,Rt);return{cssVarsValues:{root:n,dark:r},vars:f}}/*!
 * Original code by Chakra UI
 * MIT Licensed, Copyright (c) 2019 Segun Adebayo.
 *
 * Credits to the Chakra UI team:
 * https://github.com/chakra-ui/chakra-ui/blob/main/packages/styled-system/src/create-theme-vars/to-css-var.ts
 */const Hh=["colors","fonts","fontSizes","fontWeights","lineHeights","letterSpacings","space","sizes","radii","shadows","zIndices","breakpoints"];function zh(e){return Pu(e,Hh)}function Wh(e){const{vars:t,__cssVarsValues:n,__breakpoints:r,...i}=e;return i}function Vh(e){const t=Wh(e),n=zh(t),{cssVarsValues:r,vars:i}=Fh(n,t.cssVarPrefix);return Object.assign(t,{vars:i,__cssVarsValues:r,__breakpoints:Eh(t.breakpoints)}),t}/*!
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
 */function Gh(e){const t=jh(e);return{light:{whiteAlpha:{50:"rgba(255, 255, 255, 0.04)",100:"rgba(255, 255, 255, 0.06)",200:"rgba(255, 255, 255, 0.08)",300:"rgba(255, 255, 255, 0.16)",400:"rgba(255, 255, 255, 0.24)",500:"rgba(255, 255, 255, 0.36)",600:"rgba(255, 255, 255, 0.48)",700:"rgba(255, 255, 255, 0.64)",800:"rgba(255, 255, 255, 0.80)",900:"rgba(255, 255, 255, 0.92)"},blackAlpha:{50:"rgba(0, 0, 0, 0.04)",100:"rgba(0, 0, 0, 0.06)",200:"rgba(0, 0, 0, 0.08)",300:"rgba(0, 0, 0, 0.16)",400:"rgba(0, 0, 0, 0.24)",500:"rgba(0, 0, 0, 0.36)",600:"rgba(0, 0, 0, 0.48)",700:"rgba(0, 0, 0, 0.64)",800:"rgba(0, 0, 0, 0.80)",900:"rgba(0, 0, 0, 0.92)"},primary:at({50:"#e6f6ff",100:"#bae3ff",200:"#7cc4fa",300:"#47a3f3",400:"#2186eb",500:"#0967d2",600:"#0552b5",700:"#03449e",800:"#01337d",900:"#002159"}),neutral:at({50:"#f9fafa",100:"#f4f5f6",200:"#e3e5e8",300:"#cfd3d8",400:"#9aa1ac",500:"#67707e",600:"#49505a",700:"#393e46",800:"#22252a",900:"#151619"}),success:at({50:"#e3f9e5",100:"#c1eac5",200:"#a3d9a5",300:"#7bc47f",400:"#57ae5b",500:"#3f9142",600:"#2f8132",700:"#207227",800:"#0e5814",900:"#05400a"}),info:at({50:"#eae2f8",100:"#cfbcf2",200:"#a081d9",300:"#8662c7",400:"#724bb7",500:"#653cad",600:"#51279b",700:"#421987",800:"#34126f",900:"#240754"}),warning:at({50:"#fffbea",100:"#fff3c4",200:"#fce588",300:"#fadb5f",400:"#f7c948",500:"#f0b429",600:"#de911d",700:"#cb6e17",800:"#b44d12",900:"#8d2b0b"}),danger:at({50:"#ffe3e3",100:"#ffbdbd",200:"#ff9b9b",300:"#f86a6a",400:"#ef4e4e",500:"#e12d39",600:"#cf1124",700:"#ab091e",800:"#8a041a",900:"#610316"}),common:{white:"#ffffff",black:"#121212",foreground:t("colors-neutral-800"),background:t("colors-common-white"),focusRing:t("colors-primary-500")}},dark:{common:{foreground:t("colors-neutral-200"),background:t("colors-neutral-900"),focusRing:t("colors-primary-600")}}}}/*!
 * Original code by WorkOS
 * MIT Licensed, Copyright (c) 2022 WorkOS.
 *
 * Credits to the WorkOS team:
 * https://github.com/stitchesjs/stitches/blob/96e8a523caf1724cf25bb0d07ee823365bbedd9c/packages/core/src/default/defaultThemeMap.js
 */const qh={gap:"space",gridGap:"space",columnGap:"space",gridColumnGap:"space",rowGap:"space",gridRowGap:"space",inset:"space",insetBlock:"space",insetBlockEnd:"space",insetBlockStart:"space",insetInline:"space",insetInlineEnd:"space",insetInlineStart:"space",margin:"space",marginTop:"space",marginRight:"space",marginBottom:"space",marginLeft:"space",marginBlock:"space",marginBlockEnd:"space",marginBlockStart:"space",marginInline:"space",marginInlineEnd:"space",marginInlineStart:"space",padding:"space",paddingTop:"space",paddingRight:"space",paddingBottom:"space",paddingLeft:"space",paddingBlock:"space",paddingBlockEnd:"space",paddingBlockStart:"space",paddingInline:"space",paddingInlineEnd:"space",paddingInlineStart:"space",top:"space",right:"space",bottom:"space",left:"space",background:"colors",backgroundColor:"colors",backgroundImage:"colors",borderImage:"colors",border:"colors",borderBlock:"colors",borderBlockEnd:"colors",borderBlockStart:"colors",borderBottom:"colors",borderBottomColor:"colors",borderColor:"colors",borderInline:"colors",borderInlineEnd:"colors",borderInlineStart:"colors",borderLeft:"colors",borderLeftColor:"colors",borderRight:"colors",borderRightColor:"colors",borderTop:"colors",borderTopColor:"colors",caretColor:"colors",color:"colors",columnRuleColor:"colors",fill:"colors",outline:"colors",outlineColor:"colors",stroke:"colors",textDecorationColor:"colors",fontFamily:"fonts",fontSize:"fontSizes",fontWeight:"fontWeights",lineHeight:"lineHeights",letterSpacing:"letterSpacings",borderWidth:"sizes",borderTopWidth:"sizes",borderRightWidth:"sizes",borderBottomWidth:"sizes",borderLeftWidth:"sizes",blockSize:"sizes",minBlockSize:"sizes",maxBlockSize:"sizes",inlineSize:"sizes",minInlineSize:"sizes",maxInlineSize:"sizes",width:"sizes",minWidth:"sizes",maxWidth:"sizes",height:"sizes",minHeight:"sizes",maxHeight:"sizes",flexBasis:"sizes",gridTemplateColumns:"sizes",gridTemplateRows:"sizes",strokeWidth:"sizes",borderRadius:"radii",borderTopLeftRadius:"radii",borderTopRightRadius:"radii",borderBottomRightRadius:"radii",borderBottomLeftRadius:"radii",boxShadow:"shadows",textShadow:"shadows",zIndex:"zIndices"},Gs={"0.5":"0.125rem",1:"0.25rem","1.5":"0.375rem",2:"0.5rem","2.5":"0.625rem",3:"0.75rem","3.5":"0.875rem",4:"1rem",5:"1.25rem",6:"1.5rem",7:"1.75rem",8:"2rem",9:"2.25rem",10:"2.5rem",12:"3rem",14:"3.5rem",16:"4rem",20:"5rem",24:"6rem",28:"7rem",32:"8rem",36:"9rem",40:"10rem",44:"11rem",48:"12rem",52:"13rem",56:"14rem",60:"15rem",64:"16rem",72:"18rem",80:"20rem",96:"24rem"},Kh={colors:Gh(sr),fonts:{sans:"ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'",serif:"ui-serif, Georgia, Cambria, 'Times New Roman', Times, serif",mono:"ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace"},fontSizes:{xs:"0.75rem",sm:"0.875rem",base:"1rem",lg:"1.125rem",xl:"1.25rem","2xl":"1.5rem","3xl":"1.875rem","4xl":"2.25rem","5xl":"3rem","6xl":"3.75rem","7xl":"4.5rem","8xl":"6rem","9xl":"8rem"},fontWeights:{hairline:100,thin:200,light:300,normal:400,medium:500,semibold:600,bold:700,extrabold:800,black:900},lineHeights:{none:1,shorter:1.25,short:1.375,base:1.5,tall:1.625,taller:2,3:"0.75rem",4:"1rem",5:"1.25rem",6:"1.5rem",7:"1.75rem",8:"2rem",9:"2.25rem",10:"2.5rem"},letterSpacings:{tighter:"-0.05em",tight:"-0.025em",normal:"0",wide:"0.025em",wider:"0.05em",widest:"0.1em"},space:Gs,sizes:{...Gs,max:"max-content",min:"min-content",full:"100%",screenW:"100vw",screenH:"100vh",xs:"20rem",sm:"24rem",md:"28rem",lg:"32rem",xl:"36rem","2xl":"42rem","3xl":"48rem","4xl":"56rem","5xl":"64rem","6xl":"72rem","7xl":"80rem","8xl":"90rem"},radii:{none:"0",xs:"0.125rem",sm:"0.25rem",md:"0.375rem",lg:"0.5rem",xl:"0.75rem","2xl":"1rem","3xl":"1.5rem",full:"9999px"},shadows:{none:"0 0 #0000",xs:"0px 1px 2px rgb(16 24 40 / 5%)",sm:"0px 1px 3px rgb(16 24 40 / 10%), 0px 1px 2px rgb(16 24 40 / 6%)",md:"0px 4px 8px -2px rgb(16 24 40 / 10%), 0px 2px 4px -2px rgb(16 24 40 / 6%)",lg:"0px 12px 16px -4px rgb(16 24 40 / 8%), 0px 4px 6px -2px rgb(16 24 40 / 3%)",xl:"0px 20px 24px -4px rgb(16 24 40 / 8%), 0px 8px 8px -4px rgb(16 24 40 / 3%)","2xl":"0px 24px 48px -12px rgb(16 24 40 / 18%)","3xl":"0px 32px 64px -12px rgb(16 24 40 / 14%)",inner:"inset 0 2px 4px 0 rgb(0 0 0 / 0.06)"},zIndices:{hide:-1,base:0,docked:10,sticky:1e3,banner:1100,overlay:1200,modal:1300,dropdown:1400,popover:1500,tooltip:1600,skipLink:1700,toast:1800},breakpoints:{base:"0px",sm:"640px",md:"768px",lg:"1024px",xl:"1280px","2xl":"1536px"}},Xh={...Kh,cssVarPrefix:sr,themeMap:qh,components:{}},Ca=Vh(Xh);function oi(e,t,n){if(typeof e=="object"&&typeof t=="object"){if(Array.isArray(e)&&Array.isArray(t))for(n=0;n<t.length;n++)e[n]=oi(e[n],t[n]);else for(n in t){if(n==="__proto__"||n==="constructor"||n==="prototype")break;e[n]=oi(e[n],t[n])}return e}return t}function qs(e,t,n){t.split&&(t=t.split("."));for(var r=0,i=t.length,s=e,o,a;r<i&&(a=t[r++],!(a==="__proto__"||a==="constructor"||a==="prototype"));)s=s[a]=r===i?oi(s[a],n):typeof(o=s[a])==typeof t?o:t[r]*0!==0||!!~(""+t[r]).indexOf(".")?{}:[]}/*!
 * Original code by Mantinedev
 * MIT Licensed, Copyright (c) 2021 Vitaly Rtishchev.
 *
 * Credits to the Mantinedev team:
 * https://github.com/mantinedev/mantine/tree/master/src/mantine-styles/src/theme/functions/fns/focus-styles
 */function Jh(e){return{WebkitTapHighlightColor:"transparent","&:focus":{outlineOffset:"2px",outline:`2px solid ${e.colors.common.focusRing}`},"&:focus:not(:focus-visible)":{outline:"none"}}}function Yh(e){Ia({":root":e.__cssVarsValues.root,[`.${qe.dark}`]:e.__cssVarsValues.dark})()}/*!
 * Portions of this file are based on code from joshua comeau css reset.
 *
 * Credits to Joshua Comeau:
 * https://www.joshwcomeau.com/css/custom-css-reset/#the-css-reset
 */function Qh(e){Ia({"*, *::before, *::after":{boxSizing:"border-box"},"*":{margin:0},html:{fontFamily:e.fonts.sans,lineHeight:e.lineHeights.base,fontSize:"16px"},body:{backgroundColor:e.colors.common.background,color:e.colors.common.foreground,fontFamily:"inherit",lineHeight:"inherit",WebkitFontSmoothing:"antialiased",MozOsxFontSmoothing:"grayscale"},"img, picture, video, canvas, svg":{display:"block",maxWidth:"100%"},"button, input, textarea, select":{font:"inherit"},"h1, h2, h3, h4, h5, h6":{font:"inherit"},"p, h1, h2, h3, h4, h5, h6":{overflowWrap:"break-word"}})()}const Aa=vt(Ca);function or(){return Xt(Aa)}function Zh(e){const t=or();return W(()=>{if(e!=null)return t.components[e]??void 0})}function Bi(e,t,n){const r=or();return X(t,()=>r.components[e]?.defaultProps??{},n)}function ed(e){const t=e.theme??Ca;return Yh(t),e.withCssReset&&Qh(t.vars),_(Aa.Provider,{value:t,get children(){return e.children}})}function Ra(e){var t,n,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=Ra(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function Ne(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=Ra(e))&&(r&&(r+=" "),r+=t);return r}function dt(e,t){return wa($i(e,t))().className}function ai(e,t){for(const n of Object.keys(e))if(e[n]!==t[n])return!1;return!0}/*!
 * Original code by SEEK
 * MIT Licensed, Copyright (c) 2021 SEEK.
 *
 * Credits to the SEEK team:
 * https://github.com/seek-oss/vanilla-extract/blob/master/packages/recipes/src/createRuntimeFn.ts
 */function Ks(e,t){return Object.entries(e).reduce((n,[r,i])=>{const{baseStyle:s={},variants:o={},compoundVariants:a=[]}=i;return n[r]={baseClassName:dt(s,t),variantClassNames:Object.entries(o).reduce((c,[l,u])=>(c[l]=Object.entries(u).reduce((d,[h,f])=>(d[h]=dt(f,t),d),{}),c),{}),compoundVariants:a.map(c=>[c.variants,dt(c.style,t)])},n},{})}function Ui(e,t){let n,r,i,s,o=[],a;const c=_a((l,u,d)=>{n=Ye(e,u),r=Ks(n,u),i=Ye(d,u),s=i&&Ks(i,u),o=Object.keys(n),a=Object.fromEntries(o.map(h=>[h,`hope-${l}-${h}`]))});return function(u,d){const h=or(),f=Zh(u);c(u,h,f()?.styleConfigOverride);const g=W(()=>Ye(d.styleConfigOverride,h)),b=W(()=>{const[E,A]=ce(d,["styleConfigOverride","unstyled"]);return{...t,...ii(A)}}),v=W(()=>o.reduce((E,A)=>{let T="",M={},x=[];d.unstyled||(T=r[A].baseClassName??"",M=r[A].variantClassNames??{},x=r[A].compoundVariants??[]);const D=s?.[A]?.baseClassName??"",N=s?.[A]?.variantClassNames??{},S=s?.[A]?.compoundVariants??[],k=[a[A],T,D];for(const R in b()){const j=b()[R];j!=null&&(k.push(M[R]?.[String(j)]),k.push(N[R]?.[String(j)]))}for(const[R,j]of[...x,...S])ai(R,b())&&k.push(j);return E[A]=Ne(...k),E},{})),y=W(()=>{const E=g();return E==null?{}:o.reduce((A,T)=>{const M=E[T]?.baseStyle??{},x=E[T]?.variants??{},D=E[T]?.compoundVariants??[];A[T]=M;for(const N in b()){const S=b()[N];if(S==null)continue;const k=x[N]?.[String(S)]??{};ya(k)||qs(A,T,k)}for(const N of D)ai(N.variants,b())&&qs(A,T,N.style);return A},{})});return{baseClasses:v,styleOverrides:y}}}/*!
 * Original code by SEEK
 * MIT Licensed, Copyright (c) 2021 SEEK.
 *
 * Credits to the SEEK team:
 * https://github.com/seek-oss/vanilla-extract/blob/master/packages/recipes/src/createRuntimeFn.ts
 */function td(e,t){const{baseStyle:n={},variants:r={},compoundVariants:i=[]}=e;return{baseClassName:dt(n,t),variantClassNames:Object.entries(r).reduce((s,[o,a])=>(s[o]=Object.entries(a).reduce((c,[l,u])=>(c[l]=dt(u,t),c),{}),s),{}),compoundVariants:i.map(s=>[s.variants,dt(s.style,t)])}}function nd(e,t){const{variantClassNames:n={},compoundVariants:r=[]}=e,i=[];for(const s in t){const o=t[s];o!=null&&i.push(n[s]?.[String(o)])}for(const[s,o]of r)ai(s,t)&&i.push(o);return i}const rd={border:!0,borderWidth:!0,borderStyle:!0,borderColor:!0,borderTop:!0,borderTopWidth:!0,borderTopStyle:!0,borderTopColor:!0,borderRight:!0,borderRightWidth:!0,borderRightStyle:!0,borderRightColor:!0,borderBottom:!0,borderBottomWidth:!0,borderBottomStyle:!0,borderBottomColor:!0,borderLeft:!0,borderLeftWidth:!0,borderLeftStyle:!0,borderLeftColor:!0,borderX:!0,borderY:!0},id={color:!0,background:!0,bg:!0,backgroundColor:!0,bgColor:!0,opacity:!0},sd={alignItems:!0,alignContent:!0,alignSelf:!0,justifyItems:!0,justifyContent:!0,justifySelf:!0,flexDirection:!0,flexWrap:!0,flex:!0,flexGrow:!0,flexShrink:!0,flexBasis:!0,order:!0},od={gridTemplate:!0,gridTemplateColumns:!0,gridTemplateRows:!0,gridTemplateAreas:!0,gridArea:!0,gridRow:!0,gridRowStart:!0,gridRowEnd:!0,gridColumn:!0,gridColumnStart:!0,gridColumnEnd:!0,gridAutoFlow:!0,gridAutoColumns:!0,gridAutoRows:!0,placeItems:!0,placeContent:!0,placeSelf:!0,gap:!0,rowGap:!0,columnGap:!0},ad={appearance:!0,userSelect:!0,pointerEvents:!0,resize:!0,cursor:!0,outline:!0,outlineOffset:!0,outlineColor:!0},cd={display:!0,d:!0,verticalAlign:!0,overflow:!0,overflowX:!0,overflowY:!0},ld={margin:!0,marginTop:!0,marginRight:!0,marginEnd:!0,marginBottom:!0,marginLeft:!0,marginStart:!0,m:!0,mt:!0,mr:!0,me:!0,mb:!0,ml:!0,ms:!0,mx:!0,my:!0},ud={padding:!0,paddingTop:!0,paddingRight:!0,paddingEnd:!0,paddingBottom:!0,paddingLeft:!0,paddingStart:!0,p:!0,pt:!0,pr:!0,pe:!0,pb:!0,pl:!0,ps:!0,px:!0,py:!0},hd={position:!0,pos:!0,zIndex:!0,top:!0,right:!0,bottom:!0,left:!0},dd={borderRadius:!0,borderTopRightRadius:!0,borderTopLeftRadius:!0,borderBottomRightRadius:!0,borderBottomLeftRadius:!0,borderTopRadius:!0,borderRightRadius:!0,borderBottomRadius:!0,borderLeftRadius:!0,rounded:!0,roundedTop:!0,roundedRight:!0,roundedBottom:!0,roundedLeft:!0},fd={textShadow:!0,boxShadow:!0,shadow:!0},gd={width:!0,minWidth:!0,maxWidth:!0,height:!0,minHeight:!0,maxHeight:!0,w:!0,minW:!0,maxW:!0,h:!0,minH:!0,maxH:!0,boxSize:!0},pd={transform:!0,transformOrigin:!0,clipPath:!0},md={transition:!0,transitionProperty:!0,transitionTimingFunction:!0,transitionDuration:!0,transitionDelay:!0,animation:!0,willChange:!0},yd={fontFamily:!0,fontSize:!0,fontWeight:!0,lineHeight:!0,letterSpacing:!0,textAlign:!0,fontStyle:!0,textTransform:!0,textDecoration:!0},bd={objectFit:!0,objectPosition:!0},_d={_hover:!0,_active:!0,_focus:!0,_highlighted:!0,_focusWithin:!0,_focusVisible:!0,_disabled:!0,_readOnly:!0,_before:!0,_after:!0,_empty:!0,_expanded:!0,_checked:!0,_grabbed:!0,_pressed:!0,_invalid:!0,_valid:!0,_loading:!0,_selected:!0,_hidden:!0,_autofill:!0,_even:!0,_odd:!0,_first:!0,_last:!0,_notFirst:!0,_notLast:!0,_visited:!0,_activeLink:!0,_activeStep:!0,_indeterminate:!0,_groupHover:!0,_peerHover:!0,_groupFocus:!0,_peerFocus:!0,_groupFocusVisible:!0,_peerFocusVisible:!0,_groupActive:!0,_peerActive:!0,_groupDisabled:!0,_peerDisabled:!0,_groupInvalid:!0,_peerInvalid:!0,_groupChecked:!0,_peerChecked:!0,_groupFocusWithin:!0,_peerFocusWithin:!0,_peerPlaceholderShown:!0,_placeholder:!0,_placeholderShown:!0,_fullScreen:!0,_selection:!0,_rtl:!0,_ltr:!0,_mediaDark:!0,_mediaReduceMotion:!0,_dark:!0,_light:!0},vd={...rd,...id,...sd,...od,...ad,...cd,...ld,...ud,...hd,...dd,...fd,...gd,...pd,...md,...yd,...bd,..._d};function wd(e){return Object.keys(e).filter(t=>t in vd)}const xa=new Map([["htmlWidth","width"],["htmlHeight","height"],["htmlSize","size"]]);function Id(e){return Object.entries(e).reduce((t,[n,r])=>{const i=xa.get(n);return i!=null&&r!=null&&(t[i]=r),t},{})}const Ed=wa({});function Mr(e,t,n){let r,i,s=[];const o=_a(c=>{t!=null&&(r=Ye(t,c),i=td(r,c),s=r.variants?Object.keys(r.variants):[])}),a=c=>{const l=or();o(l);const[u,d,h,f,g]=ce(c,["as","class","sx","__css"],[...xa.keys()],s,wd(c)),b=W(()=>{if(i==null)return[];const y={...r?.defaultVariants,...ii(h)};return nd(i,y)}),v=W(()=>{const y=Object.assign({},u.__css,ii(f),...ku(u.sx).map(E=>Ye(E,l)));if(!ya(y))return Ed({css:$i(y,l)}).className});return _(Su,X({get component(){return u.as??e},get class(){return Ne(n,i?.baseClassName,...b(),v(),u.class)||void 0}},()=>Id(d),g))};return n!=null&&(a.toString=()=>`.${n}`),a}function Sd(){const e=new Map;return new Proxy(Mr,{apply(t,n,r){return Mr(...r)},get(t,n){return e.has(n)||e.set(n,Mr(n)),e.get(n)}})}const he=Sd(),Td=Ea({from:{transform:"rotate(0deg)"},to:{transform:"rotate(360deg)"}});Ea({from:{opacity:0},to:{opacity:1}});/*!
 * Original code by Chakra UI
 * MIT Licensed, Copyright (c) 2019 Segun Adebayo.
 *
 * Credits to the Chakra UI team:
 * https://github.com/chakra-ui/chakra-ui/blob/main/packages/color-mode/src/color-mode-context.ts
 */const kd=vt();/*!
 * Original code by Chakra UI
 * MIT Licensed, Copyright (c) 2019 Segun Adebayo.
 *
 * Credits to the Chakra UI team:
 * https://github.com/chakra-ui/chakra-ui/blob/main/packages/color-mode/src/storage-manager.ts
 */const Cd="hope-ui-color-mode";function Ad(e){return{ssr:!1,type:"localStorage",get:t=>{let n;try{n=localStorage.getItem(e)}catch{}return n??t},set:t=>{try{localStorage.setItem(e,t)}catch{}}}}const Rd=Ad(Cd);/*!
 * Original code by Chakra UI
 * MIT Licensed, Copyright (c) 2019 Segun Adebayo.
 *
 * Credits to the Chakra UI team:
 * https://github.com/chakra-ui/chakra-ui/blob/main/packages/color-mode/src/color-mode.utils.ts
 */function Oa(){return window.matchMedia("(prefers-color-scheme: dark)")}function xd(){const e=document.createElement("style");return e.appendChild(document.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(e),()=>{window.getComputedStyle(document.body),requestAnimationFrame(()=>{requestAnimationFrame(()=>{document.head.removeChild(e)})})}}function Od(e){document.body.classList.add(e?qe.dark:qe.light),document.body.classList.remove(e?qe.light:qe.dark)}function Pd(e,t=!0){const n=t?xd():void 0;document.documentElement.dataset.theme=e,document.documentElement.style.colorScheme=e,n?.()}function Pa(e){return Oa().matches??e==="dark"?"dark":"light"}function Nd(e){const t="light",n=e.get(t)??t;return n==="system"?Pa():n}function Dd(e){const t=Oa(),n=r=>{e(r.matches?"dark":"light")};return t.addEventListener("change",n),()=>{t.removeEventListener("change",n)}}function Ld(e){const t=()=>e.storageManager??Rd;let n;const[r,i]=Ie(Nd(t())),s=l=>{i(l),Od(l==="dark"),Pd(l,e.disableTransitionOnChange)},o=l=>{n&&(n(),n=void 0);const u=l==="system";u&&(n=Dd(s)),s(u?Pa():l),t().set(l)},a=()=>{o(r()==="dark"?"light":"dark")};nr(()=>{o(t().get()??"system")}),sa(()=>{n?.()});const c={colorMode:r,setColorMode:o,toggleColorMode:a};return _(kd.Provider,{value:c,get children(){return e.children}})}function Md(e){return e==null?{}:{overflow:At(e,t=>t!=null?"hidden":void 0),textOverflow:At(e,t=>t!=null?"ellipsis":void 0),display:At(e,t=>t!=null?"-webkit-box":void 0),WebkitLineClamp:At(e,t=>t??void 0),WebkitBoxOrient:At(e,t=>t!=null?"vertical":void 0)}}function ji(e,t){return X(e,t)}function le(e,t){return`rgb(${e} / ${t})`}const $d=Jt('<svg><path fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"></path></svg>',4,!0),Xs={viewBox:"0 0 24 24",path:()=>$d.cloneNode(!0)},Js=he("svg",{baseStyle:{display:"inline-block",flexShrink:0,boxSize:"1em",color:"currentColor",lineHeight:"1em"}},"hope-Icon-root"),Bd=e=>{e=ji({children:Xs.path,viewBox:Xs.viewBox,color:"currentColor"},e);const[t,n]=ce(e,["as","children","viewBox"]),r=()=>t.as&&!ba(t.as);return _(me,{get when(){return r()},get fallback(){return _(Js,X({get viewBox(){return t.viewBox},verticalAlign:"middle"},n,{get children(){return t.children}}))},get children(){return _(Js,X({get as(){return t.as}},n))}})};function Na(e){const{viewBox:t="0 0 24 24",defaultProps:n={}}=e;return r=>_(Bd,X({viewBox:t},n,r,{get children(){return e.path}}))}const Ud=Jt('<svg><g fill="none"><path d="M12 19a7 7 0 1 0 0-14a7 7 0 0 0 0 14zm0 3c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10z" opacity="0.2" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path><path d="M2 12C2 6.477 6.477 2 12 2v3a7 7 0 0 0-7 7H2z" fill="currentColor"></path></g></svg>',8,!0),jd=Na({path:()=>Ud.cloneNode(!0)});/*!
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
 */const Fd=typeof document<"u"?document:void 0,Hd="body > :not(script, style)",$r='[aria-modal="true"], [data-ismodal="true"]';function Ys(e,t){const n=Array.from(e.querySelectorAll(Hd)).filter(r=>!r.contains(t)).map(r=>{const i=r.getAttribute("aria-hidden")||"";return r.setAttribute("aria-hidden","true"),{element:r,previousAriaHidden:i}});return()=>{n.forEach(({element:r,previousAriaHidden:i})=>{i?r.setAttribute("aria-hidden",i):r.removeAttribute("aria-hidden")})}}function zd(e="body",{document:t=Fd}={}){const n=t?.querySelector(e);if(t==null||n==null)return Ru;const r={childList:!0};let i=[],s;const o=new MutationObserver(a=>{for(const c of a)if(c.type==="childList"){if(c.addedNodes.length>0){const l=Array.from(c.addedNodes).find(u=>u.querySelector?.($r));if(l){i.push(l);const u=l.querySelector($r);s?.(),s=Ys(t,u)}}else if(c.removedNodes.length>0){const l=Array.from(c.removedNodes),u=i.findIndex(d=>l.includes(d));if(u>=0)if(s?.(),i=i.filter((d,h)=>h!==u),i.length>0){const d=i[i.length-1].querySelector($r);s=Ys(t,d)}else s=void 0}}});return o.observe(n,r),()=>{s?.(),o.disconnect()}}function Wd(e){zd(),e=ji({withCssReset:!0},e);const[t,n]=ce(e,["storageManager","disableTransitionOnChange"]);return _(Ld,{get storageManager(){return t.storageManager},get disableTransitionOnChange(){return t.disableTransitionOnChange},get children(){return _(ed,n)}})}/*!
 * Original code by Chakra UI
 * MIT Licensed, Copyright (c) 2019 Segun Adebayo.
 *
 * Credits to the Chakra UI team:
 * https://github.com/chakra-ui/chakra-ui/blob/main/packages/layout/src/box.tsx
 */const An=he("div"),ar=["primary","neutral","success","info","warning","danger"];function Vd(e){const t=[];for(const n of ar){const r=n==="neutral",i=n==="warning";t.push({variants:{variant:"solid",colorScheme:n},style:{color:i?e.colors[n][900]:"common.white",backgroundColor:e.colors[n][r?"800":i?"300":"500"],borderColor:e.colors[n][r?"800":i?"300":"500"],_hover:{color:i?e.colors[n][900]:"common.white",backgroundColor:e.colors[n][r?"700":i?"400":"600"],borderColor:e.colors[n][r?"700":i?"400":"600"]},_active:{color:i?e.colors[n][900]:"common.white",backgroundColor:e.colors[n][r?"600":i?"500":"700"],borderColor:e.colors[n][r?"600":i?"500":"700"]},_disabled:{color:"neutral.200",backgroundColor:"neutral.100",borderColor:"neutral.100"},_dark:{color:i?e.colors[n][900]:"whiteAlpha.900",backgroundColor:e.colors[n][i?"500":"700"],borderColor:e.colors[n][i?"500":"700"],_hover:{color:i?e.colors[n][900]:"whiteAlpha.900",backgroundColor:e.colors[n][i?"400":"600"],borderColor:e.colors[n][i?"400":"600"]},_active:{color:i?e.colors[n][900]:"whiteAlpha.900",backgroundColor:e.colors[n][i?"300":"500"],borderColor:e.colors[n][i?"300":"500"]},_disabled:{color:"whiteAlpha.300",backgroundColor:"whiteAlpha.100",borderColor:"transparent"}}}})}return t}function Gd(e){const t=[];for(const n of ar){const r=n==="neutral",i=n==="warning";t.push({variants:{variant:"soft",colorScheme:n},style:{color:e.colors[n][i?"900":"700"],backgroundColor:e.colors[n][r?"200":i?"100":"50"],borderColor:e.colors[n][r?"200":i?"100":"50"],_hover:{color:e.colors[n][i?"900":"800"],backgroundColor:e.colors[n][r?"300":i?"200":"100"],borderColor:e.colors[n][r?"300":i?"200":"100"]},_active:{color:e.colors[n][i?"900":"800"],backgroundColor:e.colors[n][r?"400":i?"300":"200"],borderColor:e.colors[n][r?"400":i?"300":"200"]},_disabled:{color:"neutral.200",backgroundColor:"neutral.50",borderColor:"neutral.50"},_dark:{color:e.colors[n][200],backgroundColor:le(e.colors[n].mainChannel,.2),borderColor:"transparent",_hover:{color:e.colors[n][200],backgroundColor:le(e.colors[n].mainChannel,.3),borderColor:"transparent"},_active:{color:e.colors[n][200],backgroundColor:le(e.colors[n].mainChannel,.4),borderColor:"transparent"},_disabled:{color:"whiteAlpha.200",backgroundColor:"whiteAlpha.50",borderColor:"transparent"}}}})}return t}function qd(e){const t=[];for(const n of ar){const r=n==="neutral",i=n==="warning";t.push({variants:{variant:"outlined",colorScheme:n},style:{color:e.colors[n][i?"800":"700"],backgroundColor:"transparent",borderColor:e.colors[n][r||i?"400":"300"],_hover:{color:e.colors[n][i?"800":"700"],backgroundColor:e.colors[n][r||i?"100":"50"],borderColor:e.colors[n][r||i?"500":"400"]},_active:{color:e.colors[n][i?"800":"700"],backgroundColor:e.colors[n][r||i?"200":"100"],borderColor:e.colors[n][r||i?"500":"400"]},_disabled:{color:"neutral.200",backgroundColor:"transparent",borderColor:"neutral.100"},_dark:{color:e.colors[n][200],backgroundColor:"transparent",borderColor:e.colors[n][800],_hover:{color:e.colors[n][200],backgroundColor:le(e.colors[n].mainChannel,.1),borderColor:e.colors[n][700]},_active:{color:e.colors[n][200],backgroundColor:le(e.colors[n].mainChannel,.2),borderColor:e.colors[n][700]},_disabled:{color:"whiteAlpha.200",backgroundColor:"transparent",borderColor:"whiteAlpha.50"}}}})}return t}function Kd(e){const t=[];for(const n of ar){const r=n==="neutral",i=n==="warning";t.push({variants:{variant:"plain",colorScheme:n},style:{color:e.colors[n][i?"800":"700"],backgroundColor:"transparent",borderColor:"transparent",_hover:{color:e.colors[n][i?"800":"700"],backgroundColor:e.colors[n][r||i?"100":"50"],borderColor:e.colors[n][r||i?"100":"50"]},_active:{color:e.colors[n][i?"800":"700"],backgroundColor:e.colors[n][r||i?"200":"100"],borderColor:e.colors[n][r||i?"200":"100"]},_disabled:{color:"neutral.200",backgroundColor:"transparent",borderColor:"transparent"},_dark:{color:e.colors[n][200],backgroundColor:"transparent",borderColor:"transparent",_hover:{color:e.colors[n][200],backgroundColor:le(e.colors[n].mainChannel,.1),borderColor:"transparent"},_active:{color:e.colors[n][200],backgroundColor:le(e.colors[n].mainChannel,.2),borderColor:"transparent"},_disabled:{color:"whiteAlpha.200",backgroundColor:"transparent",borderColor:"transparent"}}}})}return t}const Pt=new Map([["xs","7"],["sm","8"],["md","10"],["lg","12"]]);function Xd(){const e=[];for(const[t,n]of Pt)e.push({variants:{isIconButton:!0,size:t},style:{width:n,p:0}});return e}const Jd=Ui(({vars:e})=>({root:{baseStyle:{appearance:"none",position:"relative",display:"inline-flex",justifyContent:"center",alignItems:"center",gap:2,width:"auto",outline:"none",border:"1px solid transparent",borderRadius:"md",padding:0,fontFamily:"inherit",fontSize:"100%",fontWeight:"medium",lineHeight:"none",textDecoration:"none",userSelect:"none",whiteSpace:"nowrap",verticalAlign:"middle",transitionProperty:"color, background-color, border-color",transitionDuration:"250ms",_disabled:{cursor:"not-allowed"},_loading:{opacity:.8},...Jh(e)},variants:{variant:{default:{color:"neutral.800",backgroundColor:"common.white",borderColor:"neutral.300",_hover:{color:"neutral.800",backgroundColor:"neutral.100",borderColor:"neutral.300"},_active:{color:"neutral.800",backgroundColor:"neutral.200",borderColor:"neutral.400"},_disabled:{color:"neutral.200",backgroundColor:"transparent",borderColor:"neutral.100"},_dark:{color:"whiteAlpha.900",backgroundColor:"whiteAlpha.50",borderColor:"whiteAlpha.200",_hover:{color:"whiteAlpha.900",backgroundColor:"whiteAlpha.100",borderColor:"whiteAlpha.200"},_active:{color:"whiteAlpha.900",backgroundColor:"whiteAlpha.200",borderColor:"whiteAlpha.300"},_disabled:{color:"whiteAlpha.200",backgroundColor:"transparent",borderColor:"whiteAlpha.50"}}}},size:{xs:{height:Pt.get("xs"),px:3,fontSize:"xs"},sm:{height:Pt.get("sm"),px:4,fontSize:"sm"},md:{height:Pt.get("md"),px:5,fontSize:"base"},lg:{height:Pt.get("lg"),px:6,fontSize:"lg"}},isFullWidth:{true:{display:"flex",width:"100%"}}},compoundVariants:[...Vd(e),...Gd(e),...qd(e),...Kd(e),...Xd()]},icon:{baseStyle:{display:"inline-flex",alignSelf:"center",flexShrink:0}},leftIcon:{},rightIcon:{},loaderWrapper:{baseStyle:{position:"absolute",display:"flex",alignItems:"center",flexShrink:0,fontSize:"1em",lineHeight:"normal"}},loaderIcon:{baseStyle:{fontSize:"1.3em",animation:`1s linear infinite ${Td}`}}}),{variant:"default",colorScheme:"primary",size:"md"}),Da=vt();function Fi(){const e=Xt(Da);if(!e)throw new Error("[hope-ui]: `useButtonContext` must be used within a `Button` component");return e}he("div",{baseStyle:{display:"inline-flex","& > *:focus":{zIndex:1}},variants:{orientation:{horizontal:{flexDirection:"row","& > *:first-of-type:not(:last-of-type)":{borderRightRadius:0},"& > *:not(:first-of-type):not(:last-of-type)":{borderRadius:0,marginLeft:"-1px"},"& > *:not(:first-of-type):last-of-type":{borderLeftRadius:0,marginLeft:"-1px"}},vertical:{flexDirection:"column","& > *:first-of-type:not(:last-of-type)":{borderBottomRadius:0},"& > *:not(:first-of-type):not(:last-of-type)":{borderRadius:0,marginTop:"-1px"},"& > *:not(:first-of-type):last-of-type":{borderTopRadius:0,marginTop:"-1px"}}}},defaultVariants:{orientation:"horizontal"}},"hope-ButtonGroup-root");const Yd=vt();function Qd(){return Xt(Yd)}const Qs=e=>{const t=Fi(),[n,r]=ce(e,["class","__css"]);return _(he.span,X({"aria-hidden":!0,get class(){return Ne(t.baseClasses().icon,n.class)},get __css(){return{...t.styleOverrides().icon,...n.__css}}},r))},Zs=e=>{const t=Fi(),[n,r]=ce(e,["class","children","hasLoadingText"]);return _(he.div,X({get class(){return Ne(t.baseClasses().loaderWrapper,n.class)},get position(){return n.hasLoadingText?"relative":"absolute"},get __css(){return t.styleOverrides().loaderWrapper}},r,{get children(){return _(me,{get when(){return n.children},get fallback(){return _(jd,{get class(){return t.baseClasses().loaderIcon},get __css(){return t.styleOverrides().loaderIcon}})},get children(){return n.children}})}}))};/*!
 * Original code by Ariakit
 * MIT Licensed, Copyright (c) Diego Haz.
 *
 * Credits to the Ariakit team:
 * https://github.com/ariakit/ariakit/blob/main/packages/ariakit-utils/src/dom.ts
 */const Zd=["button","color","file","image","reset","submit"];function eo(e){const t=e.tagName.toLowerCase();return t==="button"?!0:t==="input"&&e.type?Zd.indexOf(e.type)!==-1:!1}const ef=Jt("<span></span>"),tf=e=>{let t;const n=Qd(),r=ji({get variant(){return n?.variant},get colorScheme(){return n?.colorScheme},get size(){return n?.size},get isDisabled(){return n?.isDisabled}},e);e=Bi("Button",{loaderPlacement:"start"},r);const[i,s,o,a]=ce(e,["ref","class","type","as","isLoading","loaderPlacement","loadingText","loader","isDisabled"],["children","leftIcon","rightIcon"],[...Li,"colorScheme","variant","size","isFullWidth","isIconButton"]),c=Lu(()=>t,()=>e.as||"button"),[l,u]=Ie(c()!=null&&eo({tagName:c(),type:i.type})),d=W(()=>i.type!=null?i.type:l()?"button":void 0),{baseClasses:h,styleOverrides:f}=Jd("Button",o);return Kl(()=>{t!=null&&u(eo(t))}),_(Da.Provider,{value:{baseClasses:h,styleOverrides:f},get children(){return _(he.button,X({get as(){return i.as},ref(g){const b=Au(v=>t=v,i.ref);typeof b=="function"&&b(g)},get role(){return!l()&&c()!=="a"?"button":void 0},get type(){return d()},get tabIndex(){return l()?void 0:0},get disabled(){return i.isDisabled},get["data-loading"](){return i.isLoading||void 0},get class(){return Ne(h().root,i.class)},get __css(){return f().root}},a,{get children(){return[_(me,{get when(){return i.isLoading&&i.loaderPlacement==="start"},get children(){return _(Zs,{get hasLoadingText(){return!!i.loadingText},get children(){return i.loader}})}}),_(me,{get when(){return i.isLoading},get fallback(){return _(to,s)},get children(){return _(me,{get when(){return i.loadingText},get fallback(){return(()=>{const g=ef.cloneNode(!0);return g.style.setProperty("opacity","0"),Ni(g,_(to,s)),g})()},get children(){return i.loadingText}})}}),_(me,{get when(){return i.isLoading&&i.loaderPlacement==="end"},get children(){return _(Zs,{get hasLoadingText(){return!!i.loadingText},get children(){return i.loader}})}})]}}))}})};function to(e){const t=Fi();return[_(me,{get when(){return e.leftIcon},get children(){return _(Qs,{get class(){return t.baseClasses().leftIcon},get __css(){return t.styleOverrides().leftIcon},get children(){return e.leftIcon}})}}),W(()=>e.children),_(me,{get when(){return e.rightIcon},get children(){return _(Qs,{get class(){return t.baseClasses().rightIcon},get __css(){return t.styleOverrides().rightIcon},get children(){return e.rightIcon}})}})]}const nf=e=>_(tf,X({isIconButton:!0},e)),rf=e=>{const[t,n]=ce(e,["class","direction","wrap","align","justify"]);return _(he.div,X({get class(){return Ne("hope-Flex-root",t.class)},get __css(){return{display:"flex",flexDirection:t.direction,flexWrap:t.wrap,alignItems:t.align,justifyContent:t.justify}}},n))},sf=vt();function of(){return Xt(sf)}const af=Ui({root:{baseStyle:{margin:0,fontSize:"inherit",fontWeight:"semibold",lineHeight:"inherit"},variants:{size:{xs:{fontSize:"xs",lineHeight:4},sm:{fontSize:"sm",lineHeight:5},base:{fontSize:"base",lineHeight:6},lg:{fontSize:"lg",lineHeight:7},xl:{fontSize:"xl",lineHeight:7},"2xl":{fontSize:"2xl",lineHeight:8},"3xl":{fontSize:"3xl",lineHeight:9},"4xl":{fontSize:"4xl",lineHeight:10},"5xl":{fontSize:"5xl",lineHeight:"none"},"6xl":{fontSize:"6xl",lineHeight:"none"},"7xl":{fontSize:"7xl",lineHeight:"none"},"8xl":{fontSize:"8xl",lineHeight:"none"},"9xl":{fontSize:"9xl",lineHeight:"none"}}}}}),cf=e=>{e=Bi("Heading",{},e);const[t,n,r]=ce(e,["as","class","level","lineClamp"],[...Li,"size"]),{baseClasses:i,styleOverrides:s}=af("Heading",n),o=()=>t.level?`h${t.level}`:t.as,a=W(()=>({...s().root,...Md(t.lineClamp)}));return _(he.h2,X({get as(){return o()},get class(){return Ne(i().root,t.class)},get __css(){return a()}},r))};/*!
 * Portions of this file are based on code from chakra-ui.
 * MIT Licensed, Copyright (c) 2019 Segun Adebayo.
 *
 * Credits to the Chakra UI team:
 * https://github.com/chakra-ui/chakra-ui/blob/7d7e04d53d871e324debe0a2cb3ff44d7dbf3bca/packages/components/image/src/use-image.ts
 */function lf(e){const[t,n]=Ie("pending"),r=()=>e.ignoreFallback?"loaded":t();let i=null;const s=()=>{i&&(i.onload=null,i.onerror=null,i=null)},o=()=>{if(!e.src)return;s();const a=new Image;a.src=e.src,e.crossOrigin&&(a.crossOrigin=e.crossOrigin),e.srcSet&&(a.srcset=e.srcSet),e.sizes&&(a.sizes=e.sizes),e.loading&&(a.loading=e.loading),a.onload=c=>{s(),n("loaded"),$s(e.onLoad,c)},a.onerror=c=>{s(),n("failed"),$s(e.onError,c)},i=a};return nr(()=>{n(e.src?"loading":"pending")}),je(()=>{e.ignoreFallback||(t()==="loading"&&o(),sa(()=>{s()}))}),r}const uf=e=>{const[t,n,r]=ce(e,["class","fallbackSrc","fallback","src","srcSet","align","fit","loading","ignoreFallback","crossOrigin"],["onError","onLoad"]),i=()=>t.loading!=null||t.ignoreFallback||t.fallbackSrc===void 0&&t.fallback===void 0,s=lf(X(e,{get ignoreFallback(){return i()}})),o=()=>({objectFit:t.fit,objectPosition:t.align,...i()?n:{},...r});return _(me,{get when(){return s()==="loaded"},get fallback(){return _(me,{get when(){return t.fallback},get fallback(){return _(he.img,X({get src(){return t.fallbackSrc},class:"hope-Image-placeholder"},o))},get children(){return t.fallback}})},get children(){return _(he.img,X({get src(){return t.src},get srcSet(){return t.srcSet},get crossOrigin(){return t.crossOrigin},get loading(){return t.loading},get class(){return Ne("hope-Image-root",t.class)}},o))}})},hf={variant:"outlined",size:"md"},Br={sm:{minHeight:8,fontSize:"sm",lineHeight:5},md:{minHeight:10,fontSize:"base",lineHeight:6},lg:{minHeight:12,fontSize:"lg",lineHeight:7}},df=Ui(({vars:e})=>({root:{baseStyle:{appearance:"none",position:"relative",width:"100%",minWidth:0,outline:"none",borderRadius:"sm",border:"1px solid transparent",backgroundColor:"transparent",padding:0,color:"common.foreground",fontSize:"base",lineHeight:"base",transitionProperty:"color, border-color, background-color, box-shadow 250ms",transitionDuration:"250ms","&::placeholder":{color:"neutral.500",opacity:1},"&[readonly]":{boxShadow:"none !important",userSelect:"all",cursor:"default"},"&:disabled":{opacity:.4,cursor:"not-allowed"},"&:focus":{boxShadow:{light:`0 0 0 3px ${le(e.colors.primary.lightChannel,.75)}`,dark:`0 0 0 3px ${le(e.colors.primary.darkChannel,.75)}`},borderColor:{light:"primary.400",dark:"primary.600"}},"&[aria-invalid=true]":{borderColor:{light:"danger.400",dark:"danger.600"}},"&[aria-invalid=true]:focus":{boxShadow:{light:`0 0 0 3px ${le(e.colors.danger.lightChannel,.75)}`,dark:`0 0 0 3px ${le(e.colors.danger.darkChannel,.75)}`}}},variants:{variant:{filled:{backgroundColor:{light:"neutral.100",dark:"neutral.800"}},outlined:{border:{light:`1px solid ${e.colors.neutral[300]}`,dark:`1px solid ${e.colors.neutral[700]}`},backgroundColor:{light:"transparent",dark:"rgb(255 255 255 / 0.02)"}},plain:{backgroundColor:"transparent"}},size:{sm:{...Br.sm,px:2.5},md:{...Br.md,px:3},lg:{...Br.lg,px:4}}}}}),hf),ff=vt();function gf(){return Xt(ff)}const pf=e=>{const t=of(),n=gf();e=Bi("Input",{},e);const[r,i,s]=ce(e,["id","aria-describedby","class","__css","required","disabled","readonly","isRequired","isDisabled","isReadOnly","isInvalid","htmlSize"],[...Li,"variant","size"]),{baseClasses:o,styleOverrides:a}=df("Input",{get variant(){return n?.variant()??i.variant},get size(){return n?.size()??i.size},get styleConfigOverride(){return i.styleConfigOverride},get unstyled(){return n?.unstyled()??i.unstyled}}),c=()=>r.isRequired??n?.isRequired()??t?.isRequired(),l=()=>r.isDisabled??n?.isDisabled()??t?.isDisabled(),u=()=>r.isReadOnly??n?.isReadOnly()??t?.isReadOnly(),d=()=>r.isInvalid??n?.isInvalid()??t?.isInvalid(),h=()=>t?.mergeAriaDescribedBy(r["aria-describedby"]);return _(he.input,X({type:"text",get id(){return r.id??t?.id()},get required(){return c()},get disabled(){return l()},get readOnly(){return u()},get["aria-invalid"](){return Cu(d())},get["aria-describedby"](){return h()},get size(){return r.htmlSize},get class(){return Ne(n?.baseClasses().input,o().root,r.class)},get __css(){return{...n?.styleOverrides().input,...a().root,...r.__css}}},s))};const mf="/assets/logo_sm.454a671e.png",yf=Jt('<svg><path fill="currentColor" stroke="currentColor" d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352c79.5 0 144-64.5 144-144s-64.5-144-144-144S64 128.5 64 208s64.5 144 144 144z"></path></svg>',4,!0),bf=Na({viewBox:"0 0 512 512",path:()=>yf.cloneNode(!0)});function _f(e){let t;return _(An,{display:"flex",flexDirection:"row",rounded:"lg",shadow:"lg",w:"full",bg:"white",_dark:{borderColor:"neutral.800",bg:"neutral.900"},get children(){return[_(pf,{placeholder:"hostname",ref(n){const r=t;typeof r=="function"?r(n):t=n}}),_(nf,{"aria-label":"Search",variant:"solid",onClick:n=>t&&e.handleHostname(t.value),get children(){return _(bf,{})}})]}})}function vf(e){return _(rf,{marginTop:4,alignItems:"center",get children(){return[_(An,{marginLeft:4,maxWidth:24,get children(){return _(uf,{src:mf,objectFit:"cover"})}}),_(An,{marginLeft:4,get children(){return _(cf,{level:1,size:"5xl",fontFamily:"mono",children:"DNSr"})}}),_(An,{marginLeft:4,width:"96",get children(){return _(_f,{get handleHostname(){return e.handleHostname}})}})]}})}/**
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
 */const La=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):(i&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},wf=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=e[n++];t[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=e[n++],o=e[n++],a=e[n++],c=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;t[r++]=String.fromCharCode(55296+(c>>10)),t[r++]=String.fromCharCode(56320+(c&1023))}else{const s=e[n++],o=e[n++];t[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return t.join("")},Hi={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const s=e[i],o=i+1<e.length,a=o?e[i+1]:0,c=i+2<e.length,l=c?e[i+2]:0,u=s>>2,d=(s&3)<<4|a>>4;let h=(a&15)<<2|l>>6,f=l&63;c||(f=64,o||(h=64)),r.push(n[u],n[d],n[h],n[f])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(La(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):wf(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const s=n[e.charAt(i++)],a=i<e.length?n[e.charAt(i)]:0;++i;const l=i<e.length?n[e.charAt(i)]:64;++i;const d=i<e.length?n[e.charAt(i)]:64;if(++i,s==null||a==null||l==null||d==null)throw Error();const h=s<<2|a>>4;if(r.push(h),l!==64){const f=a<<4&240|l>>2;if(r.push(f),d!==64){const g=l<<6&192|d;r.push(g)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},If=function(e){const t=La(e);return Hi.encodeByteArray(t,!0)},Bn=function(e){return If(e).replace(/\./g,"")},Ma=function(e){try{return Hi.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function Q(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Ef(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Q())}function Sf(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function Tf(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function kf(){const e=Q();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function zi(){return typeof indexedDB=="object"}function Cf(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;t(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){t(n)}})}function $a(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Af=()=>$a().__FIREBASE_DEFAULTS__,Rf=()=>{if(typeof process>"u"||typeof process.env>"u")return;const e=process.env.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},xf=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&Ma(e[1]);return t&&JSON.parse(t)},Wi=()=>{try{return Af()||Rf()||xf()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},Ba=e=>{var t,n;return(n=(t=Wi())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},Vi=e=>{const t=Ba(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),r]:[t.substring(0,n),r]},Of=()=>{var e;return(e=Wi())===null||e===void 0?void 0:e.config},Ua=e=>{var t;return(t=Wi())===null||t===void 0?void 0:t[`_${e}`]};/**
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
 */class $t{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
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
 */function ja(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=t||"demo-project",i=e.iat||0,s=e.sub||e.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},e),a="";return[Bn(JSON.stringify(n)),Bn(JSON.stringify(o)),a].join(".")}/**
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
 */const Pf="FirebaseError";class fe extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=Pf,Object.setPrototypeOf(this,fe.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,It.prototype.create)}}class It{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},i=`${this.service}/${t}`,s=this.errors[t],o=s?Nf(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new fe(i,a,r)}}function Nf(e,t){return e.replace(Df,(n,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const Df=/\{\$([^}]+)}/g;function Lf(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function Un(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const s=e[i],o=t[i];if(no(s)&&no(o)){if(!Un(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function no(e){return e!==null&&typeof e=="object"}/**
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
 */function Qt(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(i=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function Mf(e,t){const n=new $f(e,t);return n.subscribe.bind(n)}class $f{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(r=>{this.error(r)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,r){let i;if(t===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Bf(t,["next","error","complete"])?i=t:i={next:t,error:n,complete:r},i.next===void 0&&(i.next=Ur),i.error===void 0&&(i.error=Ur),i.complete===void 0&&(i.complete=Ur);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Bf(e,t){if(typeof e!="object"||e===null)return!1;for(const n of t)if(n in e&&typeof e[n]=="function")return!0;return!1}function Ur(){}/**
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
 */const Uf=function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,e=>{const t=Math.random()*16|0;return(e==="x"?t:t&3|8).toString(16)})};/**
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
 */const jf=1e3,Ff=2,Hf=4*60*60*1e3,zf=.5;function Wf(e,t=jf,n=Ff){const r=t*Math.pow(n,e),i=Math.round(zf*r*(Math.random()-.5)*2);return Math.min(Hf,r+i)}/**
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
 */function ge(e){return e&&e._delegate?e._delegate:e}class de{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const Ge="[DEFAULT]";/**
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
 */class Vf{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new $t;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t?.identifier),i=(n=t?.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(qf(t))try{this.getOrInitializeService({instanceIdentifier:Ge})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(t=Ge){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Ge){return this.instances.has(t)}getOptions(t=Ge){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(t,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(t),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&t(o,i),()=>{s.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(!!r)for(const i of r)try{i(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Gf(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=Ge){return this.component?this.component.multipleInstances?t:Ge:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Gf(e){return e===Ge?void 0:e}function qf(e){return e.instantiationMode==="EAGER"}/**
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
 */class Kf{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new Vf(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var O;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(O||(O={}));const Xf={debug:O.DEBUG,verbose:O.VERBOSE,info:O.INFO,warn:O.WARN,error:O.ERROR,silent:O.SILENT},Jf=O.INFO,Yf={[O.DEBUG]:"log",[O.VERBOSE]:"log",[O.INFO]:"info",[O.WARN]:"warn",[O.ERROR]:"error"},Qf=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),i=Yf[t];if(i)console[i](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class cr{constructor(t){this.name=t,this._logLevel=Jf,this._logHandler=Qf,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in O))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Xf[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,O.DEBUG,...t),this._logHandler(this,O.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,O.VERBOSE,...t),this._logHandler(this,O.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,O.INFO,...t),this._logHandler(this,O.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,O.WARN,...t),this._logHandler(this,O.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,O.ERROR,...t),this._logHandler(this,O.ERROR,...t)}}const Zf=(e,t)=>t.some(n=>e instanceof n);let ro,io;function eg(){return ro||(ro=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function tg(){return io||(io=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Fa=new WeakMap,ci=new WeakMap,Ha=new WeakMap,jr=new WeakMap,Gi=new WeakMap;function ng(e){const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("success",s),e.removeEventListener("error",o)},s=()=>{n(Fe(e.result)),i()},o=()=>{r(e.error),i()};e.addEventListener("success",s),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&Fa.set(n,e)}).catch(()=>{}),Gi.set(t,e),t}function rg(e){if(ci.has(e))return;const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("complete",s),e.removeEventListener("error",o),e.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",s),e.addEventListener("error",o),e.addEventListener("abort",o)});ci.set(e,t)}let li={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return ci.get(e);if(t==="objectStoreNames")return e.objectStoreNames||Ha.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Fe(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function ig(e){li=e(li)}function sg(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(Fr(this),t,...n);return Ha.set(r,t.sort?t.sort():[t]),Fe(r)}:tg().includes(e)?function(...t){return e.apply(Fr(this),t),Fe(Fa.get(this))}:function(...t){return Fe(e.apply(Fr(this),t))}}function og(e){return typeof e=="function"?sg(e):(e instanceof IDBTransaction&&rg(e),Zf(e,eg())?new Proxy(e,li):e)}function Fe(e){if(e instanceof IDBRequest)return ng(e);if(jr.has(e))return jr.get(e);const t=og(e);return t!==e&&(jr.set(e,t),Gi.set(t,e)),t}const Fr=e=>Gi.get(e);function ag(e,t,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(e,t),a=Fe(o);return r&&o.addEventListener("upgradeneeded",c=>{r(Fe(o.result),c.oldVersion,c.newVersion,Fe(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{s&&c.addEventListener("close",()=>s()),i&&c.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const cg=["get","getKey","getAll","getAllKeys","count"],lg=["put","add","delete","clear"],Hr=new Map;function so(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(Hr.get(t))return Hr.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=lg.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||cg.includes(n)))return;const s=async function(o,...a){const c=this.transaction(o,i?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),i&&c.done]))[0]};return Hr.set(t,s),s}ig(e=>({...e,get:(t,n,r)=>so(t,n)||e.get(t,n,r),has:(t,n)=>!!so(t,n)||e.has(t,n)}));/**
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
 */class ug{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(hg(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function hg(e){const t=e.getComponent();return t?.type==="VERSION"}const ui="@firebase/app",oo="0.8.4";/**
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
 */const nt=new cr("@firebase/app"),dg="@firebase/app-compat",fg="@firebase/analytics-compat",gg="@firebase/analytics",pg="@firebase/app-check-compat",mg="@firebase/app-check",yg="@firebase/auth",bg="@firebase/auth-compat",_g="@firebase/database",vg="@firebase/database-compat",wg="@firebase/functions",Ig="@firebase/functions-compat",Eg="@firebase/installations",Sg="@firebase/installations-compat",Tg="@firebase/messaging",kg="@firebase/messaging-compat",Cg="@firebase/performance",Ag="@firebase/performance-compat",Rg="@firebase/remote-config",xg="@firebase/remote-config-compat",Og="@firebase/storage",Pg="@firebase/storage-compat",Ng="@firebase/firestore",Dg="@firebase/firestore-compat",Lg="firebase",Mg="9.14.0";/**
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
 */const hi="[DEFAULT]",$g={[ui]:"fire-core",[dg]:"fire-core-compat",[gg]:"fire-analytics",[fg]:"fire-analytics-compat",[mg]:"fire-app-check",[pg]:"fire-app-check-compat",[yg]:"fire-auth",[bg]:"fire-auth-compat",[_g]:"fire-rtdb",[vg]:"fire-rtdb-compat",[wg]:"fire-fn",[Ig]:"fire-fn-compat",[Eg]:"fire-iid",[Sg]:"fire-iid-compat",[Tg]:"fire-fcm",[kg]:"fire-fcm-compat",[Cg]:"fire-perf",[Ag]:"fire-perf-compat",[Rg]:"fire-rc",[xg]:"fire-rc-compat",[Og]:"fire-gcs",[Pg]:"fire-gcs-compat",[Ng]:"fire-fst",[Dg]:"fire-fst-compat","fire-js":"fire-js",[Lg]:"fire-js-all"};/**
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
 */const jn=new Map,di=new Map;function Bg(e,t){try{e.container.addComponent(t)}catch(n){nt.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function _e(e){const t=e.name;if(di.has(t))return nt.debug(`There were multiple attempts to register component ${t}.`),!1;di.set(t,e);for(const n of jn.values())Bg(n,e);return!0}function it(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
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
 */const Ug={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},He=new It("app","Firebase",Ug);/**
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
 */class jg{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new de("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw He.create("app-deleted",{appName:this._name})}}/**
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
 */const Et=Mg;function za(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:hi,automaticDataCollectionEnabled:!1},t),i=r.name;if(typeof i!="string"||!i)throw He.create("bad-app-name",{appName:String(i)});if(n||(n=Of()),!n)throw He.create("no-options");const s=jn.get(i);if(s){if(Un(n,s.options)&&Un(r,s.config))return s;throw He.create("duplicate-app",{appName:i})}const o=new Kf(i);for(const c of di.values())o.addComponent(c);const a=new jg(n,r,o);return jn.set(i,a),a}function Zt(e=hi){const t=jn.get(e);if(!t&&e===hi)return za();if(!t)throw He.create("no-app",{appName:e});return t}function ie(e,t,n){var r;let i=(r=$g[e])!==null&&r!==void 0?r:e;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=t.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${t}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),nt.warn(a.join(" "));return}_e(new de(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
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
 */const Fg="firebase-heartbeat-database",Hg=1,Bt="firebase-heartbeat-store";let zr=null;function Wa(){return zr||(zr=ag(Fg,Hg,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(Bt)}}}).catch(e=>{throw He.create("idb-open",{originalErrorMessage:e.message})})),zr}async function zg(e){var t;try{return(await Wa()).transaction(Bt).objectStore(Bt).get(Va(e))}catch(n){if(n instanceof fe)nt.warn(n.message);else{const r=He.create("idb-get",{originalErrorMessage:(t=n)===null||t===void 0?void 0:t.message});nt.warn(r.message)}}}async function ao(e,t){var n;try{const i=(await Wa()).transaction(Bt,"readwrite");return await i.objectStore(Bt).put(t,Va(e)),i.done}catch(r){if(r instanceof fe)nt.warn(r.message);else{const i=He.create("idb-set",{originalErrorMessage:(n=r)===null||n===void 0?void 0:n.message});nt.warn(i.message)}}}function Va(e){return`${e.name}!${e.options.appId}`}/**
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
 */const Wg=1024,Vg=30*24*60*60*1e3;class Gg{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Kg(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=co();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=Vg}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const t=co(),{heartbeatsToSend:n,unsentEntries:r}=qg(this._heartbeatsCache.heartbeats),i=Bn(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function co(){return new Date().toISOString().substring(0,10)}function qg(e,t=Wg){const n=[];let r=e.slice();for(const i of e){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),lo(n)>t){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),lo(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Kg{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return zi()?Cf().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await zg(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return ao(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return ao(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function lo(e){return Bn(JSON.stringify({version:2,heartbeats:e})).length}/**
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
 */function Xg(e){_e(new de("platform-logger",t=>new ug(t),"PRIVATE")),_e(new de("heartbeat",t=>new Gg(t),"PRIVATE")),ie(ui,oo,e),ie(ui,oo,"esm2017"),ie("fire-js","")}Xg("");var Jg="firebase",Yg="9.14.0";/**
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
 */ie(Jg,Yg,"app");function qi(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n}function Ga(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Qg=Ga,qa=new It("auth","Firebase",Ga());/**
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
 */const uo=new cr("@firebase/auth");function Rn(e,...t){uo.logLevel<=O.ERROR&&uo.error(`Auth (${Et}): ${e}`,...t)}/**
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
 */function Re(e,...t){throw Ki(e,...t)}function ye(e,...t){return Ki(e,...t)}function Zg(e,t,n){const r=Object.assign(Object.assign({},Qg()),{[t]:n});return new It("auth","Firebase",r).create(t,{appName:e.name})}function Ki(e,...t){if(typeof e!="string"){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return qa.create(e,...t)}function w(e,t,...n){if(!e)throw Ki(t,...n)}function Ee(e){const t="INTERNAL ASSERTION FAILED: "+e;throw Rn(t),new Error(t)}function xe(e,t){e||Ee(t)}/**
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
 */const ho=new Map;function Se(e){xe(e instanceof Function,"Expected a class definition");let t=ho.get(e);return t?(xe(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,ho.set(e,t),t)}/**
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
 */function ep(e,t){const n=it(e,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Un(s,t??{}))return i;Re(i,"already-initialized")}return n.initialize({options:t})}function tp(e,t){const n=t?.persistence||[],r=(Array.isArray(n)?n:[n]).map(Se);t?.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,t?.popupRedirectResolver)}/**
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
 */function fi(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.href)||""}function np(){return fo()==="http:"||fo()==="https:"}function fo(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.protocol)||null}/**
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
 */function rp(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(np()||Sf()||"connection"in navigator)?navigator.onLine:!0}function ip(){if(typeof navigator>"u")return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}/**
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
 */class en{constructor(t,n){this.shortDelay=t,this.longDelay=n,xe(n>t,"Short delay should be less than long delay!"),this.isMobile=Ef()||Tf()}get(){return rp()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Xi(e,t){xe(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
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
 */class Ka{static initialize(t,n,r){this.fetchImpl=t,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Ee("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Ee("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Ee("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const sp={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
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
 */const op=new en(3e4,6e4);function ap(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function lr(e,t,n,r,i={}){return Xa(e,i,async()=>{let s={},o={};r&&(t==="GET"?o=r:s={body:JSON.stringify(r)});const a=Qt(Object.assign({key:e.config.apiKey},o)).slice(1),c=await e._getAdditionalHeaders();return c["Content-Type"]="application/json",e.languageCode&&(c["X-Firebase-Locale"]=e.languageCode),Ka.fetch()(Ja(e,e.config.apiHost,n,a),Object.assign({method:t,headers:c,referrerPolicy:"no-referrer"},s))})}async function Xa(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},sp),t);try{const i=new lp(e),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw bn(e,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw bn(e,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw bn(e,"email-already-in-use",o);if(c==="USER_DISABLED")throw bn(e,"user-disabled",o);const u=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw Zg(e,u,l);Re(e,u)}}catch(i){if(i instanceof fe)throw i;Re(e,"network-request-failed")}}async function cp(e,t,n,r,i={}){const s=await lr(e,t,n,r,i);return"mfaPendingCredential"in s&&Re(e,"multi-factor-auth-required",{_serverResponse:s}),s}function Ja(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?Xi(e.config,i):`${e.config.apiScheme}://${i}`}class lp{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(ye(this.auth,"network-request-failed")),op.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function bn(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=ye(e,t,r);return i.customData._tokenResponse=n,i}/**
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
 */async function up(e,t){return lr(e,"POST","/v1/accounts:delete",t)}async function hp(e,t){return lr(e,"POST","/v1/accounts:lookup",t)}/**
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
 */function Lt(e){if(!!e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function dp(e,t=!1){const n=ge(e),r=await n.getIdToken(t),i=Ji(r);w(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s?.sign_in_provider;return{claims:i,token:r,authTime:Lt(Wr(i.auth_time)),issuedAtTime:Lt(Wr(i.iat)),expirationTime:Lt(Wr(i.exp)),signInProvider:o||null,signInSecondFactor:s?.sign_in_second_factor||null}}function Wr(e){return Number(e)*1e3}function Ji(e){var t;const[n,r,i]=e.split(".");if(n===void 0||r===void 0||i===void 0)return Rn("JWT malformed, contained fewer than 3 sections"),null;try{const s=Ma(r);return s?JSON.parse(s):(Rn("Failed to decode base64 JWT payload"),null)}catch(s){return Rn("Caught error parsing JWT payload as JSON",(t=s)===null||t===void 0?void 0:t.toString()),null}}function fp(e){const t=Ji(e);return w(t,"internal-error"),w(typeof t.exp<"u","internal-error"),w(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
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
 */async function Ut(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof fe&&gp(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}function gp({code:e}){return e==="auth/user-disabled"||e==="auth/user-token-expired"}/**
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
 */class pp{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var n;if(t){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){var t;try{await this.user.getIdToken(!0)}catch(n){((t=n)===null||t===void 0?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Ya{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Lt(this.lastLoginAt),this.creationTime=Lt(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Fn(e){var t;const n=e.auth,r=await e.getIdToken(),i=await Ut(e,hp(n,{idToken:r}));w(i?.users.length,n,"internal-error");const s=i.users[0];e._notifyReloadListener(s);const o=!((t=s.providerUserInfo)===null||t===void 0)&&t.length?bp(s.providerUserInfo):[],a=yp(e.providerData,o),c=e.isAnonymous,l=!(e.email&&s.passwordHash)&&!a?.length,u=c?l:!1,d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Ya(s.createdAt,s.lastLoginAt),isAnonymous:u};Object.assign(e,d)}async function mp(e){const t=ge(e);await Fn(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function yp(e,t){return[...e.filter(r=>!t.some(i=>i.providerId===r.providerId)),...t]}function bp(e){return e.map(t=>{var{providerId:n}=t,r=qi(t,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function _p(e,t){const n=await Xa(e,{},async()=>{const r=Qt({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:s}=e.config,o=Ja(e,i,"/v1/token",`key=${s}`),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Ka.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class jt{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){w(t.idToken,"internal-error"),w(typeof t.idToken<"u","internal-error"),w(typeof t.refreshToken<"u","internal-error");const n="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):fp(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}async getToken(t,n=!1){return w(!this.accessToken||this.refreshToken,t,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await _p(t,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(t,n,r){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(t,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new jt;return r&&(w(typeof r=="string","internal-error",{appName:t}),o.refreshToken=r),i&&(w(typeof i=="string","internal-error",{appName:t}),o.accessToken=i),s&&(w(typeof s=="number","internal-error",{appName:t}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new jt,this.toJSON())}_performRefresh(){return Ee("not implemented")}}/**
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
 */function Le(e,t){w(typeof e=="string"||typeof e>"u","internal-error",{appName:t})}class Ze{constructor(t){var{uid:n,auth:r,stsTokenManager:i}=t,s=qi(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new pp(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Ya(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(t){const n=await Ut(this,this.stsTokenManager.getToken(this.auth,t));return w(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return dp(this,t)}reload(){return mp(this)}_assign(t){this!==t&&(w(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>Object.assign({},n)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){return new Ze(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(t){w(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let r=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),r=!0),n&&await Fn(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const t=await this.getIdToken();return await Ut(this,up(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){var r,i,s,o,a,c,l,u;const d=(r=n.displayName)!==null&&r!==void 0?r:void 0,h=(i=n.email)!==null&&i!==void 0?i:void 0,f=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,g=(o=n.photoURL)!==null&&o!==void 0?o:void 0,b=(a=n.tenantId)!==null&&a!==void 0?a:void 0,v=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,y=(l=n.createdAt)!==null&&l!==void 0?l:void 0,E=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:A,emailVerified:T,isAnonymous:M,providerData:x,stsTokenManager:D}=n;w(A&&D,t,"internal-error");const N=jt.fromJSON(this.name,D);w(typeof A=="string",t,"internal-error"),Le(d,t.name),Le(h,t.name),w(typeof T=="boolean",t,"internal-error"),w(typeof M=="boolean",t,"internal-error"),Le(f,t.name),Le(g,t.name),Le(b,t.name),Le(v,t.name),Le(y,t.name),Le(E,t.name);const S=new Ze({uid:A,auth:t,email:h,emailVerified:T,displayName:d,isAnonymous:M,photoURL:g,phoneNumber:f,tenantId:b,stsTokenManager:N,createdAt:y,lastLoginAt:E});return x&&Array.isArray(x)&&(S.providerData=x.map(k=>Object.assign({},k))),v&&(S._redirectEventId=v),S}static async _fromIdTokenResponse(t,n,r=!1){const i=new jt;i.updateFromServerResponse(n);const s=new Ze({uid:n.localId,auth:t,stsTokenManager:i,isAnonymous:r});return await Fn(s),s}}/**
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
 */class Qa{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}Qa.type="NONE";const go=Qa;/**
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
 */function xn(e,t,n){return`firebase:${e}:${t}:${n}`}class ft{constructor(t,n,r){this.persistence=t,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=xn(this.userKey,i.apiKey,s),this.fullPersistenceKey=xn("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?Ze._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,r="authUser"){if(!n.length)return new ft(Se(go),t,r);const i=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let s=i[0]||Se(go);const o=xn(r,t.config.apiKey,t.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){const d=Ze._fromJSON(t,u);l!==s&&(a=d),s=l;break}}catch{}const c=i.filter(l=>l._shouldAllowMigration);return!s._shouldAllowMigration||!c.length?new ft(s,t,r):(s=c[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==s)try{await l._remove(o)}catch{}})),new ft(s,t,r))}}/**
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
 */function po(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(tc(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(Za(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(rc(t))return"Blackberry";if(ic(t))return"Webos";if(Yi(t))return"Safari";if((t.includes("chrome/")||ec(t))&&!t.includes("edge/"))return"Chrome";if(nc(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=e.match(n);if(r?.length===2)return r[1]}return"Other"}function Za(e=Q()){return/firefox\//i.test(e)}function Yi(e=Q()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function ec(e=Q()){return/crios\//i.test(e)}function tc(e=Q()){return/iemobile/i.test(e)}function nc(e=Q()){return/android/i.test(e)}function rc(e=Q()){return/blackberry/i.test(e)}function ic(e=Q()){return/webos/i.test(e)}function ur(e=Q()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function vp(e=Q()){var t;return ur(e)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function wp(){return kf()&&document.documentMode===10}function sc(e=Q()){return ur(e)||nc(e)||ic(e)||rc(e)||/windows phone/i.test(e)||tc(e)}function Ip(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function oc(e,t=[]){let n;switch(e){case"Browser":n=po(Q());break;case"Worker":n=`${po(Q())}-${e}`;break;default:n=e}const r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${Et}/${r}`}/**
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
 */class Ep{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,n){const r=s=>new Promise((o,a)=>{try{const c=t(s);o(c)}catch(c){a(c)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(t){var n;if(this.auth.currentUser===t)return;const r=[];try{for(const i of this.queue)await i(t),i.onAbort&&r.push(i.onAbort)}catch(i){r.reverse();for(const s of r)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:(n=i)===null||n===void 0?void 0:n.message})}}}/**
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
 */class Sp{constructor(t,n,r){this.app=t,this.heartbeatServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new mo(this),this.idTokenSubscription=new mo(this),this.beforeStateQueue=new Ep(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=qa,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=Se(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await ft.create(this,t),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUser(t){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i?._redirectEventId,c=await this.tryRedirectSignIn(t);(!o||o===a)&&c?.user&&(i=c.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return w(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){var n;try{await Fn(t)}catch(r){if(((n=r)===null||n===void 0?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=ip()}async _delete(){this._deleted=!0}async updateCurrentUser(t){const n=t?ge(t):null;return n&&w(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&w(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(t){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Se(t))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new It("auth","Firebase",t())}onAuthStateChanged(t,n,r){return this.registerStateListener(this.authStateSubscription,t,n,r)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,r){return this.registerStateListener(this.idTokenSubscription,t,n,r)}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,n){const r=await this.getOrInitRedirectPersistenceManager(n);return t===null?r.removeCurrentUser():r.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&Se(t)||this._popupRedirectResolver;w(n,this,"argument-error"),this.redirectPersistenceManager=await ft.create(this,[Se(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===t?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return w(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?t.addObserver(n,r,i):t.addObserver(n)}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return w(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=oc(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());return r&&(n["X-Firebase-Client"]=r),n}}function Qi(e){return ge(e)}class mo{constructor(t){this.auth=t,this.observer=null,this.addObserver=Mf(n=>this.observer=n)}get next(){return w(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function Tp(e,t,n){const r=Qi(e);w(r._canInitEmulator,r,"emulator-config-failed"),w(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!!n?.disableWarnings,s=ac(t),{host:o,port:a}=kp(t),c=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||Cp()}function ac(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function kp(e){const t=ac(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:yo(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:yo(o)}}}function yo(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function Cp(){function e(){const t=document.createElement("p"),n=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",e):e())}/**
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
 */class cc{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return Ee("not implemented")}_getIdTokenResponse(t){return Ee("not implemented")}_linkToIdToken(t,n){return Ee("not implemented")}_getReauthenticationResolver(t){return Ee("not implemented")}}/**
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
 */async function gt(e,t){return cp(e,"POST","/v1/accounts:signInWithIdp",ap(e,t))}/**
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
 */const Ap="http://localhost";class rt extends cc{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const n=new rt(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):Re("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:r,signInMethod:i}=n,s=qi(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new rt(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(t){const n=this.buildRequest();return gt(t,n)}_linkToIdToken(t,n){const r=this.buildRequest();return r.idToken=n,gt(t,r)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,gt(t,n)}buildRequest(){const t={requestUri:Ap,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=Qt(n)}return t}}/**
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
 */class lc{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
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
 */class tn extends lc{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
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
 */class Me extends tn{constructor(){super("facebook.com")}static credential(t){return rt._fromParams({providerId:Me.PROVIDER_ID,signInMethod:Me.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Me.credentialFromTaggedObject(t)}static credentialFromError(t){return Me.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Me.credential(t.oauthAccessToken)}catch{return null}}}Me.FACEBOOK_SIGN_IN_METHOD="facebook.com";Me.PROVIDER_ID="facebook.com";/**
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
 */class $e extends tn{constructor(){super("google.com"),this.addScope("profile")}static credential(t,n){return rt._fromParams({providerId:$e.PROVIDER_ID,signInMethod:$e.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return $e.credentialFromTaggedObject(t)}static credentialFromError(t){return $e.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:r}=t;if(!n&&!r)return null;try{return $e.credential(n,r)}catch{return null}}}$e.GOOGLE_SIGN_IN_METHOD="google.com";$e.PROVIDER_ID="google.com";/**
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
 */class Be extends tn{constructor(){super("github.com")}static credential(t){return rt._fromParams({providerId:Be.PROVIDER_ID,signInMethod:Be.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Be.credentialFromTaggedObject(t)}static credentialFromError(t){return Be.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Be.credential(t.oauthAccessToken)}catch{return null}}}Be.GITHUB_SIGN_IN_METHOD="github.com";Be.PROVIDER_ID="github.com";/**
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
 */class Ue extends tn{constructor(){super("twitter.com")}static credential(t,n){return rt._fromParams({providerId:Ue.PROVIDER_ID,signInMethod:Ue.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return Ue.credentialFromTaggedObject(t)}static credentialFromError(t){return Ue.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=t;if(!n||!r)return null;try{return Ue.credential(n,r)}catch{return null}}}Ue.TWITTER_SIGN_IN_METHOD="twitter.com";Ue.PROVIDER_ID="twitter.com";/**
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
 */class bt{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,r,i=!1){const s=await Ze._fromIdTokenResponse(t,r,i),o=bo(r);return new bt({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(t,n,r){await t._updateTokensIfNecessary(r,!0);const i=bo(r);return new bt({user:t,providerId:i,_tokenResponse:r,operationType:n})}}function bo(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
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
 */class Hn extends fe{constructor(t,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Hn.prototype),this.customData={appName:t.name,tenantId:(s=t.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(t,n,r,i){return new Hn(t,n,r,i)}}function uc(e,t,n,r){return(t==="reauthenticate"?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Hn._fromErrorAndOperation(e,s,t,r):s})}async function Rp(e,t,n=!1){const r=await Ut(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return bt._forOperation(e,"link",r)}/**
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
 */async function xp(e,t,n=!1){var r;const{auth:i}=e,s="reauthenticate";try{const o=await Ut(e,uc(i,s,t,e),n);w(o.idToken,i,"internal-error");const a=Ji(o.idToken);w(a,i,"internal-error");const{sub:c}=a;return w(e.uid===c,i,"user-mismatch"),bt._forOperation(e,s,o)}catch(o){throw((r=o)===null||r===void 0?void 0:r.code)==="auth/user-not-found"&&Re(i,"user-mismatch"),o}}/**
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
 */async function Op(e,t,n=!1){const r="signIn",i=await uc(e,r,t),s=await bt._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(s.user),s}function Pp(e,t,n,r){return ge(e).onIdTokenChanged(t,n,r)}function Np(e,t,n){return ge(e).beforeAuthStateChanged(t,n)}const zn="__sak";/**
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
 */class hc{constructor(t,n){this.storageRetriever=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(zn,"1"),this.storage.removeItem(zn),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function Dp(){const e=Q();return Yi(e)||ur(e)}const Lp=1e3,Mp=10;class dc extends hc{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Dp()&&Ip(),this.fallbackToPolling=sc(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&t(n,i,r)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=t.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(t.newValue!==o)t.newValue!==null?this.storage.setItem(r,t.newValue):this.storage.removeItem(r);else if(this.localCache[r]===t.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);wp()&&s!==t.newValue&&t.newValue!==t.oldValue?setTimeout(i,Mp):i()}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:r}),!0)})},Lp)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}dc.type="LOCAL";const $p=dc;/**
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
 */class fc extends hc{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,n){}_removeListener(t,n){}}fc.type="SESSION";const gc=fc;/**
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
 */function Bp(e){return Promise.all(e.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class hr{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(i=>i.isListeningto(t));if(n)return n;const r=new hr(t);return this.receivers.push(r),r}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!o?.size)return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async l=>l(n.origin,s)),c=await Bp(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:c})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}hr.receivers=[];/**
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
 */function Zi(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(Math.random()*10);return e+n}/**
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
 */class Up{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,c)=>{const l=Zi("",20);i.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(d){const h=d;if(h.data.eventId===l)switch(h.data.status){case"ack":clearTimeout(u),s=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(h.data.response);break;default:clearTimeout(u),clearTimeout(s),c(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:t,eventId:l,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function be(){return window}function jp(e){be().location.href=e}/**
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
 */function pc(){return typeof be().WorkerGlobalScope<"u"&&typeof be().importScripts=="function"}async function Fp(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Hp(){var e;return((e=navigator?.serviceWorker)===null||e===void 0?void 0:e.controller)||null}function zp(){return pc()?self:null}/**
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
 */const mc="firebaseLocalStorageDb",Wp=1,Wn="firebaseLocalStorage",yc="fbase_key";class nn{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function dr(e,t){return e.transaction([Wn],t?"readwrite":"readonly").objectStore(Wn)}function Vp(){const e=indexedDB.deleteDatabase(mc);return new nn(e).toPromise()}function gi(){const e=indexedDB.open(mc,Wp);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const r=e.result;try{r.createObjectStore(Wn,{keyPath:yc})}catch(i){n(i)}}),e.addEventListener("success",async()=>{const r=e.result;r.objectStoreNames.contains(Wn)?t(r):(r.close(),await Vp(),t(await gi()))})})}async function _o(e,t,n){const r=dr(e,!0).put({[yc]:t,value:n});return new nn(r).toPromise()}async function Gp(e,t){const n=dr(e,!1).get(t),r=await new nn(n).toPromise();return r===void 0?null:r.value}function vo(e,t){const n=dr(e,!0).delete(t);return new nn(n).toPromise()}const qp=800,Kp=3;class bc{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await gi(),this.db)}async _withRetries(t){let n=0;for(;;)try{const r=await this._openDb();return await t(r)}catch(r){if(n++>Kp)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return pc()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=hr._getInstance(zp()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){var t,n;if(this.activeServiceWorker=await Fp(),!this.activeServiceWorker)return;this.sender=new Up(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);!r||((t=r[0])===null||t===void 0?void 0:t.fulfilled)&&((n=r[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||Hp()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await gi();return await _o(t,zn,"1"),await vo(t,zn),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>_o(r,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(r=>Gp(r,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>vo(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(i=>{const s=dr(i,!1).getAll();return new nn(s).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of t)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),qp)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}bc.type="LOCAL";const Xp=bc;/**
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
 */function Jp(){var e,t;return(t=(e=document.getElementsByTagName("head"))===null||e===void 0?void 0:e[0])!==null&&t!==void 0?t:document}function Yp(e){return new Promise((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=i=>{const s=ye("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",Jp().appendChild(r)})}function Qp(e){return`__${e}${Math.floor(Math.random()*1e6)}`}new en(3e4,6e4);/**
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
 */function Zp(e,t){return t?Se(t):(w(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}/**
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
 */class es extends cc{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return gt(t,this._buildIdpRequest())}_linkToIdToken(t,n){return gt(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return gt(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function em(e){return Op(e.auth,new es(e),e.bypassAuthState)}function tm(e){const{auth:t,user:n}=e;return w(n,t,"internal-error"),xp(n,new es(e),e.bypassAuthState)}async function nm(e){const{auth:t,user:n}=e;return w(n,t,"internal-error"),Rp(n,new es(e),e.bypassAuthState)}/**
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
 */class _c{constructor(t,n,r,i,s=!1){this.auth=t,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=t;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return em;case"linkViaPopup":case"linkViaRedirect":return nm;case"reauthViaPopup":case"reauthViaRedirect":return tm;default:Re(this.auth,"internal-error")}}resolve(t){xe(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){xe(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const rm=new en(2e3,1e4);class lt extends _c{constructor(t,n,r,i,s){super(t,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,lt.currentPopupAction&&lt.currentPopupAction.cancel(),lt.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return w(t,this.auth,"internal-error"),t}async onExecution(){xe(this.filter.length===1,"Popup operations only handle one event");const t=Zi();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(ye(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(ye(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,lt.currentPopupAction=null}pollUserCancellation(){const t=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ye(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(t,rm.get())};t()}}lt.currentPopupAction=null;/**
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
 */const im="pendingRedirect",On=new Map;class sm extends _c{constructor(t,n,r=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let t=On.get(this.auth._key());if(!t){try{const r=await om(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(r)}catch(n){t=()=>Promise.reject(n)}On.set(this.auth._key(),t)}return this.bypassAuthState||On.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function om(e,t){const n=lm(t),r=cm(e);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function am(e,t){On.set(e._key(),t)}function cm(e){return Se(e._redirectPersistence)}function lm(e){return xn(im,e.config.apiKey,e.name)}async function um(e,t,n=!1){const r=Qi(e),i=Zp(r,t),o=await new sm(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,t)),o}/**
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
 */const hm=10*60*1e3;class dm{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(t,r)&&(n=!0,this.sendToConsumer(t,r),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!fm(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){var r;if(t.error&&!vc(t)){const i=((r=t.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(ye(this.auth,i))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const r=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&r}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=hm&&this.cachedEventUids.clear(),this.cachedEventUids.has(wo(t))}saveEventToCache(t){this.cachedEventUids.add(wo(t)),this.lastProcessedEventTime=Date.now()}}function wo(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(t=>t).join("-")}function vc({type:e,error:t}){return e==="unknown"&&t?.code==="auth/no-auth-event"}function fm(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return vc(e);default:return!1}}/**
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
 */async function gm(e,t={}){return lr(e,"GET","/v1/projects",t)}/**
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
 */const pm=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,mm=/^https?/;async function ym(e){if(e.config.emulator)return;const{authorizedDomains:t}=await gm(e);for(const n of t)try{if(bm(n))return}catch{}Re(e,"unauthorized-domain")}function bm(e){const t=fi(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const o=new URL(e);return o.hostname===""&&r===""?n==="chrome-extension:"&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!mm.test(n))return!1;if(pm.test(e))return r===e;const i=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const _m=new en(3e4,6e4);function Io(){const e=be().___jsl;if(e?.H){for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}}function vm(e){return new Promise((t,n)=>{var r,i,s;function o(){Io(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Io(),n(ye(e,"network-request-failed"))},timeout:_m.get()})}if(!((i=(r=be().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)t(gapi.iframes.getContext());else if(!((s=be().gapi)===null||s===void 0)&&s.load)o();else{const a=Qp("iframefcb");return be()[a]=()=>{gapi.load?o():n(ye(e,"network-request-failed"))},Yp(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(t=>{throw Pn=null,t})}let Pn=null;function wm(e){return Pn=Pn||vm(e),Pn}/**
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
 */const Im=new en(5e3,15e3),Em="__/auth/iframe",Sm="emulator/auth/iframe",Tm={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},km=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Cm(e){const t=e.config;w(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?Xi(t,Sm):`https://${e.config.authDomain}/${Em}`,r={apiKey:t.apiKey,appName:e.name,v:Et},i=km.get(e.config.apiHost);i&&(r.eid=i);const s=e._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Qt(r).slice(1)}`}async function Am(e){const t=await wm(e),n=be().gapi;return w(n,e,"internal-error"),t.open({where:document.body,url:Cm(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Tm,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=ye(e,"network-request-failed"),a=be().setTimeout(()=>{s(o)},Im.get());function c(){be().clearTimeout(a),i(r)}r.ping(c).then(c,()=>{s(o)})}))}/**
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
 */const Rm={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},xm=500,Om=600,Pm="_blank",Nm="http://localhost";class Eo{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Dm(e,t,n,r=xm,i=Om){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},Rm),{width:r.toString(),height:i.toString(),top:s,left:o}),l=Q().toLowerCase();n&&(a=ec(l)?Pm:n),Za(l)&&(t=t||Nm,c.scrollbars="yes");const u=Object.entries(c).reduce((h,[f,g])=>`${h}${f}=${g},`,"");if(vp(l)&&a!=="_self")return Lm(t||"",a),new Eo(null);const d=window.open(t||"",a,u);w(d,e,"popup-blocked");try{d.focus()}catch{}return new Eo(d)}function Lm(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const Mm="__/auth/handler",$m="emulator/auth/handler";function So(e,t,n,r,i,s){w(e.config.authDomain,e,"auth-domain-config-required"),w(e.config.apiKey,e,"invalid-api-key");const o={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:Et,eventId:i};if(t instanceof lc){t.setDefaultLanguage(e.languageCode),o.providerId=t.providerId||"",Lf(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[c,l]of Object.entries(s||{}))o[c]=l}if(t instanceof tn){const c=t.getScopes().filter(l=>l!=="");c.length>0&&(o.scopes=c.join(","))}e.tenantId&&(o.tid=e.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];return`${Bm(e)}?${Qt(a).slice(1)}`}function Bm({config:e}){return e.emulator?Xi(e,$m):`https://${e.authDomain}/${Mm}`}/**
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
 */const Vr="webStorageSupport";class Um{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=gc,this._completeRedirectFn=um,this._overrideRedirectResult=am}async _openPopup(t,n,r,i){var s;xe((s=this.eventManagers[t._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=So(t,n,r,fi(),i);return Dm(t,o,Zi())}async _openRedirect(t,n,r,i){return await this._originValidation(t),jp(So(t,n,r,fi(),i)),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(xe(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(t);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(t){const n=await Am(t),r=new dm(t);return n.register("authEvent",i=>(w(i?.authEvent,t,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:r},this.iframes[t._key()]=n,r}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send(Vr,{type:Vr},i=>{var s;const o=(s=i?.[0])===null||s===void 0?void 0:s[Vr];o!==void 0&&n(!!o),Re(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=ym(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return sc()||Yi()||ur()}}const jm=Um;var To="@firebase/auth",ko="0.20.11";/**
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
 */class Fm{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(r=>{var i;t(((i=r)===null||i===void 0?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);!n||(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){w(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Hm(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function zm(e){_e(new de("auth",(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),{apiKey:s,authDomain:o}=r.options;return((a,c)=>{w(s&&!s.includes(":"),"invalid-api-key",{appName:a.name}),w(!o?.includes(":"),"argument-error",{appName:a.name});const l={apiKey:s,authDomain:o,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:oc(e)},u=new Sp(a,c,l);return tp(u,n),u})(r,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,r)=>{t.getProvider("auth-internal").initialize()})),_e(new de("auth-internal",t=>{const n=Qi(t.getProvider("auth").getImmediate());return(r=>new Fm(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),ie(To,ko,Hm(e)),ie(To,ko,"esm2017")}/**
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
 */const Wm=5*60,Vm=Ua("authIdTokenMaxAge")||Wm;let Co=null;const Gm=e=>async t=>{const n=t&&await t.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Vm)return;const i=n?.token;Co!==i&&(Co=i,await fetch(e,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function qm(e=Zt()){const t=it(e,"auth");if(t.isInitialized())return t.getImmediate();const n=ep(e,{popupRedirectResolver:jm,persistence:[Xp,$p,gc]}),r=Ua("authTokenSyncURL");if(r){const s=Gm(r);Np(n,s,()=>s(n.currentUser)),Pp(n,o=>s(o))}const i=Ba("auth");return i&&Tp(n,`http://${i}`),n}zm("Browser");var Km=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},m,ts=ts||{},I=Km||self;function Vn(){}function fr(e){var t=typeof e;return t=t!="object"?t:e?Array.isArray(e)?"array":t:"null",t=="array"||t=="object"&&typeof e.length=="number"}function rn(e){var t=typeof e;return t=="object"&&e!=null||t=="function"}function Xm(e){return Object.prototype.hasOwnProperty.call(e,Gr)&&e[Gr]||(e[Gr]=++Jm)}var Gr="closure_uid_"+(1e9*Math.random()>>>0),Jm=0;function Ym(e,t,n){return e.call.apply(e.bind,arguments)}function Qm(e,t,n){if(!e)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),e.apply(t,i)}}return function(){return e.apply(t,arguments)}}function J(e,t,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?J=Ym:J=Qm,J.apply(null,arguments)}function _n(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),e.apply(this,r)}}function G(e,t){function n(){}n.prototype=t.prototype,e.X=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.Wb=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return t.prototype[i].apply(r,o)}}function We(){this.s=this.s,this.o=this.o}var Zm=0;We.prototype.s=!1;We.prototype.na=function(){!this.s&&(this.s=!0,this.M(),Zm!=0)&&Xm(this)};We.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const wc=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if(typeof e=="string")return typeof t!="string"||t.length!=1?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1};function ns(e){const t=e.length;if(0<t){const n=Array(t);for(let r=0;r<t;r++)n[r]=e[r];return n}return[]}function Ao(e,t){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(fr(r)){const i=e.length||0,s=r.length||0;e.length=i+s;for(let o=0;o<s;o++)e[i+o]=r[o]}else e.push(r)}}function Y(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}Y.prototype.h=function(){this.defaultPrevented=!0};var e0=function(){if(!I.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{I.addEventListener("test",Vn,t),I.removeEventListener("test",Vn,t)}catch{}return e}();function Gn(e){return/^[\s\xa0]*$/.test(e)}var Ro=String.prototype.trim?function(e){return e.trim()}:function(e){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(e)[1]};function qr(e,t){return e<t?-1:e>t?1:0}function gr(){var e=I.navigator;return e&&(e=e.userAgent)?e:""}function pe(e){return gr().indexOf(e)!=-1}function rs(e){return rs[" "](e),e}rs[" "]=Vn;function t0(e){var t=i0;return Object.prototype.hasOwnProperty.call(t,9)?t[9]:t[9]=e(9)}var n0=pe("Opera"),Ft=pe("Trident")||pe("MSIE"),Ic=pe("Edge"),pi=Ic||Ft,Ec=pe("Gecko")&&!(gr().toLowerCase().indexOf("webkit")!=-1&&!pe("Edge"))&&!(pe("Trident")||pe("MSIE"))&&!pe("Edge"),r0=gr().toLowerCase().indexOf("webkit")!=-1&&!pe("Edge");function Sc(){var e=I.document;return e?e.documentMode:void 0}var mi;e:{var Kr="",Xr=function(){var e=gr();if(Ec)return/rv:([^\);]+)(\)|;)/.exec(e);if(Ic)return/Edge\/([\d\.]+)/.exec(e);if(Ft)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e);if(r0)return/WebKit\/(\S+)/.exec(e);if(n0)return/(?:Version)[ \/]?(\S+)/.exec(e)}();if(Xr&&(Kr=Xr?Xr[1]:""),Ft){var Jr=Sc();if(Jr!=null&&Jr>parseFloat(Kr)){mi=String(Jr);break e}}mi=Kr}var i0={};function s0(){return t0(function(){let e=0;const t=Ro(String(mi)).split("."),n=Ro("9").split("."),r=Math.max(t.length,n.length);for(let o=0;e==0&&o<r;o++){var i=t[o]||"",s=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],i[0].length==0&&s[0].length==0)break;e=qr(i[1].length==0?0:parseInt(i[1],10),s[1].length==0?0:parseInt(s[1],10))||qr(i[2].length==0,s[2].length==0)||qr(i[2],s[2]),i=i[3],s=s[3]}while(e==0)}return 0<=e})}I.document&&Ft&&Sc();function Ht(e,t){if(Y.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,r=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(Ec){e:{try{rs(t.nodeName);var i=!0;break e}catch{}i=!1}i||(t=null)}}else n=="mouseover"?t=e.fromElement:n=="mouseout"&&(t=e.toElement);this.relatedTarget=t,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=e.clientX!==void 0?e.clientX:e.pageX,this.clientY=e.clientY!==void 0?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType=typeof e.pointerType=="string"?e.pointerType:o0[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&Ht.X.h.call(this)}}G(Ht,Y);var o0={2:"touch",3:"pen",4:"mouse"};Ht.prototype.h=function(){Ht.X.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var sn="closure_listenable_"+(1e6*Math.random()|0),a0=0;function c0(e,t,n,r,i){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!r,this.ha=i,this.key=++a0,this.ba=this.ea=!1}function pr(e){e.ba=!0,e.listener=null,e.proxy=null,e.src=null,e.ha=null}function is(e,t,n){for(const r in e)t.call(n,e[r],r,e)}function Tc(e){const t={};for(const n in e)t[n]=e[n];return t}const xo="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function kc(e,t){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)e[n]=r[n];for(let s=0;s<xo.length;s++)n=xo[s],Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}}function mr(e){this.src=e,this.g={},this.h=0}mr.prototype.add=function(e,t,n,r,i){var s=e.toString();e=this.g[s],e||(e=this.g[s]=[],this.h++);var o=bi(e,t,r,i);return-1<o?(t=e[o],n||(t.ea=!1)):(t=new c0(t,this.src,s,!!r,i),t.ea=n,e.push(t)),t};function yi(e,t){var n=t.type;if(n in e.g){var r=e.g[n],i=wc(r,t),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(pr(t),e.g[n].length==0&&(delete e.g[n],e.h--))}}function bi(e,t,n,r){for(var i=0;i<e.length;++i){var s=e[i];if(!s.ba&&s.listener==t&&s.capture==!!n&&s.ha==r)return i}return-1}var ss="closure_lm_"+(1e6*Math.random()|0),Yr={};function Cc(e,t,n,r,i){if(r&&r.once)return Rc(e,t,n,r,i);if(Array.isArray(t)){for(var s=0;s<t.length;s++)Cc(e,t[s],n,r,i);return null}return n=cs(n),e&&e[sn]?e.N(t,n,rn(r)?!!r.capture:!!r,i):Ac(e,t,n,!1,r,i)}function Ac(e,t,n,r,i,s){if(!t)throw Error("Invalid event type");var o=rn(i)?!!i.capture:!!i,a=as(e);if(a||(e[ss]=a=new mr(e)),n=a.add(t,n,r,o,s),n.proxy)return n;if(r=l0(),n.proxy=r,r.src=e,r.listener=n,e.addEventListener)e0||(i=o),i===void 0&&(i=!1),e.addEventListener(t.toString(),r,i);else if(e.attachEvent)e.attachEvent(Oc(t.toString()),r);else if(e.addListener&&e.removeListener)e.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function l0(){function e(n){return t.call(e.src,e.listener,n)}const t=u0;return e}function Rc(e,t,n,r,i){if(Array.isArray(t)){for(var s=0;s<t.length;s++)Rc(e,t[s],n,r,i);return null}return n=cs(n),e&&e[sn]?e.O(t,n,rn(r)?!!r.capture:!!r,i):Ac(e,t,n,!0,r,i)}function xc(e,t,n,r,i){if(Array.isArray(t))for(var s=0;s<t.length;s++)xc(e,t[s],n,r,i);else r=rn(r)?!!r.capture:!!r,n=cs(n),e&&e[sn]?(e=e.i,t=String(t).toString(),t in e.g&&(s=e.g[t],n=bi(s,n,r,i),-1<n&&(pr(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete e.g[t],e.h--)))):e&&(e=as(e))&&(t=e.g[t.toString()],e=-1,t&&(e=bi(t,n,r,i)),(n=-1<e?t[e]:null)&&os(n))}function os(e){if(typeof e!="number"&&e&&!e.ba){var t=e.src;if(t&&t[sn])yi(t.i,e);else{var n=e.type,r=e.proxy;t.removeEventListener?t.removeEventListener(n,r,e.capture):t.detachEvent?t.detachEvent(Oc(n),r):t.addListener&&t.removeListener&&t.removeListener(r),(n=as(t))?(yi(n,e),n.h==0&&(n.src=null,t[ss]=null)):pr(e)}}}function Oc(e){return e in Yr?Yr[e]:Yr[e]="on"+e}function u0(e,t){if(e.ba)e=!0;else{t=new Ht(t,this);var n=e.listener,r=e.ha||e.src;e.ea&&os(e),e=n.call(r,t)}return e}function as(e){return e=e[ss],e instanceof mr?e:null}var Qr="__closure_events_fn_"+(1e9*Math.random()>>>0);function cs(e){return typeof e=="function"?e:(e[Qr]||(e[Qr]=function(t){return e.handleEvent(t)}),e[Qr])}function H(){We.call(this),this.i=new mr(this),this.P=this,this.I=null}G(H,We);H.prototype[sn]=!0;H.prototype.removeEventListener=function(e,t,n,r){xc(this,e,t,n,r)};function V(e,t){var n,r=e.I;if(r)for(n=[];r;r=r.I)n.push(r);if(e=e.P,r=t.type||t,typeof t=="string")t=new Y(t,e);else if(t instanceof Y)t.target=t.target||e;else{var i=t;t=new Y(r,e),kc(t,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=t.g=n[s];i=vn(o,r,!0,t)&&i}if(o=t.g=e,i=vn(o,r,!0,t)&&i,i=vn(o,r,!1,t)&&i,n)for(s=0;s<n.length;s++)o=t.g=n[s],i=vn(o,r,!1,t)&&i}H.prototype.M=function(){if(H.X.M.call(this),this.i){var e=this.i,t;for(t in e.g){for(var n=e.g[t],r=0;r<n.length;r++)pr(n[r]);delete e.g[t],e.h--}}this.I=null};H.prototype.N=function(e,t,n,r){return this.i.add(String(e),t,!1,n,r)};H.prototype.O=function(e,t,n,r){return this.i.add(String(e),t,!0,n,r)};function vn(e,t,n,r){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var i=!0,s=0;s<t.length;++s){var o=t[s];if(o&&!o.ba&&o.capture==n){var a=o.listener,c=o.ha||o.src;o.ea&&yi(e.i,o),i=a.call(c,r)!==!1&&i}}return i&&!r.defaultPrevented}var ls=I.JSON.stringify;function h0(){var e=Dc;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class d0{constructor(){this.h=this.g=null}add(t,n){const r=Pc.get();r.set(t,n),this.h?this.h.next=r:this.g=r,this.h=r}}var Pc=new class{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}(()=>new f0,e=>e.reset());class f0{constructor(){this.next=this.g=this.h=null}set(t,n){this.h=t,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function g0(e){I.setTimeout(()=>{throw e},0)}function Nc(e,t){_i||p0(),vi||(_i(),vi=!0),Dc.add(e,t)}var _i;function p0(){var e=I.Promise.resolve(void 0);_i=function(){e.then(m0)}}var vi=!1,Dc=new d0;function m0(){for(var e;e=h0();){try{e.h.call(e.g)}catch(n){g0(n)}var t=Pc;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}vi=!1}function yr(e,t){H.call(this),this.h=e||1,this.g=t||I,this.j=J(this.lb,this),this.l=Date.now()}G(yr,H);m=yr.prototype;m.ca=!1;m.R=null;m.lb=function(){if(this.ca){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-e):(this.R&&(this.g.clearTimeout(this.R),this.R=null),V(this,"tick"),this.ca&&(us(this),this.start()))}};m.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function us(e){e.ca=!1,e.R&&(e.g.clearTimeout(e.R),e.R=null)}m.M=function(){yr.X.M.call(this),us(this),delete this.g};function hs(e,t,n){if(typeof e=="function")n&&(e=J(e,n));else if(e&&typeof e.handleEvent=="function")e=J(e.handleEvent,e);else throw Error("Invalid listener argument");return 2147483647<Number(t)?-1:I.setTimeout(e,t||0)}function Lc(e){e.g=hs(()=>{e.g=null,e.i&&(e.i=!1,Lc(e))},e.j);const t=e.h;e.h=null,e.m.apply(null,t)}class y0 extends We{constructor(t,n){super(),this.m=t,this.j=n,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:Lc(this)}M(){super.M(),this.g&&(I.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function zt(e){We.call(this),this.h=e,this.g={}}G(zt,We);var Oo=[];function Mc(e,t,n,r){Array.isArray(n)||(n&&(Oo[0]=n.toString()),n=Oo);for(var i=0;i<n.length;i++){var s=Cc(t,n[i],r||e.handleEvent,!1,e.h||e);if(!s)break;e.g[s.key]=s}}function $c(e){is(e.g,function(t,n){this.g.hasOwnProperty(n)&&os(t)},e),e.g={}}zt.prototype.M=function(){zt.X.M.call(this),$c(this)};zt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function br(){this.g=!0}br.prototype.Aa=function(){this.g=!1};function b0(e,t,n,r,i,s){e.info(function(){if(e.g)if(s)for(var o="",a=s.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var d=u.split("_");o=2<=d.length&&d[1]=="type"?o+(u+"="+l+"&"):o+(u+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+t+`
`+n+`
`+o})}function _0(e,t,n,r,i,s,o){e.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+t+`
`+n+`
`+s+" "+o})}function ut(e,t,n,r){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+w0(e,n)+(r?" "+r:"")})}function v0(e,t){e.info(function(){return"TIMEOUT: "+t})}br.prototype.info=function(){};function w0(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n){for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var r=n[e];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return ls(n)}catch{return t}}var St={},Po=null;function ds(){return Po=Po||new H}St.Pa="serverreachability";function Bc(e){Y.call(this,St.Pa,e)}G(Bc,Y);function Wt(e){const t=ds();V(t,new Bc(t))}St.STAT_EVENT="statevent";function Uc(e,t){Y.call(this,St.STAT_EVENT,e),this.stat=t}G(Uc,Y);function ee(e){const t=ds();V(t,new Uc(t,e))}St.Qa="timingevent";function jc(e,t){Y.call(this,St.Qa,e),this.size=t}G(jc,Y);function on(e,t){if(typeof e!="function")throw Error("Fn must not be null and must be a function");return I.setTimeout(function(){e()},t)}var fs={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},I0={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function gs(){}gs.prototype.h=null;function No(e){return e.h||(e.h=e.i())}function E0(){}var an={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function ps(){Y.call(this,"d")}G(ps,Y);function ms(){Y.call(this,"c")}G(ms,Y);var wi;function _r(){}G(_r,gs);_r.prototype.g=function(){return new XMLHttpRequest};_r.prototype.i=function(){return{}};wi=new _r;function cn(e,t,n,r){this.l=e,this.j=t,this.m=n,this.U=r||1,this.S=new zt(this),this.O=S0,e=pi?125:void 0,this.T=new yr(e),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new Fc}function Fc(){this.i=null,this.g="",this.h=!1}var S0=45e3,Ii={},qn={};m=cn.prototype;m.setTimeout=function(e){this.O=e};function Ei(e,t,n){e.K=1,e.v=wr(Oe(t)),e.s=n,e.P=!0,Hc(e,null)}function Hc(e,t){e.F=Date.now(),ln(e),e.A=Oe(e.v);var n=e.A,r=e.U;Array.isArray(r)||(r=[String(r)]),Jc(n.i,"t",r),e.C=0,n=e.l.H,e.h=new Fc,e.g=yl(e.l,n?t:null,!e.s),0<e.N&&(e.L=new y0(J(e.La,e,e.g),e.N)),Mc(e.S,e.g,"readystatechange",e.ib),t=e.H?Tc(e.H):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.da(e.A,e.u,e.s,t)):(e.u="GET",e.g.da(e.A,e.u,null,t)),Wt(),b0(e.j,e.u,e.A,e.m,e.U,e.s)}m.ib=function(e){e=e.target;const t=this.L;t&&Te(e)==3?t.l():this.La(e)};m.La=function(e){try{if(e==this.g)e:{const u=Te(this.g);var t=this.g.Ea();const d=this.g.aa();if(!(3>u)&&(u!=3||pi||this.g&&(this.h.h||this.g.fa()||$o(this.g)))){this.I||u!=4||t==7||(t==8||0>=d?Wt(3):Wt(2)),vr(this);var n=this.g.aa();this.Y=n;t:if(zc(this)){var r=$o(this.g);e="";var i=r.length,s=Te(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Ke(this),Mt(this);var o="";break t}this.h.i=new I.TextDecoder}for(t=0;t<i;t++)this.h.h=!0,e+=this.h.i.decode(r[t],{stream:s&&t==i-1});r.splice(0,i),this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,_0(this.j,this.u,this.A,this.m,this.U,u,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Gn(a)){var l=a;break t}}l=null}if(n=l)ut(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Si(this,n);else{this.i=!1,this.o=3,ee(12),Ke(this),Mt(this);break e}}this.P?(Wc(this,u,o),pi&&this.i&&u==3&&(Mc(this.S,this.T,"tick",this.hb),this.T.start())):(ut(this.j,this.m,o,null),Si(this,o)),u==4&&Ke(this),this.i&&!this.I&&(u==4?fl(this.l,this):(this.i=!1,ln(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,ee(12)):(this.o=0,ee(13)),Ke(this),Mt(this)}}}catch{}finally{}};function zc(e){return e.g?e.u=="GET"&&e.K!=2&&e.l.Da:!1}function Wc(e,t,n){let r=!0,i;for(;!e.I&&e.C<n.length;)if(i=T0(e,n),i==qn){t==4&&(e.o=4,ee(14),r=!1),ut(e.j,e.m,null,"[Incomplete Response]");break}else if(i==Ii){e.o=4,ee(15),ut(e.j,e.m,n,"[Invalid Chunk]"),r=!1;break}else ut(e.j,e.m,i,null),Si(e,i);zc(e)&&i!=qn&&i!=Ii&&(e.h.g="",e.C=0),t!=4||n.length!=0||e.h.h||(e.o=1,ee(16),r=!1),e.i=e.i&&r,r?0<n.length&&!e.$&&(e.$=!0,t=e.l,t.g==e&&t.$&&!t.K&&(t.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),Es(t),t.K=!0,ee(11))):(ut(e.j,e.m,n,"[Invalid Chunked Response]"),Ke(e),Mt(e))}m.hb=function(){if(this.g){var e=Te(this.g),t=this.g.fa();this.C<t.length&&(vr(this),Wc(this,e,t),this.i&&e!=4&&ln(this))}};function T0(e,t){var n=e.C,r=t.indexOf(`
`,n);return r==-1?qn:(n=Number(t.substring(n,r)),isNaN(n)?Ii:(r+=1,r+n>t.length?qn:(t=t.substr(r,n),e.C=r+n,t)))}m.cancel=function(){this.I=!0,Ke(this)};function ln(e){e.V=Date.now()+e.O,Vc(e,e.O)}function Vc(e,t){if(e.B!=null)throw Error("WatchDog timer not null");e.B=on(J(e.gb,e),t)}function vr(e){e.B&&(I.clearTimeout(e.B),e.B=null)}m.gb=function(){this.B=null;const e=Date.now();0<=e-this.V?(v0(this.j,this.A),this.K!=2&&(Wt(),ee(17)),Ke(this),this.o=2,Mt(this)):Vc(this,this.V-e)};function Mt(e){e.l.G==0||e.I||fl(e.l,e)}function Ke(e){vr(e);var t=e.L;t&&typeof t.na=="function"&&t.na(),e.L=null,us(e.T),$c(e.S),e.g&&(t=e.g,e.g=null,t.abort(),t.na())}function Si(e,t){try{var n=e.l;if(n.G!=0&&(n.g==e||Ti(n.h,e))){if(!e.J&&Ti(n.h,e)&&n.G==3){try{var r=n.Fa.g.parse(t)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<e.F)Jn(n),Tr(n);else break e;Is(n),ee(18)}}else n.Ba=i[1],0<n.Ba-n.T&&37500>i[2]&&n.L&&n.A==0&&!n.v&&(n.v=on(J(n.cb,n),6e3));if(1>=Zc(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else Xe(n,11)}else if((e.J||n.g==e)&&Jn(n),!Gn(t))for(i=n.Fa.g.parse(t),t=0;t<i.length;t++){let l=i[t];if(n.T=l[0],l=l[1],n.G==2)if(l[0]=="c"){n.I=l[1],n.ka=l[2];const u=l[3];u!=null&&(n.ma=u,n.j.info("VER="+n.ma));const d=l[4];d!=null&&(n.Ca=d,n.j.info("SVER="+n.Ca));const h=l[5];h!=null&&typeof h=="number"&&0<h&&(r=1.5*h,n.J=r,n.j.info("backChannelRequestTimeoutMs_="+r)),r=n;const f=e.g;if(f){const g=f.g?f.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(g){var s=r.h;s.g||g.indexOf("spdy")==-1&&g.indexOf("quic")==-1&&g.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(ys(s,s.h),s.h=null))}if(r.D){const b=f.g?f.g.getResponseHeader("X-HTTP-Session-Id"):null;b&&(r.za=b,L(r.F,r.D,b))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-e.F,n.j.info("Handshake RTT: "+n.P+"ms")),r=n;var o=e;if(r.sa=ml(r,r.H?r.ka:null,r.V),o.J){el(r.h,o);var a=o,c=r.J;c&&a.setTimeout(c),a.B&&(vr(a),ln(a)),r.g=o}else hl(r);0<n.i.length&&kr(n)}else l[0]!="stop"&&l[0]!="close"||Xe(n,7);else n.G==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?Xe(n,7):ws(n):l[0]!="noop"&&n.l&&n.l.wa(l),n.A=0)}}Wt(4)}catch{}}function k0(e){if(e.W&&typeof e.W=="function")return e.W();if(typeof Map<"u"&&e instanceof Map||typeof Set<"u"&&e instanceof Set)return Array.from(e.values());if(typeof e=="string")return e.split("");if(fr(e)){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t}t=[],n=0;for(r in e)t[n++]=e[r];return t}function C0(e){if(e.oa&&typeof e.oa=="function")return e.oa();if(!e.W||typeof e.W!="function"){if(typeof Map<"u"&&e instanceof Map)return Array.from(e.keys());if(!(typeof Set<"u"&&e instanceof Set)){if(fr(e)||typeof e=="string"){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}t=[],n=0;for(const r in e)t[n++]=r;return t}}}function Gc(e,t){if(e.forEach&&typeof e.forEach=="function")e.forEach(t,void 0);else if(fr(e)||typeof e=="string")Array.prototype.forEach.call(e,t,void 0);else for(var n=C0(e),r=k0(e),i=r.length,s=0;s<i;s++)t.call(void 0,r[s],n&&n[s],e)}var qc=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function A0(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var r=e[n].indexOf("="),i=null;if(0<=r){var s=e[n].substring(0,r);i=e[n].substring(r+1)}else s=e[n];t(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function et(e,t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof et){this.h=t!==void 0?t:e.h,Kn(this,e.j),this.s=e.s,this.g=e.g,Xn(this,e.m),this.l=e.l,t=e.i;var n=new Vt;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),Do(this,n),this.o=e.o}else e&&(n=String(e).match(qc))?(this.h=!!t,Kn(this,n[1]||"",!0),this.s=Nt(n[2]||""),this.g=Nt(n[3]||"",!0),Xn(this,n[4]),this.l=Nt(n[5]||"",!0),Do(this,n[6]||"",!0),this.o=Nt(n[7]||"")):(this.h=!!t,this.i=new Vt(null,this.h))}et.prototype.toString=function(){var e=[],t=this.j;t&&e.push(Dt(t,Lo,!0),":");var n=this.g;return(n||t=="file")&&(e.push("//"),(t=this.s)&&e.push(Dt(t,Lo,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&e.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&e.push("/"),e.push(Dt(n,n.charAt(0)=="/"?O0:x0,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.o)&&e.push("#",Dt(n,N0)),e.join("")};function Oe(e){return new et(e)}function Kn(e,t,n){e.j=n?Nt(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function Xn(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function Do(e,t,n){t instanceof Vt?(e.i=t,D0(e.i,e.h)):(n||(t=Dt(t,P0)),e.i=new Vt(t,e.h))}function L(e,t,n){e.i.set(t,n)}function wr(e){return L(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function Nt(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function Dt(e,t,n){return typeof e=="string"?(e=encodeURI(e).replace(t,R0),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function R0(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(e&15).toString(16)}var Lo=/[#\/\?@]/g,x0=/[#\?:]/g,O0=/[#\?]/g,P0=/[#\?@]/g,N0=/#/g;function Vt(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function Ve(e){e.g||(e.g=new Map,e.h=0,e.i&&A0(e.i,function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)}))}m=Vt.prototype;m.add=function(e,t){Ve(this),this.i=null,e=Tt(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this};function Kc(e,t){Ve(e),t=Tt(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function Xc(e,t){return Ve(e),t=Tt(e,t),e.g.has(t)}m.forEach=function(e,t){Ve(this),this.g.forEach(function(n,r){n.forEach(function(i){e.call(t,i,r,this)},this)},this)};m.oa=function(){Ve(this);const e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let r=0;r<t.length;r++){const i=e[r];for(let s=0;s<i.length;s++)n.push(t[r])}return n};m.W=function(e){Ve(this);let t=[];if(typeof e=="string")Xc(this,e)&&(t=t.concat(this.g.get(Tt(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t};m.set=function(e,t){return Ve(this),this.i=null,e=Tt(this,e),Xc(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this};m.get=function(e,t){return e?(e=this.W(e),0<e.length?String(e[0]):t):t};function Jc(e,t,n){Kc(e,t),0<n.length&&(e.i=null,e.g.set(Tt(e,t),ns(n)),e.h+=n.length)}m.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var r=t[n];const s=encodeURIComponent(String(r)),o=this.W(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),e.push(i)}}return this.i=e.join("&")};function Tt(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function D0(e,t){t&&!e.j&&(Ve(e),e.i=null,e.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(Kc(this,r),Jc(this,i,n))},e)),e.j=t}var L0=class{constructor(e,t){this.h=e,this.g=t}};function Yc(e){this.l=e||M0,I.PerformanceNavigationTiming?(e=I.performance.getEntriesByType("navigation"),e=0<e.length&&(e[0].nextHopProtocol=="hq"||e[0].nextHopProtocol=="h2")):e=!!(I.g&&I.g.Ga&&I.g.Ga()&&I.g.Ga().$b),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var M0=10;function Qc(e){return e.h?!0:e.g?e.g.size>=e.j:!1}function Zc(e){return e.h?1:e.g?e.g.size:0}function Ti(e,t){return e.h?e.h==t:e.g?e.g.has(t):!1}function ys(e,t){e.g?e.g.add(t):e.h=t}function el(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}Yc.prototype.cancel=function(){if(this.i=tl(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const e of this.g.values())e.cancel();this.g.clear()}};function tl(e){if(e.h!=null)return e.i.concat(e.h.D);if(e.g!=null&&e.g.size!==0){let t=e.i;for(const n of e.g.values())t=t.concat(n.D);return t}return ns(e.i)}function bs(){}bs.prototype.stringify=function(e){return I.JSON.stringify(e,void 0)};bs.prototype.parse=function(e){return I.JSON.parse(e,void 0)};function $0(){this.g=new bs}function B0(e,t,n){const r=n||"";try{Gc(e,function(i,s){let o=i;rn(i)&&(o=ls(i)),t.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw t.push(r+"type="+encodeURIComponent("_badmap")),i}}function U0(e,t){const n=new br;if(I.Image){const r=new Image;r.onload=_n(wn,n,r,"TestLoadImage: loaded",!0,t),r.onerror=_n(wn,n,r,"TestLoadImage: error",!1,t),r.onabort=_n(wn,n,r,"TestLoadImage: abort",!1,t),r.ontimeout=_n(wn,n,r,"TestLoadImage: timeout",!1,t),I.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=e}else t(!1)}function wn(e,t,n,r,i){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,i(r)}catch{}}function Ir(e){this.l=e.ac||null,this.j=e.jb||!1}G(Ir,gs);Ir.prototype.g=function(){return new Er(this.l,this.j)};Ir.prototype.i=function(e){return function(){return e}}({});function Er(e,t){H.call(this),this.D=e,this.u=t,this.m=void 0,this.readyState=_s,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}G(Er,H);var _s=0;m=Er.prototype;m.open=function(e,t){if(this.readyState!=_s)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,Gt(this)};m.send=function(e){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.D||I).fetch(new Request(this.B,t)).then(this.Wa.bind(this),this.ga.bind(this))};m.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,un(this)),this.readyState=_s};m.Wa=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,Gt(this)),this.g&&(this.readyState=3,Gt(this),this.g)))if(this.responseType==="arraybuffer")e.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof I.ReadableStream<"u"&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;nl(this)}else e.text().then(this.Va.bind(this),this.ga.bind(this))};function nl(e){e.j.read().then(e.Ta.bind(e)).catch(e.ga.bind(e))}m.Ta=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?un(this):Gt(this),this.readyState==3&&nl(this)}};m.Va=function(e){this.g&&(this.response=this.responseText=e,un(this))};m.Ua=function(e){this.g&&(this.response=e,un(this))};m.ga=function(){this.g&&un(this)};function un(e){e.readyState=4,e.l=null,e.j=null,e.A=null,Gt(e)}m.setRequestHeader=function(e,t){this.v.append(e,t)};m.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""};m.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join(`\r
`)};function Gt(e){e.onreadystatechange&&e.onreadystatechange.call(e)}Object.defineProperty(Er.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(e){this.m=e?"include":"same-origin"}});var j0=I.JSON.parse;function U(e){H.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=rl,this.K=this.L=!1}G(U,H);var rl="",F0=/^https?$/i,H0=["POST","PUT"];m=U.prototype;m.Ka=function(e){this.L=e};m.da=function(e,t,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+e);t=t?t.toUpperCase():"GET",this.H=e,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():wi.g(),this.C=this.u?No(this.u):No(wi),this.g.onreadystatechange=J(this.Ha,this);try{this.F=!0,this.g.open(t,String(e),!0),this.F=!1}catch(s){Mo(this,s);return}if(e=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=I.FormData&&e instanceof I.FormData,!(0<=wc(H0,t))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{ol(this),0<this.B&&((this.K=z0(this.g))?(this.g.timeout=this.B,this.g.ontimeout=J(this.qa,this)):this.A=hs(this.qa,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(s){Mo(this,s)}};function z0(e){return Ft&&s0()&&typeof e.timeout=="number"&&e.ontimeout!==void 0}m.qa=function(){typeof ts<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,V(this,"timeout"),this.abort(8))};function Mo(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,il(e),Sr(e)}function il(e){e.D||(e.D=!0,V(e,"complete"),V(e,"error"))}m.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,V(this,"complete"),V(this,"abort"),Sr(this))};m.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Sr(this,!0)),U.X.M.call(this)};m.Ha=function(){this.s||(this.F||this.v||this.l?sl(this):this.fb())};m.fb=function(){sl(this)};function sl(e){if(e.h&&typeof ts<"u"&&(!e.C[1]||Te(e)!=4||e.aa()!=2)){if(e.v&&Te(e)==4)hs(e.Ha,0,e);else if(V(e,"readystatechange"),Te(e)==4){e.h=!1;try{const a=e.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break e;default:t=!1}var n;if(!(n=t)){var r;if(r=a===0){var i=String(e.H).match(qc)[1]||null;if(!i&&I.self&&I.self.location){var s=I.self.location.protocol;i=s.substr(0,s.length-1)}r=!F0.test(i?i.toLowerCase():"")}n=r}if(n)V(e,"complete"),V(e,"success");else{e.m=6;try{var o=2<Te(e)?e.g.statusText:""}catch{o=""}e.j=o+" ["+e.aa()+"]",il(e)}}finally{Sr(e)}}}}function Sr(e,t){if(e.g){ol(e);const n=e.g,r=e.C[0]?Vn:null;e.g=null,e.C=null,t||V(e,"ready");try{n.onreadystatechange=r}catch{}}}function ol(e){e.g&&e.K&&(e.g.ontimeout=null),e.A&&(I.clearTimeout(e.A),e.A=null)}function Te(e){return e.g?e.g.readyState:0}m.aa=function(){try{return 2<Te(this)?this.g.status:-1}catch{return-1}};m.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};m.Sa=function(e){if(this.g){var t=this.g.responseText;return e&&t.indexOf(e)==0&&(t=t.substring(e.length)),j0(t)}};function $o(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.J){case rl:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch{return null}}m.Ea=function(){return this.m};m.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function al(e){let t="";return is(e,function(n,r){t+=r,t+=":",t+=n,t+=`\r
`}),t}function vs(e,t,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=al(n),typeof e=="string"?n!=null&&encodeURIComponent(String(n)):L(e,t,n))}function xt(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function cl(e){this.Ca=0,this.i=[],this.j=new br,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=xt("failFast",!1,e),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=xt("baseRetryDelayMs",5e3,e),this.bb=xt("retryDelaySeedMs",1e4,e),this.$a=xt("forwardChannelMaxRetries",2,e),this.ta=xt("forwardChannelRequestTimeoutMs",2e4,e),this.ra=e&&e.xmlHttpFactory||void 0,this.Da=e&&e.Zb||!1,this.J=void 0,this.H=e&&e.supportsCrossDomainXhr||!1,this.I="",this.h=new Yc(e&&e.concurrentRequestLimit),this.Fa=new $0,this.O=e&&e.fastHandshake||!1,this.N=e&&e.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=e&&e.Xb||!1,e&&e.Aa&&this.j.Aa(),e&&e.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&e&&e.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}m=cl.prototype;m.ma=8;m.G=1;function ws(e){if(ll(e),e.G==3){var t=e.U++,n=Oe(e.F);L(n,"SID",e.I),L(n,"RID",t),L(n,"TYPE","terminate"),hn(e,n),t=new cn(e,e.j,t,void 0),t.K=2,t.v=wr(Oe(n)),n=!1,I.navigator&&I.navigator.sendBeacon&&(n=I.navigator.sendBeacon(t.v.toString(),"")),!n&&I.Image&&(new Image().src=t.v,n=!0),n||(t.g=yl(t.l,null),t.g.da(t.v)),t.F=Date.now(),ln(t)}pl(e)}function Tr(e){e.g&&(Es(e),e.g.cancel(),e.g=null)}function ll(e){Tr(e),e.u&&(I.clearTimeout(e.u),e.u=null),Jn(e),e.h.cancel(),e.m&&(typeof e.m=="number"&&I.clearTimeout(e.m),e.m=null)}function kr(e){Qc(e.h)||e.m||(e.m=!0,Nc(e.Ja,e),e.C=0)}function W0(e,t){return Zc(e.h)>=e.h.j-(e.m?1:0)?!1:e.m?(e.i=t.D.concat(e.i),!0):e.G==1||e.G==2||e.C>=(e.Za?0:e.$a)?!1:(e.m=on(J(e.Ja,e,t),gl(e,e.C)),e.C++,!0)}m.Ja=function(e){if(this.m)if(this.m=null,this.G==1){if(!e){this.U=Math.floor(1e5*Math.random()),e=this.U++;const i=new cn(this,this.j,e,void 0);let s=this.s;if(this.S&&(s?(s=Tc(s),kc(s,this.S)):s=this.S),this.o!==null||this.N||(i.H=s,s=null),this.O)e:{for(var t=0,n=0;n<this.i.length;n++){t:{var r=this.i[n];if("__data__"in r.g&&(r=r.g.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(t+=r,4096<t){t=n;break e}if(t===4096||n===this.i.length-1){t=n+1;break e}}t=1e3}else t=1e3;t=ul(this,i,t),n=Oe(this.F),L(n,"RID",e),L(n,"CVER",22),this.D&&L(n,"X-HTTP-Session-Id",this.D),hn(this,n),s&&(this.N?t="headers="+encodeURIComponent(String(al(s)))+"&"+t:this.o&&vs(n,this.o,s)),ys(this.h,i),this.Ya&&L(n,"TYPE","init"),this.O?(L(n,"$req",t),L(n,"SID","null"),i.Z=!0,Ei(i,n,null)):Ei(i,n,t),this.G=2}}else this.G==3&&(e?Bo(this,e):this.i.length==0||Qc(this.h)||Bo(this))};function Bo(e,t){var n;t?n=t.m:n=e.U++;const r=Oe(e.F);L(r,"SID",e.I),L(r,"RID",n),L(r,"AID",e.T),hn(e,r),e.o&&e.s&&vs(r,e.o,e.s),n=new cn(e,e.j,n,e.C+1),e.o===null&&(n.H=e.s),t&&(e.i=t.D.concat(e.i)),t=ul(e,n,1e3),n.setTimeout(Math.round(.5*e.ta)+Math.round(.5*e.ta*Math.random())),ys(e.h,n),Ei(n,r,t)}function hn(e,t){e.ia&&is(e.ia,function(n,r){L(t,r,n)}),e.l&&Gc({},function(n,r){L(t,r,n)})}function ul(e,t,n){n=Math.min(e.i.length,n);var r=e.l?J(e.l.Ra,e.l,e):null;e:{var i=e.i;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].h,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let c=0;c<n;c++){let l=i[c].h;const u=i[c].g;if(l-=s,0>l)s=Math.max(0,i[c].h-100),a=!1;else try{B0(u,o,"req"+l+"_")}catch{r&&r(u)}}if(a){r=o.join("&");break e}}}return e=e.i.splice(0,n),t.D=e,r}function hl(e){e.g||e.u||(e.Z=1,Nc(e.Ia,e),e.A=0)}function Is(e){return e.g||e.u||3<=e.A?!1:(e.Z++,e.u=on(J(e.Ia,e),gl(e,e.A)),e.A++,!0)}m.Ia=function(){if(this.u=null,dl(this),this.$&&!(this.K||this.g==null||0>=this.P)){var e=2*this.P;this.j.info("BP detection timer enabled: "+e),this.B=on(J(this.eb,this),e)}};m.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,ee(10),Tr(this),dl(this))};function Es(e){e.B!=null&&(I.clearTimeout(e.B),e.B=null)}function dl(e){e.g=new cn(e,e.j,"rpc",e.Z),e.o===null&&(e.g.H=e.s),e.g.N=0;var t=Oe(e.sa);L(t,"RID","rpc"),L(t,"SID",e.I),L(t,"CI",e.L?"0":"1"),L(t,"AID",e.T),L(t,"TYPE","xmlhttp"),hn(e,t),e.o&&e.s&&vs(t,e.o,e.s),e.J&&e.g.setTimeout(e.J);var n=e.g;e=e.ka,n.K=1,n.v=wr(Oe(t)),n.s=null,n.P=!0,Hc(n,e)}m.cb=function(){this.v!=null&&(this.v=null,Tr(this),Is(this),ee(19))};function Jn(e){e.v!=null&&(I.clearTimeout(e.v),e.v=null)}function fl(e,t){var n=null;if(e.g==t){Jn(e),Es(e),e.g=null;var r=2}else if(Ti(e.h,t))n=t.D,el(e.h,t),r=1;else return;if(e.G!=0){if(e.pa=t.Y,t.i)if(r==1){n=t.s?t.s.length:0,t=Date.now()-t.F;var i=e.C;r=ds(),V(r,new jc(r,n)),kr(e)}else hl(e);else if(i=t.o,i==3||i==0&&0<e.pa||!(r==1&&W0(e,t)||r==2&&Is(e)))switch(n&&0<n.length&&(t=e.h,t.i=t.i.concat(n)),i){case 1:Xe(e,5);break;case 4:Xe(e,10);break;case 3:Xe(e,6);break;default:Xe(e,2)}}}function gl(e,t){let n=e.Xa+Math.floor(Math.random()*e.bb);return e.l||(n*=2),n*t}function Xe(e,t){if(e.j.info("Error code "+t),t==2){var n=null;e.l&&(n=null);var r=J(e.kb,e);n||(n=new et("//www.google.com/images/cleardot.gif"),I.location&&I.location.protocol=="http"||Kn(n,"https"),wr(n)),U0(n.toString(),r)}else ee(2);e.G=0,e.l&&e.l.va(t),pl(e),ll(e)}m.kb=function(e){e?(this.j.info("Successfully pinged google.com"),ee(2)):(this.j.info("Failed to ping google.com"),ee(1))};function pl(e){if(e.G=0,e.la=[],e.l){const t=tl(e.h);(t.length!=0||e.i.length!=0)&&(Ao(e.la,t),Ao(e.la,e.i),e.h.i.length=0,ns(e.i),e.i.length=0),e.l.ua()}}function ml(e,t,n){var r=n instanceof et?Oe(n):new et(n,void 0);if(r.g!="")t&&(r.g=t+"."+r.g),Xn(r,r.m);else{var i=I.location;r=i.protocol,t=t?t+"."+i.hostname:i.hostname,i=+i.port;var s=new et(null,void 0);r&&Kn(s,r),t&&(s.g=t),i&&Xn(s,i),n&&(s.l=n),r=s}return n=e.D,t=e.za,n&&t&&L(r,n,t),L(r,"VER",e.ma),hn(e,r),r}function yl(e,t,n){if(t&&!e.H)throw Error("Can't create secondary domain capable XhrIo object.");return t=n&&e.Da&&!e.ra?new U(new Ir({jb:!0})):new U(e.ra),t.Ka(e.H),t}function bl(){}m=bl.prototype;m.xa=function(){};m.wa=function(){};m.va=function(){};m.ua=function(){};m.Ra=function(){};function ae(e,t){H.call(this),this.g=new cl(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.ya&&(e?e["X-WebChannel-Client-Profile"]=t.ya:e={"X-WebChannel-Client-Profile":t.ya}),this.g.S=e,(e=t&&t.Yb)&&!Gn(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!Gn(t)&&(this.g.D=t,e=this.h,e!==null&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new kt(this)}G(ae,H);ae.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var e=this.g,t=this.l,n=this.h||void 0;ee(0),e.V=t,e.ia=n||{},e.L=e.Y,e.F=ml(e,null,e.V),kr(e)};ae.prototype.close=function(){ws(this.g)};ae.prototype.u=function(e){var t=this.g;if(typeof e=="string"){var n={};n.__data__=e,e=n}else this.v&&(n={},n.__data__=ls(e),e=n);t.i.push(new L0(t.ab++,e)),t.G==3&&kr(t)};ae.prototype.M=function(){this.g.l=null,delete this.j,ws(this.g),delete this.g,ae.X.M.call(this)};function _l(e){ps.call(this);var t=e.__sm__;if(t){e:{for(const n in t){e=n;break e}e=void 0}(this.i=e)&&(e=this.i,t=t!==null&&e in t?t[e]:void 0),this.data=t}else this.data=e}G(_l,ps);function vl(){ms.call(this),this.status=1}G(vl,ms);function kt(e){this.g=e}G(kt,bl);kt.prototype.xa=function(){V(this.g,"a")};kt.prototype.wa=function(e){V(this.g,new _l(e))};kt.prototype.va=function(e){V(this.g,new vl)};kt.prototype.ua=function(){V(this.g,"b")};ae.prototype.send=ae.prototype.u;ae.prototype.open=ae.prototype.m;ae.prototype.close=ae.prototype.close;fs.NO_ERROR=0;fs.TIMEOUT=8;fs.HTTP_ERROR=6;I0.COMPLETE="complete";E0.EventType=an;an.OPEN="a";an.CLOSE="b";an.ERROR="c";an.MESSAGE="d";H.prototype.listen=H.prototype.N;U.prototype.listenOnce=U.prototype.O;U.prototype.getLastError=U.prototype.Oa;U.prototype.getLastErrorCode=U.prototype.Ea;U.prototype.getStatus=U.prototype.aa;U.prototype.getResponseJson=U.prototype.Sa;U.prototype.getResponseText=U.prototype.fa;U.prototype.send=U.prototype.da;U.prototype.setWithCredentials=U.prototype.Ka;const Uo="@firebase/firestore";/**
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
 */let dn="9.14.0";/**
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
 */const _t=new cr("@firebase/firestore");function ne(e,...t){if(_t.logLevel<=O.DEBUG){const n=t.map(Ts);_t.debug(`Firestore (${dn}): ${e}`,...n)}}function Ss(e,...t){if(_t.logLevel<=O.ERROR){const n=t.map(Ts);_t.error(`Firestore (${dn}): ${e}`,...n)}}function V0(e,...t){if(_t.logLevel<=O.WARN){const n=t.map(Ts);_t.warn(`Firestore (${dn}): ${e}`,...n)}}function Ts(e){if(typeof e=="string")return e;try{return t=e,JSON.stringify(t)}catch{return e}/**
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
 */function ks(e="Unexpected state"){const t=`FIRESTORE (${dn}) INTERNAL ASSERTION FAILED: `+e;throw Ss(t),new Error(t)}function Yn(e,t){e||ks()}/**
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
 */const se={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class oe extends fe{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class pt{constructor(){this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}}/**
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
 */class wl{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class G0{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(q.UNAUTHENTICATED))}shutdown(){}}class q0{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,n){this.changeListener=n,t.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class K0{constructor(t){this.t=t,this.currentUser=q.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){let r=this.i;const i=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let s=new pt;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new pt,t.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const c=s;t.enqueueRetryable(async()=>{await c.promise,await i(this.currentUser)})},a=c=>{ne("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(ne("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new pt)}},0),o()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==t?(ne("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Yn(typeof r.accessToken=="string"),new wl(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return Yn(t===null||typeof t=="string"),new q(t)}}class X0{constructor(t,n,r,i){this.h=t,this.l=n,this.m=r,this.g=i,this.type="FirstParty",this.user=q.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(Yn(!(typeof this.h!="object"||this.h===null||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const t=this.I();return t&&this.p.set("Authorization",t),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class J0{constructor(t,n,r,i){this.h=t,this.l=n,this.m=r,this.g=i}getToken(){return Promise.resolve(new X0(this.h,this.l,this.m,this.g))}start(t,n){t.enqueueRetryable(()=>n(q.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Y0{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Q0{constructor(t){this.T=t,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(t,n){const r=s=>{s.error!=null&&ne("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.A;return this.A=s.token,ne("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{t.enqueueRetryable(()=>r(s))};const i=s=>{ne("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.T.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.T.getImmediate({optional:!0});s?i(s):ne("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?(Yn(typeof n.token=="string"),this.A=n.token,new Y0(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function Z0(e){const t=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let r=0;r<e;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class ey{static R(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/t.length)*t.length;let r="";for(;r.length<20;){const i=Z0(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=t.charAt(i[s]%t.length))}return r}}function Il(e){return e.name==="IndexedDbTransactionError"}/**
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
 */class ty{constructor(t,n,r,i,s,o,a,c){this.databaseId=t,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class Qn{constructor(t,n){this.projectId=t,this.database=n||"(default)"}static empty(){return new Qn("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof Qn&&t.projectId===this.projectId&&t.database===this.database}}/**
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
 */var jo,C;(C=jo||(jo={}))[C.OK=0]="OK",C[C.CANCELLED=1]="CANCELLED",C[C.UNKNOWN=2]="UNKNOWN",C[C.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",C[C.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",C[C.NOT_FOUND=5]="NOT_FOUND",C[C.ALREADY_EXISTS=6]="ALREADY_EXISTS",C[C.PERMISSION_DENIED=7]="PERMISSION_DENIED",C[C.UNAUTHENTICATED=16]="UNAUTHENTICATED",C[C.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",C[C.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",C[C.ABORTED=10]="ABORTED",C[C.OUT_OF_RANGE=11]="OUT_OF_RANGE",C[C.UNIMPLEMENTED=12]="UNIMPLEMENTED",C[C.INTERNAL=13]="INTERNAL",C[C.UNAVAILABLE=14]="UNAVAILABLE",C[C.DATA_LOSS=15]="DATA_LOSS";function Zr(){return typeof document<"u"?document:null}class ny{constructor(t,n,r=1e3,i=1.5,s=6e4){this.Hs=t,this.timerId=n,this.mo=r,this.yo=i,this.po=s,this.Io=0,this.To=null,this.Eo=Date.now(),this.reset()}reset(){this.Io=0}Ao(){this.Io=this.po}Ro(t){this.cancel();const n=Math.floor(this.Io+this.bo()),r=Math.max(0,Date.now()-this.Eo),i=Math.max(0,n-r);i>0&&ne("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Io} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.To=this.Hs.enqueueAfterDelay(this.timerId,i,()=>(this.Eo=Date.now(),t())),this.Io*=this.yo,this.Io<this.mo&&(this.Io=this.mo),this.Io>this.po&&(this.Io=this.po)}Po(){this.To!==null&&(this.To.skipDelay(),this.To=null)}cancel(){this.To!==null&&(this.To.cancel(),this.To=null)}bo(){return(Math.random()-.5)*this.Io}}/**
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
 */class Cs{constructor(t,n,r,i,s){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new pt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(t,n,r,i,s){const o=Date.now()+r,a=new Cs(t,n,o,i,s);return a.start(r),a}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new oe(se.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ry(e,t){if(Ss("AsyncQueue",`${t}: ${e}`),Il(e))return new oe(se.UNAVAILABLE,`${t}: ${e}`);throw e}function iy(e,t,n,r){if(t===!0&&r===!0)throw new oe(se.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function sy(e){if(e===void 0)return"undefined";if(e===null)return"null";if(typeof e=="string")return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if(typeof e=="number"||typeof e=="boolean")return""+e;if(typeof e=="object"){if(e instanceof Array)return"an array";{const t=function(n){return n.constructor?n.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return typeof e=="function"?"a function":ks()}function oy(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new oe(se.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=sy(e);throw new oe(se.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}/**
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
 */const Fo=new Map;class Ho{constructor(t){var n;if(t.host===void 0){if(t.ssl!==void 0)throw new oe(se.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(n=t.ssl)===null||n===void 0||n;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new oe(se.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.useFetchStreams=!!t.useFetchStreams,iy("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling)}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}/**
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
 */class El{constructor(t,n,r,i){this._authCredentials=t,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ho({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new oe(se.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new oe(se.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ho(t),t.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new G0;switch(n.type){case"gapi":const r=n.client;return new J0(r,n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new oe(se.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const n=Fo.get(t);n&&(ne("ComponentProvider","Removing Datastore"),Fo.delete(t),n.terminate())}(this),Promise.resolve()}}function ay(e,t,n,r={}){var i;const s=(e=oy(e,El))._getSettings();if(s.host!=="firestore.googleapis.com"&&s.host!==t&&V0("Host has been set in both settings() and useEmulator(), emulator host will be used"),e._setSettings(Object.assign(Object.assign({},s),{host:`${t}:${n}`,ssl:!1})),r.mockUserToken){let o,a;if(typeof r.mockUserToken=="string")o=r.mockUserToken,a=q.MOCK_USER;else{o=ja(r.mockUserToken,(i=e._app)===null||i===void 0?void 0:i.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new oe(se.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new q(c)}e._authCredentials=new q0(new wl(o,a))}}/**
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
 */class cy{constructor(t,n,r,i){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=q.UNAUTHENTICATED,this.clientId=ey.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{ne("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(ne("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new oe(se.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new pt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){const r=ry(n,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}class ly{constructor(){this.Bc=Promise.resolve(),this.Lc=[],this.Uc=!1,this.qc=[],this.Kc=null,this.Gc=!1,this.Qc=!1,this.jc=[],this.xo=new ny(this,"async_queue_retry"),this.Wc=()=>{const n=Zr();n&&ne("AsyncQueue","Visibility state changed to "+n.visibilityState),this.xo.Po()};const t=Zr();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Wc)}get isShuttingDown(){return this.Uc}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.zc(),this.Hc(t)}enterRestrictedMode(t){if(!this.Uc){this.Uc=!0,this.Qc=t||!1;const n=Zr();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Wc)}}enqueue(t){if(this.zc(),this.Uc)return new Promise(()=>{});const n=new pt;return this.Hc(()=>this.Uc&&this.Qc?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Lc.push(t),this.Jc()))}async Jc(){if(this.Lc.length!==0){try{await this.Lc[0](),this.Lc.shift(),this.xo.reset()}catch(t){if(!Il(t))throw t;ne("AsyncQueue","Operation failed with retryable error: "+t)}this.Lc.length>0&&this.xo.Ro(()=>this.Jc())}}Hc(t){const n=this.Bc.then(()=>(this.Gc=!0,t().catch(r=>{this.Kc=r,this.Gc=!1;const i=function(s){let o=s.message||"";return s.stack&&(o=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),o}(r);throw Ss("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Gc=!1,r))));return this.Bc=n,n}enqueueAfterDelay(t,n,r){this.zc(),this.jc.indexOf(t)>-1&&(n=0);const i=Cs.createAndSchedule(this,t,n,r,s=>this.Yc(s));return this.qc.push(i),i}zc(){this.Kc&&ks()}verifyOperationInProgress(){}async Xc(){let t;do t=this.Bc,await t;while(t!==this.Bc)}Zc(t){for(const n of this.qc)if(n.timerId===t)return!0;return!1}ta(t){return this.Xc().then(()=>{this.qc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.qc)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.Xc()})}ea(t){this.jc.push(t)}Yc(t){const n=this.qc.indexOf(t);this.qc.splice(n,1)}}class uy extends El{constructor(t,n,r,i){super(t,n,r,i),this.type="firestore",this._queue=new ly,this._persistenceKey=i?.name||"[DEFAULT]"}_terminate(){return this._firestoreClient||dy(this),this._firestoreClient.terminate()}}function hy(e,t){const n=typeof e=="object"?e:Zt(),r=typeof e=="string"?e:t||"(default)",i=it(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=Vi("firestore");s&&ay(i,...s)}return i}function dy(e){var t;const n=e._freezeSettings(),r=function(i,s,o,a){return new ty(i,s,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(e._databaseId,((t=e._app)===null||t===void 0?void 0:t.options.appId)||"",e._persistenceKey,n);e._firestoreClient=new cy(e._authCredentials,e._appCheckCredentials,e._queue,r)}(function(e,t=!0){(function(n){dn=n})(Et),_e(new de("firestore",(n,{instanceIdentifier:r,options:i})=>{const s=n.getProvider("app").getImmediate(),o=new uy(new K0(n.getProvider("auth-internal")),new Q0(n.getProvider("app-check-internal")),function(a,c){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new oe(se.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Qn(a.options.projectId,c)}(s,r),s);return i=Object.assign({useFetchStreams:t},i),o._setSettings(i),o},"PUBLIC").setMultipleInstances(!0)),ie(Uo,"3.7.3",e),ie(Uo,"3.7.3","esm2017")})();/**
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
 */const Sl="firebasestorage.googleapis.com",fy="storageBucket",gy=2*60*1e3,py=10*60*1e3;/**
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
 */class ve extends fe{constructor(t,n,r=0){super(ei(t),`Firebase Storage: ${n} (${ei(t)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,ve.prototype)}get status(){return this.status_}set status(t){this.status_=t}_codeEquals(t){return ei(t)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(t){this.customData.serverResponse=t,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}function ei(e){return"storage/"+e}function my(){const e="An unknown error occurred, please check the error payload for server response.";return new ve("unknown",e)}function yy(){return new ve("retry-limit-exceeded","Max retry time for operation exceeded, please try again.")}function by(){return new ve("canceled","User canceled the upload/download.")}function _y(e){return new ve("invalid-url","Invalid URL '"+e+"'.")}function vy(e){return new ve("invalid-default-bucket","Invalid default bucket '"+e+"'.")}function zo(e){return new ve("invalid-argument",e)}function Tl(){return new ve("app-deleted","The Firebase app was deleted.")}function wy(e){return new ve("invalid-root-operation","The operation '"+e+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
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
 */class ue{constructor(t,n){this.bucket=t,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o/"+t(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(t,n){let r;try{r=ue.makeFromUrl(t,n)}catch{return new ue(t,"")}if(r.path==="")return r;throw vy(t)}static makeFromUrl(t,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(T){T.path.charAt(T.path.length-1)==="/"&&(T.path_=T.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),c={bucket:1,path:3};function l(T){T.path_=decodeURIComponent(T.path)}const u="v[A-Za-z0-9_]+",d=n.replace(/[.]/g,"\\."),h="(/([^?#]*).*)?$",f=new RegExp(`^https?://${d}/${u}/b/${i}/o${h}`,"i"),g={bucket:1,path:3},b=n===Sl?"(?:storage.googleapis.com|storage.cloud.google.com)":n,v="([^?#]*)",y=new RegExp(`^https?://${b}/${i}/${v}`,"i"),A=[{regex:a,indices:c,postModify:s},{regex:f,indices:g,postModify:l},{regex:y,indices:{bucket:1,path:2},postModify:l}];for(let T=0;T<A.length;T++){const M=A[T],x=M.regex.exec(t);if(x){const D=x[M.indices.bucket];let N=x[M.indices.path];N||(N=""),r=new ue(D,N),M.postModify(r);break}}if(r==null)throw _y(t);return r}}class Iy{constructor(t){this.promise_=Promise.reject(t)}getPromise(){return this.promise_}cancel(t=!1){}}/**
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
 */function Ey(e,t,n){let r=1,i=null,s=null,o=!1,a=0;function c(){return a===2}let l=!1;function u(...v){l||(l=!0,t.apply(null,v))}function d(v){i=setTimeout(()=>{i=null,e(f,c())},v)}function h(){s&&clearTimeout(s)}function f(v,...y){if(l){h();return}if(v){h(),u.call(null,v,...y);return}if(c()||o){h(),u.call(null,v,...y);return}r<64&&(r*=2);let A;a===1?(a=2,A=0):A=(r+Math.random())*1e3,d(A)}let g=!1;function b(v){g||(g=!0,h(),!l&&(i!==null?(v||(a=2),clearTimeout(i),d(0)):v||(a=1)))}return d(0),s=setTimeout(()=>{o=!0,b(!0)},n),b}function Sy(e){e(!1)}/**
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
 */function Ty(e){return e!==void 0}function Wo(e,t,n,r){if(r<t)throw zo(`Invalid value for '${e}'. Expected ${t} or greater.`);if(r>n)throw zo(`Invalid value for '${e}'. Expected ${n} or less.`)}function ky(e){const t=encodeURIComponent;let n="?";for(const r in e)if(e.hasOwnProperty(r)){const i=t(r)+"="+t(e[r]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
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
 */var Zn;(function(e){e[e.NO_ERROR=0]="NO_ERROR",e[e.NETWORK_ERROR=1]="NETWORK_ERROR",e[e.ABORT=2]="ABORT"})(Zn||(Zn={}));/**
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
 */function Cy(e,t){const n=e>=500&&e<600,i=[408,429].indexOf(e)!==-1,s=t.indexOf(e)!==-1;return n||i||s}/**
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
 */class Ay{constructor(t,n,r,i,s,o,a,c,l,u,d,h=!0){this.url_=t,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=c,this.timeout_=l,this.progressCallback_=u,this.connectionFactory_=d,this.retry=h,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((f,g)=>{this.resolve_=f,this.reject_=g,this.start_()})}start_(){const t=(r,i)=>{if(i){r(!1,new In(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=a=>{const c=a.loaded,l=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,l)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const a=s.getErrorCode()===Zn.NO_ERROR,c=s.getStatus();if((!a||Cy(c,this.additionalRetryCodes_))&&this.retry){const u=s.getErrorCode()===Zn.ABORT;r(!1,new In(!1,null,u));return}const l=this.successCodes_.indexOf(c)!==-1;r(!0,new In(l,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const c=this.callback_(a,a.getResponse());Ty(c)?s(c):s()}catch(c){o(c)}else if(a!==null){const c=my();c.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,c)):o(c)}else if(i.canceled){const c=this.appDelete_?Tl():by();o(c)}else{const c=yy();o(c)}};this.canceled_?n(!1,new In(!1,null,!0)):this.backoffId_=Ey(t,n,this.timeout_)}getPromise(){return this.promise_}cancel(t){this.canceled_=!0,this.appDelete_=t||!1,this.backoffId_!==null&&Sy(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class In{constructor(t,n,r){this.wasSuccessCode=t,this.connection=n,this.canceled=!!r}}function Ry(e,t){t!==null&&t.length>0&&(e.Authorization="Firebase "+t)}function xy(e,t){e["X-Firebase-Storage-Version"]="webjs/"+(t??"AppManager")}function Oy(e,t){t&&(e["X-Firebase-GMPID"]=t)}function Py(e,t){t!==null&&(e["X-Firebase-AppCheck"]=t)}function Ny(e,t,n,r,i,s,o=!0){const a=ky(e.urlParams),c=e.url+a,l=Object.assign({},e.headers);return Oy(l,t),Ry(l,n),xy(l,s),Py(l,r),new Ay(c,e.method,l,e.body,e.successCodes,e.additionalRetryCodes,e.handler,e.errorHandler,e.timeout,e.progressCallback,i,o)}/**
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
 */function Dy(e){if(e.length===0)return null;const t=e.lastIndexOf("/");return t===-1?"":e.slice(0,t)}function Ly(e){const t=e.lastIndexOf("/",e.length-2);return t===-1?e:e.slice(t+1)}/**
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
 */class er{constructor(t,n){this._service=t,n instanceof ue?this._location=n:this._location=ue.makeFromUrl(n,t.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(t,n){return new er(t,n)}get root(){const t=new ue(this._location.bucket,"");return this._newRef(this._service,t)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Ly(this._location.path)}get storage(){return this._service}get parent(){const t=Dy(this._location.path);if(t===null)return null;const n=new ue(this._location.bucket,t);return new er(this._service,n)}_throwIfRoot(t){if(this._location.path==="")throw wy(t)}}function Vo(e,t){const n=t?.[fy];return n==null?null:ue.makeFromBucketSpec(n,e)}function My(e,t,n,r={}){e.host=`${t}:${n}`,e._protocol="http";const{mockUserToken:i}=r;i&&(e._overrideAuthToken=typeof i=="string"?i:ja(i,e.app.options.projectId))}class $y{constructor(t,n,r,i,s){this.app=t,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=Sl,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=gy,this._maxUploadRetryTime=py,this._requests=new Set,i!=null?this._bucket=ue.makeFromBucketSpec(i,this._host):this._bucket=Vo(this._host,this.app.options)}get host(){return this._host}set host(t){this._host=t,this._url!=null?this._bucket=ue.makeFromBucketSpec(this._url,t):this._bucket=Vo(t,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(t){Wo("time",0,Number.POSITIVE_INFINITY,t),this._maxUploadRetryTime=t}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(t){Wo("time",0,Number.POSITIVE_INFINITY,t),this._maxOperationRetryTime=t}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const t=this._authProvider.getImmediate({optional:!0});if(t){const n=await t.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const t=this._appCheckProvider.getImmediate({optional:!0});return t?(await t.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(t=>t.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(t){return new er(this,t)}_makeRequest(t,n,r,i,s=!0){if(this._deleted)return new Iy(Tl());{const o=Ny(t,this._appId,r,i,n,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(t,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(t,n,r,i).getPromise()}}const Go="@firebase/storage",qo="0.9.14";/**
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
 */const kl="storage";function By(e=Zt(),t){e=ge(e);const r=it(e,kl).getImmediate({identifier:t}),i=Vi("storage");return i&&Uy(r,...i),r}function Uy(e,t,n,r={}){My(e,t,n,r)}function jy(e,{instanceIdentifier:t}){const n=e.getProvider("app").getImmediate(),r=e.getProvider("auth-internal"),i=e.getProvider("app-check-internal");return new $y(n,r,i,t,Et)}function Fy(){_e(new de(kl,jy,"PUBLIC").setMultipleInstances(!0)),ie(Go,qo,""),ie(Go,qo,"esm2017")}Fy();/**
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
 */const Hy="type.googleapis.com/google.protobuf.Int64Value",zy="type.googleapis.com/google.protobuf.UInt64Value";function Cl(e,t){const n={};for(const r in e)e.hasOwnProperty(r)&&(n[r]=t(e[r]));return n}function ki(e){if(e==null)return null;if(e instanceof Number&&(e=e.valueOf()),typeof e=="number"&&isFinite(e)||e===!0||e===!1||Object.prototype.toString.call(e)==="[object String]")return e;if(e instanceof Date)return e.toISOString();if(Array.isArray(e))return e.map(t=>ki(t));if(typeof e=="function"||typeof e=="object")return Cl(e,t=>ki(t));throw new Error("Data cannot be encoded in JSON: "+e)}function tr(e){if(e==null)return e;if(e["@type"])switch(e["@type"]){case Hy:case zy:{const t=Number(e.value);if(isNaN(t))throw new Error("Data cannot be decoded from JSON: "+e);return t}default:throw new Error("Data cannot be decoded from JSON: "+e)}return Array.isArray(e)?e.map(t=>tr(t)):typeof e=="function"||typeof e=="object"?Cl(e,t=>tr(t)):e}/**
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
 */const As="functions";/**
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
 */const Ko={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class mt extends fe{constructor(t,n,r){super(`${As}/${t}`,n||""),this.details=r}}function Wy(e){if(e>=200&&e<300)return"ok";switch(e){case 0:return"internal";case 400:return"invalid-argument";case 401:return"unauthenticated";case 403:return"permission-denied";case 404:return"not-found";case 409:return"aborted";case 429:return"resource-exhausted";case 499:return"cancelled";case 500:return"internal";case 501:return"unimplemented";case 503:return"unavailable";case 504:return"deadline-exceeded"}return"unknown"}function Vy(e,t){let n=Wy(e),r=n,i;try{const s=t&&t.error;if(s){const o=s.status;if(typeof o=="string"){if(!Ko[o])return new mt("internal","internal");n=Ko[o],r=o}const a=s.message;typeof a=="string"&&(r=a),i=s.details,i!==void 0&&(i=tr(i))}}catch{}return n==="ok"?null:new mt(n,r,i)}/**
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
 */class Gy{constructor(t,n,r){this.auth=null,this.messaging=null,this.appCheck=null,this.auth=t.getImmediate({optional:!0}),this.messaging=n.getImmediate({optional:!0}),this.auth||t.get().then(i=>this.auth=i,()=>{}),this.messaging||n.get().then(i=>this.messaging=i,()=>{}),this.appCheck||r.get().then(i=>this.appCheck=i,()=>{})}async getAuthToken(){if(!!this.auth)try{const t=await this.auth.getToken();return t?.accessToken}catch{return}}async getMessagingToken(){if(!(!this.messaging||!("Notification"in self)||Notification.permission!=="granted"))try{return await this.messaging.getToken()}catch{return}}async getAppCheckToken(){if(this.appCheck){const t=await this.appCheck.getToken();return t.error?null:t.token}return null}async getContext(){const t=await this.getAuthToken(),n=await this.getMessagingToken(),r=await this.getAppCheckToken();return{authToken:t,messagingToken:n,appCheckToken:r}}}/**
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
 */const Ci="us-central1";function qy(e){let t=null;return{promise:new Promise((n,r)=>{t=setTimeout(()=>{r(new mt("deadline-exceeded","deadline-exceeded"))},e)}),cancel:()=>{t&&clearTimeout(t)}}}class Ky{constructor(t,n,r,i,s=Ci,o){this.app=t,this.fetchImpl=o,this.emulatorOrigin=null,this.contextProvider=new Gy(n,r,i),this.cancelAllRequests=new Promise(a=>{this.deleteService=()=>Promise.resolve(a())});try{const a=new URL(s);this.customDomain=a.origin,this.region=Ci}catch{this.customDomain=null,this.region=s}}_delete(){return this.deleteService()}_url(t){const n=this.app.options.projectId;return this.emulatorOrigin!==null?`${this.emulatorOrigin}/${n}/${this.region}/${t}`:this.customDomain!==null?`${this.customDomain}/${t}`:`https://${this.region}-${n}.cloudfunctions.net/${t}`}}function Xy(e,t,n){e.emulatorOrigin=`http://${t}:${n}`}function Jy(e,t,n){return r=>Qy(e,t,r,n||{})}async function Yy(e,t,n,r){n["Content-Type"]="application/json";let i;try{i=await r(e,{method:"POST",body:JSON.stringify(t),headers:n})}catch{return{status:0,json:null}}let s=null;try{s=await i.json()}catch{}return{status:i.status,json:s}}function Qy(e,t,n,r){const i=e._url(t);return Zy(e,i,n,r)}async function Zy(e,t,n,r){n=ki(n);const i={data:n},s={},o=await e.contextProvider.getContext();o.authToken&&(s.Authorization="Bearer "+o.authToken),o.messagingToken&&(s["Firebase-Instance-ID-Token"]=o.messagingToken),o.appCheckToken!==null&&(s["X-Firebase-AppCheck"]=o.appCheckToken);const a=r.timeout||7e4,c=qy(a),l=await Promise.race([Yy(t,i,s,e.fetchImpl),c.promise,e.cancelAllRequests]);if(c.cancel(),!l)throw new mt("cancelled","Firebase Functions instance was deleted.");const u=Vy(l.status,l.json);if(u)throw u;if(!l.json)throw new mt("internal","Response is not valid JSON object.");let d=l.json.data;if(typeof d>"u"&&(d=l.json.result),typeof d>"u")throw new mt("internal","Response is missing data field.");return{data:tr(d)}}const Xo="@firebase/functions",Jo="0.8.8";/**
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
 */const eb="auth-internal",tb="app-check-internal",nb="messaging-internal";function rb(e,t){const n=(r,{instanceIdentifier:i})=>{const s=r.getProvider("app").getImmediate(),o=r.getProvider(eb),a=r.getProvider(nb),c=r.getProvider(tb);return new Ky(s,o,a,c,i,e)};_e(new de(As,n,"PUBLIC").setMultipleInstances(!0)),ie(Xo,Jo,t),ie(Xo,Jo,"esm2017")}/**
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
 */function ib(e=Zt(),t=Ci){const r=it(ge(e),As).getImmediate({identifier:t}),i=Vi("functions");return i&&sb(r,...i),r}function sb(e,t,n){Xy(ge(e),t,n)}function ob(e,t,n){return Jy(ge(e),t,n)}rb(fetch.bind(self));/**
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
 */const Ai=new Map,Al={activated:!1,tokenObservers:[]},ab={initialized:!1,enabled:!1};function te(e){return Ai.get(e)||Object.assign({},Al)}function cb(e,t){return Ai.set(e,t),Ai.get(e)}function Cr(){return ab}/**
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
 */const Rl="https://content-firebaseappcheck.googleapis.com/v1",lb="exchangeRecaptchaV3Token",ub="exchangeDebugToken",Yo={OFFSET_DURATION:5*60*1e3,RETRIAL_MIN_WAIT:30*1e3,RETRIAL_MAX_WAIT:16*60*1e3},hb=24*60*60*1e3;/**
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
 */class db{constructor(t,n,r,i,s){if(this.operation=t,this.retryPolicy=n,this.getWaitDuration=r,this.lowerBound=i,this.upperBound=s,this.pending=null,this.nextErrorWaitInterval=i,i>s)throw new Error("Proactive refresh lower bound greater than upper bound!")}start(){this.nextErrorWaitInterval=this.lowerBound,this.process(!0).catch(()=>{})}stop(){this.pending&&(this.pending.reject("cancelled"),this.pending=null)}isRunning(){return!!this.pending}async process(t){this.stop();try{this.pending=new $t,await fb(this.getNextRun(t)),this.pending.resolve(),await this.pending.promise,this.pending=new $t,await this.operation(),this.pending.resolve(),await this.pending.promise,this.process(!0).catch(()=>{})}catch(n){this.retryPolicy(n)?this.process(!1).catch(()=>{}):this.stop()}}getNextRun(t){if(t)return this.nextErrorWaitInterval=this.lowerBound,this.getWaitDuration();{const n=this.nextErrorWaitInterval;return this.nextErrorWaitInterval*=2,this.nextErrorWaitInterval>this.upperBound&&(this.nextErrorWaitInterval=this.upperBound),n}}}function fb(e){return new Promise(t=>{setTimeout(t,e)})}/**
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
 */const gb={["already-initialized"]:"You have already called initializeAppCheck() for FirebaseApp {$appName} with different options. To avoid this error, call initializeAppCheck() with the same options as when it was originally called. This will return the already initialized instance.",["use-before-activation"]:"App Check is being used before initializeAppCheck() is called for FirebaseApp {$appName}. Call initializeAppCheck() before instantiating other Firebase services.",["fetch-network-error"]:"Fetch failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.",["fetch-parse-error"]:"Fetch client could not parse response. Original error: {$originalErrorMessage}.",["fetch-status-error"]:"Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["recaptcha-error"]:"ReCAPTCHA error.",throttled:"Requests throttled due to {$httpStatus} error. Attempts allowed again after {$time}"},re=new It("appCheck","AppCheck",gb);/**
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
 */function Qo(e=!1){var t;return e?(t=self.grecaptcha)===null||t===void 0?void 0:t.enterprise:self.grecaptcha}function xl(e){if(!te(e).activated)throw re.create("use-before-activation",{appName:e.name})}function Ol(e){const t=Math.round(e/1e3),n=Math.floor(t/(3600*24)),r=Math.floor((t-n*3600*24)/3600),i=Math.floor((t-n*3600*24-r*3600)/60),s=t-n*3600*24-r*3600-i*60;let o="";return n&&(o+=En(n)+"d:"),r&&(o+=En(r)+"h:"),o+=En(i)+"m:"+En(s)+"s",o}function En(e){return e===0?"00":e>=10?e.toString():"0"+e}/**
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
 */async function Pl({url:e,body:t},n){var r,i;const s={"Content-Type":"application/json"},o=n.getImmediate({optional:!0});if(o){const f=await o.getHeartbeatsHeader();f&&(s["X-Firebase-Client"]=f)}const a={method:"POST",body:JSON.stringify(t),headers:s};let c;try{c=await fetch(e,a)}catch(f){throw re.create("fetch-network-error",{originalErrorMessage:(r=f)===null||r===void 0?void 0:r.message})}if(c.status!==200)throw re.create("fetch-status-error",{httpStatus:c.status});let l;try{l=await c.json()}catch(f){throw re.create("fetch-parse-error",{originalErrorMessage:(i=f)===null||i===void 0?void 0:i.message})}const u=l.ttl.match(/^([\d.]+)(s)$/);if(!u||!u[2]||isNaN(Number(u[1])))throw re.create("fetch-parse-error",{originalErrorMessage:`ttl field (timeToLive) is not in standard Protobuf Duration format: ${l.ttl}`});const d=Number(u[1])*1e3,h=Date.now();return{token:l.token,expireTimeMillis:h+d,issuedAtTimeMillis:h}}function pb(e,t){const{projectId:n,appId:r,apiKey:i}=e.options;return{url:`${Rl}/projects/${n}/apps/${r}:${lb}?key=${i}`,body:{recaptcha_v3_token:t}}}function mb(e,t){const{projectId:n,appId:r,apiKey:i}=e.options;return{url:`${Rl}/projects/${n}/apps/${r}:${ub}?key=${i}`,body:{debug_token:t}}}/**
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
 */const yb="firebase-app-check-database",bb=1,qt="firebase-app-check-store",Nl="debug-token";let Sn=null;function Dl(){return Sn||(Sn=new Promise((e,t)=>{var n;try{const r=indexedDB.open(yb,bb);r.onsuccess=i=>{e(i.target.result)},r.onerror=i=>{var s;t(re.create("storage-open",{originalErrorMessage:(s=i.target.error)===null||s===void 0?void 0:s.message}))},r.onupgradeneeded=i=>{const s=i.target.result;switch(i.oldVersion){case 0:s.createObjectStore(qt,{keyPath:"compositeKey"})}}}catch(r){t(re.create("storage-open",{originalErrorMessage:(n=r)===null||n===void 0?void 0:n.message}))}}),Sn)}function _b(e){return Ml($l(e))}function vb(e,t){return Ll($l(e),t)}function wb(e){return Ll(Nl,e)}function Ib(){return Ml(Nl)}async function Ll(e,t){const r=(await Dl()).transaction(qt,"readwrite"),s=r.objectStore(qt).put({compositeKey:e,value:t});return new Promise((o,a)=>{s.onsuccess=c=>{o()},r.onerror=c=>{var l;a(re.create("storage-set",{originalErrorMessage:(l=c.target.error)===null||l===void 0?void 0:l.message}))}})}async function Ml(e){const n=(await Dl()).transaction(qt,"readonly"),i=n.objectStore(qt).get(e);return new Promise((s,o)=>{i.onsuccess=a=>{const c=a.target.result;s(c?c.value:void 0)},n.onerror=a=>{var c;o(re.create("storage-get",{originalErrorMessage:(c=a.target.error)===null||c===void 0?void 0:c.message}))}})}function $l(e){return`${e.options.appId}-${e.name}`}/**
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
 */const Kt=new cr("@firebase/app-check");/**
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
 */async function Eb(e){if(zi()){let t;try{t=await _b(e)}catch(n){Kt.warn(`Failed to read token from IndexedDB. Error: ${n}`)}return t}}function ti(e,t){return zi()?vb(e,t).catch(n=>{Kt.warn(`Failed to write token to IndexedDB. Error: ${n}`)}):Promise.resolve()}async function Sb(){let e;try{e=await Ib()}catch{}if(e)return e;{const t=Uf();return wb(t).catch(n=>Kt.warn(`Failed to persist debug token to IndexedDB. Error: ${n}`)),t}}/**
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
 */function Bl(){return Cr().enabled}async function Ul(){const e=Cr();if(e.enabled&&e.token)return e.token.promise;throw Error(`
            Can't get debug token in production mode.
        `)}function Tb(){const e=$a(),t=Cr();if(t.initialized=!0,typeof e.FIREBASE_APPCHECK_DEBUG_TOKEN!="string"&&e.FIREBASE_APPCHECK_DEBUG_TOKEN!==!0)return;t.enabled=!0;const n=new $t;t.token=n,typeof e.FIREBASE_APPCHECK_DEBUG_TOKEN=="string"?n.resolve(e.FIREBASE_APPCHECK_DEBUG_TOKEN):n.resolve(Sb())}/**
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
 */const kb={error:"UNKNOWN_ERROR"};function Cb(e){return Hi.encodeString(JSON.stringify(e),!1)}async function Ri(e,t=!1){const n=e.app;xl(n);const r=te(n);let i=r.token,s;if(i&&!ht(i)&&(r.token=void 0,i=void 0),!i){const c=await r.cachedTokenPromise;c&&(ht(c)?i=c:await ti(n,void 0))}if(!t&&i&&ht(i))return{token:i.token};let o=!1;if(Bl()){r.exchangeTokenPromise||(r.exchangeTokenPromise=Pl(mb(n,await Ul()),e.heartbeatServiceProvider).finally(()=>{r.exchangeTokenPromise=void 0}),o=!0);const c=await r.exchangeTokenPromise;return await ti(n,c),r.token=c,{token:c.token}}try{r.exchangeTokenPromise||(r.exchangeTokenPromise=r.provider.getToken().finally(()=>{r.exchangeTokenPromise=void 0}),o=!0),i=await te(n).exchangeTokenPromise}catch(c){c.code==="appCheck/throttled"?Kt.warn(c.message):Kt.error(c),s=c}let a;return i?s?ht(i)?a={token:i.token,internalError:s}:a=ea(s):(a={token:i.token},r.token=i,await ti(n,i)):a=ea(s),o&&Hl(n,a),a}function jl(e,t,n,r){const{app:i}=e,s=te(i),o={next:n,error:r,type:t};if(s.tokenObservers=[...s.tokenObservers,o],s.token&&ht(s.token)){const a=s.token;Promise.resolve().then(()=>{n({token:a.token}),Zo(e)}).catch(()=>{})}s.cachedTokenPromise.then(()=>Zo(e))}function Fl(e,t){const n=te(e),r=n.tokenObservers.filter(i=>i.next!==t);r.length===0&&n.tokenRefresher&&n.tokenRefresher.isRunning()&&n.tokenRefresher.stop(),n.tokenObservers=r}function Zo(e){const{app:t}=e,n=te(t);let r=n.tokenRefresher;r||(r=Ab(e),n.tokenRefresher=r),!r.isRunning()&&n.isTokenAutoRefreshEnabled&&r.start()}function Ab(e){const{app:t}=e;return new db(async()=>{const n=te(t);let r;if(n.token?r=await Ri(e,!0):r=await Ri(e),r.error)throw r.error;if(r.internalError)throw r.internalError},()=>!0,()=>{const n=te(t);if(n.token){let r=n.token.issuedAtTimeMillis+(n.token.expireTimeMillis-n.token.issuedAtTimeMillis)*.5+3e5;const i=n.token.expireTimeMillis-5*60*1e3;return r=Math.min(r,i),Math.max(0,r-Date.now())}else return 0},Yo.RETRIAL_MIN_WAIT,Yo.RETRIAL_MAX_WAIT)}function Hl(e,t){const n=te(e).tokenObservers;for(const r of n)try{r.type==="EXTERNAL"&&t.error!=null?r.error(t.error):r.next(t)}catch{}}function ht(e){return e.expireTimeMillis-Date.now()>0}function ea(e){return{token:Cb(kb),error:e}}/**
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
 */class Rb{constructor(t,n){this.app=t,this.heartbeatServiceProvider=n}_delete(){const{tokenObservers:t}=te(this.app);for(const n of t)Fl(this.app,n.next);return Promise.resolve()}}function xb(e,t){return new Rb(e,t)}function Ob(e){return{getToken:t=>Ri(e,t),addTokenListener:t=>jl(e,"INTERNAL",t),removeTokenListener:t=>Fl(e.app,t)}}const Pb="@firebase/app-check",Nb="0.5.17";/**
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
 */const Db="https://www.google.com/recaptcha/api.js";function Lb(e,t){const n=new $t,r=te(e);r.reCAPTCHAState={initialized:n};const i=Mb(e),s=Qo(!1);return s?ta(e,t,s,i,n):Ub(()=>{const o=Qo(!1);if(!o)throw new Error("no recaptcha");ta(e,t,o,i,n)}),n.promise}function ta(e,t,n,r,i){n.ready(()=>{Bb(e,t,n,r),i.resolve(n)})}function Mb(e){const t=`fire_app_check_${e.name}`,n=document.createElement("div");return n.id=t,n.style.display="none",document.body.appendChild(n),t}async function $b(e){xl(e);const n=await te(e).reCAPTCHAState.initialized.promise;return new Promise((r,i)=>{const s=te(e).reCAPTCHAState;n.ready(()=>{r(n.execute(s.widgetId,{action:"fire_app_check"}))})})}function Bb(e,t,n,r){const i=n.render(r,{sitekey:t,size:"invisible"}),s=te(e);s.reCAPTCHAState=Object.assign(Object.assign({},s.reCAPTCHAState),{widgetId:i})}function Ub(e){const t=document.createElement("script");t.src=Db,t.onload=e,document.head.appendChild(t)}/**
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
 */class Rs{constructor(t){this._siteKey=t,this._throttleData=null}async getToken(){var t,n;Fb(this._throttleData);const r=await $b(this._app).catch(s=>{throw re.create("recaptcha-error")});let i;try{i=await Pl(pb(this._app,r),this._heartbeatServiceProvider)}catch(s){throw!((t=s.code)===null||t===void 0)&&t.includes("fetch-status-error")?(this._throttleData=jb(Number((n=s.customData)===null||n===void 0?void 0:n.httpStatus),this._throttleData),re.create("throttled",{time:Ol(this._throttleData.allowRequestsAfter-Date.now()),httpStatus:this._throttleData.httpStatus})):s}return this._throttleData=null,i}initialize(t){this._app=t,this._heartbeatServiceProvider=it(t,"heartbeat"),Lb(t,this._siteKey).catch(()=>{})}isEqual(t){return t instanceof Rs?this._siteKey===t._siteKey:!1}}function jb(e,t){if(e===404||e===403)return{backoffCount:1,allowRequestsAfter:Date.now()+hb,httpStatus:e};{const n=t?t.backoffCount:0,r=Wf(n,1e3,2);return{backoffCount:n+1,allowRequestsAfter:Date.now()+r,httpStatus:e}}}function Fb(e){if(e&&Date.now()-e.allowRequestsAfter<=0)throw re.create("throttled",{time:Ol(e.allowRequestsAfter-Date.now()),httpStatus:e.httpStatus})}/**
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
 */function Hb(e=Zt(),t){e=ge(e);const n=it(e,"app-check");if(Cr().initialized||Tb(),Bl()&&Ul().then(i=>console.log(`App Check debug token: ${i}. You will need to add it to your app's App Check settings in the Firebase console for it to work.`)),n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(s.isTokenAutoRefreshEnabled===t.isTokenAutoRefreshEnabled&&s.provider.isEqual(t.provider))return i;throw re.create("already-initialized",{appName:e.name})}const r=n.initialize({options:t});return zb(e,t.provider,t.isTokenAutoRefreshEnabled),te(e).isTokenAutoRefreshEnabled&&jl(r,"INTERNAL",()=>{}),r}function zb(e,t,n){const r=cb(e,Object.assign({},Al));r.activated=!0,r.provider=t,r.cachedTokenPromise=Eb(e).then(i=>(i&&ht(i)&&(r.token=i,Hl(e,{token:i.token})),i)),r.isTokenAutoRefreshEnabled=n===void 0?e.automaticDataCollectionEnabled:n,r.provider.initialize(e)}const Wb="app-check",na="app-check-internal";function Vb(){_e(new de(Wb,e=>{const t=e.getProvider("app").getImmediate(),n=e.getProvider("heartbeat");return xb(t,n)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,n)=>{e.getProvider(na).initialize()})),_e(new de(na,e=>{const t=e.getProvider("app-check").getImmediate();return Ob(t)},"PUBLIC").setInstantiationMode("EXPLICIT")),ie(Pb,Nb)}Vb();const fn=za({apiKey:"AIzaSyAQbRVky1tCDAOa1v6DB5nEsE1cmlH5oP8",authDomain:"dsnr-app.firebaseapp.com",projectId:"dsnr-app",storageBucket:"dsnr-app.appspot.com",messagingSenderId:"414774640373",appId:"1:414774640373:web:36f620f8017f4b4e9f4fbc",measurementId:"G-00HH77QRP7"});qm(fn);hy(fn);By(fn);const Gb=ib(fn);Hb(fn,{provider:new Rs("6Lfz6S0jAAAAACGAh4f8lbgFKlRHQHJS_RGtTMvv"),isTokenAutoRefreshEnabled:!0});const qb=Jt("<div><pre></pre></div>"),Kb=async e=>await ob(Gb,"authoratativeQuery")({hostname:e}),Xb=()=>{const[e,t]=Ie(),[n]=ql(e,Kb);return[_(vf,{handleHostname:t}),(()=>{const r=qb.cloneNode(!0),i=r.firstChild;return Ni(i,()=>JSON.stringify(n(),null,2)),r})()]};lu(()=>_(Wd,{get children(){return _(Xb,{})}}),document.getElementById("root"));
