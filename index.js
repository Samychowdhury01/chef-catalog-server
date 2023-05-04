const express = require('express')
const cors = require('cors')
const app = express()
const port = 3000
const chefData = require('./data/chefData.json')
const recipes = require('./data/recipes.json')
const blogs = require('./data/blogs.json')

app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.get('/chefData', (req, res) => {
  res.send(chefData)
})
app.get('/chefData/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const selectedChef = chefData.find((chef) => chef.id === id)
  res.send(selectedChef)
})
app.get('/blogs', (req, res) => {

  res.send(blogs)

})

app.get('/recipes', (req, res) => {

  res.send(recipes)

})

app.get('/recipes/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const selectedRecipes = recipes.filter((recipe) => recipe.chef_id === id)
  res.send(selectedRecipes)

})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


