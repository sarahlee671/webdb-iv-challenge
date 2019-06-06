const router = require('express').Router();

const Recipes = require('./recipes-model.js');


router.get('/', (req, res) => {
  Recipes.getRecipes()
    .then(recipes => {
      res.status(200).json(recipes);
    })
    .catch (error => {
      res.status(500).json({message: "We ran into an error retrieving the information" })
    })
})


router.post('/', (req, res) => {
  Recipes.addRecipe(req.body)
    .then(recipe => {
        res.status(201).json(recipe);
    })
    .catch (err => {
        res.status(500).json(err)
    })
})

module.exports = router;