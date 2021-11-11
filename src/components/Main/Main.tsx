import * as React from 'react';
import 'font-awesome/css/font-awesome.min.css';
import Filter from "../Filter/Filter";
import Search from "../search/Search";
import Table from "../Table/Table";

export interface MainProps {
}

export interface MainState {

}

export default class Main extends React.Component<MainProps, MainState> {
    constructor(props: MainProps) {
        super(props);
        this.state = {};
    }


    public render() {
        return (
            <div>
                <Search/>
                <Filter/>
                <Table/>
            </div>
        )
    }
}
