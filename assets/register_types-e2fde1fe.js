var y=Object.defineProperty;var m=(a,e,r)=>e in a?y(a,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):a[e]=r;var p=(a,e,r)=>(m(a,typeof e!="symbol"?e+"":e,r),r);import{serializable as c,PlayableDirector as n,Behaviour as D,TypeStore as f}from"./needle-engine-b62314af.js";import{O}from"./three.module-6733540f.js";import"./index-ab675677.js";var v=Object.defineProperty,P=Object.getOwnPropertyDescriptor,s=(a,e,r,o)=>{for(var t=o>1?void 0:o?P(e,r):e,i=a.length-1,l;i>=0;i--)(l=a[i])&&(t=(o?l(e,r,t):l(t))||t);return o&&t&&v(e,r,t),t};class b extends D{constructor(){super(...arguments);p(this,"playableDirectorGameObject");p(this,"playableDirector")}PlayAnimation(){var r;this.playableDirector&&((r=this.playableDirector)==null||r.play())}}s([c(O)],b.prototype,"playableDirectorGameObject",2);s([c(n)],b.prototype,"playableDirector",2);f.add("StartAnimation",b);
