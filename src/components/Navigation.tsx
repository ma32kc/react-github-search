import {Link} from "react-router-dom";

export function Navigation() {
    return (
        <nav className="flex justify-between items-center h-[50px] px-5 shadow-md bg-gray-500 text-white">
            <h3 className="font-bold">Github Search</h3>
            <span className="flex gap-3">
                <Link to="/">Home</Link>
                <Link to="/favourites">Favourites</Link>
            </span>
        </nav>
    )
}