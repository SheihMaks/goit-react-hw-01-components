// import PropTypes from 'prop-types';

export const Statistics=({data, title})=>{
   return(<>{title && (<h2>{title}</h2>)}
<ul>
    {data.map(({id,label,percentage})=>{
    return(<li key={id}> 
        <span>{label}</span>
        <span>{percentage}%</span>
        </li>)})}
        </ul></>)
}

// Statistics.propTypes={
// title:PropTypes.string,
// id:PropTypes.string.isRequired,
// label:PropTypes.string.isRequired,
// percentage: PropTypes.number.isRequired,
// }