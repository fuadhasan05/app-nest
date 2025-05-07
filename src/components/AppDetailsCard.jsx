import React, { useState } from "react";
import { IoMdStar, IoMdStarOutline } from "react-icons/io";

const AppDetailsCard = ({
  details,
  isInstalled,
  onInstallToggle,
}) => {
  const [review, setReview] = useState(""); 
  const [rating, setRating] = useState(0); 
  const [hoverRating, setHoverRating] = useState(0); 
  const [reviews, setReviews] = useState([]); 
  const [hasInstalled, setHasInstalled] = useState(false); 

  const handleStarClick = (starValue) => {
    setRating(starValue); // Set the rating based on the clicked star
  };

  const handleStarHover = (starValue) => {
    setHoverRating(starValue); // Set hover rating for visual feedback
  };

  const handleStarLeave = () => {
    setHoverRating(0); // Reset hover rating when mouse leaves
  };

  const handleSubmitReview = () => {
    if (review.trim() && rating > 0) {
      // Add the new review to the local state
      setReviews((prevReviews) => [
        ...prevReviews,
        { user: "Anonymous", comment: review, rating },
      ]);
      // Clear the review input and rating
      setReview("");
      setRating(0);
    } else {
      alert("Please provide both a review and a rating.");
    }
  };

  const handleInstallToggle = () => {
    onInstallToggle(); // Call the parent-provided toggle function
    if (!isInstalled) {
      setHasInstalled(true); // Mark as installed if the app is being installed
    }
  };

  if (!details) {
    return <p className="text-center text-gray-500">Loading app details...</p>;
  }

  return (
    <div className="max-w-6xl mx-auto bg-blue-50 rounded-lg mt-10 p-4 sm:p-6 md:p-10">
      <div className="mb-8">
        <div className="flex flex-col-reverse md:flex-row items-center md:items-start gap-6">
          {/* Left side app details */}
          <div className="flex-1 space-y-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">{details.name}</h1>
            <p className="text-blue-600 text-sm sm:text-base">{details.developer}</p>
            <div className="flex flex-wrap items-center gap-6 sm:gap-10">
              <div className="text-center">
                <div className="font-semibold text-base sm:text-lg">{details.downloads}</div>
                <p className="text-gray-600 text-xs sm:text-sm">Downloads</p>
              </div>
              <div className="text-center">
                <p className="font-semibold text-base sm:text-lg">Category</p>
                <div className="text-xs sm:text-sm">{details.category}</div>
              </div>
              <div className="text-center">
                <div className="flex items-center font-semibold text-base sm:text-lg">
                  {details.rating}
                  <IoMdStar />
                </div>
                <p className="text-gray-600 text-xs sm:text-sm">Rated</p>
              </div>
            </div>
            <button
              onClick={handleInstallToggle}
              className={`mt-6 px-6 sm:px-8 md:px-10 py-2 rounded text-white cursor-pointer ${
                isInstalled
                  ? "bg-red-500 hover:bg-red-600"
                  : "bg-blue-500 hover:bg-blue-600"
              }`}
            >
              {isInstalled ? "Uninstall" : "Install"}
            </button>
            <p className="mt-4 text-sm sm:text-base">{details.description}</p>
            {/* Features Section */}
            <h3 className="text-lg sm:text-xl font-semibold mt-6">Features:</h3>
            <ul className="list-disc list-inside text-gray-600 text-sm sm:text-base">
              {details.features?.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
          {/* Thumbnail */}
          <img
            src={details.thumbnail}
            alt={`${details.name} Thumbnail`}
            className="w-24 h-24 sm:w-32 sm:h-32 rounded-lg object-cover"
          />
        </div>
        {/* Banner Image */}
        <img
          src={details.banner}
          alt={`${details.name} Banner`}
          className="mt-10 w-full rounded-lg object-cover"
        />
      </div>

      {/* Submit Review Section */}
      <div className="border border-blue-200 rounded-lg mt-20 p-4 sm:p-6">
        <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4">
          Submit a Review
        </h3>
        <textarea
          placeholder="Write your review here..."
          value={review}
          onChange={(e) => setReview(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4 text-sm sm:text-base"
          disabled={!hasInstalled} // Disable if the app has never been installed
        />
        <div className="flex items-center mb-4">
          <p className="mr-4 text-gray-800 font-semibold text-sm sm:text-base">Rating:</p>
          <div className="flex">
            {[1, 2, 3, 4, 5].map((star) => (
              <span
                key={star}
                onClick={() => hasInstalled && handleStarClick(star)} // Allow rating only if installed
                onMouseEnter={() => hasInstalled && handleStarHover(star)}
                onMouseLeave={handleStarLeave}
                className={`cursor-pointer text-xl sm:text-2xl ${
                  hasInstalled ? "" : "cursor-not-allowed text-gray-300"
                }`}
              >
                {star <= (hoverRating || rating) ? (
                  <IoMdStar className="text-yellow-500" />
                ) : (
                  <IoMdStarOutline className="text-gray-400" />
                )}
              </span>
            ))}
          </div>
        </div>
        <button
          onClick={handleSubmitReview}
          className={`px-4 sm:px-6 py-2 rounded text-white ${
            hasInstalled
              ? "bg-blue-600 hover:bg-blue-700 cursor-pointer"
              : "bg-gray-400 cursor-not-allowed"
          }`}
          disabled={!hasInstalled} // Disable button if the app has never been installed
        >
          Submit Review
        </button>
      </div>

      {/* Reviews Section */}
      <div className="border border-blue-200 rounded-lg p-4 sm:p-6 mt-20">
        <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4">Ratings and reviews</h3>
        <ul className="space-y-4">
          {reviews.map((review, index) => (
            <li key={index} className="">
              <p className="text-gray-800 text-base">{review.user}</p>
              <p className="text-yellow-500 flex items-center text-sm sm:text-base">
                Rating: {review.rating} <IoMdStar className="ml-1" />
              </p>
              <p className="text-gray-600 text-sm sm:text-base">{review.comment}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AppDetailsCard;