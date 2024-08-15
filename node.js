const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/submit-appointment', (req, res) => {
    const { studentName, teacherName, date, time, subject, message } = req.body;
    
    // Here, save the data to the database or perform any other action

    res.send('Appointment successfully booked!');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
