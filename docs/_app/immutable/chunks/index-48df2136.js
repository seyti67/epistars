function x(){}const K=t=>t;function at(t,e){for(const n in e)t[n]=e[n];return t}function W(t){return t()}function I(){return Object.create(null)}function b(t){t.forEach(W)}function R(t){return typeof t=="function"}function Pt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let A;function Dt(t,e){return A||(A=document.createElement("a")),A.href=e,t===A.href}function ft(t){return Object.keys(t).length===0}function _t(t,...e){if(t==null)return x;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function Lt(t,e,n){t.$$.on_destroy.push(_t(e,n))}function zt(t,e,n,i){if(t){const r=Q(t,e,n,i);return t[0](r)}}function Q(t,e,n,i){return t[1]&&i?at(n.ctx.slice(),t[1](i(e))):n.ctx}function Bt(t,e,n,i){if(t[2]&&i){const r=t[2](i(n));if(e.dirty===void 0)return r;if(typeof r=="object"){const o=[],s=Math.max(e.dirty.length,r.length);for(let u=0;u<s;u+=1)o[u]=e.dirty[u]|r[u];return o}return e.dirty|r}return e.dirty}function Rt(t,e,n,i,r,o){if(r){const s=Q(e,n,i,o);t.p(s,r)}}function Tt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}const U=typeof window<"u";let V=U?()=>window.performance.now():()=>Date.now(),T=U?t=>requestAnimationFrame(t):x;const g=new Set;function X(t){g.forEach(e=>{e.c(t)||(g.delete(e),e.f())}),g.size!==0&&T(X)}function Y(t){let e;return g.size===0&&T(X),{promise:new Promise(n=>{g.add(e={c:t,f:n})}),abort(){g.delete(e)}}}let P=!1;function dt(){P=!0}function ht(){P=!1}function mt(t,e,n,i){for(;t<e;){const r=t+(e-t>>1);n(r)<=i?t=r+1:e=r}return t}function pt(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const c=[];for(let l=0;l<e.length;l++){const f=e[l];f.claim_order!==void 0&&c.push(f)}e=c}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let r=0;for(let c=0;c<e.length;c++){const l=e[c].claim_order,f=(r>0&&e[n[r]].claim_order<=l?r+1:mt(1,r,_=>e[n[_]].claim_order,l))-1;i[c]=n[f]+1;const a=f+1;n[a]=c,r=Math.max(a,r)}const o=[],s=[];let u=e.length-1;for(let c=n[r]+1;c!=0;c=i[c-1]){for(o.push(e[c-1]);u>=c;u--)s.push(e[u]);u--}for(;u>=0;u--)s.push(e[u]);o.reverse(),s.sort((c,l)=>c.claim_order-l.claim_order);for(let c=0,l=0;c<s.length;c++){for(;l<o.length&&s[c].claim_order>=o[l].claim_order;)l++;const f=l<o.length?o[l]:null;t.insertBefore(s[c],f)}}function yt(t,e){t.appendChild(e)}function Z(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function gt(t){const e=et("style");return xt(Z(t),e),e.sheet}function xt(t,e){return yt(t.head||t,e),e.sheet}function bt(t,e){if(P){for(pt(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function Ft(t,e,n){P&&!n?bt(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function tt(t){t.parentNode.removeChild(t)}function Ht(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function et(t){return document.createElement(t)}function F(t){return document.createTextNode(t)}function It(){return F(" ")}function Gt(){return F("")}function Jt(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function Kt(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function $t(t){return Array.from(t.childNodes)}function wt(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function nt(t,e,n,i,r=!1){wt(t);const o=(()=>{for(let s=t.claim_info.last_index;s<t.length;s++){const u=t[s];if(e(u)){const c=n(u);return c===void 0?t.splice(s,1):t[s]=c,r||(t.claim_info.last_index=s),u}}for(let s=t.claim_info.last_index-1;s>=0;s--){const u=t[s];if(e(u)){const c=n(u);return c===void 0?t.splice(s,1):t[s]=c,r?c===void 0&&t.claim_info.last_index--:t.claim_info.last_index=s,u}}return i()})();return o.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,o}function vt(t,e,n,i){return nt(t,r=>r.nodeName===e,r=>{const o=[];for(let s=0;s<r.attributes.length;s++){const u=r.attributes[s];n[u.name]||o.push(u.name)}o.forEach(s=>r.removeAttribute(s))},()=>i(e))}function Wt(t,e,n){return vt(t,e,n,et)}function Et(t,e){return nt(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>F(e),!0)}function Qt(t){return Et(t," ")}function Ut(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function Vt(t,e,n,i){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function Xt(t,e,n){t.classList[n?"add":"remove"](e)}function Nt(t,e,{bubbles:n=!1,cancelable:i=!1}={}){const r=document.createEvent("CustomEvent");return r.initCustomEvent(t,n,i,e),r}function Yt(t,e=document.body){return Array.from(e.querySelectorAll(t))}const q=new Map;let M=0;function kt(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function At(t,e){const n={stylesheet:gt(e),rules:{}};return q.set(t,n),n}function it(t,e,n,i,r,o,s,u=0){const c=16.666/i;let l=`{
`;for(let m=0;m<=1;m+=c){const k=e+(n-e)*o(m);l+=m*100+`%{${s(k,1-k)}}
`}const f=l+`100% {${s(n,1-n)}}
}`,a=`__svelte_${kt(f)}_${u}`,_=Z(t),{stylesheet:d,rules:h}=q.get(_)||At(_,t);h[a]||(h[a]=!0,d.insertRule(`@keyframes ${a} ${f}`,d.cssRules.length));const p=t.style.animation||"";return t.style.animation=`${p?`${p}, `:""}${a} ${i}ms linear ${r}ms 1 both`,M+=1,a}function z(t,e){const n=(t.style.animation||"").split(", "),i=n.filter(e?o=>o.indexOf(e)<0:o=>o.indexOf("__svelte")===-1),r=n.length-i.length;r&&(t.style.animation=i.join(", "),M-=r,M||St())}function St(){T(()=>{M||(q.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&tt(e)}),q.clear())})}let E;function v(t){E=t}function rt(){if(!E)throw new Error("Function called outside component initialization");return E}function Zt(t){rt().$$.on_mount.push(t)}function te(t){rt().$$.after_update.push(t)}const w=[],G=[],C=[],J=[],st=Promise.resolve();let B=!1;function ct(){B||(B=!0,st.then(lt))}function ee(){return ct(),st}function N(t){C.push(t)}const L=new Set;let S=0;function lt(){const t=E;do{for(;S<w.length;){const e=w[S];S++,v(e),Ct(e.$$)}for(v(null),w.length=0,S=0;G.length;)G.pop()();for(let e=0;e<C.length;e+=1){const n=C[e];L.has(n)||(L.add(n),n())}C.length=0}while(w.length);for(;J.length;)J.pop()();B=!1,L.clear(),v(t)}function Ct(t){if(t.fragment!==null){t.update(),b(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(N)}}let $;function ot(){return $||($=Promise.resolve(),$.then(()=>{$=null})),$}function O(t,e,n){t.dispatchEvent(Nt(`${e?"intro":"outro"}${n}`))}const j=new Set;let y;function ne(){y={r:0,c:[],p:y}}function ie(){y.r||b(y.c),y=y.p}function jt(t,e){t&&t.i&&(j.delete(t),t.i(e))}function re(t,e,n,i){if(t&&t.o){if(j.has(t))return;j.add(t),y.c.push(()=>{j.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}const ut={duration:0};function se(t,e,n){let i=e(t,n),r=!1,o,s,u=0;function c(){o&&z(t,o)}function l(){const{delay:a=0,duration:_=300,easing:d=K,tick:h=x,css:p}=i||ut;p&&(o=it(t,0,1,_,a,d,p,u++)),h(0,1);const m=V()+a,k=m+_;s&&s.abort(),r=!0,N(()=>O(t,!0,"start")),s=Y(D=>{if(r){if(D>=k)return h(1,0),O(t,!0,"end"),c(),r=!1;if(D>=m){const H=d((D-m)/_);h(H,1-H)}}return r})}let f=!1;return{start(){f||(f=!0,z(t),R(i)?(i=i(),ot().then(l)):l())},invalidate(){f=!1},end(){r&&(c(),r=!1)}}}function ce(t,e,n){let i=e(t,n),r=!0,o;const s=y;s.r+=1;function u(){const{delay:c=0,duration:l=300,easing:f=K,tick:a=x,css:_}=i||ut;_&&(o=it(t,1,0,l,c,f,_));const d=V()+c,h=d+l;N(()=>O(t,!1,"start")),Y(p=>{if(r){if(p>=h)return a(0,1),O(t,!1,"end"),--s.r||b(s.c),!1;if(p>=d){const m=f((p-d)/l);a(1-m,m)}}return r})}return R(i)?ot().then(()=>{i=i(),u()}):u(),{end(c){c&&i.tick&&i.tick(1,0),r&&(o&&z(t,o),r=!1)}}}function le(t){t&&t.c()}function oe(t,e){t&&t.l(e)}function qt(t,e,n,i){const{fragment:r,on_mount:o,on_destroy:s,after_update:u}=t.$$;r&&r.m(e,n),i||N(()=>{const c=o.map(W).filter(R);s?s.push(...c):b(c),t.$$.on_mount=[]}),u.forEach(N)}function Mt(t,e){const n=t.$$;n.fragment!==null&&(b(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Ot(t,e){t.$$.dirty[0]===-1&&(w.push(t),ct(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function ue(t,e,n,i,r,o,s,u=[-1]){const c=E;v(t);const l=t.$$={fragment:null,ctx:null,props:o,update:x,not_equal:r,bound:I(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:I(),dirty:u,skip_bound:!1,root:e.target||c.$$.root};s&&s(l.root);let f=!1;if(l.ctx=n?n(t,e.props||{},(a,_,...d)=>{const h=d.length?d[0]:_;return l.ctx&&r(l.ctx[a],l.ctx[a]=h)&&(!l.skip_bound&&l.bound[a]&&l.bound[a](h),f&&Ot(t,a)),_}):[],l.update(),f=!0,b(l.before_update),l.fragment=i?i(l.ctx):!1,e.target){if(e.hydrate){dt();const a=$t(e.target);l.fragment&&l.fragment.l(a),a.forEach(tt)}else l.fragment&&l.fragment.c();e.intro&&jt(t.$$.fragment),qt(t,e.target,e.anchor,e.customElement),ht(),lt()}v(c)}class ae{$destroy(){Mt(this,1),this.$destroy=x}$on(e,n){const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(e){this.$$set&&!ft(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{x as A,Yt as B,bt as C,Jt as D,G as E,zt as F,Rt as G,Tt as H,Bt as I,N as J,se as K,ce as L,Ht as M,Xt as N,Lt as O,Dt as P,ae as S,It as a,Ft as b,Qt as c,ie as d,Gt as e,jt as f,ne as g,tt as h,ue as i,te as j,et as k,Wt as l,$t as m,Kt as n,Zt as o,Vt as p,F as q,Et as r,Pt as s,re as t,Ut as u,le as v,oe as w,qt as x,Mt as y,ee as z};
