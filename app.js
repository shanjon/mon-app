var express = require('express')

var app = express()

app.get('/', (req, res) => {
	res.send('Bonjour, monde!')
})

app.listen(8080, () => {
	console.log('Server demarre')
})
