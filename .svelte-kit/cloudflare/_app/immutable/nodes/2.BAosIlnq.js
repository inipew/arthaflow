import{b as Za,a as A,d as Qa,c as V,f as R}from"../chunks/Byucr0LV.js";import"../chunks/DYu80jsF.js";import{b as Ta,h as H,a as Fe,F as o,r as et,a9 as at,s as ua,c as Te,d as we,e as ke,ar as tt,az as rt,ah as fa,z as ve,x as Oe,aJ as oe,y as De,aK as nt,B as st,R as it,aL as Aa,ay as ta,aM as lt,aN as ot,aE as B,L as ga,aO as vt,K as dt,q as za,w as Sa,aP as qe,aQ as ct,aw as ut,A as ft,v as Le,at as gt,Z as Ca,aR as Ea,a7 as Ma,aS as _t,aT as pt,E as ht,Y as mt,aU as bt,J as yt,an as Pa,aV as Da,aB as ra,aW as $t,aX as xt,aY as Ia,aZ as kt,a_ as wt,a$ as Ke,b0 as Nt,b1 as Tt,b2 as At,b3 as zt,b4 as St,b5 as Ct,b6 as Et,aG as Mt,i as M,a5 as Pt,g as Dt,aF as It,u as _a,b7 as pa,b8 as jt,b9 as Z,Q as Ot,p as be,k as ye,m as c,j as K,o as m,n as v,aI as Ft,ba as Lt,t as le,ai as ie,bb as je,bc as ge,bd as Be,H as D,be as Ht}from"../chunks/CkdHe-eK.js";import{B as Rt,l as q,p as I,s as Q}from"../chunks/Bsht7nY3.js";import{i as ha}from"../chunks/DGGBr2Qz.js";import{i as Kt,a as Bt,d as Vt,b as Ut,c as Wt,n as qt,e as Gt,s as ae,f as Y}from"../chunks/sAjpvYtQ.js";import{i as de}from"../chunks/gk7aPI7G.js";function he(e,a){return a}function Yt(e,a,t){for(var r=[],s=a.length,l,n=a.length,i=0;i<s;i++){let $=a[i];Sa($,()=>{if(l){if(l.pending.delete($),l.done.add($),l.pending.size===0){var g=e.outrogroups;Ze(e,ta(l.done)),g.delete(l),g.size===0&&(e.outrogroups=null)}}else n-=1},!1)}if(n===0){var f=r.length===0&&t!==null;if(f){var h=t,d=h.parentNode;ut(d),d.append(h),e.items.clear()}Ze(e,a,!f)}else l={pending:new Set(a),done:new Set},(e.outrogroups??(e.outrogroups=new Set)).add(l)}function Ze(e,a,t=!0){var r;if(e.pending.size>0){r=new Set;for(const n of e.pending.values())for(const i of n)r.add(e.items.get(i).e)}for(var s=0;s<a.length;s++){var l=a[s];if(r!=null&&r.has(l)){l.f|=oe;const n=document.createDocumentFragment();ft(l,n)}else Le(a[s],t)}}var ma;function me(e,a,t,r,s,l=null){var n=e,i=new Map,f=(a&Ea)!==0;if(f){var h=e;n=H?Te(Ca(h)):h.appendChild(Oe())}H&&Fe();var d=null,$=it(()=>{var y=t();return Aa(y)?y:y==null?[]:ta(y)}),g,x=new Map,b=!0;function S(y){(C.effect.f&dt)===0&&(C.pending.delete(y),C.fallback=d,Jt(C,g,n,a,r),d!==null&&(g.length===0?(d.f&oe)===0?za(d):(d.f^=oe,Me(d,null,n)):Sa(d,()=>{d=null})))}function _(y){C.pending.delete(y)}var k=Ta(()=>{g=o($);var y=g.length;let w=!1;if(H){var O=et(n)===at;O!==(y===0)&&(n=ua(),Te(n),we(!1),w=!0)}for(var N=new Set,u=ve,p=st(),T=0;T<y;T+=1){H&&ke.nodeType===tt&&ke.data===rt&&(n=ke,w=!0,we(!1));var z=g[T],F=r(z,T),P=b?null:i.get(F);P?(P.v&&fa(P.v,z),P.i&&fa(P.i,T),p&&u.unskip_effect(P.e)):(P=Xt(i,b?n:ma??(ma=Oe()),z,F,T,s,a,t),b||(P.e.f|=oe),i.set(F,P)),N.add(F)}if(y===0&&l&&!d&&(b?d=De(()=>l(n)):(d=De(()=>l(ma??(ma=Oe()))),d.f|=oe)),y>N.size&&nt(),H&&y>0&&Te(ua()),!b)if(x.set(u,N),p){for(const[X,j]of i)N.has(X)||u.skip_effect(j.e);u.oncommit(S),u.ondiscard(_)}else S(u);w&&we(!0),o($)}),C={effect:k,items:i,pending:x,outrogroups:null,fallback:d};b=!1,H&&(n=ke)}function Se(e){for(;e!==null&&(e.f&ct)===0;)e=e.next;return e}function Jt(e,a,t,r,s){var z,F,P,X,j,E,L,U,G;var l=(r&_t)!==0,n=a.length,i=e.items,f=Se(e.effect.first),h,d=null,$,g=[],x=[],b,S,_,k;if(l)for(k=0;k<n;k+=1)b=a[k],S=s(b,k),_=i.get(S).e,(_.f&oe)===0&&((F=(z=_.nodes)==null?void 0:z.a)==null||F.measure(),($??($=new Set)).add(_));for(k=0;k<n;k+=1){if(b=a[k],S=s(b,k),_=i.get(S).e,e.outrogroups!==null)for(const W of e.outrogroups)W.pending.delete(_),W.done.delete(_);if((_.f&qe)!==0&&(za(_),l&&((X=(P=_.nodes)==null?void 0:P.a)==null||X.unfix(),($??($=new Set)).delete(_))),(_.f&oe)!==0)if(_.f^=oe,_===f)Me(_,null,t);else{var C=d?d.next:f;_===e.effect.last&&(e.effect.last=_.prev),_.prev&&(_.prev.next=_.next),_.next&&(_.next.prev=_.prev),fe(e,d,_),fe(e,_,C),Me(_,C,t),d=_,g=[],x=[],f=Se(d.next);continue}if(_!==f){if(h!==void 0&&h.has(_)){if(g.length<x.length){var y=x[0],w;d=y.prev;var O=g[0],N=g[g.length-1];for(w=0;w<g.length;w+=1)Me(g[w],y,t);for(w=0;w<x.length;w+=1)h.delete(x[w]);fe(e,O.prev,N.next),fe(e,d,O),fe(e,N,y),f=y,d=N,k-=1,g=[],x=[]}else h.delete(_),Me(_,f,t),fe(e,_.prev,_.next),fe(e,_,d===null?e.effect.first:d.next),fe(e,d,_),d=_;continue}for(g=[],x=[];f!==null&&f!==_;)(h??(h=new Set)).add(f),x.push(f),f=Se(f.next);if(f===null)continue}(_.f&oe)===0&&g.push(_),d=_,f=Se(_.next)}if(e.outrogroups!==null){for(const W of e.outrogroups)W.pending.size===0&&(Ze(e,ta(W.done)),(j=e.outrogroups)==null||j.delete(W));e.outrogroups.size===0&&(e.outrogroups=null)}if(f!==null||h!==void 0){var u=[];if(h!==void 0)for(_ of h)(_.f&qe)===0&&u.push(_);for(;f!==null;)(f.f&qe)===0&&f!==e.fallback&&u.push(f),f=Se(f.next);var p=u.length;if(p>0){var T=(r&Ea)!==0&&n===0?t:null;if(l){for(k=0;k<p;k+=1)(L=(E=u[k].nodes)==null?void 0:E.a)==null||L.measure();for(k=0;k<p;k+=1)(G=(U=u[k].nodes)==null?void 0:U.a)==null||G.fix()}Yt(e,u,T)}}l&&Ma(()=>{var W,te;if($!==void 0)for(_ of $)(te=(W=_.nodes)==null?void 0:W.a)==null||te.apply()})}function Xt(e,a,t,r,s,l,n,i){var f=(n&lt)!==0?(n&ot)===0?B(t,!1,!1):ga(t):null,h=(n&vt)!==0?ga(s):null;return{v:f,i:h,e:De(()=>(l(a,f??t,h??s,i),()=>{e.delete(r)}))}}function Me(e,a,t){if(e.nodes)for(var r=e.nodes.start,s=e.nodes.end,l=a&&(a.f&oe)===0?a.nodes.start:t;r!==null;){var n=gt(r);if(l.before(r),r===s)return;r=n}}function fe(e,a,t){a===null?e.effect.first=t:a.next=t,t===null?e.effect.last=a:t.prev=a}function J(e,a,t,r,s){var i;H&&Fe();var l=(i=a.$$slots)==null?void 0:i[t],n=!1;l===!0&&(l=a.children,n=!0),l===void 0||l(e,n?()=>r:r)}function Zt(e,a,t,r,s,l){let n=H;H&&Fe();var i=null;H&&ke.nodeType===pt&&(i=ke,Fe());var f=H?ke:e,h=new Rt(f,!1);Ta(()=>{const d=a()||null;var $=bt;if(d===null){h.ensure(null,null);return}return h.ensure(d,g=>{if(d){if(i=H?i:mt(d,$),Za(i,i),r){H&&Kt(d)&&i.append(document.createComment(""));var x=H?Ca(i):i.appendChild(Oe());H&&(x===null?we(!1):Te(x)),r(i,x)}yt.nodes.end=i,g.before(i)}H&&Te(g)}),()=>{}},ht),Pa(()=>{}),n&&(we(!0),Te(f))}function Qt(e,a){var t=void 0,r;Da(()=>{t!==(t=a())&&(r&&(Le(r),r=null),t&&(r=De(()=>{ra(()=>t(e))})))})}function ja(e){var a,t,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e)){var s=e.length;for(a=0;a<s;a++)e[a]&&(t=ja(e[a]))&&(r&&(r+=" "),r+=t)}else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function er(){for(var e,a,t=0,r="",s=arguments.length;t<s;t++)(e=arguments[t])&&(a=ja(e))&&(r&&(r+=" "),r+=a);return r}function Oa(e){return typeof e=="object"?er(e):e??""}const ba=[...` 	
\r\f \v\uFEFF`];function ar(e,a,t){var r=e==null?"":""+e;if(a&&(r=r?r+" "+a:a),t){for(var s of Object.keys(t))if(t[s])r=r?r+" "+s:s;else if(r.length)for(var l=s.length,n=0;(n=r.indexOf(s,n))>=0;){var i=n+l;(n===0||ba.includes(r[n-1]))&&(i===r.length||ba.includes(r[i]))?r=(n===0?"":r.substring(0,n))+r.substring(i+1):n=i}}return r===""?null:r}function ya(e,a=!1){var t=a?" !important;":";",r="";for(var s of Object.keys(e)){var l=e[s];l!=null&&l!==""&&(r+=" "+s+": "+l+t)}return r}function Ge(e){return e[0]!=="-"||e[1]!=="-"?e.toLowerCase():e}function tr(e,a){if(a){var t="",r,s;if(Array.isArray(a)?(r=a[0],s=a[1]):r=a,e){e=String(e).replaceAll(/\s*\/\*.*?\*\/\s*/g,"").trim();var l=!1,n=0,i=!1,f=[];r&&f.push(...Object.keys(r).map(Ge)),s&&f.push(...Object.keys(s).map(Ge));var h=0,d=-1;const S=e.length;for(var $=0;$<S;$++){var g=e[$];if(i?g==="/"&&e[$-1]==="*"&&(i=!1):l?l===g&&(l=!1):g==="/"&&e[$+1]==="*"?i=!0:g==='"'||g==="'"?l=g:g==="("?n++:g===")"&&n--,!i&&l===!1&&n===0){if(g===":"&&d===-1)d=$;else if(g===";"||$===S-1){if(d!==-1){var x=Ge(e.substring(h,d).trim());if(!f.includes(x)){g!==";"&&$++;var b=e.substring(h,$).trim();t+=" "+b+";"}}h=$+1,d=-1}}}}return r&&(t+=ya(r)),s&&(t+=ya(s,!0)),t=t.trim(),t===""?null:t}return e==null?null:String(e)}function Ne(e,a,t,r,s,l){var n=e.__className;if(H||n!==t||n===void 0){var i=ar(t,r,l);(!H||i!==e.getAttribute("class"))&&(i==null?e.removeAttribute("class"):a?e.className=i:e.setAttribute("class",i)),e.__className=t}else if(l&&s!==l)for(var f in l){var h=!!l[f];(s==null||h!==!!s[f])&&e.classList.toggle(f,h)}return l}function Ye(e,a={},t,r){for(var s in t){var l=t[s];a[s]!==l&&(t[s]==null?e.style.removeProperty(s):e.style.setProperty(s,l,r))}}function Qe(e,a,t,r){var s=e.__style;if(H||s!==a){var l=tr(a,r);(!H||l!==e.getAttribute("style"))&&(l==null?e.removeAttribute("style"):e.style.cssText=l),e.__style=a}else r&&(Array.isArray(r)?(Ye(e,t==null?void 0:t[0],r[0]),Ye(e,t==null?void 0:t[1],r[1],"important")):Ye(e,t,r));return r}function He(e,a,t=!1){if(e.multiple){if(a==null)return;if(!Aa(a))return $t();for(var r of e.options)r.selected=a.includes(Pe(r));return}for(r of e.options){var s=Pe(r);if(xt(s,a)){r.selected=!0;return}}(!t||a!==void 0)&&(e.selectedIndex=-1)}function Fa(e){var a=new MutationObserver(()=>{He(e,e.__value)});a.observe(e,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),Pa(()=>{a.disconnect()})}function na(e,a,t=a){var r=new WeakSet,s=!0;Ia(e,"change",l=>{var n=l?"[selected]":":checked",i;if(e.multiple)i=[].map.call(e.querySelectorAll(n),Pe);else{var f=e.querySelector(n)??e.querySelector("option:not([disabled])");i=f&&Pe(f)}t(i),e.__value=i,ve!==null&&r.add(ve)}),ra(()=>{var l=a();if(e===document.activeElement){var n=ve;if(r.has(n))return}if(He(e,l,s),s&&l===void 0){var i=e.querySelector(":checked");i!==null&&(l=Pe(i),t(l))}e.__value=l,s=!1}),Fa(e)}function Pe(e){return"__value"in e?e.__value:e.value}const Ce=Symbol("class"),Ee=Symbol("style"),La=Symbol("is custom element"),Ha=Symbol("is html"),rr=Ke?"link":"LINK",nr=Ke?"input":"INPUT",sr=Ke?"option":"OPTION",ir=Ke?"select":"SELECT";function pe(e){if(H){var a=!1,t=()=>{if(!a){if(a=!0,e.hasAttribute("value")){var r=e.value;Re(e,"value",null),e.value=r}if(e.hasAttribute("checked")){var s=e.checked;Re(e,"checked",null),e.checked=s}}};e.__on_r=t,Ma(t),At()}}function lr(e,a){a?e.hasAttribute("selected")||e.setAttribute("selected",""):e.removeAttribute("selected")}function Re(e,a,t,r){var s=Ra(e);H&&(s[a]=e.getAttribute(a),a==="src"||a==="srcset"||a==="href"&&e.nodeName===rr)||s[a]!==(s[a]=t)&&(a==="loading"&&(e[Ct]=t),t==null?e.removeAttribute(a):typeof t!="string"&&Ka(e).includes(a)?e[a]=t:e.setAttribute(a,t))}function or(e,a,t,r,s=!1,l=!1){if(H&&s&&e.nodeName===nr){var n=e,i=n.type==="checkbox"?"defaultChecked":"defaultValue";i in t||pe(n)}var f=Ra(e),h=f[La],d=!f[Ha];let $=H&&h;$&&we(!1);var g=a||{},x=e.nodeName===sr;for(var b in a)b in t||(t[b]=null);t.class?t.class=Oa(t.class):t[Ce]&&(t.class=null),t[Ee]&&(t.style??(t.style=null));var S=Ka(e);for(const N in t){let u=t[N];if(x&&N==="value"&&u==null){e.value=e.__value="",g[N]=u;continue}if(N==="class"){var _=e.namespaceURI==="http://www.w3.org/1999/xhtml";Ne(e,_,u,r,a==null?void 0:a[Ce],t[Ce]),g[N]=u,g[Ce]=t[Ce];continue}if(N==="style"){Qe(e,u,a==null?void 0:a[Ee],t[Ee]),g[N]=u,g[Ee]=t[Ee];continue}var k=g[N];if(!(u===k&&!(u===void 0&&e.hasAttribute(N)))){g[N]=u;var C=N[0]+N[1];if(C!=="$$")if(C==="on"){const p={},T="$$"+N;let z=N.slice(2);var y=Gt(z);if(Bt(z)&&(z=z.slice(0,-7),p.capture=!0),!y&&k){if(u!=null)continue;e.removeEventListener(z,g[T],p),g[T]=null}if(y)Vt(z,e,u),Ut([z]);else if(u!=null){let F=function(P){g[N].call(this,P)};g[T]=Wt(z,e,F,p)}}else if(N==="style")Re(e,N,u);else if(N==="autofocus")Nt(e,!!u);else if(!h&&(N==="__value"||N==="value"&&u!=null))e.value=e.__value=u;else if(N==="selected"&&x)lr(e,u);else{var w=N;d||(w=qt(w));var O=w==="defaultValue"||w==="defaultChecked";if(u==null&&!h&&!O)if(f[N]=null,w==="value"||w==="checked"){let p=e;const T=a===void 0;if(w==="value"){let z=p.defaultValue;p.removeAttribute(w),p.defaultValue=z,p.value=p.__value=T?z:null}else{let z=p.defaultChecked;p.removeAttribute(w),p.defaultChecked=z,p.checked=T?z:!1}}else e.removeAttribute(N);else O||S.includes(w)&&(h||typeof u!="string")?(e[w]=u,w in f&&(f[w]=Tt)):typeof u!="function"&&Re(e,w,u)}}}return $&&we(!0),g}function $a(e,a,t=[],r=[],s=[],l,n=!1,i=!1){kt(s,t,r,f=>{var h=void 0,d={},$=e.nodeName===ir,g=!1;if(Da(()=>{var b=a(...f.map(o)),S=or(e,h,b,l,n,i);g&&$&&"value"in b&&He(e,b.value);for(let k of Object.getOwnPropertySymbols(d))b[k]||Le(d[k]);for(let k of Object.getOwnPropertySymbols(b)){var _=b[k];k.description===wt&&(!h||_!==h[k])&&(d[k]&&Le(d[k]),d[k]=De(()=>Qt(e,()=>_))),S[k]=_}h=S}),$){var x=e;ra(()=>{He(x,h.value,!0),Fa(x)})}g=!0})}function Ra(e){return e.__attributes??(e.__attributes={[La]:e.nodeName.includes("-"),[Ha]:e.namespaceURI===zt})}var xa=new Map;function Ka(e){var a=e.getAttribute("is")||e.nodeName,t=xa.get(a);if(t)return t;xa.set(a,t=[]);for(var r,s=e,l=Element.prototype;l!==s;){r=Et(s);for(var n in r)r[n].set&&t.push(n);s=St(s)}return t}function _e(e,a,t=a){var r=new WeakSet;Ia(e,"input",async s=>{var l=s?e.defaultValue:e.value;if(l=Je(e)?Xe(l):l,t(l),ve!==null&&r.add(ve),await Mt(),l!==(l=a())){var n=e.selectionStart,i=e.selectionEnd,f=e.value.length;if(e.value=l??"",i!==null){var h=e.value.length;n===i&&i===f&&h>f?(e.selectionStart=h,e.selectionEnd=h):(e.selectionStart=n,e.selectionEnd=Math.min(i,h))}}}),(H&&e.defaultValue!==e.value||M(a)==null&&e.value)&&(t(Je(e)?Xe(e.value):e.value),ve!==null&&r.add(ve)),Pt(()=>{var s=a();if(e===document.activeElement){var l=ve;if(r.has(l))return}Je(e)&&s===Xe(e.value)||e.type==="date"&&!s&&!e.value||s!==e.value&&(e.value=s??"")})}function Je(e){var a=e.type;return a==="number"||a==="range"}function Xe(e){return e===""?null:+e}function $e(e=!1){const a=Dt,t=a.l.u;if(!t)return;let r=()=>Z(a.s);if(e){let s=0,l={};const n=Ot(()=>{let i=!1;const f=a.s;for(const h in f)f[h]!==l[h]&&(l[h]=f[h],i=!0);return i&&s++,s});r=()=>o(n)}t.b.length&&It(()=>{ka(a,r),pa(t.b)}),_a(()=>{const s=M(()=>t.m.map(jt));return()=>{for(const l of s)typeof l=="function"&&l()}}),t.a.length&&_a(()=>{ka(a,r),pa(t.a)})}function ka(e,a){if(e.l.s)for(const t of e.l.s)o(t);a()}/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 * 
 * Copyright (c) 2026 Lucide Icons and Contributors
 * 
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 * 
 * ---
 * 
 * The following Lucide icons are derived from the Feather project:
 * 
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 * 
 * The MIT License (MIT) (for the icons listed above)
 * 
 * Copyright (c) 2013-present Cole Bemis
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 * 
 */const vr={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 * 
 * Copyright (c) 2026 Lucide Icons and Contributors
 * 
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 * 
 * ---
 * 
 * The following Lucide icons are derived from the Feather project:
 * 
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 * 
 * The MIT License (MIT) (for the icons listed above)
 * 
 * Copyright (c) 2013-present Cole Bemis
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 * 
 */const dr=e=>{for(const a in e)if(a.startsWith("aria-")||a==="role"||a==="title")return!0;return!1};/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 * 
 * Copyright (c) 2026 Lucide Icons and Contributors
 * 
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 * 
 * ---
 * 
 * The following Lucide icons are derived from the Feather project:
 * 
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 * 
 * The MIT License (MIT) (for the icons listed above)
 * 
 * Copyright (c) 2013-present Cole Bemis
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 * 
 */const wa=(...e)=>e.filter((a,t,r)=>!!a&&a.trim()!==""&&r.indexOf(a)===t).join(" ").trim();var cr=Qa("<svg><!><!></svg>");function ee(e,a){const t=q(a,["children","$$slots","$$events","$$legacy"]),r=q(t,["name","color","size","strokeWidth","absoluteStrokeWidth","iconNode"]);be(a,!1);let s=I(a,"name",8,void 0),l=I(a,"color",8,"currentColor"),n=I(a,"size",8,24),i=I(a,"strokeWidth",8,2),f=I(a,"absoluteStrokeWidth",8,!1),h=I(a,"iconNode",24,()=>[]);$e();var d=cr();$a(d,(x,b,S)=>({...vr,...x,...r,width:n(),height:n(),stroke:l(),"stroke-width":b,class:S}),[()=>dr(r)?void 0:{"aria-hidden":"true"},()=>(Z(f()),Z(i()),Z(n()),M(()=>f()?Number(i())*24/Number(n()):i())),()=>(Z(wa),Z(s()),Z(t),M(()=>wa("lucide-icon","lucide",s()?`lucide-${s()}`:"",t.class)))]);var $=c(d);me($,1,h,he,(x,b)=>{var S=Ft(()=>Lt(o(b),2));let _=()=>o(S)[0],k=()=>o(S)[1];var C=V(),y=K(C);Zt(y,_,!0,(w,O)=>{$a(w,()=>({...k()}))}),A(x,C)});var g=m($);J(g,a,"default",{}),v(d),A(e,d),ye()}function Ba(e,a){const t=q(a,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M8 2v4"}],["path",{d:"M16 2v4"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2"}],["path",{d:"M3 10h18"}]];ee(e,Q({name:"calendar"},()=>t,{get iconNode(){return r},children:(s,l)=>{var n=V(),i=K(n);J(i,a,"default",{}),A(s,n)},$$slots:{default:!0}}))}function ur(e,a){const t=q(a,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"m6 9 6 6 6-6"}]];ee(e,Q({name:"chevron-down"},()=>t,{get iconNode(){return r},children:(s,l)=>{var n=V(),i=K(n);J(i,a,"default",{}),A(s,n)},$$slots:{default:!0}}))}function fr(e,a){const t=q(a,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M12 8v8"}],["path",{d:"m8 12 4 4 4-4"}]];ee(e,Q({name:"circle-arrow-down"},()=>t,{get iconNode(){return r},children:(s,l)=>{var n=V(),i=K(n);J(i,a,"default",{}),A(s,n)},$$slots:{default:!0}}))}function gr(e,a){const t=q(a,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m16 12-4-4-4 4"}],["path",{d:"M12 16V8"}]];ee(e,Q({name:"circle-arrow-up"},()=>t,{get iconNode(){return r},children:(s,l)=>{var n=V(),i=K(n);J(i,a,"default",{}),A(s,n)},$$slots:{default:!0}}))}function _r(e,a){const t=q(a,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5"}],["path",{d:"M10 9H8"}],["path",{d:"M16 13H8"}],["path",{d:"M16 17H8"}]];ee(e,Q({name:"file-text"},()=>t,{get iconNode(){return r},children:(s,l)=>{var n=V(),i=K(n);J(i,a,"default",{}),A(s,n)},$$slots:{default:!0}}))}function pr(e,a){const t=q(a,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z"}]];ee(e,Q({name:"funnel"},()=>t,{get iconNode(){return r},children:(s,l)=>{var n=V(),i=K(n);J(i,a,"default",{}),A(s,n)},$$slots:{default:!0}}))}function hr(e,a){const t=q(a,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1"}]];ee(e,Q({name:"layout-dashboard"},()=>t,{get iconNode(){return r},children:(s,l)=>{var n=V(),i=K(n);J(i,a,"default",{}),A(s,n)},$$slots:{default:!0}}))}function ea(e,a){const t=q(a,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M5 12h14"}],["path",{d:"M12 5v14"}]];ee(e,Q({name:"plus"},()=>t,{get iconNode(){return r},children:(s,l)=>{var n=V(),i=K(n);J(i,a,"default",{}),A(s,n)},$$slots:{default:!0}}))}function mr(e,a){const t=q(a,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M13 16H8"}],["path",{d:"M14 8H8"}],["path",{d:"M16 12H8"}],["path",{d:"M4 3a1 1 0 0 1 1-1 1.3 1.3 0 0 1 .7.2l.933.6a1.3 1.3 0 0 0 1.4 0l.934-.6a1.3 1.3 0 0 1 1.4 0l.933.6a1.3 1.3 0 0 0 1.4 0l.933-.6a1.3 1.3 0 0 1 1.4 0l.934.6a1.3 1.3 0 0 0 1.4 0l.933-.6A1.3 1.3 0 0 1 19 2a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1 1.3 1.3 0 0 1-.7-.2l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.934.6a1.3 1.3 0 0 1-1.4 0l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-1.4 0l-.934-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-.7.2 1 1 0 0 1-1-1z"}]];ee(e,Q({name:"receipt-text"},()=>t,{get iconNode(){return r},children:(s,l)=>{var n=V(),i=K(n);J(i,a,"default",{}),A(s,n)},$$slots:{default:!0}}))}function br(e,a){const t=q(a,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"m21 21-4.34-4.34"}],["circle",{cx:"11",cy:"11",r:"8"}]];ee(e,Q({name:"search"},()=>t,{get iconNode(){return r},children:(s,l)=>{var n=V(),i=K(n);J(i,a,"default",{}),A(s,n)},$$slots:{default:!0}}))}function yr(e,a){const t=q(a,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M14 17H5"}],["path",{d:"M19 7h-9"}],["circle",{cx:"17",cy:"17",r:"3"}],["circle",{cx:"7",cy:"7",r:"3"}]];ee(e,Q({name:"settings-2"},()=>t,{get iconNode(){return r},children:(s,l)=>{var n=V(),i=K(n);J(i,a,"default",{}),A(s,n)},$$slots:{default:!0}}))}function sa(e,a){const t=q(a,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor"}]];ee(e,Q({name:"tag"},()=>t,{get iconNode(){return r},children:(s,l)=>{var n=V(),i=K(n);J(i,a,"default",{}),A(s,n)},$$slots:{default:!0}}))}function aa(e,a){const t=q(a,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M10 11v6"}],["path",{d:"M14 11v6"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"}],["path",{d:"M3 6h18"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"}]];ee(e,Q({name:"trash-2"},()=>t,{get iconNode(){return r},children:(s,l)=>{var n=V(),i=K(n);J(i,a,"default",{}),A(s,n)},$$slots:{default:!0}}))}function $r(e,a){const t=q(a,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M16 17h6v-6"}],["path",{d:"m22 17-8.5-8.5-5 5L2 7"}]];ee(e,Q({name:"trending-down"},()=>t,{get iconNode(){return r},children:(s,l)=>{var n=V(),i=K(n);J(i,a,"default",{}),A(s,n)},$$slots:{default:!0}}))}function xr(e,a){const t=q(a,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M16 7h6v6"}],["path",{d:"m22 7-8.5 8.5-5-5L2 17"}]];ee(e,Q({name:"trending-up"},()=>t,{get iconNode(){return r},children:(s,l)=>{var n=V(),i=K(n);J(i,a,"default",{}),A(s,n)},$$slots:{default:!0}}))}function Va(e,a){const t=q(a,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"}],["circle",{cx:"12",cy:"7",r:"4"}]];ee(e,Q({name:"user"},()=>t,{get iconNode(){return r},children:(s,l)=>{var n=V(),i=K(n);J(i,a,"default",{}),A(s,n)},$$slots:{default:!0}}))}function kr(e,a){const t=q(a,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"}],["path",{d:"M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"}]];ee(e,Q({name:"wallet"},()=>t,{get iconNode(){return r},children:(s,l)=>{var n=V(),i=K(n);J(i,a,"default",{}),A(s,n)},$$slots:{default:!0}}))}function Ua(e,a){const t=q(a,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M18 6 6 18"}],["path",{d:"m6 6 12 12"}]];ee(e,Q({name:"x"},()=>t,{get iconNode(){return r},children:(s,l)=>{var n=V(),i=K(n);J(i,a,"default",{}),A(s,n)},$$slots:{default:!0}}))}var wr=R('<div class="stats-grid svelte-1yo9aow"><div class="glass-card stat-card svelte-1yo9aow"><div class="stat-header svelte-1yo9aow"><span class="text-muted">Total Pemasukan</span> <div class="icon-circle income svelte-1yo9aow"><!></div></div> <p class="stat-amount income svelte-1yo9aow"> </p></div> <div class="glass-card stat-card svelte-1yo9aow"><div class="stat-header svelte-1yo9aow"><span class="text-muted">Total Pengeluaran</span> <div class="icon-circle expense svelte-1yo9aow"><!></div></div> <p class="stat-amount expense svelte-1yo9aow"> </p></div> <div class="glass-card stat-card svelte-1yo9aow"><div class="stat-header svelte-1yo9aow"><span class="text-muted">Saldo Saat Ini</span> <div class="icon-circle balance svelte-1yo9aow"><!></div></div> <p class="stat-amount balance svelte-1yo9aow"> </p></div></div>');function Nr(e,a){be(a,!1);let t=I(a,"stats",8);const r=u=>new Intl.NumberFormat("id-ID",{style:"currency",currency:"IDR",maximumFractionDigits:0}).format(u);$e();var s=wr(),l=c(s),n=c(l),i=m(c(n),2),f=c(i);xr(f,{size:18}),v(i),v(n);var h=m(n,2),d=c(h,!0);v(h),v(l);var $=m(l,2),g=c($),x=m(c(g),2),b=c(x);$r(b,{size:18}),v(x),v(g);var S=m(g,2),_=c(S,!0);v(S),v($);var k=m($,2),C=c(k),y=m(c(C),2),w=c(y);kr(w,{size:18}),v(y),v(C);var O=m(C,2),N=c(O,!0);v(O),v(k),v(s),le((u,p,T)=>{ae(d,u),ae(_,p),ae(N,T)},[()=>(Z(t()),M(()=>r(t().income))),()=>(Z(t()),M(()=>r(t().expense))),()=>(Z(t()),M(()=>r(t().balance)))]),A(e,s),ye()}var Tr=R('<span style="font-size: 0.75rem; color: var(--primary); display: flex; align-items: center; gap: 0.2rem;"><!> </span>'),Ar=R('<tr class="svelte-1b1xc"><td class="svelte-1b1xc"><div style="display: flex; flex-direction: column; gap: 0.2rem;"><span style="font-size: 0.85rem; display: flex; align-items: center; gap: 0.3rem;"><!> </span></div></td><td class="svelte-1b1xc"><div style="display: flex; flex-direction: column; gap: 0.2rem;"><span style="font-weight: 500; font-size: 0.9rem; display: flex; align-items: center; gap: 0.3rem;"><!> </span> <!></div></td><td class="svelte-1b1xc"><span class="text-muted" style="font-size: 0.85rem;"> </span></td><td class="svelte-1b1xc"><span style="font-weight: 600; font-size: 0.95rem;"> </span></td><td class="svelte-1b1xc"><button class="btn-icon svelte-1b1xc" title="Hapus"><!></button></td></tr>'),zr=R('<tr class="svelte-1b1xc"><td colspan="5" style="text-align: center; padding: 3rem;" class="text-muted svelte-1b1xc">Belum ada transaksi.</td></tr>'),Sr=R('<div class="glass-card" style="padding: 0; overflow: hidden;"><div class="table-container svelte-1b1xc"><table class="svelte-1b1xc"><thead><tr><th class="svelte-1b1xc">Tanggal</th><th class="svelte-1b1xc">Kategori</th><th class="svelte-1b1xc">Keterangan</th><th class="svelte-1b1xc">Jumlah</th><th class="svelte-1b1xc">Aksi</th></tr></thead><tbody><!><!></tbody></table></div></div>');function Cr(e,a){be(a,!1);let t=I(a,"transactions",8),r=I(a,"onDelete",8);const s=x=>new Intl.NumberFormat("id-ID",{style:"currency",currency:"IDR",maximumFractionDigits:0}).format(x),l=x=>new Date(x).toLocaleDateString("id-ID",{day:"numeric",month:"short",year:"numeric"});$e();var n=Sr(),i=c(n),f=c(i),h=m(c(f)),d=c(h);me(d,1,t,he,(x,b)=>{var S=Ar(),_=c(S),k=c(_),C=c(k),y=c(C);Ba(y,{size:12,class:"text-muted"});var w=m(y);v(C),v(k),v(_);var O=m(_),N=c(O),u=c(N),p=c(u);sa(p,{size:12,class:"text-muted"});var T=m(p);v(u);var z=m(u,2);{var F=ne=>{var ce=Tr(),xe=c(ce);Va(xe,{size:10});var Ae=m(xe);v(ce),le(()=>ae(Ae,` ${o(b),M(()=>o(b).person_name)??""}`)),A(ne,ce)};de(z,ne=>{o(b),M(()=>o(b).person_name)&&ne(F)})}v(N),v(O);var P=m(O),X=c(P),j=c(X,!0);v(X),v(P);var E=m(P),L=c(E),U=c(L);v(L),v(E);var G=m(E),W=c(G),te=c(W);aa(te,{size:16}),v(W),v(G),v(S),le((ne,ce)=>{ae(w,` ${ne??""}`),ae(T,` ${o(b),M(()=>o(b).category_name)??""}`),ae(j,(o(b),M(()=>o(b).description||"-"))),Ne(L,1,Oa((o(b),M(()=>o(b).type==="income"?"amount-income":"amount-expense")))),ae(U,`${o(b),M(()=>o(b).type==="income"?"+":"-")??""}${ce??""}`)},[()=>(o(b),M(()=>l(o(b).date))),()=>(o(b),M(()=>s(o(b).amount)))]),Y("click",W,()=>r()(o(b).id)),A(x,S)});var $=m(d);{var g=x=>{var b=zr();A(x,b)};de($,x=>{Z(t()),M(()=>t().length===0)&&x(g)})}v(h),v(f),v(i),v(n),A(e,n),ye()}var Er=R("<option> </option>"),Mr=R('<div style="margin-top: 1.25rem; display: flex; justify-content: flex-end;"><button class="btn-text svelte-1nfbho9" style="display: flex; align-items: center; gap: 0.4rem; font-size: 0.8rem;"><!> Bersihkan Filter</button></div>'),Pr=R('<div class="glass-card" style="margin-bottom: 2rem; padding: 1.25rem;"><div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 1.25rem;"><!> <h3 style="font-size: 1rem; margin: 0;">Filter & Pencarian</h3></div> <div class="filter-grid svelte-1nfbho9"><div class="filter-group svelte-1nfbho9"><label for="search_name" class="svelte-1nfbho9">Nama Orang</label> <div style="position: relative;"><input type="text" id="search_name" placeholder="Cari nama..."/> <!></div></div> <div class="filter-group svelte-1nfbho9"><label for="filter_category" class="svelte-1nfbho9">Kategori</label> <select id="filter_category"><option>Semua Kategori</option><!></select></div> <div class="filter-group svelte-1nfbho9"><label for="start_date" class="svelte-1nfbho9">Dari Tanggal</label> <input type="date" id="start_date"/></div> <div class="filter-group svelte-1nfbho9"><label for="end_date" class="svelte-1nfbho9">Sampai Tanggal</label> <input type="date" id="end_date"/></div></div> <!></div>');function Dr(e,a){be(a,!1);let t=I(a,"categories",8),r=I(a,"filters",12),s=I(a,"onFilterChange",8);$e();var l=Pr(),n=c(l),i=c(n);pr(i,{size:18,class:"text-muted"}),ie(2),v(n);var f=m(n,2),h=c(f),d=m(c(h),2),$=c(d);pe($);var g=m($,2);br(g,{size:16,class:"input-icon"}),v(d),v(h);var x=m(h,2),b=m(c(x),2),S=c(b);S.value=(S.__value=void 0)??"";var _=m(S);me(_,1,t,he,(u,p)=>{var T=Er(),z=c(T,!0);v(T);var F={};le(()=>{ae(z,(o(p),M(()=>o(p).name))),F!==(F=(o(p),M(()=>o(p).id)))&&(T.value=(T.__value=(o(p),M(()=>o(p).id)))??"")}),A(u,T)}),v(b),v(x);var k=m(x,2),C=m(c(k),2);pe(C),v(k);var y=m(k,2),w=m(c(y),2);pe(w),v(y),v(f);var O=m(f,2);{var N=u=>{var p=Mr(),T=c(p),z=c(T);Ua(z,{size:14}),ie(),v(T),v(p),Y("click",T,()=>{r({startDate:void 0,endDate:void 0,categoryId:void 0,personName:void 0}),s()()}),A(u,p)};de(O,u=>{Z(r()),M(()=>r().startDate||r().endDate||r().categoryId||r().personName)&&u(N)})}v(l),_e($,()=>r().personName,u=>(r(r().personName=u,!0),je(()=>{s(),t()}))),Y("change",$,function(...u){var p;(p=s())==null||p.apply(this,u)}),na(b,()=>r().categoryId,u=>(r(r().categoryId=u,!0),je(()=>{s(),t()}))),Y("change",b,function(...u){var p;(p=s())==null||p.apply(this,u)}),_e(C,()=>r().startDate,u=>(r(r().startDate=u,!0),je(()=>{s(),t()}))),Y("change",C,function(...u){var p;(p=s())==null||p.apply(this,u)}),_e(w,()=>r().endDate,u=>(r(r().endDate=u,!0),je(()=>{s(),t()}))),Y("change",w,function(...u){var p;(p=s())==null||p.apply(this,u)}),A(e,l),ye()}var Ir=R("<option> </option>"),jr=R('<div class="form-group full animate-slide svelte-j3v6du"><label for="person" class="svelte-j3v6du">Nama Orang (Pemberi/Penerima Utang)</label> <div class="input-wrapper svelte-j3v6du"><input type="text" id="person" placeholder="Masukkan nama..." class="svelte-j3v6du"/> <!></div></div>'),Or=R('<div class="modal-backdrop svelte-j3v6du"><div class="modal-content glass-card animate-modal svelte-j3v6du"><div class="modal-header svelte-j3v6du"><h2 style="font-size: 1.25rem; margin: 0;">Tambah Transaksi</h2> <button class="btn-icon svelte-j3v6du"><!></button></div> <div class="form-container svelte-j3v6du"><div class="type-switcher svelte-j3v6du"><button>Pengeluaran</button> <button>Pemasukan</button></div> <div class="form-grid svelte-j3v6du"><div class="form-group full svelte-j3v6du"><label for="amount" class="svelte-j3v6du">Jumlah (IDR)</label> <div class="input-wrapper svelte-j3v6du"><span class="currency-prefix svelte-j3v6du">Rp</span> <input type="number" id="amount" placeholder="0" style="padding-left: 2.8rem; font-size: 1.25rem; font-weight: 700;" class="svelte-j3v6du"/></div></div> <div class="form-group half svelte-j3v6du"><label for="category" class="svelte-j3v6du">Kategori</label> <div class="input-wrapper svelte-j3v6du"><select id="category" class="svelte-j3v6du"><option>Pilih Kategori</option><!></select> <!> <!></div></div> <div class="form-group half svelte-j3v6du"><label for="date" class="svelte-j3v6du">Tanggal</label> <div class="input-wrapper svelte-j3v6du"><input type="date" id="date" class="svelte-j3v6du"/> <!></div></div> <!> <div class="form-group full svelte-j3v6du"><label for="desc" class="svelte-j3v6du">Keterangan</label> <div class="input-wrapper svelte-j3v6du"><textarea id="desc" placeholder="Catatan tambahan..." style="height: 60px; resize: none;" class="svelte-j3v6du"></textarea> <!></div></div></div> <button class="btn-primary" style="width: 100%; padding: 0.9rem; margin-top: 1rem; font-weight: 600;">Simpan Transaksi</button></div></div></div>'),Fr=R('<button class="btn-primary"><!> Transaksi</button>'),Lr=R('<button class="fab-btn svelte-j3v6du" title="Tambah Transaksi"><!></button>'),Hr=R("<!> <!>",1);function Na(e,a){be(a,!1);const t=B();let r=I(a,"isOpen",12,!1),s=I(a,"variant",8,"default"),l=I(a,"categories",8),n=I(a,"onSave",8),i=I(a,"onClose",8),f=B("expense"),h=B(null),d=B(null),$=B(new Date().toISOString().split("T")[0]),g=B(""),x=B("");function b(){D(f,"expense"),D(h,null),D(d,null),D($,new Date().toISOString().split("T")[0]),D(g,""),D(x,"")}function S(){o(h)&&o(d)&&o($)&&(n()({type:o(f),amount:o(h),category_id:o(d),date:o($),person_name:o(g),description:o(x)}),b(),i()())}function _(u){u.target===u.currentTarget&&i()()}ge(()=>(Z(l()),o(f)),()=>{D(t,l().filter(u=>u.type===o(f)))}),Be(),$e();var k=Hr(),C=K(k);{var y=u=>{var p=Or(),T=c(p),z=c(T),F=m(c(z),2),P=c(F);Ua(P,{size:20}),v(F),v(z);var X=m(z,2),j=c(X),E=c(j),L=m(E,2);v(j);var U=m(j,2),G=c(U),W=m(c(G),2),te=m(c(W),2);pe(te),v(W),v(G);var ne=m(G,2),ce=m(c(ne),2),xe=c(ce),Ae=c(xe);Ae.value=(Ae.__value=null)??"";var Wa=m(Ae);me(Wa,1,()=>o(t),he,(re,se)=>{var ue=Ir(),ze=c(ue,!0);v(ue);var Ie={};le(()=>{ae(ze,(o(se),M(()=>o(se).name))),Ie!==(Ie=(o(se),M(()=>o(se).id)))&&(ue.value=(ue.__value=(o(se),M(()=>o(se).id)))??"")}),A(re,ue)}),v(xe);var ia=m(xe,2);sa(ia,{size:16,class:"input-icon-left"});var qa=m(ia,2);ur(qa,{size:16,class:"input-icon-right"}),v(ce),v(ne);var Ve=m(ne,2),la=m(c(Ve),2),Ue=c(la);pe(Ue);var Ga=m(Ue,2);Ba(Ga,{size:16,class:"input-icon-left"}),v(la),v(Ve);var oa=m(Ve,2);{var Ya=re=>{var se=jr(),ue=m(c(se),2),ze=c(ue);pe(ze);var Ie=m(ze,2);Va(Ie,{size:16,class:"input-icon-left"}),v(ue),v(se),_e(ze,()=>o(g),Xa=>D(g,Xa)),A(re,se)};de(oa,re=>{o(d)===12&&re(Ya)})}var va=m(oa,2),da=m(c(va),2),We=c(da);Ht(We);var Ja=m(We,2);_r(Ja,{size:16,class:"input-icon-left",style:"top: 1rem; transform: none;"}),v(da),v(va),v(U);var ca=m(U,2);v(X),v(T),v(p),le(()=>{Ne(E,1,`type-btn ${o(f)==="expense"?"active expense":""}`,"svelte-j3v6du"),Ne(L,1,`type-btn ${o(f)==="income"?"active income":""}`,"svelte-j3v6du"),ca.disabled=!o(h)||!o(d)}),Y("click",F,function(...re){var se;(se=i())==null||se.apply(this,re)}),Y("click",E,()=>D(f,"expense")),Y("click",L,()=>D(f,"income")),_e(te,()=>o(h),re=>D(h,re)),na(xe,()=>o(d),re=>D(d,re)),_e(Ue,()=>o($),re=>D($,re)),_e(We,()=>o(x),re=>D(x,re)),Y("click",ca,S),Y("click",p,_),A(u,p)};de(C,u=>{r()&&u(y)})}var w=m(C,2);{var O=u=>{var p=Fr(),T=c(p);ea(T,{size:18}),ie(),v(p),Y("click",p,()=>r(!0)),A(u,p)},N=u=>{var p=Lr(),T=c(p);ea(T,{size:28}),v(p),Y("click",p,()=>r(!0)),A(u,p)};de(w,u=>{s()==="header"?u(O):s()==="fab"&&u(N,1)})}A(e,k),ye()}var Rr=R('<div class="category-item svelte-1706ejv"><span> </span> <button class="delete-btn svelte-1706ejv"><!></button></div>'),Kr=R('<div class="category-item svelte-1706ejv"><span> </span> <button class="delete-btn svelte-1706ejv"><!></button></div>'),Br=R('<div class="glass-card" style="margin-bottom: 2rem;"><div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 1.5rem;"><!> <h3 style="font-size: 1.1rem; margin: 0;">Kelola Kategori</h3></div> <div class="add-category-form svelte-1706ejv"><div style="flex: 1;" class="svelte-1706ejv"><input type="text" placeholder="Nama kategori baru..."/></div> <div style="width: 140px;" class="svelte-1706ejv"><select><option>Pengeluaran</option><option>Pemasukan</option></select></div> <button class="btn-primary" style="padding: 0 1.5rem;"><!> Tambah</button></div> <div class="categories-grid svelte-1706ejv"><div class="category-list-box svelte-1706ejv"><div class="list-header income svelte-1706ejv"><!> <span>Kategori Pemasukan</span></div> <div class="list-content svelte-1706ejv"></div></div> <div class="category-list-box svelte-1706ejv"><div class="list-header expense svelte-1706ejv"><!> <span>Kategori Pengeluaran</span></div> <div class="list-content svelte-1706ejv"></div></div></div></div>');function Vr(e,a){be(a,!1);const t=B(),r=B();let s=I(a,"categories",8),l=I(a,"onAdd",8),n=I(a,"onDelete",8),i=B(""),f=B("expense");function h(){o(i).trim()&&(l()(o(i),o(f)),D(i,""))}ge(()=>Z(s()),()=>{D(t,s().filter(E=>E.type==="income"))}),ge(()=>Z(s()),()=>{D(r,s().filter(E=>E.type==="expense"))}),Be(),$e();var d=Br(),$=c(d),g=c($);sa(g,{size:18,class:"text-muted"}),ie(2),v($);var x=m($,2),b=c(x),S=c(b);pe(S),v(b);var _=m(b,2),k=c(_),C=c(k);C.value=C.__value="expense";var y=m(C);y.value=y.__value="income",v(k),v(_);var w=m(_,2),O=c(w);ea(O,{size:18}),ie(),v(w),v(x);var N=m(x,2),u=c(N),p=c(u),T=c(p);gr(T,{size:16}),ie(2),v(p);var z=m(p,2);me(z,5,()=>o(t),he,(E,L)=>{var U=Rr(),G=c(U),W=c(G,!0);v(G);var te=m(G,2),ne=c(te);aa(ne,{size:14}),v(te),v(U),le(()=>ae(W,(o(L),M(()=>o(L).name)))),Y("click",te,()=>n()(o(L).id)),A(E,U)}),v(z),v(u);var F=m(u,2),P=c(F),X=c(P);fr(X,{size:16}),ie(2),v(P);var j=m(P,2);me(j,5,()=>o(r),he,(E,L)=>{var U=Kr(),G=c(U),W=c(G,!0);v(G);var te=m(G,2),ne=c(te);aa(ne,{size:14}),v(te),v(U),le(()=>ae(W,(o(L),M(()=>o(L).name)))),Y("click",te,()=>n()(o(L).id)),A(E,U)}),v(j),v(F),v(N),v(d),_e(S,()=>o(i),E=>D(i,E)),na(k,()=>o(f),E=>D(f,E)),Y("click",w,h),A(e,d),ye()}var Ur=R('<p class="text-muted">Belum ada data pengeluaran.</p>'),Wr=R('<div class="list-item svelte-1nkxb27"><div class="item-header svelte-1nkxb27"><span> </span> <span class="amount-expense"> </span></div> <div class="progress-bg svelte-1nkxb27"><div class="progress-bar expense svelte-1nkxb27"></div></div></div>'),qr=R('<p class="text-muted">Belum ada data pemasukan.</p>'),Gr=R('<div class="list-item svelte-1nkxb27"><div class="item-header svelte-1nkxb27"><span> </span> <span class="amount-income"> </span></div> <div class="progress-bg svelte-1nkxb27"><div class="progress-bar income svelte-1nkxb27"></div></div></div>'),Yr=R('<div class="grid-container svelte-1nkxb27"><div class="glass-card"><h3 class="card-title svelte-1nkxb27">Pengeluaran per Kategori</h3> <div class="list-container svelte-1nkxb27"><!></div></div> <div class="glass-card"><h3 class="card-title svelte-1nkxb27">Pemasukan per Kategori</h3> <div class="list-container svelte-1nkxb27"><!></div></div></div>');function Jr(e,a){be(a,!1);const t=B(),r=B(),s=B(),l=B();let n=I(a,"totals",8);const i=y=>new Intl.NumberFormat("id-ID",{style:"currency",currency:"IDR",maximumFractionDigits:0}).format(y);ge(()=>Z(n()),()=>{D(t,n().filter(y=>y.type==="income"))}),ge(()=>Z(n()),()=>{D(r,n().filter(y=>y.type==="expense"))}),ge(()=>o(r),()=>{D(s,Math.max(...o(r).map(y=>y.total),1))}),ge(()=>o(t),()=>{D(l,Math.max(...o(t).map(y=>y.total),1))}),Be(),$e();var f=Yr(),h=c(f),d=m(c(h),2),$=c(d);{var g=y=>{var w=Ur();A(y,w)},x=y=>{var w=V(),O=K(w);me(O,1,()=>o(r),he,(N,u)=>{var p=Wr(),T=c(p),z=c(T),F=c(z,!0);v(z);var P=m(z,2),X=c(P,!0);v(P),v(T);var j=m(T,2),E=c(j);v(j),v(p),le(L=>{ae(F,(o(u),M(()=>o(u).name))),ae(X,L),Qe(E,`width: ${o(u),o(s),M(()=>o(u).total/o(s)*100)??""}%`)},[()=>(o(u),M(()=>i(o(u).total)))]),A(N,p)}),A(y,w)};de($,y=>{o(r),M(()=>o(r).length===0)?y(g):y(x,-1)})}v(d),v(h);var b=m(h,2),S=m(c(b),2),_=c(S);{var k=y=>{var w=qr();A(y,w)},C=y=>{var w=V(),O=K(w);me(O,1,()=>o(t),he,(N,u)=>{var p=Gr(),T=c(p),z=c(T),F=c(z,!0);v(z);var P=m(z,2),X=c(P,!0);v(P),v(T);var j=m(T,2),E=c(j);v(j),v(p),le(L=>{ae(F,(o(u),M(()=>o(u).name))),ae(X,L),Qe(E,`width: ${o(u),o(l),M(()=>o(u).total/o(l)*100)??""}%`)},[()=>(o(u),M(()=>i(o(u).total)))]),A(N,p)}),A(y,w)};de(_,y=>{o(t),M(()=>o(t).length===0)?y(k):y(C,-1)})}v(S),v(b),v(f),A(e,f),ye()}var Xr=R('<div class="grid gap-6 svelte-vvmo7k"><!> <!> <div class="glass-card welcome-card svelte-vvmo7k"><h3 style="margin-bottom: 0.5rem;">Selamat Datang di ArthaFlow</h3> <p class="text-muted" style="font-size: 0.9rem;">Gunakan tombol <b>+ Transaksi</b> di atas untuk mencatat data baru.</p></div></div>'),Zr=R('<div class="grid gap-6 svelte-vvmo7k"><!> <!></div>'),Qr=R('<div class="main-layout svelte-vvmo7k"><nav class="glass-card tab-nav svelte-vvmo7k"><button><!> <span class="svelte-vvmo7k">Ringkasan</span></button> <button><!> <span class="svelte-vvmo7k">Transaksi</span></button> <button><!> <span class="svelte-vvmo7k">Pengaturan</span></button></nav> <div class="header-actions svelte-vvmo7k"><!></div> <div class="tab-content" style="animation: fadeIn 0.3s ease;"><!></div></div> <!>',1);function en(e,a){let t=I(a,"stats",8),r=I(a,"transactions",8),s=I(a,"categories",8),l=I(a,"categoryTotals",8),n=I(a,"filters",12),i=I(a,"onFilterChange",8),f=I(a,"onAddTransaction",8),h=I(a,"onDeleteTransaction",8),d=I(a,"onAddCategory",8),$=I(a,"onDeleteCategory",8),g=B("summary");var x=Qr(),b=K(x),S=c(b),_=c(S),k=c(_);hr(k,{size:18}),ie(2),v(_);var C=m(_,2),y=c(C);mr(y,{size:18}),ie(2),v(C);var w=m(C,2),O=c(w);yr(O,{size:18}),ie(2),v(w),v(S);var N=m(S,2),u=c(N);Na(u,{variant:"header",get categories(){return s()},get onSave(){return f()}}),v(N);var p=m(N,2),T=c(p);{var z=j=>{var E=Xr(),L=c(E);Nr(L,{get stats(){return t()}});var U=m(L,2);Jr(U,{get totals(){return l()}}),ie(2),v(E),A(j,E)},F=j=>{var E=Zr(),L=c(E);Dr(L,{get categories(){return s()},get onFilterChange(){return i()},get filters(){return n()},set filters(G){n(G)},$$legacy:!0});var U=m(L,2);Cr(U,{get transactions(){return r()},get onDelete(){return h()}}),v(E),A(j,E)},P=j=>{Vr(j,{get categories(){return s()},get onAdd(){return d()},get onDelete(){return $()}})};de(T,j=>{o(g)==="summary"?j(z):o(g)==="transactions"?j(F,1):o(g)==="settings"&&j(P,2)})}v(p),v(b);var X=m(b,2);Na(X,{variant:"fab",get categories(){return s()},get onSave(){return f()}}),le(()=>{Ne(_,1,`tab-btn ${o(g)==="summary"?"active":""}`,"svelte-vvmo7k"),Ne(C,1,`tab-btn ${o(g)==="transactions"?"active":""}`,"svelte-vvmo7k"),Ne(w,1,`tab-btn ${o(g)==="settings"?"active":""}`,"svelte-vvmo7k")}),Y("click",_,()=>D(g,"summary")),Y("click",C,()=>D(g,"transactions")),Y("click",w,()=>D(g,"settings")),A(e,x)}function vn(e,a){be(a,!1);const t=B(),r=B(),s=B(),l=B(),n=B();let i=I(a,"data",8);async function f(d,$){(await fetch(`?/${d}`,{method:"POST",body:JSON.stringify($),headers:{"x-sveltekit-action":"true"}})).ok&&await ha()}function h(){const d=new URL(window.location.href);o(n).startDate?d.searchParams.set("start",o(n).startDate):d.searchParams.delete("start"),o(n).endDate?d.searchParams.set("end",o(n).endDate):d.searchParams.delete("end"),o(n).categoryId?d.searchParams.set("cat",o(n).categoryId.toString()):d.searchParams.delete("cat"),o(n).personName?d.searchParams.set("person",o(n).personName):d.searchParams.delete("person"),window.history.replaceState({},"",d),ha()}ge(()=>(o(t),o(r),o(s),o(l),o(n),Z(i())),()=>{(d=>{D(t,d.stats),D(r,d.transactions),D(s,d.categories),D(l,d.categoryTotals),D(n,d.filters)})(i())}),Be(),$e(),en(e,{get stats(){return o(t)},get transactions(){return o(r)},get categories(){return o(s)},get categoryTotals(){return o(l)},onFilterChange:h,onAddTransaction:d=>f("addTransaction",d),onDeleteTransaction:d=>f("deleteTransaction",{id:d}),onAddCategory:(d,$)=>f("addCategory",{name:d,type:$}),onDeleteCategory:d=>f("deleteCategory",{id:d}),get filters(){return o(n)},set filters(d){D(n,d)},$$legacy:!0}),ye()}export{vn as component};
