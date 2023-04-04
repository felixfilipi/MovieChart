import Movie from "./movie";
import Link from "next/link";

export default async function Home() {
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`
  )
  const res = await data.json();
  let i = 0;
  return (
    <main>
      <div className="Header-Container">
        <h1 className="Header-Logo-1">Movie<span className="Header-Logo-2">Chart</span></h1>
        <h3 className="Header-Desc-1">By : <Link className="Header-Desc-2" href={'https://felixfilipi.github.io/felixfilipi/'}>Felix Filipi</Link></h3>
      </div>
      <div className="List-Container">
      {res.results?.map((movie : any) => 
        {
          i = i+1;
          return(
            <Movie 
              key={movie.id}
              id={movie.id}
              title={movie.title}
              poster_path={movie.poster_path}
              release_date={movie.release_date}
              overview={movie.overview}
              rank={i}
            />
          )
        }
      )}
      </div>
    </main>
  )
}
