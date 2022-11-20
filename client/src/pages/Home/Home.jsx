import { useEffect } from "react"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"
import { useGlobalContext } from "../../utils/context"
const Home = () => {
  const { trendingWeekly, fetchWeeklyTrending } = useGlobalContext()

  useEffect(() => {
    fetchWeeklyTrending()
  }, [])

  return <main>Home Element</main>
}

Home.propTypes = {}

export default Home
