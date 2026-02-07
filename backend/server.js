const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { Storage } = require('@google-cloud/storage');

const app = express();

// ===============================
// Middlewares
// ===============================
app.use(bodyParser.json());
app.use(cors());

// ===============================
// Google Cloud Storage Config
// ===============================
const storage = new Storage({
    keyFilename: './credentials.json' // UPDATE PATH IF NEEDED
});

const bucketName = 'userdata-storage';
const bucket = storage.bucket(bucketName);

// ===============================
// Routes
// ===============================

// Health check
app.get('/', (req, res) => {
    res.send('Backend is running');
});

// Login route (unique username)
app.post('/login', async (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({
            message: 'Username and password are required'
        });
    }

    // Normalize username
    const safeUsername = username.trim().toLowerCase();
    const file = bucket.file(`users/${safeUsername}.txt`);

    try {
        // Check if user already exists
        const [exists] = await file.exists();
        if (exists) {
            return res.status(409).json({
                message: 'Username already exists'
            });
        }

        const content = `Username: ${safeUsername}\nPassword: ${password}`;

        await file.save(content, {
            contentType: 'text/plain'
        });

        res.json({
            message: 'User stored successfully'
        });

    } catch (err) {
        console.error('Storage Error:', err);
        res.status(500).json({
            message: 'Failed to store user'
        });
    }
});

// ===============================
// Start Server
// ===============================
const PORT = 3000;

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Backend running on port ${PORT}`);
});
