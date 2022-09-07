import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";

function MainNavigation() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>MEMORY GAME</div>
      <nav>
        <ul>
          <li>
            <Link to="/">BABY MODE</Link>
          </li>
          <li>
            <Link to="/8x8">EASY MODE</Link>
          </li>
          <li>
            <Link to="/16x16">NIGHTMARE</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
