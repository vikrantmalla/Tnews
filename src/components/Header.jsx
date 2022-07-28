import React from 'react'
import classes from "./Header.module.css";
import Search from './Search';
const Header = () => {
    return (
        <>
            <header>
                <nav className={classes.navbar}>
                    <h1>Tnews</h1>
                    <Search />
                </nav>
            </header>
        </>
    )
}

export default Header