import { useState } from 'react'

function Movies({movies}) {
    const [selected, setSelected] = useState({})

    const handleSelect = (e) => {
        const movieSelect = movies.find(movie => movie.id === e.target.value)
        setSelected(movieSelect || {})
    }

    return (
        <div className="movies">
            <h1>Select a Movie</h1>
            <select onChange={handleSelect}>
                <option value=''></option>
                {
                    movies?.map(movie => {
                        return (
                            <option value={movie.id}>{movie.title}</option>
                        )
                    })
                }
            </select>
            { selected.id && (
                <div>
                    <h2><span>Title:</span> {selected.title}</h2>
                    <p><span>Release Date:</span> {selected.release_date}</p>
                    <p><span>Description:</span> {selected.description}</p>
                </div>
            )}
        </div>
    );
}

export default Movies;