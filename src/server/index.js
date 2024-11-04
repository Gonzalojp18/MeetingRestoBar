import express from 'express';
import path from 'path'
import { fileURLToPath } from 'url';
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const app = express();
app.set("PORT", 3000);

app.listen(app.get("PORT"))
console.log("server running in port")


// config
app.use(express.static(__dirname + '/src'));


// Routes


app.get("/", (req, res) => {
    res.send("Hello, World desde el index!");
})
app.get("/login", (req, res) => {
    res.sendFile(__dirname + "/src/server/Pagues/Login.html");
})

