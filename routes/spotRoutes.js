const express = require("express");
const {
  getSpots,
  getSpot,
  putSpot,
  deleteSpot,
  postSpot,
} = require("../controllers/spotsController");
const router = express.Router();

router.get("/", getSpots);

router.post("/", postSpot);

router.get("/:id", getSpot);

router.put("/:id", putSpot);

router.delete("/:id", deleteSpot);

module.exports = router;
