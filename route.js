const router = require("express").Router();
const controller = require("./controller");

router.post("/login", controller.Login);
router.post("/signup", controller.SignUp);

module.exports = router;
