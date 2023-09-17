import axios from "axios";
import { useState } from "react";
import { VerifyResult } from "../../Types/types";


const useHome = () =>{

    const [result, setResult] = useState<VerifyResult>({valid:false,number:"",local_format:"",international_format:"",country_prefix:"",country_code:"",country_name:"",location:"",carrier:"",line_type:""
    });
    const [phoneNumber, setPhoneNumber] = useState('');



    const addSearchItem = async(results:VerifyResult)=>{
        try{
            await axios.post(`http://localhost:9000/addSearchItem/addSearchItem/`, results)
            
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

      return{
        handleValidateClick,
        setPhoneNumber,
        phoneNumber,
        result,
      }
    
}

export default useHome;