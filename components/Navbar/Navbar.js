import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";
import "./Navbar.scss";

function Navbar() {
  const [navState, setNavState] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    if (window.innerWidth <= 960) {
      setIsSmallScreen(true);
    } else {
      setIsSmallScreen(false);
    }
  }, []);

  useEffect(() => {
    setNavState(false);
  }, []);

  return (
    <nav className="NavbarWrapper">
      <div className="NavbarContainer">
        <div className="NavbarContainer__logos">
          <div className="NavbarContainer__logos--snioeLogo">
            <img src="/Images/Utils/snioe_logo.png" />
          </div>
          <div className="NavbarContainer__logos--ccLogo">
            <img src="/Images/Utils/cc_logo.png" />
          </div>
          {isSmallScreen && (
            <button
              className="NavbarContainer__logos--Hamburger"
              aria-controls="Primary Navigation Menu"
              aria-expanded={navState}
              onClick={() => setNavState(!navState)}
            >
              <svg
                stroke="#154fff"
                fill="none"
                className="NavbarContainer__logos--Hamburger--svg"
                viewBox="-10 -10 120 120"
                width="40"
              >
                <path
                  className="NavbarContainer__logos--Hamburger--line"
                  style={{
                    strokeWidth: "10",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                  }}
                  d="m 20 40 h 60 a 1 1 0 0 1 0 20 h -60 a 1 1 0 0 1 0 -40 h 30 v 70"
                ></path>
              </svg>
            </button>
          )}
        </div>
        <div
          className={`NavbarContainer__pages ${navState ? "NavbarContainer__pages-open" : ""
            }`}
        >
          <Link href='/'>
            <p className="NavbarContainer__pages--item">Home</p>
          </Link>
          <Link href='/clubPage'>
            <p style={{ "textDecoration": "none" }} className="NavbarContainer__pages--item">Clubs</p>
          </Link>
          <p className="NavbarContainer__pages--item">Room Booking</p>
          <p className="NavbarContainer__pages--item">About Us</p>
          {/* <p className="NavbarContainer__pages--item">Past Sponsors</p> */}
          <p className="NavbarContainer__pages--item">Contact</p>
        </div>
        <div
          className={`NavbarContainer__links ${navState ? "NavbarContainer__links-open" : ""
            }`}
        >
          <p className="NavbarContainer__links--itemWebsite">Official Website</p>
          <p className="NavbarContainer__links--itemLogin">Login</p>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
