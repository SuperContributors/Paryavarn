import React, { useEffect, useState } from "react";
import CardsUi from "./CardsUi";

import "../style/cards.css";


const Cards = () => {
  if (localStorage.myValue === undefined) {
    localStorage.myValue = "all";
  }


  const URL = `https://forest-api-cover.herokuapp.com/`;
  const [receive, setReceive] = useState([]);
  const fetchData = () => {
    fetch(URL)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        let check = data;
        setReceive(check);
      });
  };

  console.log(sessionStorage.myValue);

  useEffect(() => {
    console.log("Inside usEffect");
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [URL]);

  return (
    <>
    
    
        <div className="card-main">
          {receive.map((data) => (
            <div className="card-c">
              <CardsUi
                id={data.id}
                forestCover ={data.forestCover}
               
              />
            </div>
          ))}
        </div>
    
    </>
  );
};

export default Cards;