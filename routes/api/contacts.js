const express = require("express");

const ctrl = require("../../controllers/contacts");

const { validateBody, isValidId, authenticate } = require("../../middlewares");
const { schemas } = require("../../models/contact");

const router = express.Router();

router.get("/", authenticate, ctrl.getAll);

router.get("/:contactId", authenticate, isValidId, ctrl.getById);

router.post("/", authenticate, validateBody(schemas.addSchema), ctrl.add);

router.delete("/:contactId", authenticate, isValidId, ctrl.deleteById);

router.put("/:contactId", authenticate, isValidId, ctrl.updateById);

router.patch(
  "/:contactId/favorite",
  authenticate,
  validateBody(schemas.updateStatusSchema),
  isValidId,
  ctrl.updateStatus,
);

module.exports = router;
