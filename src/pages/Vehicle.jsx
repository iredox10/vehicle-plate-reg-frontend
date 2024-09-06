import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import UseFetch from '../hooks/UseFetch'
import path from '../utils/path'
import FormBtn from '../components/FormBtn'
import axios from 'axios'
import Header from '../components/Header'

const Vehicle = () => {
    const {id} = useParams()
    const navigate = useNavigate()
    const {data:vehicle,error,loading} = UseFetch(`${path}/user/get-vehicle/${id}`)
    // console.log(vehicle)

    const [apply, setApply] = useState(false)
    // const [applied, setApplied] = useState(false)
    const handleSubmit = async(e)=>{
        e.preventDefault()
        try {
            const res = await axios.post(`${path}/user/apply-plate/${id}`,{apply})
            navigate(-1)
        } catch (err) {
            console.log(err)
        }
    }
  return (
    <div>
      <Header />
      <div className="p-4 flex justify-between">
        <div className="">
          {vehicle && (
            <div>
              <h1 className="text-white capitalize font-bold text-2xl my-2">
                vehicle detail
              </h1>
              <div className="flex gap-10">
                <div>
                  <p className="capitalize  text-white">
                    <span className="font-bold">vehicle name: </span>
                    {vehicle.vehicle.vcType}
                  </p>
                  <p className="capitalize  text-white">
                    <span className="font-bold">driver License: </span>
                    {vehicle.vehicle.driverLicense}
                  </p>
                  <p className="capitalize  text-white">
                    <span className="font-bold">engine number: </span>
                    {vehicle.vehicle.engineNumber}
                  </p>
                  <p className="capitalize  text-white">
                    <span className="font-bold">place issue: </span>
                    {vehicle.vehicle.placeIssue}
                  </p>
                </div>

                <div>
                  <p className="capitalize  text-white">
                    <span className="font-bold">state of registration: </span>
                    {vehicle.vehicle.stateOfReg}
                  </p>
                  <p className="capitalize  text-white">
                    <span className="font-bold">vehicle capacity: </span>
                    {vehicle.vehicle.vcCapacity}
                  </p>
                  <p className="capitalize  text-white">
                    <span className="font-bold">vehicle chasis number: </span>
                    {vehicle.vehicle.vcChasisNumber}
                  </p>
                  <p className="capitalize text-white ">
                    <span className="font-bold">plate Number: </span>
                    {vehicle.vehicle.plateNumber ? (
                      <span className="bg-green-400 p-1">
                        {vehicle.vehicle.plateNumber}
                      </span>
                    ) : (
                      "pending"
                    )}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
        <div>
          {vehicle && vehicle.vehicle.appliedForPlate == false ? (
            <div className="bg-green-700 shadow-lg shadow-green-500 w-full p-2">
              <form onSubmit={handleSubmit}>
                <h1 className="text-white capitalize font-bold">
                  apply for plate number
                </h1>
                <div className="flex justify-center gap-10 my-2 capitalize text-white font-bold">
                  <div>
                    <label htmlFor="apply">yes</label>
                    <input
                      type="radio"
                      name="apply"
                      id="apply"
                      onChange={() => setApply(true)}
                    />
                  </div>
                  <div>
                    <label htmlFor="apply">no</label>
                    <input
                      type="radio"
                      name="apply"
                      id="apply"
                      onChange={() => setApply(false)}
                    />
                  </div>
                </div>
                <div className="flex justify-center">
                  <FormBtn text={"apply"} />
                </div>
              </form>
            </div>
          ) : (
            "you already apply for this vehicle"
          )}
        </div>
      </div>
    </div>
  );
}

export default Vehicle