require("dotenv").config();
const express = require("express");
const cors = require("cors");
const db = require("./config/db.config");
const passportConfig = require("./config/passport.config");
const uploader = require("./config/cloudinary.config");
const path = require("path");

const app = express();
const publicPath = path.join(__dirname, "public");

app.use(express.static(publicPath));
app.use(express.json());
app.use(cors());

db();
passportConfig(app);

app.get("*", (req, res, next) => {
	const hostUrl = req.originalUrl;
	if (!hostUrl.includes("/api")) {
		return res.sendFile(path.join(publicPath, "index.html"));
	}
	return next();
});

const userRouter = require("./routes/user.routes");
app.use("/api/user", userRouter);

const clientRouter = require("./routes/client.routes");
app.use("/api/client", clientRouter);

const petsRouter = require("./routes/pets.routes");
app.use("/api/pet", petsRouter);

const bookingRouter = require("./routes/booking.routes");
app.use("/api/booking", bookingRouter);

const paymentRouter = require("./routes/payment.routes");
app.use("/api/payment", paymentRouter);

const authRouter = require("./routes/auth.routes");
app.use("/api/auth", authRouter);

const admAccommodationRouter = require("./routes/adm.accommodation.routes");
app.use("/api/adm/accommodation", admAccommodationRouter);

app.post("/api/file-upload", uploader.single("img-upload"), (req, res) => {
	if (!req.file) {
		return res.status(500).json({ msg: "No file uploaded!" });
	}
	return res.status(200).json({ fileUrl: req.file.secure_url });
});

app.listen(Number(process.env.PORT), () =>
	console.log(`Server up and running at port ${process.env.PORT}`)
);
