const router = require("express").Router();
const passport = require("passport");

router.get("/google", (req, res, next) => {
	passport.authenticate("google", {
		scope: [
			"https://www.googleapis.com/auth/userinfo.profile",
			"https://www.googleapis.com/auth/userinfo.email",
		],
	})(req, res, next);
});

router.get("/google/callback", (req, res, next) => {
	passport.authenticate("google", {
		successRedirect: "/dashboard",
		failureRedirect: "/", // here you would redirect to the login page using traditional login approach
	})(req, res, next);
});

module.exports = router;
