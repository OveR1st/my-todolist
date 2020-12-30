import React, { Fragment } from 'react';

import './app.css';

const App = () => {
  return (
    <div>
      <div className="header d-flex row justify-content-md-between align-items-center">
        <h1 className="col-md-6 p-0">ToDo List</h1>
        <div className="button-Filter col-md-6 d-flex justify-content-end p-0">
          <button className="btn btn-outline-primary mr-2">All</button>
          <button className="btn btn-outline-primary mr-2">Active</button>
          <button className="btn btn-outline-primary">Done</button>
        </div>
      </div>

      <div className="search-panel row">
        <input type="text" className="form-control col-md-12" placeholder="Search?"/>
      </div>

      <div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">Cras justo odio</li>
          <li class="list-group-item">Dapibus ac facilisis in</li>
          <li class="list-group-item">Morbi leo risus</li>
        </ul>
      </div>

      <div className="row d-flex justify-content-between">
        <input type="text" className="form-control col-md-9" placeholder="Add Item"/>
        <button className="btn btn-success col-md-3">Add Item</button>
      </div>
    </div>
  );   
}
export default App;
