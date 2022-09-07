import "./Board.css";
import { useState } from "react";
import Cell from "./Cell";

function Table() {
  const [items, setItems] = useState(
    [
      { real: 1, id: 1, color: "red", stat: "" },
      { real: 2, id: 1, color: "red", stat: "" },
      { real: 3, id: 2, color: "blue", stat: "" },
      { real: 4, id: 2, color: "blue", stat: "" },
      { real: 5, id: 3, color: "orange", stat: "" },
      { real: 6, id: 3, color: "orange", stat: "" },
      { real: 7, id: 4, color: "white", stat: "" },
      { real: 8, id: 4, color: "white", stat: "" },
      { real: 9, id: 5, color: "black", stat: "" },
      { real: 10, id: 5, color: "black", stat: "" },
      { real: 11, id: 6, color: "green", stat: "" },
      { real: 12, id: 6, color: "green", stat: "" },
      { real: 13, id: 7, color: "yellow", stat: "" },
      { real: 14, id: 7, color: "yellow", stat: "" },
      { real: 15, id: 8, color: "grey", stat: "" },
      { real: 16, id: 8, color: "grey", stat: "" },
    ].sort(() => Math.random() - 0.5)
  );

  const [prev, setPrev] = useState(-1);

  function check(current) {
    if (
      items[current].id === items[prev].id &&
      items[current].real !== items[prev].real
    ) {
      items[current].stat = "correct";
      items[prev].stat = "correct";
      setItems([...items]);
      setPrev(-1);
    } else {
      items[current].stat = "wrong";
      items[prev].stat = "wrong";
      setItems([...items]);
      setTimeout(() => {
        items[current].stat = "";
        items[prev].stat = "";
        setItems([...items]);
        setPrev(-1);
      }, 1000);
    }
  }

  function handleClick(id) {
    if (prev === -1) {
      items[id].stat = "active";
      setItems([...items]);
      setPrev(id);
    } else {
      check(id);
    }
  }

  return (
    <div>
      <div className={"container"}>
        {items.map((item, index) => (
          <Cell key={index} item={item} id={index} handleClick={handleClick} />
        ))}
      </div>
    </div>
  );
}

export default Table;
