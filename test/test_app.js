var assert = require('assert');
var should = require('should');
var path = require('path');

var config = require('./config/config.json');
var app = require('../mirror')();
var image_url = 'http://pic.mmfile.net/2013/08/131T954O-5.jpg';
var country = 'china';
var filepath = './liudehua.jpg';


describe('## Test init', function(){

  before(function(){
    app.config(config);
    console.log(app);
  });

  it('1. >>', function(){
    app.should.have.property('on');
    app.should.have.property('emit');
    app.should.have.property('settings');
    app.should.have.property('use');
    app.should.have.property('init');
    app.should.have.property('_url_map');
  });
});
