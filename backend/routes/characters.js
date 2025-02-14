const express = require("express");
const Character = require("../models/Character");
const router = express.Router();

router.get("/", async (req, res) => {
    const characters = await Character.find();
    res.json(characters);
});

router.post("/", async (req, res) => {
    try {
        const newCharacter = new Character(req.body);
        await newCharacter.save();
        res.status(201).json(newCharacter);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
