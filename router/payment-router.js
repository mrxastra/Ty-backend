const express = require("express");
const router = express.Router();

const PaymentForm = require("../controller/payment-controller");

router.route("/payment").post(PaymentForm);

module.exports = router;
