if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,t)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let c={};const o=e=>i(e,r),l={module:{uri:r},exports:c,require:o};s[r]=Promise.all(n.map((e=>l[e]||o(e)))).then((e=>(t(...e),c)))}}define(["./workbox-3e8df8c8"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-Co2063Ma.css",revision:null},{url:"assets/index-vR8txykZ.js",revision:null},{url:"index.html",revision:"5e2aec2c34c7c4c7714b76ef3046dc5e"},{url:"registerSW.js",revision:"6054c56707366c7e10f0f314107cf7e6"},{url:"manifest.webmanifest",revision:"4c91200b270aace6c44c76c785706d6d"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
