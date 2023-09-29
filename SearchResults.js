import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
// import bgPurple from "./images/bg-purple.svg";
import MyloaderListSingle from "./MyloaderListSingle";

const SearchResults = (props) => {
  const postId = props.postId;
  const [isSearchLoaded, setIsSearchLoaded] = useState(false);
  const [searchResultsData, setSearchResultsData] = useState([]);
  useEffect(() => {
    pageslistSearch();
    return () => {
      setIsSearchLoaded({});
      setIsSearchLoaded(false);
    };
  }, [postId]);
  const pageslistSearch = () => {
    axios
      .get("https://extnoc.com/reactapi/learn/wp-json/wp/v2/posts/" + postId)
      .then((res) => {
        setSearchResultsData(res.data);
        setIsSearchLoaded(true);
      })
      .catch((err) => {
        setIsSearchLoaded(false);
        console.log(err);
      });
  };
  return (
    <>
      {!isSearchLoaded && (
        <div className="col col-md-6 col-lg-4">
          <MyloaderListSingle />
        </div>
      )}
      {isSearchLoaded && (
        <div className="col col-md-6 col-lg-4">
          <div className="card h-100">
            <div className="card-img">
              {/* <img src={bgPurple} className="card-img-top" alt="" /> */}
            </div>
            <div className="card-body">
              <Link
                to={`/${searchResultsData.acf.category.slug}`}
                className="btn btn-sm btn-outline-dark ps-3 pe-3"
              >
                {searchResultsData.acf.category.name}
              </Link>
              <h5 className="card-title">
                <Link
                  to={`/${searchResultsData.acf.category.slug}/${searchResultsData.slug}`}
                >
                  {searchResultsData.title.rendered}
                </Link>
              </h5>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default SearchResults;