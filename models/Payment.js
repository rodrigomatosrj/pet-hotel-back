const { Schema, model } = require("mongoose");

const PaymentSchema = new Schema({
	booking_id: { type: Schema.Types.ObjectId, ref: "Booking" },
	user_id: { type: Schema.Types.ObjectId, ref: "User" },
	authorization_code: String,
	payment_date: { type: Date, default: Date.Now },
	value: Number,
});

const PaymentModel = model("Payment", PaymentSchema);

module.exports = PaymentModel;
