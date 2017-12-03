const Gdax = require('gdax');
const publicClient = new Gdax.PublicClient();

publicClient
	.getProducts()
	.then(data => {
		console.log(data)
	})
	.catch(error => {
		// handle the error
	});