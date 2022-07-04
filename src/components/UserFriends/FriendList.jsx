import PropTypes from 'prop-types';
import {UserFriendList,UserFriendListItem,OnlineStatus,FriendAvatar,FriendName} from './FriendList.styled';

export  const FriendList=({friends})=>{
    return(<UserFriendList>
{friends.map(({avatar,name,isOnline,id})=>{
  return (<UserFriendListItem key={id}>
    <OnlineStatus isOnline={isOnline}></OnlineStatus>
    <FriendAvatar src={avatar} alt="User avatar" width="48" />
    <FriendName>{name}</FriendName>
  </UserFriendListItem>)
})}
    </UserFriendList >)
}

FriendList.propTypes ={ 
    friends: PropTypes.arrayOf(PropTypes.shape({
    isOnline: PropTypes.bool.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    }))};
