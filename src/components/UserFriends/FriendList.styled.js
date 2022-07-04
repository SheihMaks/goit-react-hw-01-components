import styled from 'styled-components';
import {theme} from 'vars'
export const UserFriendList=styled.ul`
width:40%;
display:flex;
margin:auto;
flex-direction:column;
margin-top:15px;`

export const UserFriendListItem=styled.li`
display:flex;
align-items:center;
padding: 3px 7%;
margin-bottom 10px;
background-color:white;
border-radius:5px;
box-shadow: 0px 5px 10px -4px #050505;`

export const OnlineStatus=styled.span`
width:15px;
height:15px;
border-radius:50%;
background-color:${({isOnline})=> isOnline ? theme.colors.online : theme.colors.offline}
`;

export const FriendAvatar=styled.img`
margin:0 8%;`

export const FriendName=styled.p`
font-size:24px;
font-weight:600;`