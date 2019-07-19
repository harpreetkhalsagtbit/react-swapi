import React, { Fragment } from "react";
import Button from "../../Components/Commons/Button";

import SearchFormContainer from "../../Containers/PlanetSearchFormContainer";
class Home extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.onClick = this.onClick.bind(this);
  }
  onClick() {
    console.log(this.props)
    const { match: { params }, history } = this.props;
    localStorage.removeItem("token")
    localStorage.removeItem("sessionSearchCount");
    localStorage.removeItem("prevSearchTimestamp");

    history.push('/login');
  }

  render() {
    return (
      <Fragment>
        {/* <Header></Header> */}
        <main>
          <div className="flex-header-row">
            <h3 className="login-title"></h3>
            <h3 className="login-title">Home</h3>
            <Button
              className="btn btn-primary btn-large"
              onClick={this.onClick}
            >
              Logout
            </Button>
          </div>
          <SearchFormContainer />
        </main>
      </Fragment>
    );
  }
}

export default Home;
