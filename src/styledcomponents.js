import styled from 'styled-components';
import { FormLabel, Button, TextField } from '@mui/material';

export const Spacing = styled.div`
    margin-top: 10px;
    margin-bottom: 10px;
`;

export const CustomRadio = styled(FormLabel)`
  &.Mui-checked {
    color: #001E3E;
  }
`;

export const CampaignButton = styled(Button)`
  background-color: #1976d2;
  font-family: Roboto Regular !important;
  text-transform: capitalize !important;
  color: #FFFBF9;
  &:hover {
    background-color: #1976d2;
  }
`;

export const CancelButton = styled(Button)`
  border-color: #001E3E;
  color: #001E3E;
  font-family: Roboto Regular !important;
  text-transform: capitalize !important;
  &:hover {
    border-color: #001E3E;
    background-color: #ffffff;
  }
`;

export const CustomTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: '#001E3E',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: 'green',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#001E3E',
    },
    '&:hover fieldset': {
      borderColor: '#001E3E',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#001E3E',
    },
  },
});

export const FileUploadWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const AccordionWrapper = styled.div`
  display: flex;
  justify-content: space-between, 
  padding: 0 30px 50px 0; 
  flex-wrap: wrap; 
`;


export const DashboardContainer = styled.div`
  background: #F0F0F0;
  padding: 30px;
`;


export const HeadingContainer = styled.div`
background: #fff;
height:50px;
font-weight:bold;
padding: 15px;
border-bottom: 1px solid #ccc;
`;


export const KPIWrapper = styled.div`
  border: 1px solid #1976d2;
  border-radius: 10px;
`;

export const KPIHeader = styled.div`
background:linear-gradient(0deg, rgb(214,238,255) 0%, rgba(255,255,255,1) 100%);
padding:0 10px;
border-radius:10px 10px 2px 2px
`;

export const KPIContent = styled.div`
  display: flex;
  flex-wrap:wrap;
  padding:20px;
  justify-content: space-around;
`;
export const CampaignWrapper = styled.div`
border: 1px solid #ccc;
padding: 5px 20px;
background: #E6F4FF;
borderRadius: 5px;
 overflow: auto; 
 min-height: 56vh;
`




