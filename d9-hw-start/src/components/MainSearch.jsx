import React from "react";
import { useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import Job from "./Job";
import { useDispatch, useSelector } from "react-redux";
import { searchJobsAction } from "../redux/actions";

const MainSearch = () => {
  const dispatch = useDispatch();
  const [query, setQuery] = useState("");
  const searchResults = useSelector((state) => state.jobs.jobs);

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(searchJobsAction(query));
  };

  return (
    <Container>
      <Row>
        <Col xs={10} className="mx-auto my-3">
          <h1 className="display-1">Remote Jobs Search</h1>
        </Col>
        <Col xs={10} className="mx-auto">
          <Form onSubmit={handleSubmit}>
            <Form.Control
              type="search"
              value={query}
              onChange={handleChange}
              placeholder="type and press Enter"
            />
          </Form>
        </Col>
        <Col xs={10} className="mx-auto mb-5">
          {searchResults.length > 0 &&
            searchResults.map((jobData) => (
              <Job key={jobData._id} data={jobData} />
            ))}
        </Col>
      </Row>
    </Container>
  );
};

export default MainSearch;
