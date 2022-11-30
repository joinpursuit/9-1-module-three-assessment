import './Nav.css'
import { Link } from 'react-router-dom'


export default function Nav(){
    return(
        <nav className='nav'>
            <Link to='/'>
             <img src="https://image.pngaaa.com/15/2943015-middle.png" alt='logo' />
            </Link>
            <Link to='/movies'>
                Movies
            </Link>
            <Link to='/people'>
                People
            </Link>
            <Link to='/Locations'>
                Locations
            </Link>
            
        </nav>
    )
}