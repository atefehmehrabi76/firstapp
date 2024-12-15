import { NavLink } from "react-router-dom";

function Header(){

    return(
        <div>
            <nav className="bg-orange-300 flex justify-center gap-5 p-5">
                <NavLink className={({isActive,isPending})=>
                isActive ? "text-blue-500" : isPending ? "text-gray-500" : ""
                } to="/route-1">Route1</NavLink>
                <NavLink className={({isActive,isPending})=>
                isActive ? "text-blue-500" : isPending ? "text-gray-500" : ""
                }   to="/route-2">Route2</NavLink>
                <NavLink className={({isActive,isPending})=>
                isActive ? "text-blue-500" : isPending ? "text-gray-500" : ""
                }  to="/route-3">Route3</NavLink>
            </nav>
        </div>
    )
};

export default Header;