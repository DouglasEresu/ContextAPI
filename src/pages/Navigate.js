import { Link } from "react-router-dom";

export default function Navigate() {
  return (
    <div className="App">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/result">Result</Link>
        </li>
      </ul>
    </div>
  );
}
