import React from "react";
import Button from "../Commons/Button";

import "./index.css";

class Planet extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      showDetails: false,
      details: props.details
    };
    this.onClick = this.onClick.bind(this);
  }
  onClick() {
    this.setState((previousState, previousProps) => {
      return {
        showDetails: !previousState.showDetails
      };
    });
  }
  render() {
    let index = this.props.index;
    let details = this.props.details;
    return (
      <div key={index}>
        <div className={`size-${index <= 5 ? index : "other"} planet-row`}>
          <div>
            <span>{details.name}</span>-<span>{details.population}</span>
          </div>
          <div>
            <Button
              className="btn btn-primary btn-large"
              onClick={this.onClick}
            >
                {this.state.showDetails?"Hide details":"Show details"}
            </Button>
          </div>
        </div>
        {this.state.showDetails ? (
          <div className="table">
            <div className="table-header">
              <div className="table-header-cell">Climate</div>
              <div className="table-header-cell">Created</div>
              <div className="table-header-cell">Diameter</div>
              <div className="table-header-cell">Gravity</div>
              <div className="table-header-cell">Orbital Period</div>
              <div className="table-header-cell">Surface Water</div>
              <div className="table-header-cell">Terrain</div>
            </div>
            <div className="table-body">
              <div key={index} className="table-rows">
                <div className="table-row-cell">{details.climate}</div>
                <div className="table-row-cell">{details.created}</div>
                <div className="table-row-cell">{details.diameter}</div>
                <div className="table-row-cell">{details.gravity}</div>
                <div className="table-row-cell">{details.orbital_period}</div>
                <div className="table-row-cell">{details.surface_water}</div>
                <div className="table-row-cell">{details.terrain}</div>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    );
  }
}
export default Planet;
