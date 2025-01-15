const express = require("express");
const {
    getAllData,
    getDetailData,
    addData,
    editData,
    deleteData,
} = require("../controllers/dataController");

const router = express.Router();

router.get("/", getAllData);
router.get("/:id", getDetailData);
router.post("/", addData);
router.put("/:id", editData);
router.delete("/:id", deleteData);

module.exports = router;