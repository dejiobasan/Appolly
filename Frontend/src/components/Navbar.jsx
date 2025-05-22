import { Link } from "react-router-dom";
import logo from "../assets/Images/Logo.png";
export default function Navbar() {
  return (
    <nav className="bg-white text-[#2c2c2c] shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-6 font-medium">
          <Link
            to="#"
            className="text-[#5c4efc] border-b-2 border-[#5c4efc] pb-1"
          >
            HOME
          </Link>
          <Link to="#">ABOUT</Link>
          <Link to="#">FEATURES</Link>
        </div>

        <div className="text-2xl font-bold flex items-center gap-2">
          <img
            src={logo}
            alt="Appolly Logo"
            className="bg-white shadow-lg -mt-4 -mb-4 p-2 h-20 w-20 object-contain"
          />
        </div>

        <div className="flex items-center gap-6 font-medium">
          <Link to="#">SCREENSHOT</Link>
          <Link to="#">BLOG</Link>
          <Link
            to="#"
            className="bg-[#5c4efc] text-white px-4 py-2 rounded border border-[#5c4efc] hover:bg-white hover:text-[#5c4efc] transition"
          >
            DOWNLOAD
          </Link>
        </div>
      </div>
    </nav>
  );
}
