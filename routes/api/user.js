const User = require("../../models/user");
const passport = require("passport");
const router = require("express").Router();


router.post("/signup", (req, res, next) => {
    console.log(req.body)
    User.register(new User({
        username: req.body.username,
        password: req.body.password

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

            username: person.username
        });
    })
});

router.get("/logout", (req, res, next) => {
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
        let err = new Error("You are not logged in");
        err.status = 403;
        next(err);
    }
});

router.get("/getUserDetails", (req, res) => {
    User.find({})
        .then(data => res.json(data))
        .catch(err => res.status(422).json(err))
})

module.exports = router;