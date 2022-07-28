import { useContext } from 'react';
import { GlobalContext } from "../context/GlobalState";
import NewCard from "./NewCard";
import classes from "./News.module.css";

const News = () => {
    const { hits, isLoading } = useContext(GlobalContext);
    // console.log(hits);
    if (isLoading) {
        return (
            <>
                <h1>...Loading</h1>
            </>
        )
    }
    return (
        <>
            <div className={classes.newsContainer}>
                {
                    hits.map((curNews, index) => {
                        return <NewCard key={index} curNews={curNews} />
                    })
                }
            </div>
        </>
    )
}

export default News