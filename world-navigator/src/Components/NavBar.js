import React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

function NavBar(props) {
  return (
    <div className="NavBar">
      <div className="Title">World Navigator</div>
      <div className="Filter">
        <Stack spacing={2} direction="row">
          {props.region.map((item) => {
            return <Button variant="outlined">{item}</Button>;
          })}
        </Stack>
      </div>
    </div>
  );
}

export default NavBar;
