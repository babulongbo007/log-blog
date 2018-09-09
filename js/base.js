;(function (window) {
'use strict';
/**
 * This variable will replace the variable named KB.
 * You should use this variable.
 * @type {Object}
 */
var TB = {
    "isFunction": function (arg) {
        return Object.prototype.toString.call(arg) === "[object Function]";
    },
    "isString": function(arg) {
        return Object.prototype.toString.call(arg) === "[object String]";
    },
    "isNumber": function (arg) {
       return (Object.prototype.toString.call(arg) === "[object Number]") && !isNaN(arg); 
    },
    "isObject": function (arg) {
       return arg && (Object.prototype.toString.call(arg) === "[object Object]"); 
    },
    "isElement": function(arg) {
        if (typeof(HTMLElement) === 'object') {
            return arg instanceof HTMLElement;
        } else {
            return arg && (typeof(arg) === 'object') && (arg.nodeType === 1) && (typeof(arg.nodeName) === 'string');
        }
    }
};
window.TB = TB;
} (window));
