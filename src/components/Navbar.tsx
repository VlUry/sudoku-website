import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <nav className="flex justify-center items-center h-10 fixed z-10 w-screen">
      <div>
        <Link to="/" className="mx-2" onClick={window.location.reload}>
          Home
        </Link>
        <Link to="/solved">Solved</Link>
      </div>
    </nav>
  );
}
