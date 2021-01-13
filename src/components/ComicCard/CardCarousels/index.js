import React from "react"
import css from "../index.module.css"

const CardCarousels = ({ renderCharacters, renderCreators, elem }) => {
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      {renderCharacters?.length > 0 ? (
        <div>
          <h2>{elem.characters.available} characters:</h2>
          <div className={css.list_character_container}>{renderCharacters}</div>
        </div>
      ) : null}

      {renderCreators?.length > 0 ? (
        <div>
          <h2>{elem.creators.available} creators:</h2>
          <div className={css.list_creator_container}>{renderCreators}</div>
        </div>
      ) : null}
    </div>
  )
}

export default CardCarousels
