import "./Board.css";

function CellEasy({ item, id, handleClick }) {
  const itemClass = item.stat ? " active " + item.stat : "";

  return (
    <button className={"cellEasy" + itemClass} onClick={() => handleClick(id)}>
      {item.id}
    </button>
  );
}

export default CellEasy;
