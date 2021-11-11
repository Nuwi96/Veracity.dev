import * as React from 'react';
import './Table.css';
import 'antd/dist/antd.css';
import {Table, Tag} from 'antd';
import MovieService from "../../services/MovieService";

export interface TableViewProps {
}

export interface TableViewState {

}

const columns = [
    {
        title: 'Name',
        key: 'name',
        dataIndex: 'name',
        render: (t: any, r: { name: any; }) => <img width="20%" height="10%"
                                                    src={window.location.origin + `/${r.name}`}/>
    },
    {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
    },
    {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
    },
    {
        title: 'Tags',
        key: 'tags',
        dataIndex: 'tags',

    },
    {
        title: 'Action',
        key: 'action',
        render: (text: any, record: { name: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; }) => (
            <span>
                <a href="/details"><button className="btn bg-secondary">
                    <i className="fa fa-eye" aria-hidden="true"></i>
                </button></a>
            </span>
        ),
    },
];

const data = [
    {
        key: '1',
        name: 'dd.jpeg',
        age: 32,
        address: 'New York No. 1 Lake Park',
    },
    {
        key: '2',
        name: 'dd.jpeg',
        age: 42,
        address: 'London No. 1 Lake Park',
        tags: ['loser'],
    },
    {
        key: '3',
        name: 'dd.jpeg',
        age: 52,
        address: 'Sidney No. 1 Lake Park',
        tags: ['cool', 'teacher'],
    },
    {
        key: '4',
        name: 'dd.jpeg',
        age: 62,
        address: 'New York No. 1 Lake Park',
    },
    {
        key: '5',
        name: 'dd.jpeg',
        age: 72,
        address: 'London No. 1 Lake Park',
        tags: ['loser'],
    },
    {
        key: '6',
        name: 'dd.jpeg',
        age: 82,
        address: 'Sidney No. 1 Lake Park',
        tags: ['cool', 'teacher'],
    }, {
        key: '7',
        name: 'dd.jpeg',
        age: 92,
        address: 'New York No. 1 Lake Park',
    },
    {
        key: '8',
        name: 'dd.jpeg',
        age: 12,
        address: 'London No. 1 Lake Park',
        tags: ['loser'],
    },
    {
        key: '9',
        name: 'dd.jpeg',
        age: 22,
        address: 'Sidney No. 1 Lake Park',
        tags: ['cool', 'teacher'],
    }, {
        key: '10',
        name: 'dd.jpeg',
        age: 17,
        address: 'New York No. 1 Lake Park',
    },
    {
        key: '11',
        name: 'dd.jpeg',
        age: 45,
        address: 'London No. 1 Lake Park',
        tags: ['loser'],
    },
    {
        key: '12',
        name: 'dd.jpeg',
        age: 96,
        address: 'Sidney No. 1 Lake Park',
        tags: ['cool', 'teacher'],
    },
];

export default class TableView extends React.Component<TableViewProps, TableViewState> {
    constructor(props: TableViewProps) {
        super(props);
        this.state = {};

    }

    getData = () => {
        MovieService.getMovies()
            .then(response => {
                console.log(response);
            })
            .catch(e => {
            });
    }

    search = () => {
        var text = 'my first love'
        MovieService.search(text)
            .then(response => {
                console.log(response);
            })
            .catch(e => {
            });
    }

    public render() {
        return (
            <div className="row m-2">
                <Table columns={columns} dataSource={data}
                       pagination={{
                           defaultPageSize: 4,
                           pageSize: 4,
                           showSizeChanger: false,
                           pageSizeOptions: ['10', '20', '30']
                       }}/>
            </div>
        )
    }
}
