import "./Board.css";

function CellNightmare({ item, id, handleClick }) {
  const itemClass = item.stat ? " active " + item.stat : "";

  return (
    <button
      className={"cellNightmare" + itemClass}
      onClick={() => handleClick(id)}
    >
      {item.id}
    </button>
  );
}

export default CellNightmare;
