import React, { useContext } from 'react'
import classes from "./Pagination.module.css";
import { GlobalContext } from '../context/GlobalState'
const Pagination = () => {
    const { page, nbPages, getNextPage, getPrevPage } = useContext(GlobalContext)
    return (
        <div className={classes.pagination}>
            <button onClick={() => { getPrevPage() }}>
                PREV
            </button>
            <p> {page + 1} of {nbPages} </p>
            <button onClick={() => { getNextPage() }}>
                NEXT
            </button>
        </div>
    )
}

export default Pagination