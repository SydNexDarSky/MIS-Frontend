import express from "express";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import { createServer } from "http";
import { nunjucksConfig } from "./config/nunjucks.js";

// Routes...
import roots from "./routes/index.js";

// The port where the app runs
const PORT = process.env.PORT || 3000;

const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url))
const server = createServer(app);

nunjucksConfig(app);

app.use(express.json());
app.use(express.static(join(__dirname, "public")));

app.use("/", roots);

server.listen(PORT, () => {
  console.log(`\n Tico is running on port ${PORT}`);
});
