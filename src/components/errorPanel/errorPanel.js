import React from 'react';
import './errorPanel.scss';

const ErrorPanel = () => {
  return (
    <div className='error-panel'>
      <span className='error-text'>Что-то пошло не так...</span>
    </div>
  )
}

export default ErrorPanel;