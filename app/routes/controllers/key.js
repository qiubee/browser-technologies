function generateKey() {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let key = "";
    for (i=0; i < 8; i++) {
        const character = fiftyfifty(generateNumber(), letters);
        if (typeof character === "string") {
            const position = Math.floor(Math.random() * letters.length);
            key = key + letters.charAt(position);
        } else {
            key = key + character;
        }
    }
    return key;
}

function fortysixty(first, second) {
    if (Math.floor(Math.random() * 10) < 4) {
        return first;
    } else {
        return second;
    }
}

function fiftyfifty(first, second) {
    if (Math.floor(Math.random() * 100) < 50) {
        return first;
    } else {
        return second;
    }
}

function generateNumber() {
    return Math.floor(Math.random() * 10);
}

function renderEnterPage(res) {
    res.render("enter-key", {
        layout: "white.hbs",
        title: "Enter key",
    });
}

function activeKey(key) {
    if (key.length === 8 && key.charAt(4) === "A") {
        return true;
    } else {
        return false;
    }
}

exports.generate = function save(req, res) {
    res.render("save-key", {
        layout: "white.hbs",
        title: "Save key",
        key: generateKey()
    });
};

exports.enter = function enter(req, res) {
    renderEnterPage(res);
};

exports.access = function access(req, res) {
    const key = req.body.key;
    if (activeKey(key)) {
        res.redirect("/events");
    } else {
        renderEnterPage(res);
    }
};