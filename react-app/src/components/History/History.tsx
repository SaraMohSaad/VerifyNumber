import { useCallback, useEffect, useState } from "react";
import useHistory from "./useHistory";
import { Paper, Table, TableContainer, TableHead, TableRow, TableCell, TableBody } from '@mui/material';

const History = () =>{

    const { isLoading, error, sendRequest } = useHistory();
    const [result, setResult] = useState([{valid:false,number:"",local_format:"",international_format:"",country_prefix:"",country_code:"",country_name:"",location:"",carrier:"",line_type:""}]);
    

      const createTask = (history: any) => {
        setResult(history)
      };
    
      const getHistoryHandler = useCallback( async () => {
        sendRequest(
          createTask.bind(null)
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
            <div>
                <TableContainer component={Paper}>
                    <Table>
                    <TableHead>
                        <TableRow>
                        {columns.map((column) => (
                            <TableCell key={column}>{column}</TableCell>
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
            </div>
        );
};
      

export default History;