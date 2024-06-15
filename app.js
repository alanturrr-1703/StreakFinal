const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const userStreakRouter = require('./routes/userStreak');
const usersRouter = require('./routes/users');

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use('/users', usersRouter); // This line is important

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
