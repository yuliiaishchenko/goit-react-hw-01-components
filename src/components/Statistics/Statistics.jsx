import React from 'react';
import PropTypes from 'prop-types';

export const Statistics = ({stats, title}) => {
    return (
        <section className="statistics">
  <h2 className="title">{title}</h2>

  <ul className="stat-list">
    {stats.map((item, idx) => (
       <li className='stat-list__item' key={item.id} id = {item.id} index = {idx}>
        <span className="label">{item.label}</span>.
        <span className="percentage">{item.percentage}%</span>
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