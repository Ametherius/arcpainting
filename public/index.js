import bodyParser from "body-parser";
import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const port = 5000;
const app = express();

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/request-a-quote.html");
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});