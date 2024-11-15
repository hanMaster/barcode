(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))l(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&l(r)}).observe(document,{childList:!0,subtree:!0});function s(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerPolicy&&(o.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?o.credentials="include":n.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function l(n){if(n.ep)return;n.ep=!0;const o=s(n);fetch(n.href,o)}})();let M=F;const y=1,m=2,P={owned:null,cleanups:null,context:null,owner:null};var c=null;let O=null,V=null,d=null,p=null,h=null,C=0;function z(e,t){const s=d,l=c,n=e.length===0,o=t===void 0?l:t,r=n?P:{owned:null,cleanups:null,context:o?o.context:null,owner:o},i=n?e:()=>e(()=>_(()=>b(r)));c=r,d=null;try{return B(i,!0)}finally{d=s,c=l}}function S(e,t,s){const l=I(e,t,!1,y);T(l)}function H(e,t,s){M=X;const l=I(e,t,!1,y);l.user=!0,h?h.push(l):T(l)}function _(e){if(d===null)return e();const t=d;d=null;try{return e()}finally{d=t}}function K(e){H(()=>_(e))}function Q(e,t,s){let l=e.value;return(!e.comparator||!e.comparator(l,t))&&(e.value=t,e.observers&&e.observers.length&&B(()=>{for(let n=0;n<e.observers.length;n+=1){const o=e.observers[n],r=O&&O.running;r&&O.disposed.has(o),(r?!o.tState:!o.state)&&(o.pure?p.push(o):h.push(o),o.observers&&$(o)),r||(o.state=y)}if(p.length>1e6)throw p=[],new Error},!1)),t}function T(e){if(!e.fn)return;b(e);const t=C;W(e,e.value,t)}function W(e,t,s){let l;const n=c,o=d;d=c=e;try{l=e.fn(t)}catch(r){return e.pure&&(e.state=y,e.owned&&e.owned.forEach(b),e.owned=null),e.updatedAt=s+1,R(r)}finally{d=o,c=n}(!e.updatedAt||e.updatedAt<=s)&&(e.updatedAt!=null&&"observers"in e?Q(e,l):e.value=l,e.updatedAt=s)}function I(e,t,s,l=y,n){const o={fn:e,state:l,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:c,context:c?c.context:null,pure:s};return c===null||c!==P&&(c.owned?c.owned.push(o):c.owned=[o]),o}function E(e){if(e.state===0)return;if(e.state===m)return U(e);if(e.suspense&&_(e.suspense.inFallback))return e.suspense.effects.push(e);const t=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<C);)e.state&&t.push(e);for(let s=t.length-1;s>=0;s--)if(e=t[s],e.state===y)T(e);else if(e.state===m){const l=p;p=null,B(()=>U(e,t[0]),!1),p=l}}function B(e,t){if(p)return e();let s=!1;t||(p=[]),h?s=!0:h=[],C++;try{const l=e();return J(s),l}catch(l){s||(h=null),p=null,R(l)}}function J(e){if(p&&(F(p),p=null),e)return;const t=h;h=null,t.length&&B(()=>M(t),!1)}function F(e){for(let t=0;t<e.length;t++)E(e[t])}function X(e){let t,s=0;for(t=0;t<e.length;t++){const l=e[t];l.user?e[s++]=l:E(l)}for(t=0;t<s;t++)E(e[t])}function U(e,t){e.state=0;for(let s=0;s<e.sources.length;s+=1){const l=e.sources[s];if(l.sources){const n=l.state;n===y?l!==t&&(!l.updatedAt||l.updatedAt<C)&&E(l):n===m&&U(l,t)}}}function $(e){for(let t=0;t<e.observers.length;t+=1){const s=e.observers[t];s.state||(s.state=m,s.pure?p.push(s):h.push(s),s.observers&&$(s))}}function b(e){let t;if(e.sources)for(;e.sources.length;){const s=e.sources.pop(),l=e.sourceSlots.pop(),n=s.observers;if(n&&n.length){const o=n.pop(),r=s.observerSlots.pop();l<n.length&&(o.sourceSlots[r]=l,n[l]=o,s.observerSlots[l]=r)}}if(e.tOwned){for(t=e.tOwned.length-1;t>=0;t--)b(e.tOwned[t]);delete e.tOwned}if(e.owned){for(t=e.owned.length-1;t>=0;t--)b(e.owned[t]);e.owned=null}if(e.cleanups){for(t=e.cleanups.length-1;t>=0;t--)e.cleanups[t]();e.cleanups=null}e.state=0}function Y(e){return e instanceof Error?e:new Error(typeof e=="string"?e:"Unknown error",{cause:e})}function R(e,t=c){throw Y(e)}function Z(e,t){return _(()=>e(t||{}))}function q(e,t,s){let l=s.length,n=t.length,o=l,r=0,i=0,f=t[n-1].nextSibling,u=null;for(;r<n||i<o;){if(t[r]===s[i]){r++,i++;continue}for(;t[n-1]===s[o-1];)n--,o--;if(n===r){const a=o<l?i?s[i-1].nextSibling:s[o-i]:f;for(;i<o;)e.insertBefore(s[i++],a)}else if(o===i)for(;r<n;)(!u||!u.has(t[r]))&&t[r].remove(),r++;else if(t[r]===s[o-1]&&s[i]===t[n-1]){const a=t[--n].nextSibling;e.insertBefore(s[i++],t[r++].nextSibling),e.insertBefore(s[--o],a),t[n]=s[o]}else{if(!u){u=new Map;let g=i;for(;g<o;)u.set(s[g],g++)}const a=u.get(t[r]);if(a!=null)if(i<a&&a<o){let g=r,N=1,D;for(;++g<n&&g<o&&!((D=u.get(t[g]))==null||D!==a+N);)N++;if(N>a-i){const j=t[r];for(;i<a;)e.insertBefore(s[i++],j)}else e.replaceChild(s[i++],t[r++])}else r++;else t[r++].remove()}}}function k(e,t,s,l={}){let n;return z(o=>{n=o,t===document?e():se(t,e(),t.firstChild?null:void 0,s)},l.owner),()=>{n(),t.textContent=""}}function ee(e,t,s){let l;const n=()=>{const r=document.createElement("template");return r.innerHTML=e,r.content.firstChild},o=()=>(l||(l=n())).cloneNode(!0);return o.cloneNode=o,o}function te(e,t,s){e.setAttribute(t,s)}function x(e,t){t==null?e.removeAttribute("class"):e.className=t}function se(e,t,s,l){if(s!==void 0&&!l&&(l=[]),typeof t!="function")return v(e,t,l,s);S(n=>v(e,t(),n,s),l)}function v(e,t,s,l,n){for(;typeof s=="function";)s=s();if(t===s)return s;const o=typeof t,r=l!==void 0;if(e=r&&s[0]&&s[0].parentNode||e,o==="string"||o==="number"){if(o==="number"&&(t=t.toString(),t===s))return s;if(r){let i=s[0];i&&i.nodeType===3?i.data!==t&&(i.data=t):i=document.createTextNode(t),s=w(e,s,l,i)}else s!==""&&typeof s=="string"?s=e.firstChild.data=t:s=e.textContent=t}else if(t==null||o==="boolean")s=w(e,s,l);else{if(o==="function")return S(()=>{let i=t();for(;typeof i=="function";)i=i();s=v(e,i,s,l)}),()=>s;if(Array.isArray(t)){const i=[],f=s&&Array.isArray(s);if(L(i,t,s,n))return S(()=>s=v(e,i,s,l,!0)),()=>s;if(i.length===0){if(s=w(e,s,l),r)return s}else f?s.length===0?G(e,i,l):q(e,s,i):(s&&w(e),G(e,i));s=i}else if(t.nodeType){if(Array.isArray(s)){if(r)return s=w(e,s,l,t);w(e,s,null,t)}else s==null||s===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);s=t}}return s}function L(e,t,s,l){let n=!1;for(let o=0,r=t.length;o<r;o++){let i=t[o],f=s&&s[e.length],u;if(!(i==null||i===!0||i===!1))if((u=typeof i)=="object"&&i.nodeType)e.push(i);else if(Array.isArray(i))n=L(e,i,f)||n;else if(u==="function")if(l){for(;typeof i=="function";)i=i();n=L(e,Array.isArray(i)?i:[i],Array.isArray(f)?f:[f])||n}else e.push(i),n=!0;else{const a=String(i);f&&f.nodeType===3&&f.data===a?e.push(f):e.push(document.createTextNode(a))}}return n}function G(e,t,s=null){for(let l=0,n=t.length;l<n;l++)e.insertBefore(t[l],s)}function w(e,t,s,l){if(s===void 0)return e.textContent="";const n=l||document.createTextNode("");if(t.length){let o=!1;for(let r=t.length-1;r>=0;r--){const i=t[r];if(n!==i){const f=i.parentNode===e;!o&&!r?f?e.replaceChild(n,i):e.insertBefore(n,s):f&&i.remove()}else o=!0}}else e.insertBefore(n,s);return[n]}const oe="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20166%20155.3'%3e%3cpath%20d='M163%2035S110-4%2069%205l-3%201c-6%202-11%205-14%209l-2%203-15%2026%2026%205c11%207%2025%2010%2038%207l46%209%2018-30z'%20fill='%2376b3e1'/%3e%3clinearGradient%20id='a'%20gradientUnits='userSpaceOnUse'%20x1='27.5'%20y1='3'%20x2='152'%20y2='63.5'%3e%3cstop%20offset='.1'%20stop-color='%2376b3e1'/%3e%3cstop%20offset='.3'%20stop-color='%23dcf2fd'/%3e%3cstop%20offset='1'%20stop-color='%2376b3e1'/%3e%3c/linearGradient%3e%3cpath%20d='M163%2035S110-4%2069%205l-3%201c-6%202-11%205-14%209l-2%203-15%2026%2026%205c11%207%2025%2010%2038%207l46%209%2018-30z'%20opacity='.3'%20fill='url(%23a)'/%3e%3cpath%20d='M52%2035l-4%201c-17%205-22%2021-13%2035%2010%2013%2031%2020%2048%2015l62-21S92%2026%2052%2035z'%20fill='%23518ac8'/%3e%3clinearGradient%20id='b'%20gradientUnits='userSpaceOnUse'%20x1='95.8'%20y1='32.6'%20x2='74'%20y2='105.2'%3e%3cstop%20offset='0'%20stop-color='%2376b3e1'/%3e%3cstop%20offset='.5'%20stop-color='%234377bb'/%3e%3cstop%20offset='1'%20stop-color='%231f3b77'/%3e%3c/linearGradient%3e%3cpath%20d='M52%2035l-4%201c-17%205-22%2021-13%2035%2010%2013%2031%2020%2048%2015l62-21S92%2026%2052%2035z'%20opacity='.3'%20fill='url(%23b)'/%3e%3clinearGradient%20id='c'%20gradientUnits='userSpaceOnUse'%20x1='18.4'%20y1='64.2'%20x2='144.3'%20y2='149.8'%3e%3cstop%20offset='0'%20stop-color='%23315aa9'/%3e%3cstop%20offset='.5'%20stop-color='%23518ac8'/%3e%3cstop%20offset='1'%20stop-color='%23315aa9'/%3e%3c/linearGradient%3e%3cpath%20d='M134%2080a45%2045%200%2000-48-15L24%2085%204%20120l112%2019%2020-36c4-7%203-15-2-23z'%20fill='url(%23c)'/%3e%3clinearGradient%20id='d'%20gradientUnits='userSpaceOnUse'%20x1='75.2'%20y1='74.5'%20x2='24.4'%20y2='260.8'%3e%3cstop%20offset='0'%20stop-color='%234377bb'/%3e%3cstop%20offset='.5'%20stop-color='%231a336b'/%3e%3cstop%20offset='1'%20stop-color='%231a336b'/%3e%3c/linearGradient%3e%3cpath%20d='M114%20115a45%2045%200%2000-48-15L4%20120s53%2040%2094%2030l3-1c17-5%2023-21%2013-34z'%20fill='url(%23d)'/%3e%3c/svg%3e",le="_App_9g4xh_1",ne="_logo_9g4xh_5",ie="_header_9g4xh_11",re="_link_9g4xh_22",A={App:le,logo:ne,"logo-spin":"_logo-spin_9g4xh_1",header:ie,link:re};var fe=ee('<div><header><img alt=logo><p>Edit <code>src/App.tsx</code> and save to reload.</p><a href=https://github.com/solidjs/solid target=_blank rel="noopener noreferrer">Learn Solid');const ce=()=>(K(()=>{"BarcodeDetector"in globalThis?(console.log("Barcode Detector supported!"),alert("Barcode Detector supported!"),new BarcodeDetector({formats:["code_39","codabar","ean_13"]}),BarcodeDetector.getSupportedFormats().then(e=>{e.forEach(t=>alert(t))})):(console.log("Barcode Detector is not supported by this browser."),alert("Barcode Detector is not supported by this browser."))}),(()=>{var e=fe(),t=e.firstChild,s=t.firstChild,l=s.nextSibling,n=l.nextSibling;return te(s,"src",oe),S(o=>{var r=A.App,i=A.header,f=A.logo,u=A.link;return r!==o.e&&x(e,o.e=r),i!==o.t&&x(t,o.t=i),f!==o.a&&x(s,o.a=f),u!==o.o&&x(n,o.o=u),o},{e:void 0,t:void 0,a:void 0,o:void 0}),e})()),ue=document.getElementById("root");k(()=>Z(ce,{}),ue);