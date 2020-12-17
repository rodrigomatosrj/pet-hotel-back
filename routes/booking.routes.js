const router = require("express").Router();
const passport = require("passport");
const querystring = require("querystring");

const Booking = require("../models/Booking");
const Accommodation = require("../models/Accommodation");

router.get(
	"/",
	passport.authenticate("jwt", { session: false }),
	async (req, res) => {
		try {
			const result = await Booking.find({ user_id: req.user._id });
			res
				.status(200)
				.json({ message: "This is a protected route", bookings: result });
		} catch (err) {
			return res.status(500).json({ msg: err });
		}
	}
);

router.get(
	"/search",
	//passport.authenticate("jwt", { session: false }),
	async (req, res) => {
		try {
			const startDate = new Date(req.query.startDate);
			const endDate = new Date(req.query.endDate);

			const reservedRooms = await Booking.find({
				start_date: { $lt: startDate, $gt: endDate, $gt: new Date() },
				end_date: { $lt: startDate, $gt: endDate, $gt: new Date() },
			}).select({ _id: 0, accommodation_id: 1 });

			// if (!reservedRooms) {
			// 	const availableRooms = await Accommodation.find();
			// } else {
			// 	const availableRooms = await Accommodation.find({
			// 		_id: { nin: reservedRooms },
			// 	});
			// }

			const availableRooms = await Accommodation.find();

			res.status(200).json({
				message: "Avialable Rooms",
				bookings: availableRooms,
			});
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
			const result = await Booking.findOne({ _id: req.params.id });
			res
				.status(200)
				.json({ message: "This is a protected route", booking: result });
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
			const result = await Booking.create({
				...req.body,
				user_id: req.user._id,
			});
			res
				.status(200)
				.json({ message: "Booking added sucessfully", booking: result });
		} catch (err) {
			console.error(err);
			return res.status(500).json({ msg: err });
		}
	}
);

router.put(
	"/",
	passport.authenticate("jwt", { session: false }),
	async (req, res) => {
		try {
			const result = await Booking.findOneAndReplace(
				{ _id: req.body.id },
				req.body,
				{ new: true }
			);
			res
				.status(200)
				.json({ message: "Booking edited sucessfully", booking: result });
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
			const result = await Booking.findOneAndDelete({ _id: req.body.id });
			res
				.status(200)
				.json({ message: "Pet delete sucessfully", booking: result });
		} catch (err) {
			console.error(err);
			return res.status(500).json({ msg: err });
		}
	}
);

module.exports = router;
