import http from "../http-common";

const search = (text: string) => {
    return http.get(`search/movie?api_key=66ed895e7cd5320bdb1a8245e2a25f6a&query=` + text);
};

const getMovies = () => {
    return http.get(`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=66ed895e7cd5320bdb1a8245e2a25f6a`);
};

const getGenreList = () => {
    return http.get('https://api.themoviedb.org/3/genre/movie/list?api_key=66ed895e7cd5320bdb1a8245e2a25f6a')
}

const getSelectedMovie = (id: string) => {
    return http.get('https://api.themoviedb.org/3/movie/' + id + '?api_key=66ed895e7cd5320bdb1a8245e2a25f6a')
}

const filterData = (genre: any, rating: any, year: any, sortBy: any) => {
    return http.get('https://api.themoviedb.org/3/discover/movie?with_genres=' + genre + '&primary_release_year=' + year + '&sort_by=' + sortBy + '&api_key=66ed895e7cd5320bdb1a8245e2a25f6a')
}

const MovieService = {
    getMovies,
    search,
    getGenreList,
    getSelectedMovie,
    filterData
};

export default MovieService;