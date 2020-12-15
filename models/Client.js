const { Schema, model } = require("mongoose");

const ClientSchema = new Schema({
	name: { type: String, required: true, unique: true },
	mobile: { type: String, required: true },
	adress: {
		street: { type: String, required: true },
		number: { type: Number, required: true },
		complement: { type: String, requires: true },
		city: { type: String, required: true },
		state: { type: String, enum: ["Acre", "Alagoas", "Amapá", "Amazonas", "Bahia", "Ceará", "Distrito Federal", "Espírito Santo", "Goiás", "Maranhão", "Mato Grosso", "Mato Grosso do Sul", "Minas Gerais", "Pará", "Paraíba", "Paraná", "Pernambuco", "Piauí", "Rio de Janeiro", "Rio Grande do Norte", "Rio Grande do Sul", "Rondônia", "Roraima", "Santa Catarina", "São Paulo", "Sergipe", "Tocantins"], required: true },
		zipcode: { type: Number, required: true },
	},
	pets_id: [{ type: Schema.Types.ObjectId, ref: "Pet" }],
	user_id: { type: Schema.Types.ObjectId, ref: "User" },
});

const ClientModel = model("Client", ClientSchema);

module.exports = ClientModel;
