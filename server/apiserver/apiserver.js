const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// In-memory blog posts storage (for demonstration purposes)
let blogPosts = [
    {
        id: 1,
        title: 'Understanding Placement Trends in 2024',
        content: 'Placement trends are evolving rapidly in 2024...',
        date: '2024-08-20'
    },
    {
        id: 2,
        title: 'Top Skills for Placement Success',
        content: 'To succeed in placements, you need to focus on...',
        date: '2024-08-19'
    }
];

// Get all blog posts
app.get('/api/blogs', (req, res) => {
    res.json(blogPosts);
});

// Get a single blog post by ID
app.get('/api/blogs/:id', (req, res) => {
    const id = parseInt(req.params.id, 10);
    const blogPost = blogPosts.find(post => post.id === id);
    if (blogPost) {
        res.json(blogPost);
    } else {
        res.status(404).json({ error: 'Blog post not found' });
    }
});

// Add a new blog post
app.post('/api/blogs', (req, res) => {
    const { title, content, date } = req.body;
    const newBlogPost = {
        id: blogPosts.length + 1,
        title,
        content,
        date
    };
    blogPosts.push(newBlogPost);
    res.status(201).json(newBlogPost);
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`API Server running on port ${PORT}`));
