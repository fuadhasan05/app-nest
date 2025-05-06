import React from "react";
import { FaStar } from "react-icons/fa";

const AppDetailsCard = ({
  details,
  isInstalled,
  onInstallToggle,
  review,
  setReview,
  rating,
  setRating,
  handleSubmitReview,
}) => {
  if (!details) {
    return <p className="text-center text-gray-500">Loading app details...</p>;
  }

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
          <img
            src={details.thumbnail}
            alt={`${details.name} Thumbnail`}
            className="w-32 h-32 rounded-lg object-cover"
          />
          <div className="flex-1">
            <h1 className="text-2xl font-bold text-gray-800">{details.name}</h1>
            <p className="text-gray-600">Developer: {details.developer}</p>
            <p className="text-gray-600">Downloads: {details.downloads}</p>
            <p className="text-gray-600">Category: {details.category}</p>
            <p className="text-gray-600">Rating: {details.rating}</p>
            <p className="text-gray-600 mt-4">{details.description}</p>
            <h3 className="text-lg font-semibold mt-6">Features:</h3>

            <button
              onClick={onInstallToggle}
              className={`mt-6 px-4 py-2 rounded text-white ${
                isInstalled
                  ? "bg-red-500 hover:bg-red-600"
                  : "bg-blue-500 hover:bg-blue-600"
              }`}
            >
              {isInstalled ? "Uninstall" : "Install"}
            </button>
          </div>
        </div>
        <img
          src={details.banner}
          alt={`${details.name} Banner`}
          className="mt-6 w-full rounded-lg object-cover"
        />
      </div>

      {/* Submit Review Section */}
      <div className="bg-white shadow-lg rounded-lg p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">
          Submit a Review
        </h3>
        <textarea
          placeholder="Write your review here..."
          value={review}
          onChange={(e) => setReview(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
        />
        <input
          type="number"
          placeholder="Rating (1-5)"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
          min="1"
          max="5"
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
        />
        <button
          onClick={handleSubmitReview}
          className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded"
        >
          Submit Review
        </button>
      </div>

      {/* Reviews Section */}
      <div className="bg-white shadow-lg rounded  p-6 mt-8">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Reviews</h3>
      </div>
    </div>
  );
};

export default AppDetailsCard;
