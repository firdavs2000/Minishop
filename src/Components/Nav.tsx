import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';



const Nav: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
 

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="header">
      <nav className="nav">
        <div className="container">
          <div className="nav_box">
            <Link to="/" className="nav_logo">Exclusive</Link>

            <div className="nav">
            <button
              type="button"
              className="header-menu-button"
              onClick={toggleMenu}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="currentColor"
              >
                <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
              </svg>
            </button>
            </div>

            <ul className={`nav_list ${menuOpen ? 'open' : ''}`}>
            
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }: { isActive: boolean }) =>
                    isActive ? 'nav_link active' : 'nav_link'
                  }
                >
                  <span>Home</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contacts"
                  className={({ isActive }: { isActive: boolean }) =>
                    isActive ? 'nav_link active' : 'nav_link'
                  }
                >
                  <span>Contacts</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/basket"
                  className={({ isActive }: { isActive: boolean }) =>
                    isActive ? 'nav_link active' : 'nav_link'
                  }
                >
                  <span>Basket</span>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Nav;









