import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import homeIcon from "../assets/images/home.svg";
import contactsIcon from "../assets/images/contacts.svg";
import basketIcon from "../assets/images/basket.svg";

const Nav: React.FC = () => {
  return (
    <>
      {/* Desktop Nav */}
      <header className="header desktop-nav">
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

      {/* Mobile Bottom Nav */}
      <div className="mobile_nav">
        <NavLink to="/" className="mobile-link">
          <img src={homeIcon} alt="Home" />
          <span>Главная</span>
        </NavLink>
        <NavLink to="/contacts" className="mobile-link">
          <img src={contactsIcon} alt="Контакты" />
          <span>Контакты</span>
        </NavLink>
        <NavLink to="/basket" className="mobile-link">
          <img src={basketIcon} alt="Корзина" />
          <span>Корзина</span>
        </NavLink>
      </div>
    </>
  );
};

export default Nav;









