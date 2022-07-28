import { useContext } from 'react';
import { GlobalContext } from "../context/GlobalState";
import classes from "./News.module.css";
const NewCard = ({ curNews }) => {
    const { removeNews } = useContext(GlobalContext);
    const { objectID, title, author, num_comments, url } = curNews;
    // console.log(objectID);
    return (
        <div className={classes.card} key={objectID}>
            <div className={classes.header}>
                <h2>{title}</h2>
            </div>
            <div className={classes.body}>
                <p>
                    By <span>{author}</span> | <span>{num_comments}</span> comment
                </p>
            </div>
            <div className={classes.footer}>
                <a href={url} target="_blank"> Read More </a>
                <button onClick={() => removeNews(objectID)} > Delete </button>
            </div>

        </div>
    )
}

export default NewCard