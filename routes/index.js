var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function(req, res) {
	res.render("index");
});

router.get("/index", function(req, res) {
	res.redirect("/");
});

router.get("/blog", function(req, res) {
	res.render("blog/index");
});

router.get("/blog/index", function(req, res) {
	res.redirect("/blog");
});


router.get("/blog/about", function(req, res) {
	res.render("blog/about");
});

router.get("/blog/blog/about", function(req, res) {
	res.redirect("blog/about");
});

router.get("/blog/contact", function(req, res) {
	res.render("blog/contact");
});

router.get("/blog/blog/contact", function(req, res) {
	res.redirect("blog/contact");
});

router.get("/blog/post", function(req, res) {
	res.render("blog/post");
});

router.get("/blog/blog/post", function(req, res) {
	res.redirect("blog/post");
});

module.exports = router;
