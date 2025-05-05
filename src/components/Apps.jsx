import React, { useEffect, useState } from "react";
import { GoStarFill } from "react-icons/go";
import { Link } from "react-router";

const Apps = () => {
  const [appsData, setAppsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch data from the JSON file
    fetch("/app_data.json")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
        return res.json();
      })
      .then((data) => {
        setAppsData(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="w-11/12 mx-auto py-10">Loading...</div>;
  }

  if (error) {
    return (
      <div className="w-11/12 mx-auto py-10 text-red-500">Error: {error}</div>
    );
  }

  // Sort apps by rating in descending order for the Trending Apps section
  const trendingApps = [...appsData]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 6); // Get the top 4 apps

  // Group apps by category
  const groupedApps = appsData.reduce((acc, app) => {
    const { category } = app;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(app);
    return acc;
  }, {});

  return (
    <div className="w-11/12 mx-auto py-10">
      {/* Trending Apps Section */}
      <section className="mb-30">
        <h1 className="text-3xl font-bold mb-6">Trending Apps</h1>
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {trendingApps.map((app) => (
            <Link
              to ="/app-details"
              key={app.id}
              className="p-4 rounded-xl hover:shadow-lg hover:bg-blue-100 transition cursor-pointer"
            >
              <img
                src={app.thumbnail}
                alt={app.name}
                className="w-40 h-40 object-cover rounded-2xl mb-4"
              />
              <h3 className="text-xl font-bold">{app.name}</h3>
              <div className="flex items-center space-x-1 text-gray-600 mt-2">
                <span>Rating: {app.rating}</span>
                <GoStarFill />
              </div>
              <p className="text-gray-600">Downloads: {app.downloads}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Categories Sections */}
      {Object.keys(groupedApps).map((category) => (
        <section key={category} className="mb-20">
          <h2 className="text-3xl font-bold mb-6">{category}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {groupedApps[category].map((app) => (
              <Link
              to ="/app-details"
              key={app.id}
              className="p-4 rounded-xl hover:shadow-lg hover:bg-blue-100 transition cursor-pointer"
            >
              <img
                src={app.thumbnail}
                alt={app.name}
                className="w-40 h-40 object-cover rounded-2xl mb-4"
              />
              <h3 className="text-xl font-bold">{app.name}</h3>
              <div className="flex items-center space-x-1 text-gray-600 mt-2">
                <span>Rating: {app.rating}</span>
                <GoStarFill />
              </div>
              <p className="text-gray-600">Downloads: {app.downloads}</p>
            </Link>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
};

export default Apps;
