import Card from "../UI/Card";
import styles from "./Blog.module.css";
const Blog = (props) => {
  return (
    <Card className={styles.background}>
      <h3 className={styles.h3}>{props.title}</h3>
      <p>{props.text}</p>
    </Card>
  );
};
export default Blog;
