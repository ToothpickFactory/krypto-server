const config = require('./config/config.js');
const Gdax = require('gdax');
const cfonts = require('cfonts')
const colors = require('colors')
const Table = require('cli-table2')

const authedClient = new Gdax.AuthenticatedClient(config.key, config.b64secret, config.passphrase, config.uri);
const publicClient = new Gdax.PublicClient();
const websocket = new Gdax.WebsocketClient(['ETH-USD']);

// const websocket = new Gdax.WebsocketClient(
// 	['ETH-USD'],
// 	'https://api-public.sandbox.gdax.com',
// 	{
// 	  key: key,
// 	  secret: b64secret,
// 	  passphrase: passphrase,
// 	},
// 	{ heartbeat: true }
// );

cfonts.say('KRYPTO', {
	font: 'block',
	align: 'center',
	colors: ['blue', 'red'],
	background: 'Black',
	letterSpacing: 2,
	lineHeight: 1,
	space: true,
	maxLength: '0'
  })


function getAccounts() {
	authedClient.getAccounts()
		.then(data => {
			console.log(data)
		})
		.catch(error => {
			// handle the error
		}
	);
}

function getOrders() {
	authedClient.getOrders()
		.then(data => {
			console.log("Buy Order Data: " + data)
		})
		.catch(error => {
			console.log("Error getting Orders ", error)
		}
	);
}

	// Buy 1 BTC @ 100 USD
const buyParams = {
	'price': '100.00', // USD
	'size': '1',  // BTC
	'product_id': 'BTC-USD',
  };

// Sell 1 BTC @ 110 USD
const sellParams = {
	'price': '110.00', // USD
	'size': '1', // BTC
	'product_id': 'BTC-USD',
  };

function placeSellOrder(sellParams){
	authedClient.sell(sellParams, callback)
		.then(data => {
			console.log("Sell Order Data: " + data.status)
		})
		.catch(error => {
			// handle the error
		}
	);
}

function placeBuyOrder(buyParams){
	authedClient.buy(buyParams)
		.then(data => {
			console.log("Buy Order Data: " + data.status)
		})
		.catch(error => {
			// handle the error
		}
	);
}

function getProducts(){
	publicClient.getProducts()
		.then(data => {
			console.log(data)
		})
		.catch(error => {
			// handle the error
		}
	);
}


const table = new Table({
	chars: {
	  'top': '-',
	  'top-mid': '-',
	  'top-left': '-',
	  'top-right': '-',
	  'bottom': '-',
	  'bottom-mid': '-',
	  'bottom-left': '-',
	  'bottom-right': '-',
	  'left': '║',
	  'left-mid': '-' ,
	  'mid': '-' ,
	  'mid-mid': '-',
	  'right': '║',
	  'right-mid': '-',
	  'middle': '│'
	},
	head: ['Price (USD)'].map(title => title.yellow),
	colWidths: [14]
  })

function turnOnPriceStream(){
	websocket.on('message', data => 
	{ 
		if (data.type === "match") {
			console.log(table.toString())
			console.log(data.price)
		}  
	});
	websocket.on('error', err => { console.log(err) });
	websocket.on('close', () => { /* ... */ });
}


turnOnPriceStream();