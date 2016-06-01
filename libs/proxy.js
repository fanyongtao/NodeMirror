var Q = require('q');
var http = require('http');

function Proxy(){
  this.proxy = false;
  this.setting = {};
}

Proxy.prototype._get = function(opts){
  return Q.fcall(http.get(opts));
};


Proxy.prototype._post = function(opts){
  return Q.fcall(http.post(opts));
}
