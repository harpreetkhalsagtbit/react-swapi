import React from "react";

class TextArea extends React.PureComponent {
    constructor(props) {
        super(props)
        this.state = { value: '' }
    }

    render() {
        return <textarea {...this.props}></textarea>
    }
}

export default TextArea;
