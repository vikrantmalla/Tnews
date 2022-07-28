import React, { useReducer, useEffect } from 'react';
import AppReducer from './AppReducer'

// API url
let API = "http://hn.algolia.com/api/v1/search?"

// State
const initialState = {
    isLoading: true,
    query: "",
    nbPages: "",
    page: "",
    hits: [],
}



// Context creation
export const GlobalContext = React.createContext();



const GlobalProvider = (props) => {

    const [state, dispatch] = useReducer(AppReducer, initialState);

    // fetch API
    const fetchApiUrl = async (url) => {
        dispatch({ type: "SET_LOADING" })
        try {
            const res = await fetch(url);
            const data = await res.json();
            console.log(data);
            dispatch({
                type: "GET_NEWS",
                payload: {
                    news: data.hits,
                    pages: data.nbPages
                },
            });
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchApiUrl(`${API}query=${state.query}&page=${state.page}`);
    }, [state.query, state.page])

    // Actions
    // Search action
    const searchNews = (searchquery) => {
        dispatch({
            type: "SEARCH_QUERY",
            payload: searchquery
        })
    }
    // Next Page action
    const getNextPage = () => {
        dispatch({
            type: "NEXT_PAGE"
        })
    }
    // Prev Page action
    const getPrevPage = () => {
        dispatch({
            type: "PREV_PAGE"
        })
    }
    // Delete action
    const removeNews = (id) => {
        // console.log(id)
        dispatch({
            type: "REMOVE_NEWS", payload: id
        })
    };

    return (
        // Provider creation
        <>
            <GlobalContext.Provider value={{ ...state, searchNews, getNextPage, getPrevPage, removeNews }}>
                {props.children}
            </GlobalContext.Provider>
        </>
    )
};

export default GlobalProvider

