import React from "react";

class Dashboard extends React.Component {
  state = {
    value: null
  };

  componentDidMount() {
    fetch("https://api.countapi.xyz/update/atmish/myproject/?amount=1").then(
      (resp) => {
        resp.json().then((result) => {
          console.log(result.value);
          this.setState({ value: result.value });
        });
      }
    );
  }
  render() {
    return (
      <>
        <div className="container">
          <div className="card text-white bg-primary mb-3">
            <div className="card-header">
              <h1>Welcome To Dashboard</h1>
            </div>
            <div className="card-body">
              <h2 className="card-title">Total website Visit</h2>
              <p className="card-text">
                <div class="badge bg-success text-wrap">
                  <h3>{this.state.value}</h3>
                </div>
              </p>
            </div>
          </div>
          <img
            src="https://images.pexels.com/photos/374006/pexels-photo-374006.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            class="img-fluid"
            alt="..."
          />
        </div>
      </>
    );
  }
}
export default Dashboard;
