const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const router = express.Router();

router.post("/registro", async (req, res) => {
    try {
        const { nombre_usuario, nickname_overwatch, correo, contrasena } = req.body;
        const hashedPassword = await bcrypt.hash(contrasena, 10);
        const newUser = new User({ nombre_usuario, nickname_overwatch, correo, contrasena: hashedPassword });
        await newUser.save();
        res.status(201).json({ message: "Usuario registrado con éxito" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.post("/login", async (req, res) => {
    try {
        const { correo, contrasena } = req.body;
        const user = await User.findOne({ correo });
        if (!user || !await bcrypt.compare(contrasena, user.contrasena)) {
            return res.status(401).json({ message: "Credenciales incorrectas" });
        }
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });
        res.json({ token });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
