/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react';
import { Pagination } from '@commercetools-uikit/pagination';
import DataTable from '@commercetools-uikit/data-table';
import { BASE_API_URL } from '../../apiConfig';
import Spacings from '@commercetools-uikit/spacings';

const TableReports = () => {
  interface Operation {
    id: string;
    sheetName: string;
    startTime: string;
    endTime: string;
    importStatus: string;
  }

  const PER_PAGE = 10;
  const [perPage, setPerPage] = useState(PER_PAGE);
  const [currentPage, setCurrentPage] = useState(0);
  const [tableData, setTableData] = useState<Operation[]>([]);

  useEffect(() => {
    fetch(`${BASE_API_URL}/operations`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setTableData(data.operations);
        console.log('data for table from API', data.operations);
      })
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    console.log('tableData updated', tableData);
  }, [tableData]);

  const columns = [
    { key: 'sheet_name', label: 'Sheet Name' },
    { key: 'start_time', label: 'Start Time' },
    { key: 'end_time', label: 'End Time' },
    { key: 'status', label: 'Status' },
  ];

  const rows = tableData.map((row) => ({
    id: row.id,
    sheet_name: row.sheetName,
    start_time: row.startTime,
    end_time: row.endTime,
    status: row.importStatus,
  }));

  return (
    <>
      <Spacings.Stack scale="l">
        <DataTable rows={rows} columns={columns} />
        {tableData.length === 0 && <p>No data available</p>}
        <Pagination
          totalItems={tableData.length}
          page={currentPage + 1}
          onPageChange={(newPage) => setCurrentPage(newPage - 1)}
          onPerPageChange={setPerPage}
        />
      </Spacings.Stack>
    </>
  );
};

export default TableReports;
