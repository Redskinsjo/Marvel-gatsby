import React, { useState, useEffect } from "react"
import css from "./index.module.css"
import Header from "../../shared-components/Header/index"
import Layout from "../../shared-components/Layout/index"
import BackgroundSlider from "gatsby-image-background-slider"
import { useStaticQuery, graphql } from "gatsby"
import CardProfile from "./CardProfile/index"
import CardCarousels from "./CardCarousels/index"
import axios from "axios"

const ComicCard = ({ pageContext: { elem } }) => {
  const [chars, setChars] = useState([])
  const [creators, setCreators] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const fetchCharacters = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3003/comic/" + elem.id + "/characters"
      )
      if (response.status === 200) {
        const chars = response.data.data.results
        setChars(chars)
      }
    } catch (error) {
      console.log("line25", error)
    }
  }
  const fetchCreators = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3003/comic/" + elem.id + "/creators"
      )
      if (response.status === 200) {
        const creators = response.data.data.results
        setCreators(creators)
        setIsLoading(false)
      }
    } catch (error) {
      console.log("line39", error)
    }
  }
  useEffect(() => {
    fetchCharacters()
  }, [])
  useEffect(() => {
    fetchCreators()
  }, [chars])

  let renderCharacters
  if (!isLoading) {
    renderCharacters = chars.map((char, index) => {
      return (
        <div className={css.character_container} key={index}>
          <div
            style={{
              padding: "10px",
              backgroundColor: "black",
              margin: "0 8px",
            }}
          >
            <img
              src={char.thumbnail.path + "." + char.thumbnail.extension}
              alt="characterOfTheComic"
            />
          </div>
          <p>{char.name}</p>
        </div>
      )
    })
  }
  let renderCreators
  if (!isLoading) {
    renderCreators = creators.map((crea, index) => {
      return (
        <div className={css.creator_container} key={index}>
          <div
            style={{
              padding: "10px",
              backgroundColor: "black",
              margin: "0 8px",
            }}
          >
            <img
              src={crea.thumbnail.path + "." + crea.thumbnail.extension}
              alt="creatorOfTheComic"
            />
          </div>
          <p>{crea.fullName}</p>
          {/* <p>{crea.role}</p> */}
        </div>
      )
    })
  }
  return (
    <div>
      <Header></Header>
      <Layout
        style={{
          display: "flex",
          flexDirection: "column",
          minHeight: "calc(100vh - 120px)",
          borderRight: "1px solid pink",
          borderLeft: "1px solid pink",
        }}
      >
        <CardProfile elem={elem} />
        <CardCarousels
          renderCharacters={renderCharacters}
          renderCreators={renderCreators}
          elem={elem}
        />
        {/* <BackgroundSlider
        query={useStaticQuery(
          graphql`
            query {
              allSitePage(filter: { context: { elem: { id: { eq: $id } } } }) {
                edges {
                  node {
                    context {
                      elem {
                        images {
                          path
                          extension
                        }
                      }
                    }
                  }
                }
              }
            }
          `,
          { id: elem.id }
        )}
        images={elem.images.map(img => {
          return img.path + "." + img.extension
        })} */}
        {/* /> */}
      </Layout>
    </div>
  )
}

export default ComicCard
