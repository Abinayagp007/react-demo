import  React, {useEffect,useState,useRef} from 'react';
import { useNavigate } from "react-router-dom";
import { Box, Button, Grid, Paper, TextField, Typography } from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles'


// import Swal from "sweetalert2";
import { useForm, Controller } from 'react-hook-form';
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import * as Styled from '../components/styled-components/Campaign';
import brandLogo from '../assets/K-Notify.png'
import { validateMobileNumber } from '../components/Utils';
import roleList from '../components/ConfigData';
import squareDots from '../assets/squareDots.png'
// import * as signUpActions from '../store/actions/auth';

const theme = createTheme({
  palette: {
    type: 'dark',
  },
})

const BannerContainer = styled.div`
  background: #ADD8E6;
  height:100%;
  display:flex;
  align-items:center;
`;

const StyledTopDots = styled.img`
bottom: 583px;
right: 15px;
height: 60px;
position: fixed;
@media (max-width: 900px){    
    display:none;
  }
`;
const StyledBottomDots = styled.img`
top: 583px;
left: 15px;
height: 60px;
position: fixed;
@media (max-width: 900px){    
    display:none;
  }
`;
const RegistrationButton = styled(Button)`
  background-color: #1976d2 !important;
  color: #fffbf9 !important;
  &:hover {
    background-color: #1976d2;
  }
`
const textboxCss = {
    margin: "8px 0",
    '& .MuiInputBase-input': {
        backgroundColor: '#fcfcfb',
        fontSize: 16,
        fontFamily: "Roboto Regular",
        padding: "10px 14px"
    },
    '& .MuiInputBase-input.Mui-disabled': {
        background: '#e9f2fa'
    }
};

const roleCss = { mt:1, mb: 1, background:"#fcfcfb", width: "100%", '& .MuiSelect-select': { p:1.3}};
const errorColor = "#F00";
const mb = { marginBottom: 0};
const gridItemCss = { '&.MuiGrid-item' : { pt: 0}};

const Registration = ({signUp,authDetails}) => {
  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm()

  const password = useRef({});
  password.current = watch("password", "");
  const [loginError, setLoginError] = useState(null);
  const navigate = useNavigate();

  const onSubmit = (data) => {
    //   console.log('Submit:', data);
      const signupData = {...data, accountId:1};
      signUp(signupData);
  }

  useEffect(() => {
    //   console.log(authDetails);
    if (!authDetails?.isError && authDetails?.registerDetails?.status === 1) {
        navigate('../verifyuser', {state:{
            emailId: authDetails?.registerDetails?.data?.emailId 
        }});  
      //  window.location.href = '/verifyuser';
        // Swal.fire({
        //     icon:"success",
        //     button:false,
        //     showConfirmButton: false,
        //     timer: 3000,
        //     text:"User registered successfully",
        // });
        // setTimeout(()=>{
        //     window.location.href = "/login";
        // },3000)
    } else if (authDetails?.isError || authDetails?.registerDetails?.status === 0) {
        setLoginError(authDetails?.errorMessage?.message);
    }
  },[JSON.stringify(authDetails)]);

  return (
    <ThemeProvider theme={theme}>
         <BannerContainer>
            <StyledTopDots alt="squareDots banner" src={squareDots} />
                <Grid
                    container
                    component="main"
                    justifyContent="space-around"
                    sx={{
                        height: 'auto',
                        margin: '10vh 0'
                    }}
                >
                    <Grid
                    item
                    xs={12}
                    sm={10}
                    md={6}
                    xl={6}
                    component={Paper}
                    elevation={6}
                    square
                    >
                    <Box
                        sx={{
                        // display: 'flex',
                        flexDirection: 'column',
                        // alignItems: 'center',
                        // justifyContent: 'center',
                        padding: '0 110px',
                        height: '100%',
                        }}
                    >
                        <Typography component="h1" variant="h5">
                        <Box sx={{ mt: 4, textAlign: "center" }} >
                            <img src={brandLogo} alt="K - Notify" height="120" />
                        </Box>
                        </Typography>
                        <br />
                        <Box sx={{ mt: 1 }}>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <Styled.CampaignWrapper style={{padding:"20px", marginBottom: "50px"}}>
                            <Grid container spacing={2}>
                                <Grid item xs={12} xl={12} md={12} lg={12} sm={12} sx={gridItemCss}>
                                <h3 style={{textAlign:"center"}}>Registration</h3>
                                <p style={mb}>First Name <sup>*</sup></p>
                                <TextField
                                    {...register('firstName', { required: true })}
                                    margin="normal"
                                    fullWidth
                                    id="firstName"
                                    sx={textboxCss}
                                />                     
                                {errors.firstName && (
                                    <span style={{ color: errorColor }}>
                                    This field is required
                                    </span>
                                )}
                                </Grid>
                                <Grid item xs={12} xl={12} md={12} lg={12} sm={12} sx={gridItemCss}>
                                <p style={mb}>Last Name <sup>*</sup></p>
                                <TextField
                                    {...register('lastName', { required: true })}
                                    margin="normal"
                                    fullWidth
                                    id="lastName"
                                    sx={textboxCss}
                                />
                                {errors.lastName && (
                                    <span style={{ color: errorColor }}>
                                    This field is required
                                    </span>
                                )}
                                </Grid>
                                <Grid item xs={12} xl={12} md={12} lg={12} sm={12} sx={gridItemCss}>
                                <p style={mb}>Email Address <sup>*</sup></p>
                                <TextField
                                    {...register('email', { required: true,
                                        validate: (value) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)
                                    })}
                                    margin="normal"
                                    fullWidth
                                    id="email"
                                    sx={textboxCss}
                                />
                                {errors.email && (
                                    <span style={{ color: errorColor }}>
                                    {errors.email.type === "required" ? "This field is required" : "Invalid email address"}
                                    </span>
                                )}
                                </Grid>
                                <Grid item xs={12} xl={12} md={12} lg={12} sm={12} sx={gridItemCss}>
                                <p style={mb}>Password <sup>*</sup></p>
                                <TextField
                                    {...register('password', { 
                                        required: "You must specify a password",
                                        maxLength: 20,
                                        minLength: {
                                        value: 8,
                                        message:
                                            "Password must have at least 8 characters",
                                        },                
                                    })}
                                    type="password"
                                    margin="normal"
                                    fullWidth
                                    id="password"
                                    sx={textboxCss}
                                />
                                {errors.password && (
                                    <span style={{ color: errorColor }}>
                                    {errors.password.type === "required" ? "This field is required" : errors.confirmPassword.message }
                                    </span>
                                )}
                                </Grid>
                                <Grid item xs={12} xl={12} md={12} lg={12} sm={12} sx={gridItemCss}>
                                <p style={mb}>Confirm Password <sup>*</sup></p>
                                <TextField
                                    {...register('confirmPassword', { required: true,
                                        // validate: (value) => value.length >= 8
                                        maxLength: 20,
                                        minLength: {
                                            value: 8,
                                            message: "Password must have at least 8 characters",
                                        },
                                        validate: value =>
                                        value === password.current || "The passwords do not match"

                                    })}
                                    type="password"
                                    margin="normal"
                                    fullWidth
                                    id="confirmPassword"
                                    sx={textboxCss}
                                />
                                {errors.confirmPassword && (
                                    <span style={{ color: errorColor }}>
                                    {errors.confirmPassword.type === "required" ? "This field is required" : errors.confirmPassword.message}
                                    </span>
                                )}
                                </Grid>
                                <Grid item xs={12} xl={12} md={12} lg={12} sm={12} sx={gridItemCss}>
                                <p style={mb}>Role <sup>*</sup></p>
                                    <FormControl sx={roleCss}>
                                        <Select
                                        {...register('role', { required: true})}
                                        displayEmpty
                                        >
                                        { roleList.map(item => <MenuItem value={item.key}>{item.value}</MenuItem>)}
                                        </Select>
                                    </FormControl>
                                {errors.role && (
                                    <span style={{ color: errorColor }}>
                                    This field is required
                                    </span>
                                )}
                                </Grid>
                                <Grid item xs={12} xl={12} md={12} lg={12} sm={12} sx={gridItemCss}>
                                <p style={mb}>Phone <sup>*</sup></p>
                                <Controller
                                    name="phone"
                                    control={control}
                                    rules={{
                                        validate: (value) => validateMobileNumber(value)
                                    }}
                                    render={() => (
                                        <TextField
                                        {...register('phone', { required: true })}
                                        margin="normal"
                                        fullWidth
                                        id="phone"
                                        sx={textboxCss}
                                    />
                                    )}
                                    />
                                    {errors.phone && (
                                    <span style={{ color: errorColor }}>
                                    {errors.phone.type === "required" ? "This field is required" : "Phone number is invalid" }
                                    </span>
                                )}
                                </Grid>
                                <Grid item xs={12} xl={12} md={12} lg={12} sm={12} sx={gridItemCss}>
                                <p style={mb}>Address <sup>*</sup></p>
                                <TextField
                                    {...register('address', {
                                    required: true,
                                    })}
                                    margin="normal"
                                    fullWidth
                                    id="address"
                                    sx={textboxCss}
                                />
                                {errors.address && (
                                    <span style={{ color: errorColor }} sx={gridItemCss}>
                                    This field is required
                                    </span>
                                )}
                                </Grid>
                                <Grid item xs={12} xl={12} md={12} lg={12} sm={12} sx={gridItemCss}>
                                <p style={mb}>City <sup>*</sup></p>
                                <TextField
                                    {...register('city', { required: true })}
                                    margin="normal"
                                    fullWidth
                                    id="city"
                                    sx={textboxCss}
                                />
                                {errors.city && (
                                    <span style={{ color: errorColor }} sx={gridItemCss}>
                                    This field is required
                                    </span>
                                )}
                                </Grid>
                                <Grid item xs={12} xl={12} md={12} lg={12} sm={12} sx={gridItemCss}>
                                <p style={mb}>Zipcode <sup>*</sup></p>
                                <Controller
                                    name="zipcode"
                                    control={control}
                                    rules={{
                                        required: true,
                                        // validate: (value) => isValidUSZip(value),
                                    }}
                                    render={() => (
                                        <TextField
                                        {...register('zipcode', { required: true })}
                                        margin="normal"
                                        fullWidth
                                        id="zipcode"
                                        sx={textboxCss}
                                        inputProps={{maxLength:"5"}}
                                    />
                                    )}
                                    />
                                    {errors.zipcode && (
                                    <span style={{ color: errorColor }}>
                                    {errors.zipcode.type === "required" ? "This field is required" : "Invalid zipcode" }
                                    </span>
                                )}
                                
                                </Grid>
                                <Grid item xs={12} xl={12} md={12} lg={12} sm={12}>
                                    {
                                        loginError && (<span style={{ color: errorColor }}>
                                        {loginError}
                                        </span>)
                                    }
                                <RegistrationButton
                                    type="submit"
                                    fullWidth
                                    sx={{ mt:2, justifyContent:"center"}}
                                    justifyContent="center"
                                >
                                    Register
                                </RegistrationButton>
                                </Grid>
                            </Grid>
                            </Styled.CampaignWrapper>
                        </form>
                        </Box>
                    </Box>
                    </Grid>
                </Grid>
            <StyledBottomDots alt="squareDots banner" src={squareDots} />
        </BannerContainer>
    </ThemeProvider>
  )
}

// const mapStateToProps = (state) => ({ authDetails: state.auth })

// const mapDispatchToProps = (dispatch) => {
//   return {
//     signUp: (fields) => dispatch(signUpActions.signUp(fields)),
//   }
// }

// Registration.propTypes = {
//     signUp: PropTypes.func.isRequired,
//     authDetails: PropTypes.arrayOf(PropTypes.array).isRequired,
//   }

// export default connect(mapStateToProps, mapDispatchToProps)(Registration);

export default Registration;



