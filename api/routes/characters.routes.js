const express = require("express");
const Character = require("../models/characters.model");
const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const characters = await Character.find();
    return res.status(200).json(characters);
  } catch (error) {
    return next(error);
  }
});
router.get("/:_id", async (req, res, next) => {
  try {
    return res.status(200).json(character);
  } catch (error) {
    return next(error);
  }
});

router.post("/createCharacter", async (req, res, next) => {
  try {
    const newCharacter = new Character({
      name: req.body.name,
      rank: req.body.rank,
      place: req.body.place,
      object: req.body.object,
      image: req.body.image
    });

    const createdCharacter = await newCharacter.save();
    return res.status(201).json(createdCharacter);
  } catch (error) {
    next(error);
  }
});

router.delete('/:id', async (req, res, next) => {
    try {
        const {id} = req.params;
        // No será necesaria asignar el resultado a una variable ya que vamos a eliminarlo
        await Character.findByIdAndDelete(id);
        return res.status(200).json('Character deleted!');
    } catch (error) {
        return next(error);
    }
});

router.get("/name/:name", async (req, res, next) => {
  const { name } = req.params;

  try {
    const characterByName = await Character.find({ name });
    return res.status(200).json(characterByName);
  } catch (error) {
    return next(error);
  }
});

router.put('/edit/:id', async (req, res, next) => {
    try {
        const { id } = req.params
        const characterModify = new Character(req.body)
        characterModify._id = id
        const characterUpdated = await Character.findByIdAndUpdate(id , characterModify, { new: true })
        return res.status(200).json(characterUpdated)
    } catch (error) {
        return next(error)
    }
});

module.exports = router;
