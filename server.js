const express = require('express');
const db = require('./config/connection');
const routes = require('./routes');

const cwd = process.cwd();

const PORT = process.env.PORT || 3001;
const app = express();

const activity = cwd.includes('01-Activities')
  ? cwd.split('/01-Activities/')[1]
  : cwd;

app.use(express.urlencoded({extended: true}));
app.use(express.json());

// app.get('/', (req, res) => {
//   try {
//     res.json('Successful Request');
//     res.status(200);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server for ${activity}`);
    console.log(`Running on PORT: ${PORT}`);
  });
});

// app.listen(PORT, () => {
//   console.log(`Running on PORT: ${PORT}`);
// });
