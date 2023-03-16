
import React from "react";
import ReactDOM, { render } from 'react-dom';
import { useForm } from "react-hook-form";
import { Box, Button, Grid, Paper, TextField, Typography } from '@mui/material'

const errorColor = "#F00";
function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextField
                                    {...register('firstName', { required: true })}
                                    margin="normal"
                                    fullWidth
                                    id="firstName"
                                    //sx={textboxCss}//
                                />                     
                                {errors.firstName && (
                                    <span style={{ color: errorColor }}>
                                    This field is required
                                    </span>
                                )}
                                
      <input {...register('lastName', { required: true })} />
      {errors.lastName && <p>Last name is required.</p>}
      <input {...register('age', { pattern: /\d+/ })} />
      {errors.age && <p>Please enter number for age.</p>}
      <input type="submit" />
    </form>
  );
}

ReactDOM.render(<App/>,document.getElementById("root"));