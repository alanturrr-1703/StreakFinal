const express = require('express');
const router = express.Router();
const connection = require('../db/connection');

// Route to get all users
router.get('/', (req, res) => {
    const query = 'SELECT * FROM users';

    connection.query(query, (err, results) => {
        if (err) {
            console.error('Error fetching users:', err);
            res.status(500).send('Error fetching users');
        } else {
            res.json(results);
        }
    });
});

// Route to get a specific user by ID
router.get('/:userId', (req, res) => {
    const userId = req.params.userId;
    const query = 'SELECT * FROM users WHERE id = ?';

    connection.query(query, [userId], (err, results) => {
        if (err) {
            console.error('Error fetching user:', err);
            res.status(500).send('Error fetching user');
        } else if (results.length === 0) {
            res.status(404).send('User not found');
        } else {
            res.json(results[0]);
        }
    });
});

module.exports = router;
