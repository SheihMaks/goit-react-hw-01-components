// import PropTypes from 'prop-types';
import {UserStatistics} from'./Statistics.styled';
import { Title } from './Statistics.styled';
import {StatList} from './Statistics.styled';
import {StatItem} from './Statistics.styled';
import {Label} from './Statistics.styled';
import {Percentage} from './Statistics.styled';
export const Statistics=({data, title})=>{
   return(<UserStatistics>{title && (<Title>{title}</Title>)}
<StatList>
    {data.map(({id,label,percentage})=>{
    return(<StatItem key={id}> 
        <Label>{label}</Label>
        <Percentage>{percentage}%</Percentage>
        </StatItem>)})}
        </StatList></UserStatistics>)
}

// Statistics.propTypes={
// title:PropTypes.string,
// id:PropTypes.string.isRequired,
// label:PropTypes.string.isRequired,
// percentage: PropTypes.number.isRequired,
// }