import React from 'react';
import PropTypes from 'prop-types';

export const TransactionHistory = ({ transactions}) => {
    return (
        <table class="transaction-history">
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

  <tbody>
    {transactions.map(({ id, type, amount, currency}) =>{
        return (   <tr key={id}>
            <th>{type}</th>
            <th>{amount}</th>
            <th>{currency}</th>
          </tr>)
    })}
  </tbody>
</table>
    );
}

TransactionHistory.propTypes = {
    transactions: PropTypes.arrayOf(PropTypes.shape({
        type: PropTypes.string.isRequired,
        amount: PropTypes.number.isRequired,
        currency: PropTypes.string.isRequired
    }).isRequired).isRequired
}