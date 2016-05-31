/*
 * date: 2016年 05月 31日 星期二 11:30:52 CST
 * author: fyt
 */

var util = require('util');
var http = require('http');
var EventEmitter = require('events').EventEmitter;
var merge = require('merge-descriptors');
var proto = require('./application');

function AppFunc(){
  var app = function(){}
  /* 属性复制继承 */
  merge(app, EventEmitter.prototype, false);
  merge(app, proto, false);
  app.init();
  return app;
}

exports = module.exports = AppFunc;
