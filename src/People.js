import { useState } from "react"

export default function People({allPeople}) {

  const [name,setName] = useState("")
  const [input,setInput] = useState({})

  const handleSubmit = (e) => {
    e.preventDefault()
    const found = allPeople.find((people) =>people.name.toLowerCase() === name.toLowerCase())
    setInput(found || {})
}

  return (

    <div className="people">
     <h2>Select A Person</h2>
        <form onSubmit={handleSubmit}>
         <label htmlFor="name"> 
            <input 
            value={name}
            onChange={(e)=>{
                setName(e.target.value)
            }} 
            type="text"
            placeholder="Haku, Louis"
            />
        </label>
        <button type="submit">Submit</button>
        </form>
        {input.id && (
        <aside>
            <h3>Name: {input.name}</h3>
            <p>Age: {input.age}</p>
            <p>Eye Color: {input.eye_color}</p>
            <p>Hair Color: {input.hair_color}</p>
        </aside>
        )
        
      }
      {!input.id && 
      
      (
       
          <p>Not Found</p>
        
        )
        
      }
    </div>
    
  )
}
