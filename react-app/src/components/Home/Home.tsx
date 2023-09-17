
import { TextField, Button, Container, Typography, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import useHome from './useHome';
import './Home.css';
import { ChangeEvent } from 'react';

const Home = () => {

  const { result, phoneNumber, handleValidateClick, setPhoneNumber } = useHome();


  const navigate = useNavigate();

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPhoneNumber(event.target.value);
  };

  const handleViewHistoryClick = () => {
    navigate("/History");
  };


  return (
    <div className='home_body'>
        <Container className='home_main' maxWidth="sm">
            <Paper elevation={3} style={{ padding: '20px', textAlign: 'center' }}>
            <Typography variant="h4" gutterBottom>
                Phone Number Validation
            </Typography>
            <TextField
                label="Enter Phone Number (+2001#########)"
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
    </div>

);
};

export default Home;