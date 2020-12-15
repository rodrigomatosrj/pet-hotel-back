const { Schema, model } = require("mongoose");

const ClientSchema = new Schema({
	name: { type: String, required: true, unique: true },
	mobile: { type: String, required: true },
	adress: {
		street: { type: String, required: true },
		number: { type: String, required: true },
		complement: { type: String, requires: true },
		city: { type: String, required: true },
		state: { type: String, required: true },
		zipcode: { type: String, required: true },
	},
	pets_id: [{ type: Schema.Types.ObjectId, ref: "Pet" }],
	user_id: { type: Schema.Types.ObjectId, ref: "User" },
});

const ClientModel = model("Client", ClientSchema);

module.exports = ClientModel;
