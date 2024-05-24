const express = require('express');
const exphbs = require('express-handlebars')
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));  // public 文件夾用於靜態資源
// app.use(express.static(path.join(__dirname, 'build')));  // build 文件夾用於 React 構建輸出

app.engine('handlebars', exphbs.engine({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

app.get('/', (req, res) => {
  const homePageImage = '/images/home_page_image.png';
  res.render('index', { homePageImage: homePageImage });
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port, () => {
  console.log(`Express is listening on localhost:${port}`)
})

