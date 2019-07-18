import React, { Fragment } from "react";

import Planet from "../Planet";

const PlanetList = ({ list }) => {
    return <Fragment>
        {list.map((v, key) => (
            <Planet
                key={key}
            />
        ))}
    </Fragment>
}

export default PlanetList;
