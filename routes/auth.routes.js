const router = require("express").Router();
const passport = require("passport");

router.get("/auth/google", (req, res, next) => {
	passport.authenticate("google", {
		scope: [
			"https://www.googleapis.com/auth/userinfo.profile",
			"https://www.googleapis.com/auth/userinfo.email",
		],
	})(req, res, next);
});

router.get("/auth/google/callback", (req, res, next) => {
	passport.authenticate("google", {
		successRedirect: "/private-page",
		failureRedirect: "/", // here you would redirect to the login page using traditional login approach
	})(req, res, next);
});

module.exports = router;