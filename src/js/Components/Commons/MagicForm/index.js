import React, { Fragment } from "react";
import Form from "../Form";
import FieldGroup from "../FieldGroup";
import MagicGroup from "../MagicGroup";
import Button from "../Button";
import TextBox from "../TextBox";
import TextArea from "../TextArea";
import Select from "../Select";

class MagicForm extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      formJSON: props.formJSON
    };
    console.log()
  }

  componentDidMount() {
    console.log("Magic did mount");
  }

  componentDidUpdate() {
    console.log("Magic did update", this.state,this.props);
    if(this.props.formJSON.length && !this.state.formJSON.length) {
      this.setState((previousState, previousProps) => {
        console.log('inside setstate', previousState, this.props.formJSON)
        // previousState.formData.fields = fields;
        return {
          ...previousState,
          formJSON: [...this.props.formJSON]
        };
      });
    }
  }


  render() {
    console.log("rendering magic form", this.state)
    return (
      <Fragment>
        <Form className="form form-vertical">
          {this.state.formJSON.map((field, index) => {
            if (field.type == "text") {
              return (
                <FieldGroup
                  index={index + "fieldGrp"}
                  label={field.label}
                  className="input-group"
                >
                  <TextBox
                    key={"text" + index}
                    name={field.name}
                    className="txt"
                    value={field.value}
                    parent={this.props.parent}
                    onChange={this.props.handleChange}
                    placeholder={field.placeHolder}
                  />
                </FieldGroup>
              );
            } else if (field.type == "number") {
              return (
                <FieldGroup
                  index={index}
                  label={field.label}
                  className="input-group"
                >
                  <TextBox
                    key={"text" + index}
                    name={field.name}
                    className="txt"
                    value={field.value}
                    parent={this.props.parent}
                    onChange={this.props.handleChange}
                    placeholder={field.placeholder}
                  />
                </FieldGroup>
              );
            } else if (field.type == "long") {
              return (
                <FieldGroup
                  index={index}
                  label={field.label}
                  className="input-group"
                >
                  <TextArea
                    key={"textarea" + index}
                    rows="10"
                    cols="20"
                    name={field.name}
                    value={field.value}
                    className="txt"
                    parent={this.props.parent}
                    onChange={this.props.handleChange}
                    placeholder={field.placeholder}
                  />
                </FieldGroup>
              );
            } else if (/^select/.test(field.type)) {
              let options = field.options || field.type
                .match(/(?<=\[)(.*)(?=\])/g)
                .shift()
                .split(", ");
              return (
                <FieldGroup
                  index={`${index}-fieldGroup-${index}`}
                  label={field.label}
                  className="input-group"
                >
                  <Select
                    key={`${index}-textbox-${index}`}
                    name={field.name}
                    className="txt"
                    value={field.value}
                    onChange={this.props.handleChange}
                    parent={this.props.parent}
                    placeholder={field.placeholder}
                  >
                    {options.map((option, index) => {
                      return (
                        <option key={index} value={option}>
                          {option}
                        </option>
                      );
                    })}
                  </Select>
                </FieldGroup>
              );
            } else if (field.type == "group") {
              return (
                <MagicGroup
                  name={field.name}
                  groupJSON={field.fields}
                  handleChange={this.props.handleChange}
                  parent={this.props.parent}
                  value={field.value}
                />
              );
            } else {
              return (
                <FieldGroup
                  index={index}
                  label={field.label}
                  className="input-group"
                >
                  <TextBox
                    key={"text" + index}
                    name={field.name}
                    className="txt"
                    value={field.value}
                    parent={this.props.parent}
                    onChange={this.props.handleChange}
                    placeholder={field.placeholder}
                  />
                </FieldGroup>
              );
            }
            return "";
          })}
        </Form>
      </Fragment>
    );
  }
}

const sanitizelabel = function(str) {
  return str
    .replace(/./, function($1) {
      return $1.toUpperCase();
    })
    .replace(/_./g, function($1) {
      return $1.replace("_", " ").toUpperCase();
    })
    .replace(/:(.*)/g, "");
};

export default MagicForm;
