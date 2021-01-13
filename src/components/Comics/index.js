import React from "react"
import Main from "../../shared-components/Main/index"
import Header from "../../shared-components/Header/index"
import "../../assets/styles/index.css"
import { useStaticQuery } from "gatsby"
import { library } from "@fortawesome/fontawesome-svg-core"
import { faHeart } from "@fortawesome/free-solid-svg-icons"
library.add(faHeart)

export default function Comics({ pageContext: { resultsComics } }) {
  return (
    <div>
      <Header />
      <Main data={resultsComics} type="comic" />
    </div>
  )
}
