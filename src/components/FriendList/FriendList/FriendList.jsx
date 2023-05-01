import React from 'react';
import PropTypes from 'prop-types';

import { FriendsListItem } from '../FriendListItem/FriendListItem';


export const FriendList = ({friends}) => {
    return(
        <ul class="friend-list">{
    friends.map((friend) => (
        <FriendsListItem
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