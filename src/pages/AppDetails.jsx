import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import AppDetailsCard from "../components/AppDetailsCard";
import { useLoaderData, useParams } from "react-router";

const AppDetails = () => {
  const data = useLoaderData();
  const { id } = useParams();
  const [details, setDetails] = useState({});
  const [isInstalled, setIsInstalled] = useState(false);

  // Set dynamic title
  useEffect(() => {
    document.title = "AppDetails | AppNest";
  }, []);

  useEffect(() => {
    const appDetails = data.find((singleDetails) => singleDetails.id == id);
    setDetails(appDetails);
  }, [data, id]);

  const handleInstallToggle = () => {
    setIsInstalled(!isInstalled);
  };

  return (
    <div>
      <header>
        <Navbar></Navbar>
      </header>
      <main>
        <AppDetailsCard
          details={details}
          isInstalled={isInstalled}
          onInstallToggle={handleInstallToggle}
        />
      </main>
    </div>
  );
};

export default AppDetails;
