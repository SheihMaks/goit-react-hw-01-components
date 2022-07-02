
import PropTypes from 'prop-types';

import {UserProfile,UserDescription,UserAvatar,UserName,UserTag,UserLocation,UserStats,UserStatsItem,Label,Quantity} from './Profile.styled'
export const Profile=({user})=>{
    const{avatar,username,tag,location,stats}=user;
return (<UserProfile>
    <UserDescription>
        <UserAvatar src={avatar} alt='User avatar'/>
<UserName>{username}</UserName>
<UserTag>@{tag}</UserTag>
<UserLocation>{location}</UserLocation>
</UserDescription>
<UserStats>
    <UserStatsItem><Label>Followers</Label>
    <Quantity>{stats.followers}</Quantity></UserStatsItem>
    <UserStatsItem><Label>Views</Label>
    <Quantity>{stats.views}</Quantity></UserStatsItem>
    <UserStatsItem><Label>Likes</Label>
    <Quantity>{stats.likes}</Quantity></UserStatsItem>
</UserStats>
</UserProfile>)
}

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
