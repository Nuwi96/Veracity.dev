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
    render:boolean
}
export default class Main extends React.Component<MainProps, MainState> {
    constructor(props: MainProps) {
        super(props);
        this.state = {
            movies: [],
            render:false
        };
        this.getData();

    }

    getData = () => {
        MovieService.getMovies()
            .then(response => {
                this.setState({
                    movies: response.data.results,
                    render:true
                });
            })
            .catch(e => {
            });
    }

    public render() {
        return (
            <div>
                <Search functionCall={this.getData}/>
                <Filter/>
                { this.state.render &&
                <Table tableData = {this.state.movies}/>
                }
            </div>
        )
    }
}
