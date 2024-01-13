import { NavLink } from "react-router-dom";
import "./Navbar.css";

const navigationTabs = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Counter",
    path: "/counter",
  },
  {
    name: "About",
    path: "/about",
  },
];

const Navbar = () => {
  return (
    <header className="navigation">
      <nav className="navbar">
        <ul className="nav-list">
          {navigationTabs.map((tab, index) => {
            return (
              <li key={index} className="nav-item">
                <NavLink
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active-link" : ""
                  }
                  to={tab.path}
                >
                  {tab.icon} {tab.name}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
