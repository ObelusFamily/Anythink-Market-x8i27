import React from "react";
import logo from "../../imgs/logo.png";
import { connect } from "react-redux";
import { SEARCH_TERM } from "../../constants/actionTypes";

const Banner = (props) => {
  const onChangeHandler = (event) => {
    event.preventDefault();
    props.dispatch({
      type: SEARCH_TERM,
      payload: { searchTerm: event.target.value },
    });
  };

  return (
    <div className="banner text-white">
      <div className="container p-4 text-center">
        <img src={logo} alt="banner" />
        <div className="d-flex justify-content-center align-items-center">
          <span> A place to get </span>
          <input
            id="search-box"
            className="rounded mx-4 px-4 py-2 w-25"
            placeholder="What is it that you truly desire?"
            onChange={onChangeHandler}
          />
          <span> the cool stuff.</span>
        </div>
      </div>
    </div>
  );
};

export default connect()(Banner);
