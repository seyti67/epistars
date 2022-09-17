import{_ as H}from"./chunks/preload-helper-aa6bc0ce.js";import{S as Me,i as He,s as We,a as Xe,e as J,c as Ye,b as M,g as ie,t as z,d as le,f as K,h as x,j as Qe,o as be,k as Ze,l as et,m as tt,n as ge,p as N,q as nt,r as rt,u as at,v as W,w as Re,x as X,y as Y,z as qe}from"./chunks/index-be5ec05f.js";import{g as Ce,f as Be,s as G,a as ve,b as st,i as ot}from"./chunks/singletons-2e37957a.js";class we{constructor(e,t){this.status=e,typeof t=="string"?this.body={message:t}:t?this.body=t:this.body={message:`Error: ${e}`}}toString(){return JSON.stringify(this.body)}}class Je{constructor(e,t){this.status=e,this.location=t}}function it(a,e){return a==="/"||e==="ignore"?a:e==="never"?a.endsWith("/")?a.slice(0,-1):a:e==="always"&&!a.endsWith("/")?a+"/":a}function lt(a){for(const e in a)a[e]=a[e].replace(/%23/g,"#").replace(/%3[Bb]/g,";").replace(/%2[Cc]/g,",").replace(/%2[Ff]/g,"/").replace(/%3[Ff]/g,"?").replace(/%3[Aa]/g,":").replace(/%40/g,"@").replace(/%26/g,"&").replace(/%3[Dd]/g,"=").replace(/%2[Bb]/g,"+").replace(/%24/g,"$");return a}const ct=["href","pathname","search","searchParams","toString","toJSON"];function ft(a,e){const t=new URL(a);for(const c of ct){let i=t[c];Object.defineProperty(t,c,{get(){return e(),i},enumerable:!0,configurable:!0})}return t[Symbol.for("nodejs.util.inspect.custom")]=(c,i,p)=>p(a,i),ut(t),t}function ut(a){Object.defineProperty(a,"hash",{get(){throw new Error("Cannot access event.url.hash. Consider using `$page.url.hash` inside a component instead")}})}function dt(a){let e=5381,t=a.length;if(typeof a=="string")for(;t;)e=e*33^a.charCodeAt(--t);else for(;t;)e=e*33^a[--t];return(e>>>0).toString(36)}const Se=window.fetch;window.fetch=(a,e)=>{if((a instanceof Request?a.method:(e==null?void 0:e.method)||"GET")!=="GET"){const c=new URL(a instanceof Request?a.url:a.toString(),document.baseURI).href;oe.delete(c)}return Se(a,e)};const oe=new Map;function pt(a,e,t){let i=`script[data-sveltekit-fetched][data-url=${JSON.stringify(typeof a=="string"?a:a.url)}]`;t&&typeof t.body=="string"&&(i+=`[data-hash="${dt(t.body)}"]`);const p=document.querySelector(i);if(p!=null&&p.textContent){const{body:n,...u}=JSON.parse(p.textContent),y=p.getAttribute("data-ttl");return y&&oe.set(e,{body:n,init:u,ttl:1e3*Number(y)}),Promise.resolve(new Response(n,u))}return Se(a,t)}function ht(a,e){const t=oe.get(a);if(t){if(performance.now()<t.ttl)return new Response(t.body,t.init);oe.delete(a)}return Se(a,e)}const mt=/^(\.\.\.)?(\w+)(?:=(\w+))?$/;function _t(a){const e=[],t=[];let c=!0;return{pattern:a===""?/^\/$/:new RegExp(`^${a.split(/(?:\/|$)/).filter(gt).map((p,n,u)=>{const y=decodeURIComponent(p),_=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(y);if(_)return e.push(_[1]),t.push(_[2]),"(?:/(.*))?";const b=n===u.length-1;return y&&"/"+y.split(/\[(.+?)\]/).map(($,R)=>{if(R%2){const T=mt.exec($);if(!T)throw new Error(`Invalid param: ${$}. Params and matcher names can only have underscores and alphanumeric characters.`);const[,I,D,V]=T;return e.push(D),t.push(V),I?"(.*?)":"([^/]+?)"}return b&&$.includes(".")&&(c=!1),$.normalize().replace(/%5[Bb]/g,"[").replace(/%5[Dd]/g,"]").replace(/#/g,"%23").replace(/\?/g,"%3F").replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}).join("")}).join("")}${c?"/?":""}$`),names:e,types:t}}function gt(a){return!/^\([^)]+\)$/.test(a)}function wt(a,e,t,c){const i={};for(let p=0;p<e.length;p+=1){const n=e[p],u=t[p],y=a[p+1]||"";if(u){const _=c[u];if(!_)throw new Error(`Missing "${u}" param matcher`);if(!_(y))return}i[n]=y}return i}function yt(a,e,t,c){const i=new Set(e);return Object.entries(t).map(([u,[y,_,b]])=>{const{pattern:$,names:R,types:T}=_t(u),I={id:u,exec:D=>{const V=$.exec(D);if(V)return wt(V,R,T,c)},errors:[1,...b||[]].map(D=>a[D]),layouts:[0,..._||[]].map(n),leaf:p(y)};return I.errors.length=I.layouts.length=Math.max(I.errors.length,I.layouts.length),I});function p(u){const y=u<0;return y&&(u=~u),[y,a[u]]}function n(u){return u===void 0?u:[i.has(u),a[u]]}}function bt(a){let e,t,c;var i=a[0][0];function p(n){return{props:{data:n[2],form:n[1]}}}return i&&(e=new i(p(a))),{c(){e&&W(e.$$.fragment),t=J()},l(n){e&&Re(e.$$.fragment,n),t=J()},m(n,u){e&&X(e,n,u),M(n,t,u),c=!0},p(n,u){const y={};if(u&4&&(y.data=n[2]),u&2&&(y.form=n[1]),i!==(i=n[0][0])){if(e){ie();const _=e;z(_.$$.fragment,1,0,()=>{Y(_,1)}),le()}i?(e=new i(p(n)),W(e.$$.fragment),K(e.$$.fragment,1),X(e,t.parentNode,t)):e=null}else i&&e.$set(y)},i(n){c||(e&&K(e.$$.fragment,n),c=!0)},o(n){e&&z(e.$$.fragment,n),c=!1},d(n){n&&x(t),e&&Y(e,n)}}}function vt(a){let e,t,c;var i=a[0][0];function p(n){return{props:{data:n[2],$$slots:{default:[kt]},$$scope:{ctx:n}}}}return i&&(e=new i(p(a))),{c(){e&&W(e.$$.fragment),t=J()},l(n){e&&Re(e.$$.fragment,n),t=J()},m(n,u){e&&X(e,n,u),M(n,t,u),c=!0},p(n,u){const y={};if(u&4&&(y.data=n[2]),u&523&&(y.$$scope={dirty:u,ctx:n}),i!==(i=n[0][0])){if(e){ie();const _=e;z(_.$$.fragment,1,0,()=>{Y(_,1)}),le()}i?(e=new i(p(n)),W(e.$$.fragment),K(e.$$.fragment,1),X(e,t.parentNode,t)):e=null}else i&&e.$set(y)},i(n){c||(e&&K(e.$$.fragment,n),c=!0)},o(n){e&&z(e.$$.fragment,n),c=!1},d(n){n&&x(t),e&&Y(e,n)}}}function kt(a){let e,t,c;var i=a[0][1];function p(n){return{props:{data:n[3],form:n[1]}}}return i&&(e=new i(p(a))),{c(){e&&W(e.$$.fragment),t=J()},l(n){e&&Re(e.$$.fragment,n),t=J()},m(n,u){e&&X(e,n,u),M(n,t,u),c=!0},p(n,u){const y={};if(u&8&&(y.data=n[3]),u&2&&(y.form=n[1]),i!==(i=n[0][1])){if(e){ie();const _=e;z(_.$$.fragment,1,0,()=>{Y(_,1)}),le()}i?(e=new i(p(n)),W(e.$$.fragment),K(e.$$.fragment,1),X(e,t.parentNode,t)):e=null}else i&&e.$set(y)},i(n){c||(e&&K(e.$$.fragment,n),c=!0)},o(n){e&&z(e.$$.fragment,n),c=!1},d(n){n&&x(t),e&&Y(e,n)}}}function ze(a){let e,t=a[5]&&Ke(a);return{c(){e=Ze("div"),t&&t.c(),this.h()},l(c){e=et(c,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var i=tt(e);t&&t.l(i),i.forEach(x),this.h()},h(){ge(e,"id","svelte-announcer"),ge(e,"aria-live","assertive"),ge(e,"aria-atomic","true"),N(e,"position","absolute"),N(e,"left","0"),N(e,"top","0"),N(e,"clip","rect(0 0 0 0)"),N(e,"clip-path","inset(50%)"),N(e,"overflow","hidden"),N(e,"white-space","nowrap"),N(e,"width","1px"),N(e,"height","1px")},m(c,i){M(c,e,i),t&&t.m(e,null)},p(c,i){c[5]?t?t.p(c,i):(t=Ke(c),t.c(),t.m(e,null)):t&&(t.d(1),t=null)},d(c){c&&x(e),t&&t.d()}}}function Ke(a){let e;return{c(){e=nt(a[6])},l(t){e=rt(t,a[6])},m(t,c){M(t,e,c)},p(t,c){c&64&&at(e,t[6])},d(t){t&&x(e)}}}function Et(a){let e,t,c,i,p;const n=[vt,bt],u=[];function y(b,$){return b[0][1]?0:1}e=y(a),t=u[e]=n[e](a);let _=a[4]&&ze(a);return{c(){t.c(),c=Xe(),_&&_.c(),i=J()},l(b){t.l(b),c=Ye(b),_&&_.l(b),i=J()},m(b,$){u[e].m(b,$),M(b,c,$),_&&_.m(b,$),M(b,i,$),p=!0},p(b,[$]){let R=e;e=y(b),e===R?u[e].p(b,$):(ie(),z(u[R],1,1,()=>{u[R]=null}),le(),t=u[e],t?t.p(b,$):(t=u[e]=n[e](b),t.c()),K(t,1),t.m(c.parentNode,c)),b[4]?_?_.p(b,$):(_=ze(b),_.c(),_.m(i.parentNode,i)):_&&(_.d(1),_=null)},i(b){p||(K(t),p=!0)},o(b){z(t),p=!1},d(b){u[e].d(b),b&&x(c),_&&_.d(b),b&&x(i)}}}function Rt(a,e,t){let{stores:c}=e,{page:i}=e,{components:p}=e,{form:n}=e,{data_0:u=null}=e,{data_1:y=null}=e;Qe(c.page.notify);let _=!1,b=!1,$=null;return be(()=>{const R=c.page.subscribe(()=>{_&&(t(5,b=!0),t(6,$=document.title||"untitled page"))});return t(4,_=!0),R}),a.$$set=R=>{"stores"in R&&t(7,c=R.stores),"page"in R&&t(8,i=R.page),"components"in R&&t(0,p=R.components),"form"in R&&t(1,n=R.form),"data_0"in R&&t(2,u=R.data_0),"data_1"in R&&t(3,y=R.data_1)},a.$$.update=()=>{a.$$.dirty&384&&c.page.set(i)},[p,n,u,y,_,b,$,c,i]}class St extends Me{constructor(e){super(),He(this,e,Rt,Et,We,{stores:7,page:8,components:0,form:1,data_0:2,data_1:3})}}const $t={},ce=[()=>H(()=>import("./chunks/0-1bedab1a.js"),["chunks\\0-1bedab1a.js","chunks\\_layout-1daba58d.js","components\\pages\\_layout.svelte-7a41521c.js","assets\\_layout-5967d5a9.css","chunks\\index-be5ec05f.js","chunks\\preload-helper-aa6bc0ce.js","chunks\\singletons-2e37957a.js"],import.meta.url),()=>H(()=>import("./chunks/1-4490fe8d.js"),["chunks\\1-4490fe8d.js","components\\error.svelte-d12d3af2.js","chunks\\index-be5ec05f.js","chunks\\singletons-2e37957a.js"],import.meta.url),()=>H(()=>import("./chunks/2-0291e18a.js"),["chunks\\2-0291e18a.js","components\\pages\\_page.svelte-bc896818.js","chunks\\index-be5ec05f.js"],import.meta.url),()=>H(()=>import("./chunks/3-6ea5c207.js"),["chunks\\3-6ea5c207.js","components\\pages\\telecharger\\_page.svelte-6be5bda5.js","chunks\\index-be5ec05f.js"],import.meta.url),()=>H(()=>import("./chunks/4-4e38df90.js"),["chunks\\4-4e38df90.js","components\\pages\\wiki\\_page.svelte-79300c34.js","chunks\\index-be5ec05f.js"],import.meta.url)],Lt=[],Ot={"":[2],telecharger:[3],wiki:[4]},Pt={handleError:({error:a})=>(console.error(a),{message:"Internal Error"})},It="/__data.js",Ge="sveltekit:scroll",B="sveltekit:index",re=yt(ce,Lt,Ot,$t),ke=ce[0],Ee=ce[1];ke();Ee();let te={};try{te=JSON.parse(sessionStorage[Ge])}catch{}function ye(a){te[a]=ve()}function jt({target:a,base:e,trailing_slash:t}){var Te;const c=[],i={id:null,promise:null},p={before_navigate:[],after_navigate:[]};let n={branch:[],error:null,session_id:0,url:null},u=!1,y=!0,_=!1,b=1,$=null,R=!1,T,I=(Te=history.state)==null?void 0:Te[B];I||(I=Date.now(),history.replaceState({...history.state,[B]:I},"",location.href));const D=te[I];D&&(history.scrollRestoration="manual",scrollTo(D.x,D.y));let V=!1,q,$e;function Le(){if(!$){const r=new URL(location.href);$=Promise.resolve().then(async()=>{const o=pe(r,!0);await Pe(o,r,[]),$=null,R=!1})}return $}async function fe(r,{noscroll:o=!1,replaceState:d=!1,keepfocus:s=!1,state:l={}},h){return typeof r=="string"&&(r=new URL(r,Ce(document))),he({url:r,scroll:o?ve():null,keepfocus:s,redirect_chain:h,details:{state:l,replaceState:d},accepted:()=>{},blocked:()=>{},type:"goto"})}async function Oe(r){const o=pe(r,!1);if(!o)throw new Error("Attempted to prefetch a URL that does not belong to this app");return i.promise=Ae(o),i.id=o.id,i.promise}async function Pe(r,o,d,s,l){var v,k;const h=$e={};let m=r&&await Ae(r);if(!m&&o.origin===location.origin&&o.pathname===location.pathname&&(m=await ne({status:404,error:new Error(`Not found: ${o.pathname}`),url:o,routeId:null})),!m)return await Z(o),!1;if(o=(r==null?void 0:r.url)||o,$e!==h)return!1;if(c.length=0,m.type==="redirect")if(d.length>10||d.includes(o.pathname))m=await ne({status:500,error:new Error("Redirect loop"),url:o,routeId:null});else return fe(new URL(m.location,o).href,{},[...d,o.pathname]),!1;else((k=(v=m.props)==null?void 0:v.page)==null?void 0:k.status)>=400&&await G.updated.check()&&await Z(o);if(_=!0,s&&s.details){const{details:w}=s,g=w.replaceState?0:1;w.state[B]=I+=g,history[w.replaceState?"replaceState":"pushState"](w.state,"",o)}if(u){n=m.state,m.props.page&&(m.props.page.url=o);const w=se();T.$set(m.props),w()}else Ie(m);if(s){const{scroll:w,keepfocus:g}=s;if(!g){const E=document.body,j=E.getAttribute("tabindex");E.tabIndex=-1,E.focus({preventScroll:!0}),setTimeout(()=>{var L;(L=getSelection())==null||L.removeAllRanges()}),j!==null?E.setAttribute("tabindex",j):E.removeAttribute("tabindex")}if(await qe(),y){const E=o.hash&&document.getElementById(o.hash.slice(1));w?scrollTo(w.x,w.y):E?E.scrollIntoView():scrollTo(0,0)}}else await qe();i.promise=null,i.id=null,y=!0,m.props.page&&(q=m.props.page),l&&l(),_=!1}function Ie(r){var l,h;n=r.state;const o=document.querySelector("style[data-sveltekit]");o&&o.remove(),q=r.props.page;const d=se();T=new St({target:a,props:{...r.props,stores:G},hydrate:!0}),d();const s={from:null,to:ae("to",{params:n.params,routeId:(h=(l=n.route)==null?void 0:l.id)!=null?h:null,url:new URL(location.href)}),type:"load"};p.after_navigate.forEach(m=>m(s)),u=!0}async function Q({url:r,params:o,branch:d,status:s,error:l,route:h,form:m}){var j;const v=d.filter(Boolean),k={type:"loaded",state:{url:r,params:o,branch:d,error:l,route:h,session_id:b},props:{components:v.map(L=>L.node.component)}};m!==void 0&&(k.props.form=m);let w={},g=!q;for(let L=0;L<v.length;L+=1){const A=v[L];w={...w,...A.data},(g||!n.branch.some(U=>U===A))&&(k.props[`data_${L}`]=w,g=g||Object.keys((j=A.data)!=null?j:{}).length>0)}if(g||(g=Object.keys(q.data).length!==Object.keys(w).length),!n.url||r.href!==n.url.href||n.error!==l||g){k.props.page={error:l,params:o,routeId:h&&h.id,status:s,url:r,data:g?w:q.data};const L=(A,U)=>{Object.defineProperty(k.props.page,A,{get:()=>{throw new Error(`$page.${A} has been replaced by $page.url.${U}`)}})};L("origin","origin"),L("path","pathname"),L("query","searchParams")}return k}async function ue({loader:r,parent:o,url:d,params:s,routeId:l,server_data_node:h}){var w,g,E,j,L;let m=null;const v={dependencies:new Set,params:new Set,parent:!1,url:!1},k=await r();if((w=k.shared)!=null&&w.load){let A=function(...f){for(const S of f){const{href:O}=new URL(S,d);v.dependencies.add(O)}};const U={};for(const f in s)Object.defineProperty(U,f,{get(){return v.params.add(f),s[f]},enumerable:!0});const C={routeId:l,params:U,data:(g=h==null?void 0:h.data)!=null?g:null,url:ft(d,()=>{v.url=!0}),async fetch(f,S){let O;typeof f=="string"?O=f:(O=f.url,S={body:f.method==="GET"||f.method==="HEAD"?void 0:await f.blob(),cache:f.cache,credentials:f.credentials,headers:f.headers,integrity:f.integrity,keepalive:f.keepalive,method:f.method,mode:f.mode,redirect:f.redirect,referrer:f.referrer,referrerPolicy:f.referrerPolicy,signal:f.signal,...S});const P=new URL(O,d).href;return A(P),u?ht(P,S):pt(O,P,S)},setHeaders:()=>{},depends:A,parent(){return v.parent=!0,o()}};Object.defineProperties(C,{props:{get(){throw new Error("@migration task: Replace `props` with `data` stuff https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693")},enumerable:!1},session:{get(){throw new Error("session is no longer available. See https://github.com/sveltejs/kit/discussions/5883")},enumerable:!1},stuff:{get(){throw new Error("@migration task: Remove stuff https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693")},enumerable:!1}}),m=(E=await k.shared.load.call(null,C))!=null?E:null}return{node:k,loader:r,server:h,shared:(j=k.shared)!=null&&j.load?{type:"data",data:m,uses:v}:null,data:(L=m!=null?m:h==null?void 0:h.data)!=null?L:null}}function je(r,o,d){if(R)return!0;if(!d)return!1;if(d.parent&&o||r.url&&d.url)return!0;for(const s of r.params)if(d.params.has(s))return!0;for(const s of d.dependencies)if(c.some(l=>l(new URL(s))))return!0;return!1}function de(r,o){var d,s;return(r==null?void 0:r.type)==="data"?{type:"data",data:r.data,uses:{dependencies:new Set((d=r.uses.dependencies)!=null?d:[]),params:new Set((s=r.uses.params)!=null?s:[]),parent:!!r.uses.parent,url:!!r.uses.url}}:(r==null?void 0:r.type)==="skip"&&o!=null?o:null}async function Ae({id:r,invalidating:o,url:d,params:s,route:l}){var C;if(i.id===r&&i.promise)return i.promise;const{errors:h,layouts:m,leaf:v}=l,k=n.url&&{url:r!==n.url.pathname+n.url.search,params:Object.keys(s).filter(f=>n.params[f]!==s[f])},w=[...m,v];h.forEach(f=>f==null?void 0:f().catch(()=>{})),w.forEach(f=>f==null?void 0:f[1]().catch(()=>{}));let g=null;const E=w.reduce((f,S,O)=>{var F;const P=n.branch[O],ee=!!(S!=null&&S[0])&&((P==null?void 0:P.loader)!==S[1]||je(k,f.some(Boolean),(F=P.server)==null?void 0:F.uses));return f.push(ee),f},[]);if(E.some(Boolean)){try{g=await xe(d,E)}catch(f){return ne({status:500,error:f,url:d,routeId:l.id})}if(g.type==="redirect")return g}const j=g==null?void 0:g.nodes;let L=!1;const A=w.map(async(f,S)=>{var me,De;if(!f)return;const O=n.branch[S],P=(me=j==null?void 0:j[S])!=null?me:null;if((!P||P.type==="skip")&&f[1]===(O==null?void 0:O.loader)&&!je(k,L,(De=O.shared)==null?void 0:De.uses))return O;if(L=!0,(P==null?void 0:P.type)==="error")throw P;return ue({loader:f[1],url:d,params:s,routeId:l.id,parent:async()=>{var Ve;const Ne={};for(let _e=0;_e<S;_e+=1)Object.assign(Ne,(Ve=await A[_e])==null?void 0:Ve.data);return Ne},server_data_node:de(P,O==null?void 0:O.server)})});for(const f of A)f.catch(()=>{});const U=[];for(let f=0;f<w.length;f+=1)if(w[f])try{U.push(await A[f])}catch(S){if(S instanceof Je)return{type:"redirect",location:S.location};let O=500,P;for(j!=null&&j.includes(S)?(O=(C=S.status)!=null?C:O,P=S.error):S instanceof we?(O=S.status,P=S.body):P=Fe(S,{params:s,url:d,routeId:l.id});f--;)if(h[f]){let ee,F=f;for(;!U[F];)F-=1;try{return ee={node:await h[f](),loader:h[f],data:{},server:null,shared:null},await Q({url:d,params:s,branch:U.slice(0,F+1).concat(ee),status:O,error:P,route:l})}catch{continue}}await Z(d);return}else U.push(void 0);return await Q({url:d,params:s,branch:U,status:200,error:null,route:l,form:o?void 0:null})}async function ne({status:r,error:o,url:d,routeId:s}){var w;const l={},h=await ke();let m=null;if(h.server)try{const g=await xe(d,[!0]);if(g.type!=="data"||g.nodes[0]&&g.nodes[0].type!=="data")throw 0;m=(w=g.nodes[0])!=null?w:null}catch{await Z(d);return}const v=await ue({loader:ke,url:d,params:l,routeId:s,parent:()=>Promise.resolve({}),server_data_node:de(m)}),k={node:await Ee(),loader:Ee,shared:null,server:null,data:null};return await Q({url:d,params:l,branch:[v,k],status:r,error:o instanceof we?o.body:Fe(o,{url:d,params:l,routeId:null}),route:null})}function pe(r,o){if(Ue(r))return;const d=decodeURI(r.pathname.slice(e.length)||"/");for(const s of re){const l=s.exec(d);if(l){const h=new URL(r.origin+it(r.pathname,t)+r.search+r.hash);return{id:h.pathname+h.search,invalidating:o,route:s,params:lt(l),url:h}}}}function Ue(r){return r.origin!==location.origin||!r.pathname.startsWith(e)}async function he({url:r,scroll:o,keepfocus:d,redirect_chain:s,details:l,type:h,delta:m,accepted:v,blocked:k}){var L,A,U,C;let w=!1;const g=pe(r,!1),E={from:ae("from",{params:n.params,routeId:(A=(L=n.route)==null?void 0:L.id)!=null?A:null,url:n.url}),to:ae("to",{params:(U=g==null?void 0:g.params)!=null?U:null,routeId:(C=g==null?void 0:g.route.id)!=null?C:null,url:r}),type:h};m!==void 0&&(E.delta=m);const j={...E,cancel:()=>{w=!0}};if(p.before_navigate.forEach(f=>f(j)),w){k();return}ye(I),v(),u&&G.navigating.set(E),await Pe(g,r,s,{scroll:o,keepfocus:d,details:l},()=>{p.after_navigate.forEach(f=>f(E)),G.navigating.set(null)})}function Z(r){return location.href=r.href,new Promise(()=>{})}return{after_navigate:r=>{be(()=>(p.after_navigate.push(r),()=>{const o=p.after_navigate.indexOf(r);p.after_navigate.splice(o,1)}))},before_navigate:r=>{be(()=>(p.before_navigate.push(r),()=>{const o=p.before_navigate.indexOf(r);p.before_navigate.splice(o,1)}))},disable_scroll_handling:()=>{(_||!u)&&(y=!1)},goto:(r,o={})=>fe(r,o,[]),invalidate:r=>{if(r===void 0)throw new Error("`invalidate()` (with no arguments) has been replaced by `invalidateAll()`");if(typeof r=="function")c.push(r);else{const{href:o}=new URL(r,location.href);c.push(d=>d.href===o)}return Le()},invalidateAll:()=>(R=!0,Le()),prefetch:async r=>{const o=new URL(r,Ce(document));await Oe(o)},prefetch_routes:async r=>{const d=(r?re.filter(s=>r.some(l=>s.exec(l))):re).map(s=>Promise.all([...s.layouts,s.leaf].map(l=>l==null?void 0:l[1]())));await Promise.all(d)},apply_action:async r=>{if(r.type==="error"){const o=new URL(location.href),{branch:d,route:s}=n;if(!s)return;let l=n.branch.length;for(;l--;)if(s.errors[l]){let h,m=l;for(;!d[m];)m-=1;try{h={node:await s.errors[l](),loader:s.errors[l],data:{},server:null,shared:null};const v=await Q({url:o,params:n.params,branch:d.slice(0,m+1).concat(h),status:500,error:r.error,route:s});n=v.state;const k=se();T.$set(v.props),k();return}catch{continue}}}else if(r.type==="redirect")fe(r.location,{},[]);else{const o={form:r.data};r.status!==q.status&&(o.page={...q,status:r.status});const d=se();T.$set(o),d()}},_start_router:()=>{history.scrollRestoration="manual",addEventListener("beforeunload",s=>{var m,v;let l=!1;const h={from:ae("from",{params:n.params,routeId:(v=(m=n.route)==null?void 0:m.id)!=null?v:null,url:n.url}),to:null,type:"unload",cancel:()=>l=!0};p.before_navigate.forEach(k=>k(h)),l?(s.preventDefault(),s.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{if(document.visibilityState==="hidden"){ye(I);try{sessionStorage[Ge]=JSON.stringify(te)}catch{}}});const r=s=>{const{url:l,options:h}=Be(s);if(l&&h.prefetch){if(Ue(l))return;Oe(l)}};let o;const d=s=>{clearTimeout(o),o=setTimeout(()=>{var l;(l=s.target)==null||l.dispatchEvent(new CustomEvent("sveltekit:trigger_prefetch",{bubbles:!0}))},20)};addEventListener("touchstart",r),addEventListener("mousemove",d),addEventListener("sveltekit:trigger_prefetch",r),addEventListener("click",s=>{if(s.button||s.which!==1||s.metaKey||s.ctrlKey||s.shiftKey||s.altKey||s.defaultPrevented)return;const{a:l,url:h,options:m}=Be(s);if(!l||!h)return;const v=l instanceof SVGAElement;if(!v&&!(h.protocol==="https:"||h.protocol==="http:"))return;const k=(l.getAttribute("rel")||"").split(/\s+/);if(l.hasAttribute("download")||k.includes("external")||m.reload||(v?l.target.baseVal:l.target))return;const[w,g]=h.href.split("#");if(g!==void 0&&w===location.href.split("#")[0]){V=!0,ye(I),G.page.set({...q,url:h}),G.page.notify();return}he({url:h,scroll:m.noscroll?ve():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:h.href===location.href},accepted:()=>s.preventDefault(),blocked:()=>s.preventDefault(),type:"link"})}),addEventListener("popstate",s=>{if(s.state){if(s.state[B]===I)return;const l=s.state[B]-I;he({url:new URL(location.href),scroll:te[s.state[B]],keepfocus:!1,redirect_chain:[],details:null,accepted:()=>{I=s.state[B]},blocked:()=>{history.go(-l)},type:"popstate",delta:l})}}),addEventListener("hashchange",()=>{V&&(V=!1,history.replaceState({...history.state,[B]:++I},"",location.href))});for(const s of document.querySelectorAll("link"))s.rel==="icon"&&(s.href=s.href);addEventListener("pageshow",s=>{s.persisted&&G.navigating.set(null)})},_hydrate:async({status:r,error:o,node_ids:d,params:s,routeId:l,data:h,form:m})=>{var w;const v=new URL(location.href);let k;try{const g=d.map(async(E,j)=>{const L=h[j];return ue({loader:ce[E],url:v,params:s,routeId:l,parent:async()=>{const A={};for(let U=0;U<j;U+=1)Object.assign(A,(await g[U]).data);return A},server_data_node:de(L)})});k=await Q({url:v,params:s,branch:await Promise.all(g),status:r,error:o,form:m,route:(w=re.find(E=>E.id===l))!=null?w:null})}catch(g){const E=g;if(E instanceof Je){await Z(new URL(g.location,location.href));return}k=await ne({status:E instanceof we?E.status:500,error:E,url:v,routeId:l})}Ie(k)}}}let At=1;async function xe(a,e){const t=new URL(a);t.pathname=a.pathname.replace(/\/$/,"")+It,t.searchParams.set("__invalid",e.map(i=>i?"y":"n").join("")),t.searchParams.set("__id",String(At++)),await H(()=>import(t.href),[],import.meta.url);const c=window.__sveltekit_data;return delete window.__sveltekit_data,c}function Fe(a,e){var t;return(t=Pt.handleError({error:a,event:e}))!=null?t:{message:"Internal Error"}}const Ut=["hash","href","host","hostname","origin","pathname","port","protocol","search","searchParams","toString","toJSON"];function ae(a,e){for(const t of Ut)Object.defineProperty(e,t,{get(){throw new Error(`The navigation shape changed - ${a}.${t} should now be ${a}.url.${t}`)}});return e}function se(){return()=>{}}async function Vt({env:a,hydrate:e,paths:t,target:c,trailing_slash:i}){st(t);const p=jt({target:c,base:t.base,trailing_slash:i});ot({client:p}),e?await p._hydrate(e):p.goto(location.href,{replaceState:!0}),p._start_router()}export{Vt as start};
