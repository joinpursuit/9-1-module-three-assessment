import { Link } from "react-router-dom"

export default function Nav() {
  return (
    <>
        <aside>
            <Link to="/">
                <img
                    src="https://bestanimations.com/media/discs/895872755cd-animated-gif-9.gif"
                    alt="logo"
                    height="50px"
                    width='50px'
                />
            </Link>
        </aside>

        <aside>
            <Link to="/locations">Locations</Link>
        </aside>

        <aside>
            <Link to="/movies">Movies</Link>
        </aside>
        
        <aside>
            <Link to="/people">People</Link>
        </aside>
    </>
  )
}
