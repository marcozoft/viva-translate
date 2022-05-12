const mongoose = require("mongoose");

mongoose
    .connect(process.env.URI, {})
    .then(() => console.log("db connect"))
    .catch((e) => console.log("connection error: " + e));


// viva-test wlnl4V5AN4fKwZsL