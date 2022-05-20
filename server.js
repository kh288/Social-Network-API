const express = require('express');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.get('/', (req, res) => {
  res.render('text.html');
})

app.listen(PORT, () => {
  console.log(`Running on PORT: ${PORT}`);
});