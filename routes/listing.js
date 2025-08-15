const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const { listingSchema } = require("../schemas.js");
const ExpressError = require("../utils/ExpressError.js");
const Listing = require("../models/listing.js");
const { isLoggedIn } = require("../middleware.js");
const { isOwner } = require("../middleware.js");
const listingController = require("../controllers/listings.js");
//! validateListing

const validateListing = (req, res, next) => {
  let { error } = listingSchema.validate(req.body);

  console.log(error);

  if (error) {
    let errMsg = error.details.map((el) => el.message).join(",");
    throw new ExpressError(400, errMsg);
  } else {
    next();
  }
};

router.route("/").get(wrapAsync(listingController.index));

// //!Index Route
// router.get("/", wrapAsync(listingController.index));

//!New Route
router.get("/new", isLoggedIn, listingController.renderNewForm);

//!Show Route
router.get("/:id", wrapAsync(listingController.showListing));

//!Create Route
router.post("/", isLoggedIn, wrapAsync(listingController.createListing));

//!Edit Route
router.get("/:id/edit", isLoggedIn, wrapAsync(listingController.editListing));

//!Update Route
router.put(
  "/:id",
  isLoggedIn,
  isOwner,
  wrapAsync(listingController.updateListing)
);

//!Delete Route
router.delete("/:id", isLoggedIn, wrapAsync(listingController.destroyListing));

module.exports = router;
