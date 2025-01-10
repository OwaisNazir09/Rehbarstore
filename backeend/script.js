require("dotenv").config();
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');  // Import path module
const productRoutes = require('./routes/productRoutes');
const passport = require("passport");
const session = require("express-session");
const GoogleStrategy = require("passport-google-oauth20").Strategy;

const cors = require('cors');
const app = express();


app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

try {
  const connectiondetail = mongoose.connect("");
  if (!connectiondetail) {
    console.log("Error while connecting to the server");
  } else {
    console.log("Connection established successfully");
  }
} catch (err) {
  console.log("500 server error: " + err);
}






app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


//====================================================================================================

app.use(
  session({
    secret: "secret",
    resave: false,
    saveUninitialized: true,
  })
);

app.use(passport.initialize());
app.use(passport.session());

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "http://localhost:3000/auth/google/callback",
    },
    (accessToken, refreshToken, profile, done) => {
      return done(null, profile);
    }
  )
);

passport.serializeUser((user, done) => done(null, user));
passport.deserializeUser((user, done) => done(null, user));

// app.get("/", (req, res) => {
//   res.send("<a href='/auth/google'>Login with Google</a>");
// });

app.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

app.get(
  "/auth/google/callback",
  passport.authenticate("google", { failureRedirect: "/" }),
  (req, res) => {
    res.redirect("/profile");
  }
);

app.get("/profile", (req, res) => {
  res.send(`Welcome ${req.user.displayName}`);
});

app.get("/logout", (req, res) => {
  req.logout(() => {
    res.redirect("/");
  });
});
app.use("/", productRoutes);
app.post("/addproduct/topwear", productRoutes);
app.post("/addproduct/book", productRoutes);
app.get("/book/:id", productRoutes);



const PORT = 3200;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
