const express=require("express");
const router = express.Router({mergeParams:true});
const wrapAsync=require("../utils/wrapAsync.js");
const reviewsController=require("../controllers/review.js")

const Listing=require("../models/listing.js");
const Review = require("../models/review.js");
const {validateReview,isLoggedIn,isReviewAuthor}=require("../middleware.js");




//REVIEWS
//POST
router.post("/",isLoggedIn,validateReview,wrapAsync(reviewsController.createReview));

//delete reiew
router.delete("/:reviewId",isLoggedIn,isReviewAuthor,wrapAsync(reviewsController.destroyReview));

module.exports=router;
