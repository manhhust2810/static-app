import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import * as action from "./../../actions/index";

function Header(props) {
    const { 
        createNewTeam,
        searchAnything
    } = props;

    const [search, setSearch] = useState("");
    

    function handleSearchBox(event){
        const { value } = event.target;
        setSearch(value);
        searchAnything(search);
    }

    useEffect(() => { 
        searchAnything(search);   
    }, [searchAnything, search])

    return (
    <div>
        <button
            className = "my-button"
            onClick = {createNewTeam}>
        CREATE NEW TEAM
        </button>
        <input
            className = "my-searchbox"
            onChange = {handleSearchBox}
        />
    </div>)
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        createNewTeam: task => {
            dispatch(action.createNewTeam(task));
        },

        searchAnything: (value) => {
            dispatch(action.searchAnything(value));
        }
    }
};
  
export default connect(null, mapDispatchToProps)(Header);