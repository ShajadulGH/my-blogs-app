import React, { useRef } from "react";
import Card from "../UI/Card";
import styles from "./AddBlog.module.css";
const AddBlog = (props) => {
  const inputedTitle = useRef();
  const inputedText = useRef();

  const blogInputHandler = (event) => {
    event.preventDefault();
    const gotBlog = {
      title: inputedTitle.current.value,
      text: inputedText.current.value,
    };
    props.passBlog(gotBlog);
    inputedTitle.current.value = "";
    inputedText.current.value = "";
  };

  return (
    <Card>
      <form onSubmit={blogInputHandler} className={styles.form}>
        <div className={styles.title}>
          <label htmlFor="title">Title</label>
          <input ref={inputedTitle} type="text" id="title"></input>
        </div>
        <div className={styles.title}>
          <label htmlFor="text">Text</label>
          <textarea ref={inputedText} rows="5" id="text"></textarea>
        </div>
        <div className={styles.button}>
          <button>Add Blog</button>
        </div>
      </form>
    </Card>
  );
};
export default AddBlog;
