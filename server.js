const express = require('express')
const app = express()

const models = require('./models')

app.use(require('cors')())

app.get('/', (req, res, next) => {
  res.locals.data = { message: 'ok' }
  next()
})

app.get('/todos', (req, res, next) => {
  models.todo.findAll().then((todos) => {
    res.locals.data = { todos }
    next()
  })
})

app.use((req, res) => {
  res.json(res.locals.data)
})

app.use((error, req, res, next) => {
  if (res.headersSent) { next(err) }
  res.status(500).json({ error })
})

app.listen(process.env.PORT || 3001, () => {
  console.log('server started');
})
