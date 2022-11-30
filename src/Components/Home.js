import './Home.css'
import homePic from '../assets/spirited-away.gif'

function Home(props) {
    return (
        <div className='home'>
            <h1>Welcome to GhibliApp</h1>
            <p>Destiny J.</p>
            <img src = {homePic} alt = "sprited-away" />
        </div>
        
    );
}

export default Home;