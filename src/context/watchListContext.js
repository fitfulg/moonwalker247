import { createContext, useState } from "react";

export const WatchListContext =  createContext();

export const WatchListContextProvider = props => {
    const [watchList, setWatchList] = useState(["bitcoin", "ethereum", "ripple", "litecoin", "dogecoin", "tether"])

    return (
        <WatchListContext.Provider value={{ watchList }}>
            {props.children}
        </WatchListContext.Provider>
    );
};