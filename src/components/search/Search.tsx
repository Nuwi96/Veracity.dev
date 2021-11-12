import * as React from 'react';
import './Search.css';
import 'font-awesome/css/font-awesome.min.css';
import MovieService from "../../services/MovieService";

export interface SearchProps {
    parentCallback: any
}

export interface SearchState {
    search: any
    result: any
}

export default class Search extends React.Component<SearchProps, SearchState> {
    constructor(props: SearchProps) {
        super(props);
        this.state = {
            search: '',
            result: ''
        };
        this.textChange = this.textChange.bind(this);
    }

    search = () => {
        MovieService.search(this.state.search)
            .then(response => {
                this.setState({
                    result: response.data.results,
                });
                this.onTrigger();
            })
            .catch(e => {
            });


    }

    textChange(event: { target: { value: any; }; }) {
        this.setState({search: event.target.value});
    }

    onTrigger = () => {
        console.log('onTrigger');
        this.props.parentCallback(this.state.result);
    };

    public render() {
        return (
            <div className="row m-2 mt-5 mb-4">
                <div className="col-6 offset-3">
                    <div className="input-group mb-3">
                        <input type="text"
                               className="fontAwesome form-control form-input rounded-pill search mr-3"
                               placeholder="&#xF002; Search anything..." onChange={this.textChange}
                               value={this.state.search}/>
                        <div className="input-group-append">
                            <button type="button" className="btn btn-danger btn-rounded rounded-pill"
                                    onClick={this.search}>Search
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
