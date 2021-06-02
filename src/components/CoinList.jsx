import React, { useEffect } from 'react';
import coinGeko from '../apis/coinGecko';

const CoinList = () => {
    // const [coins, setCoins] = useState([]);

    useEffect(() => {
      const fetchData = async() => {
        const response = await coinGeko.get('/coins/markets', {
          params: {
            vs_currency: "usd",
            ids: "bitcoin,ethereum"
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
