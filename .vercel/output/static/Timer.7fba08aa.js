import{r as c}from"./chunks/index.d8689f09.js";function _(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var p={exports:{}},s={};/** @license React v17.0.2
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var m=c.exports,i=60103;s.Fragment=60107;if(typeof Symbol=="function"&&Symbol.for){var l=Symbol.for;i=l("react.element"),s.Fragment=l("react.fragment")}var y=m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,v=Object.prototype.hasOwnProperty,D={key:!0,ref:!0,__self:!0,__source:!0};function d(e,t,o){var r,n={},u=null,f=null;o!==void 0&&(u=""+o),t.key!==void 0&&(u=""+t.key),t.ref!==void 0&&(f=t.ref);for(r in t)v.call(t,r)&&!D.hasOwnProperty(r)&&(n[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)n[r]===void 0&&(n[r]=t[r]);return{$$typeof:i,type:e,key:u,ref:f,props:n,_owner:y.current}}s.jsx=d;s.jsxs=d;(function(e){e.exports=s})(p);const O=_(p.exports),{jsx:g,jsxs:E,Fragment:x}=O,j=new Date("2022-10-01T14:00:00"),a=e=>e<10?`0${e}`:e.toString(),w=e=>{const t=new Date(j.valueOf()-e.valueOf()),o=a(t.getSeconds()),r=a(t.getMinutes()),n=a(t.getHours());return`${a(t.getDate())} \u0414\u041D\u0415\u0419 ${n}:${r}:${o}`},R=()=>{const[e,t]=c.exports.useState(new Date);return c.exports.useEffect(()=>{const o=setInterval(()=>{t(new Date)},1e3);return()=>{clearInterval(o)}},[]),g(x,{children:w(e)})};export{R as Timer};
