import express from "express";
import { fileURLToPath } from "url";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

const buildPath = path.join(__dirname, "..", "dist");
app.use(express.json());
app.use(express.static(buildPath));

app.post("/about", (req, res) => {
  console.log(req.body);
  res.send(req.body);
});

app.listen(3030, () => {
  console.log("server start on port 3030");
});
