const express = require("express");

const router = express.Router();

const { getData, getSingledata, createData, updateData, deleteData } = require("../controller/controllerApis")

router.get("/", getData);
router.get("/:id", getSingledata);
router.post("/", createData);
router.put("/:id", updateData);
router.delete("/:id", deleteData);


module.exports = router;
