const { Post } = require("../../models");
const app = require("../../server");

app.post("/add", upload.single("image"), (req, res) => {
    cloudinary.v2.uploader.upload(req.file.path, function (err, result) {
        if (err) {
            req.json(err.message);
        }
        req.body.image = result.secure_url;
        req.body.imageId = result.public_id;

        Post.create(req.body, function (err, image) {
            if (err) {
                res.json(err.message);
                return res.redirect("/");
            }
        });
    });
});

app.get("/", (req, res) => {
    Post.find(function (err, images) {
        if (err) {
            res.json(err.message);
        } else {
            res.json(images);
        }
    });
});