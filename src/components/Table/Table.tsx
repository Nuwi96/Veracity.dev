import * as React from 'react';
import './Table.css';
import 'antd/dist/antd.css';
import {Table, Tag} from 'antd';
import MovieService from "../../services/MovieService";
import {Button} from "react-bootstrap";

let gg: Array<any> | null;
let genre: [] | null | undefined;

export interface TableViewProps {
    tableData: [],
    genreList: [],
}

export interface TableViewState {
    genreList: []
}


const columns = [
    {
        title: 'Name',
        key: 'name',
        dataIndex: 'backdrop_path',
        render: (t: any, r: any) => <img className="img" width="100%" height="10%"
                                         src={'https://image.tmdb.org/t/p/original' + `${r.backdrop_path}`}/>
    },
    {
        title: 'Title',
        dataIndex: 'title',
        key: 'age',
    },
    {
        title: 'Genre',
        dataIndex: 'genre_ids',
        key: 'genre_ids',
        render: (genre_ids: any[]) => (
            <>
                {genre_ids.map(tag => {
                    let color = tag.length > 2 ? 'geekblue' : 'green';
                    // gg?.map(val =>{
                    //     if (tag.id === val) {
                    //         color = 'true';
                    //     }
                    // })
                    return (
                        <Tag color={color} key={tag}>
                            {tag}
                        </Tag>
                    );
                })}
            </>
        ),
        // render: (text: any, record: { name: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; }) => (
        //     <span>
        //        {gg?.map((value, index, array) => (
        //            {value,index,array}
        //        ))}
        //     </span>
        // )
    },
    {
        title: 'Rating',
        key: 'vote_average',
        dataIndex: 'vote_average',

    }, {
        title: 'Year',
        key: 'release_date',
        dataIndex: 'release_date',
        render: (release_date: any) => (
            <span>{release_date.split('-')[0]}</span>
        ),
    },
    {
        title: 'Action',
        key: 'action',
        dataIndex: 'backdrop_path',
        render: (text: any, record: any, index: any) => < div className="btn-wrap">
            <a href="/details"><Button className="btn bg-secondary" onClick={
            (e) => {
                console.log("corresponding email is :", record)
            }
            }><i className="fa fa-eye" aria-hidden="true"></i></Button> </a></div>
        // render: (text: any, record: { name: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; }) => (
        //     <span>
        //         <a href="/details"><button className="btn bg-secondary">
        //             <i className="fa fa-eye" aria-hidden="true"></i>
        //         </button></a>
        //     </span>
        // ),
    },
];


export default class TableView extends React.Component<TableViewProps, TableViewState> {
    constructor(props: TableViewProps) {
        super(props);
        this.state = {
            genreList: []
        };
    }

    checkGenre = () => {
        console.log('check');
    }

    public render() {
        return (
            <div className="row m-2">

                <Table columns={columns} dataSource={this.props.tableData}
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
