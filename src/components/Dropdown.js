import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const Dropdown = ({title}) => {
    const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
      <FormControl sx={{ m: 1, minWidth: 230,pr: 1 }}>
        <InputLabel id="demo-simple-select-helper-label">{title}</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={age}
          label="planogram"
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem>All</MenuItem>
          <MenuItem>None</MenuItem>
          <MenuItem>Audio</MenuItem>
          <MenuItem>Missing</MenuItem>
          <MenuItem>Live</MenuItem>
        </Select>
      </FormControl>
  );
};

export default Dropdown;
