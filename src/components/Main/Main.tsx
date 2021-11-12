import * as React from 'react';
import 'font-awesome/css/font-awesome.min.css';
import Filter from "../Filter/Filter";
import Search from "../search/Search";
import Table from "../Table/Table";
import MovieService from "../../services/MovieService";

export interface MainProps {
}

export interface MainState {
    movies: [],
    genreList: [],
    render: boolean,
}

export default class Main extends React.Component<MainProps, MainState> {
    constructor(props: MainProps) {
        super(props);
        this.state = {
            movies: [],
            genreList: [],
            render: false,
        };
        this.getData();
        this.getGenreList();
    }

    getGenreList = () => {
        MovieService.getGenreList()
            .then(response => {
                this.setState({
                    genreList: response.data.genres,
                });

            })
            .catch(e => {
            });
    }
    getData = () => {
        MovieService.getMovies()
            .then(response => {
                this.setState({
                    movies: response.data.results,
                    render: true
                });
            })
            .catch(e => {
            });
    }
    handleCallback = (childData: []) => {
        this.setState({movies: childData})
    }

    public render() {
        return (
            <div>
                <Search parentCallback={this.handleCallback}/>
                <Filter parentCallback={this.handleCallback} genreList={this.state.genreList}/>
                {this.state.render &&
                <Table genreList={this.state.genreList} tableData={this.state.movies}/>
                }
            </div>
        )
    }
}
