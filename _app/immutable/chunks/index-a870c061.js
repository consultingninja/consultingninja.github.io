function x(){}const U=t=>t;function _t(t,e){for(const n in e)t[n]=e[n];return t}function dt(t){return t&&typeof t=="object"&&typeof t.then=="function"}function V(t){return t()}function J(){return Object.create(null)}function w(t){t.forEach(V)}function O(t){return typeof t=="function"}function Bt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let A;function Lt(t,e){return A||(A=document.createElement("a")),A.href=e,t===A.href}function ht(t){return Object.keys(t).length===0}function mt(t,...e){if(t==null)return x;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function Ft(t,e,n){t.$$.on_destroy.push(mt(e,n))}function Ht(t,e,n,r){if(t){const i=W(t,e,n,r);return t[0](i)}}function W(t,e,n,r){return t[1]&&r?_t(n.ctx.slice(),t[1](r(e))):n.ctx}function It(t,e,n,r){if(t[2]&&r){const i=t[2](r(n));if(e.dirty===void 0)return i;if(typeof i=="object"){const l=[],c=Math.max(e.dirty.length,i.length);for(let o=0;o<c;o+=1)l[o]=e.dirty[o]|i[o];return l}return e.dirty|i}return e.dirty}function Gt(t,e,n,r,i,l){if(i){const c=W(e,n,r,l);t.p(c,i)}}function Jt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let r=0;r<n;r++)e[r]=-1;return e}return-1}function Kt(t){return t??""}const X=typeof window<"u";let Y=X?()=>window.performance.now():()=>Date.now(),L=X?t=>requestAnimationFrame(t):x;const $=new Set;function Z(t){$.forEach(e=>{e.c(t)||($.delete(e),e.f())}),$.size!==0&&L(Z)}function tt(t){let e;return $.size===0&&L(Z),{promise:new Promise(n=>{$.add(e={c:t,f:n})}),abort(){$.delete(e)}}}let P=!1;function pt(){P=!0}function yt(){P=!1}function gt(t,e,n,r){for(;t<e;){const i=t+(e-t>>1);n(i)<=r?t=i+1:e=i}return t}function bt(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const u=[];for(let s=0;s<e.length;s++){const f=e[s];f.claim_order!==void 0&&u.push(f)}e=u}const n=new Int32Array(e.length+1),r=new Int32Array(e.length);n[0]=-1;let i=0;for(let u=0;u<e.length;u++){const s=e[u].claim_order,f=(i>0&&e[n[i]].claim_order<=s?i+1:gt(1,i,_=>e[n[_]].claim_order,s))-1;r[u]=n[f]+1;const a=f+1;n[a]=u,i=Math.max(a,i)}const l=[],c=[];let o=e.length-1;for(let u=n[i]+1;u!=0;u=r[u-1]){for(l.push(e[u-1]);o>=u;o--)c.push(e[o]);o--}for(;o>=0;o--)c.push(e[o]);l.reverse(),c.sort((u,s)=>u.claim_order-s.claim_order);for(let u=0,s=0;u<c.length;u++){for(;s<l.length&&c[u].claim_order>=l[s].claim_order;)s++;const f=s<l.length?l[s]:null;t.insertBefore(c[u],f)}}function xt(t,e){t.appendChild(e)}function et(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function $t(t){const e=rt("style");return wt(et(t),e),e.sheet}function wt(t,e){return xt(t.head||t,e),e.sheet}function vt(t,e){if(P){for(bt(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function Qt(t,e,n){P&&!n?vt(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function nt(t){t.parentNode&&t.parentNode.removeChild(t)}function Ut(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function rt(t){return document.createElement(t)}function F(t){return document.createTextNode(t)}function Vt(){return F(" ")}function Wt(){return F("")}function Xt(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function Yt(t){return function(e){return e.preventDefault(),t.call(this,e)}}function Zt(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function kt(t){return Array.from(t.childNodes)}function Et(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function it(t,e,n,r,i=!1){Et(t);const l=(()=>{for(let c=t.claim_info.last_index;c<t.length;c++){const o=t[c];if(e(o)){const u=n(o);return u===void 0?t.splice(c,1):t[c]=u,i||(t.claim_info.last_index=c),o}}for(let c=t.claim_info.last_index-1;c>=0;c--){const o=t[c];if(e(o)){const u=n(o);return u===void 0?t.splice(c,1):t[c]=u,i?u===void 0&&t.claim_info.last_index--:t.claim_info.last_index=c,o}}return r()})();return l.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,l}function Nt(t,e,n,r){return it(t,i=>i.nodeName===e,i=>{const l=[];for(let c=0;c<i.attributes.length;c++){const o=i.attributes[c];n[o.name]||l.push(o.name)}l.forEach(c=>i.removeAttribute(c))},()=>r(e))}function te(t,e,n){return Nt(t,e,n,rt)}function At(t,e){return it(t,n=>n.nodeType===3,n=>{const r=""+e;if(n.data.startsWith(r)){if(n.data.length!==r.length)return n.splitText(r.length)}else n.data=r},()=>F(e),!0)}function ee(t){return At(t," ")}function ne(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function re(t,e,n,r){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,r?"important":"")}function Ct(t,e,{bubbles:n=!1,cancelable:r=!1}={}){const i=document.createEvent("CustomEvent");return i.initCustomEvent(t,n,r,e),i}function ie(t,e){return new t(e)}const M=new Map;let T=0;function jt(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function St(t,e){const n={stylesheet:$t(e),rules:{}};return M.set(t,n),n}function ct(t,e,n,r,i,l,c,o=0){const u=16.666/r;let s=`{
`;for(let m=0;m<=1;m+=u){const p=e+(n-e)*l(m);s+=m*100+`%{${c(p,1-p)}}
`}const f=s+`100% {${c(n,1-n)}}
}`,a=`__svelte_${jt(f)}_${o}`,_=et(t),{stylesheet:d,rules:h}=M.get(_)||St(_,t);h[a]||(h[a]=!0,d.insertRule(`@keyframes ${a} ${f}`,d.cssRules.length));const g=t.style.animation||"";return t.style.animation=`${g?`${g}, `:""}${a} ${r}ms linear ${i}ms 1 both`,T+=1,a}function z(t,e){const n=(t.style.animation||"").split(", "),r=n.filter(e?l=>l.indexOf(e)<0:l=>l.indexOf("__svelte")===-1),i=n.length-r.length;i&&(t.style.animation=r.join(", "),T-=i,T||Mt())}function Mt(){L(()=>{T||(M.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&nt(e)}),M.clear())})}let E;function y(t){E=t}function H(){if(!E)throw new Error("Function called outside component initialization");return E}function ce(t){H().$$.on_mount.push(t)}function se(t){H().$$.after_update.push(t)}const k=[],K=[],j=[],Q=[],st=Promise.resolve();let B=!1;function lt(){B||(B=!0,st.then(I))}function le(){return lt(),st}function N(t){j.push(t)}const R=new Set;let C=0;function I(){const t=E;do{for(;C<k.length;){const e=k[C];C++,y(e),Tt(e.$$)}for(y(null),k.length=0,C=0;K.length;)K.pop()();for(let e=0;e<j.length;e+=1){const n=j[e];R.has(n)||(R.add(n),n())}j.length=0}while(k.length);for(;Q.length;)Q.pop()();B=!1,R.clear(),y(t)}function Tt(t){if(t.fragment!==null){t.update(),w(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(N)}}let v;function ut(){return v||(v=Promise.resolve(),v.then(()=>{v=null})),v}function D(t,e,n){t.dispatchEvent(Ct(`${e?"intro":"outro"}${n}`))}const S=new Set;let b;function Dt(){b={r:0,c:[],p:b}}function Ot(){b.r||w(b.c),b=b.p}function ot(t,e){t&&t.i&&(S.delete(t),t.i(e))}function Pt(t,e,n,r){if(t&&t.o){if(S.has(t))return;S.add(t),b.c.push(()=>{S.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}else r&&r()}const at={duration:0};function ue(t,e,n){const r={direction:"in"};let i=e(t,n,r),l=!1,c,o,u=0;function s(){c&&z(t,c)}function f(){const{delay:_=0,duration:d=300,easing:h=U,tick:g=x,css:m}=i||at;m&&(c=ct(t,0,1,d,_,h,m,u++)),g(0,1);const p=Y()+_,ft=p+d;o&&o.abort(),l=!0,N(()=>D(t,!0,"start")),o=tt(q=>{if(l){if(q>=ft)return g(1,0),D(t,!0,"end"),s(),l=!1;if(q>=p){const G=h((q-p)/d);g(G,1-G)}}return l})}let a=!1;return{start(){a||(a=!0,z(t),O(i)?(i=i(r),ut().then(f)):f())},invalidate(){a=!1},end(){l&&(s(),l=!1)}}}function oe(t,e,n){const r={direction:"out"};let i=e(t,n,r),l=!0,c;const o=b;o.r+=1;function u(){const{delay:s=0,duration:f=300,easing:a=U,tick:_=x,css:d}=i||at;d&&(c=ct(t,1,0,f,s,a,d));const h=Y()+s,g=h+f;N(()=>D(t,!1,"start")),tt(m=>{if(l){if(m>=g)return _(0,1),D(t,!1,"end"),--o.r||w(o.c),!1;if(m>=h){const p=a((m-h)/f);_(1-p,p)}}return l})}return O(i)?ut().then(()=>{i=i(r),u()}):u(),{end(s){s&&i.tick&&i.tick(1,0),l&&(c&&z(t,c),l=!1)}}}function ae(t,e){const n=e.token={};function r(i,l,c,o){if(e.token!==n)return;e.resolved=o;let u=e.ctx;c!==void 0&&(u=u.slice(),u[c]=o);const s=i&&(e.current=i)(u);let f=!1;e.block&&(e.blocks?e.blocks.forEach((a,_)=>{_!==l&&a&&(Dt(),Pt(a,1,1,()=>{e.blocks[_]===a&&(e.blocks[_]=null)}),Ot())}):e.block.d(1),s.c(),ot(s,1),s.m(e.mount(),e.anchor),f=!0),e.block=s,e.blocks&&(e.blocks[l]=s),f&&I()}if(dt(t)){const i=H();if(t.then(l=>{y(i),r(e.then,1,e.value,l),y(null)},l=>{if(y(i),r(e.catch,2,e.error,l),y(null),!e.hasCatch)throw l}),e.current!==e.pending)return r(e.pending,0),!0}else{if(e.current!==e.then)return r(e.then,1,e.value,t),!0;e.resolved=t}}function fe(t,e,n){const r=e.slice(),{resolved:i}=t;t.current===t.then&&(r[t.value]=i),t.current===t.catch&&(r[t.error]=i),t.block.p(r,n)}const _e=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;function de(t){t&&t.c()}function he(t,e){t&&t.l(e)}function qt(t,e,n,r){const{fragment:i,after_update:l}=t.$$;i&&i.m(e,n),r||N(()=>{const c=t.$$.on_mount.map(V).filter(O);t.$$.on_destroy?t.$$.on_destroy.push(...c):w(c),t.$$.on_mount=[]}),l.forEach(N)}function Rt(t,e){const n=t.$$;n.fragment!==null&&(w(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function zt(t,e){t.$$.dirty[0]===-1&&(k.push(t),lt(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function me(t,e,n,r,i,l,c,o=[-1]){const u=E;y(t);const s=t.$$={fragment:null,ctx:[],props:l,update:x,not_equal:i,bound:J(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(u?u.$$.context:[])),callbacks:J(),dirty:o,skip_bound:!1,root:e.target||u.$$.root};c&&c(s.root);let f=!1;if(s.ctx=n?n(t,e.props||{},(a,_,...d)=>{const h=d.length?d[0]:_;return s.ctx&&i(s.ctx[a],s.ctx[a]=h)&&(!s.skip_bound&&s.bound[a]&&s.bound[a](h),f&&zt(t,a)),_}):[],s.update(),f=!0,w(s.before_update),s.fragment=r?r(s.ctx):!1,e.target){if(e.hydrate){pt();const a=kt(e.target);s.fragment&&s.fragment.l(a),a.forEach(nt)}else s.fragment&&s.fragment.c();e.intro&&ot(t.$$.fragment),qt(t,e.target,e.anchor,e.customElement),yt(),I()}y(u)}class pe{$destroy(){Rt(this,1),this.$destroy=x}$on(e,n){if(!O(n))return x;const r=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return r.push(n),()=>{const i=r.indexOf(n);i!==-1&&r.splice(i,1)}}$set(e){this.$$set&&!ht(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{le as A,x as B,Kt as C,vt as D,Xt as E,Ut as F,w as G,_e as H,Lt as I,Ht as J,Gt as K,Jt as L,It as M,Ft as N,ae as O,fe as P,U as Q,Yt as R,pe as S,N as T,ue as U,oe as V,Vt as a,Qt as b,ee as c,Ot as d,Wt as e,ot as f,Dt as g,nt as h,me as i,se as j,rt as k,te as l,kt as m,Zt as n,ce as o,re as p,F as q,At as r,Bt as s,Pt as t,ne as u,ie as v,de as w,he as x,qt as y,Rt as z};
