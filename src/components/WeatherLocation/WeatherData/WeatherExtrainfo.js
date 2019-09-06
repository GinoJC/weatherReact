import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const WeatherExtrainfo = ({humidity, wind}) => (
    <div className='weatherExtrainfoCont'>
        <span className='extraInfoText'>{`Humedad: ${humidity} %`}</span>
        <span className='extraInfoText'>{`Vientos: ${wind}`}</span>
    </div>
);

WeatherExtrainfo.propTypes = {
    humidity: PropTypes.number.isRequired,
    wind: PropTypes.string.isRequired,
};

export default WeatherExtrainfo;