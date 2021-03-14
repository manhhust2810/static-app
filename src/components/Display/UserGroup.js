import React from "react";
import PropTypes from 'prop-types';
import User from './User.js';
import Icon from './Icon.js';
import './UserGroup.css';
function UserGroup({ admin, post }) {
  return (
    <span>
      <User
        elementNumber={post.length} 
        admin={admin}
      />
      <span className="img3">
        {(post.length <= 6)
          ?
          <>
            {post.map((item) => (
              <Icon
                key={item.id}
                email={item.email}
                firstName={item.firstName}
                lastName={item.lastName}
                status={item.status}
              />
            ))}
          </>
          :
          <>
            {post.map((item, index) => {
              if (index > 4) {
                return null
              }
              return (
                <Icon
                  key={item.id}
                  email={item.email}
                  firstName={item.firstName}
                  lastName={item.lastName}
                  status={item.status}
                />
              )
            })}
            <span className="number iconStyle">
              {`+${post.length - 5}`}
            </span>
          </>
        }
      </span>
    </span>
  )
}

UserGroup.propTypes = {
  email: PropTypes.string,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  status: PropTypes.string.isRequired,
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
}

export default UserGroup;
