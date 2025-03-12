const express = require("express");
const app = express();

app.use(express.json());
const PORT = 3000;

// GET API to return query and path params
app.get("/api/user/:id", (req, res) => {
    const pathParam = req.params.id;
    const queryParam = req.query.name;

    res.json({
        message: "Received parameters successfully",
        pathParam: pathParam,
        queryParam: queryParam || "No query param provided"
    });
});

//GET Request : http://localhost:3000/api/user/222?name=abc

// POST API to accept JSON data and return an array
app.post("/api/data", (req, res) => {
    const data = req.body;

    if (!data || Object.keys(data).length === 0) {
        return res.status(400).json({ error: "No data provided" });
    }

    // Return an array with the received data
    res.json([data]);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
