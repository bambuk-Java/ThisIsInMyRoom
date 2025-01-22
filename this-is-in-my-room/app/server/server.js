const express = require("express");
const cors = require("cors"); // Importiere CORS
const fs = require("fs");
const path = require("path");

const app = express();
const imageFolder = path.join(__dirname, "../../public/kleineLandschaften");

// CORS-Middleware aktivieren
app.use(cors({ origin: "http://localhost:3000" })); // Nur Anfragen von localhost:3000 erlauben

app.get("/api/images", (req, res) => {
    fs.readdir(imageFolder, (err, files) => {
        if (err) {
            return res.status(500).json({ error: "Could not list images" });
        }
        const images = files.filter(file => /\.(jpg|jpeg|png|gif)$/i.test(file));
        res.json(images.map(file => `/kleineLandschaften/${file}`));
    });
});

app.listen(8080, () => console.log("Server running on http://localhost:8080"));