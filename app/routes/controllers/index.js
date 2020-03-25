function index(req, res) {
    res.render("index", {
        title: "Setrack - Track sporting events yourself"
    });
}

module.exports = index;