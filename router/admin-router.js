const express = require("express");
const admin = require("../controller/admin-controller");
const authMiddleware = require("../middleware/auth-middleware");
const adminMiddleware = require("../middleware/admin-middleware");
const router = express.Router();

router.get("/users", authMiddleware, adminMiddleware, admin.getAllUsers);
router.get("/users/:id", authMiddleware, adminMiddleware, admin.getUserById);
router.get(
  "/payments/:id",
  authMiddleware,
  adminMiddleware,
  admin.getPaymentsById
);
router.get("/forms/:id", authMiddleware, adminMiddleware, admin.getFormsById);
router.patch(
  "/users/update/:id",
  authMiddleware,
  adminMiddleware,
  admin.updateUserById
);
router.patch(
  "/payments/update/:id",
  authMiddleware,
  adminMiddleware,
  admin.updatePaymentsById
);

router.delete(
  "/users/delete/:id",
  authMiddleware,
  adminMiddleware,
  admin.deleteUserById
);
router.get("/contacts", authMiddleware, adminMiddleware, admin.getAllContacts);
router.get("/payments", authMiddleware, adminMiddleware, admin.getAllPayments);
router.get("/forms", authMiddleware, adminMiddleware, admin.getAllForm);
router.get("/records", authMiddleware, admin.getAllForm);
router.delete("/records/delete/:id", authMiddleware, admin.deleteFormsById);

router.delete(
  "/contacts/delete/:id",
  authMiddleware,
  adminMiddleware,
  admin.deleteContactById
);
router.delete(
  "/forms/delete/:id",
  authMiddleware,
  adminMiddleware,
  admin.deleteFormsById
);
router.delete(
  "/payments/delete/:id",
  authMiddleware,
  adminMiddleware,
  admin.deletePaymentById
);

module.exports = router;
