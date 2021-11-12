import * as React from 'react';
import './Filter.css';
// @ts-ignore
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export interface FilterProps {
    genreList :[]
}

export interface FilterState {
    selectedOption:any
    startDate: Date;
}



export default class Filter extends React.Component<FilterProps, FilterState> {
    constructor(props: FilterProps) {
        super(props);
        this.state = {selectedOption: 'None',startDate: new Date()};
        this.handleChange = this.handleChange.bind(this);
        this.setStartDate = this.setStartDate.bind(this);
    }

    handleChange = (event: { target: { value: any; }; }) => {
        this.setState({
            selectedOption: event.target.value,
        });
    }
    setStartDate = (date: any) => {
        console.log(date);
        this.setState({
            startDate: new Date(date),
        });
    }


    public render() {
        return (
            <div className="row m-2 mb-4">
              <div className="col-3">
                  <label htmlFor="" className="float-left form-label fw-bold">Genre</label>
                  <select className="form-control rounded-pill" aria-label="Default select example"
                      value={this.state.selectedOption}
                      onChange={this.handleChange}
                  >
                      {this.props.genreList.map(({ id, name }, index) => <option value={id} >{name}</option>)}
                  </select>
              </div>
                <div className="col-3">
                    <label htmlFor="" className="float-left form-label fw-bold">Rating</label>
                    <select className="form-control rounded-pill" aria-label="Default select example">
                        <option selected>Open this select menu</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div>
                <div className="col-3">
                    <label htmlFor="" className="float-left form-label fw-bold">Year</label>
                    <DatePicker className="form-control rounded-pill" showYearPicker dateFormat="yyyy"  selected={this.state.startDate} onChange={(date: any) => this.setStartDate(date)} />
                </div>
                <div className="col-3">
                    <label htmlFor="" className="float-left form-label fw-bold">Order By</label>
                    <select className="form-control rounded-pill" aria-label="Default select example">
                        <option selected>Open this select menu</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div>
            </div>
        )
    }
}
