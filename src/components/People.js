import {useEffect, useState} from 'react';

export default function People () {
    const [datas, setData] = useState([])
    const [people, setPeople] = useState({})
    const [search, setSearch] = useState('')
    const [error, setError] = useState(false)

    useEffect(() => {
        fetch('./people.json')
        .then(res => res.json())
        .then(data => setData(data))
        .catch((err) =>{
            console.log(err)
        });
    }, []) 


    function handleSubmit(e){
        e.preventDefault()
        const found = datas.find(item => item.name.toLowerCase() === search.toLowerCase());
        if(!found) {
            setError(true)
        }
        setPeople(found || {})
        setSearch('');
    }

  
    return (
        <main className='people'>
            <h2>Search for a Person</h2>
            <form onSubmit={handleSubmit}>
                <section className='search'>
                    <input
                    type='text'
                    placeholder='Search Names'
                    value={search}
                    onChange={(e) => {setSearch(e.target.value)}}
                    />
                <button type='submit'>Submit</button>
                </section>
            </form>
            {people.id ? (
                <aside>
                    <h3> <span>Name: </span> {people.name}</h3>
                    <p><span>Age: </span>{people.age}</p>
                    <p><span>Gender: </span>{people.gender}</p>
                    <p><span>Eye Color: </span>{people.eye_color}</p>
                    <p><span>Hair Color: </span>{people.hair_color}</p>
                </aside>
            ) : error && <p>Not Found</p>}
        </main>
    );
};