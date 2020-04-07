const express = require("express")
const { uuid } = require("uuidv4")
const Repository = require("./models/Repository")

const app = express()

app.use(express.json())

const repositories = {}

app.get("/repositories", (request, response) => {
  return response.json(Object.values(repositories))
})

app.post("/repositories", (request, response) => {
  const { title, url, techs } = request.body
  const repository = new Repository(uuid(), title, url, techs)

  repositories[repository.id] = repository
  
  return response.json(repository)
})

app.put("/repositories/:id", (request, response) => {
  const { title, url, techs } = request.body
  const { id } = request.params

  const repository = repositories[id]

  if (!repository) {
    return response.status(400).json({ error: "Repository not found" })
  }

  repository.update(title, url, techs)

  return response.json(repository)
})

app.delete("/repositories/:id", (request, response) => {
  const { id } = request.params

  if (!repositories[id]) {
    return response.status(400).json({ error: "Repository not found" })
  }

  delete repositories[id]

  return response.status(204).send()
})

app.post("/repositories/:id/like", (request, response) => {
  const { id } = request.params

  const repository = repositories[id]

  if (!repository) {
    return response.status(400).json({ error: "Repository not found" })
  }

  repository.like()

  return response.json(repository)
})

module.exports = app
