////////////////////////////////
////////////////////////////////
////////////////////////////////

var express = require('express');
var http = require('http');
var app = express();

app.get('*',function(req,res){
	res.sendfile('./index.html');
});

var server = http.createServer( app );
server.listen(8000);

////////////////////////////////
////////////////////////////////
////////////////////////////////

var WebSocketServer = require('ws').Server;
var wss = new WebSocketServer({'server':server});

var mySocket = undefined;

wss.on('connection', function(ws){
	
	ws.on('message',function(msg){
		myPort.write(msg);
	});

	ws.on('close',function(){
		mySocket = undefined;
	});

	mySocket = ws;
} );

////////////////////////////////
////////////////////////////////
////////////////////////////////

var serialport = require('serialport');
var myPortName = '/dev/cu.usbmodemfd121';
var arDrone = require('ar-drone');
var client = arDrone.createClient();

// serialport.list( function(error,ports){
// 	console.log(ports);
// });

var options = {
	baudrate: 9600,
	parser: serialport.parsers.readline('\r\n')
};

var myPort = new serialport.SerialPort( myPortName , options);

myPort.on('open',function(){
	console.log('yay! it is open!');
});

myPort.on('data', function(mySensorValues){
	if(mySocket){
		mySocket.send(mySensorValues);
		if (mySensorValues > 1000){
			client.takeoff();
			console.log('taking off');
			// client.after(1000, function() {
			// 	this.stop();
			// 	this.land();
		}
	}
}


);

////////////////////////////////
////////////////////////////////
////////////////////////////////















// // THIS IS HOW CALLBACK FUNCTIONS WORK

// // PRETEND "BIGFUNCTION" IS OUR LIBRARY
// function bigFunction(callback){

// 	var thing = 2;
// 	thing++;
// 	var anotherTing = 'nada';

// 	if(callback){
// 		callback(thing,anotherTing);
// 	}
// };

// // WE PASS THE LIBRARY OUR CALLBACK FUNCTION,
// // AND WE CAN GIVE THE ARGUMENTS WHATEVER NAME WE WANT.
// // ... BUT, THEY MUST BE IN THE SAME ORDER THAT
// // THE LIBRARY GIVES THEM TO US
// bigFunction(function(number,someString){
// 	console.log(number + someString);
// });






