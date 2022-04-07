import LoadingContent from "elements/LoadingContent";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { clearAllData } from "utils/localStorage";

const ClearAllData = () => {
  const navigate = useNavigate();
  useEffect(() => {
    clearAllData();
    setTimeout(() => {
      navigate("/");
    }, 3000);
  });
  return (
    <LoadingContent message="Clearing all data from local storage and redirect to homepage .." />
  );
};

export default ClearAllData;
