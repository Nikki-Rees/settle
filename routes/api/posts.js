const router = require("express").Router();
const postsController = require("../../controllers/postsController");

require("../../config/cloudinary.config");
const upload = require("../../config/multer");

// Matches with "/api/posts"
router
  .route("/")
  .get(postsController.findAll)
  .post(postsController.create);

// Matches with "/api/posts/:id"
router
  .route("/:id")
  .get(postsController.findById)
  .put(postsController.update)
  .delete(postsController.remove);

// //Cloudinary upload
// router
//   .post(
//     "",
//     upload.single("image"),
//     postsController.create
//   );



module.exports = router;
