import React, { useState } from 'react';
import { CSVBoxButton } from '@csvbox/react';
import styles from './CsvWidget.module.css';
import Alert from '@mui/material/Alert';
import { ImportData } from '../attributeData/columnsData';
import { Box } from '@mui/material';

interface CsvWidgetProps {
  dynamicColumns: { column_name: string }[];
  clearFormFields: () => void;
}

export const CsvWidget: React.FC<CsvWidgetProps> = ({
  dynamicColumns,
  clearFormFields,
}) => {
  const [importStatus, setImportStatus] = useState<'idle' | 'success' | 'fail'>(
    'idle'
  );

  const handleImport = (result: boolean, data: ImportData) => {
    if (result) {
      setImportStatus('success');
      console.log('success');
      console.log(`${data.total_rows} rows uploaded`);
      console.log('data', data);

      clearFormFields();
    } else {
      setImportStatus('fail');
      console.log('fail');
    }
  };
  return (
    <div>
      <CSVBoxButton
        key={dynamicColumns.map((col) => col.column_name).join(',')}
        licenseKey="Bmw57BonTzuR0l5WnMASIT03k4BGYs"
        user={{
          user_id: 'default123',
        }}
        dynamicColumns={dynamicColumns}
        onImport={handleImport}
        render={(launch, isLoading) => (
          <button
            onClick={dynamicColumns.length > 0 ? launch : undefined}
            className={styles.btn}
            disabled={dynamicColumns.length === 0}
          >
            {dynamicColumns.length === 0 || isLoading
              ? 'loading..'
              : 'Upload file'}
          </button>
        )}
      >
        Import
      </CSVBoxButton>
      <Box marginTop={2}>
        {importStatus === 'success' && (
          <Alert severity="success">Data imported successfully.</Alert>
        )}
        {importStatus === 'fail' && (
          <Alert severity="error">Data import failed. Please try again.</Alert>
        )}
      </Box>
    </div>
  );
};
