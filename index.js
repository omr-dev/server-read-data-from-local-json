import express from "express";
import {view} from './view.js';
import {model} from './model.js';

const app = express();
const PORT = 3000;
app.get("/", (req, res) => {
  res.send(view(model()));
});
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
