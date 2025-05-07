import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { updateProfile } from "firebase/auth";
import { useNavigate } from "react-router";

const MyProfile = () => {
//   const { user } = useContext(AuthContext);
//   const [name, setName] = useState("");
//   const [photoURL, setPhotoURL] = useState("");
//   const [message, setMessage] = useState("");

//   const navigate = useNavigate();

//   useEffect(() => {
//     if (user) {
//       setName(user.displayName || "");
//       setPhotoURL(user.photoURL || "");
//     }
//   }, [user]);

//   const handleUpdate = async (e) => {
//     e.preventDefault();
//     try {
//       await updateProfile(user, {
//         displayName: name,
//         photoURL: photoURL,
//       });
//       setMessage("Profile updated successfully!");
//     } catch (error) {
//       setMessage(`Error: ${error.message}`);
//     }
//   };

//   if (!user) {
//     navigate('/');
//   }

//   return (
//     <div className="max-w-md mx-auto mt-10 p-6 border rounded shadow">
//       <h2 className="text-xl font-bold mb-4">User Profile</h2>
//       <div className="mb-4">
//         <p><strong>Name:</strong> {user.name}</p>
//         <p><strong>Email:</strong> {user.email}</p>
//       </div>
//       <form onSubmit={handleUpdate} className="space-y-4">
//         <div>
//           <label className="block font-medium">Edit Name</label>
//           <input
//             type="text"
//             className="border w-full p-2 rounded"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <label className="block font-medium">Edit Photo URL</label>
//           <input
//             type="text"
//             className="border w-full p-2 rounded"
//             value={photoURL}
//             onChange={(e) => setPhotoURL(e.target.value)}
//           />
//         </div>
//         <button
//           type="submit"
//           className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
//         >
//           Save Changes
//         </button>
//       </form>
//       {message && <p className="mt-4 text-green-600">{message}</p>}
//     </div>
//   );
};

export default MyProfile;
