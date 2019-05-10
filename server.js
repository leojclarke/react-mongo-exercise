const setupServer = require('./setup-server')
const app = setupServer()

const Card = require('./models/Card')

app.get('/cards', (req, res) => {
  Card.find()
    .then(cards => res.json(cards))
    .catch(err => res.json(err))
})
