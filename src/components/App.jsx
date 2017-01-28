import React, { Component } from 'react';

export default class App extends Component {
  render() {
    return (
    <div className="App">
      <div className="title">
        reminder
      </div>
      <div className="form-inline">
        <div className="form-group">
          <input
            className="form-control"
            placeholder="i have to.."
            />
        </div>
        <button
          type="button"
          className="btn btn-success"
          >
          하자!
        </button>
      </div>
    </div>
    );
  }
}
