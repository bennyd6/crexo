import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

function Navbar() {
    return (
        <>
            <div className="nav-main">
                <NavLink to="/">
                    <img src={logo} alt="logo" />
                </NavLink>
                <hr />
                <div className="nav-in">
                    <NavLink to="/" className={({ isActive }) => isActive ? "tag-div active" : "tag-div"}>
                        Home
                    </NavLink>
                    <NavLink to="/story" className={({ isActive }) => isActive ? "tag-div active" : "tag-div"}>
                        Story
                    </NavLink>
                    <NavLink to="/poem" className={({ isActive }) => isActive ? "tag-div active" : "tag-div"}>
                        Poem
                    </NavLink>
                    <NavLink to="/essay" className={({ isActive }) => isActive ? "tag-div active" : "tag-div"}>
                        Essay
                    </NavLink>
                    <NavLink to="/song" className={({ isActive }) => isActive ? "tag-div active" : "tag-div"}>
                        Song
                    </NavLink>
                    <NavLink to="/joke" className={({ isActive }) => isActive ? "tag-div active" : "tag-div"}>
                        Joke
                    </NavLink>
                    <NavLink to="/quote" className={({ isActive }) => isActive ? "tag-div active" : "tag-div"}>
                        Quote
                    </NavLink>
                </div>
            </div>
        </>
    );
}

export default Navbar;
