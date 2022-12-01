import {useState, useEffect} from 'react';


export default function Movies () {
    const [datas, setData] = useState([])
    const [movie, setMovies] = useState({})
    // ASK HELP: When calling this object movies it was frying the code but the name should not matter. See why this was happening during review 'Movie was movies and it was showing data as a number set' 

    useEffect(() => {
        fetch('./films.json')
        .then(res => res.json())
        .then(data => setData(data))
        .catch((err) =>{
            console.log(err)
        });
    }, []) 

    function handleChange (e){
        const found = datas.find(({ id }) => id === e.target.value);
        setMovies(found || {});
    };

    return(
        <div className='movie'>
            <h2>Select A Movie</h2>
            <select onChange={handleChange}>
                <option value=''></option>
                {datas && datas.map(({id, title}) =>(
                    <option key={id} value={id}>
                        {title}
                    </option>
                ))}
            </select>

            {movie.id && (
                <aside className='movies'>
                    <h2>
                        <span>Title: </span> {movie.title}
                    </h2>
                    <p>
                        <span>Release Date: </span> {movie.release_date}
                    </p>
                    <p>
                        <span>Description: </span>{movie.description}
                    </p>
                </aside>
            )}
        </div>
    )
}

