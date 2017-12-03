const Gdax = require('gdax');
const cfonts = require('cfonts')
const colors = require('colors')
const Table = require('cli-table2')
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
	font: 'simple3d',
	align: 'center',
	colors: ['blue'],
	background: 'Black',
	letterSpacing: 2,
	lineHeight: 1,
	space: true,
	maxLength: '0'
  })

const websocket = new Gdax.WebsocketClient(['ETH-USD']);

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

websocket.on('message', data => 
	{ 
		if (data.type === "match") {
		console.log(table.toString())
		console.log(data.price)
		
	}  
});
websocket.on('error', err => { console.log(err) });
websocket.on('close', () => { /* ... */ });