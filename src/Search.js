import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Input from "@mui/material/Input";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
const Search = (params) => {
  const [inputVal, setInputVal] = useState("");

  useEffect(() => {
    handleTrack();
  }, []);

  const handleTrack = () => (event) => {
    event.preventDefault();
    if (inputVal.length !== 0) {
      params.setSearchUpdated(true);
      params.setSearchVal(inputVal);
      setInputVal("");
    }
  };
  return (
    <>
      <div className="search-main">
        <div className="container">
          <h1>ExterNetworks Learning Center</h1>
          <Form onSubmit={handleTrack()}>
            <Input
              id="input-with-icon-adornment"
              placeholder="Search"
              required
              value={inputVal}
              onChange={(e) => {
                setInputVal(e.target.value);
              }}
              startAdornment={
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              }
            />
          </Form>
        </div>
      </div>
    </>
  );
};
export default Search;