const router = require("express").Router();
const passport = require("passport");
const Payment = require("../models/Payment");
const Booking = require("../models/Booking");

router.post(
	"/",
	passport.authenticate("jwt", { session: false }),
	async (req, res) => {
		try {
			await Payment.create({ user_id: req.user._id }, req.body);
			await Booking.findOneAndUpdate(
				{ _id: req.body.booking_id },
				{ payment: true }
			);
			setTimeout(() => {
				res.status(200).json({ message: "Payment received sucessfully!!!" });
			}, 6000);
		} catch (err) {
			console.error(err);
			return res.status(500).json({ msg: err });
		}
	}
);

module.exports = router;
