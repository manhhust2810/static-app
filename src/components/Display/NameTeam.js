import React from "react";
import PropTypes from "prop-types";
import "./NameTeam.css";

function NameTeam({name}){
    return (
        <span className="nameTeam">
            {name}
        </span>
    )
}

NameTeam.propTypes = {
    name: PropTypes.string
};

export default NameTeam;
