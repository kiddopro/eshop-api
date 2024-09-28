const express = require("express");
const app = express();
const productRoutes = require("./routes/product");
const { port, baseUrl, environment } = require("./src/config");

app.use(express.json());
app.use(express.static('public'))

// Usar las rutas
app.use('/api', productRoutes);

if (environment == 'development') {
  app.listen(port, () => {
    console.log(`${environment} mode: listening to ${baseUrl}:${port}`)
  })
} else {
  app.listen(port, () => {
    console.log(`${environment} mode: listening to ${baseUrl}:${port}`);
  });
}
