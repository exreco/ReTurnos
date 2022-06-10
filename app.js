
require('dotenv').config();

const express = require('express');
const path = require('path');
const app = express();

// app.get('/', ( req, res ) => {
//     console.log('Peticion recibida');
// })

app.use(express.static(path.join(__dirname, 'public')));




const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`escuchando en el puerto ${PORT}`);
})