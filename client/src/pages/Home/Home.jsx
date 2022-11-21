import { useEffect } from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"
import { useGlobalContext } from "../../utils/context"
import MediaCard from "../../components/MediaCard"

const Home = () => {
  const { trendingWeekly, fetchWeeklyTrending } = useGlobalContext()

  useEffect(() => {
    // fetchWeeklyTrending()
  }, [])

  return (
    <main>
      <MainWrapper>

      </MainWrapper>Home Element
    </main>
  )
}

const MainWrapper = styled.section``

export default Home
