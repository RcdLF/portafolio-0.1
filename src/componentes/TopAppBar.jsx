"use client";
import Link from "next/link";
import style from "./TopAppBar.module.css";

function TopAppBar() {
  function handleMenu() {
    const menu = document.getElementById("menu_links");
    const icon = document.getElementById("hamburger_icon");

    menu.classList.toggle(style.open);
    icon.classList.toggle(style.open);
  }

  return (
    <>
      <nav className={style.TopAppBar_container}>
        <div className={style.TopAppBar_logo}>
          Lucio Fuentes 🙋‍♂️
          <p>Full stack developer</p>
        </div>
        <hr />
        <div>
          <ul className={style.TopAppBar_nav_links}>
            <li>
              <Link href="#profile">
                <span class="material-symbols">home</span>
                Home
              </Link>
            </li>
            <hr />
            <li>
              <Link href="#about">
                <span class="material-symbols">help</span>
                About
              </Link>
            </li>
            <hr />
            <li>
              <Link href="#experience">
                {" "}
                <span class="material-symbols">travel_explore</span>Expirence
              </Link>
            </li>
            <hr />
            <li>
              <Link href="#projects">
                <span class="material-symbols">work</span>Projects
              </Link>
            </li>
            <hr />
            <li>
              <Link href="#contact">
                {" "}
                <span class="material-symbols">call</span>Contact
              </Link>
            </li>
            <hr />
          </ul>
        </div>
      </nav>
      <nav id="nav-hamburger" className={style.nav_container}>
        <div className={style.TopAppBar_logo}>Lucio Fuentes</div>
        <div className={style.nav_menu}>
          <div
            id="hamburger_icon"
            className={style.nav_icon}
            onClick={() => handleMenu()}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div id="menu_links" className={style.nav_menu_links}>
            <li>
              <Link href="#about" onClick={() => handleMenu()}>
                About
              </Link>
            </li>
            <li>
              <Link href="#experience" onClick={() => handleMenu()}>
                Expirence
              </Link>
            </li>
            <li>
              <Link href="#projects" onClick={() => handleMenu()}>
                Projects
              </Link>
            </li>
            <li>
              <Link href="#contact" onClick={() => handleMenu()}>
                Contact
              </Link>
            </li>
          </div>
        </div>
      </nav>
    </>
  );
}

export default TopAppBar;
