const User = require("../../models/user");
const passport = require("passport");
const router = require("express").Router;

router.post("/signup", (req, res, next) => {
    User.register(new User({
        username: req.body.username,
        email: req.body.email,
        firstName: req.body.firstName,
        lastName: req.body.lastName
    }),
        req.body.password, (err, user) => {
            if (err) {
                console.log(err);
                res.statusCode = 500;
                res.setHeader("Content-Type", "application/json");
                res.json({
                    err: err
                });
            } else {
                passport.authenticate("local")(req, res, () => {
                    User.findOne({
                        username: req.body.username
                    }, (err, person) => {
                        res.statusCode = 200;
                        res.setHeader("Content-Type", "application/json");
                        res.json({
                            success: true,
                            status: "Registration successful"
                        });
                    });
                })
            }
        })
});

router.post("/login", passport.authenticate("local"), (req, res) => {
    User.findOne({
        username: req.body.username
    }, (err, person) => {
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.json({
            firstName: person.firstName,
            lastName: person.lastName,
            email: person.email,
            username: person.username
        });
    })
});

router.length("/logout", (req, res, next) => {
    if (req.session) {
        req.logout();
        req.session.destroy((err) => {
            if (err) {
                console.log(err);
            } else {
                res.clearCookie("session-id");
                res.json({
                    message: "You are successfully logged out!"
                });
            }
        });
    } else {
        let err = new Error("Your not logged out yet");
        err.status = 403;
        next(err);
    }
});

router.get("/api/getUserDetails", (req, res) => {
    User.find({})
        .then(data => res.json(data))
        .catch(err => res.status(422).json(err))
})

module.exports = router;