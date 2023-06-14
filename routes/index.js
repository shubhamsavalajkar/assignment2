var express = require("express");
var router = express.Router();

router.get("/", function (req, res, next) {
  res.render("index", { title: "home" });
});

router.get("/home", function (req, res, next) {
  res.render("index", { title: "home" });
});

router.get("/about_me", function (req, res, next) {
  res.render("about_me", { title: "about me" });
});

router.get("/projects", function (req, res, next) {
  res.render("projects", { title: "projects" });
});

router.get("/services", function (req, res, next) {
  res.render("services", { title: "services" });
});

router.get("/contact_me", function (req, res, next) {
  res.render("contact_me", { title: "contact me" });
});

module.exports = router;
