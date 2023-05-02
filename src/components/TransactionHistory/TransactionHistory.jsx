import React from 'react';
import PropTypes from 'prop-types';
import { Table, TableHead, TableTd, TableTh, TableTr } from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
    return (
        <Table>
  <TableHead>
    <tr>
      <TableTh>Type</TableTh>
      <TableTh>Amount</TableTh>
      <TableTh>Currency</TableTh>
    </tr>
  </TableHead>

  <tbody>
    {items.map(({ id, type, amount, currency }) => (
      <Transaction
            key={id} 
            type={type}
            amount={amount}
            currency={currency}
           
          />)
    )}
  </tbody>
</Table>
    );
};

const Transaction = ({ type, amount, currency,id }) => {
    return (
        <TableTr key={id}>
      <TableTd>{type}</TableTd>
      <TableTd>{amount}</TableTd>
      <TableTd>{currency}</TableTd>
    </TableTr>
    )
}
 
// const TableRow = ({ type, amount, currency, index })=>{
//     return(
//         <tr idx={index}>
//         <td>{type}</td>
//         <td>{amount}</td>
//         <td>{currency}</td>
//       </tr>
//     )
// }

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired
    }).isRequired).isRequired
}

// TableRow.propTypes = {
//  index: PropTypes.number.isRequired,
//  type: PropTypes.string.isRequired,
//  amount: PropTypes.string.isRequired,
//  currency: PropTypes.string.isRequired,
// };