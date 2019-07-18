import React from "react";

class Select extends React.PureComponent {
    constructor(props) {
        super(props)
        this.state = { value: '' }
    }

    render() {
        return <select {...this.props}>{this.props.children}</select>
    }
}

export default Select;
