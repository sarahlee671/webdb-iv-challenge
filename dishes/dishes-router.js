const router = require('express').Router();

const Dishes = require('./dishes-model.js');


router.get('/', (req, res) => {
  Dishes.getDishes()
    .then(dishes => {
      res.status(200).json(dishes);
    })
    .catch (error => {
      res.status(500).json({message: "We ran into an error retrieving the information" })
    })
})


router.get('/:id', async (req, res) => {
  try {
    const Dish = await Dishes.getDish(req.params.id);
    if (dish) {
      res.status(200).json(dish);
    } else {
      res.status(404).json({ message: 'We could not find the dish' });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: 'We ran into an error retrieving the dish' });
  }
});



router.post('/', async (req, res) => {
  const dish = req.body;

  if (dish.name) {
    try {
      const inserted = await Dishes.addDish(dish);
      res.status(201).json(inserted);
    } catch (error) {
      res
        .status(500)
        .json({ message: 'We ran into an error creating the dish' });
    }
  } else {
    res.status(400).json({ message: 'Please provide name of the dish' });
  }
});