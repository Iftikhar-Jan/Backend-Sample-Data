import express from "express";
import posts from "./data/post-data.js";
const app = express();

app.get('/', (req, res) => {
    res.json("Welcome to Frontend");
});

// Get all posts
app.get('/posts', (req, res) => {
    res.json(posts);
});

// Get post by ID
app.get('/posts/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    const post = posts.find(p => p.id === userId);

    if (post) {
        res.json(post);
    } else {
        res.status(404).json({ message: "Post not found" });
    }
});

app.listen(5000, () => {
    console.log(`Server is running on http://localhost:5000`);
});
