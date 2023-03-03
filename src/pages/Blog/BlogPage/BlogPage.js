import React from "react";
import { useLocation } from "react-router-dom";
// import web_scren_record from "../../../assets/gifs/web_scren_record.mov";
import BlogFour from "./blogsContent/BlogFour";
import BlogOne from "./blogsContent/BlogOne";
import BlogThree from "./blogsContent/BlogThree";
import BlogTwo from "./blogsContent/BlogTwo";
import BlogSix from "./blogsContent/BlogSix";
import BlogFive from "./blogsContent/BlogFive";
import BlogSeven from "./blogsContent/BlogSeven";
import BlogEight from "./blogsContent/BlogEight";
import BlogNine from "./blogsContent/BlogNine";
import BlogTen from "./blogsContent/BlogTen";

import "./BlogPage.scss";
import BlogEleven from "./blogsContent/BlogEleven";
import BlogTwell from "./blogsContent/BlogTwell";

const BlogPage = () => {
  const {
    state: { blogItem, index },
  } = useLocation();
  return (
    <div className="container">
      <div className="imageAndText">
        <img className="blogPageImage" src={blogItem.image} alt="blogImage" />
        <h1 className="headingQue">{blogItem.title}</h1>
        <p className="authorAndDate">Author: Navatej Kumar, 23rd March 2022</p>
        <div className="otherText">
          {index === 0 && <BlogOne />}
          {index === 1 && <BlogTwo />}
          {index === 2 && <BlogThree />}
          {index === 3 && <BlogFour />}
          {index === 4 && <BlogFive />}
          {index === 5 && <BlogSix />}
          {index === 6 && <BlogSeven />}
          {index === 7 && <BlogEight />}
          {index === 8 && <BlogNine />}
          {index === 9 && <BlogTen />}
          {index === 10 && <BlogEleven />}
          {index === 11 && <BlogTwell />}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
