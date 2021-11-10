import http from "../http-common";

const search =(text: string) => {
    return http.post(`search/movie?api_key=66ed895e7cd5320bdb1a8245e2a25f6a&query=`+ text);
};

const getMovies =() => {
    // return http.get(`/discover/movie-discover`);
    return http.get(`https://api.themoviedb.org/3/movie/550?api_key=66ed895e7cd5320bdb1a8245e2a25f6a`);
};

const MovieService = {
    getMovies,
    search
};

export default MovieService;