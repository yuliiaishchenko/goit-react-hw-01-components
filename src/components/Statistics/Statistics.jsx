import React from 'react';
import PropTypes from 'prop-types';

export const Statistics = ({stats, title}) => {
    return (
        <section class="statistics">
  <h2 class="title">{title}</h2>

  <ul class="stat-list">
    {stats.map((item, idx) => (
       <li className='stat-list__item' key={item.id} id = {item.id} index = {idx}>
        <span class="label">{item.label}</span>.
        <span class="percentage">{item.percentage}%</span>
       </li> 
    ))}
  </ul>
</section>
    )
}

Statistics.propTypes = {
    title: PropTypes.string.isRequired,
    stats: PropTypes.arrayOf(PropTypes.shape({
        id:PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired
    }).isRequired).isRequired
}