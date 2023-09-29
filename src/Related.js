import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
// import bgPurple from "./images/bg-purple.svg";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Related.css';

const Related = (props) => {
  const [pages, setPages] = useState([]);
  const location = useLocation();
  const pathname = location.pathname;
  const slugname = pathname.substring(pathname.lastIndexOf("/") + 1);
  const catSlug = pathname.split("/")[1];
  const catSlugWithSpace = catSlug.replace(/-/g, " ");
  useEffect(() => {
    pageslist();
  }, []);

  const pageslist = () => {
    axios
      .get(
        "https://extnoc.com/reactapi/learn/wp-json/wp/v2/posts"
      )
      .then((res) => {
        setPages(res.data.reverse());
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const reloadHome = () => {
    window.scrollTo(0, 0);
    setTimeout(() => {
      window.location.reload(false);
    }, 500);
  }


  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          slidesToScroll: 0,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <section className="article-slider">
      <div className="container">
        <h2 className="mb-4">Latest Articles</h2>
        <div className="row">
          <Slider {...settings}>
            {pages.map((page) => (
              <div className="card h-100">
                <div className="card-img">
                </div>
                <div className="card-body">
                  <Link
                    to={`/${page.acf.category.slug}`}
                    className="btn btn-sm btn-outline-dark ps-3 pe-3"
                  >
                    {page.acf.category.name}
                  </Link>
                  <h5 className="card-title">
                    <Link onClick={reloadHome} to={`/${catSlug}/${page.slug}`}>
                      {page.title.rendered}
                    </Link>
                  </h5>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
      <div className="mb-5"></div>
    </section>
  );
};
export default Related;