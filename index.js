const express = require('express')
const cors = require('cors')
const app = express()
const port = 3000
const chefData = require('./data/chefData.json')
const recipes = require('./data/recipes.json')

app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.get('/chefData', (req, res) => {
  res.send(chefData)
})

app.get('/recipes', (req, res) => {

  res.send(recipes)

})

app.get('/recipes/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const selectedRecipes = recipes.filter((recipe) => recipe.chef_id === id)
  console.log(selectedRecipes)
  res.send(selectedRecipes)

})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


