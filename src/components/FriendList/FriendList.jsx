import React from "react";
import "./FriendList.css";
import PropTypes from "prop-types";

let FriendList = ({ friends }) => {
  let isOnline = "";
  let status = "";
  return (
    <div>
      <ul className="friend-list">
        {friends.map((friend) => {
          if (friend.isOnline) {
            isOnline = "green";
            status = "Online";
          } else {
            isOnline = "red";
            status = "Offline";
          }
          return (
            <li className="item" key={friend.id}>
              <span
                className="status"
                style={{ backgroundColor: isOnline }}
              ></span>
              <span className="status-text">{status}</span>
              <img
                className="avatar"
                src={friend.avatar}
                alt={friend.name}
                width="48"
              />
              <p className="name">{friend.name}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

FriendList.defaultProps = {
  friends: [],
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};

export default FriendList;
