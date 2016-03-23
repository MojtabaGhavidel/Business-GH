Hapi = require 'hapi'
server = new Hapi.Server()
console.log 'config check shavad'
config = require("./config")
CB = require 'couchbase'


#CB modeling
#db crud

BaseModel = require('odme').CB
db= new require('puffer') {host: '127.0.0.1', name:'business'}


port = 3000
host = 'localhost'
server.connection host:host, port:port
server.start (err) ->
	console.log "Server started listening on localhost:3000..." unless err?


server.route
    method: 'GET'
    path: '/'
    handler: (request, reply) ->
        reply 'Hello, world!' 





class Business extends BaseModel
      source: db
   PREFIX: true
   props:
    user: true
    pass: true
    name: true
    email: true
    address: true
    tell: true
    about: true
    
  _key: (id) -> 
    console.log "111111111"
    id ||= ShortID.generate()
    if @PREFIX == false
      "mojtaba"
    else
      "mojtaba"


console.log "22222222"
business = new Business { user: 'buffet' , pass: 'stock' , email: 'buffet@gmail.com', address: 'Block 4, Wall st, NY, USA' }

console.log business






###
CREATE
###


#save to couhbase // comment kardam ke instance durust nakune
#business.create(true).then (result) -> console.log result



###
GET
###

#Business.get('business_Ny1yFn7hg').then (result) -> console.log result



###
UPDATE
###
###
Business.get("business_EyO3m9Mhg").then (business) ->
    business.doc.name = 'Pasta'
    business.update()

###

###
DELETE
###

#Business.remove('business_EyO3m9Mhg').then (result) -> console.log result
