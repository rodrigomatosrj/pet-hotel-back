require("dotenv").config();
const express = require("express");
const cors = require("cors");
const db = require("./config/db.config");
const passportConfig = require("./config/passport.config");
const uploader = require("./config/cloudinary.config");

const app = express();

app.use(express.json());
app.use(cors());

db();
passportConfig(app);

const userRouter = require("./routes/user.routes");
app.use("/api/user", userRouter);

const clientRouter = require("./routes/client.routes");
app.use("/api/client", clientRouter);

const petsRouter = require("./routes/pets.routes");
app.use("/api/pet", petsRouter);

const bookingRouter = require("./routes/booking.routes");
app.use("/api/booking", bookingRouter);

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
