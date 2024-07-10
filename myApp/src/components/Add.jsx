import { Box, TextField } from '@mui/material'
import React from 'react'

const Add = () => {
  return (
    <Box
    component="form"
    sx={{
      '& > :not(style)': { m: 1, width: '25ch' },
    }}
    noValidate
    autoComplete="off"
  >
    <TextField id="outlined-basic" label="Required-Name" variant="outlined" />
    <TextField id="outlined-basic" label="Required-Department" variant="outlined" />
    <TextField id="outlined-basic" label="Required-Semester" variant="outlined" />
  </Box>
  )
}

export default Add
