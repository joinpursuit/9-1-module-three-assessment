import { useState } from 'react'



export default function Movies({allMovies}) {

  const [single,setSingle] = useState({})


  const handleSelect = (e) =>{
    const chosen = (e.target.value)
    const found = allMovies.find((movie) =>movie.id === chosen)
    setSingle(found || {})
}

// console.log(allMovies)

  return (
    <div className="movies">
    <h2>Select a Movie</h2>

    <select name="movie" id="movie" onChange={handleSelect}>
        <option value ="" selected='selected'></option>
        {allMovies.map((all)=>{
        return (
            <option key={all.id} value={all.id}>{all.title}</option>
        )
    })}
    </select>

    {single.id && (
        <aside>
            <p><span>Title: </span>{single.title}</p>
            <p><span>Release Date: </span>{single.release_date}</p>
            <p><span>Description: </span>{single.description}</p>
        </aside>
        )
    }

    </div>
  )
}
