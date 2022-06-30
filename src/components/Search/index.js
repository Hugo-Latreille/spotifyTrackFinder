import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Input, Form, Image } from "semantic-ui-react";
import logoSpotify from "src/assets/logo_spotify.png";
import { setSearchValue, submitSearch } from "../../store/actions";
import "./search.scss";

const SearchBar = ({ placeholder }) => {
  const searchInputValue = useSelector((state) => state.searchValue);
  const dispatch = useDispatch();

  return (
    <>
      <Image centered size="medium" src={logoSpotify} />
      <Form className="search__form" onSubmit={() => dispatch(submitSearch())}>
        <Input
          fluid
          icon="search"
          placeholder={placeholder}
          value={searchInputValue}
          onChange={(e) => dispatch(setSearchValue(e.target.value))}
        />
      </Form>
    </>
  );
};

export default SearchBar;
