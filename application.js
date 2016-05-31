/* app's prototype */

app.init = function(){
  this.cache = {};
  this.setting = {};
}

app.use = function(fn){
  return this;
}

app.set = function(setting){
  return this;
}

exports = module.exports = app;
