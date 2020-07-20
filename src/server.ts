import express from 'express';
import '@controllers/UsersController';

const app = express();
app.use(express.json());

// ROutes
app.get('/', (request, response) => {
  return response.json({ message: 'Hello Jhonnatha' });
});

app.listen(3000, () => {
  console.log(`Running at port: ${3000}`);
});
