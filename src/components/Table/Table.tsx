import * as React from 'react';
import './Table.css';
import 'antd/dist/antd.css';
import {Empty, Skeleton, Table, Tag} from 'antd';
import {Button} from "react-bootstrap";
import {Spin} from 'antd';
import {
    Link
} from 'react-router-dom';


export interface TableViewProps {
    tableData: [],
    genreList: [],
}

export interface TableViewState {
    columns: any,
    loading: boolean,
    defaultPage: number
}


export default class TableView extends React.Component<TableViewProps, TableViewState> {
    constructor(props: TableViewProps) {
        super(props);
        this.state = {
            defaultPage: 1,
            loading: true,
            columns: [
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
                            {genre_ids.map(val => {
                                let tagName;
                                if (undefined !== this.props.genreList.find(item => item['id'] === val)) {
                                    let item = this.props.genreList.find(item => item['id'] === val)
                                    // @ts-ignore
                                    tagName = item['name']
                                } else {
                                    tagName = ''
                                }
                                return (
                                    <Tag key={val}>
                                        {tagName}
                                    </Tag>
                                );
                            })}
                        </>
                    ),
                },
                {
                    title: 'Rating',
                    key: 'vote_average',
                    dataIndex: 'vote_average',

                },
                {
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
                        <Link to={'/details/' + `${record.id}`}><Button className="btn bg-secondary" onClick={
                            (e) => {
                                localStorage.setItem('tableData', JSON.stringify(this.props.tableData));
                            }
                        }><i className="fa fa-eye" aria-hidden="true"></i></Button> </Link></div>,

                },
            ],

        };

    }

    componentDidMount() {
        const page = localStorage.getItem("page");
        if (page != null) {
            this.setState({
                defaultPage: Number(page)
            })
        }
    }

    change = (page: any, pageSize: any) => {
        localStorage.setItem('page', JSON.stringify(page));
        this.setState({
            defaultPage: Number(page)
        })
    }

    public render() {
        return (
            <div className="row m-2">
                {/*<Spin spinning={this.state.loading} size="large" tip="Loading..." delay={500}>*/}
                <Table columns={this.state.columns} dataSource={this.props.tableData}
                       pagination={{
                           current: this.state.defaultPage,
                           onChange: this.change,
                           defaultPageSize: 4,
                           pageSize: 4,
                           showSizeChanger: false,
                           pageSizeOptions: ['10', '20', '30']
                       }}/>
                {/*</Spin>*/}
            </div>
        )
    }
}
