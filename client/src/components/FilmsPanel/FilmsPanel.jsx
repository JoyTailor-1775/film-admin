import React from 'react';
import ControlPanel from '../ControlPanel';
import FileUploadPanel from '../FileUploadPanel';
import FilmsTable from '../FilmsTable';

const FilmsPanel = () => {
  return (
    <div className="films-table">
      <ControlPanel />
      <FilmsTable />
      <FileUploadPanel />
    </div>
  );
};

export default FilmsPanel;
