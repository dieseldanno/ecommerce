// step 1. import dependencies
import express from "express";
import cors from "cors";
import dotenv from "dotenv";

// step 2. start the access to .env files configuration
dotenv.config();

// global variables
const PORT = process.env.PORT || 5010;
const baseUrl = process.env.BASE_URL;

// step 3. get the express application
const app = express();

// step 4. activate middleware
app.use(cors());
app.use(express.json());

app.get("/products", async (req, res) => {
  try {
    const response = await fetch(`${baseUrl}/products`);

    if (!response.ok) {
      throw new Error(`Failed to fetch products: ${response.statusText}`);
    }
    const result = await response.json();
    res.status(200).json({ success: true, data: result });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

app.get("/products/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const response = await fetch(`${baseUrl}/products/${id}`);
    if (!response.ok) {
      throw new Error(`Failed to fetch product: ${response.statusText}`);
    }
    const result = await response.json();
    res.status(200).json({ success: true, data: result });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// step 5. start the server and listen to calls
app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));
