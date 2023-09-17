import { useCallback, useEffect, useState } from "react";
import useHistory from "./useHistory";
import { Paper, Table, TableContainer, TableHead, TableRow, TableCell, TableBody } from '@mui/material';
import './History.css';

const History = () =>{

    const { isLoading, error, sendRequest } = useHistory();
    const [result, setResult] = useState([{valid:false,number:"",local_format:"",international_format:"",country_prefix:"",country_code:"",country_name:"",location:"",carrier:"",line_type:""}]);
    

      const getHistory = (history: any) => {
        setResult(history)
      };
    
      const getHistoryHandler = useCallback( async () => {
        sendRequest(
            getHistory.bind(null)
        );
      },[])
  
      useEffect(()=>{
        getHistoryHandler()
      }, [getHistoryHandler])

      const columns = [
        'Valid',
        'Number',
        'Local Format',
        'International Format',
        'Country Prefix',
        'Country Code',
        'Country Name',
        'Location',
        'Carrier',
        'Line Type',
      ];
      
        return (
            <TableContainer
            className="home_body"
            sx={{
                width: '80vw',
                margin: '0 auto', // Center the table horizontally
            }}
            component={Paper}
            >
            <Table
                sx={{
                fontSize: '14px', // Reduce font size for smaller table
                }}
            >
                <TableHead>
                <TableRow>
                    {columns.map((column) => (
                    <TableCell
                        key={column}
                        sx={{
                        backgroundColor: 'rgb(100,100,100)', // Change the header background color
                        color: 'white', // Change the header text color
                        fontWeight: 'bold', // Make the header text bold
                        }}
                    >
                        {column}
                    </TableCell>
                    ))}
                </TableRow>
                </TableHead>
                <TableBody>
                {result.map((row, index) => (
                    <TableRow key={index}>
                    <TableCell>{row.valid.toString()}</TableCell>
                    <TableCell>{row.number}</TableCell>
                    <TableCell>{row.local_format}</TableCell>
                    <TableCell>{row.international_format}</TableCell>
                    <TableCell>{row.country_prefix}</TableCell>
                    <TableCell>{row.country_code}</TableCell>
                    <TableCell>{row.country_name}</TableCell>
                    <TableCell>{row.location}</TableCell>
                    <TableCell>{row.carrier}</TableCell>
                    <TableCell>{row.line_type}</TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
            </TableContainer>
        );
};
      

export default History;