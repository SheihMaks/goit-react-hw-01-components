// import PropTypes from 'prop-types';
import {UserFriendList,UserFriendListItem,OnlineStatus} from './FriendList.styled';

export  const FriendList=({friends})=>{
    return(<UserFriendList>
{friends.map(({avatar,name,isOnline,id})=>{
    return (<UserFriendListItem key={id}>
    <OnlineStatus isOnline={isOnline}></OnlineStatus>
    <img src={avatar} alt="User avatar" width="48" />
    <p >{name}</p>
  </UserFriendListItem>)
})}
    </UserFriendList >)
}

// FriendList.propTypes={
//     avatar:PropTypes.string,
//     name: PropTypes.string.isRequired,
//     isOnline: PropTypes.bool.isRequired,
//     id:PropTypes.number.isRequired,
//     }
