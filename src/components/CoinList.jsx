import React, { useContext, useEffect, useState } from 'react';
import coinGeko from '../apis/coinGecko';
import { WatchListContext } from '../context/watchListContext';
import Coin from './Coin';

const CoinList = () => {
    const [coins, setCoins] = useState([]);
    const { watchList } = useContext(WatchListContext);
    const [isLoading, setIsLoading] = useState(false);
    console.log(watchList);

    useEffect(() => {
      const fetchData = async() => {
        setIsLoading(true);
        const response = await coinGeko.get('/coins/markets', {
          params: {
            vs_currency: "usd",
            ids: watchList.join(","),
          }
        })
        setCoins(response.data);
        console.log(response.data);
        setIsLoading(false);
      }

      fetchData()  
    }, [])

    const renderCoins = () => {
      if (isLoading) {
        return <div>Loading...</div>
      }
      return (
        <ul className="coinlist list-group mt-2">
          {coins.map(coin => {
            return <Coin key={coin.id} coin={coin} />
          })}
        </ul>
      )
    }

    return (
        <div>
          {renderCoins()}  
        </div>
    )
}

export default CoinList
