import { Link } from "react-router-dom";
import logo from "../assets/Logo.webp"

const Navbar = () => {
    return (
        <nav className="fixed top-0 left-0 w-full p-4 h-18 bg-neutral-950 shadow-md flex items-center">
            <div className="flex w-full items-center space-x-4 justify-between">
                <img src={logo} alt="logo in here" className="h-10 rounded" />
                <ul className="flex justify-between text-white gap-3">
                    <li >
                        <Link to="/">
                            <button className="pt-2 pb-2 pr-4 pl-4 border rounded cursor-pointer text-1xl text-blue-100 hover:text-white transition ">Bosh sahifa</button>
                        </Link>
                    </li>
                    <li>
                        <Link to="/about">
                            <button className="pt-2 pb-2 pr-4 pl-4 border rounded cursor-pointer text-1xl text-blue-100 hover:text-white transition">Haqida</button>
                        </Link>
                    </li>
                    <li>
                        <Link to="/contact">
                            <button className="pt-2 pb-2 pr-4 pl-4 border rounded cursor-pointer text-1xl text-blue-100 hover:text-white transition">Bog'lanish</button>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
