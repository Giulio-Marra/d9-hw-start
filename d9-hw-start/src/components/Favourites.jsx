import React from "react";
import { useSelector } from "react-redux";

const Favourites = () => {
  const companies = useSelector((state) => state.companySelected.content);

  return (
    <div>
      <h2>Favourite Companies</h2>
      <ul>
        {companies.map((company, index) => (
          <li key={index}>{company}</li>
        ))}
      </ul>
    </div>
  );
};

export default Favourites;
