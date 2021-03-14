import React from "react";
import PropTypes from 'prop-types';
import TopCard from "./TopCard.js";
import UserGroup from "./UserGroup.js";
import { SortableElement } from 'react-sortable-hoc';
function Card(props) {
  const { 
    isEditing,
    handleEditTeamName,
    name,
    id,
    post
  } = props;

  const admin = [
    {
      mission: "USERS",
      idTask: "memberIds"
    },
    {
      mission: "MANAGERS",
      idTask: "managerIds"
    }
  ];

  const SortableItem = SortableElement(({admin, isEditing, post, id, handleEditTeamName, name}) => {
  return (
    <span className="grid-item">
      <TopCard
        isEditing={isEditing}
        id={id}
        handleEditTeamName={handleEditTeamName}
        name={name}
      />
      {admin.map((item, index) => (
        <UserGroup
          key={index}
          admin={item.mission}
          post={post.[item.idTask]}
        />
      ))}
    </span>);
  });

  return (<SortableItem
            index={props.index}
            isEditing={isEditing}
            id={id}
            handleEditTeamName={handleEditTeamName}
            name={name}
            post={post}
            admin={admin}  
          />);
}

export default Card;
Card.propTypes = {
  isEditing: PropTypes.bool,
  id: PropTypes.string,
  name: PropTypes.string,
  handleEditTeamName: PropTypes.func,
  admin: PropTypes.arrayOf(
    PropTypes.shape({
      mission: PropTypes.oneOf(["USERS", "MANAGERS"]),
      idTask: PropTypes.oneOf(["memberIds", "managerIds"])
    }),
  ),
  post: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    creator: PropTypes.string,
    memberIds: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string,
      email: PropTypes.string,
      firstName: PropTypes.string,
      lastName: PropTypes.string,
      status: PropTypes.string
    })),
    managerIds: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string,
      email: PropTypes.string,
      firstName: PropTypes.string,
      lastName: PropTypes.string,
      status: PropTypes.string
    }))
  }),
};
