import React, {useState, useEffect} from "react"

export default function People(){

    const [info, setInfo] = useState([])
    const [name, setName] = useState('');
    const [input, setInput] = useState({});


    const handleSubmit = (e) => {
        e.preventDefault();
        const opt = info.find((person) => person.name.toLowerCase() === name.toLowerCase());
        setInput(opt || {});
        setName('')
    }


    useEffect(() => {
        fetch("./people.json")
        .then((res) => res.json())
        .then((info) => {
        //   console.log(info);
          setInfo(info);
        })
        .catch((err) => console.log(err));
    }, [])


    return(
        <div className="people">
            <h1>Search for a Person</h1>
            <form className="pplForm" onSubmit={handleSubmit}>
                <label htmlFor="name">
                    <input value={name} placeholder="Search..." onChange={(e) => {
                        setName(e.target.value)
                    }}
                        type="text"
                        />
                </label>
                <button type='submit'>Submit</button>
            </form>
            <aside>
            {input.id ? (
                <div>
                    <h2>Name: {input.name}</h2>
                    <p><strong>Age: </strong>{input.age ? input.age : "N/A"}</p>
                    <p><strong>Eye Color: </strong>{input.eye_color ? input.eye_color : "N/A"}</p>
                    <p><strong>Eye Color: </strong>{input.hair_color ? input.hair_color : "N/A"}</p>
                    <p><strong>Gender: </strong>{input.gender ? input.gender : "N/A"}</p>
                </div>
            ) : (
                <p>No Search Result Found</p>
            )}
            </aside>
        </div>
    )
}