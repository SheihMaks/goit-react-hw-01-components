import styled from 'styled-components';
import {theme} from 'vars'
export const UserFriendList=styled.ul`
width:40%;
display:flex;

flex-direction:column;
margin-top:15px;`

export const UserFriendListItem=styled.li`
display:flex;
align-items:center;
margin-bottom 10px;
background-color:white;
border-radius:5px;
box-shadow: 0px 5px 10px -4px #050505;`

export const OnlineStatus=styled.span`
width:20px;
height:20px;
border-radius:50%;
margin-left:20px;
background-color:${({isOnline})=> isOnline ? theme.colors.online : theme.colors.offline}
`;