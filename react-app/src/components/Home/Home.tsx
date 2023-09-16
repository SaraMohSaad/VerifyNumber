
import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Paper } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [result, setResult] = useState({valid:false,number:"",local_format:"",international_format:"",country_prefix:"",country_code:"",country_name:"",location:"",carrier:"",line_type:"soha"
  });

  const navigate = useNavigate();

  const handleInputChange = (event: any) => {
    setPhoneNumber(event.target.value);
  };

  const handleViewHistoryClick = () => {
    navigate("/History");
  };

  const addSearchItem = async(results:any)=>{
    // const result = {
        console.log(result);


    // }
    // result.valid, result.carrier, result.country_code, result.country_name, result.country_prefix, result.international_format, result.international_format, result.line_type, result.local_format, result.location, result.number);
    try{
        await axios.post(`http://localhost:9000/addSearchItem/addSearchItem/`, results)
        
        // await axios.get(`http://localhost:9000/addSearchItem/addSearchItem/${result.valid}/${result.number}/${result.local_format}/${result.international_format}/${result.country_prefix}/${result.country_code}/${result.country_name}/${result.location}/${result.carrier}/${result.line_type}/`)
    }catch(error){
        console.log(error)
    }
  }

  

  const handleValidateClick = async () => {
    try {
      const response = await axios.get(
        `http://apilayer.net/api/validate?access_key=91448d585d84b9d97b08c8bb9ea44818&number=${phoneNumber}&country_code=&format=1`
      );
      setResult(response.data);
      addSearchItem(response.data);

    } catch (error) {
      console.error('Error fetching data:', error);
      setResult({valid:false,number:"",local_format:"",international_format:"",country_prefix:"",country_code:"",country_name:"",location:"",carrier:"",line_type:""
    });
    }
  };

  return (
    <Container maxWidth="sm">
    <Paper elevation={3} style={{ padding: '20px', textAlign: 'center' }}>
      <Typography variant="h4" gutterBottom>
        Phone Number Validation
      </Typography>
      <TextField
        label="Enter Phone Number"
        variant="outlined"
        fullWidth
        value={phoneNumber}
        onChange={handleInputChange}
        style={{ marginBottom: '20px' }}
      />
      <Button variant="contained" color="primary" onClick={handleValidateClick}>
        Validate
      </Button>
      <Button variant="contained" color="secondary" onClick={handleViewHistoryClick} style={{ marginLeft: '10px' }}>
        View History
      </Button>
      {result && (
        <div style={{ marginTop: '20px' }}>
          <Typography variant="h6">Validation Result:</Typography>
          <pre>{JSON.stringify(result, null, 2)}</pre>
        </div>
      )}
    </Paper>
  </Container>
);
};

export default Home;


// const Home = () =>{

//     return(
//         <div>
//             <h1>Home ya Sarsoora</h1>
//         </div>
//     );
// };

// export default Home;