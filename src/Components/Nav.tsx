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

            <ul className="nav_list">
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









