function v(){}const H=t=>t;function ft(t,e){for(const n in e)t[n]=e[n];return t}function X(t){return t()}function U(){return Object.create(null)}function w(t){t.forEach(X)}function R(t){return typeof t=="function"}function Dt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function _t(t){return Object.keys(t).length===0}function dt(t,...e){if(t==null)return v;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function Lt(t,e,n){t.$$.on_destroy.push(dt(e,n))}function Rt(t,e,n,i){if(t){const s=Y(t,e,n,i);return t[0](s)}}function Y(t,e,n,i){return t[1]&&i?ft(n.ctx.slice(),t[1](i(e))):n.ctx}function Tt(t,e,n,i){if(t[2]&&i){const s=t[2](i(n));if(e.dirty===void 0)return s;if(typeof s=="object"){const o=[],r=Math.max(e.dirty.length,s.length);for(let u=0;u<r;u+=1)o[u]=e.dirty[u]|s[u];return o}return e.dirty|s}return e.dirty}function zt(t,e,n,i,s,o){if(s){const r=Y(e,n,i,o);t.p(r,s)}}function Bt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}const Z=typeof window<"u";let I=Z?()=>window.performance.now():()=>Date.now(),W=Z?t=>requestAnimationFrame(t):v;const E=new Set;function tt(t){E.forEach(e=>{e.c(t)||(E.delete(e),e.f())}),E.size!==0&&W(tt)}function G(t){let e;return E.size===0&&W(tt),{promise:new Promise(n=>{E.add(e={c:t,f:n})}),abort(){E.delete(e)}}}let T=!1;function ht(){T=!0}function mt(){T=!1}function pt(t,e,n,i){for(;t<e;){const s=t+(e-t>>1);n(s)<=i?t=s+1:e=s}return t}function yt(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const l=[];for(let c=0;c<e.length;c++){const _=e[c];_.claim_order!==void 0&&l.push(_)}e=l}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let s=0;for(let l=0;l<e.length;l++){const c=e[l].claim_order,_=(s>0&&e[n[s]].claim_order<=c?s+1:pt(1,s,a=>e[n[a]].claim_order,c))-1;i[l]=n[_]+1;const f=_+1;n[f]=l,s=Math.max(f,s)}const o=[],r=[];let u=e.length-1;for(let l=n[s]+1;l!=0;l=i[l-1]){for(o.push(e[l-1]);u>=l;u--)r.push(e[u]);u--}for(;u>=0;u--)r.push(e[u]);o.reverse(),r.sort((l,c)=>l.claim_order-c.claim_order);for(let l=0,c=0;l<r.length;l++){for(;c<o.length&&r[l].claim_order>=o[c].claim_order;)c++;const _=c<o.length?o[c]:null;t.insertBefore(r[l],_)}}function gt(t,e){t.appendChild(e)}function et(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function bt(t){const e=it("style");return xt(et(t),e),e.sheet}function xt(t,e){return gt(t.head||t,e),e.sheet}function $t(t,e){if(T){for(yt(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function Ft(t,e,n){T&&!n?$t(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function nt(t){t.parentNode.removeChild(t)}function Ht(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function it(t){return document.createElement(t)}function vt(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function J(t){return document.createTextNode(t)}function It(){return J(" ")}function Wt(){return J("")}function Gt(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function Jt(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function wt(t){return Array.from(t.childNodes)}function Et(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function rt(t,e,n,i,s=!1){Et(t);const o=(()=>{for(let r=t.claim_info.last_index;r<t.length;r++){const u=t[r];if(e(u)){const l=n(u);return l===void 0?t.splice(r,1):t[r]=l,s||(t.claim_info.last_index=r),u}}for(let r=t.claim_info.last_index-1;r>=0;r--){const u=t[r];if(e(u)){const l=n(u);return l===void 0?t.splice(r,1):t[r]=l,s?l===void 0&&t.claim_info.last_index--:t.claim_info.last_index=r,u}}return i()})();return o.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,o}function st(t,e,n,i){return rt(t,s=>s.nodeName===e,s=>{const o=[];for(let r=0;r<s.attributes.length;r++){const u=s.attributes[r];n[u.name]||o.push(u.name)}o.forEach(r=>s.removeAttribute(r))},()=>i(e))}function Kt(t,e,n){return st(t,e,n,it)}function Qt(t,e,n){return st(t,e,n,vt)}function Nt(t,e){return rt(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>J(e),!0)}function Ut(t){return Nt(t," ")}function Vt(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function Xt(t,e,n,i){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function Yt(t,e,n){t.classList[n?"add":"remove"](e)}function kt(t,e,{bubbles:n=!1,cancelable:i=!1}={}){const s=document.createEvent("CustomEvent");return s.initCustomEvent(t,n,i,e),s}function Zt(t,e=document.body){return Array.from(e.querySelectorAll(t))}const P=new Map;let q=0;function At(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function St(t,e){const n={stylesheet:bt(e),rules:{}};return P.set(t,n),n}function D(t,e,n,i,s,o,r,u=0){const l=16.666/i;let c=`{
`;for(let m=0;m<=1;m+=l){const g=e+(n-e)*o(m);c+=m*100+`%{${r(g,1-g)}}
`}const _=c+`100% {${r(n,1-n)}}
}`,f=`__svelte_${At(_)}_${u}`,a=et(t),{stylesheet:d,rules:h}=P.get(a)||St(a,t);h[f]||(h[f]=!0,d.insertRule(`@keyframes ${f} ${_}`,d.cssRules.length));const p=t.style.animation||"";return t.style.animation=`${p?`${p}, `:""}${f} ${i}ms linear ${s}ms 1 both`,q+=1,f}function L(t,e){const n=(t.style.animation||"").split(", "),i=n.filter(e?o=>o.indexOf(e)<0:o=>o.indexOf("__svelte")===-1),s=n.length-i.length;s&&(t.style.animation=i.join(", "),q-=s,q||Ct())}function Ct(){W(()=>{q||(P.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&nt(e)}),P.clear())})}let C;function S(t){C=t}function lt(){if(!C)throw new Error("Function called outside component initialization");return C}function te(t){lt().$$.on_mount.push(t)}function ee(t){lt().$$.after_update.push(t)}const A=[],V=[],M=[],B=[],ct=Promise.resolve();let F=!1;function ot(){F||(F=!0,ct.then(ut))}function ne(){return ot(),ct}function N(t){M.push(t)}function ie(t){B.push(t)}const z=new Set;let j=0;function ut(){const t=C;do{for(;j<A.length;){const e=A[j];j++,S(e),jt(e.$$)}for(S(null),A.length=0,j=0;V.length;)V.pop()();for(let e=0;e<M.length;e+=1){const n=M[e];z.has(n)||(z.add(n),n())}M.length=0}while(A.length);for(;B.length;)B.pop()();F=!1,z.clear(),S(t)}function jt(t){if(t.fragment!==null){t.update(),w(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(N)}}let k;function K(){return k||(k=Promise.resolve(),k.then(()=>{k=null})),k}function $(t,e,n){t.dispatchEvent(kt(`${e?"intro":"outro"}${n}`))}const O=new Set;let y;function re(){y={r:0,c:[],p:y}}function se(){y.r||w(y.c),y=y.p}function Mt(t,e){t&&t.i&&(O.delete(t),t.i(e))}function le(t,e,n,i){if(t&&t.o){if(O.has(t))return;O.add(t),y.c.push(()=>{O.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}const Q={duration:0};function ce(t,e,n){let i=e(t,n),s=!1,o,r,u=0;function l(){o&&L(t,o)}function c(){const{delay:f=0,duration:a=300,easing:d=H,tick:h=v,css:p}=i||Q;p&&(o=D(t,0,1,a,f,d,p,u++)),h(0,1);const m=I()+f,g=m+a;r&&r.abort(),s=!0,N(()=>$(t,!0,"start")),r=G(b=>{if(s){if(b>=g)return h(1,0),$(t,!0,"end"),l(),s=!1;if(b>=m){const x=d((b-m)/a);h(x,1-x)}}return s})}let _=!1;return{start(){_||(_=!0,L(t),R(i)?(i=i(),K().then(c)):c())},invalidate(){_=!1},end(){s&&(l(),s=!1)}}}function oe(t,e,n){let i=e(t,n),s=!0,o;const r=y;r.r+=1;function u(){const{delay:l=0,duration:c=300,easing:_=H,tick:f=v,css:a}=i||Q;a&&(o=D(t,1,0,c,l,_,a));const d=I()+l,h=d+c;N(()=>$(t,!1,"start")),G(p=>{if(s){if(p>=h)return f(0,1),$(t,!1,"end"),--r.r||w(r.c),!1;if(p>=d){const m=_((p-d)/c);f(1-m,m)}}return s})}return R(i)?K().then(()=>{i=i(),u()}):u(),{end(l){l&&i.tick&&i.tick(1,0),s&&(o&&L(t,o),s=!1)}}}function ue(t,e,n,i){let s=e(t,n),o=i?0:1,r=null,u=null,l=null;function c(){l&&L(t,l)}function _(a,d){const h=a.b-o;return d*=Math.abs(h),{a:o,b:a.b,d:h,duration:d,start:a.start,end:a.start+d,group:a.group}}function f(a){const{delay:d=0,duration:h=300,easing:p=H,tick:m=v,css:g}=s||Q,b={start:I()+d,b:a};a||(b.group=y,y.r+=1),r||u?u=b:(g&&(c(),l=D(t,o,a,h,d,p,g)),a&&m(0,1),r=_(b,h),N(()=>$(t,a,"start")),G(x=>{if(u&&x>u.start&&(r=_(u,h),u=null,$(t,r.b,"start"),g&&(c(),l=D(t,o,r.b,r.duration,0,p,s.css))),r){if(x>=r.end)m(o=r.b,1-o),$(t,r.b,"end"),u||(r.b?c():--r.group.r||w(r.group.c)),r=null;else if(x>=r.start){const at=x-r.start;o=r.a+r.d*p(at/r.duration),m(o,1-o)}}return!!(r||u)}))}return{run(a){R(s)?K().then(()=>{s=s(),f(a)}):f(a)},end(){c(),r=u=null}}}function ae(t,e,n){const i=t.$$.props[e];i!==void 0&&(t.$$.bound[i]=n,n(t.$$.ctx[i]))}function fe(t){t&&t.c()}function _e(t,e){t&&t.l(e)}function Ot(t,e,n,i){const{fragment:s,on_mount:o,on_destroy:r,after_update:u}=t.$$;s&&s.m(e,n),i||N(()=>{const l=o.map(X).filter(R);r?r.push(...l):w(l),t.$$.on_mount=[]}),u.forEach(N)}function Pt(t,e){const n=t.$$;n.fragment!==null&&(w(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function qt(t,e){t.$$.dirty[0]===-1&&(A.push(t),ot(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function de(t,e,n,i,s,o,r,u=[-1]){const l=C;S(t);const c=t.$$={fragment:null,ctx:null,props:o,update:v,not_equal:s,bound:U(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(l?l.$$.context:[])),callbacks:U(),dirty:u,skip_bound:!1,root:e.target||l.$$.root};r&&r(c.root);let _=!1;if(c.ctx=n?n(t,e.props||{},(f,a,...d)=>{const h=d.length?d[0]:a;return c.ctx&&s(c.ctx[f],c.ctx[f]=h)&&(!c.skip_bound&&c.bound[f]&&c.bound[f](h),_&&qt(t,f)),a}):[],c.update(),_=!0,w(c.before_update),c.fragment=i?i(c.ctx):!1,e.target){if(e.hydrate){ht();const f=wt(e.target);c.fragment&&c.fragment.l(f),f.forEach(nt)}else c.fragment&&c.fragment.c();e.intro&&Mt(t.$$.fragment),Ot(t,e.target,e.anchor,e.customElement),mt(),ut()}S(l)}class he{$destroy(){Pt(this,1),this.$destroy=v}$on(e,n){const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const s=i.indexOf(n);s!==-1&&i.splice(s,1)}}$set(e){this.$$set&&!_t(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{v as A,Zt as B,$t as C,I as D,G as E,Gt as F,vt as G,Qt as H,N as I,ce as J,oe as K,Rt as L,zt as M,Bt as N,Tt as O,ue as P,Ht as Q,Lt as R,he as S,Yt as T,V as U,ae as V,ie as W,It as a,Ft as b,Ut as c,se as d,Wt as e,Mt as f,re as g,nt as h,de as i,ee as j,it as k,Kt as l,wt as m,Jt as n,te as o,Xt as p,J as q,Nt as r,Dt as s,le as t,Vt as u,fe as v,_e as w,Ot as x,Pt as y,ne as z};
