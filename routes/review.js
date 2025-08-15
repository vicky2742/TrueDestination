const express = require("express");
const router = express.Router({ mergeParams: true });
const wrapAsync = require("../utils/wrapAsync.js");
const { reviewSchema } = require("../schemas.js");
const ExpressError = require("../utils/ExpressError.js");
const Review = require("../models/review.js");
const Listing = require("../models/listing.js");
const { isLoggedIn } = require("../middleware.js");

const reviewsController = require("../controllers/reviews.js");
//! validateListing

const reviewValidate = (req, res, next) => {
  let { error } = reviewSchema.validate(req.body);

  console.log(error);

  if (error) {
    let errMsg = error.details.map((el) => el.message).join(",");
    throw new ExpressError(400, errMsg);
  } else {
    next();
  }
};

//!Reviews route

router.post("/", reviewValidate, wrapAsync(reviewsController.createReview));

//!Delete Reviews route

router.delete(
  "/:reviewId",
  isLoggedIn,
  wrapAsync(reviewsController.deleteReview)
);

module.exports = router;
