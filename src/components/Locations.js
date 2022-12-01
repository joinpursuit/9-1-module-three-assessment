import {useState, useEffect} from 'react';

export default function Locations () {
    const [datas, setData] = useState([])
    const [hide, setHide] = useState(false)

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

    function handleSort(){
        const sort = datas.sort(function(a, b){
            if(a > b){
                return 1
            }else if (a < b){
                return -1
            }else{
                return 0
            }
        })
        setData(sort)
    };
    return (
        <main className='locations'>
            <h2>List of Locations</h2>
            <button type='submit' onClick={hideLocations}>
                {!hide ? 'Show Locations' : 'Hide Locations'}
            </button>
            {hide ? (
                <div>
                   <button type='submit' onClick={() => handleSort('name')}>SORT BY NAME</button>
                   <button type='submit' onClick={() => handleSort('climate')}>SORT BY CLIMATE</button>
                   <button type='submit' onClick={() => handleSort('terrain')}>SORT BY TERRAIN</button>
                   <ul>
                    {datas.map(({id, name, climate, terrain}) =>{
                        return (
                            <ul key={id}>
                            <li>
                              <ul>
                                <li>
                                  <span>Name: </span> {name}
                                </li>
                                <li>
                                  <span>Climate: </span> {climate}
                                </li>
                                <li>
                                  <span>Terrain: </span> {terrain}
                                </li>
                              </ul>
                            </li>
                          </ul>
                        )
                    })}
                   </ul>
                </div>
            ): null}
        </main>
    );
};