import React from "react";
import { IoMdStar } from "react-icons/io";

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
      <div className="bg-blue-50 rounded-lg p-10 mb-8">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
          {/* left side app details */}
          <div className="flex-1 space-y-4">
            <h1 className="text-5xl font-bold">{details.name}</h1>
            <p className="text-blue-600">{details.developer}</p>
            <div className="flex items-center gap-10">
              <div className="text-center">
                <div className="font-semibold">{details.downloads}</div>
                <p className="text-gray-600 text-s">Downloads</p>
              </div>
              <div className="text-center">
                <p className="font-semibold">Category</p>
                <div className="text-s">{details.category}</div>
              </div>
              <div className="text-center">
                <div className="flex items-center font-semibold">
                  {details.rating}
                  <IoMdStar />
                </div>
                <p className="text-gray-600 text-s">Rated</p>
              </div>
            </div>
            <button
              onClick={onInstallToggle}
              className={`mt-6 px-10 py-2 rounded text-white cursor-pointer ${
                isInstalled
                  ? "bg-red-500 hover:bg-red-600"
                  : "bg-blue-500 hover:bg-blue-600"
              }`}
            >
              {isInstalled ? "Uninstall" : "Install"}
            </button>
            <p className=" mt-4">{details.description}</p>
            {/* Features Section */}
            <h3 className="text-lg font-semibold mt-6">Features:</h3>
            <ul className="list-disc list-inside text-gray-600">
              {details.features?.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
          {/* Thumbnail */}
          <img
            src={details.thumbnail}
            alt={`${details.name} Thumbnail`}
            className="w-32 h-32 rounded-lg object-cover"
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
      <div className="bg-white shadow-lg rounded p-6 mt-8">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Reviews</h3>
        <ul className="space-y-4">
          {details.reviews?.map((review, index) => (
            <li key={index} className="">
              <p className="text-gray-800 font-semibold">{review.user}</p>
              <p className="text-yellow-500 flex items-center">
                Rating: {review.rating} <IoMdStar className="ml-1" />
              </p>
              <p className="text-gray-600">{review.comment}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AppDetailsCard;
