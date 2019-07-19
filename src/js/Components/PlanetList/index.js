import React, { Fragment } from "react";

import Planet from "../Planet";

const PlanetList = ({ list }) => {
    return <Fragment>
        <h3>Order By Population:</h3>
        {list.map((details, key) => (
            <Planet
                key={key}
                index={key}
                details={details}
            />
        ))}
    </Fragment>
}

export default PlanetList;