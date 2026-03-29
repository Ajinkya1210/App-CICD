const express = require('express');
const cors = require('cors');   

const app = express();

app.use(cors());                
app.use(express.json());

let products = [
  { id: 1, name: "Laptop", price: 50000 },
  { id: 2, name: "Phone", price: 20000 }
];

let orders = [];

app.get('/products', (req, res) => {
    res.json(products);
});

app.post('/orders', (req, res) => {
    orders.push(req.body);
    res.send("Order placed");
});

app.get('/orders', (req, res) => {
    res.json(orders);
});

app.listen(3000, () => {
    console.log("Backend running on port 3000");
});