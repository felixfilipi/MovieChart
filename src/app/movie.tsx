import Link from "next/link"

export default function Movie({title, id, poster_path, release_date, overview, rank} : any){
  const imagePath = 'https://image.tmdb.org/t/p/original'
  return(
    <div>
      <div className="Content-Rank-Container">
        <h1 className="Content-Rank-Text"># {rank}</h1>
      </div>
      <Link href={`/${id}`}>
        <div className="Card-Main-Container">
          <div className="Card-Header-Container">
            <h1 className="Card-Header-Title">{title}</h1>
            <h2 className="text-sm">{release_date}</h2>
          </div>
          <div className="Card-Content-Container">
            <img 
              src={imagePath + poster_path} 
              width={400} 
              height={400} 
              alt={title}/>
            <div className="Card-Description-Container">
              <div className="Card-Description-Layout">
                <p className="text-sm">{overview}</p>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}
