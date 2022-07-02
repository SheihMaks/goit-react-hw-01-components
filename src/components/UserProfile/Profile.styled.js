import styled from 'styled-components';

export const UserProfile= styled.div`
display:flex;
flex-direction:column;
background-color: white;
width:40%;
margin: auto;
border-radius:4px;
box-shadow: 0px 5px 10px -4px #050505;`

export const UserDescription= styled.div`
text-align: center;`

export const UserAvatar=styled.img`
padding: 20px;
width: 100px;
border-radius: 50%;`

export const UserName=styled.p`
font-size: 26px;
font-weight: 600;`

export const UserTag= styled.p`
font-size: 24px;
font-weight: 600;
color: grey;`

export const UserLocation=styled.p`
margin-bottom: 20px;
font-size: 24px;
font-weight: 600;
color: grey;`

export const UserStats=styled.ul`
display: flex;
justify-content: center;
background-color:#e6e6e6;
width:100%;
`

export const UserStatsItem=styled.li`display: flex;
flex-direction: column;
width:auto;
flex-basis:calc(100%/3);
text-align: center;
border: 1px solid #dbd6d652;
padding:5px;
`

export const Label=styled.span`
font-size: 20px;
color: grey;`

export const Quantity=styled.span`
font-size: 22px;
font-weight:600;
`