import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Breadcrumb from "./Breadcrumb";
import { Helmet } from "react-helmet";
import Search from "./Search";
import ArticlesList from "./ArticlesList";
import ReactGA from "react-ga";
const Category = () => {
  const [searchUpdated, setSearchUpdated] = useState(false);
  const [searchVal, setSearchVal] = useState("");
  const location = useLocation();
  const pathname = location.pathname;
  const slugname = pathname.substring(pathname.lastIndexOf("/") + 1);
  const slugnameWithSpace = slugname
    .replace(/-/g, " ")
    .replace(/\b\w/g, (l) => l.toUpperCase());
  useEffect(() => {
    if (searchUpdated) {
      setSearchUpdated(true);
    }
    ReactGA.pageview(window.location.pathname);
  }, []);
  return (
    <div className="home">
      <Breadcrumb />
      <Helmet>
        <meta name="description" content={slugname}></meta>
        <title>{slugnameWithSpace} | ExterNetworks</title>
      </Helmet>
      <Search setSearchUpdated={setSearchUpdated} setSearchVal={setSearchVal} />
      <section className="article-slider">
        <div className="container">
          <div className="small-container">
            {!searchUpdated && (
              <h2 className="mb-4">Latest Articles : {slugnameWithSpace}</h2>
            )}
            {searchUpdated && (
              <h2 className="mb-4">Search Results : {searchVal}</h2>
            )}
            <ArticlesList
              search={searchUpdated}
              searchVal={searchVal}
              listType="cat"
            />
          </div>
        </div>
      </section>
    </div>
  );
};
export default Category;