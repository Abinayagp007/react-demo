
  import  React from "react";
import ReactDOM, { render } from 'react-dom';
import { useForm } from "react-hook-form";
import TextField from '@mui/material/TextField';
import { Box, Button, Grid, Paper,Stack,Typography } from '@mui/material';
import {Container} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import styled from 'styled-components'


const errorColor = "#F00";
const mb = { marginBottom: 0};
const gridItemCss = { '&.MuiGrid-item' : { pt: 0}};
const theme = createTheme({
  palette: {
    type: 'dark',
  },
})

// const textboxCss = {
//   margin: "8px 0",
//   '& .MuiInputBase-input': {
//       backgroundColor: '#fcfcfb',
//       fontSize: 16,
//       fontFamily: "Roboto Regular",
//       padding: "10px 14px"
//   },
//   '& .MuiInputBase-input.Mui-disabled': {
//       background: '#e9f2fa'
//   }
// };
const BannerContainer = styled.div`
  background: #ADD8E6;
  marginLeft:10;
  height:50%;
  display:flex;
  align-items:center;
`;

function App() {
  const { register, handleSubmit ,formState: { errors }} = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      age:'',
      email:'',
      role: '',
      // checkbox: [],
      radio: ''
    }
  });

  const onSubmit = (data) => console.log(data);

  return (
    <ThemeProvider theme={theme}>
      <BannerContainer>
        <Box >
          
    <form onSubmit={handleSubmit(console.log)} style={{bockgroundcolor :"white", marginLeft : " 30px"}}>
             <pre>{JSON.stringify(onSubmit,undefined,2)}</pre>
       
             {/* <Stack justifyContent="center" position="static" flex={2}> */}

       {/* <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh'}}/> */}
      {/* <div><Typography gutterBottom varient="h3" >KNotify</Typography></div> */}
      {/* <p style={mb}>First Name <sup>*</sup></p> */}
      <TextField label="FirstName" color="primary"  {...register("firstName")} required placeholder="First name" />
      {errors.firstName && (<span style={{ color: errorColor }}>First name is required.</span>)}<br/><br/>

      <TextField label="LastName" color="primary" {...register("lastName",)}required placeholder="Last name" />
      {errors.lastName && (<span style={{ color: errorColor }}> Last name is required </span> )}<br/><br/>
      
      <TextField label="Email" color="primary"  {...register("email", )}required placeholder="Email" id="email" type="email" /><br/><br/>
      <TextField label="Password" color="primary"  {...register("password")}required placeholder="Password" id="password" type="password" /><br/><br/>
      <TextField label="Password" color="primary"  {...register("password")}required placeholder="Password" id="password" type="password" /><br/><br/>
     
     {/* <TextField label="Phone Number" inputProps={{ inputMode: 'numeric'}} /> */}

     <TextField label="Age" color="primary" required {...register('age', { pattern: /\d+/ })} />
      {errors.age && (<span style={{ color: errorColor }}>Please enter number for age. </span>)}<br/><br/>

      <TextField label="PhoneNumber"  color="primary" {...register('phone')}required id="phone" type="number"/>
      {errors.phone && (<span style={{ color: errorColor }}>Please enter Number. </span>)}<br/><br/>
      {/* {errors.phone === "required" ? "This field is required" : "Phone number is invalid" } */}
      
      <TextField label="Address" color="primary"  {...register("address")}required placeholder="Address" />
      {errors.address && (<span style={{ color: errorColor }}>Address is required.</span>)}<br/><br/>


      
      Select your Role: <select {...register("role")}>
        <option value="">Select...</option>
        <option value="Admin">Admin</option>
        <option value="Senior Manager">Senior Manager</option>
        <option value="Manager">Manager</option>
        <option value="System User">System Use</option>
      </select><br/><br/>
      
      {/* Section:A<input {...register("checkbox")} type="checkbox" value="A" /> */}
      {/* B<input {...register("checkbox")} type="checkbox" value="B" /> */}
      {/* C<input {...register("checkbox")} type="checkbox" value="C" /><br></br><br/> */}
      
      Please select your Gender: Male<input {...register("radio")} type="radio" value="male" />
      Female<input {...register("radio")} type="radio" value="female" />
      {/* A++<input {...register("radio")} type="radio" value="C" /> */}<br/><br/>
     
      <Button type="submit" sx={{ mt:2, mb:8, justifyContent:"center"}} justifyContent="center">
      Register  </Button>      </form>  
      </Box>
      </BannerContainer>  
      </ThemeProvider>        
                               
                                
  );
}

ReactDOM.render(<App/>,document.getElementById("root"))