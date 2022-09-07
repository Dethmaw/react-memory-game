import "./Board.css";

function Cell({ item, id, handleClick }) {
  const itemClass = item.stat ? " active " + item.stat : "";

  return (
    <button className={"cell" + itemClass} onClick={() => handleClick(id)}>
      {item.id}
    </button>
  );
}

export default Cell;
