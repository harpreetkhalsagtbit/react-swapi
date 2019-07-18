import React, { Fragment } from "react";
import { Link } from "react-router-dom";

class Header extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="header">
                <div>Logo</div>
                <div><Link to="/settings"><span>settings</span></Link></div>
            </div>
        );
    }
}

export default Header;
