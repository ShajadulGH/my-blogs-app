import "./App.css";
import React from "react";
import { Fragment } from "react";
import AddBlog from "./Component/Blog/AddBlog";
import Image from "./Component/UI/Image";
function App() {
  // const gotBlog = (blog) => {
  //   fetch(
  //     "https://my-blogs-app-36f2b-default-rtdb.asia-southeast1.firebasedatabase.app/",
  //     {
  //       method: "POST",
  //       body: JSON.stringify(blog),
  //       headers: { "content-type": "application/json" },
  //     }
  //   )
  //     .then((response) => response.json())
  //     .then((data) => console.log(data));
  // };

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

  return (
    <Fragment>
      <Image />
      <AddBlog passBlog={gotBlog} />
    </Fragment>
  );
}

export default App;
