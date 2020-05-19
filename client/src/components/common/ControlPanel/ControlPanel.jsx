import React from 'react';
import './ControlPanel.scss';

const ControlPanel = ({ title, actionsButtons }) => {
  return (
    <div className="control-panel">
      <h2 className="control-panel__title">{title}</h2>
      <div className="control-panel__actions">{actionsButtons}</div>
    </div>
  );
};

export default ControlPanel;
