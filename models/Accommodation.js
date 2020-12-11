const { Schema, model } = require("mongoose");

const AccommodationSchema = new Schema({
	name: { type: String, required: true },
	capacity: Number,
	available: { type: Boolean, default: false },
	value: { type: Number, required: true },
	type: { type: String, enum: ["type1", "type2", "type3"] },
	accommodation_id: { type: Schema.Types.ObjectId, ref: "Accommodation" },
});

const AccommodationModel = model("Accommodation", AccommodationSchema);

module.exports = AccommodationModel;
