import React from "react";

const ArticleContent = (props) => {
  const description = props.description;

  return <div dangerouslySetInnerHTML={{ __html: description }}></div>;
};
export default ArticleContent;