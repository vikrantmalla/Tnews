import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const Search = () => {
    const { query, searchNews } = useContext(GlobalContext);
    return (
        <>
            <form onSubmit={(e) => e.preventDefault()}>
                <div>
                    <input
                        type="text"
                        placeholder="Search news here"
                        value={query}
                        onChange={(e) => searchNews(e.target.value)}
                    />
                </div>
            </form>
        </>
    );
};

export default Search;