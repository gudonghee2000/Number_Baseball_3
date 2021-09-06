export const getHome = (req, res) => {
    res.render("home", { pageTitle: "Home" });
}

export const postHome = (req, res) => {
    res.redirect("/game");
}

