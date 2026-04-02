const express = require("express");

const router = express.Router();

const { data, std } = require("../controller/postCode");


router.get("/", data);

router.get("/std", std);

module.exports = router;
