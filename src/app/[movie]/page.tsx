import Image from "next/image"

//export async function generateStaticParams(){
//  const data = await fetch(
//    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`
//  )
//  const res = await data.json();
//  return res.results.map((movie : any) => ({
//    mo : toString(movie.id),
//  }))
//}

export default async function MovieDetail({params} : any){
  const { movie } = params;
  const imagePath = "https://image.tmdb.org/t/p/original";
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/${movie}?api_key=${process.env.API_KEY}`,
    {next: {revalidate: 60}}
  );

  const res = await data.json();
  return(
    <div>
      <div>
        <h2 className="Item-Title">{res.title}</h2>
        <h2 className="text-lg">Released : {res.release_date}</h2>
        <h2> Duration: {res.runtime} minutes </h2>
        <div className="Badge-Layout">
          <h2 className="Green-Badge">
            {res.status}
          </h2>
          {res.genres.map((item : any) => (
            <h2 key={item.id} className="Red-Badge">
              {item.name}
            </h2>
          ))}
        </div>
        <Image 
          className="Image-Layout" 
          src={imagePath + res.backdrop_path}
          width={1000}
          height={1000}
          alt={res.id}
          priority
          />
        <p className="Overview">{res.overview}</p>
      </div>
    </div>
  )
}
