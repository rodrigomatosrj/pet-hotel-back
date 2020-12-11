const router = require("express").Router();
const passport = require("passport");

const Client = require("../models/Client");

router.get(
	"/",
	passport.authenticate("jwt", { session: false }),
	async (req, res) => {
		try {
			const result = await Client.findOne({ user_id: req.user._id });
			res
				.status(200)
				.json({ message: "This is a protected route", user: result });
		} catch (err) {
			console.error(err);
			return res.status(500).json({ msg: err });
		}
	}
);

router.post(
	"/",
	passport.authenticate("jwt", { session: false }),
	async (req, res) => {
		try {
			const result = await Client.create({...req.body, client_id: req.user._id});
			res
				.status(200)
				.json({ message: "Client added sucessfully", user: result });
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
			const result = await Client.findOneAndUpdate({user_id: req.user._id}, req.body);
			res
				.status(200)
				.json({ message: "Client edited sucessfully", user: result });
		} catch (err) {
			console.error(err);
			return res.status(500).json({ msg: err });
		}
	}
);

module.exports = router;
