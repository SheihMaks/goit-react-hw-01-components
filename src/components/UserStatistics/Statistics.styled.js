import styled from "styled-components";
import {getRandomHexColor} from 'utils/getRandomColor'

export const UserStatistics=styled.div`
width: 40%;
margin: auto;
margin-top:15px;
background-color:white;
border-radius:5px;
box-shadow: 0px 5px 10px -4px #050505;
`

export const Title=styled.h2`
padding:15px;
text-align:center;`

export const StatList=styled.ul`
display:flex;
justify-content:center;
`

export const StatItem=styled.li`
flex-basis:calc(100%/5);
display:flex;
flex-direction:column;
flex-wrap:wrap;
padding:auto;
align-items:center;
background-color:${getRandomHexColor};
color:#faf9f7;
`

export const Label=styled.span`
padding-top: 10px;
font-size:18px;
`
export const Percentage=styled.span`
padding:10px 0;
font-size:18px;
font-weight:600;
`