import React from "react";
import TextBox from "../Commons/TextBox";
import PlanetList from "../PlanetList";

class SearchStarForms extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      form: {},
      planets: [],
      isSearching: false,
      searchLimitExceed:false
    };
    this.onKeyUp = this.onKeyUp.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.changeInterval = "";
    this.THRESHOLD = 60000;
    this.LUKE = "Luke Skywalker".toLocaleLowerCase()
    this.SEARCH_LIMIT = 15;
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
  // let token = localStorage.getItem("token");
  // let sessionSearchCount = localStorage.getItem("sessionSearchCount") || 0;
  // let user = token.replace("token-for-user@","")
  // if(user.toLowerCase() !== this.LUKE && sessionSearchCount <= 15) {
  //     localStorage.setItem("sessionSearchCount", sessionSearchCount + 1);
  //     reject('Limit Reached')
  // } else


  onKeyUp() {
    // this.props.onKeyUp(this.state.form);
    // wait untill user type in something
    // Don't let call setInterval - clear it, user is still typing
    clearInterval(this.changeInterval);
    this.changeInterval = setInterval(() => {
      let token = localStorage.getItem("token");
      let sessionSearchCount = +(localStorage.getItem("sessionSearchCount")) || 0;
      let user = token.replace("token-for-user@","")

      let prevSearchTimestamp = +(localStorage.getItem("prevSearchTimestamp")) || 0;;
      let searchTimeStampDiff = 0;
      let allowed = false;
      // if prevSearchTimestamp is null use current timestamp to
      if(!prevSearchTimestamp && sessionSearchCount <= this.SEARCH_LIMIT) {
        allowed = true;
        localStorage.setItem("prevSearchTimestamp", Date.now());
      } else {
        searchTimeStampDiff = Date.now() - prevSearchTimestamp;
        // if more than 15 searches in a minute by a person other than luke then allow is false
        if(user.toLowerCase() === this.LUKE) {
          allowed = true
        } else if(user.toLowerCase() !== this.LUKE && searchTimeStampDiff <= this.THRESHOLD && (sessionSearchCount <= this.SEARCH_LIMIT)) {
          allowed = true
        } else if(searchTimeStampDiff > this.THRESHOLD) {
          // one minute passed reset
          allowed = true
          sessionSearchCount = 0;
          localStorage.setItem("sessionSearchCount", sessionSearchCount);
          localStorage.setItem("prevSearchTimestamp", Date.now());
        }
      }

      if(allowed) {
        localStorage.setItem("sessionSearchCount", sessionSearchCount + 1);
        this.setState((previousState, previousProps) => {
          return {
            isSearching: true,
            searchLimitExceed:false
          };
        });
        this.props.onKeyUp(this.state.form).then(() => {
          this.setState((previousState, previousProps) => {
            return {
              gotResponse: true
            };
          });
        });
      } else {
        this.setState({
          searchLimitExceed:true
        })
      }
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
          this.state.searchLimitExceed?<div>Search Limit Exceed</div>:<div>No result(s) found.</div>
        )}
      </div>
    );
  }
}

export default SearchStarForms;
