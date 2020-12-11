const { Schema, model } = require("mongoose");

const PetSchema = new Schema({
	name: { type: String, required: true, unique: true },
	animal: {
		type: String,
		enum: ["Rabbit", "Dog", "Cat", "Dinossaur"],
		required: true,
	},
	size: { type: String, enum: ["Big", "Medium", "Small"] },
	breed: { type: String, enum: ["Macho", "Fêmea"] },
	helthy: {
		allergy: [{ type: String }],
		disease: [{ type: String }],
	},
	picture: {
		type: String,
		default:
			"https://images.vexels.com/media/users/3/155407/isolated/preview/84d636131360b843e427a4ff7061ae0a-avatar-de-gato-listrado-by-vexels.png",
	},
	recomendations: String,
	user_id: { type: Schema.Types.ObjectId, ref: "User" },
});

const PetModel = model("Pet", PetSchema);

module.exports = PetModel;
