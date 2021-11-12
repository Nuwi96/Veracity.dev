import * as React from 'react';
import './Filter.css';
// @ts-ignore
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {Rating, RatingView} from "react-simple-star-rating";
import MovieService from "../../services/MovieService";

export interface FilterProps {
    genreList: [],
    parentCallback: any
}

export interface FilterState {
    genre: any
    startDate: Date;
    rating: any;
    sortBy: any;
    result: any
}


export default class Filter extends React.Component<FilterProps, FilterState> {
    constructor(props: FilterProps) {
        super(props);
        this.state = {
            startDate: new Date(), rating: '',
            genre: '',
            sortBy: '', result: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.setStartDate = this.setStartDate.bind(this);
        this.ratingChange = this.ratingChange.bind(this);
        this.sortBy = this.sortBy.bind(this);
    }

    filterDetails = () => {
        var genre = this.state.genre;
        var rating = this.state.rating;
        var date = new Date(this.state.startDate).getFullYear();
        var sortBy: string;
        if ('RATING' === this.state.sortBy
        ) {
            sortBy = 'vote_average.desc'
        } else if ('POPULARITY' === this.state.sortBy
        ) {
            sortBy = 'popularity.desc'
        } else {
            sortBy = ''
        }

        MovieService.filterData(genre, rating, sortBy, date)
            .then(response => {
                this.setState({
                    result: response.data.results,
                }, () => {
                    this.onTrigger();
                });

            })
            .catch(e => {
            });

    }
    handleChange = (event: { target: { value: any; }; }) => {
        this.setState({
                genre: event.target.value,
            }, () => {
                this.filterDetails()
            }
        );
    }

    ratingChange = (event: { target: { value: any; }; }) => {
        this.setState({
                rating: event.target.value,
            }, () => {
                this.filterDetails()
            }
        );
    }
    sortBy = (event: { target: { value: any; }; }) => {
        this.setState({
                sortBy: event.target.value,
            }, () => {
                this.filterDetails()
            }
        );
    }

    setStartDate = (date: any) => {
        this.setState({
                startDate: new Date(date),
            }, () => {
                this.filterDetails()
            }
        );
    }
    onTrigger = () => {
        this.props.parentCallback(this.state.result);
    };

    public render() {
        return (
            <div className="row m-2 mb-4">
                <div className="col-3">
                    <label htmlFor="" className="float-left form-label fw-bold">Genre</label>
                    <select className="form-control rounded-pill" aria-label="Default select example"
                            value={this.state.genre}
                            onChange={this.handleChange}
                    >
                        <option value="">Select a genre</option>
                        {this.props.genreList.map(({id, name}, index) => <option value={id}>{name}</option>)}
                    </select>
                </div>
                <div className="col-3">
                    <label htmlFor="" className="float-left form-label fw-bold">Rating</label>
                    <select className="form-control rounded-pill" aria-label="Default select example"
                            value={this.state.rating}
                            onChange={this.ratingChange}>
                        <option value="">Select a rating</option>
                        {
                            [...Array(10)].map((elementInArray, index) => (
                                    <option value={index}>
                                        {index + 1}
                                    </option>
                                )
                            )
                        }
                    </select>
                </div>
                <div className="col-3">
                    <label htmlFor="" className="float-left form-label fw-bold">Year</label>
                    <DatePicker className="form-control rounded-pill" showYearPicker dateFormat="yyyy"
                                selected={this.state.startDate} onChange={(date: any) => this.setStartDate(date)}/>
                </div>
                <div className="col-3">
                    <label htmlFor="" className="float-left form-label fw-bold">Order By</label>
                    <select className="form-control rounded-pill" aria-label="Default select example"
                            value={this.state.sortBy}
                            onChange={this.sortBy}>
                        <option selected value="">select an option</option>
                        <option value="RATING">Ratings</option>
                        <option value="POPULARITY">Popularity</option>
                    </select>
                </div>
            </div>
        )
    }
}
