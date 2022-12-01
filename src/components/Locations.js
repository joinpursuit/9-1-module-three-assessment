import {useState, useEffect} from 'react';

export default function Locations () {
    const [datas, setData] = useState([])
    const [hide, setHide] = useState(false)
    const [location, setLocation] = useState([])

    useEffect(() => {
        fetch('./locations.json')
        .then(res => res.json())
        .then(data => setData(data))
        .catch((err) =>{
            console.log(err)
        });
    }, []) 

    function handleChange(){
        const findLocations = datas.map(({id, name, climate, terrain}) => {
            //This isnt calling the array
            return (
                <div className='test'>
                <ul key={id} >
                    <li>
                        <ul>
                            <li><span>Name: </span>{name}</li>
                       
                            <li><span>Climate: </span>{climate}</li>
                        
                            <li><span>Terrain: </span>{terrain}</li>
                        </ul>
                        {/* css seems to want this but it looks very ugly */}
                    </li>
                    {/* Note: Even if this works its ugly. Go back to practice for better practice example */}
                </ul>
                </div>
            )
        })
        setLocation(findLocations)
        hide ? setHide(false) : setHide(true)
        //might need curly??? 
    }
    //This is meant to pull up locations if it works. 

    function handleSort(e){
        //Ask how to do this with a Tenarary
        const sort = datas.sort(function(a, b){
            if(a[e] > b[e]){
                return 1
                //see if works when removing curly after refactor 
                //see if works without returns
            }else if (a[e] < b[e]){
                return -1
            }else{
                return 0
            }
        })
        setData(sort)
        handleChange()
        setHide(true)
    };
    //This is meant to search all thingys without making me make 3 different ones if works

    return (
        <main className='locations'>
            <h2>List of Locations</h2>
            <button type='submit' onClick={handleChange}>
                {!hide ? 'Show Locations' : 'Hide Locations'}
            </button>
            {/* Note buttons appearing under each other and not next to each other. Ask if Css issue or overcoding issue*/}
            {hide ? (
                <div>
                   <button type='submit' onClick={() => handleSort('name')}>SORT BY NAME</button>
                   {/* Note ask why handle needed the param if I already made function above */}
                   <button type='submit' onClick={() => handleSort('climate')}>SORT BY CLIMATE</button>
                   <button type='submit' onClick={() => handleSort('terrain')}>SORT BY TERRAIN</button>
                </div>
            ): null}
            <div>{hide && location}</div>
        </main>
    );
};