import * as React from 'react';
import './Filter.css';

export interface FilterProps {
}

export interface FilterState {

}

export default class Filter extends React.Component<FilterProps, FilterState> {
    constructor(props: FilterProps) {
        super(props);
        this.state = {};
    }


    public render() {
        return (
            <div className="row m-2 mb-4">
              <div className="col-3">
                  <label htmlFor="" className="float-left form-label fw-bold">Genre</label>
                  <select className="form-control rounded-pill" aria-label="Default select example">
                      <option selected>Open this select menu</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
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
                    <select className="form-control rounded-pill" aria-label="Default select example">
                        <option selected>Open this select menu</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
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
