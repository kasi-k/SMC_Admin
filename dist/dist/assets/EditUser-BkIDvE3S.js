import{R as yt,r as De,g as ds,c as nr,a as bt,b as rr,o as ir,j as v,M as Kn,B as He,d as yn,A as vn,k as hs,u as fs,P as ps}from"./index-BzYBcspH.js";import{U as ms}from"./UpdateImage-HVtoiVlj.js";var Ar={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const li=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},gs=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const i=n[t++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=n[t++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=n[t++],o=n[t++],l=n[t++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=n[t++],o=n[t++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},ui={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){const s=n[i],o=i+1<n.length,l=o?n[i+1]:0,u=i+2<n.length,f=u?n[i+2]:0,T=s>>2,N=(s&3)<<4|l>>4;let B=(l&15)<<2|f>>6,Q=f&63;u||(Q=64,o||(B=64)),r.push(t[T],t[N],t[B],t[Q])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(li(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):gs(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){const s=t[n.charAt(i++)],l=i<n.length?t[n.charAt(i)]:0;++i;const f=i<n.length?t[n.charAt(i)]:64;++i;const N=i<n.length?t[n.charAt(i)]:64;if(++i,s==null||l==null||f==null||N==null)throw new ys;const B=s<<2|l>>4;if(r.push(B),f!==64){const Q=l<<4&240|f>>2;if(r.push(Q),N!==64){const oe=f<<6&192|N;r.push(oe)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class ys extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const vs=function(n){const e=li(n);return ui.encodeByteArray(e,!0)},di=function(n){return vs(n).replace(/\./g,"")},hi=function(n){try{return ui.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bs(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _s=()=>bs().__FIREBASE_DEFAULTS__,ws=()=>{if(typeof process>"u"||typeof Ar>"u")return;const n=Ar.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Is=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&hi(n[1]);return e&&JSON.parse(e)},sr=()=>{try{return _s()||ws()||Is()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Es=n=>{var e,t;return(t=(e=sr())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},fi=()=>{var n;return(n=sr())===null||n===void 0?void 0:n.config},pi=n=>{var e;return(e=sr())===null||e===void 0?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cs{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xe(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Ss(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(xe())}function Ts(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Ps(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function ks(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function As(){const n=xe();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function Ns(){try{return typeof indexedDB=="object"}catch{return!1}}function Rs(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Os="FirebaseError";class ht extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=Os,Object.setPrototypeOf(this,ht.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Gt.prototype.create)}}class Gt{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?xs(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new ht(i,l,r)}}function xs(n,e){return n.replace(Ds,(t,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const Ds=/\{\$([^}]+)}/g;function js(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function bn(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const i of t){if(!r.includes(i))return!1;const s=n[i],o=e[i];if(Nr(s)&&Nr(o)){if(!bn(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!t.includes(i))return!1;return!0}function Nr(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xt(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Ls(n,e){const t=new Ms(n,e);return t.subscribe.bind(t)}class Ms{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let i;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");Us(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:r},i.next===void 0&&(i.next=Ln),i.error===void 0&&(i.error=Ln),i.complete===void 0&&(i.complete=Ln);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Us(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Ln(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wt(n){return n&&n._delegate?n._delegate:n}class Rt{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fs{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new Cs;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Vs(e))try{this.getOrInitializeService({instanceIdentifier:vt})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=vt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=vt){return this.instances.has(e)}getOptions(e=vt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,t){var r;const i=this.normalizeInstanceIdentifier(t),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const i of r)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Bs(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=vt){return this.component?this.component.multipleInstances?e:vt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Bs(n){return n===vt?void 0:n}function Vs(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $s{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Fs(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var fe;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(fe||(fe={}));const Hs={debug:fe.DEBUG,verbose:fe.VERBOSE,info:fe.INFO,warn:fe.WARN,error:fe.ERROR,silent:fe.SILENT},zs=fe.INFO,Ws={[fe.DEBUG]:"log",[fe.VERBOSE]:"log",[fe.INFO]:"info",[fe.WARN]:"warn",[fe.ERROR]:"error"},Gs=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),i=Ws[e];if(i)console[i](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class mi{constructor(e){this.name=e,this._logLevel=zs,this._logHandler=Gs,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in fe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Hs[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,fe.DEBUG,...e),this._logHandler(this,fe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,fe.VERBOSE,...e),this._logHandler(this,fe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,fe.INFO,...e),this._logHandler(this,fe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,fe.WARN,...e),this._logHandler(this,fe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,fe.ERROR,...e),this._logHandler(this,fe.ERROR,...e)}}const Ks=(n,e)=>e.some(t=>n instanceof t);let Rr,Or;function qs(){return Rr||(Rr=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Js(){return Or||(Or=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const gi=new WeakMap,qn=new WeakMap,yi=new WeakMap,Mn=new WeakMap,ar=new WeakMap;function Ys(n){const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("success",s),n.removeEventListener("error",o)},s=()=>{t(lt(n.result)),i()},o=()=>{r(n.error),i()};n.addEventListener("success",s),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&gi.set(t,n)}).catch(()=>{}),ar.set(e,n),e}function Xs(n){if(qn.has(n))return;const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("complete",s),n.removeEventListener("error",o),n.removeEventListener("abort",o)},s=()=>{t(),i()},o=()=>{r(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",s),n.addEventListener("error",o),n.addEventListener("abort",o)});qn.set(n,e)}let Jn={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return qn.get(n);if(e==="objectStoreNames")return n.objectStoreNames||yi.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return lt(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function Qs(n){Jn=n(Jn)}function Zs(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(Un(this),e,...t);return yi.set(r,e.sort?e.sort():[e]),lt(r)}:Js().includes(n)?function(...e){return n.apply(Un(this),e),lt(gi.get(this))}:function(...e){return lt(n.apply(Un(this),e))}}function ea(n){return typeof n=="function"?Zs(n):(n instanceof IDBTransaction&&Xs(n),Ks(n,qs())?new Proxy(n,Jn):n)}function lt(n){if(n instanceof IDBRequest)return Ys(n);if(Mn.has(n))return Mn.get(n);const e=ea(n);return e!==n&&(Mn.set(n,e),ar.set(e,n)),e}const Un=n=>ar.get(n);function ta(n,e,{blocked:t,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(n,e),l=lt(o);return r&&o.addEventListener("upgradeneeded",u=>{r(lt(o.result),u.oldVersion,u.newVersion,lt(o.transaction),u)}),t&&o.addEventListener("blocked",u=>t(u.oldVersion,u.newVersion,u)),l.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",f=>i(f.oldVersion,f.newVersion,f))}).catch(()=>{}),l}const na=["get","getKey","getAll","getAllKeys","count"],ra=["put","add","delete","clear"],Fn=new Map;function xr(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Fn.get(e))return Fn.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,i=ra.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(i||na.includes(t)))return;const s=async function(o,...l){const u=this.transaction(o,i?"readwrite":"readonly");let f=u.store;return r&&(f=f.index(l.shift())),(await Promise.all([f[t](...l),i&&u.done]))[0]};return Fn.set(e,s),s}Qs(n=>({...n,get:(e,t,r)=>xr(e,t)||n.get(e,t,r),has:(e,t)=>!!xr(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ia{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(sa(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function sa(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Yn="@firebase/app",Dr="0.10.17";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ye=new mi("@firebase/app"),aa="@firebase/app-compat",oa="@firebase/analytics-compat",ca="@firebase/analytics",la="@firebase/app-check-compat",ua="@firebase/app-check",da="@firebase/auth",ha="@firebase/auth-compat",fa="@firebase/database",pa="@firebase/data-connect",ma="@firebase/database-compat",ga="@firebase/functions",ya="@firebase/functions-compat",va="@firebase/installations",ba="@firebase/installations-compat",_a="@firebase/messaging",wa="@firebase/messaging-compat",Ia="@firebase/performance",Ea="@firebase/performance-compat",Ca="@firebase/remote-config",Sa="@firebase/remote-config-compat",Ta="@firebase/storage",Pa="@firebase/storage-compat",ka="@firebase/firestore",Aa="@firebase/vertexai",Na="@firebase/firestore-compat",Ra="firebase",Oa="11.1.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xn="[DEFAULT]",xa={[Yn]:"fire-core",[aa]:"fire-core-compat",[ca]:"fire-analytics",[oa]:"fire-analytics-compat",[ua]:"fire-app-check",[la]:"fire-app-check-compat",[da]:"fire-auth",[ha]:"fire-auth-compat",[fa]:"fire-rtdb",[pa]:"fire-data-connect",[ma]:"fire-rtdb-compat",[ga]:"fire-fn",[ya]:"fire-fn-compat",[va]:"fire-iid",[ba]:"fire-iid-compat",[_a]:"fire-fcm",[wa]:"fire-fcm-compat",[Ia]:"fire-perf",[Ea]:"fire-perf-compat",[Ca]:"fire-rc",[Sa]:"fire-rc-compat",[Ta]:"fire-gcs",[Pa]:"fire-gcs-compat",[ka]:"fire-fst",[Na]:"fire-fst-compat",[Aa]:"fire-vertex","fire-js":"fire-js",[Ra]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _n=new Map,Da=new Map,Qn=new Map;function jr(n,e){try{n.container.addComponent(e)}catch(t){Ye.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Ht(n){const e=n.name;if(Qn.has(e))return Ye.debug(`There were multiple attempts to register component ${e}.`),!1;Qn.set(e,n);for(const t of _n.values())jr(t,n);for(const t of Da.values())jr(t,n);return!0}function vi(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Ge(n){return n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ja={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},ut=new Gt("app","Firebase",ja);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class La{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Rt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ut.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kt=Oa;function bi(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Xn,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw ut.create("bad-app-name",{appName:String(i)});if(t||(t=fi()),!t)throw ut.create("no-options");const s=_n.get(i);if(s){if(bn(t,s.options)&&bn(r,s.config))return s;throw ut.create("duplicate-app",{appName:i})}const o=new $s(i);for(const u of Qn.values())o.addComponent(u);const l=new La(t,r,o);return _n.set(i,l),l}function Ma(n=Xn){const e=_n.get(n);if(!e&&n===Xn&&fi())return bi();if(!e)throw ut.create("no-app",{appName:n});return e}function Pt(n,e,t){var r;let i=(r=xa[n])!==null&&r!==void 0?r:n;t&&(i+=`-${t}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const l=[`Unable to register library "${i}" with version "${e}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ye.warn(l.join(" "));return}Ht(new Rt(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ua="firebase-heartbeat-database",Fa=1,zt="firebase-heartbeat-store";let Bn=null;function _i(){return Bn||(Bn=ta(Ua,Fa,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(zt)}catch(t){console.warn(t)}}}}).catch(n=>{throw ut.create("idb-open",{originalErrorMessage:n.message})})),Bn}async function Ba(n){try{const t=(await _i()).transaction(zt),r=await t.objectStore(zt).get(wi(n));return await t.done,r}catch(e){if(e instanceof ht)Ye.warn(e.message);else{const t=ut.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Ye.warn(t.message)}}}async function Lr(n,e){try{const r=(await _i()).transaction(zt,"readwrite");await r.objectStore(zt).put(e,wi(n)),await r.done}catch(t){if(t instanceof ht)Ye.warn(t.message);else{const r=ut.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Ye.warn(r.message)}}}function wi(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Va=1024,$a=30*24*60*60*1e3;class Ha{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Wa(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Mr();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const l=new Date(o.date).valueOf();return Date.now()-l<=$a}),this._storage.overwrite(this._heartbeatsCache))}catch(r){Ye.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Mr(),{heartbeatsToSend:r,unsentEntries:i}=za(this._heartbeatsCache.heartbeats),s=di(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(t){return Ye.warn(t),""}}}function Mr(){return new Date().toISOString().substring(0,10)}function za(n,e=Va){const t=[];let r=n.slice();for(const i of n){const s=t.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Ur(t)>e){s.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),Ur(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class Wa{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Ns()?Rs().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await Ba(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return Lr(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return Lr(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Ur(n){return di(JSON.stringify({version:2,heartbeats:n})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ga(n){Ht(new Rt("platform-logger",e=>new ia(e),"PRIVATE")),Ht(new Rt("heartbeat",e=>new Ha(e),"PRIVATE")),Pt(Yn,Dr,n),Pt(Yn,Dr,"esm2017"),Pt("fire-js","")}Ga("");var Ka="firebase",qa="11.1.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Pt(Ka,qa,"app");function or(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(n);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(n,r[i])&&(t[r[i]]=n[r[i]]);return t}function Ii(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Ja=Ii,Ei=new Gt("auth","Firebase",Ii());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wn=new mi("@firebase/auth");function Ya(n,...e){wn.logLevel<=fe.WARN&&wn.warn(`Auth (${Kt}): ${n}`,...e)}function fn(n,...e){wn.logLevel<=fe.ERROR&&wn.error(`Auth (${Kt}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xe(n,...e){throw cr(n,...e)}function Me(n,...e){return cr(n,...e)}function Ci(n,e,t){const r=Object.assign(Object.assign({},Ja()),{[e]:t});return new Gt("auth","Firebase",r).create(e,{appName:n.name})}function dt(n){return Ci(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function cr(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return Ei.create(n,...e)}function A(n,e,...t){if(!n)throw cr(e,...t)}function Ke(n){const e="INTERNAL ASSERTION FAILED: "+n;throw fn(e),new Error(e)}function Qe(n,e){n||Ke(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zn(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function Si(){return Fr()==="http:"||Fr()==="https:"}function Fr(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xa(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Si()||Ps()||"connection"in navigator)?navigator.onLine:!0}function Qa(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qt{constructor(e,t){this.shortDelay=e,this.longDelay=t,Qe(t>e,"Short delay should be less than long delay!"),this.isMobile=Ss()||ks()}get(){return Xa()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lr(n,e){Qe(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ti{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Ke("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Ke("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Ke("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Za={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eo=new qt(3e4,6e4);function ze(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function Ve(n,e,t,r,i={}){return Pi(n,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=xt(Object.assign({key:n.config.apiKey},o)).slice(1),u=await n._getAdditionalHeaders();u["Content-Type"]="application/json",n.languageCode&&(u["X-Firebase-Locale"]=n.languageCode);const f=Object.assign({method:e,headers:u},s);return Ts()||(f.referrerPolicy="no-referrer"),Ti.fetch()(ki(n,n.config.apiHost,t,l),f)})}async function Pi(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},Za),e);try{const i=new no(n),s=await Promise.race([t(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Ut(n,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[u,f]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ut(n,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw Ut(n,"email-already-in-use",o);if(u==="USER_DISABLED")throw Ut(n,"user-disabled",o);const T=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(f)throw Ci(n,T,f);Xe(n,T)}}catch(i){if(i instanceof ht)throw i;Xe(n,"network-request-failed",{message:String(i)})}}async function Tn(n,e,t,r,i={}){const s=await Ve(n,e,t,r,i);return"mfaPendingCredential"in s&&Xe(n,"multi-factor-auth-required",{_serverResponse:s}),s}function ki(n,e,t,r){const i=`${e}${t}?${r}`;return n.config.emulator?lr(n.config,i):`${n.config.apiScheme}://${i}`}function to(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class no{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(Me(this.auth,"network-request-failed")),eo.get())})}}function Ut(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const i=Me(n,e,r);return i.customData._tokenResponse=t,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Br(n){return n!==void 0&&n.getResponse!==void 0}function Vr(n){return n!==void 0&&n.enterprise!==void 0}class Ai{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return to(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ro(n){return(await Ve(n,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}async function Ni(n,e){return Ve(n,"GET","/v2/recaptchaConfig",ze(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function io(n,e){return Ve(n,"POST","/v1/accounts:delete",e)}async function Ri(n,e){return Ve(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ft(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function so(n,e=!1){const t=wt(n),r=await t.getIdToken(e),i=ur(r);A(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Ft(Vn(i.auth_time)),issuedAtTime:Ft(Vn(i.iat)),expirationTime:Ft(Vn(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Vn(n){return Number(n)*1e3}function ur(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return fn("JWT malformed, contained fewer than 3 sections"),null;try{const i=hi(t);return i?JSON.parse(i):(fn("Failed to decode base64 JWT payload"),null)}catch(i){return fn("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function $r(n){const e=ur(n);return A(e,"internal-error"),A(typeof e.exp<"u","internal-error"),A(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wt(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof ht&&ao(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function ao({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oo{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class er{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ft(this.lastLoginAt),this.creationTime=Ft(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function In(n){var e;const t=n.auth,r=await n.getIdToken(),i=await Wt(n,Ri(t,{idToken:r}));A(i==null?void 0:i.users.length,t,"internal-error");const s=i.users[0];n._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?Oi(s.providerUserInfo):[],l=lo(n.providerData,o),u=n.isAnonymous,f=!(n.email&&s.passwordHash)&&!(l!=null&&l.length),T=u?f:!1,N={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new er(s.createdAt,s.lastLoginAt),isAnonymous:T};Object.assign(n,N)}async function co(n){const e=wt(n);await In(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function lo(n,e){return[...n.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function Oi(n){return n.map(e=>{var{providerId:t}=e,r=or(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uo(n,e){const t=await Pi(n,{},async()=>{const r=xt({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=n.config,o=ki(n,i,"/v1/token",`key=${s}`),l=await n._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",Ti.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function ho(n,e){return Ve(n,"POST","/v2/accounts:revokeToken",ze(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kt{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){A(e.idToken,"internal-error"),A(typeof e.idToken<"u","internal-error"),A(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):$r(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){A(e.length!==0,"internal-error");const t=$r(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(A(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:i,expiresIn:s}=await uo(e,t);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:i,expirationTime:s}=t,o=new kt;return r&&(A(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(A(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(A(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new kt,this.toJSON())}_performRefresh(){return Ke("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function it(n,e){A(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class qe{constructor(e){var{uid:t,auth:r,stsTokenManager:i}=e,s=or(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new oo(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new er(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await Wt(this,this.stsTokenManager.getToken(this.auth,e));return A(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return so(this,e)}reload(){return co(this)}_assign(e){this!==e&&(A(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new qe(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){A(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await In(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Ge(this.auth.app))return Promise.reject(dt(this.auth));const e=await this.getIdToken();return await Wt(this,io(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,i,s,o,l,u,f,T;const N=(r=t.displayName)!==null&&r!==void 0?r:void 0,B=(i=t.email)!==null&&i!==void 0?i:void 0,Q=(s=t.phoneNumber)!==null&&s!==void 0?s:void 0,oe=(o=t.photoURL)!==null&&o!==void 0?o:void 0,ce=(l=t.tenantId)!==null&&l!==void 0?l:void 0,P=(u=t._redirectEventId)!==null&&u!==void 0?u:void 0,pe=(f=t.createdAt)!==null&&f!==void 0?f:void 0,W=(T=t.lastLoginAt)!==null&&T!==void 0?T:void 0,{uid:C,emailVerified:k,isAnonymous:I,providerData:J,stsTokenManager:re}=t;A(C&&re,e,"internal-error");const Z=kt.fromJSON(this.name,re);A(typeof C=="string",e,"internal-error"),it(N,e.name),it(B,e.name),A(typeof k=="boolean",e,"internal-error"),A(typeof I=="boolean",e,"internal-error"),it(Q,e.name),it(oe,e.name),it(ce,e.name),it(P,e.name),it(pe,e.name),it(W,e.name);const ie=new qe({uid:C,auth:e,email:B,emailVerified:k,displayName:N,isAnonymous:I,photoURL:oe,phoneNumber:Q,tenantId:ce,stsTokenManager:Z,createdAt:pe,lastLoginAt:W});return J&&Array.isArray(J)&&(ie.providerData=J.map(ee=>Object.assign({},ee))),P&&(ie._redirectEventId=P),ie}static async _fromIdTokenResponse(e,t,r=!1){const i=new kt;i.updateFromServerResponse(t);const s=new qe({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await In(s),s}static async _fromGetAccountInfoResponse(e,t,r){const i=t.users[0];A(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?Oi(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new kt;l.updateFromIdToken(r);const u=new qe({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:o}),f={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new er(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,f),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hr=new Map;function Je(n){Qe(n instanceof Function,"Expected a class definition");let e=Hr.get(n);return e?(Qe(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Hr.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xi{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}xi.type="NONE";const zr=xi;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pn(n,e,t){return`firebase:${n}:${e}:${t}`}class At{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=pn(this.userKey,i.apiKey,s),this.fullPersistenceKey=pn("persistence",i.apiKey,s),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?qe._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new At(Je(zr),e,r);const i=(await Promise.all(t.map(async f=>{if(await f._isAvailable())return f}))).filter(f=>f);let s=i[0]||Je(zr);const o=pn(r,e.config.apiKey,e.name);let l=null;for(const f of t)try{const T=await f._get(o);if(T){const N=qe._fromJSON(e,T);f!==s&&(l=N),s=f;break}}catch{}const u=i.filter(f=>f._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new At(s,e,r):(s=u[0],l&&await s._set(o,l.toJSON()),await Promise.all(t.map(async f=>{if(f!==s)try{await f._remove(o)}catch{}})),new At(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wr(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Mi(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Di(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Fi(e))return"Blackberry";if(Bi(e))return"Webos";if(ji(e))return"Safari";if((e.includes("chrome/")||Li(e))&&!e.includes("edge/"))return"Chrome";if(Ui(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Di(n=xe()){return/firefox\//i.test(n)}function ji(n=xe()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Li(n=xe()){return/crios\//i.test(n)}function Mi(n=xe()){return/iemobile/i.test(n)}function Ui(n=xe()){return/android/i.test(n)}function Fi(n=xe()){return/blackberry/i.test(n)}function Bi(n=xe()){return/webos/i.test(n)}function dr(n=xe()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function fo(n=xe()){var e;return dr(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function po(){return As()&&document.documentMode===10}function Vi(n=xe()){return dr(n)||Ui(n)||Bi(n)||Fi(n)||/windows phone/i.test(n)||Mi(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $i(n,e=[]){let t;switch(n){case"Browser":t=Wr(xe());break;case"Worker":t=`${Wr(xe())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Kt}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mo{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=s=>new Promise((o,l)=>{try{const u=e(s);o(u)}catch(u){l(u)}});r.onAbort=t,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const i of t)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function go(n,e={}){return Ve(n,"GET","/v2/passwordPolicy",ze(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yo=6;class vo{constructor(e){var t,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=o.minPasswordLength)!==null&&t!==void 0?t:yo,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,i,s,o,l;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(t=u.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(s=u.containsUppercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(o=u.containsNumericCharacter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(l=u.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),u}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),i&&(t.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bo{constructor(e,t,r,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Gr(this),this.idTokenSubscription=new Gr(this),this.beforeStateQueue=new mo(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Ei,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Je(t)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await At.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Ri(this,{idToken:e}),r=await qe._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(Ge(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,l=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===l)&&(u!=null&&u.user)&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return A(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await In(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Qa()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Ge(this.app))return Promise.reject(dt(this));const t=e?wt(e):null;return t&&A(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&A(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Ge(this.app)?Promise.reject(dt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Ge(this.app)?Promise.reject(dt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Je(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await go(this),t=new vo(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Gt("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await ho(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Je(e)||this._popupRedirectResolver;A(t,this,"argument-error"),this.redirectPersistenceManager=await At.create(this,[Je(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,i){if(this._deleted)return()=>{};const s=typeof t=="function"?t:t.next.bind(t);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(A(l,this,"internal-error"),l.then(()=>{o||s(this.currentUser)}),typeof t=="function"){const u=e.addObserver(t,r,i);return()=>{o=!0,u()}}else{const u=e.addObserver(t);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return A(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=$i(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(t["X-Firebase-AppCheck"]=i),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&Ya(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function ft(n){return wt(n)}class Gr{constructor(e){this.auth=e,this.observer=null,this.addObserver=Ls(t=>this.observer=t)}get next(){return A(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Jt={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function _o(n){Jt=n}function hr(n){return Jt.loadJS(n)}function wo(){return Jt.recaptchaV2Script}function Io(){return Jt.recaptchaEnterpriseScript}function Eo(){return Jt.gapiScript}function Hi(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Co=500,So=6e4,hn=1e12;class To{constructor(e){this.auth=e,this.counter=hn,this._widgets=new Map}render(e,t){const r=this.counter;return this._widgets.set(r,new Ao(e,this.auth.name,t||{})),this.counter++,r}reset(e){var t;const r=e||hn;(t=this._widgets.get(r))===null||t===void 0||t.delete(),this._widgets.delete(r)}getResponse(e){var t;const r=e||hn;return((t=this._widgets.get(r))===null||t===void 0?void 0:t.getResponse())||""}async execute(e){var t;const r=e||hn;return(t=this._widgets.get(r))===null||t===void 0||t.execute(),""}}class Po{constructor(){this.enterprise=new ko}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class ko{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class Ao{constructor(e,t,r){this.params=r,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const i=typeof e=="string"?document.getElementById(e):e;A(i,"argument-error",{appName:t}),this.container=i,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=No(50);const{callback:e,"expired-callback":t}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,t)try{t()}catch{}this.isVisible&&this.execute()},So)},Co))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function No(n){const e=[],t="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let r=0;r<n;r++)e.push(t.charAt(Math.floor(Math.random()*t.length)));return e.join("")}const Ro="recaptcha-enterprise",Bt="NO_RECAPTCHA";class zi{constructor(e){this.type=Ro,this.auth=ft(e)}async verify(e="verify",t=!1){async function r(s){if(!t){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,l)=>{Ni(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const f=new Ai(u);return s.tenantId==null?s._agentRecaptchaConfig=f:s._tenantRecaptchaConfigs[s.tenantId]=f,o(f.siteKey)}}).catch(u=>{l(u)})})}function i(s,o,l){const u=window.grecaptcha;Vr(u)?u.enterprise.ready(()=>{u.enterprise.execute(s,{action:e}).then(f=>{o(f)}).catch(()=>{o(Bt)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new Po().execute("siteKey",{action:"verify"}):new Promise((s,o)=>{r(this.auth).then(l=>{if(!t&&Vr(window.grecaptcha))i(l,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let u=Io();u.length!==0&&(u+=l),hr(u).then(()=>{i(l,s,o)}).catch(f=>{o(f)})}}).catch(l=>{o(l)})})}}async function $n(n,e,t,r=!1,i=!1){const s=new zi(n);let o;if(i)o=Bt;else try{o=await s.verify(t)}catch{o=await s.verify(t,!0)}const l=Object.assign({},e);if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in l){const u=l.phoneEnrollmentInfo.phoneNumber,f=l.phoneEnrollmentInfo.recaptchaToken;Object.assign(l,{phoneEnrollmentInfo:{phoneNumber:u,recaptchaToken:f,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in l){const u=l.phoneSignInInfo.recaptchaToken;Object.assign(l,{phoneSignInInfo:{recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return l}return r?Object.assign(l,{captchaResp:o}):Object.assign(l,{captchaResponse:o}),Object.assign(l,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(l,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),l}async function Hn(n,e,t,r,i){var s;if(!((s=n._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("PHONE_PROVIDER")){const o=await $n(n,e,t);return r(n,o).catch(async l=>{var u;if(((u=n._getRecaptchaConfig())===null||u===void 0?void 0:u.getProviderEnforcementState("PHONE_PROVIDER"))==="AUDIT"&&(l.code==="auth/missing-recaptcha-token"||l.code==="auth/invalid-app-credential")){console.log(`Failed to verify with reCAPTCHA Enterprise. Automatically triggering the reCAPTCHA v2 flow to complete the ${t} flow.`);const f=await $n(n,e,t,!1,!0);return r(n,f)}return Promise.reject(l)})}else{const o=await $n(n,e,t,!1,!0);return r(n,o)}}async function Oo(n){const e=ft(n),t=await Ni(e,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),r=new Ai(t);e.tenantId==null?e._agentRecaptchaConfig=r:e._tenantRecaptchaConfigs[e.tenantId]=r,r.isAnyProviderEnabled()&&new zi(e).verify()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xo(n,e){const t=vi(n,"auth");if(t.isInitialized()){const i=t.getImmediate(),s=t.getOptions();if(bn(s,e??{}))return i;Xe(i,"already-initialized")}return t.initialize({options:e})}function Do(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(Je);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function jo(n,e,t){const r=ft(n);A(r._canInitEmulator,r,"emulator-config-failed"),A(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=Wi(e),{host:o,port:l}=Lo(e),u=l===null?"":`:${l}`;r.config.emulator={url:`${s}//${o}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),Mo()}function Wi(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function Lo(n){const e=Wi(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Kr(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Kr(o)}}}function Kr(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function Mo(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fr{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Ke("not implemented")}_getIdTokenResponse(e){return Ke("not implemented")}_linkToIdToken(e,t){return Ke("not implemented")}_getReauthenticationResolver(e){return Ke("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Nt(n,e){return Tn(n,"POST","/v1/accounts:signInWithIdp",ze(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uo="http://localhost";class _t extends fr{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new _t(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Xe("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=t,s=or(t,["providerId","signInMethod"]);if(!r||!i)return null;const o=new _t(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return Nt(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,Nt(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Nt(e,t)}buildRequest(){const e={requestUri:Uo,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=xt(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qr(n,e){return Ve(n,"POST","/v1/accounts:sendVerificationCode",ze(n,e))}async function Fo(n,e){return Tn(n,"POST","/v1/accounts:signInWithPhoneNumber",ze(n,e))}async function Bo(n,e){const t=await Tn(n,"POST","/v1/accounts:signInWithPhoneNumber",ze(n,e));if(t.temporaryProof)throw Ut(n,"account-exists-with-different-credential",t);return t}const Vo={USER_NOT_FOUND:"user-not-found"};async function $o(n,e){const t=Object.assign(Object.assign({},e),{operation:"REAUTH"});return Tn(n,"POST","/v1/accounts:signInWithPhoneNumber",ze(n,t),Vo)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt extends fr{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new Vt({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new Vt({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return Fo(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return Bo(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return $o(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:r,verificationCode:i}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:r,code:i}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:t,verificationCode:r,phoneNumber:i,temporaryProof:s}=e;return!r&&!t&&!i&&!s?null:new Vt({verificationId:t,verificationCode:r,phoneNumber:i,temporaryProof:s})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gi{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yt extends Gi{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st extends Yt{constructor(){super("facebook.com")}static credential(e){return _t._fromParams({providerId:st.PROVIDER_ID,signInMethod:st.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return st.credentialFromTaggedObject(e)}static credentialFromError(e){return st.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return st.credential(e.oauthAccessToken)}catch{return null}}}st.FACEBOOK_SIGN_IN_METHOD="facebook.com";st.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at extends Yt{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return _t._fromParams({providerId:at.PROVIDER_ID,signInMethod:at.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return at.credentialFromTaggedObject(e)}static credentialFromError(e){return at.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return at.credential(t,r)}catch{return null}}}at.GOOGLE_SIGN_IN_METHOD="google.com";at.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot extends Yt{constructor(){super("github.com")}static credential(e){return _t._fromParams({providerId:ot.PROVIDER_ID,signInMethod:ot.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ot.credentialFromTaggedObject(e)}static credentialFromError(e){return ot.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ot.credential(e.oauthAccessToken)}catch{return null}}}ot.GITHUB_SIGN_IN_METHOD="github.com";ot.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct extends Yt{constructor(){super("twitter.com")}static credential(e,t){return _t._fromParams({providerId:ct.PROVIDER_ID,signInMethod:ct.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return ct.credentialFromTaggedObject(e)}static credentialFromError(e){return ct.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return ct.credential(t,r)}catch{return null}}}ct.TWITTER_SIGN_IN_METHOD="twitter.com";ct.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ot{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,i=!1){const s=await qe._fromIdTokenResponse(e,r,i),o=Jr(r);return new Ot({user:s,providerId:o,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const i=Jr(r);return new Ot({user:e,providerId:i,_tokenResponse:r,operationType:t})}}function Jr(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class En extends ht{constructor(e,t,r,i){var s;super(t.code,t.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,En.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,i){return new En(e,t,r,i)}}function Ki(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?En._fromErrorAndOperation(n,s,e,r):s})}async function Ho(n,e,t=!1){const r=await Wt(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Ot._forOperation(n,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zo(n,e,t=!1){const{auth:r}=n;if(Ge(r.app))return Promise.reject(dt(r));const i="reauthenticate";try{const s=await Wt(n,Ki(r,i,e,n),t);A(s.idToken,r,"internal-error");const o=ur(s.idToken);A(o,r,"internal-error");const{sub:l}=o;return A(n.uid===l,r,"user-mismatch"),Ot._forOperation(n,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Xe(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qi(n,e,t=!1){if(Ge(n.app))return Promise.reject(dt(n));const r="signIn",i=await Ki(n,r,e),s=await Ot._fromIdTokenResponse(n,r,i);return t||await n._updateCurrentUser(s.user),s}async function Wo(n,e){return qi(ft(n),e)}function Go(n,e,t,r){return wt(n).onIdTokenChanged(e,t,r)}function Ko(n,e,t){return wt(n).beforeAuthStateChanged(e,t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yr(n,e){return Ve(n,"POST","/v2/accounts/mfaEnrollment:start",ze(n,e))}const Cn="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ji{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Cn,"1"),this.storage.removeItem(Cn),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qo=1e3,Jo=10;class Yi extends Ji{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Vi(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),i=this.localCache[t];r!==i&&e(t,i,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,l,u)=>{this.notifyListeners(o,u)});return}const r=e.key;t?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!t&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);po()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,Jo):i()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},qo)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Yi.type="LOCAL";const Yo=Yi;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xi extends Ji{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Xi.type="SESSION";const Qi=Xi;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xo(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pn{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(i=>i.isListeningto(e));if(t)return t;const r=new Pn(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:i,data:s}=t.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async f=>f(t.origin,s)),u=await Xo(l);t.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Pn.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pr(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qo{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,u)=>{const f=pr("",20);i.port1.start();const T=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(N){const B=N;if(B.data.eventId===f)switch(B.data.status){case"ack":clearTimeout(T),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(B.data.response);break;default:clearTimeout(T),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:f,data:t},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Te(){return window}function Zo(n){Te().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mr(){return typeof Te().WorkerGlobalScope<"u"&&typeof Te().importScripts=="function"}async function ec(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function tc(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function nc(){return mr()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zi="firebaseLocalStorageDb",rc=1,Sn="firebaseLocalStorage",es="fbase_key";class Xt{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function kn(n,e){return n.transaction([Sn],e?"readwrite":"readonly").objectStore(Sn)}function ic(){const n=indexedDB.deleteDatabase(Zi);return new Xt(n).toPromise()}function tr(){const n=indexedDB.open(Zi,rc);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(Sn,{keyPath:es})}catch(i){t(i)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(Sn)?e(r):(r.close(),await ic(),e(await tr()))})})}async function Xr(n,e,t){const r=kn(n,!0).put({[es]:e,value:t});return new Xt(r).toPromise()}async function sc(n,e){const t=kn(n,!1).get(e),r=await new Xt(t).toPromise();return r===void 0?null:r.value}function Qr(n,e){const t=kn(n,!0).delete(e);return new Xt(t).toPromise()}const ac=800,oc=3;class ts{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await tr(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>oc)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return mr()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Pn._getInstance(nc()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await ec(),!this.activeServiceWorker)return;this.sender=new Qo(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||tc()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await tr();return await Xr(e,Cn,"1"),await Qr(e,Cn),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>Xr(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>sc(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Qr(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=kn(i,!1).getAll();return new Xt(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),t.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),ac)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}ts.type="LOCAL";const cc=ts;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zr(n,e){return Ve(n,"POST","/v2/accounts/mfaSignIn:start",ze(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zn=Hi("rcb"),lc=new qt(3e4,6e4);class uc{constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!(!((e=Te().grecaptcha)===null||e===void 0)&&e.render)}load(e,t=""){return A(dc(t),e,"argument-error"),this.shouldResolveImmediately(t)&&Br(Te().grecaptcha)?Promise.resolve(Te().grecaptcha):new Promise((r,i)=>{const s=Te().setTimeout(()=>{i(Me(e,"network-request-failed"))},lc.get());Te()[zn]=()=>{Te().clearTimeout(s),delete Te()[zn];const l=Te().grecaptcha;if(!l||!Br(l)){i(Me(e,"internal-error"));return}const u=l.render;l.render=(f,T)=>{const N=u(f,T);return this.counter++,N},this.hostLanguage=t,r(l)};const o=`${wo()}?${xt({onload:zn,render:"explicit",hl:t})}`;hr(o).catch(()=>{clearTimeout(s),i(Me(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var t;return!!(!((t=Te().grecaptcha)===null||t===void 0)&&t.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function dc(n){return n.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(n)}class hc{async load(e){return new To(e)}clearedOneInstance(){}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $t="recaptcha",fc={theme:"light",type:"image"};class pc{constructor(e,t,r=Object.assign({},fc)){this.parameters=r,this.type=$t,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=ft(e),this.isInvisible=this.parameters.size==="invisible",A(typeof document<"u",this.auth,"operation-not-supported-in-this-environment");const i=typeof t=="string"?document.getElementById(t):t;A(i,this.auth,"argument-error"),this.container=i,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new hc:new uc,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),t=this.getAssertedRecaptcha(),r=t.getResponse(e);return r||new Promise(i=>{const s=o=>{o&&(this.tokenChangeListeners.delete(s),i(o))};this.tokenChangeListeners.add(s),this.isInvisible&&t.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){A(!this.parameters.sitekey,this.auth,"argument-error"),A(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),A(typeof document<"u",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return t=>{if(this.tokenChangeListeners.forEach(r=>r(t)),typeof e=="function")e(t);else if(typeof e=="string"){const r=Te()[e];typeof r=="function"&&r(t)}}}assertNotDestroyed(){A(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const t=document.createElement("div");e.appendChild(t),e=t}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){A(Si()&&!mr(),this.auth,"internal-error"),await mc(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await ro(this.auth);A(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return A(this.recaptcha,this.auth,"internal-error"),this.recaptcha}}function mc(){let n=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}n=()=>e(),window.addEventListener("load",n)}).catch(e=>{throw n&&window.removeEventListener("load",n),e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gc{constructor(e,t){this.verificationId=e,this.onConfirmation=t}confirm(e){const t=Vt._fromVerification(this.verificationId,e);return this.onConfirmation(t)}}async function yc(n,e,t){if(Ge(n.app))return Promise.reject(dt(n));const r=ft(n),i=await vc(r,e,wt(t));return new gc(i,s=>Wo(r,s))}async function vc(n,e,t){var r;if(!n._getRecaptchaConfig())try{await Oo(n)}catch{console.log("Failed to initialize reCAPTCHA Enterprise config. Triggering the reCAPTCHA v2 verification.")}try{let i;if(typeof e=="string"?i={phoneNumber:e}:i=e,"session"in i){const s=i.session;if("phoneNumber"in i){A(s.type==="enroll",n,"internal-error");const o={idToken:s.credential,phoneEnrollmentInfo:{phoneNumber:i.phoneNumber,clientType:"CLIENT_TYPE_WEB"}};return(await Hn(n,o,"mfaSmsEnrollment",async(T,N)=>{if(N.phoneEnrollmentInfo.captchaResponse===Bt){A((t==null?void 0:t.type)===$t,T,"argument-error");const B=await Wn(T,N,t);return Yr(T,B)}return Yr(T,N)},"PHONE_PROVIDER").catch(T=>Promise.reject(T))).phoneSessionInfo.sessionInfo}else{A(s.type==="signin",n,"internal-error");const o=((r=i.multiFactorHint)===null||r===void 0?void 0:r.uid)||i.multiFactorUid;A(o,n,"missing-multi-factor-info");const l={mfaPendingCredential:s.credential,mfaEnrollmentId:o,phoneSignInInfo:{clientType:"CLIENT_TYPE_WEB"}};return(await Hn(n,l,"mfaSmsSignIn",async(N,B)=>{if(B.phoneSignInInfo.captchaResponse===Bt){A((t==null?void 0:t.type)===$t,N,"argument-error");const Q=await Wn(N,B,t);return Zr(N,Q)}return Zr(N,B)},"PHONE_PROVIDER").catch(N=>Promise.reject(N))).phoneResponseInfo.sessionInfo}}else{const s={phoneNumber:i.phoneNumber,clientType:"CLIENT_TYPE_WEB"};return(await Hn(n,s,"sendVerificationCode",async(f,T)=>{if(T.captchaResponse===Bt){A((t==null?void 0:t.type)===$t,f,"argument-error");const N=await Wn(f,T,t);return qr(f,N)}return qr(f,T)},"PHONE_PROVIDER").catch(f=>Promise.reject(f))).sessionInfo}}finally{t==null||t._reset()}}async function Wn(n,e,t){A(t.type===$t,n,"argument-error");const r=await t.verify();A(typeof r=="string",n,"argument-error");const i=Object.assign({},e);if("phoneEnrollmentInfo"in i){const s=i.phoneEnrollmentInfo.phoneNumber,o=i.phoneEnrollmentInfo.captchaResponse,l=i.phoneEnrollmentInfo.clientType,u=i.phoneEnrollmentInfo.recaptchaVersion;return Object.assign(i,{phoneEnrollmentInfo:{phoneNumber:s,recaptchaToken:r,captchaResponse:o,clientType:l,recaptchaVersion:u}}),i}else if("phoneSignInInfo"in i){const s=i.phoneSignInInfo.captchaResponse,o=i.phoneSignInInfo.clientType,l=i.phoneSignInInfo.recaptchaVersion;return Object.assign(i,{phoneSignInInfo:{recaptchaToken:r,captchaResponse:s,clientType:o,recaptchaVersion:l}}),i}else return Object.assign(i,{recaptchaToken:r}),i}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bc(n,e){return e?Je(e):(A(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gr extends fr{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Nt(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Nt(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Nt(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function _c(n){return qi(n.auth,new gr(n),n.bypassAuthState)}function wc(n){const{auth:e,user:t}=n;return A(t,e,"internal-error"),zo(t,new gr(n),n.bypassAuthState)}async function Ic(n){const{auth:e,user:t}=n;return A(t,e,"internal-error"),Ho(t,new gr(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ns{constructor(e,t,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:t,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(f){this.reject(f)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return _c;case"linkViaPopup":case"linkViaRedirect":return Ic;case"reauthViaPopup":case"reauthViaRedirect":return wc;default:Xe(this.auth,"internal-error")}}resolve(e){Qe(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Qe(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ec=new qt(2e3,1e4);class Tt extends ns{constructor(e,t,r,i,s){super(e,t,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Tt.currentPopupAction&&Tt.currentPopupAction.cancel(),Tt.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return A(e,this.auth,"internal-error"),e}async onExecution(){Qe(this.filter.length===1,"Popup operations only handle one event");const e=pr();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Me(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Me(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Tt.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Me(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Ec.get())};e()}}Tt.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cc="pendingRedirect",mn=new Map;class Sc extends ns{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=mn.get(this.auth._key());if(!e){try{const r=await Tc(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}mn.set(this.auth._key(),e)}return this.bypassAuthState||mn.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Tc(n,e){const t=Ac(e),r=kc(n);if(!await r._isAvailable())return!1;const i=await r._get(t)==="true";return await r._remove(t),i}function Pc(n,e){mn.set(n._key(),e)}function kc(n){return Je(n._redirectPersistence)}function Ac(n){return pn(Cc,n.config.apiKey,n.name)}async function Nc(n,e,t=!1){if(Ge(n.app))return Promise.reject(dt(n));const r=ft(n),i=bc(r,e),o=await new Sc(r,i,t).execute();return o&&!t&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rc=10*60*1e3;class Oc{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!xc(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!rs(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(Me(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Rc&&this.cachedEventUids.clear(),this.cachedEventUids.has(ei(e))}saveEventToCache(e){this.cachedEventUids.add(ei(e)),this.lastProcessedEventTime=Date.now()}}function ei(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function rs({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function xc(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return rs(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Dc(n,e={}){return Ve(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jc=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Lc=/^https?/;async function Mc(n){if(n.config.emulator)return;const{authorizedDomains:e}=await Dc(n);for(const t of e)try{if(Uc(t))return}catch{}Xe(n,"unauthorized-domain")}function Uc(n){const e=Zn(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===r}if(!Lc.test(t))return!1;if(jc.test(n))return r===n;const i=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fc=new qt(3e4,6e4);function ti(){const n=Te().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function Bc(n){return new Promise((e,t)=>{var r,i,s;function o(){ti(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{ti(),t(Me(n,"network-request-failed"))},timeout:Fc.get()})}if(!((i=(r=Te().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Te().gapi)===null||s===void 0)&&s.load)o();else{const l=Hi("iframefcb");return Te()[l]=()=>{gapi.load?o():t(Me(n,"network-request-failed"))},hr(`${Eo()}?onload=${l}`).catch(u=>t(u))}}).catch(e=>{throw gn=null,e})}let gn=null;function Vc(n){return gn=gn||Bc(n),gn}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $c=new qt(5e3,15e3),Hc="__/auth/iframe",zc="emulator/auth/iframe",Wc={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Gc=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Kc(n){const e=n.config;A(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?lr(e,zc):`https://${n.config.authDomain}/${Hc}`,r={apiKey:e.apiKey,appName:n.name,v:Kt},i=Gc.get(n.config.apiHost);i&&(r.eid=i);const s=n._getFrameworks();return s.length&&(r.fw=s.join(",")),`${t}?${xt(r).slice(1)}`}async function qc(n){const e=await Vc(n),t=Te().gapi;return A(t,n,"internal-error"),e.open({where:document.body,url:Kc(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Wc,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Me(n,"network-request-failed"),l=Te().setTimeout(()=>{s(o)},$c.get());function u(){Te().clearTimeout(l),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jc={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Yc=500,Xc=600,Qc="_blank",Zc="http://localhost";class ni{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function el(n,e,t,r=Yc,i=Xc){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u=Object.assign(Object.assign({},Jc),{width:r.toString(),height:i.toString(),top:s,left:o}),f=xe().toLowerCase();t&&(l=Li(f)?Qc:t),Di(f)&&(e=e||Zc,u.scrollbars="yes");const T=Object.entries(u).reduce((B,[Q,oe])=>`${B}${Q}=${oe},`,"");if(fo(f)&&l!=="_self")return tl(e||"",l),new ni(null);const N=window.open(e||"",l,T);A(N,n,"popup-blocked");try{N.focus()}catch{}return new ni(N)}function tl(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nl="__/auth/handler",rl="emulator/auth/handler",il=encodeURIComponent("fac");async function ri(n,e,t,r,i,s){A(n.config.authDomain,n,"auth-domain-config-required"),A(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:Kt,eventId:i};if(e instanceof Gi){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",js(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[T,N]of Object.entries({}))o[T]=N}if(e instanceof Yt){const T=e.getScopes().filter(N=>N!=="");T.length>0&&(o.scopes=T.join(","))}n.tenantId&&(o.tid=n.tenantId);const l=o;for(const T of Object.keys(l))l[T]===void 0&&delete l[T];const u=await n._getAppCheckToken(),f=u?`#${il}=${encodeURIComponent(u)}`:"";return`${sl(n)}?${xt(l).slice(1)}${f}`}function sl({config:n}){return n.emulator?lr(n,rl):`https://${n.authDomain}/${nl}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gn="webStorageSupport";class al{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Qi,this._completeRedirectFn=Nc,this._overrideRedirectResult=Pc}async _openPopup(e,t,r,i){var s;Qe((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await ri(e,t,r,Zn(),i);return el(e,o,pr())}async _openRedirect(e,t,r,i){await this._originValidation(e);const s=await ri(e,t,r,Zn(),i);return Zo(s),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:i,promise:s}=this.eventManagers[t];return i?Promise.resolve(i):(Qe(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await qc(e),r=new Oc(e);return t.register("authEvent",i=>(A(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Gn,{type:Gn},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Gn];o!==void 0&&t(!!o),Xe(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Mc(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Vi()||ji()||dr()}}const ol=al;var ii="@firebase/auth",si="1.8.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cl{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){A(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ll(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function ul(n){Ht(new Rt("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;A(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:l,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:$i(n)},f=new bo(r,i,s,u);return Do(f,t),f},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),Ht(new Rt("auth-internal",e=>{const t=ft(e.getProvider("auth").getImmediate());return(r=>new cl(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Pt(ii,si,ll(n)),Pt(ii,si,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dl=5*60,hl=pi("authIdTokenMaxAge")||dl;let ai=null;const fl=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>hl)return;const i=t==null?void 0:t.token;ai!==i&&(ai=i,await fetch(n,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function pl(n=Ma()){const e=vi(n,"auth");if(e.isInitialized())return e.getImmediate();const t=xo(n,{popupRedirectResolver:ol,persistence:[cc,Yo,Qi]}),r=pi("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=fl(s.toString());Ko(t,o,()=>o(t.currentUser)),Go(t,l=>o(l))}}const i=Es("auth");return i&&jo(t,`http://${i}`),t}function ml(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}_o({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=i=>{const s=Me("internal-error");s.customData=i,t(s)},r.type="text/javascript",r.charset="UTF-8",ml().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});ul("Browser");const gl={apiKey:"AIzaSyDwZKo09zss5D0s2RnNj5aY5xvWsVBGemI",authDomain:"pick-my-course-da02e.firebaseapp.com",projectId:"pick-my-course-da02e",storageBucket:"pick-my-course-da02e.firebasestorage.app",messagingSenderId:"27261355513",appId:"1:27261355513:web:aed4e8672495a506a92928"},yl=bi(gl),oi=pl(yl);var ci=function(n){return typeof n=="object"&&n!==null},vl=function(n){var e=n.value,t=e===void 0?"":e,r=n.numInputs,i=r===void 0?4:r,s=n.onChange,o=n.onPaste,l=n.renderInput,u=n.shouldAutoFocus,f=u===void 0?!1:u,T=n.inputType,N=T===void 0?"text":T,B=n.renderSeparator,Q=n.placeholder,oe=n.containerStyle,ce=n.inputStyle,P=n.skipDefaultStyles,pe=P===void 0?!1:P,W=yt.useState(0),C=W[0],k=W[1],I=yt.useRef([]),J=function(){return t?t.toString().split(""):[]},re=N==="number"||N==="tel";yt.useEffect(function(){I.current=I.current.slice(0,i)},[i]),yt.useEffect(function(){var S;f&&((S=I.current[0])===null||S===void 0||S.focus())},[f]);var Z=function(){if(typeof Q=="string"){if(Q.length===i)return Q;Q.length>0&&console.error("Length of the placeholder should be equal to the number of inputs.")}},ie=function(S){var m=re?!isNaN(Number(S)):typeof S=="string";return m&&S.trim().length===1},ee=function(S){var m=S.target.value;ie(m)&&(O(m),E(C+1))},Pe=function(S){var m=S.nativeEvent,y=S.target.value;if(!ie(y)){if(y.length===i){var R=y.split("").some(function(H){return!ie(H)});R||(V(y.split("")),E(i-1))}m.data===null&&m.inputType==="deleteContentBackward"&&(S.preventDefault(),O(""),E(C-1)),S.target.value=""}},Ie=function(S){return function(m){k(m),S.target.select()}},ke=function(){k(C-1)},_=function(S){var m=J();[S.code,S.key].includes("Backspace")?(S.preventDefault(),O(""),E(C-1)):S.code==="Delete"?(S.preventDefault(),O("")):S.code==="ArrowLeft"?(S.preventDefault(),E(C-1)):S.code==="ArrowRight"||S.key===m[C]?(S.preventDefault(),E(C+1)):(S.code==="Spacebar"||S.code==="Space"||S.code==="ArrowUp"||S.code==="ArrowDown")&&S.preventDefault()},E=function(S){var m,y,R=Math.max(Math.min(i-1,S),0);I.current[R]&&((m=I.current[R])===null||m===void 0||m.focus(),(y=I.current[R])===null||y===void 0||y.select(),k(R))},O=function(S){var m=J();m[C]=S[0],V(m)},V=function(S){var m=S.join("");s(m)},Y=function(S){var m;S.preventDefault();var y=J(),R=C,H=S.clipboardData.getData("text/plain").slice(0,i-C).split("");if(!(re&&H.some(function(c){return isNaN(Number(c))}))){for(var w=0;w<i;++w)w>=C&&H.length>0&&(y[w]=(m=H.shift())!==null&&m!==void 0?m:"",R++);E(R),V(y)}};return yt.createElement("div",{style:Object.assign({display:"flex",alignItems:"center"},ci(oe)&&oe),className:typeof oe=="string"?oe:void 0,onPaste:o},Array.from({length:i},function(S,m){return m}).map(function(S){var m,y,R;return yt.createElement(yt.Fragment,{key:S},l({value:(m=J()[S])!==null&&m!==void 0?m:"",placeholder:(R=(y=Z())===null||y===void 0?void 0:y[S])!==null&&R!==void 0?R:void 0,ref:function(H){return I.current[S]=H},onChange:ee,onFocus:function(H){return Ie(H)(S)},onBlur:ke,onKeyDown:_,onPaste:Y,autoComplete:"off","aria-label":"Please enter OTP character ".concat(S+1),style:Object.assign(pe?{}:{width:"1em",textAlign:"center"},ci(ce)?ce:{}),className:typeof ce=="string"?ce:void 0,type:N,inputMode:re?"numeric":"text",onInput:Pe},S),S<i-1&&(typeof B=="function"?B(S):B))}))},bl=function(n){var e={};function t(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return n[r].call(i.exports,i,i.exports,t),i.l=!0,i.exports}return t.m=n,t.c=e,t.d=function(r,i,s){t.o(r,i)||Object.defineProperty(r,i,{enumerable:!0,get:s})},t.r=function(r){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(r,"__esModule",{value:!0})},t.t=function(r,i){if(1&i&&(r=t(r)),8&i||4&i&&typeof r=="object"&&r&&r.__esModule)return r;var s=Object.create(null);if(t.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:r}),2&i&&typeof r!="string")for(var o in r)t.d(s,o,(function(l){return r[l]}).bind(null,o));return s},t.n=function(r){var i=r&&r.__esModule?function(){return r.default}:function(){return r};return t.d(i,"a",i),i},t.o=function(r,i){return Object.prototype.hasOwnProperty.call(r,i)},t.p="",t(t.s=9)}([function(n,e){n.exports=De},function(n,e,t){var r;/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/(function(){var i={}.hasOwnProperty;function s(){for(var o=[],l=0;l<arguments.length;l++){var u=arguments[l];if(u){var f=typeof u;if(f==="string"||f==="number")o.push(u);else if(Array.isArray(u)&&u.length){var T=s.apply(null,u);T&&o.push(T)}else if(f==="object")for(var N in u)i.call(u,N)&&u[N]&&o.push(N)}}return o.join(" ")}n.exports?(s.default=s,n.exports=s):(r=(function(){return s}).apply(e,[]))===void 0||(n.exports=r)})()},function(n,e,t){(function(r){var i=/^\s+|\s+$/g,s=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,l=/^0o[0-7]+$/i,u=parseInt,f=typeof r=="object"&&r&&r.Object===Object&&r,T=typeof self=="object"&&self&&self.Object===Object&&self,N=f||T||Function("return this")(),B=Object.prototype.toString,Q=N.Symbol,oe=Q?Q.prototype:void 0,ce=oe?oe.toString:void 0;function P(k){if(typeof k=="string")return k;if(W(k))return ce?ce.call(k):"";var I=k+"";return I=="0"&&1/k==-1/0?"-0":I}function pe(k){var I=typeof k;return!!k&&(I=="object"||I=="function")}function W(k){return typeof k=="symbol"||function(I){return!!I&&typeof I=="object"}(k)&&B.call(k)=="[object Symbol]"}function C(k){return k?(k=function(I){if(typeof I=="number")return I;if(W(I))return NaN;if(pe(I)){var J=typeof I.valueOf=="function"?I.valueOf():I;I=pe(J)?J+"":J}if(typeof I!="string")return I===0?I:+I;I=I.replace(i,"");var re=o.test(I);return re||l.test(I)?u(I.slice(2),re?2:8):s.test(I)?NaN:+I}(k))===1/0||k===-1/0?17976931348623157e292*(k<0?-1:1):k==k?k:0:k===0?k:0}n.exports=function(k,I,J){var re,Z,ie,ee;return k=(re=k)==null?"":P(re),Z=function(Pe){var Ie=C(Pe),ke=Ie%1;return Ie==Ie?ke?Ie-ke:Ie:0}(J),ie=0,ee=k.length,Z==Z&&(ee!==void 0&&(Z=Z<=ee?Z:ee),ie!==void 0&&(Z=Z>=ie?Z:ie)),J=Z,I=P(I),k.slice(J,J+I.length)==I}}).call(this,t(3))},function(n,e){var t;t=function(){return this}();try{t=t||new Function("return this")()}catch{typeof window=="object"&&(t=window)}n.exports=t},function(n,e,t){(function(r){var i=/^\[object .+?Constructor\]$/,s=typeof r=="object"&&r&&r.Object===Object&&r,o=typeof self=="object"&&self&&self.Object===Object&&self,l=s||o||Function("return this")(),u,f=Array.prototype,T=Function.prototype,N=Object.prototype,B=l["__core-js_shared__"],Q=(u=/[^.]+$/.exec(B&&B.keys&&B.keys.IE_PROTO||""))?"Symbol(src)_1."+u:"",oe=T.toString,ce=N.hasOwnProperty,P=N.toString,pe=RegExp("^"+oe.call(ce).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),W=f.splice,C=Pe(l,"Map"),k=Pe(Object,"create");function I(_){var E=-1,O=_?_.length:0;for(this.clear();++E<O;){var V=_[E];this.set(V[0],V[1])}}function J(_){var E=-1,O=_?_.length:0;for(this.clear();++E<O;){var V=_[E];this.set(V[0],V[1])}}function re(_){var E=-1,O=_?_.length:0;for(this.clear();++E<O;){var V=_[E];this.set(V[0],V[1])}}function Z(_,E){for(var O,V,Y=_.length;Y--;)if((O=_[Y][0])===(V=E)||O!=O&&V!=V)return Y;return-1}function ie(_){return!(!ke(_)||(E=_,Q&&Q in E))&&(function(O){var V=ke(O)?P.call(O):"";return V=="[object Function]"||V=="[object GeneratorFunction]"}(_)||function(O){var V=!1;if(O!=null&&typeof O.toString!="function")try{V=!!(O+"")}catch{}return V}(_)?pe:i).test(function(O){if(O!=null){try{return oe.call(O)}catch{}try{return O+""}catch{}}return""}(_));var E}function ee(_,E){var O,V,Y=_.__data__;return((V=typeof(O=E))=="string"||V=="number"||V=="symbol"||V=="boolean"?O!=="__proto__":O===null)?Y[typeof E=="string"?"string":"hash"]:Y.map}function Pe(_,E){var O=function(V,Y){return V==null?void 0:V[Y]}(_,E);return ie(O)?O:void 0}function Ie(_,E){if(typeof _!="function"||E&&typeof E!="function")throw new TypeError("Expected a function");var O=function(){var V=arguments,Y=E?E.apply(this,V):V[0],S=O.cache;if(S.has(Y))return S.get(Y);var m=_.apply(this,V);return O.cache=S.set(Y,m),m};return O.cache=new(Ie.Cache||re),O}function ke(_){var E=typeof _;return!!_&&(E=="object"||E=="function")}I.prototype.clear=function(){this.__data__=k?k(null):{}},I.prototype.delete=function(_){return this.has(_)&&delete this.__data__[_]},I.prototype.get=function(_){var E=this.__data__;if(k){var O=E[_];return O==="__lodash_hash_undefined__"?void 0:O}return ce.call(E,_)?E[_]:void 0},I.prototype.has=function(_){var E=this.__data__;return k?E[_]!==void 0:ce.call(E,_)},I.prototype.set=function(_,E){return this.__data__[_]=k&&E===void 0?"__lodash_hash_undefined__":E,this},J.prototype.clear=function(){this.__data__=[]},J.prototype.delete=function(_){var E=this.__data__,O=Z(E,_);return!(O<0)&&(O==E.length-1?E.pop():W.call(E,O,1),!0)},J.prototype.get=function(_){var E=this.__data__,O=Z(E,_);return O<0?void 0:E[O][1]},J.prototype.has=function(_){return Z(this.__data__,_)>-1},J.prototype.set=function(_,E){var O=this.__data__,V=Z(O,_);return V<0?O.push([_,E]):O[V][1]=E,this},re.prototype.clear=function(){this.__data__={hash:new I,map:new(C||J),string:new I}},re.prototype.delete=function(_){return ee(this,_).delete(_)},re.prototype.get=function(_){return ee(this,_).get(_)},re.prototype.has=function(_){return ee(this,_).has(_)},re.prototype.set=function(_,E){return ee(this,_).set(_,E),this},Ie.Cache=re,n.exports=Ie}).call(this,t(3))},function(n,e,t){(function(r){var i=/^\s+|\s+$/g,s=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,l=/^0o[0-7]+$/i,u=parseInt,f=typeof r=="object"&&r&&r.Object===Object&&r,T=typeof self=="object"&&self&&self.Object===Object&&self,N=f||T||Function("return this")(),B=Object.prototype.toString,Q=Math.max,oe=Math.min,ce=function(){return N.Date.now()};function P(W){var C=typeof W;return!!W&&(C=="object"||C=="function")}function pe(W){if(typeof W=="number")return W;if(function(I){return typeof I=="symbol"||function(J){return!!J&&typeof J=="object"}(I)&&B.call(I)=="[object Symbol]"}(W))return NaN;if(P(W)){var C=typeof W.valueOf=="function"?W.valueOf():W;W=P(C)?C+"":C}if(typeof W!="string")return W===0?W:+W;W=W.replace(i,"");var k=o.test(W);return k||l.test(W)?u(W.slice(2),k?2:8):s.test(W)?NaN:+W}n.exports=function(W,C,k){var I,J,re,Z,ie,ee,Pe=0,Ie=!1,ke=!1,_=!0;if(typeof W!="function")throw new TypeError("Expected a function");function E(y){var R=I,H=J;return I=J=void 0,Pe=y,Z=W.apply(H,R)}function O(y){return Pe=y,ie=setTimeout(Y,C),Ie?E(y):Z}function V(y){var R=y-ee;return ee===void 0||R>=C||R<0||ke&&y-Pe>=re}function Y(){var y=ce();if(V(y))return S(y);ie=setTimeout(Y,function(R){var H=C-(R-ee);return ke?oe(H,re-(R-Pe)):H}(y))}function S(y){return ie=void 0,_&&I?E(y):(I=J=void 0,Z)}function m(){var y=ce(),R=V(y);if(I=arguments,J=this,ee=y,R){if(ie===void 0)return O(ee);if(ke)return ie=setTimeout(Y,C),E(ee)}return ie===void 0&&(ie=setTimeout(Y,C)),Z}return C=pe(C)||0,P(k)&&(Ie=!!k.leading,re=(ke="maxWait"in k)?Q(pe(k.maxWait)||0,C):re,_="trailing"in k?!!k.trailing:_),m.cancel=function(){ie!==void 0&&clearTimeout(ie),Pe=0,I=ee=J=ie=void 0},m.flush=function(){return ie===void 0?Z:S(ce())},m}}).call(this,t(3))},function(n,e,t){(function(r,i){var s="[object Arguments]",o="[object Map]",l="[object Object]",u="[object Set]",f=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,T=/^\w*$/,N=/^\./,B=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Q=/\\(\\)?/g,oe=/^\[object .+?Constructor\]$/,ce=/^(?:0|[1-9]\d*)$/,P={};P["[object Float32Array]"]=P["[object Float64Array]"]=P["[object Int8Array]"]=P["[object Int16Array]"]=P["[object Int32Array]"]=P["[object Uint8Array]"]=P["[object Uint8ClampedArray]"]=P["[object Uint16Array]"]=P["[object Uint32Array]"]=!0,P[s]=P["[object Array]"]=P["[object ArrayBuffer]"]=P["[object Boolean]"]=P["[object DataView]"]=P["[object Date]"]=P["[object Error]"]=P["[object Function]"]=P[o]=P["[object Number]"]=P[l]=P["[object RegExp]"]=P[u]=P["[object String]"]=P["[object WeakMap]"]=!1;var pe=typeof r=="object"&&r&&r.Object===Object&&r,W=typeof self=="object"&&self&&self.Object===Object&&self,C=pe||W||Function("return this")(),k=e&&!e.nodeType&&e,I=k&&typeof i=="object"&&i&&!i.nodeType&&i,J=I&&I.exports===k&&pe.process,re=function(){try{return J&&J.binding("util")}catch{}}(),Z=re&&re.isTypedArray;function ie(a,d,p,b){var M=-1,U=a?a.length:0;for(b&&U&&(p=a[++M]);++M<U;)p=d(p,a[M],M,a);return p}function ee(a,d){for(var p=-1,b=a?a.length:0;++p<b;)if(d(a[p],p,a))return!0;return!1}function Pe(a,d,p,b,M){return M(a,function(U,K,ye){p=b?(b=!1,U):d(p,U,K,ye)}),p}function Ie(a){var d=!1;if(a!=null&&typeof a.toString!="function")try{d=!!(a+"")}catch{}return d}function ke(a){var d=-1,p=Array(a.size);return a.forEach(function(b,M){p[++d]=[M,b]}),p}function _(a){var d=-1,p=Array(a.size);return a.forEach(function(b){p[++d]=b}),p}var E,O,V,Y=Array.prototype,S=Function.prototype,m=Object.prototype,y=C["__core-js_shared__"],R=(E=/[^.]+$/.exec(y&&y.keys&&y.keys.IE_PROTO||""))?"Symbol(src)_1."+E:"",H=S.toString,w=m.hasOwnProperty,c=m.toString,se=RegExp("^"+H.call(w).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),te=C.Symbol,ne=C.Uint8Array,be=m.propertyIsEnumerable,me=Y.splice,_e=(O=Object.keys,V=Object,function(a){return O(V(a))}),Ee=Et(C,"DataView"),Ce=Et(C,"Map"),we=Et(C,"Promise"),h=Et(C,"Set"),g=Et(C,"WeakMap"),x=Et(Object,"create"),z=mt(Ee),$=mt(Ce),G=mt(we),q=mt(h),le=mt(g),D=te?te.prototype:void 0,F=D?D.valueOf:void 0,X=D?D.toString:void 0;function j(a){var d=-1,p=a?a.length:0;for(this.clear();++d<p;){var b=a[d];this.set(b[0],b[1])}}function L(a){var d=-1,p=a?a.length:0;for(this.clear();++d<p;){var b=a[d];this.set(b[0],b[1])}}function ge(a){var d=-1,p=a?a.length:0;for(this.clear();++d<p;){var b=a[d];this.set(b[0],b[1])}}function je(a){var d=-1,p=a?a.length:0;for(this.__data__=new ge;++d<p;)this.add(a[d])}function Re(a){this.__data__=new L(a)}function Ue(a,d){var p=et(a)||Er(a)?function(K,ye){for(var ve=-1,de=Array(K);++ve<K;)de[ve]=ye(ve);return de}(a.length,String):[],b=p.length,M=!!b;for(var U in a)!w.call(a,U)||M&&(U=="length"||br(U,b))||p.push(U);return p}function $e(a,d){for(var p=a.length;p--;)if(Ir(a[p][0],d))return p;return-1}j.prototype.clear=function(){this.__data__=x?x(null):{}},j.prototype.delete=function(a){return this.has(a)&&delete this.__data__[a]},j.prototype.get=function(a){var d=this.__data__;if(x){var p=d[a];return p==="__lodash_hash_undefined__"?void 0:p}return w.call(d,a)?d[a]:void 0},j.prototype.has=function(a){var d=this.__data__;return x?d[a]!==void 0:w.call(d,a)},j.prototype.set=function(a,d){return this.__data__[a]=x&&d===void 0?"__lodash_hash_undefined__":d,this},L.prototype.clear=function(){this.__data__=[]},L.prototype.delete=function(a){var d=this.__data__,p=$e(d,a);return!(p<0)&&(p==d.length-1?d.pop():me.call(d,p,1),!0)},L.prototype.get=function(a){var d=this.__data__,p=$e(d,a);return p<0?void 0:d[p][1]},L.prototype.has=function(a){return $e(this.__data__,a)>-1},L.prototype.set=function(a,d){var p=this.__data__,b=$e(p,a);return b<0?p.push([a,d]):p[b][1]=d,this},ge.prototype.clear=function(){this.__data__={hash:new j,map:new(Ce||L),string:new j}},ge.prototype.delete=function(a){return Qt(this,a).delete(a)},ge.prototype.get=function(a){return Qt(this,a).get(a)},ge.prototype.has=function(a){return Qt(this,a).has(a)},ge.prototype.set=function(a,d){return Qt(this,a).set(a,d),this},je.prototype.add=je.prototype.push=function(a){return this.__data__.set(a,"__lodash_hash_undefined__"),this},je.prototype.has=function(a){return this.__data__.has(a)},Re.prototype.clear=function(){this.__data__=new L},Re.prototype.delete=function(a){return this.__data__.delete(a)},Re.prototype.get=function(a){return this.__data__.get(a)},Re.prototype.has=function(a){return this.__data__.has(a)},Re.prototype.set=function(a,d){var p=this.__data__;if(p instanceof L){var b=p.__data__;if(!Ce||b.length<199)return b.push([a,d]),this;p=this.__data__=new ge(b)}return p.set(a,d),this};var pt,Se=(pt=function(a,d){return a&&It(a,d,rn)},function(a,d){if(a==null)return a;if(!Rn(a))return pt(a,d);for(var p=a.length,b=-1,M=Object(a);++b<p&&d(M[b],b,M)!==!1;);return a}),It=function(a){return function(d,p,b){for(var M=-1,U=Object(d),K=b(d),ye=K.length;ye--;){var ve=K[++M];if(p(U[ve],ve,U)===!1)break}return d}}();function Dt(a,d){for(var p=0,b=(d=Zt(d,a)?[d]:yr(d)).length;a!=null&&p<b;)a=a[en(d[p++])];return p&&p==b?a:void 0}function An(a,d){return a!=null&&d in Object(a)}function jt(a,d,p,b,M){return a===d||(a==null||d==null||!tn(a)&&!nn(d)?a!=a&&d!=d:function(U,K,ye,ve,de,ae){var Fe=et(U),Oe=et(K),Ae="[object Array]",Ne="[object Array]";Fe||(Ae=(Ae=Ze(U))==s?l:Ae),Oe||(Ne=(Ne=Ze(K))==s?l:Ne);var Be=Ae==l&&!Ie(U),Ct=Ne==l&&!Ie(K),tt=Ae==Ne;if(tt&&!Be)return ae||(ae=new Re),Fe||os(U)?vr(U,K,ye,ve,de,ae):function(he,ue,Dn,gt,sn,Le,We){switch(Dn){case"[object DataView]":if(he.byteLength!=ue.byteLength||he.byteOffset!=ue.byteOffset)return!1;he=he.buffer,ue=ue.buffer;case"[object ArrayBuffer]":return!(he.byteLength!=ue.byteLength||!gt(new ne(he),new ne(ue)));case"[object Boolean]":case"[object Date]":case"[object Number]":return Ir(+he,+ue);case"[object Error]":return he.name==ue.name&&he.message==ue.message;case"[object RegExp]":case"[object String]":return he==ue+"";case o:var nt=ke;case u:var Mt=2&Le;if(nt||(nt=_),he.size!=ue.size&&!Mt)return!1;var an=We.get(he);if(an)return an==ue;Le|=1,We.set(he,ue);var St=vr(nt(he),nt(ue),gt,sn,Le,We);return We.delete(he),St;case"[object Symbol]":if(F)return F.call(he)==F.call(ue)}return!1}(U,K,Ae,ye,ve,de,ae);if(!(2&de)){var Sr=Be&&w.call(U,"__wrapped__"),Tr=Ct&&w.call(K,"__wrapped__");if(Sr||Tr){var ls=Sr?U.value():U,us=Tr?K.value():K;return ae||(ae=new Re),ye(ls,us,ve,de,ae)}}return tt?(ae||(ae=new Re),function(he,ue,Dn,gt,sn,Le){var We=2&sn,nt=rn(he),Mt=nt.length,an=rn(ue).length;if(Mt!=an&&!We)return!1;for(var St=Mt;St--;){var rt=nt[St];if(!(We?rt in ue:w.call(ue,rt)))return!1}var Pr=Le.get(he);if(Pr&&Le.get(ue))return Pr==ue;var on=!0;Le.set(he,ue),Le.set(ue,he);for(var jn=We;++St<Mt;){rt=nt[St];var cn=he[rt],ln=ue[rt];if(gt)var kr=We?gt(ln,cn,rt,ue,he,Le):gt(cn,ln,rt,he,ue,Le);if(!(kr===void 0?cn===ln||Dn(cn,ln,gt,sn,Le):kr)){on=!1;break}jn||(jn=rt=="constructor")}if(on&&!jn){var un=he.constructor,dn=ue.constructor;un==dn||!("constructor"in he)||!("constructor"in ue)||typeof un=="function"&&un instanceof un&&typeof dn=="function"&&dn instanceof dn||(on=!1)}return Le.delete(he),Le.delete(ue),on}(U,K,ye,ve,de,ae)):!1}(a,d,jt,p,b,M))}function Lt(a){return!(!tn(a)||function(d){return!!R&&R in d}(a))&&(Cr(a)||Ie(a)?se:oe).test(mt(a))}function is(a){return typeof a=="function"?a:a==null?cs:typeof a=="object"?et(a)?function(b,M){return Zt(b)&&_r(M)?wr(en(b),M):function(U){var K=function(ye,ve,de){var ae=ye==null?void 0:Dt(ye,ve);return ae===void 0?de:ae}(U,b);return K===void 0&&K===M?function(ye,ve){return ye!=null&&function(de,ae,Fe){ae=Zt(ae,de)?[ae]:yr(ae);for(var Oe,Ae=-1,Ne=ae.length;++Ae<Ne;){var Be=en(ae[Ae]);if(!(Oe=de!=null&&Fe(de,Be)))break;de=de[Be]}return Oe||!!(Ne=de?de.length:0)&&On(Ne)&&br(Be,Ne)&&(et(de)||Er(de))}(ye,ve,An)}(U,b):jt(M,K,void 0,3)}}(a[0],a[1]):function(b){var M=function(U){for(var K=rn(U),ye=K.length;ye--;){var ve=K[ye],de=U[ve];K[ye]=[ve,de,_r(de)]}return K}(b);return M.length==1&&M[0][2]?wr(M[0][0],M[0][1]):function(U){return U===b||function(K,ye,ve,de){var ae=ve.length,Fe=ae;if(K==null)return!Fe;for(K=Object(K);ae--;){var Oe=ve[ae];if(Oe[2]?Oe[1]!==K[Oe[0]]:!(Oe[0]in K))return!1}for(;++ae<Fe;){var Ae=(Oe=ve[ae])[0],Ne=K[Ae],Be=Oe[1];if(Oe[2]){if(Ne===void 0&&!(Ae in K))return!1}else{var Ct=new Re,tt;if(!(tt===void 0?jt(Be,Ne,de,3,Ct):tt))return!1}}return!0}(U,b,M)}}(a):Zt(d=a)?(p=en(d),function(b){return b==null?void 0:b[p]}):function(b){return function(M){return Dt(M,b)}}(d);var d,p}function ss(a){if(p=(d=a)&&d.constructor,b=typeof p=="function"&&p.prototype||m,d!==b)return _e(a);var d,p,b,M=[];for(var U in Object(a))w.call(a,U)&&U!="constructor"&&M.push(U);return M}function yr(a){return et(a)?a:as(a)}function vr(a,d,p,b,M,U){var K=2&M,ye=a.length,ve=d.length;if(ye!=ve&&!(K&&ve>ye))return!1;var de=U.get(a);if(de&&U.get(d))return de==d;var ae=-1,Fe=!0,Oe=1&M?new je:void 0;for(U.set(a,d),U.set(d,a);++ae<ye;){var Ae=a[ae],Ne=d[ae];if(b)var Be=K?b(Ne,Ae,ae,d,a,U):b(Ae,Ne,ae,a,d,U);if(Be!==void 0){if(Be)continue;Fe=!1;break}if(Oe){if(!ee(d,function(Ct,tt){if(!Oe.has(tt)&&(Ae===Ct||p(Ae,Ct,b,M,U)))return Oe.add(tt)})){Fe=!1;break}}else if(Ae!==Ne&&!p(Ae,Ne,b,M,U)){Fe=!1;break}}return U.delete(a),U.delete(d),Fe}function Qt(a,d){var p,b,M=a.__data__;return((b=typeof(p=d))=="string"||b=="number"||b=="symbol"||b=="boolean"?p!=="__proto__":p===null)?M[typeof d=="string"?"string":"hash"]:M.map}function Et(a,d){var p=function(b,M){return b==null?void 0:b[M]}(a,d);return Lt(p)?p:void 0}var Ze=function(a){return c.call(a)};function br(a,d){return!!(d=d??9007199254740991)&&(typeof a=="number"||ce.test(a))&&a>-1&&a%1==0&&a<d}function Zt(a,d){if(et(a))return!1;var p=typeof a;return!(p!="number"&&p!="symbol"&&p!="boolean"&&a!=null&&!xn(a))||T.test(a)||!f.test(a)||d!=null&&a in Object(d)}function _r(a){return a==a&&!tn(a)}function wr(a,d){return function(p){return p!=null&&p[a]===d&&(d!==void 0||a in Object(p))}}(Ee&&Ze(new Ee(new ArrayBuffer(1)))!="[object DataView]"||Ce&&Ze(new Ce)!=o||we&&Ze(we.resolve())!="[object Promise]"||h&&Ze(new h)!=u||g&&Ze(new g)!="[object WeakMap]")&&(Ze=function(a){var d=c.call(a),p=d==l?a.constructor:void 0,b=p?mt(p):void 0;if(b)switch(b){case z:return"[object DataView]";case $:return o;case G:return"[object Promise]";case q:return u;case le:return"[object WeakMap]"}return d});var as=Nn(function(a){var d;a=(d=a)==null?"":function(b){if(typeof b=="string")return b;if(xn(b))return X?X.call(b):"";var M=b+"";return M=="0"&&1/b==-1/0?"-0":M}(d);var p=[];return N.test(a)&&p.push(""),a.replace(B,function(b,M,U,K){p.push(U?K.replace(Q,"$1"):M||b)}),p});function en(a){if(typeof a=="string"||xn(a))return a;var d=a+"";return d=="0"&&1/a==-1/0?"-0":d}function mt(a){if(a!=null){try{return H.call(a)}catch{}try{return a+""}catch{}}return""}function Nn(a,d){if(typeof a!="function"||d&&typeof d!="function")throw new TypeError("Expected a function");var p=function(){var b=arguments,M=d?d.apply(this,b):b[0],U=p.cache;if(U.has(M))return U.get(M);var K=a.apply(this,b);return p.cache=U.set(M,K),K};return p.cache=new(Nn.Cache||ge),p}function Ir(a,d){return a===d||a!=a&&d!=d}function Er(a){return function(d){return nn(d)&&Rn(d)}(a)&&w.call(a,"callee")&&(!be.call(a,"callee")||c.call(a)==s)}Nn.Cache=ge;var et=Array.isArray;function Rn(a){return a!=null&&On(a.length)&&!Cr(a)}function Cr(a){var d=tn(a)?c.call(a):"";return d=="[object Function]"||d=="[object GeneratorFunction]"}function On(a){return typeof a=="number"&&a>-1&&a%1==0&&a<=9007199254740991}function tn(a){var d=typeof a;return!!a&&(d=="object"||d=="function")}function nn(a){return!!a&&typeof a=="object"}function xn(a){return typeof a=="symbol"||nn(a)&&c.call(a)=="[object Symbol]"}var os=Z?function(a){return function(d){return a(d)}}(Z):function(a){return nn(a)&&On(a.length)&&!!P[c.call(a)]};function rn(a){return Rn(a)?Ue(a):ss(a)}function cs(a){return a}i.exports=function(a,d,p){var b=et(a)?ie:Pe,M=arguments.length<3;return b(a,is(d),p,M,Se)}}).call(this,t(3),t(7)(n))},function(n,e){n.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),t.webpackPolyfill=1),t}},function(n,e){String.prototype.padEnd||(String.prototype.padEnd=function(t,r){return t>>=0,r=String(r!==void 0?r:" "),this.length>t?String(this):((t-=this.length)>r.length&&(r+=r.repeat(t/r.length)),String(this)+r.slice(0,t))})},function(n,e,t){function r(m,y,R){return y in m?Object.defineProperty(m,y,{value:R,enumerable:!0,configurable:!0,writable:!0}):m[y]=R,m}function i(m){if(Symbol.iterator in Object(m)||Object.prototype.toString.call(m)==="[object Arguments]")return Array.from(m)}function s(m){return function(y){if(Array.isArray(y)){for(var R=0,H=new Array(y.length);R<y.length;R++)H[R]=y[R];return H}}(m)||i(m)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function o(m){if(Array.isArray(m))return m}function l(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function u(m,y){if(!(m instanceof y))throw new TypeError("Cannot call a class as a function")}function f(m,y){for(var R=0;R<y.length;R++){var H=y[R];H.enumerable=H.enumerable||!1,H.configurable=!0,"value"in H&&(H.writable=!0),Object.defineProperty(m,H.key,H)}}function T(m){return(T=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(y){return typeof y}:function(y){return y&&typeof Symbol=="function"&&y.constructor===Symbol&&y!==Symbol.prototype?"symbol":typeof y})(m)}function N(m){return(N=typeof Symbol=="function"&&T(Symbol.iterator)==="symbol"?function(y){return T(y)}:function(y){return y&&typeof Symbol=="function"&&y.constructor===Symbol&&y!==Symbol.prototype?"symbol":T(y)})(m)}function B(m){if(m===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return m}function Q(m){return(Q=Object.setPrototypeOf?Object.getPrototypeOf:function(y){return y.__proto__||Object.getPrototypeOf(y)})(m)}function oe(m,y){return(oe=Object.setPrototypeOf||function(R,H){return R.__proto__=H,R})(m,y)}t.r(e);var ce=t(0),P=t.n(ce),pe=t(5),W=t.n(pe),C=t(4),k=t.n(C),I=t(6),J=t.n(I),re=t(2),Z=t.n(re),ie=t(1),ee=t.n(ie);t(8);function Pe(m,y){return o(m)||function(R,H){var w=[],c=!0,se=!1,te=void 0;try{for(var ne,be=R[Symbol.iterator]();!(c=(ne=be.next()).done)&&(w.push(ne.value),!H||w.length!==H);c=!0);}catch(me){se=!0,te=me}finally{try{c||be.return==null||be.return()}finally{if(se)throw te}}return w}(m,y)||l()}var Ie=[["Afghanistan",["asia"],"af","93"],["Albania",["europe"],"al","355"],["Algeria",["africa","north-africa"],"dz","213"],["Andorra",["europe"],"ad","376"],["Angola",["africa"],"ao","244"],["Antigua and Barbuda",["america","carribean"],"ag","1268"],["Argentina",["america","south-america"],"ar","54","(..) ........",0,["11","221","223","261","264","2652","280","2905","291","2920","2966","299","341","342","343","351","376","379","381","3833","385","387","388"]],["Armenia",["asia","ex-ussr"],"am","374",".. ......"],["Aruba",["america","carribean"],"aw","297"],["Australia",["oceania"],"au","61","(..) .... ....",0,["2","3","4","7","8","02","03","04","07","08"]],["Austria",["europe","eu-union"],"at","43"],["Azerbaijan",["asia","ex-ussr"],"az","994","(..) ... .. .."],["Bahamas",["america","carribean"],"bs","1242"],["Bahrain",["middle-east"],"bh","973"],["Bangladesh",["asia"],"bd","880"],["Barbados",["america","carribean"],"bb","1246"],["Belarus",["europe","ex-ussr"],"by","375","(..) ... .. .."],["Belgium",["europe","eu-union"],"be","32","... .. .. .."],["Belize",["america","central-america"],"bz","501"],["Benin",["africa"],"bj","229"],["Bhutan",["asia"],"bt","975"],["Bolivia",["america","south-america"],"bo","591"],["Bosnia and Herzegovina",["europe","ex-yugos"],"ba","387"],["Botswana",["africa"],"bw","267"],["Brazil",["america","south-america"],"br","55","(..) ........."],["British Indian Ocean Territory",["asia"],"io","246"],["Brunei",["asia"],"bn","673"],["Bulgaria",["europe","eu-union"],"bg","359"],["Burkina Faso",["africa"],"bf","226"],["Burundi",["africa"],"bi","257"],["Cambodia",["asia"],"kh","855"],["Cameroon",["africa"],"cm","237"],["Canada",["america","north-america"],"ca","1","(...) ...-....",1,["204","226","236","249","250","289","306","343","365","387","403","416","418","431","437","438","450","506","514","519","548","579","581","587","604","613","639","647","672","705","709","742","778","780","782","807","819","825","867","873","902","905"]],["Cape Verde",["africa"],"cv","238"],["Caribbean Netherlands",["america","carribean"],"bq","599","",1],["Central African Republic",["africa"],"cf","236"],["Chad",["africa"],"td","235"],["Chile",["america","south-america"],"cl","56"],["China",["asia"],"cn","86","..-........."],["Colombia",["america","south-america"],"co","57","... ... ...."],["Comoros",["africa"],"km","269"],["Congo",["africa"],"cd","243"],["Congo",["africa"],"cg","242"],["Costa Rica",["america","central-america"],"cr","506","....-...."],["Côte d’Ivoire",["africa"],"ci","225",".. .. .. .."],["Croatia",["europe","eu-union","ex-yugos"],"hr","385"],["Cuba",["america","carribean"],"cu","53"],["Curaçao",["america","carribean"],"cw","599","",0],["Cyprus",["europe","eu-union"],"cy","357",".. ......"],["Czech Republic",["europe","eu-union"],"cz","420","... ... ..."],["Denmark",["europe","eu-union","baltic"],"dk","45",".. .. .. .."],["Djibouti",["africa"],"dj","253"],["Dominica",["america","carribean"],"dm","1767"],["Dominican Republic",["america","carribean"],"do","1","",2,["809","829","849"]],["Ecuador",["america","south-america"],"ec","593"],["Egypt",["africa","north-africa"],"eg","20"],["El Salvador",["america","central-america"],"sv","503","....-...."],["Equatorial Guinea",["africa"],"gq","240"],["Eritrea",["africa"],"er","291"],["Estonia",["europe","eu-union","ex-ussr","baltic"],"ee","372",".... ......"],["Ethiopia",["africa"],"et","251"],["Fiji",["oceania"],"fj","679"],["Finland",["europe","eu-union","baltic"],"fi","358",".. ... .. .."],["France",["europe","eu-union"],"fr","33",". .. .. .. .."],["French Guiana",["america","south-america"],"gf","594"],["French Polynesia",["oceania"],"pf","689"],["Gabon",["africa"],"ga","241"],["Gambia",["africa"],"gm","220"],["Georgia",["asia","ex-ussr"],"ge","995"],["Germany",["europe","eu-union","baltic"],"de","49",".... ........"],["Ghana",["africa"],"gh","233"],["Greece",["europe","eu-union"],"gr","30"],["Grenada",["america","carribean"],"gd","1473"],["Guadeloupe",["america","carribean"],"gp","590","",0],["Guam",["oceania"],"gu","1671"],["Guatemala",["america","central-america"],"gt","502","....-...."],["Guinea",["africa"],"gn","224"],["Guinea-Bissau",["africa"],"gw","245"],["Guyana",["america","south-america"],"gy","592"],["Haiti",["america","carribean"],"ht","509","....-...."],["Honduras",["america","central-america"],"hn","504"],["Hong Kong",["asia"],"hk","852",".... ...."],["Hungary",["europe","eu-union"],"hu","36"],["Iceland",["europe"],"is","354","... ...."],["India",["asia"],"in","91",".....-....."],["Indonesia",["asia"],"id","62"],["Iran",["middle-east"],"ir","98","... ... ...."],["Iraq",["middle-east"],"iq","964"],["Ireland",["europe","eu-union"],"ie","353",".. ......."],["Israel",["middle-east"],"il","972","... ... ...."],["Italy",["europe","eu-union"],"it","39","... .......",0],["Jamaica",["america","carribean"],"jm","1876"],["Japan",["asia"],"jp","81",".. .... ...."],["Jordan",["middle-east"],"jo","962"],["Kazakhstan",["asia","ex-ussr"],"kz","7","... ...-..-..",1,["310","311","312","313","315","318","321","324","325","326","327","336","7172","73622"]],["Kenya",["africa"],"ke","254"],["Kiribati",["oceania"],"ki","686"],["Kosovo",["europe","ex-yugos"],"xk","383"],["Kuwait",["middle-east"],"kw","965"],["Kyrgyzstan",["asia","ex-ussr"],"kg","996","... ... ..."],["Laos",["asia"],"la","856"],["Latvia",["europe","eu-union","ex-ussr","baltic"],"lv","371",".. ... ..."],["Lebanon",["middle-east"],"lb","961"],["Lesotho",["africa"],"ls","266"],["Liberia",["africa"],"lr","231"],["Libya",["africa","north-africa"],"ly","218"],["Liechtenstein",["europe"],"li","423"],["Lithuania",["europe","eu-union","ex-ussr","baltic"],"lt","370"],["Luxembourg",["europe","eu-union"],"lu","352"],["Macau",["asia"],"mo","853"],["Macedonia",["europe","ex-yugos"],"mk","389"],["Madagascar",["africa"],"mg","261"],["Malawi",["africa"],"mw","265"],["Malaysia",["asia"],"my","60","..-....-...."],["Maldives",["asia"],"mv","960"],["Mali",["africa"],"ml","223"],["Malta",["europe","eu-union"],"mt","356"],["Marshall Islands",["oceania"],"mh","692"],["Martinique",["america","carribean"],"mq","596"],["Mauritania",["africa"],"mr","222"],["Mauritius",["africa"],"mu","230"],["Mexico",["america","central-america"],"mx","52","... ... ....",0,["55","81","33","656","664","998","774","229"]],["Micronesia",["oceania"],"fm","691"],["Moldova",["europe"],"md","373","(..) ..-..-.."],["Monaco",["europe"],"mc","377"],["Mongolia",["asia"],"mn","976"],["Montenegro",["europe","ex-yugos"],"me","382"],["Morocco",["africa","north-africa"],"ma","212"],["Mozambique",["africa"],"mz","258"],["Myanmar",["asia"],"mm","95"],["Namibia",["africa"],"na","264"],["Nauru",["africa"],"nr","674"],["Nepal",["asia"],"np","977"],["Netherlands",["europe","eu-union"],"nl","31",".. ........"],["New Caledonia",["oceania"],"nc","687"],["New Zealand",["oceania"],"nz","64","...-...-...."],["Nicaragua",["america","central-america"],"ni","505"],["Niger",["africa"],"ne","227"],["Nigeria",["africa"],"ng","234"],["North Korea",["asia"],"kp","850"],["Norway",["europe","baltic"],"no","47","... .. ..."],["Oman",["middle-east"],"om","968"],["Pakistan",["asia"],"pk","92","...-......."],["Palau",["oceania"],"pw","680"],["Palestine",["middle-east"],"ps","970"],["Panama",["america","central-america"],"pa","507"],["Papua New Guinea",["oceania"],"pg","675"],["Paraguay",["america","south-america"],"py","595"],["Peru",["america","south-america"],"pe","51"],["Philippines",["asia"],"ph","63",".... ......."],["Poland",["europe","eu-union","baltic"],"pl","48","...-...-..."],["Portugal",["europe","eu-union"],"pt","351"],["Puerto Rico",["america","carribean"],"pr","1","",3,["787","939"]],["Qatar",["middle-east"],"qa","974"],["Réunion",["africa"],"re","262"],["Romania",["europe","eu-union"],"ro","40"],["Russia",["europe","asia","ex-ussr","baltic"],"ru","7","(...) ...-..-..",0],["Rwanda",["africa"],"rw","250"],["Saint Kitts and Nevis",["america","carribean"],"kn","1869"],["Saint Lucia",["america","carribean"],"lc","1758"],["Saint Vincent and the Grenadines",["america","carribean"],"vc","1784"],["Samoa",["oceania"],"ws","685"],["San Marino",["europe"],"sm","378"],["São Tomé and Príncipe",["africa"],"st","239"],["Saudi Arabia",["middle-east"],"sa","966"],["Senegal",["africa"],"sn","221"],["Serbia",["europe","ex-yugos"],"rs","381"],["Seychelles",["africa"],"sc","248"],["Sierra Leone",["africa"],"sl","232"],["Singapore",["asia"],"sg","65","....-...."],["Slovakia",["europe","eu-union"],"sk","421"],["Slovenia",["europe","eu-union","ex-yugos"],"si","386"],["Solomon Islands",["oceania"],"sb","677"],["Somalia",["africa"],"so","252"],["South Africa",["africa"],"za","27"],["South Korea",["asia"],"kr","82","... .... ...."],["South Sudan",["africa","north-africa"],"ss","211"],["Spain",["europe","eu-union"],"es","34","... ... ..."],["Sri Lanka",["asia"],"lk","94"],["Sudan",["africa"],"sd","249"],["Suriname",["america","south-america"],"sr","597"],["Swaziland",["africa"],"sz","268"],["Sweden",["europe","eu-union","baltic"],"se","46","(...) ...-..."],["Switzerland",["europe"],"ch","41",".. ... .. .."],["Syria",["middle-east"],"sy","963"],["Taiwan",["asia"],"tw","886"],["Tajikistan",["asia","ex-ussr"],"tj","992"],["Tanzania",["africa"],"tz","255"],["Thailand",["asia"],"th","66"],["Timor-Leste",["asia"],"tl","670"],["Togo",["africa"],"tg","228"],["Tonga",["oceania"],"to","676"],["Trinidad and Tobago",["america","carribean"],"tt","1868"],["Tunisia",["africa","north-africa"],"tn","216"],["Turkey",["europe"],"tr","90","... ... .. .."],["Turkmenistan",["asia","ex-ussr"],"tm","993"],["Tuvalu",["asia"],"tv","688"],["Uganda",["africa"],"ug","256"],["Ukraine",["europe","ex-ussr"],"ua","380","(..) ... .. .."],["United Arab Emirates",["middle-east"],"ae","971"],["United Kingdom",["europe","eu-union"],"gb","44",".... ......"],["United States",["america","north-america"],"us","1","(...) ...-....",0,["907","205","251","256","334","479","501","870","480","520","602","623","928","209","213","310","323","408","415","510","530","559","562","619","626","650","661","707","714","760","805","818","831","858","909","916","925","949","951","303","719","970","203","860","202","302","239","305","321","352","386","407","561","727","772","813","850","863","904","941","954","229","404","478","706","770","912","808","319","515","563","641","712","208","217","309","312","618","630","708","773","815","847","219","260","317","574","765","812","316","620","785","913","270","502","606","859","225","318","337","504","985","413","508","617","781","978","301","410","207","231","248","269","313","517","586","616","734","810","906","989","218","320","507","612","651","763","952","314","417","573","636","660","816","228","601","662","406","252","336","704","828","910","919","701","308","402","603","201","609","732","856","908","973","505","575","702","775","212","315","516","518","585","607","631","716","718","845","914","216","330","419","440","513","614","740","937","405","580","918","503","541","215","412","570","610","717","724","814","401","803","843","864","605","423","615","731","865","901","931","210","214","254","281","325","361","409","432","512","713","806","817","830","903","915","936","940","956","972","979","435","801","276","434","540","703","757","804","802","206","253","360","425","509","262","414","608","715","920","304","307"]],["Uruguay",["america","south-america"],"uy","598"],["Uzbekistan",["asia","ex-ussr"],"uz","998",".. ... .. .."],["Vanuatu",["oceania"],"vu","678"],["Vatican City",["europe"],"va","39",".. .... ....",1],["Venezuela",["america","south-america"],"ve","58"],["Vietnam",["asia"],"vn","84"],["Yemen",["middle-east"],"ye","967"],["Zambia",["africa"],"zm","260"],["Zimbabwe",["africa"],"zw","263"]],ke=[["American Samoa",["oceania"],"as","1684"],["Anguilla",["america","carribean"],"ai","1264"],["Bermuda",["america","north-america"],"bm","1441"],["British Virgin Islands",["america","carribean"],"vg","1284"],["Cayman Islands",["america","carribean"],"ky","1345"],["Cook Islands",["oceania"],"ck","682"],["Falkland Islands",["america","south-america"],"fk","500"],["Faroe Islands",["europe"],"fo","298"],["Gibraltar",["europe"],"gi","350"],["Greenland",["america"],"gl","299"],["Jersey",["europe","eu-union"],"je","44",".... ......"],["Montserrat",["america","carribean"],"ms","1664"],["Niue",["asia"],"nu","683"],["Norfolk Island",["oceania"],"nf","672"],["Northern Mariana Islands",["oceania"],"mp","1670"],["Saint Barthélemy",["america","carribean"],"bl","590","",1],["Saint Helena",["africa"],"sh","290"],["Saint Martin",["america","carribean"],"mf","590","",2],["Saint Pierre and Miquelon",["america","north-america"],"pm","508"],["Sint Maarten",["america","carribean"],"sx","1721"],["Tokelau",["oceania"],"tk","690"],["Turks and Caicos Islands",["america","carribean"],"tc","1649"],["U.S. Virgin Islands",["america","carribean"],"vi","1340"],["Wallis and Futuna",["oceania"],"wf","681"]];function _(m,y,R,H,w){return!R||w?m+"".padEnd(y.length,".")+" "+H:m+"".padEnd(y.length,".")+" "+R}function E(m,y,R,H,w){var c,se,te=[];return se=y===!0,[(c=[]).concat.apply(c,s(m.map(function(ne){var be={name:ne[0],regions:ne[1],iso2:ne[2],countryCode:ne[3],dialCode:ne[3],format:_(R,ne[3],ne[4],H,w),priority:ne[5]||0},me=[];return ne[6]&&ne[6].map(function(_e){var Ee=function(Ce){for(var we=1;we<arguments.length;we++){var h=arguments[we]!=null?arguments[we]:{},g=Object.keys(h);typeof Object.getOwnPropertySymbols=="function"&&(g=g.concat(Object.getOwnPropertySymbols(h).filter(function(x){return Object.getOwnPropertyDescriptor(h,x).enumerable}))),g.forEach(function(x){r(Ce,x,h[x])})}return Ce}({},be);Ee.dialCode=ne[3]+_e,Ee.isAreaCode=!0,Ee.areaCodeLength=_e.length,me.push(Ee)}),me.length>0?(be.mainCode=!0,se||y.constructor.name==="Array"&&y.includes(ne[2])?(be.hasAreaCodes=!0,[be].concat(me)):(te=te.concat(me),[be])):[be]}))),te]}function O(m,y,R,H){if(R!==null){var w=Object.keys(R),c=Object.values(R);w.forEach(function(se,te){if(H)return m.push([se,c[te]]);var ne=m.findIndex(function(me){return me[0]===se});if(ne===-1){var be=[se];be[y]=c[te],m.push(be)}else m[ne][y]=c[te]})}}function V(m,y){return y.length===0?m:m.map(function(R){var H=y.findIndex(function(c){return c[0]===R[2]});if(H===-1)return R;var w=y[H];return w[1]&&(R[4]=w[1]),w[3]&&(R[5]=w[3]),w[2]&&(R[6]=w[2]),R})}var Y=function m(y,R,H,w,c,se,te,ne,be,me,_e,Ee,Ce,we){u(this,m),this.filterRegions=function(D,F){if(typeof D=="string"){var X=D;return F.filter(function(j){return j.regions.some(function(L){return L===X})})}return F.filter(function(j){return D.map(function(L){return j.regions.some(function(ge){return ge===L})}).some(function(L){return L})})},this.sortTerritories=function(D,F){var X=[].concat(s(D),s(F));return X.sort(function(j,L){return j.name<L.name?-1:j.name>L.name?1:0}),X},this.getFilteredCountryList=function(D,F,X){return D.length===0?F:X?D.map(function(j){var L=F.find(function(ge){return ge.iso2===j});if(L)return L}).filter(function(j){return j}):F.filter(function(j){return D.some(function(L){return L===j.iso2})})},this.localizeCountries=function(D,F,X){for(var j=0;j<D.length;j++)F[D[j].iso2]!==void 0?D[j].localName=F[D[j].iso2]:F[D[j].name]!==void 0&&(D[j].localName=F[D[j].name]);return X||D.sort(function(L,ge){return L.localName<ge.localName?-1:L.localName>ge.localName?1:0}),D},this.getCustomAreas=function(D,F){for(var X=[],j=0;j<F.length;j++){var L=JSON.parse(JSON.stringify(D));L.dialCode+=F[j],X.push(L)}return X},this.excludeCountries=function(D,F){return F.length===0?D:D.filter(function(X){return!F.includes(X.iso2)})};var h=function(D,F,X){var j=[];return O(j,1,D,!0),O(j,3,F),O(j,2,X),j}(ne,be,me),g=V(JSON.parse(JSON.stringify(Ie)),h),x=V(JSON.parse(JSON.stringify(ke)),h),z=Pe(E(g,y,Ee,Ce,we),2),$=z[0],G=z[1];if(R){var q=Pe(E(x,y,Ee,Ce,we),2),le=q[0];q[1],$=this.sortTerritories(le,$)}H&&($=this.filterRegions(H,$)),this.onlyCountries=this.localizeCountries(this.excludeCountries(this.getFilteredCountryList(w,$,te.includes("onlyCountries")),se),_e,te.includes("onlyCountries")),this.preferredCountries=c.length===0?[]:this.localizeCountries(this.getFilteredCountryList(c,$,te.includes("preferredCountries")),_e,te.includes("preferredCountries")),this.hiddenAreaCodes=this.excludeCountries(this.getFilteredCountryList(w,G),se)},S=function(m){function y(w){var c;u(this,y),(c=function(h,g){return!g||N(g)!=="object"&&typeof g!="function"?B(h):g}(this,Q(y).call(this,w))).getProbableCandidate=k()(function(h){return h&&h.length!==0?c.state.onlyCountries.filter(function(g){return Z()(g.name.toLowerCase(),h.toLowerCase())},B(B(c)))[0]:null}),c.guessSelectedCountry=k()(function(h,g,x,z){var $;if(c.props.enableAreaCodes===!1&&(z.some(function(le){if(Z()(h,le.dialCode))return x.some(function(D){if(le.iso2===D.iso2&&D.mainCode)return $=D,!0}),!0}),$))return $;var G=x.find(function(le){return le.iso2==g});if(h.trim()==="")return G;var q=x.reduce(function(le,D){return Z()(h,D.dialCode)&&(D.dialCode.length>le.dialCode.length||D.dialCode.length===le.dialCode.length&&D.priority<le.priority)?D:le},{dialCode:"",priority:10001},B(B(c)));return q.name?q:G}),c.updateCountry=function(h){var g,x=c.state.onlyCountries;(g=h.indexOf(0)>="0"&&h.indexOf(0)<="9"?x.find(function(z){return z.dialCode==+h}):x.find(function(z){return z.iso2==h}))&&g.dialCode&&c.setState({selectedCountry:g,formattedNumber:c.props.disableCountryCode?"":c.formatNumber(g.dialCode,g)})},c.scrollTo=function(h,g){if(h){var x=c.dropdownRef;if(x&&document.body){var z=x.offsetHeight,$=x.getBoundingClientRect().top+document.body.scrollTop,G=$+z,q=h,le=q.getBoundingClientRect(),D=q.offsetHeight,F=le.top+document.body.scrollTop,X=F+D,j=F-$+x.scrollTop,L=z/2-D/2;if(c.props.enableSearch?F<$+32:F<$)g&&(j-=L),x.scrollTop=j;else if(X>G){g&&(j+=L);var ge=z-D;x.scrollTop=j-ge}}}},c.scrollToTop=function(){var h=c.dropdownRef;h&&document.body&&(h.scrollTop=0)},c.formatNumber=function(h,g){if(!g)return h;var x,z=g.format,$=c.props,G=$.disableCountryCode,q=$.enableAreaCodeStretch,le=$.enableLongNumbers,D=$.autoFormat;if(G?((x=z.split(" ")).shift(),x=x.join(" ")):q&&g.isAreaCode?((x=z.split(" "))[1]=x[1].replace(/\.+/,"".padEnd(g.areaCodeLength,".")),x=x.join(" ")):x=z,!h||h.length===0)return G?"":c.props.prefix;if(h&&h.length<2||!x||!D)return G?h:c.props.prefix+h;var F,X=J()(x,function(j,L){if(j.remainingText.length===0)return j;if(L!==".")return{formattedText:j.formattedText+L,remainingText:j.remainingText};var ge,je=o(ge=j.remainingText)||i(ge)||l(),Re=je[0],Ue=je.slice(1);return{formattedText:j.formattedText+Re,remainingText:Ue}},{formattedText:"",remainingText:h.split("")});return(F=le?X.formattedText+X.remainingText.join(""):X.formattedText).includes("(")&&!F.includes(")")&&(F+=")"),F},c.cursorToEnd=function(){var h=c.numberInputRef;if(document.activeElement===h){h.focus();var g=h.value.length;h.value.charAt(g-1)===")"&&(g-=1),h.setSelectionRange(g,g)}},c.getElement=function(h){return c["flag_no_".concat(h)]},c.getCountryData=function(){return c.state.selectedCountry?{name:c.state.selectedCountry.name||"",dialCode:c.state.selectedCountry.dialCode||"",countryCode:c.state.selectedCountry.iso2||"",format:c.state.selectedCountry.format||""}:{}},c.handleFlagDropdownClick=function(h){if(h.preventDefault(),c.state.showDropdown||!c.props.disabled){var g=c.state,x=g.preferredCountries,z=g.onlyCountries,$=g.selectedCountry,G=c.concatPreferredCountries(x,z).findIndex(function(q){return q.dialCode===$.dialCode&&q.iso2===$.iso2});c.setState({showDropdown:!c.state.showDropdown,highlightCountryIndex:G},function(){c.state.showDropdown&&c.scrollTo(c.getElement(c.state.highlightCountryIndex))})}},c.handleInput=function(h){var g=h.target.value,x=c.props,z=x.prefix,$=x.onChange,G=c.props.disableCountryCode?"":z,q=c.state.selectedCountry,le=c.state.freezeSelection;if(!c.props.countryCodeEditable){var D=z+(q.hasAreaCodes?c.state.onlyCountries.find(function(Se){return Se.iso2===q.iso2&&Se.mainCode}).dialCode:q.dialCode);if(g.slice(0,D.length)!==D)return}if(g===z)return $&&$("",c.getCountryData(),h,""),c.setState({formattedNumber:""});if(!(g.replace(/\D/g,"").length>15&&(c.props.enableLongNumbers===!1||typeof c.props.enableLongNumbers=="number"&&g.replace(/\D/g,"").length>c.props.enableLongNumbers))&&g!==c.state.formattedNumber){h.preventDefault?h.preventDefault():h.returnValue=!1;var F=c.props.country,X=c.state,j=X.onlyCountries,L=X.selectedCountry,ge=X.hiddenAreaCodes;if($&&h.persist(),g.length>0){var je=g.replace(/\D/g,"");(!c.state.freezeSelection||L&&L.dialCode.length>je.length)&&(q=c.props.disableCountryGuess?L:c.guessSelectedCountry(je.substring(0,6),F,j,ge)||L,le=!1),G=c.formatNumber(je,q),q=q.dialCode?q:L}var Re=h.target.selectionStart,Ue=h.target.selectionStart,$e=c.state.formattedNumber,pt=G.length-$e.length;c.setState({formattedNumber:G,freezeSelection:le,selectedCountry:q},function(){pt>0&&(Ue-=pt),G.charAt(G.length-1)==")"?c.numberInputRef.setSelectionRange(G.length-1,G.length-1):Ue>0&&$e.length>=G.length?c.numberInputRef.setSelectionRange(Ue,Ue):Re<$e.length&&c.numberInputRef.setSelectionRange(Re,Re),$&&$(G.replace(/[^0-9]+/g,""),c.getCountryData(),h,G)})}},c.handleInputClick=function(h){c.setState({showDropdown:!1}),c.props.onClick&&c.props.onClick(h,c.getCountryData())},c.handleDoubleClick=function(h){var g=h.target.value.length;h.target.setSelectionRange(0,g)},c.handleFlagItemClick=function(h,g){var x=c.state.selectedCountry,z=c.state.onlyCountries.find(function(le){return le==h});if(z){var $=c.state.formattedNumber.replace(" ","").replace("(","").replace(")","").replace("-",""),G=$.length>1?$.replace(x.dialCode,z.dialCode):z.dialCode,q=c.formatNumber(G.replace(/\D/g,""),z);c.setState({showDropdown:!1,selectedCountry:z,freezeSelection:!0,formattedNumber:q,searchValue:""},function(){c.cursorToEnd(),c.props.onChange&&c.props.onChange(q.replace(/[^0-9]+/g,""),c.getCountryData(),g,q)})}},c.handleInputFocus=function(h){c.numberInputRef&&c.numberInputRef.value===c.props.prefix&&c.state.selectedCountry&&!c.props.disableCountryCode&&c.setState({formattedNumber:c.props.prefix+c.state.selectedCountry.dialCode},function(){c.props.jumpCursorToEnd&&setTimeout(c.cursorToEnd,0)}),c.setState({placeholder:""}),c.props.onFocus&&c.props.onFocus(h,c.getCountryData()),c.props.jumpCursorToEnd&&setTimeout(c.cursorToEnd,0)},c.handleInputBlur=function(h){h.target.value||c.setState({placeholder:c.props.placeholder}),c.props.onBlur&&c.props.onBlur(h,c.getCountryData())},c.handleInputCopy=function(h){if(c.props.copyNumbersOnly){var g=window.getSelection().toString().replace(/[^0-9]+/g,"");h.clipboardData.setData("text/plain",g),h.preventDefault()}},c.getHighlightCountryIndex=function(h){var g=c.state.highlightCountryIndex+h;return g<0||g>=c.state.onlyCountries.length+c.state.preferredCountries.length?g-h:c.props.enableSearch&&g>c.getSearchFilteredCountries().length?0:g},c.searchCountry=function(){var h=c.getProbableCandidate(c.state.queryString)||c.state.onlyCountries[0],g=c.state.onlyCountries.findIndex(function(x){return x==h})+c.state.preferredCountries.length;c.scrollTo(c.getElement(g),!0),c.setState({queryString:"",highlightCountryIndex:g})},c.handleKeydown=function(h){var g=c.props.keys,x=h.target.className;if(x.includes("selected-flag")&&h.which===g.ENTER&&!c.state.showDropdown)return c.handleFlagDropdownClick(h);if(x.includes("form-control")&&(h.which===g.ENTER||h.which===g.ESC))return h.target.blur();if(c.state.showDropdown&&!c.props.disabled&&(!x.includes("search-box")||h.which===g.UP||h.which===g.DOWN||h.which===g.ENTER||h.which===g.ESC&&h.target.value==="")){h.preventDefault?h.preventDefault():h.returnValue=!1;var z=function($){c.setState({highlightCountryIndex:c.getHighlightCountryIndex($)},function(){c.scrollTo(c.getElement(c.state.highlightCountryIndex),!0)})};switch(h.which){case g.DOWN:z(1);break;case g.UP:z(-1);break;case g.ENTER:c.props.enableSearch?c.handleFlagItemClick(c.getSearchFilteredCountries()[c.state.highlightCountryIndex]||c.getSearchFilteredCountries()[0],h):c.handleFlagItemClick([].concat(s(c.state.preferredCountries),s(c.state.onlyCountries))[c.state.highlightCountryIndex],h);break;case g.ESC:case g.TAB:c.setState({showDropdown:!1},c.cursorToEnd);break;default:(h.which>=g.A&&h.which<=g.Z||h.which===g.SPACE)&&c.setState({queryString:c.state.queryString+String.fromCharCode(h.which)},c.state.debouncedQueryStingSearcher)}}},c.handleInputKeyDown=function(h){var g=c.props,x=g.keys,z=g.onEnterKeyPress,$=g.onKeyDown;h.which===x.ENTER&&z&&z(h),$&&$(h)},c.handleClickOutside=function(h){c.dropdownRef&&!c.dropdownContainerRef.contains(h.target)&&c.state.showDropdown&&c.setState({showDropdown:!1})},c.handleSearchChange=function(h){var g=h.currentTarget.value,x=c.state,z=x.preferredCountries,$=x.selectedCountry,G=0;if(g===""&&$){var q=c.state.onlyCountries;G=c.concatPreferredCountries(z,q).findIndex(function(le){return le==$}),setTimeout(function(){return c.scrollTo(c.getElement(G))},100)}c.setState({searchValue:g,highlightCountryIndex:G})},c.concatPreferredCountries=function(h,g){return h.length>0?s(new Set(h.concat(g))):g},c.getDropdownCountryName=function(h){return h.localName||h.name},c.getSearchFilteredCountries=function(){var h=c.state,g=h.preferredCountries,x=h.onlyCountries,z=h.searchValue,$=c.props.enableSearch,G=c.concatPreferredCountries(g,x),q=z.trim().toLowerCase().replace("+","");if($&&q){if(/^\d+$/.test(q))return G.filter(function(F){var X=F.dialCode;return["".concat(X)].some(function(j){return j.toLowerCase().includes(q)})});var le=G.filter(function(F){var X=F.iso2;return["".concat(X)].some(function(j){return j.toLowerCase().includes(q)})}),D=G.filter(function(F){var X=F.name,j=F.localName;return F.iso2,["".concat(X),"".concat(j||"")].some(function(L){return L.toLowerCase().includes(q)})});return c.scrollToTop(),s(new Set([].concat(le,D)))}return G},c.getCountryDropdownList=function(){var h=c.state,g=h.preferredCountries,x=h.highlightCountryIndex,z=h.showDropdown,$=h.searchValue,G=c.props,q=G.disableDropdown,le=G.prefix,D=c.props,F=D.enableSearch,X=D.searchNotFound,j=D.disableSearchIcon,L=D.searchClass,ge=D.searchStyle,je=D.searchPlaceholder,Re=D.autocompleteSearch,Ue=c.getSearchFilteredCountries().map(function(Se,It){var Dt=x===It,An=ee()({country:!0,preferred:Se.iso2==="us"||Se.iso2==="gb",active:Se.iso2==="us",highlight:Dt}),jt="flag ".concat(Se.iso2);return P.a.createElement("li",Object.assign({ref:function(Lt){return c["flag_no_".concat(It)]=Lt},key:"flag_no_".concat(It),"data-flag-key":"flag_no_".concat(It),className:An,"data-dial-code":"1",tabIndex:q?"-1":"0","data-country-code":Se.iso2,onClick:function(Lt){return c.handleFlagItemClick(Se,Lt)},role:"option"},Dt?{"aria-selected":!0}:{}),P.a.createElement("div",{className:jt}),P.a.createElement("span",{className:"country-name"},c.getDropdownCountryName(Se)),P.a.createElement("span",{className:"dial-code"},Se.format?c.formatNumber(Se.dialCode,Se):le+Se.dialCode))}),$e=P.a.createElement("li",{key:"dashes",className:"divider"});g.length>0&&(!F||F&&!$.trim())&&Ue.splice(g.length,0,$e);var pt=ee()(r({"country-list":!0,hide:!z},c.props.dropdownClass,!0));return P.a.createElement("ul",{ref:function(Se){return!F&&Se&&Se.focus(),c.dropdownRef=Se},className:pt,style:c.props.dropdownStyle,role:"listbox",tabIndex:"0"},F&&P.a.createElement("li",{className:ee()(r({search:!0},L,L))},!j&&P.a.createElement("span",{className:ee()(r({"search-emoji":!0},"".concat(L,"-emoji"),L)),role:"img","aria-label":"Magnifying glass"},"🔎"),P.a.createElement("input",{className:ee()(r({"search-box":!0},"".concat(L,"-box"),L)),style:ge,type:"search",placeholder:je,autoFocus:!0,autoComplete:Re?"on":"off",value:$,onChange:c.handleSearchChange})),Ue.length>0?Ue:P.a.createElement("li",{className:"no-entries-message"},P.a.createElement("span",null,X)))};var se,te=new Y(w.enableAreaCodes,w.enableTerritories,w.regions,w.onlyCountries,w.preferredCountries,w.excludeCountries,w.preserveOrder,w.masks,w.priority,w.areaCodes,w.localization,w.prefix,w.defaultMask,w.alwaysDefaultMask),ne=te.onlyCountries,be=te.preferredCountries,me=te.hiddenAreaCodes,_e=w.value?w.value.replace(/\D/g,""):"";se=w.disableInitialCountryGuess?0:_e.length>1?c.guessSelectedCountry(_e.substring(0,6),w.country,ne,me)||0:w.country&&ne.find(function(h){return h.iso2==w.country})||0;var Ee,Ce=_e.length<2&&se&&!Z()(_e,se.dialCode)?se.dialCode:"";Ee=_e===""&&se===0?"":c.formatNumber((w.disableCountryCode?"":Ce)+_e,se.name?se:void 0);var we=ne.findIndex(function(h){return h==se});return c.state={showDropdown:w.showDropdown,formattedNumber:Ee,onlyCountries:ne,preferredCountries:be,hiddenAreaCodes:me,selectedCountry:se,highlightCountryIndex:we,queryString:"",freezeSelection:!1,debouncedQueryStingSearcher:W()(c.searchCountry,250),searchValue:""},c}var R,H;return function(w,c){if(typeof c!="function"&&c!==null)throw new TypeError("Super expression must either be null or a function");w.prototype=Object.create(c&&c.prototype,{constructor:{value:w,writable:!0,configurable:!0}}),c&&oe(w,c)}(y,m),R=y,(H=[{key:"componentDidMount",value:function(){document.addEventListener&&this.props.enableClickOutside&&document.addEventListener("mousedown",this.handleClickOutside),this.props.onMount&&this.props.onMount(this.state.formattedNumber.replace(/[^0-9]+/g,""),this.getCountryData(),this.state.formattedNumber)}},{key:"componentWillUnmount",value:function(){document.removeEventListener&&this.props.enableClickOutside&&document.removeEventListener("mousedown",this.handleClickOutside)}},{key:"componentDidUpdate",value:function(w,c,se){w.country!==this.props.country?this.updateCountry(this.props.country):w.value!==this.props.value&&this.updateFormattedNumber(this.props.value)}},{key:"updateFormattedNumber",value:function(w){if(w===null)return this.setState({selectedCountry:0,formattedNumber:""});var c=this.state,se=c.onlyCountries,te=c.selectedCountry,ne=c.hiddenAreaCodes,be=this.props,me=be.country,_e=be.prefix;if(w==="")return this.setState({selectedCountry:te,formattedNumber:""});var Ee,Ce,we=w.replace(/\D/g,"");if(te&&Z()(w,_e+te.dialCode))Ce=this.formatNumber(we,te),this.setState({formattedNumber:Ce});else{var h=(Ee=this.props.disableCountryGuess?te:this.guessSelectedCountry(we.substring(0,6),me,se,ne)||te)&&Z()(we,_e+Ee.dialCode)?Ee.dialCode:"";Ce=this.formatNumber((this.props.disableCountryCode?"":h)+we,Ee||void 0),this.setState({selectedCountry:Ee,formattedNumber:Ce})}}},{key:"render",value:function(){var w,c,se,te=this,ne=this.state,be=ne.onlyCountries,me=ne.selectedCountry,_e=ne.showDropdown,Ee=ne.formattedNumber,Ce=ne.hiddenAreaCodes,we=this.props,h=we.disableDropdown,g=we.renderStringAsFlag,x=we.isValid,z=we.defaultErrorMessage,$=we.specialLabel;if(typeof x=="boolean")c=x;else{var G=x(Ee.replace(/\D/g,""),me,be,Ce);typeof G=="boolean"?(c=G)===!1&&(se=z):(c=!1,se=G)}var q=ee()((r(w={},this.props.containerClass,!0),r(w,"react-tel-input",!0),w)),le=ee()({arrow:!0,up:_e}),D=ee()(r({"form-control":!0,"invalid-number":!c,open:_e},this.props.inputClass,!0)),F=ee()({"selected-flag":!0,open:_e}),X=ee()(r({"flag-dropdown":!0,"invalid-number":!c,open:_e},this.props.buttonClass,!0)),j="flag ".concat(me&&me.iso2);return P.a.createElement("div",{className:"".concat(q," ").concat(this.props.className),style:this.props.style||this.props.containerStyle,onKeyDown:this.handleKeydown},$&&P.a.createElement("div",{className:"special-label"},$),se&&P.a.createElement("div",{className:"invalid-number-message"},se),P.a.createElement("input",Object.assign({className:D,style:this.props.inputStyle,onChange:this.handleInput,onClick:this.handleInputClick,onDoubleClick:this.handleDoubleClick,onFocus:this.handleInputFocus,onBlur:this.handleInputBlur,onCopy:this.handleInputCopy,value:Ee,onKeyDown:this.handleInputKeyDown,placeholder:this.props.placeholder,disabled:this.props.disabled,type:"tel"},this.props.inputProps,{ref:function(L){te.numberInputRef=L,typeof te.props.inputProps.ref=="function"?te.props.inputProps.ref(L):typeof te.props.inputProps.ref=="object"&&(te.props.inputProps.ref.current=L)}})),P.a.createElement("div",{className:X,style:this.props.buttonStyle,ref:function(L){return te.dropdownContainerRef=L}},g?P.a.createElement("div",{className:F},g):P.a.createElement("div",{onClick:h?void 0:this.handleFlagDropdownClick,className:F,title:me?"".concat(me.localName||me.name,": + ").concat(me.dialCode):"",tabIndex:h?"-1":"0",role:"button","aria-haspopup":"listbox","aria-expanded":!!_e||void 0},P.a.createElement("div",{className:j},!h&&P.a.createElement("div",{className:le}))),_e&&this.getCountryDropdownList()))}}])&&f(R.prototype,H),y}(P.a.Component);S.defaultProps={country:"",value:"",onlyCountries:[],preferredCountries:[],excludeCountries:[],placeholder:"1 (702) 123-4567",searchPlaceholder:"search",searchNotFound:"No entries to show",flagsImagePath:"./flags.png",disabled:!1,containerStyle:{},inputStyle:{},buttonStyle:{},dropdownStyle:{},searchStyle:{},containerClass:"",inputClass:"",buttonClass:"",dropdownClass:"",searchClass:"",className:"",autoFormat:!0,enableAreaCodes:!1,enableTerritories:!1,disableCountryCode:!1,disableDropdown:!1,enableLongNumbers:!1,countryCodeEditable:!0,enableSearch:!1,disableSearchIcon:!1,disableInitialCountryGuess:!1,disableCountryGuess:!1,regions:"",inputProps:{},localization:{},masks:null,priority:null,areaCodes:null,preserveOrder:[],defaultMask:"... ... ... ... ..",alwaysDefaultMask:!1,prefix:"+",copyNumbersOnly:!0,renderStringAsFlag:"",autocompleteSearch:!1,jumpCursorToEnd:!0,enableAreaCodeStretch:!1,enableClickOutside:!0,showDropdown:!1,isValid:!0,defaultErrorMessage:"",specialLabel:"Phone",onEnterKeyPress:null,keys:{UP:38,DOWN:40,RIGHT:39,LEFT:37,ENTER:13,ESC:27,PLUS:43,A:65,Z:90,SPACE:32,TAB:9}},e.default=S}]);const _l=ds(bl),wl=nr().shape({phone:bt().required("Phone is required")}),Il=({ClosePhoneModal:n})=>{const e=localStorage.getItem("useremail"),t=localStorage.getItem("userphone"),[r,i]=De.useState(t||""),[s,o]=De.useState(""),[l,u]=De.useState(null),[f,T]=De.useState(""),{register:N,handleSubmit:B,setValue:Q,formState:{errors:oe}}=rr({resolver:ir(wl)});De.useEffect(()=>{t&&Q("phone",t)},[t,Q]);const ce=(C,k)=>{i(C),T(k.dialCode)},P=()=>{window.recaptchaVerifier||(window.recaptchaVerifier=new pc(oi,"recaptcha-container",{size:"invisible",callback:C=>{console.log("reCAPTCHA solved:")},"expired-callback":()=>{console.log("reCAPTCHA expired.")}}))},pe=async()=>{try{P();const C=window.recaptchaVerifier,k=`+${r}`,I=await yc(oi,k,C);u(I),He.success("OTP sent successfully!")}catch(C){console.error("Error sending OTP:",C.message),He.error("Mobile Number already exists")}},W=async()=>{try{if(!l){He.error("Please send OTP first.");return}await l.confirm(s);const C=r.slice(f.length),k={phone:C};(await yn.post(`${vn}/api/phoneupdate?email=${e}`,k)).status===200?(He.success("Phone number verified and updated successfully!"),localStorage.setItem("userphone",C),n()):He.error("Failed to update phone number in backend.")}catch(C){console.error("Error verifying OTP:",C.message),He.error("Invalid OTP. Please try again.")}};return v.jsx(Kn,{children:v.jsxs("div",{className:"w-[530px] min-h-[330px] my-3 mx-8 font-extralight font-poppins",children:[v.jsx("p",{className:"text-end text-2xl font-medium",onClick:()=>n(),children:"x"}),l?v.jsxs("div",{className:"text-center my-8 mx-6",children:[v.jsx("p",{className:"my-2 font-bold text-2xl",children:"Enter OTP"}),v.jsx(vl,{numInputs:6,value:s,onChange:C=>o(C),renderInput:C=>v.jsx("input",{...C}),inputStyle:{width:"50px",height:"50px",color:"black",border:"1px solid #ccc",borderRadius:"5px",fontSize:"20px",textAlign:"center",margin:"15px",outline:"none"},focusStyle:{border:"2px solid #007BFF",outline:"none"}}),v.jsx("button",{onClick:W,className:"bg-green-700 my-4 px-4 py-2 text-xl font-extralight",children:"Verify OTP"})]}):v.jsxs("div",{children:[v.jsx("p",{className:"text-center text-lg my-2",children:"Update Phone"}),v.jsx("p",{className:"text-center text-sm lg:mx-12 md:mx-12 mx-4 my-6",children:"Enter your new Phone Number (please note we will send an OTP to your new phone number)"}),v.jsxs("div",{className:"lg:mx-6 md:mx-6 mx-1 my-8",children:[v.jsx("label",{htmlFor:"phone",className:"text-normal",children:"Phone"}),v.jsx(_l,{country:"in",className:"text-black",value:r,onChange:ce,inputStyle:{width:"230px",height:"30px",fontSize:"16px",background:"transparent",color:"white",border:"none"},buttonStyle:{backgroundColor:"transparent",border:"none",borderRadius:"5px",padding:"5px",width:"60px"},dropdownStyle:{backgroundColor:"#fff",border:"1px solid #ccc",borderRadius:"5px",maxHeight:"140px",overflowY:"auto"}}),oe.phone&&v.jsx("p",{className:"text-red-500 text-sm",children:oe.phone.message})]}),v.jsx("div",{className:"flex justify-center my-8",children:v.jsx("button",{className:"font-normal bg-gradient-to-r from-[#3D03FA] to-[#A71CD2] text-center w-36 py-2.5 my-2",onClick:pe,children:"Send OTP"})}),v.jsx("div",{id:"recaptcha-container"})]})]})})},El=nr().shape({email:bt().email("Invalid email format").required("Email is required")}),Cl=({CloseEmailModal:n})=>{const e=localStorage.getItem("useremail"),t=localStorage.getItem("userphone"),[r,i]=De.useState(!1),{register:s,handleSubmit:o,setValue:l,formState:{errors:u}}=rr({resolver:ir(El)});De.useEffect(()=>{e&&l("email",e)},[e,l]);const f=()=>{i(!1),n()},T=async N=>{i(!0);const B={...N};try{(await yn.post(`${vn}/api/emailupdate?phone=${t}`,B)).status===200?(He.success("Email updated successfully"),localStorage.setItem("useremail",N.email),l("useremail",N.email)):He.error("Failed to update email")}catch(Q){console.log(Q),He.error("An error occurred while updating email")}};return v.jsxs(v.Fragment,{children:[v.jsx(Kn,{children:v.jsxs("div",{className:"w-[550px] min-h-[330px] my-4 mx-8 font-extralight font-poppins",children:[v.jsx("p",{className:"text-end text-2xl font-medium",onClick:()=>n(),children:"x"}),v.jsx("p",{className:"text-center text-lg my-4",children:"Update Email"}),v.jsx("p",{className:"text-center text-sm lg:mx-12 md:mx-12 mx-4 my-8",children:"Enter your new email id (please note we will be sending a verification link to your new email id)"}),v.jsxs("form",{onSubmit:o(T),children:[v.jsxs("div",{className:"lg:mx-6 md:mx-6 mx-1",children:[v.jsx("label",{htmlFor:"email",className:"text-lg",children:"Email"}),v.jsx("input",{type:"text",className:`py-3 pe-0 ps-2 block w-full bg-transparent border-t-transparent border-b border-x-transparent border-b-gray-400 outline-none disabled:pointer-events-none my-3 ${u.email?"border-red-500":""}`,placeholder:"johndoe@gmail.com",...s("email")}),u.email&&v.jsx("p",{className:"text-red-500 text-sm",children:u.email.message})]}),v.jsx("div",{className:"flex justify-center my-8",children:v.jsx("button",{className:"font-normal bg-gradient-to-r from-[#3D03FA] to-[#A71CD2] text-center w-36 py-2.5 my-2",type:"submit",children:"Verify"})})]})]})}),r&&v.jsx(Kn,{children:v.jsxs("div",{className:"w-[550px] min-h-[330px] my-4 mx-8 font-extralight font-poppins",children:[v.jsx("p",{className:"text-end text-2xl font-medium",onClick:()=>f(),children:"x"}),v.jsx("p",{className:"text-center text-lg my-4",children:"Update Email"}),v.jsx("p",{className:"text-center text-normal lg:mx-12 md:mx-12 mx-4 my-16",children:"We have sent you a verification link to your email. Please verify your email to continue."})]})})]})},Sl=nr().shape({fname:bt().trim().required("First name is required"),lname:bt().required("Last name is required"),dob:bt().required("Please enter Date of birth"),email:bt().email("Please Enter a valid Email").trim().required("Email is required"),phone:bt().required("Please enter mob.no")}),kl=()=>{var Ie,ke,_,E,O,V;const[n,e]=De.useState(!1),[t,r]=De.useState(!1),[i,s]=De.useState(!1),l=(Ie=hs().state)==null?void 0:Ie.userId,u=localStorage.getItem("useremail"),f=localStorage.getItem("userphone"),[T,N]=De.useState({}),[B,Q]=De.useState({}),oe=fs();De.useEffect(()=>{k(),I()},[i,u,f]);const{register:ce,handleSubmit:P,setValue:pe,getValues:W,formState:{errors:C}}=rr({resolver:ir(Sl)}),k=async()=>{try{const Y=await yn.get(`${vn}/api/getusersbyid?id=${l}`),S=Y.data.user;N(S),localStorage.setItem("userphone",Y.data.user.phone),localStorage.setItem("useremail",Y.data.user.email);const m=Y.data.user;pe("fname",m.fname),pe("lname",m.lname),pe("dob",m.dob),pe("email",m.email),pe("phone",m.phone)}catch(Y){console.log(Y)}},I=async()=>{try{const S=(await yn.get(`${vn}/api/getimagebyid?user=${l}`)).data.user;Q(S)}catch(Y){console.log(Y)}},J=async Y=>{({...Y},He.success("User updated successfully")),oe("/users")},re=()=>{s(!i)},Z=()=>{e(!n)},ie=()=>{r(!t)},ee=()=>{e(!0)},Pe=()=>{oe("/users")};return v.jsxs(v.Fragment,{children:[v.jsxs("div",{className:"font-extralight my-4",children:[v.jsx("p",{className:" mx-2 text-lg ",children:"Edit User"}),v.jsx("hr",{}),v.jsxs("div",{className:"mx-12 my-6 space-y-1",children:[v.jsx("img",{src:B!=null&&B.image?B.image:ps,alt:"Profile",className:`w-40 h-40 ${B!=null&&B.image?" rounded-3xl object-cover":""}`}),v.jsx("button",{className:" text-base  bg-gradient-to-r from-[#3D03FA] to-[#A71CD2] lg:w-40 md:w-40 w-40 py-2.5 my-5 ",onClick:()=>s(!0),children:"Change Image"})]}),v.jsxs("div",{className:"mx-2 ",children:[v.jsx("p",{className:"my-2",children:"Personal Information"}),v.jsx("hr",{}),v.jsxs("form",{onSubmit:P(J),children:[v.jsxs("div",{className:"grid grid-cols-12 my-6 mx-4 text-slate-400",children:[v.jsxs("div",{className:"col-span-4  ",children:[v.jsxs("div",{className:"flex flex-col",children:[v.jsx("label",{className:"mb-6 ",children:"First Name"}),v.jsx("input",{disabled:!0,type:"text",id:"fname",className:" outline-none bg-transparent lg:w-1/2 md:w-1/2 w-28 px-2",...ce("fname")}),v.jsx("p",{className:"text-red-700",children:(ke=C.fname)==null?void 0:ke.message})]}),v.jsx("hr",{className:"lg:w-1/2 md:w-1/2 w-20"})]}),v.jsxs("div",{className:"col-span-4 ",children:[v.jsxs("div",{className:"flex flex-col",children:[v.jsx("label",{className:"mb-6 ",children:"Last Name"}),v.jsx("input",{disabled:!0,type:"text",id:"lname",className:" outline-none bg-transparent lg:w-1/2 md:w-1/2 w-28 px-2",...ce("lname")}),v.jsx("p",{className:"text-red-700",children:(_=C.lname)==null?void 0:_.message})]}),v.jsx("hr",{className:"lg:w-1/2 md:w-1/2 w-20"})]}),v.jsxs("div",{className:"col-span-4",children:[v.jsxs("div",{className:"flex flex-col",children:[v.jsx("label",{className:"mb-6 ",children:"Date Of Birth"}),v.jsx("input",{disabled:!0,type:"date",id:"dob",className:"outline-none bg-transparent lg:w-1/2 md:w-1/2 w-28 px-2",...ce("dob")}),v.jsx("p",{className:"text-red-700",children:(E=C.dob)==null?void 0:E.message})]}),v.jsx("hr",{className:"lg:w-1/2 md:w-1/2 w-28"})]})]}),v.jsx("p",{className:"my-2",children:"Contact Information"}),v.jsx("hr",{}),v.jsxs("div",{className:"grid lg:grid-cols-3 mx-2 my-8 gap-4",children:[v.jsxs("div",{children:[v.jsxs("div",{className:"flex flex-col",children:[v.jsx("label",{className:"mb-6",children:"Email"}),v.jsx("input",{disabled:!0,type:"email",id:"email",className:"bg-transparent outline-none lg:w-64 md:w-60 w-52 px-2",...ce("email")}),v.jsx("p",{className:"text-red-700",children:(O=C.email)==null?void 0:O.message})]}),v.jsx("hr",{className:"lg:w-64 md:w-60 w-52 mb-6"}),v.jsx("p",{onClick:()=>ee(),className:"bg-gradient-to-r from-[#3D03FA] to-[#A71CD2] px-5 py-2 text-center w-1/3",children:"Update"})]}),v.jsxs("div",{children:[v.jsxs("div",{className:"flex flex-col",children:[v.jsx("label",{className:"mb-6",children:"Phone"}),v.jsx("input",{disabled:!0,className:"bg-transparent outline-none lg:w-64 md:w-60 w-52 px-2",...ce("phone"),onChange:Y=>pe("phone",Y)}),v.jsx("p",{className:"text-red-700",children:(V=C.phone)==null?void 0:V.message})]}),v.jsx("hr",{className:"lg:w-1/2 md:w-52 w-48 mb-6"}),v.jsx("p",{onClick:()=>r(!0),className:"bg-gradient-to-r from-[#3D03FA] to-[#A71CD2] text-center py-2 w-1/3 ",children:"Update"})]})]}),v.jsxs("div",{className:"flex space-x-2",children:[v.jsx("button",{type:"submit",className:"bg-gradient-to-r from-[#3D03FA] to-[#A71CD2] px-5 py-2 ",children:"Update Changes"}),v.jsx("p",{onClick:Pe,className:"bg-gradient-to-r from-[#3D03FA] to-[#A71CD2] px-5 py-2 ",children:"Cancel"})]})]})]})]}),i&&v.jsx(ms,{CloseProfileModal:re}),n&&v.jsx(Cl,{CloseEmailModal:Z}),t&&v.jsx(Il,{ClosePhoneModal:ie})]})};export{kl as default};
