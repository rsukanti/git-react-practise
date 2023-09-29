import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import Breadcrumb from "./Breadcrumb";
import ArticlesList from "./ArticlesList";
import Search from "./Search";
import "./Header.css";
import NavMenu from "./NavMenu";

const PagesList = () => {
  const [activeClass, setActiveClass] = useState(4);
  const [searchUpdated, setSearchUpdated] = useState(false);
  const [searchVal, setSearchVal] = useState("");

  useEffect(() => {
    if (searchUpdated) {
      setSearchUpdated(true);
    }
    window.addEventListener("scroll", () => {
      let activeClass = "fixed";
      if (window.scrollY === 0) {
        activeClass = "";
      }
      setActiveClass(activeClass);
    });
  });
  return (
    <div className="home">
      <div className="pagelist-header">
        <header id="home-header" className={activeClass}>
          <NavMenu />
        </header>
        <Breadcrumb />
        <Helmet>
          <meta
            name="description"
            content="A learning center by ExterNetworks for data security, cyber security, for IT professionals, students and anyone interested in information technology."
          ></meta>
          <title>Learning Center by ExterNetworks</title>
        </Helmet>
        <Search
          setSearchUpdated={setSearchUpdated}
          setSearchVal={setSearchVal}
        />
      </div>
      <section className="article-slider">
        <div className="container">
          <div className="small-container">
            {!searchUpdated && <h2 className="mb-4">Latest Articles</h2>}
            {searchUpdated && (
              <h2 className="mb-4">Search Results : {searchVal}</h2>
            )}
            <ArticlesList
              search={searchUpdated}
              searchVal={searchVal}
              listType="all"
            />
          </div>
        </div>
      </section>
    </div>
  );
};
export default PagesList;