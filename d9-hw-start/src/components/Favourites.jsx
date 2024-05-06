import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Favourites = () => {
  const companies = useSelector((state) => state.companySelected.content);

  return (
    <div>
      <h2>Favourite Companies</h2>
      <ul>
        {companies.map((company, index) => (
          <li key={index}>
            <Link to={`/${company}`}>{company}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Favourites;
