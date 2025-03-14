import express from 'express';
import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import cors from "cors";



const app = express();
app.use(express.json());

mongoose.connect('mongodb://localhost/mercytalk', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log('DB conectada'))
.catch(err => console.error('Error en DB', err));

// Definir esquema y modelo de usuario
const UserSchema = new mongoose.Schema({
    usuario: { type: String, required: true, unique: true },
    contraseña: { type: String, required: true },
    rol: { type: String, enum: ['support', 'tanque', 'DPS'], required: true },
});
const User = mongoose.model('User', UserSchema);

// RUTA: Registro de usuario
app.post('/api/register', async (req, res) => {
    const { usuario, contraseña, rol } = req.body;

    const existingUser = await User.findOne({ usuario });
    if (existingUser) return res.status(400).send('El usuario ya existe.');

    const hashedPassword = await bcrypt.hash(contraseña, 10);
    const newUser = new User({ usuario, contraseña: hashedPassword, rol });

    await newUser.save();
    res.status(201).send('Usuario registrado');
});

// RUTA: Login de usuario
app.post('/api/login', async (req, res) => {
    const { usuario, contraseña } = req.body;
    const user = await User.findOne({ usuario });

    if (user && await bcrypt.compare(contraseña, user.contraseña)) {
        const token = jwt.sign({ id: user._id }, 'tu_secreto');
        res.json({ token });
    } else {
        res.status(401).send('Credenciales inválidas');
    }
});

// Middleware de autenticación
const authenticate = (req, res, next) => {
    const token = req.headers['authorization'];
    if (token) {
        jwt.verify(token, 'tu_secreto', (err, user) => {
            if (err) return res.sendStatus(403);
            req.user = user;
            next();
        });
    } else {
        res.sendStatus(401);
    }
};

// RUTA: Comentar en personajes (requiere autenticación)
app.post('/api/characters/:id/comments', authenticate, (req, res) => {
    const { id } = req.params;
    const { comentario } = req.body;
    res.send(`Comentario guardado en personaje ${id}`);
});
app.use(cors());
// Iniciar servidor
app.listen(3000, () => console.log('Servidor en http://localhost:3000'));
