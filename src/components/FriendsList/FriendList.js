import React from "react";
import PropTypes from "prop-types";

import defaultImg from "../../images/default.jpeg";
import styles from "./Friends.module.css";

const FriendList = ({ friends }) => (
  <ul className={styles.friendsList}>
    {friends.map(({ avatar, name, isOnline, id }) => (
      <Friend key={id} avatar={avatar} name={name} isOnline={isOnline} />
    ))}
  </ul>
);

FriendList.protoTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      avatar: PropTypes.string,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    }).isRequired
  ),
};

const Friend = ({ id, avatar, name, isOnline }) => (
  <li key={id} className={styles.friend}>
    <span className={isOnline ? styles.online : styles.offline}></span>
    <img className={styles.avatar} src={avatar} alt={name} width="48" />
    <p className={styles.name}>{name}</p>
  </li>
);

Friend.defaultProps = {
  avatar: defaultImg,
};

Friend.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendList;
