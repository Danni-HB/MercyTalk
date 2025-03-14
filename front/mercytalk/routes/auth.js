import express from 'express';  // Cambia require por import
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from './models/User.js';// Asegúrate de usar la ruta correcta y .js

const router = express.Router();

// Registro de usuario
router.post('/register', async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ username, email, password: hashedPassword });
    await newUser.save();
    res.status(201).json({ message: 'Usuario creado' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Inicio de sesión
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(400).json({ message: 'Credenciales inválidas' });
    }

    const token = jwt.sign({ id: user._id }, 'tu_secreto', { expiresIn: '1h' });
    res.json({ token });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Cambia la exportación a la sintaxis de módulos ES
export default router;
