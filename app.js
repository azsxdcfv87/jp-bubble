const express = require('express');
const exphbs = require('express-handlebars')
const app = express();
const port = 3000;

app.engine('handlebars', exphbs.engine({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

app.get('/', (req, res) => {
  const homePageImage = 'public/images/home_page_image.png';
  res.render('index', { homePageImage: homePageImage });
});

app.use('/public', express.static('public'));

app.listen(port, () => {
  console.log(`Express is listening on localhost:${port}`)
})