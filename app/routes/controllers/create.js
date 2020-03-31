function create(req, res) {
    res.render("sport", {
        title: "Create sporting event"
    });
}

module.exports = create;