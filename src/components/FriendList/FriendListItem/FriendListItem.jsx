import React from 'react';
import PropTypes from 'prop-types';
import { ItemsOfFriends, Status, Name, Image } from './FriendListItem.styled';

export const FriendListItem = ( { avatar, name, isOnline }) => {
    return (
        <ItemsOfFriends>
        <Status>{isOnline}</Status>
        <Image src={avatar} alt="User avatar" width="48" />
        <Name>{name}</Name>
      </ItemsOfFriends>
    )
}

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
}