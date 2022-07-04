import PropTypes from 'prop-types';
import { TableTransactions,HeaderTable,CellOfTable } from "./TransactionHistory.styled"

export const TransactionHistory=({items})=>{
    
    return(<TableTransactions>
    <HeaderTable>
      <tr>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
    </HeaderTable>
  
    <tbody>
      {items.map(({id,type,amount,currency})=>{
      return(<tr key={id}>
        <CellOfTable>{type}</CellOfTable>
        <CellOfTable>{amount}</CellOfTable>
        <CellOfTable>{currency}</CellOfTable>
      </tr>)})}
      
    </tbody>
  </TableTransactions>)
}

TransactionHistory.propTypes={
  items:PropTypes.arrayOf(PropTypes.shape({
    id:PropTypes.string.isRequired,
    type:PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency:PropTypes.string.isRequired
  }))}