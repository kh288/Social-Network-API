const express = require('express');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.get('/', (req, res) => {
  try {
    res.json('Successful Request');
    res.status(200);
  } catch (err) {
    res.status(500).json(err);
  }
})

app.listen(PORT, () => {
  console.log(`Running on PORT: ${PORT}`);
});