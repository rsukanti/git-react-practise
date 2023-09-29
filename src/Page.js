import React, { useState, useEffect, Suspense } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import Cta from "./Cta";
import { Helmet } from "react-helmet";
import Breadcrumb from "./Breadcrumb";
import Related from "./Related";
import Myloader from "./Myloader";
import FbIcon from "./images/facebook-icon.svg";
import TwIcon from "./images/twitter-icon.svg";
import InIcon from "./images/linkedin-icon.svg";
import axios from "axios";
import ReactGA from "react-ga";

const ArticleContent = React.lazy(() => import("./ArticleContent"));
const Page = () => {
  const [data, setData] = useState([]);
  const [scrolled, setScrolled] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const { slug } = useParams();
  const fullUrl = window.location.href;
  useEffect(() => {
    fetchPage();
    ReactGA.pageview(window.location.pathname);
    window.addEventListener("scroll", fetchScrolled);
    return () => window.removeEventListener("scroll", fetchScrolled);
  }, [slug]);
  const location = useLocation();
  const pathname = location.pathname;
  const slugname = pathname.substring(pathname.lastIndexOf("/") + 1);
  const fetchScrolled = () => {
    const scrollPx = document.documentElement.scrollTop;
    const winHeightPx =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    // const scrolledBar = `${scrollPx / winHeightPx * 100}%`;
    const scrolledBarNumber = `${(scrollPx / winHeightPx) * 100}`;
    setScrolled(scrolledBarNumber);

    const sections = document.querySelectorAll(".scrollspy");
    const menu_links = document.querySelectorAll(".menu-item");

    const makeActive = (link) => menu_links[link].classList.add("active");
    const removeActive = (link) => menu_links[link].classList.remove("active");
    const removeAllActive = () =>
      [...Array(sections.length).keys()].forEach((link) => removeActive(link));
    const sectionMargin = 200;
    let currentActive = 0;

    // listen for scroll events
    window.addEventListener("scroll", () => {
      const current =
        sections.length -
        [...sections]
          .reverse()
          .findIndex(
            (section) => window.scrollY >= section.offsetTop - sectionMargin
          ) -
        1;
      if (current !== currentActive && current < sections.length) {
        removeAllActive();
        currentActive = current;
        makeActive(current);
      }
    });
  };
  const fetchPage = () => {
    axios
      .get(
        "https://extnoc.com/reactapi/learn/wp-json/wp/v2/posts?slug=" + slugname
      )
      .then((res) => {
        setData(res.data);
        setIsLoaded(true);
      })
      .catch((err) => {
        setIsLoaded(false);
        console.log(err);
      });
  };
  const headerHeight = document.querySelectorAll("header").height;
  const progressContainerStyle = {
    background: "#f2f2f2",
    height: "6px",
    position: "fixed",
    top: headerHeight + "px",
    left: 0,
    width: "100vw",
    zIndex: 99,
  };

  const progressBarStyle = {
    height: "6px",
    background: scrolled >= 95 ? "#53db44" : "#f9c737",
    width: scrolled + "%",
  };
  return (
    <>
      {!isLoaded && <Myloader />}

      {isLoaded && (
        <>
          <div className="progress-container" style={progressContainerStyle}>
            <div className="progress-bar" style={progressBarStyle} />
          </div>
          {data.map((item) => {
            const sidebarListStr = item.acf.side_bar_content;
            var sidebarList = sidebarListStr.split(",");
            var listItemsLength = 25;
            if (sidebarList.length < 6) {
              listItemsLength = 50;
            } else if (sidebarList.length < 10 && sidebarList.length >= 6) {
              listItemsLength = 40;
            }
            const listItemsStyles = {
              marginBottom: listItemsLength + "px",
            };
            const listItems = sidebarList.map((sidebarItem, index) => (
              <li key={index} style={listItemsStyles}>
                <a className="menu-item" href={"#scroll-" + index}>
                  {sidebarItem}
                </a>
              </li>
            ));
            return (
              <>
                <Breadcrumb />
                <Helmet>
                  <meta
                    name="description"
                    content={item.acf.seo_description}
                  ></meta>
                  <title>{item.acf.seo_title}</title>
                  <link
                    rel="canonical"
                    href="https://www.extnoc.com/learn/"
                  />
                  <meta property="og:locale" content="en_US" />
                  <meta property="og:type" content="website" />
                  <meta
                    property="og:title"
                    content={item.acf.seo_title}
                  />
                  <meta
                    property="og:description"
                    content={item.acf.seo_description}
                  />
                  <meta
                    property="og:url"
                    content={"https://www.extnoc.com/" + item.acf.category.slug + "/" + item.slug}
                  />
                  <meta property="og:site_name" content="ExterNetworks" />
                  <meta
                    property="og:image"
                    content={item.acf.social_media_image}
                  />
                  <meta name="twitter:card" content="summary_large_image" />
                  <meta
                    name="twitter:description"
                    content={item.acf.seo_description}
                  />
                  <meta
                    name="twitter:title"
                    content={item.acf.seo_title}
                  />
                  <meta name="twitter:site" content="@ext_noc" />
                  <meta name="twitter:creator" content="@ext_noc" />
                </Helmet>
                <section className="wrapper">
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-7 col-md-12 col-12 left-cont">
                        <div className="post-sec">
                          <h1 className="main-title">{item.title.rendered}</h1>

                          <p className="views">28.4k views</p>

                          <div className="row">
                            <div className="col-lg-6 col-sm-12">
                              <div className="ctg-buttons">
                                <Link
                                  className="btn btn-sm btn-outline-dark me-2 ps-3 pe-3"
                                  to={`/${item.acf.category.slug}`}
                                >
                                  {item.acf.category.name}
                                </Link>
                              </div>
                            </div>

                            <div className="col-lg-6 col-sm-12">
                              <div className="Social-Icons-Blk">
                                <a
                                  href={
                                    "https://www.facebook.com/sharer/sharer.php?u=" +
                                    fullUrl
                                  }
                                  target="_blank" rel="noopener noreferrer"
                                >
                                  <img alt="Facebook" src={FbIcon} className="Ftr-icon" />
                                </a>
                                <a
                                  href={
                                    "https://www.twitter.com/intent/tweet?original_referer=" +
                                    fullUrl +
                                    "&ref_src=twsrc%5Etfw&text=&tw_p=tweetbutton&url=" +
                                    fullUrl
                                  }
                                  target="_blank" rel="noopener noreferrer"
                                >
                                  <img alt="Twitter" src={TwIcon} className="Ftr-icon" />
                                </a>
                                <a
                                  href={
                                    "https://www.linkedin.com/shareArticle?mini=true&url=" +
                                    fullUrl +
                                    "&title=" +
                                    item.Browsetitle +
                                    "&summary=&source=" +
                                    fullUrl +
                                    ""
                                  }
                                  target="_blank" rel="noopener noreferrer"
                                >
                                  <img alt="LinkedIn" src={InIcon} className="Ftr-icon" />
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="article-sec mt-5">
                          <Suspense fallback={<Myloader />}>
                            <ArticleContent
                              description={item.content.rendered}
                            />
                          </Suspense>
                        </div>
                        <Cta />
                      </div>

                      <div className="col-lg-4 col-md-3 col-12 offset-lg-1">
                        <div className="right-sec sticky-top">
                          <h3>Article's content</h3>
                          <div className="progress-list">
                            <span className="line"></span>
                            <ul className="menu" id="main-menu">
                              {listItems}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                <Related postId={item.id} />
              </>
            );
          })}
        </>
      )}
    </>
  );
};
export default Page;