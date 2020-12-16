const router = require("express").Router();
const passport = require("passport");

const Pet = require("../models/Pet");

router.get(
	"/",
	passport.authenticate("jwt", { session: false }),
	async (req, res) => {
		try {
			const result = await Pet.find({ user_id: req.user._id });
			res
				.status(200)
				.json({ message: "This is a protected route", pets: result });
		} catch (err) {
			return res.status(500).json({ msg: err });
		}
	}
);

router.get(
	"/:id",
	passport.authenticate("jwt", { session: false }),
	async (req, res) => {
		try {
			const result = await Pet.find({ _id: req.params.id });
			res
				.status(200)
				.json({ message: "This is a protected route", pet: result });
		} catch (err) {
			return res.status(500).json({ msg: err });
		}
	}
);

router.post(
	"/",
	passport.authenticate("jwt", { session: false }),
	async (req, res) => {
		try {
			const result = await Pet.create({ ...req.body, user_id: req.user._id });
			res.status(200).json({ message: "Pet added sucessfully", pet: result });
		} catch (err) {
			console.error(err);
			return res.status(500).json({ msg: err });
		}
	}
);

router.patch(
	"/:id",
	passport.authenticate("jwt", { session: false }),
	async (req, res) => {
		try {
			const result = await Pet.findOneAndUpdate(
				{ _id: req.params.id },
				req.body,
				{ new: true }
			);
			res.status(200).json({ message: "Pet edited sucessfully", pet: result });
		} catch (err) {
			console.error(err);
			return res.status(500).json({ msg: err });
		}
	}
);

router.delete(
	"/:id",
	passport.authenticate("jwt", { session: false }),
	async (req, res) => {
		try {
			const result = await Pet.findOneAndDelete({ _id: req.params.id });
			res.status(200).json({ message: "Pet delete sucessfully", pet: result });
		} catch (err) {
			console.error(err);
			return res.status(500).json({ msg: err });
		}
	}
);

module.exports = router;
