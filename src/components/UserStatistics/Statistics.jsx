import PropTypes from 'prop-types';
import {UserStatistics,Title,StatList,StatItem,Label,Percentage} from'./Statistics.styled';

export const Statistics=({data,title})=>{
    console.log({data, title})
   return(<UserStatistics>{title && (<Title>{title}</Title>)}
<StatList>
    {data.map(({id,label,percentage})=>{
    return(<StatItem key={id}> 
        <Label>{label}</Label>
        <Percentage>{percentage}%</Percentage>
        </StatItem>)})}
        </StatList></UserStatistics>)
}

Statistics.propTypes={
    title:PropTypes.string.isRequired,
    data: {
id:PropTypes.string.isRequired,
label:PropTypes.string.isRequired,
percentage: PropTypes.number.isRequired,
}}