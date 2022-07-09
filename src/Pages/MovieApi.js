import { useState } from "react";
import ApiTemplate from "../Components/Api/ApiTemplate";

function MovieApi() {
    const [movie,setMovie] = useState('');
    const [responseObj, setResponseObj] = useState({});
    const [streaming, setStreaming] = useState({});

    function getMovies (e) {

        e.preventDefault();
        
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=f0f120ed822a56b7ddce6417f88181dc&query=${movie}&page=1`)
	.then(response => response.json())
	.then(response => {
        console.log(response)
        setResponseObj(response.results[0])
        console.log(response.results[0].id)
    }
    )
	.catch(err => console.error(err));
    fetch(`https://api.themoviedb.org/3/movie/${responseObj.id}/watch/providers?api_key=f0f120ed822a56b7ddce6417f88181dc`)
	.then(watch => watch.json())
	.then(watch => {
        console.log(watch)
        setStreaming(watch.results['US'])
    }
    )

    }
    
    
    
    return ( 
        <section><h1>Movie Finder!</h1>
        <form onSubmit={getMovies}> 
        <label>
            Movie Title: 
        </label>
            <input type = "text"
            placeholder='Enter Movie'
            maxLength="50"
            value={movie}
            onChange= {(e) => setMovie(e.target.value)}
            />
        
        </form>
        <ApiTemplate
        responseObj = {responseObj}
        streaming= {streaming}
        />
            
       
            </section>
     );
}

export default MovieApi;