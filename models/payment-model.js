const { Schema, model } = require("mongoose");

const PaymentSchema = new Schema({
  username: { type: String, required: true },
  phone: { type: String, required: true },
  payment_method: { type: String, required: true },
  amount: { type: String, required: true },
  number: { type: String, required: false },
  time: { type: String },
});
// create a new collections(Model)
const Payment = new model("Payment", PaymentSchema);
module.exports = Payment;
