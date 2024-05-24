import React, { useEffect, useState } from 'react';
// import type { ReactElement } from 'react';
import Button from '@mui/material/Button';
import { styled, Theme, useTheme } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { Box, TextField } from '@mui/material';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';

import { CsvWidget } from '../csvwidget/CsvWidget';
import {
  AttributeRow,
  AttributesData,
  attributesData,
} from '../attributeData/attributesData';

export interface NewJobFormState {
  name: string;
  type: string;
}

interface AddJobFormProps {
  // isOpen: boolean;
  // handleClose: () => void;
  newJobFormState: {
    name: string;
    type: string;
  };
  setNewJobFormState: (newState: NewJobFormState) => void;
  // handleSubmit: () => void;
  // isLoading: boolean;
  // isDisabled: boolean;
}

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

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
    },
  },
};

const AddJobForm = ({
  newJobFormState,
  setNewJobFormState,
}: AddJobFormProps) => {
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
    setNewJobFormState({ name: '', type: '' });
    setTypeName('');
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    handleClearForm();
  };

  const handleTypeChange = (event: SelectChangeEvent<typeof typeName>) => {
    const selectedValue = event.target.value as string;
    setTypeName((type) => (type = selectedValue));

    setNewJobFormState({
      ...newJobFormState,
      type: selectedValue,
    });
  };

  return (
    <React.Fragment>
      <Button variant="outlined" onClick={handleClickOpen}>
        Create job
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
            <InputLabel required>Name</InputLabel>
            <TextField
              required
              value={newJobFormState?.name || ''}
              onChange={(event) =>
                setNewJobFormState({
                  ...(newJobFormState || {}),
                  name: event.target.value,
                })
              }
              style={{ width: '100%' }}
            />
          </Box>
          <Box marginTop={2}>
            <InputLabel required id="demo-label">
              Types
            </InputLabel>
            <Select
              labelId="demo-label"
              id="demo-multiple-chip"
              value={typeName}
              onChange={handleTypeChange}
              input={<OutlinedInput id="select-multiple-chip" label="Types" />}
              style={{ width: '100%' }}
              MenuProps={MenuProps}
            >
              {Object.keys(attributesData).map((type) => (
                <MenuItem key={type} value={type}>
                  {type}
                </MenuItem>
              ))}
            </Select>
          </Box>
          <Box marginTop={2}>
            <CsvWidget
              dynamicColumns={dynamicColumns}
              clearFormFields={handleClearForm}
            />
          </Box>
        </DialogContent>
      </HalfSizeDialog>
    </React.Fragment>
  );
};

export default AddJobForm;
