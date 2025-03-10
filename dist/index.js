"use strict";var v=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var d=v(function(C,q){
var c=require('@stdlib/math-base-assert-is-nan/dist'),f=require('@stdlib/math-base-assert-is-negative-zero/dist');function Z(e,r,u,n){var i,a,t,s;return i=r.data,a=r.accessors[0],e<=0?NaN:e===1||u===0?a(i,0):(t=a(i,n),s=a(i,n+(e-1)*u),c(t)||c(s)?NaN:t===s?f(t)||f(s)?-0:t:t<s?t:s)}q.exports=Z
});var o=v(function(D,y){
var m=require('@stdlib/math-base-assert-is-nan/dist'),p=require('@stdlib/math-base-assert-is-negative-zero/dist'),j=require('@stdlib/array-base-arraylike2object/dist'),k=d();function O(e,r,u,n){var i,a,t;return e<=0?NaN:(t=j(r),t.accessorProtocol?k(e,t,u,n):e===1||u===0?r[0]:(i=r[n],a=r[n+(e-1)*u],m(i)||m(a)?NaN:i===a?p(i)||p(a)?-0:i:i<a?i:a))}y.exports=O
});var g=v(function(E,N){
var P=require('@stdlib/strided-base-stride2offset/dist'),R=o();function h(e,r,u){return R(e,r,u,P(e,u))}N.exports=h
});var b=v(function(F,x){
var w=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),l=g(),z=o();w(l,"ndarray",z);x.exports=l
});var A=b();module.exports=A;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
