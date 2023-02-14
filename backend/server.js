import express from 'express';
import data from './data.js';
/**Inorder to create the backend, we created a folder with command cd backend then used npm istall express , then created a server.js andd then we exported the data file.
 * We created the port for node js server and the port where we shall view everything at thats the 5000 port and then to get clear view results in chrome , you need the json viewer downloaded in chrome
 * Downloded npm install nodemon  --save-dev when there is a change / update in the server
 */
const app = express();

app.get('/api/products', (req, res) => {
  res.send(data.products);
});
//Backend Api for returning information based on the slug of the project
app.get('/api/products/slug/:slug', (req, res) => {
  const product = data.products.find((x) => x.slug === req.params.slug);
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ message: 'Product Not Found' });
  }
});

app.get('/api/products/:id', (req, res) => {
  const product = data.products.find((x) => x._id === req.params.id);
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ message: 'Product Not Found' });
  }
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`serve at http://localhost:${port}`);
});
