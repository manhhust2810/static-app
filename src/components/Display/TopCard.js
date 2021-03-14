import NameTeam from "./NameTeam.js";
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import "./TopCard.css";
import * as action from "./../../actions/index";
import { BsTrashFill } from "react-icons/bs";
import { FaCheckCircle, FaPencilAlt } from "react-icons/fa";
import styled from 'styled-components';

function TopCard(props) {
  const {
    handleEditTeamName,
    name,
    id,
    isEditing,
    deleteTeamById,
    changeNameById
  } = props;

  const iconStyle = {
      color: "green"
    }

  const [value, setValue] = useState(name);

  function handleClearTeam() {
    deleteTeamById(id);
  }

  useEffect(() => {
    setValue(name)
  }, [isEditing])

  function handleSaveName(event) {
    handleEditTeamName(id, event);
    changeNameById(id, value);
  }

  function handleChangeName(event) {
    const { value: newName } = event.target;
    setValue(newName);
  }

  return (
      <span className="topCardStyle">
        {(isEditing)
          ?
          <span>
            <Input
              type="text"
              onChange={handleChangeName}
            />
            <FaCheckCircle 
              className="iconStyle symbolStyle"
              style={iconStyle}
              onClick={handleSaveName}
            />
          </span>
          :
          <span>
            <NameTeam
              className="nameStyle"
              name={name}
            />
            <span className="iconStyle">
              <FaPencilAlt
                className="symbolStyle"
                onClick={handleSaveName} 
              />
              <BsTrashFill
                className="symbolStyle" 
                onClick={handleClearTeam} 
              />
            </span>
          </span>
        }
      </span>)
}

TopCard.propTypes = {
  isEditing: PropTypes.bool,
  id: PropTypes.string,
  handleEditTeamName: PropTypes.func,
  name: PropTypes.string
};

const Input = styled.input`
  border-bottom: 2px solid #337AB7;
  margin-left: 50px;
`;

const mapDispatchToProps = (dispatch, props) => {
  return {
      deleteTeamById: (id) => {
        dispatch(action.deleteTeamById(id));
      },
      changeNameById: (id, value) => {
        dispatch(action.changeNameById(id, value));
      }
  }
};

export default connect(null, mapDispatchToProps)(TopCard);;