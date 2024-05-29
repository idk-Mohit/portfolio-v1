import React from "react";

const NewsDetailsPage = ({ params }) => {
  const { id } = params;
  return (
    <div>
      <h1>News : {id}</h1>
    </div>
  );
};

export default NewsDetailsPage;
