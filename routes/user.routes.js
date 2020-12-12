const router = require("express").Router();
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const passport = require("passport");
const jwt = require("jsonwebtoken");

const User = require("../models/User");

router.post("/signup", async (req, res) => {
	const { email, password } = req.body;
	const errors = {};
	if (!email || !email.match(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/)) {
		errors.email = "Email is required and should be a valid email address";
	}
	if (
		!password ||
		!password.match(
			/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/
		)
	) {
		errors.password =
			"Password is required, should be at least 8 characters long, should contain an uppercase letter, lowercase letter, a number and a special character";
	}
	if (Object.keys(errors).length) {
		return res.status(400).json({ errors });
	}
	try {
		const saltRounds = 10;
		const salt = await bcrypt.genSalt(saltRounds);
		const passwordHash = await bcrypt.hash(password, salt);
		const result = await User.create({ email, passwordHash });
		return res.status(201).json(result);
	} catch (err) {
		if (err instanceof mongoose.Error.ValidationError) {
			res.status(400).json({ error: err.message });
		} else if (err.code === 11000) {
			res.status(400).json({
				error:
					"Name and email need to be unique. Either username or email is already used.",
			});
		}
	}
});

router.post("/login", (req, res, next) => {
	passport.authenticate("local", (err, user, info) => {
		if (err) {
			return res.status(500).json({ msg: err });
		}
		if (!user || info) {
			return res.status(401).json({ msg: info.message });
		}
		req.login(user, { session: false }, (err) => {
			if (err) {
				return next(err);
			}
			const { email, _id } = user;
			const userObj = { email, _id };
			const token = jwt.sign({ user: userObj }, process.env.TOKEN_SIGN_SECRET);
			return res.status(200).json({ user: userObj, token });
		});
	})(req, res, next);
});




// router.get(
// 	"/profile",
// 	passport.authenticate("jwt", { session: false }),
// 	async (req, res) => {
// 		try {
// 			console.log(req.user);

// 			const result = await User.findOne({ _id: req.user._id }).populate(
// 				"books"
// 			);

// 			res
// 				.status(200)
// 				.json({ message: "This is a protected route", user: result });
// 		} catch (err) {
// 			console.error(err);
// 			return res.status(500).json({ msg: err });
// 		}
// 	}
// );

module.exports = router;
