(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const r of e.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&l(r)}).observe(document,{childList:!0,subtree:!0});function i(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function l(t){if(t.ep)return;t.ep=!0;const e=i(t);fetch(t.href,e)}})();const h="modulepreload",p=function(n,o){return new URL(n,o).href},f={},a=function(o,i,l){if(!i||i.length===0)return o();const t=document.getElementsByTagName("link");return Promise.all(i.map(e=>{if(e=p(e,l),e in f)return;f[e]=!0;const r=e.endsWith(".css"),m=r?'[rel="stylesheet"]':"";if(!!l)for(let c=t.length-1;c>=0;c--){const u=t[c];if(u.href===e&&(!r||u.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${e}"]${m}`))return;const s=document.createElement("link");if(s.rel=r?"stylesheet":h,r||(s.as="script",s.crossOrigin=""),s.href=e,document.head.appendChild(s),r)return new Promise((c,u)=>{s.addEventListener("load",c),s.addEventListener("error",()=>u(new Error(`Unable to preload CSS for ${e}`)))})})).then(()=>o())};a(()=>import("./needle-asap-3a47b2b8.js"),["./needle-asap-3a47b2b8.js","./three.module-6733540f.js"],import.meta.url);globalThis["needle:dependencies:ready"]=a(()=>import("./register_types-d9b60e19.js"),["./register_types-d9b60e19.js","./needle-engine-c622849d.js","./three.module-6733540f.js"],import.meta.url);const d=new Array;globalThis["needle:codegen_files"]=d;d.push("assets/App%20Korea%20Draft%20Scene%201.glb?v=1713950143521");document.addEventListener("DOMContentLoaded",()=>{const n=document.querySelector("needle-engine");n&&n.getAttribute("src")===null&&(n.setAttribute("hash","1713950143521"),n.setAttribute("src",JSON.stringify(d)))});console.log("Made with ♥ by 🌵 Needle - https://needle.tools — Version 3.37.5-exp");a(()=>import("./needle-engine-c622849d.js"),["./needle-engine-c622849d.js","./three.module-6733540f.js"],import.meta.url);export{a as _};
