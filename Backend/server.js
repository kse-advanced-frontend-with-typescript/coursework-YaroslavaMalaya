const express = require('express');
const cors = require('cors');
const { connectToDatabase } = require('./mongodb');
const bcrypt = require('bcrypt');
const fetch = require('node-fetch');
const { UserModel } = require('./user');
const jwt = require('jsonwebtoken');

const app = express();
const PORT = 3015;

const API_KEY = 'JpmGPvNCVwkJgcwRlS81SzsDIe5qYDKK2KVQmVOXJ6yCOlBmJB2JprD9';
const BASE_URL = 'https://api.pexels.com/v1';
const SECRET = 'secretForToken';

app.use(cors());
app.use(express.json());

connectToDatabase();

app.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        let user = await UserModel.findOne({ email });

        if (user) {
            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) return res.status(401).json({ error: 'Invalid password' });

            const token = jwt.sign({ userId: user._id }, SECRET);
            return res.status(200).json({ message: 'Login successful', token });
        } else {
            const hashedPassword = await bcrypt.hash(password, 10);
            const newUser = new UserModel({ email, password: hashedPassword, collections: [] });
            await newUser.save();

            const token = jwt.sign({ userId: newUser._id }, SECRET);
            return res.status(201).json({ message: 'User created', token });
        }
    } catch (err) {
        console.error('Login error:', err);
        res.status(500).json({ error: err.message });
    }
});

app.get('/api/search', async (req, res) => {
    const { query, page = 1, per_page = 80 } = req.query;

    try {
        const response = await fetch(`${BASE_URL}/search?query=${encodeURIComponent(query)}&per_page=${per_page}&page=${page}`, {
            headers: {
                Authorization: API_KEY,
            },
        });

        if (!response.ok) {
            return res.status(response.status).json({ error: await response.text() });
        }

        const data = await response.json();
        res.json(data);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.get('/api/photo/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const response = await fetch(`${BASE_URL}/photos/${id}`, {
            headers: {
                Authorization: API_KEY,
            },
        });

        if (!response.ok) {
            return res.status(response.status).json({ error: await response.text() });
        }

        const data = await response.json();
        res.json(data);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.get('/user/collections', async (req, res) => {
    const token = req.headers.authorization?.split(' ')[1];

    if (!token) return res.status(401).json({ error: 'No token provided' });

    try {
        const decoded = jwt.verify(token, SECRET);
        const user = await UserModel.findById(decoded.userId);

        if (!user) return res.status(404).json({ error: 'User not found' });

        res.status(200).json({
            _id: user._id.toString(),
            email: user.email,
            collections: user.collections.map((collection) => ({
                _id: collection._id.toString(),
                name: collection.name,
                photosId: collection.photosId,
            })),
        });
    } catch (err) {
        res.status(401).json({ error: 'Invalid token' });
    }
});

app.post('/user/add-collections', async (req, res) => {
    const token = req.headers.authorization?.split(' ')[1];
    const { name, description } = req.body;

    if (!token) return res.status(401).json({ error: 'No token provided' });
    if (!name) return res.status(400).json({ error: 'Missing name for collection' });

    try {
        const decoded = jwt.verify(token, SECRET);
        const user = await UserModel.findById(decoded.userId);

        const newCollection = {
            name,
            description,
            photosId: [],
        };

        user.collections.push(newCollection);
        await user.save();

        const createdCollection = user.collections[user.collections.length - 1];
        res.status(201).json({
            _id: createdCollection._id.toString(),
            name: createdCollection.name,
            description: createdCollection.description,
            photosId: createdCollection.photosId
        });
    } catch (err) {
        res.status(401).json({ error: 'Invalid token' });
    }
});

app.patch('/user/add-collections/:collectionId/photo', async (req, res) => {
    const token = req.headers.authorization?.split(' ')[1];
    const { collectionId } = req.params;
    const { photoId } = req.body;

    if (!token) return res.status(401).json({ error: 'No token provided' });

    try {
        const decoded = jwt.verify(token, SECRET);
        const user = await UserModel.findById(decoded.userId);

        if (!user) return res.status(404).json({ error: 'User not found' });

        const collection = user.collections.id(collectionId);
        if (!collection) return res.status(404).json({ error: 'Collection not found' });

        if (!collection.photosId.includes(photoId)) {
            collection.photosId.push(photoId);
        }

        await user.save();
        res.status(200).json({ message: 'Photo added successfully' });
    } catch (err) {
        res.status(401).json({ error: 'Invalid token' });
    }
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
