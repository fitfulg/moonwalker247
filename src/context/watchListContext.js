import { createContext, useEffect, useState } from "react";

export const WatchListContext =  createContext();

export const WatchListContextProvider = props => {
    console.log(localStorage.getItem("watchList").split(','));
    const [watchList, setWatchList] = useState( 
        localStorage.getItem("watchList").split(',') || [
        "bitcoin", 
        "ethereum",  
        "litecoin", 
        "crown", 
        "dogecoin",
        "bittorrent"
    ])

    useEffect(() => {
        localStorage.setItem("watchList", watchList)
    }, [watchList])

    const addCoin = coin => {
        if (watchList.indexOf(coin) === -1) {
            setWatchList([...watchList, coin])
        }
    }

    const deleteCoin = (coin) => {
        setWatchList(watchList.filter(el => {
            return el !== coin;
        }))
    }

    return (
        <WatchListContext.Provider value={{ watchList, deleteCoin, addCoin }}>
            {props.children}
        </WatchListContext.Provider>
    );
};