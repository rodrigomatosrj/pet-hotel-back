const router = require("express").Router();
const passport = require("passport");

router.post(
	"/",
	passport.authenticate("jwt", { session: false }),
	async (req, res) => {
		try {
			const result = await Payment.create({ user_id: req.user._id }, req.body);
			setTimeout(() => {
				res.status(200).json({ message: "Payment received sucessfully" });
			}, 6000);
		} catch (err) {
			console.error(err);
			return res.status(500).json({ msg: err });
		}
	}
);

module.exports = router;
