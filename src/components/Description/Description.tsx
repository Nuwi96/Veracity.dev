import * as React from 'react';
import './Description.css';
export interface DescriptionProps {
}

export interface DescriptionState {

}

export default class Description extends React.Component<DescriptionProps, DescriptionState> {
    constructor(props: DescriptionProps) {
        super(props);
        this.state = {};
    }


    public render() {
        return (
            <div>
                <div className="row">
                    <button className="btn bg-danger"><a href="/"></a>Go Back</button>

                    <div className="col-12">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><a href="#">Home</a></li>
                                <li className="breadcrumb-item active"><a href="#">Dead Pool</a></li>
                            </ol>
                        </nav>
                    </div>
                </div>
                <div className="row m-2 mb-4">
                    <div className="border col-6 p-4">
                        <img width="30%" height="100%" src={window.location.origin + `/dd.jpeg`}/>
                    </div>
                    <div className="col-6 text-lg-start">
                        <div className="fa-2x">Dead Pool
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
                            <div><span><i className="fa fa-tag" aria-hidden="true"></i>Action/Adventure</span>
                            </div>
                            <div className="fa-2x">Reviews</div>

                            <div className="d-flex">
                                <div>
                                    <span className="number01">7.6</span><span className="number02">/10</span>
                                </div>
                                <div>
                                    <fieldset className="rating">
                                        <input type="radio" id="star5" name="rating" value="5"/><label className="full"
                                                                                                       htmlFor="star5"
                                                                                                       title="Awesome - 5 stars"></label>
                                        <input type="radio" id="star4half" name="rating" value="4 and a half"/><label
                                        className="half" htmlFor="star4half" title="Pretty good - 4.5 stars"></label>
                                        <input type="radio" id="star4" name="rating" value="4"/><label className="full"
                                                                                                       htmlFor="star4"
                                                                                                       title="Pretty good - 4 stars"></label>
                                        <input type="radio" id="star3half" name="rating" value="3 and a half"/><label
                                        className="half" htmlFor="star3half" title="Meh - 3.5 stars"></label>
                                        <input type="radio" id="star3" name="rating" value="3"/><label className="full"
                                                                                                       htmlFor="star3"
                                                                                                       title="Meh - 3 stars"></label>
                                        <input type="radio" id="star2half" name="rating" value="2 and a half"/><label
                                        className="half" htmlFor="star2half" title="Kinda bad - 2.5 stars"></label>
                                        <input type="radio" id="star2" name="rating" value="2"/><label className="full"
                                                                                                       htmlFor="star2"
                                                                                                       title="Kinda bad - 2 stars"></label>
                                        <input type="radio" id="star1half" name="rating" value="1 and a half"/><label
                                        className="half" htmlFor="star1half" title="Meh - 1.5 stars"></label>
                                        <input type="radio" id="star1" name="rating" value="1"/><label className="full"
                                                                                                       htmlFor="star1"
                                                                                                       title="Sucks big time - 1 star"></label>
                                        <input type="radio" id="starhalf" name="rating" value="half"/><label
                                        className="half"
                                        htmlFor="starhalf"
                                        title="Sucks big time - 0.5 stars"></label>
                                    </fieldset>
                                </div>
                            </div>
                        </div>
                        <div className="subTitle">Synopsis
                        </div>
                        <div>Description</div>
                    </div>
                </div>
            </div>

        )
    }
}
