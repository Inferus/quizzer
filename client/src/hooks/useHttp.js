
import { useState, useCallback } from "react"
export const useHttp = ()=>{
const [loading, setLoading] = useState(false)
const [error, setError] = useState('')

const request = useCallback(
  async (url, method = "GET", body = null, headers = {}) => {
    try {
      if (body) {
        body = JSON.stringify(body);
        headers["Content-Type"] = "application/json";
      }
      setLoading(true);
      const response = await fetch(`http://localhost:5000${url}`, { method, body, headers});
      const data = await response.json();
      if (!response.ok){
        setError(data.message)
      }
    
    setLoading(false)
    return data
    }catch(err){
        setError(err)
    }
   
    },[])
    return {loading,request,error}
  }