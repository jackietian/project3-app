const express = require("express");
const router = express.Router();

const { getUsers, signin, signup } = require("../controllers/user.controller");

router.get("/", getUsers);
router.post("/signup", signup);
router.post("/signin", signin);

module.exports = router;
