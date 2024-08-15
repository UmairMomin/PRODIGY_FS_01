let express = require("express");
let port = 3000;
let app = express();
app.set("view engine", "ejs");
app.set("views", "./view");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
app.use(cookieParser());
bodyParser.urlencoded({ extended: true });
app.use(bodyParser.json());
app.use(express.static(__dirname + "/public"));

// Routes
const login = require("./routes/loginRoute");
const signup = require("./routes/signupRoute");

// Using the routes
app.use("/", login);
app.use("/signup", signup);

// Mongodb database connection
const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://umairMomin:Diamond%402022@cluster0.iebums1.mongodb.net/UserAuthentication",
    { useNewUrlParser: true }
  )
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log("Error connecting to MongoDB", err);
  });

app.listen(port, (err) => {
  if (err) throw err;
  else console.log(`server started on ${port}`);
});
