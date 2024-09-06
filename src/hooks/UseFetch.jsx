import { useEffect, useState } from "react";
import axios from 'axios'
const UseFetch = (url, options) => {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    useEffect(() => {
        const fetch = async() =>{
            try{
                setLoading(true)
                const res = await axios.get(url, options)
                setData(res.data)
                setLoading(false)
            }catch(err){
                setError(err)
            }
        }
        fetch()
    }, [url, options])
    return {data,loading,error}
}

export default UseFetch