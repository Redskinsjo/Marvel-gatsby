const axios = require("axios")

exports.createPages = async ({ actions: { createPage } }) => {
  try {
    const {
      data: {
        data: { results: resultsChars },
      },
    } = await axios.post("https://marvel-gatsby-api.herokuapp.com/characters")

    const {
      data: {
        data: { results: resultsComics },
      },
    } = await axios.post("https://marvel-gatsby-api.herokuapp.com/comics")

    createPage({
      path: "/",
      component: require.resolve("./src/components/Characters/index.js"),
      context: { resultsChars },
    })
    resultsChars.forEach(elem => {
      createPage({
        path: `/character/${elem.id}`,
        component: require.resolve("./src/components/CharacterCard/index.js"),
        context: { elem },
      })
    })

    createPage({
      path: "/comics",
      component: require.resolve("./src/components/Comics/index.js"),
      context: { resultsComics },
    })

    const fetchCharacters = async elem => {
      try {
        const response = await axios.post(
          "https://marvel-gatsby-api.herokuapp.com/comic/" +
            elem.id +
            "/characters"
        )
        if (response.status === 200) {
          const chars = response.data.data.results

          return chars
        }
      } catch (error) {
        console.log("line25", error)
      }
    }

    const fetchCreators = async elem => {
      try {
        const response = await axios.post(
          "https://marvel-gatsby-api.herokuapp.com/comic/" +
            elem.id +
            "/creators"
        )
        if (response.status === 200) {
          const creators = response.data.data.results
          return creators
        }
      } catch (error) {
        console.log("line39", error)
      }
    }

    resultsComics.forEach(elem => {
      // const chars = fetchCharacters(elem)
      // const creators = fetchCreators(elem)
      createPage({
        path: `/comic/${elem.id}`,
        component: require.resolve("./src/components/ComicCard/index.js"),
        context: { elem },
      })
    })
  } catch (error) {
    console.log(error)
  }
}
