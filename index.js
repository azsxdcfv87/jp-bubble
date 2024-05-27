const express = require('express');
const exphbs = require('express-handlebars')
const StoneList = require('./StoneList.json')
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));  // public 文件夾用於靜態資源
app.set('views', path.join(__dirname, 'views'));
// app.use(express.static(path.join(__dirname, 'build')));  // build 文件夾用於 React 構建輸出

app.engine('handlebars', exphbs.engine({ defaultLayout: 'main' , partialsDir: path.join(__dirname, 'views/partials') }))
app.set('view engine', 'handlebars')

app.get('/', (req, res) => {
  const homePageImage = '/images/home_page_image.png';
  res.render('index', { Stones: StoneList.results });
});

app.get('/:tabName', (req, res) => {
  const { tabName } = req.params;
  let template = '';

  switch (tabName) {
    case 'area-tab':
      template = 'AreaContent';
      break;
    case 'service-tab':
      template = 'ServiceContent';
      break;
    case 'form-tab':
      template = 'FormContent';
      break;
    default:
      template = 'index';
  }
  res.render(template, { area: tabName === 'area-tab', service: tabName === 'service-tab', form: tabName === 'form-tab' });
});

app.listen(port, () => {
  console.log(`Express is listening on localhost:${port}`)
})


