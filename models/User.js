const { Schema, model } = require("mongoose");

const UserSchema = new Schema({
	email: { type: String, required: true, unique: true },
	passwordHash: { type: String, required: true },
	client_id: { type: Schema.Types.ObjectId, ref: "Client" },
});

const UserModel = model("User", UserSchema);

module.exports = UserModel;
