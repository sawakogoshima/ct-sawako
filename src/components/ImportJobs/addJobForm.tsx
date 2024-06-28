import React, { useEffect, useState } from 'react';
import PrimaryButton from '@commercetools-uikit/primary-button';
import { CsvWidget } from '../csvwidget/csvWidget';
import { attributesData } from '../attributeData/attributesData';
import SelectField, { TCustomEvent } from '@commercetools-uikit/select-field';
import Spacings from '@commercetools-uikit/spacings';
import { Drawer } from '@commercetools-frontend/application-components';

const AddJobForm: React.FC = () => {
  const [typeName, setTypeName] = useState<string | ''>('');
  const [open, setOpen] = useState(false);
  const [dynamicColumns, setDynamicColumns] = useState<
    { column_name: string }[]
  >([]);

  useEffect(() => {
    const columns =
      attributesData[typeName]?.map((attr) => ({
        column_name: attr.column_name,
      })) || [];
    setDynamicColumns(columns);
    console.log('columns', columns);
  }, [typeName]);

  const handleClearForm = () => {
    setTypeName('');
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    handleClearForm();
  };

  const handleTypeChange = (event: TCustomEvent) => {
    const selectedValue = event.target.value as string;
    setTypeName((type) => (type = selectedValue));
  };

  return (
    <>
      <PrimaryButton label="CREATE JOB" onClick={handleClickOpen} />
      <Drawer
        title="Create job"
        subtitle="Select type for importing data"
        isOpen={open}
        size={10}
        onClose={handleClose}
        hideControls={true}
      >
        <Spacings.Stack scale="l">
          <SelectField
            title="Types"
            value={typeName}
            options={Object.keys(attributesData).map((type) => ({
              value: type,
              label: type,
            }))}
            onChange={handleTypeChange}
          />
          <CsvWidget
            dynamicColumns={dynamicColumns}
            clearFormFields={handleClearForm}
            type={typeName}
          />
        </Spacings.Stack>
      </Drawer>
    </>
  );
};

export default AddJobForm;
