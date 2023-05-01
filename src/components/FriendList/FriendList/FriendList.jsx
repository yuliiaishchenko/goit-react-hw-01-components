import React from 'react';
import PropTypes from 'prop-types';

import { FriendListItem } from '../FriendListItem/FriendListItem';


export const FriendList = ({friends}) => {
    return(
        <ul className="friend-list">{
    friends.map((friend) => (
        <FriendListItem
        key={friend.id}
        id={friend.id}
        avatar={friend.avatar}
        name={friend.name}
        isOnline={friend.isOnline}
        />
    ))
}
</ul>
)}

FriendList.propTypes =
{friends: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
}).isRequired).isRequired}