import React, { useCallback, useState } from "react";
import { Fragment } from "react";
import AddBlog from "./Component/Blog/AddBlog";
import Image from "./Component/UI/Image";
import WatchBlogs from "./Component/Blog/WatchBlogs";
import BlogList from "./Component/Blog/BlogList";
function App() {
  const [blogList, setBlogList] = useState([]);
  const [loding, setLoding] = useState(false);
  const [error, setError] = useState(null);
  const fetchBlog = useCallback(async () => {
    setLoding(true);
    try {
      const response = await fetch(
        "https://my-blog-app-3a4c4-default-rtdb.firebaseio.com/blogs.json"
      );
      if (!response.ok) {
        throw Error("Something went wrong!!!");
      }
      const data = await response.json();
      const loadedBlog = [];
      for (const key in data) {
        loadedBlog.push({
          id: key,
          title: data[key].title,
          text: data[key].text,
        });
      }
      setBlogList(loadedBlog);
      console.log(blogList);
      setLoding(false);
    } catch (error) {
      setError(error.message);
    }
  }, [blogList]);
  async function gotBlog(blog) {
    const response = await fetch(
      "https://my-blog-app-3a4c4-default-rtdb.firebaseio.com/blogs.json",
      {
        method: "POST",
        body: JSON.stringify(blog),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    console.log(data);
  }
  let buttonContent = "Watch Blogs";
  let content = <p>Click Watch Blogs for fetch Blogs.</p>;
  if (loding === true) {
    content = <p>Loading...</p>;
  }
  if (blogList.length > 0) {
    content = "";
    buttonContent = "Reload Blogs";
  }
  if (error) {
    content = <p>{error}</p>;
  }
  return (
    <Fragment>
      <Image />
      <AddBlog passBlog={gotBlog} />
      <WatchBlogs buttonContent={buttonContent} fetchBlog={fetchBlog} />
      {blogList && <BlogList blogList={blogList} content={content} />}
    </Fragment>
  );
}

export default App;
