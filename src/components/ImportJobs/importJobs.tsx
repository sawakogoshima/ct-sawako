import { useState } from 'react';
import AddJobForm, { NewJobFormState } from './add-job-form';

const defaultFormState: NewJobFormState = {
  name: '',
  type: '',
};

const ImportJobs = () => {
  const [newJobFormState, setNewJobFormState] =
    useState<NewJobFormState>(defaultFormState);
  return (
    <div>
      <AddJobForm
        newJobFormState={newJobFormState}
        setNewJobFormState={setNewJobFormState}
      />
    </div>
  );
};

export default ImportJobs;
