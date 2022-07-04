import styled from 'styled-components';

export const TableTransactions= styled.table`
width:80%;
margin: 0 auto;
margin-top:20px;
text-align:center;
border:solid 1px #e1faf7;
background-color:#b2f2f7;
border-collapse: collapse;
box-shadow: 0px 5px 10px -4px #050505;
`

export const HeaderTable=styled.thead`
color:white;
background-color:#0ab0f7;`

export const CellHeaderTable=styled.th`
font-weight:400;
`

export const LineOfTable=styled.tr`
text-align:center`

export const BodyOfTable=styled.tbody`
& ${LineOfTable}:nth-child(odd){
    background-color:#e1faf7;
}
`

export const CellOfTable=styled.td`
border: 2px solid #e1faf7;
padding: 0 auto;`