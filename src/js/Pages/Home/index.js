import React, { Fragment } from "react";
// import { Link } from "react-router-dom";

// import Header from "../../Components/Commons/Header";
import SearchFormContainer from '../../Containers/PlanetSearchFormContainer'
class Home extends React.PureComponent {
    render() {
        return (
            <Fragment>
                {/* <Header></Header> */}
                <main>
                    <h3 className="login-title">Home</h3>
                    <SearchFormContainer></SearchFormContainer>
                </main>
            </Fragment>
        );
    }
}

export default Home;
