var express = require('express')

var app = express()

app.get('/', (req, res) => {
	res.send('Bonjour, monde!')
})

app.listen(3000, () => {
	console.log('Server demarre')
})
