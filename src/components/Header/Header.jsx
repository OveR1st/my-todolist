import './Header.css';

const Header = () => {
  return(
    <div className="header d-flex row justify-content-md-between align-items-center">
        <div className="search-panel col-md-7">
          <input type="text" className="form-control" placeholder="Search?"/>
        </div>
        <div className="button-Filter col-md-4 d-flex justify-content-end p-0">
          <button className="btn btn-outline-primary mr-2">All</button>
          <button className="btn btn-outline-primary mr-2">Active</button>
          <button className="btn btn-outline-primary">Done</button>
        </div>
      </div>
  );
}

export default Header;