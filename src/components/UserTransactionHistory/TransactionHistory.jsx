import PropTypes from 'prop-types';
import { TableTransactions,HeaderTable,CellOfTable,CellHeaderTable,BodyOfTable,LineOfTable } from "./TransactionHistory.styled"

export const TransactionHistory=({items})=>{
    
    return(<TableTransactions>
    <HeaderTable>
      <tr>
        <CellHeaderTable>Type</CellHeaderTable>
        <CellHeaderTable>Amount</CellHeaderTable>
        <CellHeaderTable>Currency</CellHeaderTable>
      </tr>
    </HeaderTable>
  
    <BodyOfTable>
      {items.map(({id,type,amount,currency})=>{
      return(<LineOfTable key={id}>
        <CellOfTable>{type}</CellOfTable>
        <CellOfTable>{amount}</CellOfTable>
        <CellOfTable>{currency}</CellOfTable>
      </LineOfTable>)})}
      
    </BodyOfTable>
  </TableTransactions>)
}

TransactionHistory.propTypes={
  items:PropTypes.arrayOf(PropTypes.shape({
    id:PropTypes.string.isRequired,
    type:PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency:PropTypes.string.isRequired
  }))}