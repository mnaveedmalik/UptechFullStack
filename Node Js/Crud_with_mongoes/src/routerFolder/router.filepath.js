const express = require("express");

const router = express.Router();

const { createData, getData, getSingledata, updateData, deleteData } = require("../controllerFolder/controller.fileCode");

router.get("/", getData);
router.get("/:id", getSingledata);
router.post("/", createData);
router.put("/:id", updateData);
router.delete("/:id", deleteData);


module.exports = router;
