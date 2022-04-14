const corsProxy = require('cors-anywhere')

// Listen on a specific host via the HOST environment variable.
const host = process.env.HOST || '0.0.0.0'
// Listen on a specific port via the PORT environment variable.
const port = process.env.PORT || 8080

corsProxy
	.createServer({
		originWhitelist: [
			'http://localhost:3000',
			'http://localhost:3000/dashboard/settings',
			'https://portfolio-ravenous.herokuapp.com',
			'http://react-foogle.herokuapp.com/',
			'http://192.168.1.3:3000/',
			'http://192.168.1.4:3000/',
			'http://192.168.1.5:3000/',
		],
		requireHeader: ['origin', 'x-requested-with'],
		removeHeaders: ['cookie', 'cookie2'],
	})
	.listen(port, host, () => {
		console.log('Running CORS Anywhere on ' + host + ':' + port)
	})
