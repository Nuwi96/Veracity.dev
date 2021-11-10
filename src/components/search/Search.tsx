import * as React from 'react';
import './Search.css';
import 'font-awesome/css/font-awesome.min.css';

export interface SearchProps {
}

export interface SearchState {

}

export default class Search extends React.Component<SearchProps, SearchState> {
    constructor(props: SearchProps) {
        super(props);
        this.state = {};
    }


    public render() {
        return (
            <div className="row m-2 mt-5 mb-4">
                <div className="col-6 offset-3">
                    <div className="input-group mb-3">
                        <input type="text"
                               className="fontAwesome form-control form-input rounded-pill search mr-3"
                               placeholder="&#xF002; Search anything..."/>
                        <div className="input-group-append">
                            <button type="button" className="btn btn-danger btn-rounded rounded-pill">Search</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
