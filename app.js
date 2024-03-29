const express = require("express");
const routes = require('./routes')
require('./config/mongoose')
const app = express();
const port = 3000;
const exphbs = require("express-handlebars");
const bodyParser = require("body-parser");
const methodOverride = require('method-override')

// 設定樣板引擎
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));

app.use(methodOverride('_method'))

app.use(routes)

app.listen(port, () => {
  console.log(`Express is listen on localhost:${port}`);
});
