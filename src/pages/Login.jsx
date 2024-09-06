import React, { useState } from 'react'
import FormInput from '../components/FormInput'
import FormBtn from '../components/FormBtn'
import path from '../utils/path'
import axios from 'axios'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import Header from '../components/Header'
import { ErrorMsg } from '../components/ErrorMsg'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
    const [err,setErr] = useState()
  const navigate = useNavigate()
    const handleSubmit = async (e)=>{
      e.preventDefault()
      if(!email || !password){
        setErr('all field are required')
        return
      }
      try {
        const res = await axios.post(`${path}/user/login`,{email,password})
        const user = res.data
        navigate(`/user/${user._id}`)
      } catch (error) {
        console.log(error.response.data.error);        
        setErr(error.response.data.error)
      }
    }

  return (
    <div>
      <Header />
      <div className="bg-green-400 mx-3 my-6 p-2 md:w-2/4 md:mx-auto">
        <div></div>
        <form onSubmit={handleSubmit}>
          <h1 className="bg-green-700 p-2 text-white font-bold text-2xl">
            Login
          </h1>
          {err && <ErrorMsg err={err} />}
          <FormInput
            type="email"
            labelFor="email"
            lableName="email"
            onchange={(e) => setEmail(e.target.value)}
          />
          <FormInput
            type="password"
            labelFor="password"
            lableName="password"
            onchange={(e) => setPassword(e.target.value)}
          />
          <FormBtn text="login" />
          <p className="my-2">
            Don't have an account?{" "}
            <Link to={"/register"} className="underline hover:text-white">
              Register
            </Link>
          </p>
        </form>
      </div>
      <div className="flex justify-center capitalize  ">
        <NavLink to="/admin-login" className="hover:bg-white p-2 my-1">
          admin login
        </NavLink>
        <NavLink to="/issuer-login" className="hover:bg-white p-2 my-1">
          issuer login
        </NavLink>
    </div>
    </div>
  );
}

export default Login