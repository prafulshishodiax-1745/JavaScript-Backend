import 'dotenv/config'
import express from 'express';

const app = express();
const port = 3001;


app.get('/', (req, res) => res.send('Hello World!'));
app.get('/twitter', (req, res) => res.send('<h1>Twitter</h1>'));
app.get('/login', (req, res) => res.send('login page'));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});