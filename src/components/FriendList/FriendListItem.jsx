import PropTypes from 'prop-types';
import { Avatar, Friend, Name, Status } from './FriendList.styled';

const FriendListItem = ({isOnline, avatar, name}) => (
    <Friend>
        <Status statusType={isOnline}></Status>
        <Avatar src={avatar} alt={name} width="48" />
        <Name>{name}</Name>
    </Friend>
);

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
}

export default FriendListItem;