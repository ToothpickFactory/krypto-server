const Gdax = require('gdax');
const cfonts = require('cfonts')
const colors = require('colors')
const Table = require('cli-table2')


const key = 'your_api_key';
const b64secret = 'your_b64_secret';
const passphrase = 'your_passphrase';

const apiURI = 'https://api.gdax.com';
const sandboxURI = 'https://api-public.sandbox.gdax.com';

const authedClient = new Gdax.AuthenticatedClient(key, b64secret, passphrase, sandboxURI);

authedClient.getAccounts()
	.then(data => {
		console.log(data)
	})
	.catch(error => {
		// handle the error
	});

authedClient.getOrders()
	.then(data => {
		console.log("Buy Order Data: " + data)
	})
	.catch(error => {
		console.log("Error getting Orders ", error)
	});

	// Buy 1 BTC @ 100 USD
// const buyParams = {
// 	'price': '100.00', // USD
// 	'size': '1',  // BTC
// 	'product_id': 'BTC-USD',
//   };
//   authedClient.buy(buyParams)
//   	.then(data => {
// 		console.log("Buy Order Data: " + data.status)
// 	})
// 	.catch(error => {
// 		// handle the error
// 	});

//const publicClient = new Gdax.PublicClient();

// publicClient
// 	.getProducts()
// 	.then(data => {
// 		console.log(data)
// 	})
// 	.catch(error => {
// 		// handle the error
// 	});

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

// const websocket = new Gdax.WebsocketClient(['ETH-USD']);

// const table = new Table({
// 	chars: {
// 	  'top': '-',
// 	  'top-mid': '-',
// 	  'top-left': '-',
// 	  'top-right': '-',
// 	  'bottom': '-',
// 	  'bottom-mid': '-',
// 	  'bottom-left': '-',
// 	  'bottom-right': '-',
// 	  'left': '║',
// 	  'left-mid': '-' ,
// 	  'mid': '-' ,
// 	  'mid-mid': '-',
// 	  'right': '║',
// 	  'right-mid': '-',
// 	  'middle': '│'
// 	},
// 	head: ['Price (USD)'].map(title => title.yellow),
// 	colWidths: [14]
//   })

// websocket.on('message', data => 
// { 
// 	if (data.type === "match") {
// 		// console.log(table.toString())
// 		// console.log(data.price)
// 	}  
// });
// websocket.on('error', err => { console.log(err) });
// websocket.on('close', () => { /* ... */ });