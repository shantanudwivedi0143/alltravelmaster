import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="bg-blue-600 text-white">
      <div className="max-w-7xl mx-auto flex justify-between p-4">
        <h1 className="text-xl font-bold">AllTravelMaster</h1>

        <nav className="space-x-6">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/domestic">Domestic</Link>
          <Link to="/international">International</Link>
          <Link to="/services">Services</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </div>
    </header>
  );
}