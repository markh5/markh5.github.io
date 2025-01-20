"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[936],{1346:(e,t,r)=>{r.d(t,{jM:()=>J});var n,i=Symbol.for("immer-nothing"),o=Symbol.for("immer-draftable"),a=Symbol.for("immer-state");function l(e,...t){throw Error(`[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`)}var s=Object.getPrototypeOf;function c(e){return!!e&&!!e[a]}function u(e){return!!e&&(p(e)||Array.isArray(e)||!!e[o]||!!e.constructor?.[o]||b(e)||m(e))}var f=Object.prototype.constructor.toString();function p(e){if(!e||"object"!=typeof e)return!1;let t=s(e);if(null===t)return!0;let r=Object.hasOwnProperty.call(t,"constructor")&&t.constructor;return r===Object||"function"==typeof r&&Function.toString.call(r)===f}function _(e,t){0===d(e)?Reflect.ownKeys(e).forEach(r=>{t(r,e[r],e)}):e.forEach((r,n)=>t(n,r,e))}function d(e){let t=e[a];return t?t.type_:Array.isArray(e)?1:b(e)?2:m(e)?3:0}function h(e,t){return 2===d(e)?e.has(t):Object.prototype.hasOwnProperty.call(e,t)}function y(e,t,r){let n=d(e);2===n?e.set(t,r):3===n?e.add(r):e[t]=r}function b(e){return e instanceof Map}function m(e){return e instanceof Set}function v(e){return e.copy_||e.base_}function g(e,t){if(b(e))return new Map(e);if(m(e))return new Set(e);if(Array.isArray(e))return Array.prototype.slice.call(e);let r=p(e);if(!0!==t&&("class_only"!==t||r)){let t=s(e);return null!==t&&r?{...e}:Object.assign(Object.create(t),e)}{let t=Object.getOwnPropertyDescriptors(e);delete t[a];let r=Reflect.ownKeys(t);for(let n=0;n<r.length;n++){let i=r[n],o=t[i];!1===o.writable&&(o.writable=!0,o.configurable=!0),(o.get||o.set)&&(t[i]={configurable:!0,writable:!0,enumerable:o.enumerable,value:e[i]})}return Object.create(s(e),t)}}function S(e,t=!1){return P(e)||c(e)||!u(e)||(d(e)>1&&(e.set=e.add=e.clear=e.delete=w),Object.freeze(e),t&&Object.entries(e).forEach(([e,t])=>S(t,!0))),e}function w(){l(2)}function P(e){return Object.isFrozen(e)}var O={};function z(e){let t=O[e];return t||l(0,e),t}function j(e,t){t&&(z("Patches"),e.patches_=[],e.inversePatches_=[],e.patchListener_=t)}function A(e){F(e),e.drafts_.forEach(k),e.drafts_=null}function F(e){e===n&&(n=e.parent_)}function I(e){return n={drafts_:[],parent_:n,immer_:e,canAutoFreeze_:!0,unfinalizedDrafts_:0}}function k(e){let t=e[a];0===t.type_||1===t.type_?t.revoke_():t.revoked_=!0}function D(e,t){t.unfinalizedDrafts_=t.drafts_.length;let r=t.drafts_[0];return void 0!==e&&e!==r?(r[a].modified_&&(A(t),l(4)),u(e)&&(e=E(t,e),t.parent_||M(t,e)),t.patches_&&z("Patches").generateReplacementPatches_(r[a].base_,e,t.patches_,t.inversePatches_)):e=E(t,r,[]),A(t),t.patches_&&t.patchListener_(t.patches_,t.inversePatches_),e!==i?e:void 0}function E(e,t,r){if(P(t))return t;let n=t[a];if(!n)return _(t,(i,o)=>C(e,n,t,i,o,r)),t;if(n.scope_!==e)return t;if(!n.modified_)return M(e,n.base_,!0),n.base_;if(!n.finalized_){n.finalized_=!0,n.scope_.unfinalizedDrafts_--;let t=n.copy_,i=t,o=!1;3===n.type_&&(i=new Set(t),t.clear(),o=!0),_(i,(i,a)=>C(e,n,t,i,a,r,o)),M(e,t,!1),r&&e.patches_&&z("Patches").generatePatches_(n,r,e.patches_,e.inversePatches_)}return n.copy_}function C(e,t,r,n,i,o,a){if(c(i)){let a=E(e,i,o&&t&&3!==t.type_&&!h(t.assigned_,n)?o.concat(n):void 0);if(y(r,n,a),!c(a))return;e.canAutoFreeze_=!1}else a&&r.add(i);if(u(i)&&!P(i)){if(!e.immer_.autoFreeze_&&e.unfinalizedDrafts_<1)return;E(e,i),(!t||!t.scope_.parent_)&&"symbol"!=typeof n&&Object.prototype.propertyIsEnumerable.call(r,n)&&M(e,i)}}function M(e,t,r=!1){!e.parent_&&e.immer_.autoFreeze_&&e.canAutoFreeze_&&S(t,r)}var N={get(e,t){if(t===a)return e;let r=v(e);if(!h(r,t))return function(e,t,r){let n=K(t,r);return n?"value"in n?n.value:n.get?.call(e.draft_):void 0}(e,r,t);let n=r[t];return e.finalized_||!u(n)?n:n===x(e.base_,t)?(H(e),e.copy_[t]=W(n,e)):n},has:(e,t)=>t in v(e),ownKeys:e=>Reflect.ownKeys(v(e)),set(e,t,r){let n=K(v(e),t);if(n?.set)return n.set.call(e.draft_,r),!0;if(!e.modified_){let n=x(v(e),t),i=n?.[a];if(i&&i.base_===r)return e.copy_[t]=r,e.assigned_[t]=!1,!0;if((r===n?0!==r||1/r==1/n:r!=r&&n!=n)&&(void 0!==r||h(e.base_,t)))return!0;H(e),U(e)}return!!(e.copy_[t]===r&&(void 0!==r||t in e.copy_)||Number.isNaN(r)&&Number.isNaN(e.copy_[t]))||(e.copy_[t]=r,e.assigned_[t]=!0,!0)},deleteProperty:(e,t)=>(void 0!==x(e.base_,t)||t in e.base_?(e.assigned_[t]=!1,H(e),U(e)):delete e.assigned_[t],e.copy_&&delete e.copy_[t],!0),getOwnPropertyDescriptor(e,t){let r=v(e),n=Reflect.getOwnPropertyDescriptor(r,t);return n?{writable:!0,configurable:1!==e.type_||"length"!==t,enumerable:n.enumerable,value:r[t]}:n},defineProperty(){l(11)},getPrototypeOf:e=>s(e.base_),setPrototypeOf(){l(12)}},R={};function x(e,t){let r=e[a];return(r?v(r):e)[t]}function K(e,t){if(!(t in e))return;let r=s(e);for(;r;){let e=Object.getOwnPropertyDescriptor(r,t);if(e)return e;r=s(r)}}function U(e){!e.modified_&&(e.modified_=!0,e.parent_&&U(e.parent_))}function H(e){e.copy_||(e.copy_=g(e.base_,e.scope_.immer_.useStrictShallowCopy_))}function W(e,t){let r=b(e)?z("MapSet").proxyMap_(e,t):m(e)?z("MapSet").proxySet_(e,t):function(e,t){let r=Array.isArray(e),i={type_:r?1:0,scope_:t?t.scope_:n,modified_:!1,finalized_:!1,assigned_:{},parent_:t,base_:e,draft_:null,copy_:null,revoke_:null,isManual_:!1},o=i,a=N;r&&(o=[i],a=R);let{revoke:l,proxy:s}=Proxy.revocable(o,a);return i.draft_=s,i.revoke_=l,s}(e,t);return(t?t.scope_:n).drafts_.push(r),r}_(N,(e,t)=>{R[e]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}}),R.deleteProperty=function(e,t){return R.set.call(this,e,t,void 0)},R.set=function(e,t,r){return N.set.call(this,e[0],t,r,e[0])};var L=new class{constructor(e){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.produce=(e,t,r)=>{let n;if("function"==typeof e&&"function"!=typeof t){let r=t;t=e;let n=this;return function(e=r,...i){return n.produce(e,e=>t.call(this,e,...i))}}if("function"!=typeof t&&l(6),void 0!==r&&"function"!=typeof r&&l(7),u(e)){let i=I(this),o=W(e,void 0),a=!0;try{n=t(o),a=!1}finally{a?A(i):F(i)}return j(i,r),D(n,i)}if(e&&"object"==typeof e)l(1,e);else{if(void 0===(n=t(e))&&(n=e),n===i&&(n=void 0),this.autoFreeze_&&S(n,!0),r){let t=[],i=[];z("Patches").generateReplacementPatches_(e,n,t,i),r(t,i)}return n}},this.produceWithPatches=(e,t)=>{let r,n;return"function"==typeof e?(t,...r)=>this.produceWithPatches(t,t=>e(t,...r)):[this.produce(e,t,(e,t)=>{r=e,n=t}),r,n]},"boolean"==typeof e?.autoFreeze&&this.setAutoFreeze(e.autoFreeze),"boolean"==typeof e?.useStrictShallowCopy&&this.setUseStrictShallowCopy(e.useStrictShallowCopy)}createDraft(e){var t;u(e)||l(8),c(e)&&(c(t=e)||l(10,t),e=function e(t){let r;if(!u(t)||P(t))return t;let n=t[a];if(n){if(!n.modified_)return n.base_;n.finalized_=!0,r=g(t,n.scope_.immer_.useStrictShallowCopy_)}else r=g(t,!0);return _(r,(t,n)=>{y(r,t,e(n))}),n&&(n.finalized_=!1),r}(t));let r=I(this),n=W(e,void 0);return n[a].isManual_=!0,F(r),n}finishDraft(e,t){let r=e&&e[a];r&&r.isManual_||l(9);let{scope_:n}=r;return j(n,t),D(void 0,n)}setAutoFreeze(e){this.autoFreeze_=e}setUseStrictShallowCopy(e){this.useStrictShallowCopy_=e}applyPatches(e,t){let r;for(r=t.length-1;r>=0;r--){let n=t[r];if(0===n.path.length&&"replace"===n.op){e=n.value;break}}r>-1&&(t=t.slice(r+1));let n=z("Patches").applyPatches_;return c(e)?n(e,t):this.produce(e,e=>n(e,t))}},J=L.produce;L.produceWithPatches.bind(L),L.setAutoFreeze.bind(L),L.setUseStrictShallowCopy.bind(L),L.applyPatches.bind(L),L.createDraft.bind(L),L.finishDraft.bind(L)},9370:(e,t,r)=>{r.d(t,{A:()=>n});let n=(0,r(6385).A)("PanelsTopLeft",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M9 21V9",key:"1oto5p"}]])},643:(e,t,r)=>{function n(e,t){let r;try{r=e()}catch(e){return}return{getItem:e=>{var n;let i=e=>null===e?null:JSON.parse(e,null==t?void 0:t.reviver),o=null!=(n=r.getItem(e))?n:null;return o instanceof Promise?o.then(i):i(o)},setItem:(e,n)=>r.setItem(e,JSON.stringify(n,null==t?void 0:t.replacer)),removeItem:e=>r.removeItem(e)}}r.d(t,{KU:()=>n,Zr:()=>o});let i=e=>t=>{try{let r=e(t);if(r instanceof Promise)return r;return{then:e=>i(e)(r),catch(e){return this}}}catch(e){return{then(e){return this},catch:t=>i(t)(e)}}},o=(e,t)=>(r,o,a)=>{let l,s={storage:n(()=>localStorage),partialize:e=>e,version:0,merge:(e,t)=>({...t,...e}),...t},c=!1,u=new Set,f=new Set,p=s.storage;if(!p)return e((...e)=>{console.warn(`[zustand persist middleware] Unable to update item '${s.name}', the given storage is currently unavailable.`),r(...e)},o,a);let _=()=>{let e=s.partialize({...o()});return p.setItem(s.name,{state:e,version:s.version})},d=a.setState;a.setState=(e,t)=>{d(e,t),_()};let h=e((...e)=>{r(...e),_()},o,a);a.getInitialState=()=>h;let y=()=>{var e,t;if(!p)return;c=!1,u.forEach(e=>{var t;return e(null!=(t=o())?t:h)});let n=(null==(t=s.onRehydrateStorage)?void 0:t.call(s,null!=(e=o())?e:h))||void 0;return i(p.getItem.bind(p))(s.name).then(e=>{if(e){if("number"!=typeof e.version||e.version===s.version)return[!1,e.state];if(s.migrate){let t=s.migrate(e.state,e.version);return t instanceof Promise?t.then(e=>[!0,e]):[!0,t]}console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}return[!1,void 0]}).then(e=>{var t;let[n,i]=e;if(r(l=s.merge(i,null!=(t=o())?t:h),!0),n)return _()}).then(()=>{null==n||n(l,void 0),l=o(),c=!0,f.forEach(e=>e(l))}).catch(e=>{null==n||n(void 0,e)})};return a.persist={setOptions:e=>{s={...s,...e},e.storage&&(p=e.storage)},clearStorage:()=>{null==p||p.removeItem(s.name)},getOptions:()=>s,rehydrate:()=>y(),hasHydrated:()=>c,onHydrate:e=>(u.add(e),()=>{u.delete(e)}),onFinishHydration:e=>(f.add(e),()=>{f.delete(e)})},s.skipHydration||y(),l||h}},6224:(e,t,r)=>{r.d(t,{v:()=>s});var n=r(2130);let i=e=>{let t;let r=new Set,n=(e,n)=>{let i="function"==typeof e?e(t):e;if(!Object.is(i,t)){let e=t;t=(null!=n?n:"object"!=typeof i||null===i)?i:Object.assign({},t,i),r.forEach(r=>r(t,e))}},i=()=>t,o={setState:n,getState:i,getInitialState:()=>a,subscribe:e=>(r.add(e),()=>r.delete(e))},a=t=e(n,i,o);return o},o=e=>e?i(e):i,a=e=>e,l=e=>{let t=o(e),r=e=>(function(e,t=a){let r=n.useSyncExternalStore(e.subscribe,()=>t(e.getState()),()=>t(e.getInitialState()));return n.useDebugValue(r),r})(t,e);return Object.assign(r,t),r},s=e=>e?l(e):l}}]);