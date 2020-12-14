const passport = require("passport");
const bcrypt = require("bcryptjs");
const LocalStrategy = require("passport-local").Strategy;
const JWTStrategy = require("passport-jwt").Strategy;
const ExtractJWT = require("passport-jwt").ExtractJwt;
const GoogleStrategy = require("passport-google-oauth20").Strategy;

const User = require("../models/User");

function configurePassport(app) {
	app.use(passport.initialize());
	passport.use(
		new LocalStrategy(
			{ usernameField: "email", passwordField: "password" },
			async (username, password, done) => {
				try {
					const foundUser = await User.findOne({ email: username });
					if (!foundUser) {
						return done(null, false, {
							message: "This email is not registered yet",
						});
					}
					if (!bcrypt.compareSync(password, foundUser.passwordHash)) {
						return done(null, false, {
							message: "Incorrect password",
						});
					}

					return done(null, foundUser);
				} catch (err) {
					console.error(err);
					return done(err);
				}
			}
		)
	);

	passport.use(
		new JWTStrategy(
			{
				secretOrKey: process.env.TOKEN_SIGN_SECRET,
				jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
			},
			(token, done) => {
				try {
					return done(null, token.user);
				} catch (err) {
					done(err);
				}
			}
		)
	);

	passport.use(
		new GoogleStrategy(
			{
				clientID: process.env.GOOGLE_CLIENT_ID,
				clientSecret: process.env.GOOGLE_CLIENT_SECRET,
				callbackURL: "/api/auth/google/callback",
			},
			async (accessToken, refreshToken, profile, done) => {
				try {
					const foundUser = User.findOne({ googleID: profile.id });
					if (foundUser) {
						return done(null, foundUser);
					}
					const newUser = User.create({ googleID: profile.id });
					return done(null, newUser);
				} catch (err) {
					done(err);
				}
			}
		)
	);
}

module.exports = configurePassport;
