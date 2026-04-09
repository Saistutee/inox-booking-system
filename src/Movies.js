import { useNavigate } from "react-router-dom";
import movies from "./data";

function Movies(){

const navigate = useNavigate();

const selectMovie = (movie) => {
localStorage.setItem("selectedMovie", JSON.stringify(movie));
navigate("/theatres");
};

return(

<div className="movies-container">

<h2>Now Showing</h2>

<div className="movie-grid">

{movies.map((movie)=>(
<div 
className="movie-card"
key={movie.id}
onClick={()=>selectMovie(movie)}
>

<img src={movie.image} alt={movie.title}/>

<div className="movie-info">

<h3>{movie.title}</h3>

<div className="movie-meta">
{movie.language} • {movie.duration}
</div>

</div>

</div>
))}

</div>

</div>

);

}

export default Movies;