import Card from "../UI/Card";
import classes from "./WatchBlogs.module.css";
const WatchBlogs = (props) => {
  return (
    <Card className={classes.card}>
      <button onClick={props.fetchBlog} className={classes.button}>
        {props.buttonContent}
      </button>
    </Card>
  );
};
export default WatchBlogs;
