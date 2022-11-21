import styled from "styled-components"

const baseUrl = "https://image.tmdb.org/t/p/w500"

const MovieCard = ({
  genre_ids,
  id,
  media_type,
  original_title,
  original_language,
  overview,
  release_date,
  title,
  poster_path,
  original_language,
  vote_average,
  vote_count,
}) => {
  return <div>MovieCard</div>
}

const CardWrapper = styled.article``

export default MovieCard

// {
//     "adult": false,
//     "backdrop_path": "/yYrvN5WFeGYjJnRzhY0QXuo4Isw.jpg",
//     "id": 505642,
//     "title": "Black Panther: Wakanda Forever",
//     "original_language": "en",
//     "original_title": "Black Panther: Wakanda Forever",
//     "overview": "Queen Ramonda, Shuri, M’Baku, Okoye and the Dora Milaje fight to protect their nation from intervening world powers in the wake of King T’Challa’s death. As the Wakandans strive to embrace their next chapter, the heroes must band together with the help of War Dog Nakia and Everett Ross and forge a new path for the kingdom of Wakanda.",
//     "poster_path": "/sv1xJUazXeYqALzczSZ3O6nkH75.jpg",
//     "media_type": "movie",
//     "genre_ids": [
//         28,
//         12,
//         878
//     ],
//     "popularity": 3747.097,
//     "release_date": "2022-11-09",
//     "video": false,
//     "vote_average": 7.512,
//     "vote_count": 845
// }
