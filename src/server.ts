import express from 'express';
import { route } from './routes';
const app = express();
route(app);
app.get('/', (req, res) => {
  res.send('Hello World');
});
app.listen(3000, () => {
  console.log('Server is running on port http://localhost:3000');
});
 