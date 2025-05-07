import React, { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { updateProfile } from "firebase/auth";

const MyProfileCard = () => {
  const { user } = useContext(AuthContext); 
  const [name, setName] = useState(user?.displayName || ""); 
  const [photoURL, setPhotoURL] = useState(user?.photoURL || ""); 
  const [loading, setLoading] = useState(false); 

  const handleSaveChanges = async () => {
    if (!name.trim() || !photoURL.trim()) {
      alert("Name and Photo URL cannot be empty.");
      return;
    }

    setLoading(true); // Show loading indicator
    try {
      // Update the user's profile in Firebase
      await updateProfile(user, {
        displayName: name,
        photoURL: photoURL,
      });
      alert("Profile updated successfully!");
    } catch (error) {
      console.error("Error updating profile:", error);
      alert("Failed to update profile. Please try again.");
    } finally {
      setLoading(false); 
    }
  };

  return (
    <div>
        <div className="max-w-3xl mx-auto mt-20 p-6 bg-blue-50 rounded-lg">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">My Profile</h2>

      {/* Display User Information */}
      <div className="flex items-center space-x-4 mb-6">
        <img
          src={user?.photoURL || ""}
          alt="User Avatar"
          className="w-16 h-16 rounded-full object-cover"
        />
        <div>
          <p className="text-lg font-semibold text-gray-700">{user?.email}</p>
          <p className="text-sm text-gray-500">Email</p>
        </div>
      </div>

      {/* Edit Profile Form */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSaveChanges();
        }}
        className="space-y-4"
      >
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:outline-none "
            placeholder="Enter your name"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Photo URL
          </label>
          <input
            type="text"
            value={photoURL}
            onChange={(e) => setPhotoURL(e.target.value)}
            className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:outline-none "
            placeholder="Enter photo URL"
          />
        </div>
        <button
          type="submit"
          className={`w-full py-2 px-4 rounded-lg text-white cursor-pointer ${
            loading
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700"
          }`}
          disabled={loading}
        >
          {loading ? "Saving..." : "Save Changes"}
        </button>
      </form>
    </div>
    </div>
  );
};

export default MyProfileCard;
