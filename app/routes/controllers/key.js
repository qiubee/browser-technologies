function generateKey() {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let key = "";
    for (i=0; i < 8; i++) {
        const character = fortysixty(generateNumber(), letters);
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

function generateNumber() {
    return Math.floor(Math.random() * 10);
}

exports.save = function save(req, res) {
    res.render("save-key", {
        title: "Save key",
        key: generateKey()
    });
};

exports.enter = function enter(req, res) {
    res.render("enter-key", {
        title: "Enter key",
    });
};