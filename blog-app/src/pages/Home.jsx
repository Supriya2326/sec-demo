 import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1 style={{ color: "blue" }}>
        Welcome to Home Page
      </h1>

      <div style={{ marginTop: "20px" }}>
        <Link to="/about" style={{ marginRight: "15px" }}>
          <button style={{ padding: "10px 20px", cursor: "pointer" }}>
            Go to About
          </button>
        </Link>

        <Link to="/contact">
          <button style={{ padding: "10px 20px", cursor: "pointer" }}>
            Go to Contact
          </button>
        </Link>
      </div>
    </div>
  );
}
