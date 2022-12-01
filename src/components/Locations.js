import {useState, useEffect} from 'react';

export default function Locations () {
    //NOTE: This Version looks closer to the photo with the spacing still having left issue. Words are still smooshed. Might still be the Li as believed. Button still in poor placement. May also be CSS issue. Try 3rd attempt and if still happening mess with css before splitting.
    const [datas, setData] = useState([])
    const [hide, setHide] = useState(false)
    const [location] = useState([])

    useEffect(() => {
        fetch('./locations.json')
        .then(res => res.json())
        .then(data => setData(data))
        .catch((err) =>{
            console.log(err)
        });
    }, []) 

     function hideLocations(){
        setHide(!hide)
    }

    // function handleChange(){
    //     const findLocations = datas.map(({id, name, climate, terrain}) => {
    //         //This isnt calling the array
    //         return (
    //             <div className='test'>
    //             <ul key={id} >
    //                 <li>
    //                     <ul>
    //                         <li><span>Name: </span>{name}</li>
                       
    //                         <li><span>Climate: </span>{climate}</li>
                        
    //                         <li><span>Terrain: </span>{terrain}</li>
    //                     </ul>
    //                     {/* css seems to want this but it looks very ugly */}
    //                 </li>
    //                 {/* Note: Even if this works its ugly. Go back to practice for better practice example */}
    //             </ul>
    //             </div>
    //         )
    //     })
    //     setLocation(findLocations)
    //     hide ? setHide(false) : setHide(true)
    //     //might need curly??? 
    // }
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
        setHide(true)
    };
   //NOTE: ISSUE MIGHT BE THE SORT CHOICE

    return (
        <main className='locations'>
            <h2>List of Locations</h2>
            <button type='submit' onClick={hideLocations}>
                {!hide ? 'Show Locations' : 'Hide Locations'}
            </button>
            {/* Note buttons appearing under each other and not next to each other. Ask if Css issue or overcoding issue*/}
            {hide ? (
                <div>
                   <button type='submit' onClick={() => handleSort('name')}>SORT BY NAME</button>
                   {/* Note ask why handle needed the param if I already made function above */}
                   <button type='submit' onClick={() => handleSort('climate')}>SORT BY CLIMATE</button>
                   <button type='submit' onClick={() => handleSort('terrain')}>SORT BY TERRAIN</button>
                   <ul>
                    {datas.map(({ name, climate, terrain}) =>{
                        return (
                            <li>
                                <ul>
                                    <li>
                                    <li><span>Name: </span>{name}</li>
                                    <br/>
                                    <li><span>Climate: </span>{climate}</li>
                                           
                                    <li><span>Terrain: </span>{terrain}</li>
                                    </li>
                                </ul>
                            </li>
                        )
                    })}
                   </ul>
                </div>
            ): null}
            <div>{hide && location}</div>
        </main>
    );
};