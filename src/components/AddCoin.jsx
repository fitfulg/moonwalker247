import React, { useState, useContext } from "react";
import { WatchListContext } from "../context/watchListContext";
// import coinList from '../assets/coinList.json'

const AddCoin = () => {
  const [isActive, setIsActive] = useState(false);
  const { addCoin } = useContext(WatchListContext);
  // const availableCoins = coinList.map(name => {
  //   let key = Object.keys(name)
  //   return name[key[2]];
  // })
  // console.log(availableCoins);
  const availableCoins = [
    "bitcoin",
    "ethereum",
    "ripple",
    "tether",
    "solana",
    "bitcoin-cash",
    "litecoin",
    "tezos",
    "cardano",
    "tron",
    "monero",
    "crown",
    "bittorrent"
  ];

  const handleClick = (coin) => {
    addCoin(coin);
    setIsActive(false);
  };

  return (
    <div className="dropdown">
      <button
        onClick={() => setIsActive(!isActive)}
        className="btn btn-primary dropdown-toggle"
        type="button"
      >
        Add Coin
      </button>
      <div className={isActive ? "dropdown-menu show" : "dropdown-menu"}>
        {availableCoins.map((el) => {
          return (
            <a onClick={() => handleClick(el)}
              href="#"
              key={el}
              className="dropdown-item"
            >
              {el}
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default AddCoin;
