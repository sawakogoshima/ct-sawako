import React, { useState } from 'react';
import { CSVBoxButton } from '@csvbox/react';
import styles from './csvWidget.module.css';
import { ContentNotification } from '@commercetools-uikit/notifications';
import { ImportData } from '../attributeData/columnsData';
import Spacings from '@commercetools-uikit/spacings';

interface CsvWidgetProps {
  dynamicColumns: { column_name: string }[];
  clearFormFields: () => void;
  type: string;
}

export const CsvWidget: React.FC<CsvWidgetProps> = ({
  dynamicColumns,
  clearFormFields,
  type,
}) => {
  const [importStatus, setImportStatus] = useState<'idle' | 'success' | 'fail'>(
    'idle'
  );
  const handleImport = async (result: boolean, data: ImportData | null) => {
    if (result && data !== null) {
      const StatusSuccess = 'success';

      setImportStatus(StatusSuccess);
      console.log('success');
      console.log(`${data.total_rows} rows uploaded`);
      console.log('data', data);

      clearFormFields();
    } else {
      const statusFail = 'fail';
      setImportStatus(statusFail);
      console.log('fail');
    }
  };

  let licenseKey = '';
  if (type === 'products import') {
    licenseKey = process.env.REACT_APP_CSVBOX_KEY_PRODUCTS || '';
  } else if (type === 'categories import') {
    licenseKey = process.env.REACT_APP_CSVBOX_KEY_CATEGORY || '';
  } else if (type === 'variants import') {
    licenseKey = process.env.REACT_APP_CSVBOX_KEY_VARIANTS || '';
  } else if (type === 'product category mapping import') {
    licenseKey = process.env.REACT_APP_CSVBOX_KEY_CATEGORY_MAPPING || '';
  }

  const removeNotification = () => {
    setImportStatus('idle');
  };

  return (
    <div>
      <Spacings.Stack scale="l">
        <CSVBoxButton
          key={dynamicColumns.map((col) => col.column_name).join(',')}
          licenseKey={licenseKey}
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
        {importStatus === 'success' && (
          <ContentNotification onRemove={removeNotification} type="success">
            Data imported successfully.
          </ContentNotification>
        )}
        {importStatus === 'fail' && (
          <ContentNotification onRemove={removeNotification} type="error">
            Data import failed. Please try again.
          </ContentNotification>
        )}
      </Spacings.Stack>
    </div>
  );
};
