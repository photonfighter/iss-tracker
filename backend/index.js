const axios = require('axios');
const express = require('express');
const app = express();
const port = 3000;

app.get('/current', async (req, res) => {
    const data = await axios.get('http://api.open-notify.org/iss-now.json')
        .catch((err) => {
            res.statusCode = 500;
            res.send({
                error: err,
            });
        });

    const [latitude, longitude] = data['iss_position'];

    res.send({
        lat: latitude,
        lon: longitude
    });
});

app.listen(port, () => {
    console.log(`ISS Tracker backend listening at http://localhost:${port}`);
})