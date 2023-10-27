const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require("cors");

app.use(cors());
// 9. Requerir rutas del index_routes por eso llamamos index
const rutas = require('./src/routes/index');

// 10. Utilizar las rutas en app
app.use(express.json()); // Middleware para parsear JSON en las solicitudes
app.use(rutas);


const mongoURL = 'mongodb+srv://claudia1:claudia123@cluster0.iobr7g0.mongodb.net/Movies?retryWrites=true&w=majority';

mongoose.connect(mongoURL)
  .then(() => {
    app.listen(3000, () => {
      console.log('Corriendo la aplicación.');
    });
  })
  .catch((error) => {
    console.error('Error al conectar a MongoDB:', error);
  });