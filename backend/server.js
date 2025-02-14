require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

// Conectar a MongoDB
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log("Base de datos conectada"))
.catch(err => console.error("Error al conectar la base de datos:", err));

// Iniciar servidor
app.listen(3000, () => console.log("Servidor en http://localhost:3000"));


//Autenticacion
const authRoutes = require("./routes/auth");
const characterRoutes = require("./routes/characters");

app.use("/api/usuarios", authRoutes);
app.use("/api/personajes", characterRoutes);
