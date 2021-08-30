const express = require("express");

const { products: ctrl } = require("../controllers");

const router = express.Router();
console.log(ctrl);

router.get("/", ctrl.getAll);
router.get("/:id", ctrl.getbyId);
// router.post("/", ctrl.add);
// router.put("/:id", ctrl.update);
// router.put("/:id", ctrl.update);
// router.delete("/:id", ctrl.remove);

module.exports = router;
