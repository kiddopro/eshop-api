const express = require("express");
const app = express();
const port = 3000;
const homeRoutes = require("./routes/home");
const productRoutes = require("./routes/product");

app.use(express.json());
app.use(express.static('public'))

// Usar las rutas
//
app.use('/api', homeRoutes);
app.use('/api', productRoutes);

app.listen(port, () => {
  console.log(`listening to localhost:${port}`);
});
