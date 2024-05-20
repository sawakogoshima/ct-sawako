import { CSVBoxButton } from '@csvbox/react';
import styles from './CsvWidget.module.css';

export const CsvWidget = () => {
  const dynamicColumns = [
    {
      column_name: 'brand',
    },
    {
      column_name: 'range',
    },
    {
      column_name: 'supplier',
    },
    {
      column_name: 'industries',
    },
    {
      column_name: 'productType',
    },
    {
      column_name: 'colour group',
    },
    {
      column_name: 'colour',
    },
    {
      column_name: 'Length',
    },
    {
      column_name: 'Width',
    },
    {
      column_name: 'Height',
    },
    {
      column_name: 'Package length',
    },
    {
      column_name: 'Package width',
    },
    {
      column_name: 'Package height',
    },
    {
      column_name: 'Weight',
    },
    {
      column_name: 'Sell',
    },
    {
      column_name: 'Buy',
    },
    {
      column_name: 'Gender',
    },
    {
      column_name: 'Materials',
    },
    {
      column_name: 'Certifications',
    },
    {
      column_name: 'Abrasiviness',
    },
  ];
  console.log(dynamicColumns);

  return (
    <CSVBoxButton
      licenseKey="Bmw57BonTzuR0l5WnMASIT03k4BGYs"
      user={{
        user_id: 'default123',
      }}
      dynamicColumns={dynamicColumns}
      onImport={(result, data) => {
        if (result) {
          console.log('success');
          console.log(data.row_success + ' rows uploaded');
          //custom code
        } else {
          console.log('fail');
          //custom code
        }
      }}
      render={(launch, isLoading) => {
        return (
          <button onClick={launch} className={styles.btn}>
            {isLoading ? 'loading..' : 'Upload file'}
          </button>
        );
      }}
    >
      Import
    </CSVBoxButton>
  );
};
