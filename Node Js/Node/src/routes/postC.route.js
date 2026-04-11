const express = require("express");

const router = express.Router();

const { data, std } = require("../controller/postCode");


router.get("/", data);
router.post("/st", std);


module.exports = router;
