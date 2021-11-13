import * as React from 'react';
import './Description.css';
import MovieService from "../../services/MovieService";
import {Rating} from 'react-simple-star-rating';

export interface DescriptionProps {

}

export interface DescriptionState {
    id: any,
    data: any,
    genres: [],
    rating: any;

}

export default class Description extends React.Component<DescriptionProps, DescriptionState> {
    constructor(props: DescriptionProps) {
        super(props);
        this.state = {
            id: window.location.pathname.split('/')[2],
            data: [],
            genres: [],
            rating: ''
        };
        this.getMovieDetails()
    }

    getMovieDetails = () => {
        MovieService.getSelectedMovie(this.state.id)
            .then(response => {
                this.setState({
                    data: response.data,
                    genres: response.data.genres
                });
            })
            .catch(e => {
            });

    }
    handleRating = (rate: any) => {
        this.setState({
            rating: rate
        })
    }

    public render() {
        return (
            <div className="card mt-5">
                {/*<button onClick={this.navigation}>Back</button>*/}
                <div className="row mt-2 pt-2">
                    <div className="col-12">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><a href="/">Home</a></li>
                                <li className="breadcrumb-item active"><a>{this.state.data.title}</a></li>
                            </ol>
                        </nav>
                    </div>
                </div>
                <div className="row m-3 mb-4">
                    <div className="col-5 d-flex">
                        <img width="100%" height="100%"
                             src={'https://image.tmdb.org/t/p/original' + `${this.state.data.backdrop_path}`}/>
                    </div>
                    <div className="col-7 text-left">
                        <div className="fa-2x">{this.state.data.title}
                        </div>
                        <div className="d-flex">
                            <div className="fa-3x">
                                2016
                            </div>
                            <div className="ml-auto">
                                <button className="btn bg-secondary"><i className="fa fa-bookmark"
                                                                        aria-hidden="true"></i></button>
                            </div>
                        </div>
                        <div>
                            <div className="text-left"><i className="fa fa-tag  mr-2" aria-hidden="true"></i>
                                {this.state.genres.length > 0 ? this.state.data.genres.map((item: any) => (
                                    <span>{item.name} /</span>
                                )) : ''}
                            </div>
                            <div className="fa-2x">Reviews</div>
                            <div className="d-flex">
                                <div>
                                    <span className="number01">{this.state.data.vote_average}</span><span
                                    className="number02">/10</span>
                                </div>
                                <div>
                                    <fieldset>
                                        <Rating stars={10} onClick={this.handleRating}
                                                ratingValue={this.state.data.vote_average}
                                                emptyColor={'#cccccc'} fillColor={'#f1a545'}/* Rating Props */ />
                                    </fieldset>
                                </div>
                            </div>
                        </div>
                        <div className="subTitle">{this.state.data.tagline}
                        </div>
                        <div>{this.state.data.overview}</div>
                    </div>
                </div>
            </div>

        )
    }
}
