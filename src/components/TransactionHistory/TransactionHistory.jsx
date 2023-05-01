import React from 'react';
import PropTypes from 'prop-types';

export const TransactionHistory = ({ items }) => {
    return (
        <table className="transaction-history">
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

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
</table>
    );
};

const Transaction = ({ type, amount, currency }) => {
    return (
        <tr>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
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
        amount: PropTypes.number.isRequired,
        currency: PropTypes.string.isRequired
    }).isRequired).isRequired
}

// TableRow.propTypes = {
//  index: PropTypes.number.isRequired,
//  type: PropTypes.string.isRequired,
//  amount: PropTypes.string.isRequired,
//  currency: PropTypes.string.isRequired,
// };