import BlogImage from "../../Assets/blog-logo2.png";
import styles from "./Image.module.css";
const Image = () => {
  return (
    <div className={styles.blogDiv}>
      <img className={styles.image} src={BlogImage} alt="Blog"></img>
    </div>
  );
};
export default Image;
