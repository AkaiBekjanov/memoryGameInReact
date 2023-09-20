import "./Cards.css";
import { Card } from "./Card";
import { useEffect, useState } from "react";

const uniqueCards = [
  {
    id: 1,
    img: "A",
    state: "",
  },
  {
    id: 1,
    img: "A",
    state: "",
  },
  {
    id: 2,
    img: "B",
    state: "",
  },
  {
    id: 2,
    img: "B",
    state: "",
  },
  {
    id: 3,
    img: "C",
    state: "",
  },
  {
    id: 3,
    img: "C",
    state: "",
  },
  {
    id: 4,
    img: "D",
    state: "",
  },
  {
    id: 4,
    img: "D",
    state: "",
  },
];
// random arr
let shuffle = (arr) => {
  let i = arr.length - 1,
    j,
    temp;
  while (i > 0) {
    j = Math.floor(Math.random() * (i + 1));
    temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    i--;
  }
  return arr;
};

export const Cards = () => {
  const [cards, setCards] = useState(() => shuffle(uniqueCards));
  const [prev, setPrev] = useState(-1);
  const check = (current) => {
    if (cards[current].id == cards[prev].id) {
      cards[current].state = "correct";
      cards[prev].state = "correct";
      setCards([...cards]);
      setPrev(-1);
    } else {
      cards[current].state = "wrong";
      cards[prev].state = "wrong";
      setCards([...cards]);
      setTimeout(() => {
        cards[current].state = "";
        cards[prev].state = "";
        setCards([...cards]);
        setPrev(-1);
      }, 1000);
    }
  };
  const handleClick = (id) => {
    if (prev === -1) {
      cards[id].state = "active";
      setCards([...cards]);
      setPrev(id);
    } else {
      check(id);
    }
  };

  return (
    <div className="cards">
      {cards.map((item, index) => {
        return (
          <Card item={item} key={index} id={index} handleClick={handleClick} />
        );
      })}
    </div>
  );
};
