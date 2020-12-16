const { Schema, model } = require("mongoose");

const BookingSchema = new Schema({
	user_id: { type: Schema.Types.ObjectId, ref: "Client" },
	pets: [{ type: Schema.Types.ObjectId, ref: "Pet" }],
	startDate: { type: Date, required: true },
	endDate: { type: Date, required: true },
	value: { type: Number, required: true },
	payment: { type: Boolean, default: false },
	accommodation_id: { type: Schema.Types.ObjectId, ref: "Accommodation" },
});

const BookingModel = model("Booking", BookingSchema);

module.exports = BookingModel;
