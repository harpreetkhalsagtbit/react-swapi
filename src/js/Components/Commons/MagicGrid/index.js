import React, { Fragment } from "react";
import Button from "../Button";
import TextBox from "../TextBox";
import Select from "../Select";

class MagicGrid extends React.PureComponent {
  constructor(props) {
    super(props);

    this.structure = props.groupJSON;
    let headerItems = this.structure.map(item => {
      return {
        title: item.label
      };
    });
    headerItems.push({
      title: "Action"
    });

    let tempRow = this.structure.map(item => {
      return item;
    });

    let tempRowData = {};
    this.structure.map(item => {
      tempRowData[item.name] = "";
    });

    tempRow.push({
      type: "button",
      name: "add-new-row",
      label: "Add (+)",
      value: "",
      onClick: this.addNewRow.bind(this),
      validation: {}
    });
    console.log(props.value);
    let gridRows = [];
    if (props.value && props.value.length) {
      props.value.map(rowData => {
        let newRow = this.structure.map(item => {
          item.value = rowData[item.name];
          return item;
        });
        newRow.push({
          type: "button",
          name: "remove-new-row",
          label: "Remove (-)",
          value: "",
          onClick: this.removeRow.bind(this),
          validation: {}
        });
        gridRows.push(newRow);
      });
    }
    this.state = {
      gridRows: gridRows,
      headerItems: headerItems,
      tempRow: tempRow,
      tempRowData: tempRowData,
      gridRowsData: props.value || []
    };
    console.log(tempRow, "tempRow");
    // this.addNewRow = this.addNewRow.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeTempRow = this.handleChangeTempRow.bind(this);
  }

  componentDidMount() {
    console.log("Magic did mount");
  }
  componentDidUpdate() {
    console.log("magic grid did update", this.props, this.state.gridRowsData)
    if(!this.state.gridRowsData.length && this.props.value && this.props.value.length) {
      let gridRows = [];
      this.props.value.map(rowData => {
        let newRow = this.structure.map(item => {
          item.value = rowData[item.name];
          return item;
        });
        newRow.push({
          type: "button",
          name: "remove-new-row",
          label: "Remove (-)",
          value: "",
          onClick: this.removeRow.bind(this),
          validation: {}
        });
        gridRows.push(newRow);
      });

      this.setState(prevState => {
        return {
          ...prevState,
          gridRows,
          gridRowsData: [...this.props.value],
        };
      });
    }

  }
  handleChange() {
    const { target } = event;
    const { name, value } = target;
    const rowIndex = event.target.getAttribute("rowindex");
    const parent = event.target.getAttribute("parent");
    console.log("**********, name, valule", name, value)
    this.setState(prevState => {
      prevState.gridRowsData[rowIndex][name] = value;
      // event.target.name = parent;
      // event.target.value = JSON.stringify(prevState.gridRowsData);
      // console.log(JSON.stringify(prevState.gridRowsData))
      // console.log(event.target)
      this.props.handleChange(prevState.gridRowsData);
      // // reset again
      // event.target.name = name;
      // event.target.value = value;
      return {
        gridRowsData: [...prevState.gridRowsData]
      };
    });
  }

  handleChangeTempRow() {
    const { target } = event;
    const { name, value } = target;
    this.setState(prevState => {
      prevState.tempRowData[name] = value;
      return {
        tempRowData: { ...prevState.tempRowData }
      };
    });
  }

  removeRow() {
    const rowIndex = event.target.getAttribute("rowindex");
    this.setState(prevState => {
      prevState.gridRowsData = prevState.gridRowsData.filter((row, index) => {
        if (index != rowIndex) {
          return true;
        } else {
          return false;
        }
      });
      prevState.gridRows = prevState.gridRows.filter((row, index) => {
        if (index != rowIndex) {
          return true;
        } else {
          return false;
        }
      });
      this.props.handleChange(prevState.gridRowsData);

      return {
        gridRowsData: [...prevState.gridRowsData],
        gridRows: [...prevState.gridRows]
      };
    });
  }
  addNewRow() {
    const { target } = event;
    const { name, value } = target;
    const parent = event.target.getAttribute("parent");
    let newRow = this.structure.map(item => {
      return item;
    });
    let newRowData = {};
    let resetTempData = {};
    this.structure.map(item => {
      newRowData[item.name] = this.state.tempRowData[item.name] || "";
      resetTempData[item.name] = "";
    });

    newRow.push({
      type: "button",
      name: "remove-new-row",
      label: "Remove (-)",
      value: "",
      onClick: this.removeRow.bind(this),
      validation: {}
    });
    this.setState(prevState => {
      prevState.gridRows.push(newRow);
      prevState.gridRowsData.push(newRowData);
      prevState.tempRowData = resetTempData;

      event.target.name = parent;
      event.target.value = JSON.stringify(prevState.gridRowsData);

      this.props.handleChange(prevState.gridRowsData);
      // reset again
      event.target.name = name;
      event.target.value = value;

      return {
        tempRowData: { ...prevState.tempRowData },
        gridRows: [...prevState.gridRows]
      };
    });
  }
  generateRow({ row, rowIndex, rowData }) {
    return row.map((field, index) => {
      if (field.type == "text") {
        return (
          <div index={index + "fieldGrp"} className="input-group">
            <TextBox
              key={"text-" + rowIndex + "-" + index}
              index={"text-" + rowIndex + "-" + index}
              name={field.name}
              className="txt"
              rowindex={rowIndex}
              parent={this.props.parent}
              value={rowData[field.name]}
              onChange={this.handleChange}
              placeholder={field.placeholder || field.label}
            />
          </div>
        );
      } else if (field.type == "number") {
        return (
          <div index={index + "fieldGrp"} className="input-group">
            <TextBox
              key={"text-" + rowIndex + "-" + index}
              index={"text-" + rowIndex + "-" + index}
              name={field.name}
              className="txt"
              rowindex={rowIndex}
              parent={this.props.parent}
              value={rowData[field.name]}
              onChange={this.handleChange}
              placeholder={field.placeholder || field.label}
            />
          </div>
        );
      } else if (field.type == "select") {
        console.log(rowData, field)
        let options = field.options || [];
        return (
          <div index={index + "fieldGrp"} className="input-group">
            <Select
              key={"text-" + rowIndex + "-" + index}
              index={"text-" + rowIndex + "-" + index}
              name={field.name}
              className="txt"
              rowindex={rowIndex}
              parent={this.props.parent}
              value={rowData[field.name]}
              onChange={this.handleChange}
              placeholder={field.placeholder || field.label}
            >
              {options.map((option, index) => {
                return (
                  <option key={index} value={option.value}>
                    {option.label}
                  </option>
                );
              })}
            </Select>
          </div>
        );
      } else if (field.type == "button") {
        return (
          <div index={index + "fieldGrp"} className="input-group align-center">
            <Button
              key={"btn-" + rowIndex + "-" + index}
              index={"btn-" + rowIndex + "-" + index}
              rowindex={rowIndex ? rowIndex : undefined}
              parent={this.props.parent}
              className={"btn btn-no-fill btn-small"}
              onClick={field.onClick}
            >
              {field.label}
            </Button>
          </div>
        );
      }
    });
  }

  generateTempRow({ row, rowData }) {
    return row.map((field, index) => {
      if (field.type == "text") {
        return (
          <div
            className="input-group"
            index={index + "fieldGrp"}
            label={field.label}
            className="input-group"
          >
            <TextBox
              key={"text-temp-" + index}
              index={"text-temp-" + index}
              name={field.name}
              className="txt"
              parent={this.props.parent}
              value={rowData[field.name]}
              onChange={this.handleChangeTempRow}
              placeholder={field.placeholder || field.label}
            />
          </div>
        );
      } else if (field.type == "number") {
        return (
          <div
            className="input-group"
            index={index + "fieldGrp"}
            label={field.label}
            className="input-group"
          >
            <TextBox
              key={"text-temp-" + index}
              index={"text-temp-" + index}
              name={field.name}
              className="txt"
              parent={this.props.parent}
              value={rowData[field.name]}
              onChange={this.handleChangeTempRow}
              placeholder={field.placeholder || field.label}
            />
          </div>
        );
      } else if (/^select/.test(field.type)) {
        let options = field.options || [];
        return (
          <div
            className="input-group"
            index={index + "fieldGrp"}
            label={field.label}
            className="input-group"
          >
            <Select
              key={"text-temp-" + index}
              name={field.name}
              className="txt"
              value={field.value}
              onChange={this.handleChangeTempRow}
              parent={this.props.parent}
              placeholder={field.placeholder}
            >
              {options.map((option, index) => {
                return (
                  <option key={index} value={option.value}>
                    {option.label}
                  </option>
                );
              })}
            </Select>
          </div>
        );
      } else if (field.type == "button") {
        return (
          <div index={index + "fieldGrp"} className="input-group align-center">
            <Button
              key={"btn-temp" + index}
              index={"btn-temp" + index}
              className={"btn btn-no-fill btn-small"}
              parent={this.props.parent}
              onClick={field.onClick}
            >
              {field.label}
            </Button>
          </div>
        );
      }
    });
  }

  render() {
    console.log("rendering....", this.state.gridRowsData, this.state.gridRows)
    return (
      <Fragment>
        <div className="grid-container">
          <div className="grid-header">
            <ul className="grid grid-auto-col-no-gap">
              {this.state.headerItems.map((item, index) => {
                return (
                  <li key={"header-title-" + index} className="nav-buttons">
                    {item.title}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="grid-body">
            {this.state.gridRows.map((row, rowIndex) => {
              return (
                <div className="grid grid-auto-col">
                  {this.generateRow({
                    row,
                    rowIndex,
                    rowData: this.state.gridRowsData[rowIndex] || []
                  })}
                </div>
              );
            })}
            <div className="grid grid-auto-col">
              {this.generateTempRow({
                row: this.state.tempRow,
                rowData: this.state.tempRowData
              })}
            </div>
          </div>
        </div>
        {/* <div className="grid grid-auto-row">
          {this.state.gridRows.map((row, rowIndex) => {
            return (
              <div className="grid grid-auto-col">
                {this.generateRow(row, rowIndex)}
              </div>
            );
          })}
          <div className="grid grid-auto-col">
            {this.generateRow(this.state.groupJSON)}
          </div>
        </div> */}
      </Fragment>
    );
  }
}

export default MagicGrid;
