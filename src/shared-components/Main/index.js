import React from "react"
import Layout from "../Layout/index"
import Character from "../../components/Character/index.js"
import Comic from "../../components/Comic/index.js"
import css from "./index.module.css"

const Main = ({ data, type }) => {
  const renderData = data.map(elem => {
    if (type === "character") {
      return (
        <Character
          image={elem.thumbnail.path + "." + elem.thumbnail.extension}
          name={elem.name}
          id={elem.id}
          key={elem.id}
        ></Character>
      )
    }
    if (type === "comic") {
      return (
        <Comic
          image={elem.thumbnail.path + "." + elem.thumbnail.extension}
          name={elem.title}
          id={elem.id}
          key={elem.id}
        ></Comic>
      )
    }
  })
  return (
    <Layout>
      <div className={css.main_container}>{renderData}</div>
    </Layout>
  )
}

export default Main
