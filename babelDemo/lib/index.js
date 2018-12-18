"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.test = test;

require("core-js/modules/es6.promise");

var a1 = function a1() {
  return 1;
};

function test() {
  return new Promise(function (resolve, reject) {});
}