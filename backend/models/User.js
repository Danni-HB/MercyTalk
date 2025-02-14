const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    nombre_usuario: { type: String, required: true, unique: true },
    nickname_overwatch: { type: String, required: true },
    correo: { type: String, required: true, unique: true },
    contrasena: { type: String, required: true }
});

module.exports = mongoose.model("User", UserSchema);
