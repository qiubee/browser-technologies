function index(req, res) {
    res.render("index", {
        layout: "white.hbs",
        title: "Setrack - Track sporting events yourself"
    });
}

module.exports = index;