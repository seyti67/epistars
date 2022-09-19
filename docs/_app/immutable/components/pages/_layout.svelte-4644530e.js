import{_ as Q}from"../../chunks/preload-helper-aa6bc0ce.js";import{S as M,i as q,s as z,k as b,a as E,q as U,l as w,m as y,h as u,c as A,B as x,r as Y,n as g,b as d,C as T,A as S,o as R,v as D,w as V,x as N,D as tt,f as $,t as v,y as P,p as B,E as et,g as st,d as lt,F as H,G as O,H as W,I as j,J as nt,K as at,L as rt,M as ot,N as F}from"../../chunks/index-48df2136.js";import{c as C}from"../../chunks/singletons-3c6899ef.js";C.disable_scroll_handling;C.goto;C.invalidate;C.invalidateAll;C.prefetch;C.prefetch_routes;const it=C.before_navigate,ct=C.after_navigate;function ft(r){let t,a,s,e;return{c(){t=b("canvas"),a=E(),s=b("script"),e=U(`window.ga =\r
			window.ga ||\r
			function () {\r
				(ga.q = ga.q || []).push(arguments);\r
			};\r
		ga.l = +new Date();`),this.h()},l(l){t=w(l,"CANVAS",{id:!0,class:!0}),y(t).forEach(u),a=A(l);const n=x('[data-svelte="svelte-1u9u45p"]',document.head);s=w(n,"SCRIPT",{});var o=y(s);e=Y(o,`window.ga =\r
			window.ga ||\r
			function () {\r
				(ga.q = ga.q || []).push(arguments);\r
			};\r
		ga.l = +new Date();`),o.forEach(u),n.forEach(u),this.h()},h(){g(t,"id","fluid-canvas"),g(t,"class","svelte-1fxdt1p")},m(l,n){d(l,t,n),d(l,a,n),T(document.head,s),T(s,e)},p:S,i:S,o:S,d(l){l&&u(t),l&&u(a),u(s)}}}let I={setColor:()=>{},setSize:r=>{},splat:(r,t,a,s)=>{}};function ut(r,t,a){let{smokeColor:s=""}=t,{size:e=1}=t;return R(async()=>{I=await Q(()=>import("../../chunks/fluids-733e7603.js"),[],import.meta.url),I.init()}),r.$$set=l=>{"smokeColor"in l&&a(0,s=l.smokeColor),"size"in l&&a(1,e=l.size)},r.$$.update=()=>{if(r.$$.dirty&1&&s){let l=s.match(/[A-Za-z0-9]{2}/g).map(n=>parseInt(n,16)/2e3);I.setColor({r:l[0],g:l[1],b:l[2]})}r.$$.dirty&2&&e&&I.setSize(e)},[s,e]}class _t extends M{constructor(t){super(),q(this,t,ut,ft,z,{smokeColor:0,size:1})}}function ht(r){let t,a,s,e,l;return a=new _t({props:{smokeColor:r[0],smokeSize:r[1]}}),{c(){t=E(),D(a.$$.fragment)},l(n){t=A(n),V(a.$$.fragment,n)},m(n,o){d(n,t,o),N(a,n,o),s=!0,e||(l=tt(document.body,"mouseover",r[2]),e=!0)},p(n,[o]){const f={};o&1&&(f.smokeColor=n[0]),o&2&&(f.smokeSize=n[1]),a.$set(f)},i(n){s||($(a.$$.fragment,n),s=!0)},o(n){v(a.$$.fragment,n),s=!1},d(n){n&&u(t),P(a,n),e=!1,l()}}}function mt(r,t,a){const s={default:{},text:{color:"#000b16"},bad:{color:"#8c1c1c"},clickable:{color:"#000000"}};let e="default",l,n;function o(f){f?e=f.target.getAttribute("data-state")||"default":e="default",s[e]||(e="default"),a(0,l=s[e].color||"#1b588e"),a(1,n=s[e].size||1)}return[l,n,o]}class dt extends M{constructor(t){super(),q(this,t,mt,ht,z,{})}}function pt(r){let t,a=`hsl(${r[0][0]},${r[0][1]}%,${r[0][2]}%)`;return{c(){t=b("canvas"),this.h()},l(s){t=w(s,"CANVAS",{class:!0}),y(t).forEach(u),this.h()},h(){g(t,"class","svelte-6ki2wi"),B(t,"backgroundColor",a,!1)},m(s,e){d(s,t,e),r[3](t)},p(s,[e]){e&1&&a!==(a=`hsl(${s[0][0]},${s[0][1]}%,${s[0][2]}%)`)&&B(t,"backgroundColor",a,!1)},i:S,o:S,d(s){s&&u(t),r[3](null)}}}function gt(r,t,a){let{size:s=20}=t,{hsl:e}=t,l,n,o,f;function k(){o=Math.ceil(l.clientWidth/s),f=Math.ceil(l.clientHeight/s),a(1,l.width=o,l),a(1,l.height=f,l)}function _(c,p){n.fillStyle=`hsl(${e[0]}, ${e[1]}%, ${e[2]+10-Math.random()*20}%)`,n.fillRect(c,p,1,1)}function i(){for(let c=0;c<o;c++)for(let p=0;p<f;p++)_(c,p)}function h(){let c=Math.floor(Math.random()*o),p=Math.floor(Math.random()*f);_(c,p)}R(()=>{k(),n=l.getContext("2d"),i(),window.setInterval(h,10),window.addEventListener("resize",k)});function m(c){et[c?"unshift":"push"](()=>{l=c,a(1,l)})}return r.$$set=c=>{"size"in c&&a(2,s=c.size),"hsl"in c&&a(0,e=c.hsl)},[e,l,s,m]}class $t extends M{constructor(t){super(),q(this,t,gt,pt,z,{size:2,hsl:0})}}function vt(r){return r*r*((1.70158+1)*r-1.70158)}function kt(r){return-r*(r-2)}const L=.3;function G(r,{duration:t=2e3,out:a=!0}){const s=a?-360:360;return{delay:a?0:t,duration:t,css:e=>{const l=1-e;if(l<L){const n=kt(l/L);return`
					transform: scale(${1-n*.7}) rotate(${n*90}deg);
				`}else{const n=vt((l-L)/(1-L));return n<.25&&a&&setTimeout(()=>{for(let o=0;o<20;o++)I.splat(.55-n*.4,.4+.2*Math.random(),n*-100,0)},l*t),`
					transform: scale(0.3) rotate(90deg) rotateX(${n*s}deg);
				`}}}}function J(r){let t,a,s,e;const l=r[2].default,n=H(l,r,r[1],null);return{c(){t=b("div"),n&&n.c(),this.h()},l(o){t=w(o,"DIV",{class:!0});var f=y(t);n&&n.l(f),f.forEach(u),this.h()},h(){g(t,"class","page svelte-jum058")},m(o,f){d(o,t,f),n&&n.m(t,null),e=!0},p(o,f){r=o,n&&n.p&&(!e||f&2)&&O(n,l,r,r[1],e?j(l,r[1],f,null):W(r[1]),null)},i(o){e||($(n,o),nt(()=>{s&&s.end(1),a=at(t,G,{out:!1,duration:K}),a.start()}),e=!0)},o(o){v(n,o),a&&a.invalidate(),s=rt(t,G,{duration:K}),e=!1},d(o){o&&u(t),n&&n.d(o),o&&s&&s.end()}}}function bt(r){let t,a=r[0],s,e=J(r);return{c(){t=b("div"),e.c(),this.h()},l(l){t=w(l,"DIV",{class:!0});var n=y(t);e.l(n),n.forEach(u),this.h()},h(){g(t,"class","wrap svelte-jum058")},m(l,n){d(l,t,n),e.m(t,null),s=!0},p(l,[n]){n&1&&z(a,a=l[0])?(st(),v(e,1,1,S),lt(),e=J(l),e.c(),$(e,1),e.m(t,null)):e.p(l,n)},i(l){s||($(e),s=!0)},o(l){v(e),s=!1},d(l){l&&u(t),e.d(l)}}}const K=3e3;function wt(r,t,a){let{$$slots:s={},$$scope:e}=t,l=0;return it(()=>{a(0,l+=1)}),r.$$set=n=>{"$$scope"in n&&a(1,e=n.$$scope)},[l,e,s]}class yt extends M{constructor(t){super(),q(this,t,wt,bt,z,{})}}function Ct(r){let t,a;const s=r[1].default,e=H(s,r,r[0],null);return{c(){t=b("div"),e&&e.c(),this.h()},l(l){t=w(l,"DIV",{class:!0});var n=y(t);e&&e.l(n),n.forEach(u),this.h()},h(){g(t,"class","scroll svelte-13fl6x7")},m(l,n){d(l,t,n),e&&e.m(t,null),a=!0},p(l,[n]){e&&e.p&&(!a||n&1)&&O(e,s,l,l[0],a?j(s,l[0],n,null):W(l[0]),null)},i(l){a||($(e,l),a=!0)},o(l){v(e,l),a=!1},d(l){l&&u(t),e&&e.d(l)}}}function zt(r,t,a){let{$$slots:s={},$$scope:e}=t;return r.$$set=l=>{"$$scope"in l&&a(0,e=l.$$scope)},[e,s]}class Et extends M{constructor(t){super(),q(this,t,zt,Ct,z,{})}}function X(r,t,a){const s=r.slice();return s[4]=t[a],s}function Z(r){let t,a=r[4].title+"",s,e;return{c(){t=b("a"),s=U(a),e=E(),this.h()},l(l){t=w(l,"A",{href:!0,"data-state":!0,class:!0});var n=y(t);s=Y(n,a),e=A(n),n.forEach(u),this.h()},h(){g(t,"href",r[4].path),g(t,"data-state","clickable"),g(t,"class","svelte-vqovt3"),F(t,"active",r[0]===r[4].path)},m(l,n){d(l,t,n),T(t,s),T(t,e)},p(l,n){n&3&&F(t,"active",l[0]===l[4].path)},d(l){l&&u(t)}}}function At(r){let t;const a=r[2].default,s=H(a,r,r[3],null);return{c(){s&&s.c()},l(e){s&&s.l(e)},m(e,l){s&&s.m(e,l),t=!0},p(e,l){s&&s.p&&(!t||l&8)&&O(s,a,e,e[3],t?j(a,e[3],l,null):W(e[3]),null)},i(e){t||($(s,e),t=!0)},o(e){v(s,e),t=!1},d(e){s&&s.d(e)}}}function St(r){let t,a;return t=new Et({props:{$$slots:{default:[At]},$$scope:{ctx:r}}}),{c(){D(t.$$.fragment)},l(s){V(t.$$.fragment,s)},m(s,e){N(t,s,e),a=!0},p(s,e){const l={};e&8&&(l.$$scope={dirty:e,ctx:s}),t.$set(l)},i(s){a||($(t.$$.fragment,s),a=!0)},o(s){v(t.$$.fragment,s),a=!1},d(s){P(t,s)}}}function Mt(r){let t,a,s,e,l,n,o,f;t=new dt({}),e=new $t({props:{hsl:[211,58,30],size:32}});let k=r[1],_=[];for(let i=0;i<k.length;i+=1)_[i]=Z(X(r,k,i));return o=new yt({props:{$$slots:{default:[St]},$$scope:{ctx:r}}}),{c(){D(t.$$.fragment),a=E(),s=b("nav"),D(e.$$.fragment),l=E();for(let i=0;i<_.length;i+=1)_[i].c();n=E(),D(o.$$.fragment),this.h()},l(i){V(t.$$.fragment,i),a=A(i),s=w(i,"NAV",{class:!0});var h=y(s);V(e.$$.fragment,h),l=A(h);for(let m=0;m<_.length;m+=1)_[m].l(h);h.forEach(u),n=A(i),V(o.$$.fragment,i),this.h()},h(){g(s,"class","svelte-vqovt3")},m(i,h){N(t,i,h),d(i,a,h),d(i,s,h),N(e,s,null),T(s,l);for(let m=0;m<_.length;m+=1)_[m].m(s,null);d(i,n,h),N(o,i,h),f=!0},p(i,[h]){if(h&3){k=i[1];let c;for(c=0;c<k.length;c+=1){const p=X(i,k,c);_[c]?_[c].p(p,h):(_[c]=Z(p),_[c].c(),_[c].m(s,null))}for(;c<_.length;c+=1)_[c].d(1);_.length=k.length}const m={};h&8&&(m.$$scope={dirty:h,ctx:i}),o.$set(m)},i(i){f||($(t.$$.fragment,i),$(e.$$.fragment,i),$(o.$$.fragment,i),f=!0)},o(i){v(t.$$.fragment,i),v(e.$$.fragment,i),v(o.$$.fragment,i),f=!1},d(i){P(t,i),i&&u(a),i&&u(s),P(e),ot(_,i),i&&u(n),P(o,i)}}}function qt(r,t,a){let{$$slots:s={},$$scope:e}=t;R(()=>{Q(()=>Promise.resolve({}),["..\\..\\assets\\lazy-341ffb4d.css"],import.meta.url)});const l=[{title:"Accueil",path:""},{title:"T\xE9l\xE9charger",path:"telecharger/"},{title:"Wiki",path:"wiki/"}];l.forEach(o=>{o.path="/epistars/"+o.path});let n;return R(()=>{a(0,n=window.location.pathname)}),ct(o=>{var f;a(0,n=(f=o.to)==null?void 0:f.url.pathname)}),r.$$set=o=>{"$$scope"in o&&a(3,e=o.$$scope)},[n,l,s,e]}class Nt extends M{constructor(t){super(),q(this,t,qt,Mt,z,{})}}export{Nt as default};
