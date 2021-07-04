const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const cors = require("cors");
const helmet = require("helmet");
const API = require("./api/api");
const PORT = process.env.PORT || 5000;


application = express();

application.use(cors());
application.use(helmet());
application.use(morgan("combined"));

application.use(bodyParser.urlencoded({ extended: true}));
application.use(bodyParser.json());


application.get("/", (request, response) => {
    return response.json("Welcome to Youtube clone");
})

application.use("/api", API);

application.listen(PORT, () => {
    console.log(`Server listening on Port: ${PORT}`);
});