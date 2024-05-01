"use strict";var a=function(t,e){return function(){return e||t((e={exports:{}}).exports,e),e.exports}};var o=a(function(h,f){
var v=require('@stdlib/math-base-assert-is-nan/dist'),s=require('@stdlib/math-base-assert-is-negative-zero/dist');function g(t,e,n){var i,r;return t<=0?NaN:t===1||n===0?e[0]:(n<0?(i=e[(1-t)*n],r=e[0]):(i=e[0],r=e[(t-1)*n]),v(i)||v(r)?NaN:i===r?s(i)||s(r)?-0:i:i<r?i:r)}f.exports=g
});var m=a(function(j,N){
var q=require('@stdlib/math-base-assert-is-nan/dist'),c=require('@stdlib/math-base-assert-is-negative-zero/dist');function l(t,e,n,i){var r,u;return t<=0?NaN:t===1||n===0?e[0]:(r=e[i],u=e[i+(t-1)*n],q(r)||q(u)?NaN:r===u?c(r)||c(u)?-0:r:r<u?r:u)}N.exports=l
});var y=a(function(k,d){
var Z=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),p=o(),O=m();Z(p,"ndarray",O);d.exports=p
});var R=y();module.exports=R;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
