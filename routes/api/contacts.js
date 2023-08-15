const express = require("express");

const ctrl = require("../../controllers/contacts");

const {isValidId} = require("../../middlewares")

const router = express.Router();

router.get("/", ctrl.getAll);

router.get("/:contactId", isValidId, ctrl.getById);

router.post("/", ctrl.add);

// router.delete("/:id", ctrl.deleteById);

router.put("/:contactId", isValidId, ctrl.updateById);

router.patch("/:contactId/favorite", isValidId, ctrl.updateStatus);

module.exports = router;
