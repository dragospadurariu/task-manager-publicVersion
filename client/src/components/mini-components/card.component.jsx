import React, { useState } from 'react';
import { addDashboard } from '../../actions/data.action';
import './card.styles.scss';
import { useDispatch } from 'react-redux';
import Alert from '../layout/alert/alert.layout';
import { setAlert } from '../../actions/alert.action';
import { useSpring, animated } from 'react-spring';

const Card = ({ title, style }) => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');

  const createDashboard = (name) => {
    if (name === '') {
      return dispatch(setAlert('The name is mandatory.', 'danger'));
    }
    dispatch(addDashboard(name));
    setName('');
  };

  const onChange = (event) => {
    setName(event.target.value);
  };

  return (
    <div className='card card-first' style={style}>
      <div className='card-container'>
        <span className='card-title'>{title}</span>
        <div className='card-data'>
          <span className='data-name'>Name</span>
          <input
            type='text'
            className='data-input'
            value={name}
            onChange={(event) => onChange(event)}
            onKeyDown={(e) =>
              e.key === 'Enter' ? createDashboard(name) : null
            }
          />
        </div>
        <div className='card-action'>
          <Alert />
          <button
            className='btn btn-tertiary margin-top-10 card-action-button'
            onClick={() => createDashboard(name)}
          >
            Create
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
