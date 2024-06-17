import { useState } from 'react';
import AddJobForm from './Add-job-form';
import { Box, Grid, Typography } from '@mui/material';
import TableReports from '../TableReports';
import StyledButton from './StyledButton';

const ImportJobs = () => {
  const [tableType, setTableType] = useState('products');
  const [statusText, setStatusText] = useState('');

  return (
    <>
      <Grid container spacing={1}>
        <Grid item xs={12} style={{ paddingBottom: '20px' }}>
          <Grid container alignContent="space-between" alignItems="center">
            <Grid item xs={12}>
              <Box
                display="flex"
                justifyContent="space-between"
                style={{ marginBottom: '10px' }}
              >
                <Typography variant="h5" color="textPrimary" gutterBottom>
                  PIM
                </Typography>
                <Grid item xs={6}>
                  <StyledButton
                    sx={{ marginRight: 2 }}
                    onClick={() => setTableType('products')}
                  >
                    Products Import Report
                  </StyledButton>
                  <StyledButton
                    sx={{ marginLeft: 2 }}
                    onClick={() => setTableType('variants')}
                  >
                    Variants Import Report
                  </StyledButton>
                </Grid>
                <AddJobForm />
              </Box>
              {/* <TableReports tableType={tableType} statusText={statusText} /> */}
              <TableReports />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default ImportJobs;
