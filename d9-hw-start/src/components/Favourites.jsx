import React from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteCompanyAction } from "../redux/actions";

const Favourites = () => {
  const companies = useSelector((state) => state.pref.content);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Favourite Companies</h2>
      <ul>
        {companies.map((company, index) => (
          <li key={index}>
            <Link to={`/${company}`}>{company}</Link>{" "}
            <Button
              color="primary"
              onClick={() => {
                dispatch(deleteCompanyAction(company));
              }}
            >
              Remove to pref
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Favourites;
