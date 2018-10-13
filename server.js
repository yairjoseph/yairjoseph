//Dependencies
const bodyParser = require("body-parser");
express = require("express");
path = require("path");

//Server Port
const PORT = process.env.PORT || 3000;

// Express App
app = express();

//json Parser
jsonParser  = bodyParser.json();

//Set public directory
app.use(epress.static(path.join(_dirname, "public")))

// User parsers
app.use(urlEncodedParser);
app.use(jsonParser);


//Server run / port listner

.then(() => {
    app.listen(PORT, () => {
        console.log(`yairjoseph.com server is listening on port ${PORT}`);
    });
});

