
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import SearchIcon from './search.svg';
// import Movie from './Movie';

// const API_URL = 'http://www.omdbapi.com?apiKey=ff1f118e';


const App = () => {
    // const [movies, setMovies] = useState([]);
    // const [searchTerm, setSearchTerm] = useState('');

    // const searchMoveis = async(title) => {
    //     const response = await fetch(`${API_URL}&s=${title}`)
    //     const data  = await response.json();

    //     setMovies(data.Search);        
    // }

    // useEffect(() => {
    //     // searchMoveis('flash');
    // }, [])

    return (
        <>           
            <Navbar title="My React App"/>
            {/* <img alt="hero" src="https://picsum.photos/seed/picsum/1800/600" /> */}
            <TextForm heading="Process your strings"/>
        </>
    )
}

export default App;