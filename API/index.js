/**
 * Created by theo on 30/12/16.
 */
var express = require('express');
var app = express();
var bodyParser = require('body-parser')
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
	extended: true
}));

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/chats_angular');
var chatSchema = mongoose.Schema({
	name: String,
	topic : String,
	messages : [{
		content : String,
		date: { type: Date, default : Date.now },
		username : String
	}]
});
var chatModel = mongoose.model('Chat',chatSchema);


app.get('/api/retrieveMessages', function (req, res) {
	chatModel.findOne({ name : "TestChat"},function(err,chat){
		res.json(chat);
	})
});

app.post('/api/sendMessage', function (req, res) {
	console.log("Coucou");
	console.log(req.body);
	chatModel.findOne({name : "TestChat"},function(err,chat) {
		console.log(req.body);
		chat.messages.push({username : req.body.username,content : req.body.content});
		chat.save(function(err,updateChat){
			if(err) {
				res.status(500).send(err);
				console.log(err);
			}
			else res.status(200).send({});
		})
	});
});

app.get('*', function(req, res) {
	res.status(404).send("Not Found");
});

app.listen(3000, function () {
	console.log('Example app listening on port 3000!')
})


