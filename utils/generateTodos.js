const todosData = [
  {
    description: "water the plants",
    completed: true
  },
  {
    description: "feed the dogs",
    completed: false
  },
  {
    description: "take the dog to the vet",
    completed: false
  },
  {
    description: "plant a tree",
    completed: false
  },
  {
    description: "start my tax return",
    completed: false
  },
  {
    description: "apply to startup",
    completed: true
  },
]

const generateTodos = async (account) => {
  for (let d of todosData) {
    await account.createTodo(d)
  }
}

module.exports = generateTodos