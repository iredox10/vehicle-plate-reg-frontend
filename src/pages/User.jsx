import React from "react";
import { Link, NavLink, useNavigate, useParams } from "react-router-dom";
import UseFetch from "../hooks/UseFetch";
import path from "../utils/path";
import Header from "../components/Header";
import Btn from "../components/Btn";

const User = () => {
  const { id } = useParams();
  const {
    data: user,
    error,
    loading,
  } = UseFetch(`${path}/user/get-user/${id}`);
  console.log(user)
  const navigate= useNavigate()
  const handleRegisterVehicle = () => {
    !user.user.NIN ? navigate(`/complete-registration/${id}`) : navigate(`/register-vehicle/${id}`)
  }

  return (
    <div>
      <Header />
      <div className="flex justify-between md:w-[80%] mx-auto p-5">
        <div>
          {user && (
            <div>
              <h1 className="text-green-400 capitalize font-bold underline">
                welcom {user.user.firstName} {user.user.lastName}
              </h1>
              <div className="flex gap-10 ">
                <div className="my-3 capitalize">
                  <p>bio info</p>
                  <p className="text-white my-2">
                    <span className="font-bold">full Name: </span>
                    {user.user.firstName} {user.user.lastName}
                  </p>
                  <p className="text-white my-2">
                    <span className="font-bold">email: </span>
                    {user.user.email}
                  </p>
                  <p className="text-white my-2">
                    <span className="font-bold">phone Number: </span>
                    {user.user.phoneNumber}
                  </p>
                  <p className="text-white my-2">
                    <span className="font-bold">address: </span>
                    {user.user.address}
                  </p>
                  <p className="text-white my-2">
                    <span className="font-bold">occupation:</span>
                    {user.user.occupation}
                  </p>
                </div>
                <div className="capitalize">
                  <p>contact info</p>
                  {!user.user.NIN ? (
                    <p className="font-bold text-white capitalize">
                      {" "}
                      please complete you registration
                    </p>
                  ) : (
                    <div>
                      <p className="text-white my-2">
                        <span className="font-bold">NIN: </span>
                        {user.user.NIN}
                      </p>
                      <p className="text-white my-2">
                        <span className="font-bold">marital status: </span>
                        {user.user.maritalStatus}
                      </p>
                      <p className="text-white my-2">
                        <span className="font-bold">gender: </span>
                        {user.user.gender}
                      </p>
                      <p className="text-white my-2">
                        <span className="font-bold">state of origin: </span>
                        {user.user.stateOfOrigin}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
          <NavLink
            className="bg-white p-2 my-2 b"
            to={`/complete-registration/${id}`}
          >
            complete registration
          </NavLink>
        </div>
        <div>
          <button
            // to={`/register-vehicle/${id}`}
            onClick={handleRegisterVehicle}
            className="bg-white p-2 my-2 b capitalize"
          >
            register your vehicle
          </button>
          <div>
            {user && (
              <div className="my-5">
                {user.vehicles.map((vehicle) => (
                  <div key={vehicle._id}>
                    <NavLink to={`/vehicle/${vehicle._id}`}>
                      <p className="capitalize underline text-white">
                        <span className="font-bold">vehicle name: </span>
                        {vehicle.vcType}
                      </p>
                    </NavLink>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
