import Card from "../UI/Card";
import Blog from "./Blog";
import styles from "./BlogList.module.css";
const BlogList = (props) => {
  return (
    <Card>
      <div className={styles.content}>{props.content}</div>
      {props.blogList.map((blog) => (
        <Blog text={blog.text} title={blog.title}></Blog>
      ))}
    </Card>
  );
};
export default BlogList;
