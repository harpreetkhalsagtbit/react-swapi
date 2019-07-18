import React from "react";
import './index.css';

class TextBox extends React.PureComponent {
    constructor(props) {
        super(props)
        this.state = { value: '' }
    }

    render() {
        return <input type="text" {...this.props} />
    }
}

export default TextBox;
