import React from "react"
import css from "./index.module.css"
import Layout from "../Layout/index"
import Logo from "../../assets/img/logo.svg"
import { Link } from "gatsby"

const Header = () => {
  return (
    <div className={css.container}>
      <Layout>
        <div className={css.container_logo}>
          <img className={css.logo} src={Logo} alt="" />
        </div>
        <ul className={css.menu}>
          <Link to="/" style={{ textDecoration: "none", color: "black" }}>
            <li className={css.page}>Characters</li>
          </Link>
          <Link to="/comics" style={{ textDecoration: "none", color: "black" }}>
            <li className={css.page}>Comics</li>
          </Link>
          <Link
            to="/favorites"
            style={{ textDecoration: "none", color: "black" }}
          >
            <li className={css.page}>Favorites</li>
          </Link>
        </ul>
      </Layout>
    </div>
  )
}

export default Header
