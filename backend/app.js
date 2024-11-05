// backend/app.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const Scheduler = require('./scheduler');

const app = express();
const scheduler = new Scheduler();

app.use(bodyParser.json());
app.use(cors());

// Add event endpoint
app.post('/api/events', (req, res) => {
    const { start_time, end_time } = req.body;
    if (scheduler.addEvent({ start_time, end_time })) {
        res.status(200).json({ success: true });
    } else {
        res.status(409).json({ success: false, message: 'Event overlaps with an existing event' });
    }
});

// Get all events
app.get('/api/events', (req, res) => {
    res.json(scheduler.getEvents());
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
