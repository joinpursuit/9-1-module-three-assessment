import { React, useState, useEffect } from 'react';




function Searchbar() {

    const [searchTitle, setSearchTitle] = useState("")
    const [people, setPeople] = useState([]); 
    const [results, setResults] = useState({})
    
    let data= `people.json`

    // const filterPerson = (search, people) => {
    //     return people.filter((pers) => pers.name.toLowerCase().match(search.toLowerCase()))
    //   }
    // function filterShows(search, shows){
    //     return shows.filter((show) => 
    //     show.title.toLowerCase().match(search.toLowerCase())
    //     )
    //   }

    useEffect(() => {
        fetch(data)
        .then((res) => res.json())
        .then((res) => {
        setPeople(res)
        })
        .catch((err) => console.log(err))
    }, [])

    function handleSubmit(e) {
        e.preventDefault();
        // const title =e.target.value
        // const results= title.length ? filterPerson(title, people) : results
        // people.find(item => item.name.toLowerCase() === search.toLowerCase())
        // const filterResults = people.find(
        //     item => item.name.toLowerCase().match(searchTitle.toLowerCase()))
        const filterResults =  people.find(item => item.name.toLowerCase() === searchTitle.toLowerCase())
        setResults(filterResults || {})
          setSearchTitle("")  
    }

    

    

    return (
        <div className='people'>
        <h2>Search for a Person</h2>
        <form onSubmit={handleSubmit}>
        <lable htmlFor="name"> Search:
            <input
            type="text"
            placeholder="Haku"
            value={searchTitle}
            onChange={(e) => {setSearchTitle(e.target.value)}}
            />
        </lable>
        <button type="submit">Submit</button>
        </form>
        { results.id ? (
            <div>
                <h3>Name: {results.name}</h3>
                <p> <span><b>Age:</b></span> {results.age}</p>
                <p> <span><b>Eye Color:</b></span> {results.eye_color}</p>
                <p> <span><b>Hair Color:</b></span> {results.hair_color}</p>
            </div>
        ) : "Not Found"}
    </div>
    )
}

export default Searchbar;