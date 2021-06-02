import React, { useContext, useEffect, useState } from 'react';
import coinGeko from '../apis/coinGecko';
import { WatchListContext } from '../context/watchListContext';

const CoinList = () => {
    const [coins, setCoins] = useState([]);
    const { watchList } = useContext(WatchListContext)
    console.log(watchList);

    useEffect(() => {
      const fetchData = async() => {
        const response = await coinGeko.get('/coins/markets', {
          params: {
            vs_currency: "usd",
            ids: watchList.join(","),
          }
        })
        console.log(response.data);
      }

      fetchData()  
    }, [])

    return (
        <div>
            
        </div>
    )
}

export default CoinList
