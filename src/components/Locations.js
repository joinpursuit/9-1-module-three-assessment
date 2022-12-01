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

    function handleSort (e){
      let dataSet = [...datas]
        dataSet.sort(function(a, b){
        if(a[e] > b[e]){
            return 1
        }else if (a[e] < b[e]){
            return -1
        }else{
            return 0
        }
        })

        setData(dataSet)
    }

    return(
        <main className='locations'>
            <h2>List Of Location</h2>
            <button type='submit' onClick={() => setHide(!hide)}>{!hide ? 'Show Locations' : 'Hide Locations'}</button>

            {hide ? (
                <>
                 <button type='submit' onClick={() => handleSort('name')}>SORT BY NAME</button>
                 <button type='submit' onClick={() => handleSort('climate')}>SORT BY CLIMATE</button>
                 <button type='submit' onClick={() => handleSort('terrain')}>SORT BY TERRAIN</button>
                </>
            ) : null}
    
            <ul className='work'>
                {hide ? datas.map(({id, name, climate, terrain}) => (
                    <ul key={id}>
                    <li>
                        <ul>
                            <ul>
                            <li>
                                <span>Name:</span>{name}
                            </li>
                            </ul>
                            <ul>
                            <li>
                                <span>Climate:</span>{climate}
                            </li>
                            </ul>
                            <ul>
                            <li>
                                <span>Terrain: </span>{terrain}
                            </li>
                            </ul>
                        </ul>
                    </li>
                    </ul>
                  
                )): null}
            </ul>
        </main>
    )
};