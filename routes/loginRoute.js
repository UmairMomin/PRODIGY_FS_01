const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
router.use(bodyParser.urlencoded({ extended: true }));
const { verifyToken, authenticateToken } = require("../middleware/auth");
router.use(authenticateToken);

const { loginUser } = require("../controllers/loginController");

router.get("/", (req, res) => {
  res.render("login", { msg: false });
});

router.get("/logout", authenticateToken, (req, res) => {
  res.clearCookie("token");
  res.redirect("/");
});

router.post("/userlogin", loginUser); //localhost:3000/login/userlogin

module.exports = router;

//localhost:3000/login
