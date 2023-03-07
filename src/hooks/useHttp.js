import { useState, useCallback } from "react";

const useHttp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const createRequest = useCallback( async (url, responseCallback) => {
    setIsLoading(true);
    setError(null);

    try{
      const response = await fetch(url);

      if(!response.ok){
        throw new Error('Request failed!');
      }

      const data = await response.json();

      responseCallback(data);
    }catch(error){
      setError(error.message);
    }

    setIsLoading(false);
  }, []);

  return {
    isLoading,
    error,
    createRequest
  };
};

export default useHttp;