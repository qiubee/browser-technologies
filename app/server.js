const express = require("express");
const hbs = require("express-handlebars");
const router = require("./routes/router");

// server
const app = express();
const port = 3000;

// set handlebars as templating engine
app.set("view engine", "hbs");
app.set("views", __dirname + "/views");
app.engine( "hbs", hbs( { 
    extname: "hbs", 
    defaultLayout: "default", 
    layoutsDir: __dirname + "/views/layouts/",
    partialsDir: __dirname + "/views/partials/"
}));

// use public folder for static files
app.use(express.static("app/public"));

// routing
app.use("/", router);

app.listen(port, function () {
    console.log(`Listening on port ${port}\n(Go to \u001b[1m\u001b[36mlocalhost:${port}\u001b[0m in your browser)`);
});