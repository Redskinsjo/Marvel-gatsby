import React from "react"
import css from "./index.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "gatsby"

const Character = ({ image, name, id }) => {
  return (
    <div className={css.container}>
      <Link to={`/character/${id}`} className={css.link_container}>
        <div className={css.image_container}>
          <img className={css.image} src={image} alt="marvel-character" />
        </div>
        <div className={css.name_container}>
          <span>{name}</span>
        </div>
      </Link>
      <div className={css.options_container}>
        <span className={css.details}>Details</span>
        <div className={css.addtofavorite_container}>
          <FontAwesomeIcon
            className={css.addtofavorite_icon}
            icon="heart"
          ></FontAwesomeIcon>
          <span className={css.addtofavorite_cta}>Add</span>
        </div>
      </div>
    </div>
  )
}

export default Character
