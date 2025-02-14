const mongoose = require("mongoose");

const CharacterSchema = new mongoose.Schema({
    nombre: { type: String, required: true, unique: true },
    descripcion: String,
    habilidades: String,
    mejores_combos: String,
    counters: String,
    rol: { type: String, required: true }
});

module.exports = mongoose.model("Character", CharacterSchema);
