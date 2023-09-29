import React from "react";
import ContentLoader from "react-content-loader";
import "./Myloader.css";

const Myloader = (props) => (
  <ContentLoader
    className="lazy-suspence"
    height={400}
    width={90 + "%"}
    speed={3}
    backgroundColor={"rgba(35,45,139,0.15)"}
    foregroundColor={"rgba(35,45,139,0.35)"}
    {...props}
  >
    <rect x="0" y="0" width="100%" height="100" />
    <rect x="0" y="120" width="70%" height="20" />
    <rect x="72%" y="120" width="28%" height="230" />
    <rect x="0" y="150" width="70%" height="200" />
  </ContentLoader>
);

export default Myloader;