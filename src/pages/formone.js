import React from 'react';
import ReactDOM, { render } from 'react-dom';
import { useState } from "react";



export default function MyForm() {
  const [formData, setformData] = useState(
    {
      contactName :"",
      BusinessName:"",
      Phone:"",
      Email:"",
      AddressLine1:"",
      AddressLine2:"",
      City:"",
      State:"",
      //Country:"",//
      Zipcode:"",
      firstCheck:"true"
    })

   console.log(formData)
 function handleChange(event){
      const {name,value,type,checked}=event.target
       setformData(prevFormData => {
        return{
          ...prevFormData,
        [ event.target.name ] :type === "checkbox" ? checked :  event.target.value   //[name] : =type === "checkbox" ? checked :  .value //
        }
       })
 }
 function handleSubmit (event) {
    event.preventDefault();
    //console.log(formData )//
   
  }

  return (
    <form onSubmit={handleSubmit}>
    <input type="text" id="contactName" placeholder='ContactName' onChange={handleChange} name='contactName' value={formData.contactName} required /><br/><br/>
    <input type="text" placeholder='BusinessName' onChange={handleChange} name='BusinessName' value={formData.BusinessName} required/><br/><br/>
    <input type="number" placeholder='Phone' onChange={handleChange} name='Phone' value={formData.Phone} required /><br/><br/>
    <input type="email" placeholder='Email' onChange={handleChange} name='Email' value={formData.Email} required /><br/><br/>
    <input type="text" placeholder='AddressLine1' onChange={handleChange} name='AddressLine1' value={formData.AddressLine1} required /><br/><br/>
    <input type="text" placeholder='AddressLine2' onChange={handleChange} name='AddressLine2' value={formData.AddressLine2} required /><br/><br/>
    <input type="text" placeholder='City' onChange={handleChange} name='City' value={formData.City} required /><br/><br/>
    <input type="text" placeholder='State' onChange={handleChange} name='State' value={formData.State} required /><br/><br/>
    <select id="slctcountry" placeholder='Country' name='slctcountry' value={formData.slctcountry} onChange={handleChange} required >
    <option value="">Choose country</option>
    <option value="USA">USA</option>
    <option value="UK">UK</option>
    <option value="Canada">Canada</option>
     </select><br/><br/>
    <input type="Number" placeholder='Zipcode' onChange={handleChange} name='Zipcode' value={formData.Zipcode} required /><br/><br/>
    <input type="checkbox" id="firstCheck"  onChange={handleChange} name='firstCheck' checked={formData.firstCheck}/>
       <label htmlFor='firstCheck'>Accept Terms and conditions</label> <br/><br/>
    
    <legend>Please select your Gender</legend><br/>
    <input type="radio" id="male" name="gender" value="male"  onChange={handleChange} checked={formData.gender==="male"}/>       
       <label htmlFor='male'>Male</label> 
    <input type="radio" id="female"  name="gender" value="female"  onChange={handleChange} checked={formData.gender==="female"}/>       
       <label htmlFor='female'>Female</label> <br/><br/>
              
      <button>submit</button>
    </form>

  )
}
//<fieldset>->there won't be line space unlike <p>//

ReactDOM.render(<MyForm/>,document.getElementById("root"))



