import React, { useState } from 'react'
import { Form, useNavigate, useParams } from 'react-router-dom'
import UseFetch from '../hooks/UseFetch'
import FormInput from '../components/FormInput'
import Btn from '../components/Btn'
import path from '../utils/path'
import axios from 'axios'
import FormBtn from '../components/FormBtn'
import Header from '../components/Header'

export const RegisterVehicle = () => {
    const {id} = useParams()
    const {data:user,error,loading} = UseFetch(`${path}/user/get-user/${id}`)

    const [driverLicense, setDriverLicense] = useState('')
    const [placeIssue, setplaceIssue] = useState('')
    const [stateOfReg, setStateOfReg] = useState('')
    const [engineNumber, setEngineNumber] = useState('')
    const [vcType, setVcType] = useState('')
    const [vcChasisNumber, setvcChasisNumber] = useState('')
    const [vcCapacity, setVcCapacity] = useState('')
    const [err, setErr] = useState('')

    const navigate = useNavigate()

    const handleSubmit = async (e) =>{
        e.preventDefault()
        if(!driverLicense || !placeIssue || !stateOfReg || !engineNumber || !vcType || !vcChasisNumber || !vcCapacity){
            setErr('please fill all the fields')
            return
        }
        if(user.NIN === ''){
            setErr('please complete registration first!!')
            setTimeout(()=>{
                (`/complete-registration/${id}`)
            },3000)
            return
        }
        try {
            const res = await axios.post(`${path}/user/register-vehicle/${id}`,{
                driverLicense,placeIssue,stateOfReg,engineNumber,vcType,vcCapacity,vcChasisNumber
            })
            navigate(`/user/${id}`)
        } catch (err) {
            console.log(err)
        }
    }

  return (
    <div>
      <Header />
      <div>
        <div className="bg-green-400 m-6 md:w-2/4 md:mx-auto p-2">
          <h1 className="bg-green-700 text-white p-2">Register Your Vehicle</h1>
          <form onSubmit={handleSubmit}>
            {err && <p>{err}</p>}
            <FormInput
              type={"text"}
              labelFor={"driverLicense"}
              lableName={"driverLicense"}
              onchange={(e) => setDriverLicense(e.target.value)}
            />
            <FormInput
              type={"text"}
              labelFor={"placeIssue"}
              lableName={"placeIssue"}
              onchange={(e) => setplaceIssue(e.target.value)}
            />
            <FormInput
              type={"text"}
              labelFor={"stateOfReg"}
              lableName={"state of registration"}
              onchange={(e) => setStateOfReg(e.target.value)}
            />

            <FormInput
              type={"text"}
              labelFor={"vcChasisNumber"}
              lableName={"vehicle ChasisNumber"}
              onchange={(e) => setvcChasisNumber(e.target.value)}
            />

            <FormInput
              type={"text"}
              labelFor={"engineNumber"}
              lableName={"engine Number"}
              onchange={(e) => setEngineNumber(e.target.value)}
            />

            <FormInput
              type={"text"}
              labelFor={"vcType"}
              lableName={"vehicle Type"}
              onchange={(e) => setVcType(e.target.value)}
            />

            <FormInput
              type={"number"}
              labelFor={"vcCapicity"}
              lableName={"vehicle Capicity"}
              onchange={(e) => setVcCapacity(e.target.value)}
            />
            <FormBtn text={"add vehicle"} />
          </form>
        </div>
      </div>
    </div>
  );
}
