import React from "react";

class PasswordTextBox extends React.PureComponent {
    constructor(props) {
        super(props)
        this.state = { value: '' }
    }

    render() {
        return <input type="password" {...this.props} />
    }
}

export default PasswordTextBox;
