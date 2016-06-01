/* app's prototype */

var app = exports = module.exports = {};

var urlMap = require('./libs/urlmaps');
var ser_china = 'http://api.cn.faceplusplus.com/';
var ser_us = 'http://api.us.faceplusplus.com/';


app.init = function() {
  this.cache = {};
  this.settings = {};
  this._url_map = Object.create(null);
  this._ser_url = '';
  this.defaultSettingFunc();
}


app.defaultSettingFunc = function defaultSettingFunc(){
  var env = process.env.NODE_ENV || 'development';

  this.on('config', function(config){
    this._mount(config);
  });
}


app.config = function config(opts) {

  if (!opts.api_key || !opts.api_secret) {
    console.warn('No api_key or api_secret config');
    return;
  }

  if (!opts.country) {
    console.warn('No country select');
    return;
  }

  if (['us', 'china'].indexOf(opts.country) < 0) {
    console.warn('You must be selece china or us');
    return;
  }

  this._api_key = opts.api_key;
  this._api_secret = opts.api_secret;
  this._ser_url = opts.country === 'china' ? ser_china : ser_us;

  this.emit('config', this);

  return this;
}

app._mount = function _mount(mountapp){
  Object.keys(urlMap).forEach(function(item) {
    mountapp._url_map[item] = {};
    urlMap[item].forEach(function(t) {
      mountapp._url_map[item][t] = mountapp._ser_url + item + '/' + t;
    });
  });
}


app.use = function(fn) {
  return this;
}


app.set = function(setting, value) {

  if(arguments.length === 1){
    return this.settings[setting];
  }

  this.settings[setting] = value;
  return this;

}


app.enable = function enable(setting){
  return this.set(setting, true);
}
