import React from "react";
import "./Profile.css";
import PropTypes from "prop-types";

let Profile = ({ avatar, name, tag, location, stats }) => {
  return (
    <div>
      <div className="profile">
        <div className="description">
          <img src={avatar} alt="Аватар пользователя" className="avatar" />
          <p className="name">
            <strong>Name:</strong> {name}
          </p>
          <p className="tag">
            <strong>Tag:</strong> {tag}
          </p>
          <p className="location">
            <strong>Location:</strong> {location}
          </p>
        </div>
        <ul className="stats">
          <strong>Stats:</strong>
          <li>
            <span className="label">Followers</span>
            <span className="quantity">
              <i className="material-icons">people</i>
              {stats.followers}
            </span>
          </li>
          <li>
            <span className="label">Views</span>
            <span className="quantity">
              <i className="material-icons">visibility</i>
              {stats.views}
            </span>
          </li>
          <li>
            <span className="label">Likes</span>
            <span className="quantity">
              <i className="material-icons">thumb_up</i>
              {stats.likes}
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

Profile.defaultProps = {
  avatar: "https://i1.sndcdn.com/avatars-000812665324-tbg3oh-t500x500.jpg",
  name: "John Doe",
  tag: "jdoe",
  location: "unknown",
  stats: {
    followers: 0,
    views: 0,
    likes: 0,
  },
};

Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.object.isRequired,
};

export default Profile;
