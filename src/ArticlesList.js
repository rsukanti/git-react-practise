import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
// import bgPurple from "./images/bg-purple.svg";
import axios from "axios";
import MyloaderList from "./MyloaderList";
import SearchResults from "./SearchResults";

const ArticlesList = (props) => {
  const [pages, setPages] = useState([]);
  const [searchPages, setSearchPages] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  var count = false;
  const isSearch = props.search;
  const listType = props.listType;
  const searchVal = props.searchVal;
  const location = useLocation();
  const pathname = location.pathname;
  const slugname = pathname.substring(pathname.lastIndexOf("/") + 1);
  const slugnameWithSpace = slugname
    .replace(/-/g, " ")
    .replace(/\b\w/g, (l) => l.toUpperCase());
  if (!isSearch) {
    if (listType == "all") {
      var urldata = "https://extnoc.com/reactapi/learn/wp-json/wp/v2/posts?_embed&per_page=100";
    } else {
      var urldata =
        "https://extnoc.com/reactapi/learn/wp-json/wp/v2/posts?category_slug=" +
        slugname;
    }
  } else {
    var urldata =
      "https://extnoc.com/reactapi/learn/wp-json/wp/v2/search?search=" +
      searchVal;
  }
  useEffect(() => {
    pageslist();
    return () => {
      setPages({});
      setSearchPages({});
      setIsLoaded(false);
    };
  }, [urldata]);
  const pageslist = () => {
    axios
      .get(urldata)
      .then((res) => {
        setSearchPages([]);
        setPages([]);
        setIsLoaded(false);
        if (!isSearch) {
          setPages(res.data);
          setSearchPages([]);
          setIsLoaded(true);
        } else {
          setPages([]);
          setSearchPages(res.data);
          setIsLoaded(true);
        }
        setIsLoaded(true);
      })
      .catch((err) => {
        setIsLoaded(false);
        console.log(err);
      });
  };
  return (
    <>
      {!isLoaded && (
        <>
          <MyloaderList />
        </>
      )}
      {isLoaded && !isSearch && (
        <div className="small-container">
          <div className="row row-cols-1 row-cols-md-3 g-5">
            {pages.map((page, index) => (
              <div className="col col-md-6 col-lg-4">
                <div className="card h-100">
                  <div className="card-img">
                    {index < 3 ? <p>New</p> : ""}
                    {/* <img src={bgPurple} className="card-img-top" alt="" /> */}
                  </div>
                  <div className="card-body">
                    <Link
                      to={`/${(listType == "cat") ? slugname : page.acf.category.slug}`}
                      className="btn btn-sm btn-outline-dark ps-3 pe-3"
                    >
                      {(listType == "cat") ? slugnameWithSpace : page.acf.category.name}
                    </Link>
                    <h5 className="card-title">
                      <Link to={`/${(listType == "cat") ? slugname : page.acf.category.slug}/${page.slug}`}>
                        {page.title.rendered}
                      </Link>
                    </h5>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {isLoaded && isSearch && (
        <div className="row row-cols-1 row-cols-md-3 g-5">
          {!searchPages.length && !count && (
            <h5 className="mt-4">No Results found</h5>
          )}
          {searchPages.length > 0 && (
            <>
              {searchPages.map((page) =>
                page.title.toLowerCase().includes(searchVal.toLowerCase()) ? (
                  <>
                    {" "}
                    <SearchResults postId={page.id} /> {(count = true)}{" "}
                  </>
                ) : null
              )}
              {!count && <h5 className="mt-4">No Results found</h5>}
            </>
          )}
        </div>
      )}
    </>
  );
};
export default ArticlesList;