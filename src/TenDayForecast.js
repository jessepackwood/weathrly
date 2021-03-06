import React from 'react';
import Card from './Card';
import PropTypes from 'prop-types';
import './TenDayForecast.scss';

const TenDayForecast = (props) => {
  return (
    <div className='ten-day-info-wrapper'>
      <h2>10 Day Forecast</h2>
      <div className='ten-card-wrapper'>
      {
        props.tenDayForecast.map((dayForecast, dayIndex) => {
          return (
            <Card
              key={dayIndex}
              date={dayForecast.date}
              conditions={dayForecast.conditions}
              icon={dayForecast.icon}
              high={dayForecast.high}
              low={dayForecast.low} />
          );
        })
      }
      </div>
    </div>
  );
};


TenDayForecast.propTypes = {
  tenDayForecast: PropTypes.array
};

export default TenDayForecast;