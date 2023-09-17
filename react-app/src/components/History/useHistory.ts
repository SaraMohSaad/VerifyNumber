import { useState, useCallback } from 'react';


const useHistory = () =>{

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendRequest = useCallback(async ( applyData: (arg0: any) => void) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(`http://localhost:9000/addSearchItem/getHistory/`);

      if (!response.ok) {
        throw new Error('Request failed!');
      }

      const data = await response.json();
      applyData(data);
    } catch (err: any) {
      setError(err.message || 'Something went wrong!');
    }
    setIsLoading(false);
  }, []);

  return {
    isLoading,
    error,
    sendRequest,
  };
}

export default useHistory;