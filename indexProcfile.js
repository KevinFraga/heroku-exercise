require('dotenv').config();
 const express = require('express');

 const app = express();
 
 const PORT = process.env.PORT || 3000;

 const port = `Estou rodando pelo heroku na porta ${PORT}`;

 const message = 'Procfile funciona mesmo!';
 
 app.get('/', (_req, res, _next) => {
   res.send({ message, port });
 });
 
 app.listen(PORT, () => {
   console.log(`funcionando na porta ${PORT}`);
 });
