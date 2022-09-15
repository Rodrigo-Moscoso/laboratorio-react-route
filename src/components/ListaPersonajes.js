import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

function ListaPersonajes() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Bill Gates</Link>
        </li>
        <li>
          <Link to="/">Steve Jobs</Link>
        </li>
        <li>
          <Link to="/">Ada Lovelace</Link>
        </li>
        <li>
          <Link to="/">Alan Turing</Link>
        </li>
        <li>
          <Link to="/">Donald Knuth</Link>
        </li>
      </ul>
    </nav>
  );
}

export default ListaPersonajes;
