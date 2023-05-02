import React from 'react';
import PropTypes from 'prop-types';
import { Section, Title, StatList, StatListItem, Label, Percentage } from './Statistics.styled';

export const Statistics = ({stats, title}) => {
    return (
        <Section>
  <Title>{title}</Title>

  <StatList>
    {stats.map((item, idx) => (
       <StatListItem key={item.id} id = {item.id} index = {idx}>
        <Label>{item.label}</Label>
        <Percentage>{item.percentage}%</Percentage>
       </StatListItem> 
    ))}
  </StatList>
</Section>
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