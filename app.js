const express = require('express');
const cors = require('cors');
const config = require("./config");
const driverRoutes = require('./routes/driver-routes')

const app = express();

app.use(cors());

app.use('/', driverRoutes.routes);

app.listen(config.port, () => {
    console.log("server is now running on localhost:" + config.port);
});