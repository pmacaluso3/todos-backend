const express = require('express')
const app = express()

const models = require('./models')

app.use(require('cors')())
app.use(express.json())

app.get('/', (req, res, next) => {
  res.locals.data = { message: 'ok' }
  next()
})

app.use('/accounts', require('./routes/accountsRoutes'))
app.use(
  '/accounts/:key/todos',
  require('./middleware/getAccount'),
  require('./routes/todosRoutes')
)
app.use(
  '/accounts/:key/pokemon',
  require('./middleware/getAccount'),
  require('./routes/pokemonRoutes')
)


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
  if (res.headersSent) { next(error) }
  res.status(500).json({ error: error.message })
})

app.listen(process.env.PORT || 3001, () => {
  console.log('server started');
})
