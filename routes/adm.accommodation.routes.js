const router = require("express").Router();
const passport = require("passport");

const Accommodation = require("../models/Accommodation");

router.get(
	"/",
	passport.authenticate("jwt", { session: false }),
	async (req, res) => {
		try {
			const result = await Accommodation.find();
			res
				.status(200)
				.json({ message: "This is a protected route", accommodations: result });
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
			const result = await Accommodation.create(req.body);
			res.status(200).json({ message: "Accommodation added sucessfully", accommodation: result });
		} catch (err) {
			console.error(err);
			return res.status(500).json({ msg: err });
		}
	}
);

router.patch(
	"/",
	passport.authenticate("jwt", { session: false }),
	async (req, res) => {
		try {
			const result = await Accommodation.findOneAndUpdate(
				{ _id: req.body.id },
				req.body,
				{ new: true }
			);
			res.status(200).json({ message: "Accommodation edited sucessfully", accommodation: result });
		} catch (err) {
			console.error(err);
			return res.status(500).json({ msg: err });
		}
	}
);

router.delete(
	"/",
	passport.authenticate("jwt", { session: false }),
	async (req, res) => {
		try {
			const result = await Accommodation.findOneAndDelete({_id: req.body.id });
			res.status(200).json({ message: "Pet delete sucessfully", accommodation: result });
		} catch (err) {
			console.error(err);
			return res.status(500).json({ msg: err });
		}
	}
);

module.exports = router;
