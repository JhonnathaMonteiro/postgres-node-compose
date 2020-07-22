import express from 'express';
import '@controllers/PersonController';
require('dotenv').config();

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;

// Routes
app.get('/', (request, response) => {
  return response.json({ message: 'Hello There!' });
});

app.listen(PORT, () => {
  console.log(`Running at port: ${PORT}`);
});
