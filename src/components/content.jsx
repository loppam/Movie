import Movie from "./movie";

const Content = () => {
    return (
        <div className="fullmovie-content">
        <div className="movie-content">
            <label>Search</label>
            <input type="search" name="Movie-Search" id="ms" />
        </div>
        <Movie />
        <Movie />
        </div>
    );
}
 
export default Content;