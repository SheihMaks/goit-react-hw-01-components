// import PropTypes from 'prop-types';

export  const FriendList=({friends})=>{
    return(<ul>
{friends.map(({avatar,name,status,id})=>{
    return (<li key={id}>
    <span>{status}</span>
    <img src={avatar} alt="User avatar" width="48" />
    <p >{name}</p>
  </li>)
})}
    </ul>)
}

// FriendList.propTypes={
//     avatar:PropTypes.string,
//     name: PropTypes.string.isRequired,
//     status: PropTypes.bool.isRequired,
//     id:PropTypes.number.isRequired,
//     }
