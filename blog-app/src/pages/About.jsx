 import { Link } from "react-router-dom";

export default function About() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1 style={{ color: "green" }}>
        Welcome to About Page
      </h1>

      <h2 style={{ color: "Yellow", marginTop: "20px" }}>
        SRINIVASA RAMANUJAN INSTITUTE OF TECHNOLOGY
      </h2>

      <Link to="/">
        <button style={{ marginTop: "30px", padding: "10px 20px", cursor: "pointer" }}>
          Back to Home
        </button>
      </Link>
    </div>
  );
}
