// Generated by CoffeeScript 1.10.0
(function() {
  var BaseModel, Business, CB, Hapi, business, config, db, host, port, server,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  Hapi = require('hapi');

  server = new Hapi.Server();

  console.log('config check shavad');

  config = require("./config");

  CB = require('couchbase');

  BaseModel = require('odme').CB;

  db = new require('puffer')({
    host: '127.0.0.1',
    name: 'business'
  });

  port = 3000;

  host = 'localhost';

  server.connection({
    host: host,
    port: port
  });

  server.start(function(err) {
    if (err == null) {
      return console.log("Server started listening on localhost:3000...");
    }
  });

  server.route({
    method: 'GET',
    path: '/',
    handler: function(request, reply) {
      return reply('Hello, world!');
    }
  });

  Business = (function(superClass) {
    extend(Business, superClass);

    function Business() {
      return Business.__super__.constructor.apply(this, arguments);
    }

    Business.prototype.source = db;

    return Business;

  })(BaseModel);

  ({
    props: {
      user: true,
      pass: true,
      name: true,
      email: true,
      address: true,
      tell: true,
      about: true
    }
  });

  business = new Business({
    user: 'buffet',
    pass: 'stock',
    email: 'buffet@gmail.com',
    address: 'Block 4, Wall st, NY, USA'
  });


  /*
  CREATE
   */

  business.create(true).then(function(result) {
    return console.log(result);
  });


  /*
  GET
   */


  /*
  UPDATE
   */


  /*
  Business.get("business_EyO3m9Mhg").then (business) ->
      business.doc.name = 'Pasta'
      business.update()
   */


  /*
  DELETE
   */

}).call(this);