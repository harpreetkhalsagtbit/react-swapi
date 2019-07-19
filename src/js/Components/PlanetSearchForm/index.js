import React from "react";
import TextBox from "../Commons/TextBox";
import PlanetList from "../PlanetList";

import Button from "../Commons/Button";
import { fail } from "assert";

class SearchStarForms extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      form: {},
      planets: [],
      isSearching: false
    };
    this.onKeyUp = this.onKeyUp.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.changeInterval = "";
  }

  handleChange(event) {
    const { target } = event;
    const { name, value } = target;
    this.setState((previousState, previousProps) => {
      return {
        isSearching: false,
        gotResponse: false,
        form: Object.assign({}, { ...previousState.form }, { [name]: value })
      };
    });
  }

  onKeyUp() {
    // this.props.onKeyUp(this.state.form);
    // wait untill user type in something
    // Don't let call setInterval - clear it, user is still typing
    clearInterval(this.changeInterval);
    this.changeInterval = setInterval(() => {
      this.setState((previousState, previousProps) => {
        return {
          isSearching: true
        };
      });
      this.props.onKeyUp(this.state.form).then(() => {
        console.log("key response");
        this.setState((previousState, previousProps) => {
          return {
            gotResponse: true
          };
        });
      });

      // Typing finished, now you can Do whatever after 2 sec
      clearInterval(this.changeInterval);
    }, 1000);
  }
  componentDidUpdate() {
    if (this.state.gotResponse) {
      this.setState((previousState, previousProps) => {
        return {
          isSearching: false,
          gotResponse: false,
          planets: [...this.props.planets.planets]
        };
      });
    }
  }
  render() {
    return (
      <div className="form-vertical">
        <div className="input-group">
          <label>Search your favourite Star Wars Planet</label>
          <TextBox
            className="txt"
            name="searchStr"
            onChange={this.handleChange}
            onKeyUp={this.onKeyUp}
            placeholder="Search..."
          />
        </div>
        {/* <PlanetList list={this.state.planets} /> */}
        {this.state.isSearching ? (
          "Searching please wait...."
        ) : this.state.planets.length ? (
          <PlanetList list={this.state.planets} />
        ) : (
          <div>No result(s) found.</div>
        )}
      </div>
    );
  }
}

export default SearchStarForms;
