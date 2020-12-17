const router = require("express").Router();
const passport = require("passport");
const Payment = require("../models/Payment");
const Booking = require("../models/Booking");

router.post(
	"/",
	passport.authenticate("jwt", { session: false }),
	async (req, res) => {
		try {
			for (let i = 1; i <= 12000; i++) {
				continue;
			}
			await Payment.create(
				{ user_id: req.user._id },
				{ ...req.body, authorization_code: "@231131287#@@!@" }
			);
			await Booking.findOneAndUpdate(
				{ _id: req.body.booking_id },
				{ payment: true }
			);
			setTimeout(() => {
				res.status(200).json({ message: "Payment received sucessfully!!!" });
			}, 5000);
		} catch (err) {
			console.error(err);
			return res.status(500).json({ msg: err });
		}
	}
);

module.exports = router;
