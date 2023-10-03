    process.env.NODE_ENV = process.env.NODE_ENV || 'development';
    const express = require('./config/express');
    const PORT = process.env.PORT || '5000';
    const app = express();

    app.listen(PORT, () => {
        console.log('Server running at http://localhost:5000/');
    });

    module.exports = app;