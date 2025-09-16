import { Link } from "react-router-dom";

export default function Contact() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1 style={{ color: "blue" }}>Welcome to Contact Page</h1>

      <form>
        <input type="text" placeholder="Name" style={{ margin: "5px" }} /><br />
        <input type="email" placeholder="Email" style={{ margin: "5px" }} /><br />
        <textarea placeholder="Message" rows="3" style={{ margin: "5px" }} /><br />
        <button type="submit" style={{ margin: "5px" }}>Submit</button>
      </form>

      <Link to="/">
        <button style={{ marginTop: "10px" }}>Back to Home</button>
      </Link>
    </div>
  );
}
  