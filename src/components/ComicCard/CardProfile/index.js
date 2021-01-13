import React from "react"
import css from "../index.module.css"

const CardProfile = ({ elem }) => {
  return (
    <div className={css.profile_container}>
      <div className={css.img_container}>
        <img
          className={css.img}
          src={elem.thumbnail.path + "." + elem.thumbnail.extension}
          alt="comic"
        />
      </div>
      <div style={{ width: "40%", textAlign: "center", fontSize: "20px" }}>
        <p>{elem.title}</p>
      </div>
      <div className={css.details_container}>
        <p className={css.description}>{elem.description}</p>
        <p>Nombre de pages: {elem.pageCount}</p>
      </div>
    </div>
  )
}

export default CardProfile
