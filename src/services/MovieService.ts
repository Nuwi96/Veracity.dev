import http from "../http-common";

const search = (text: string) => {
    return http.get(`search/movie?api_key=66ed895e7cd5320bdb1a8245e2a25f6a&query=` + text);
};

const getMovies = () => {
    return http.get(`discover/movie?sort_by=popularity.desc&api_key=66ed895e7cd5320bdb1a8245e2a25f6a`);
};

const getGenreList = () => {
    return http.get('genre/movie/list?api_key=66ed895e7cd5320bdb1a8245e2a25f6a')
}

const getSelectedMovie = (id: string) => {
    return http.get('movie/' + id + '?api_key=66ed895e7cd5320bdb1a8245e2a25f6a')
}

const filterData = (genre: any, rating: any, sortBy: any, year: any) => {
    return http.get('discover/movie?with_genres=' + genre + '&primary_release_year=' + year + '&sort_by=' + sortBy + '&vote_average.gte=' + rating + '&api_key=66ed895e7cd5320bdb1a8245e2a25f6a')
}

const MovieService = {
    getMovies,
    search,
    getGenreList,
    getSelectedMovie,
    filterData
};

export default MovieService;