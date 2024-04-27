import express from "express";
import productsRoutes from "./router/products.route.js";
import cartsRoutes from './router/carts.route.js'

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());

app.use("/api/products", productsRoutes);
app.use("/api/carts", cartsRoutes);

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
