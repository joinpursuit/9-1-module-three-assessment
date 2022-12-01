import {useState, useEffect} from 'react';

export default function Locations () {
    const [datas, setData] = useState([])
    const [hide, setHide] = useState(false)
    const [location, setLocation] = useState([])

    /* 
    Right Idea wrong execution. 
    
    NOTES TO SELF:
    1. No errors in console
    2. CODE IS SORTING BUT SHOWS CSS AS SPLIT. 
    3. SPAN IS NOT BEING SEEN AS IS
    4. Replace p tags when fixed
    5. over use of hide is to make up for the change being bonded to the sort
    6. Maybe add map into sort? 
    7. buttons are not aligned how they look in photo

    Thoughts: 

    ASK ABOUT NAMING OF CSS why so many ul li and is there a way around it. 
    If it doesn't work you're just going to have to make 3 different functions to sort with...
    Maybe two returns? 3 maybe.
    */

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
            return (
               
                <ul key={id} >
                <ul>
                    <li>
                        <ul>
                            <li><p><span>Name:</span>{name}</p></li>
                       
                            <li><p><span>Climate:</span>{climate}</p></li>
                        
                            <li><p><span>Terrain: </span>{terrain}</p></li>
                        </ul>
                    </li>
                </ul>  
                </ul>
               
            )
        })
        setLocation(findLocations)
        hide ? setHide(false) : setHide(true)
    }

    function handleSort(e){
        const sort = datas.sort(function(a, b){
            if(a[e] > b[e]){
                return 1
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

    return (
        <main className='locations'>
            <h2>List of Locations</h2>
            <button type='submit' onClick={handleChange}>
                {!hide ? 'Show Locations' : 'Hide Locations'}
            </button>
            {hide ? (
                <div>
                   <button type='submit' onClick={() => handleSort('name')}>SORT BY NAME</button>
                   <button type='submit' onClick={() => handleSort('climate')}>SORT BY CLIMATE</button>
                   <button type='submit' onClick={() => handleSort('terrain')}>SORT BY TERRAIN</button>
                </div>
            ): null}
            <div>{hide && location}</div>
        </main>
    );
};