import {Box, TextField, Stack, Button} from '@mui/material'
import React, { useState ,useEffect} from 'react'


const Add = ({person}) => {
  //const [count,setCount]=useState(0);//value of count is set as 0
  //let valueAdd=()=>{
   // setCount(count+1)//only using setCount, count can be incremented
  //}
  const [form,setForm]=useState(
   { fname : person.fname,
    department : person.department,
    semester: person.semester 
   }
  )
  function valueCap(e)
  {
    //console.log(e)
    setForm({...form,[e.target.name]:e.target.value})
  }
  let valueAdd=()=>{
    console.log(form)
  }
  return (
    <>
    <Box
    component="form"
    sx={{
      '& > :not(style)': { m: 1, width: '25ch' },
    }}
    noValidate
    autoComplete="off"
  >
    <TextField id="outlined-basic" 
     label="Required-Name"
     variant="outlined" 
     name="fname" 
     value={form.fname}
     onChange={valueCap}/>

    <TextField id="outlined-basic" 
     label="Required-Department" 
     variant="outlined" 
     name="department" 
     value={form.department}
     onChange={valueCap} />

    <TextField id="outlined-basic" 
     label="Required-Semester" 
     variant="outlined" 
     name="semester" 
     value={form.semester}
     onChange={valueCap}/>

  <div>
      <Stack spacing={2} direction="row">
      <Button variant="contained" color="success" onClick={valueAdd}>Register
      </Button>
      <br/>
      {/* <small>count is {count}</small> */}
    </Stack>
    </div>
    </Box>
    </>

  ) 
}
export default Add