import express from 'express';
import Comment from '../models/Comment.js'; // Asegúrate de que la ruta sea correcta
import jwt from 'jsonwebtoken';

const router = express.Router();

// Middleware para verificar el token
const authenticateToken = (req, res, next) => {
  const token = req.headers['authorization']?.split(' ')[1];
  if (!token) return res.sendStatus(401);

  jwt.verify(token, 'tu_secreto', (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
};

// Crear comentario
router.post('/', authenticateToken, async (req, res) => {
  const { content } = req.body;

  const newComment = new Comment({
    userId: req.user.id,
    content,
  });

  await newComment.save();
  res.status(201).json({ message: 'Comentario creado' });
});

export default router; // Cambia a exportación ES
