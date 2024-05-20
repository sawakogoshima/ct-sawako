import React, { useState } from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { Box } from '@mui/material';

import TextField from '@commercetools-uikit/text-field';
import CreatableSelectField from '@commercetools-uikit/creatable-select-field';
import { CsvWidget } from '../csvwidget/CsvWidget';

const HalfSizeDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialog-paper': {
    width: '50%',
    maxWidth: 'none',
    position: 'absolute',
    right: 0,
    top: 56,
    height: '100%',
  },
}));

const AddJobForm = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <React.Fragment>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open dialog
      </Button>
      <HalfSizeDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          Create job
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <Box marginTop={2}>
            <TextField
              title="Name"
              value=""
              onChange={(event) => alert(event)}
            />
          </Box>
          <Box marginTop={2}>
            <CreatableSelectField
              title="Types"
              value="Product"
              options={[
                { value: 'ready', label: 'Ready' },
                { value: 'shipped', label: 'Shipped' },
                { value: 'shipped2', label: 'Shipped2' },
              ]}
              onChange={(event) => alert(event.target.value)}
            />
          </Box>
          <Box marginTop={2}>
            {/* <Button autoFocus onClick={handleClose}>
              Submit
            </Button> */}
            <CsvWidget />
          </Box>
        </DialogContent>
      </HalfSizeDialog>
    </React.Fragment>
  );
};

export default AddJobForm;
