import React, { useEffect, useState } from "react";
import FormInput from "../components/FormInput";
import FormBtn from "../components/FormBtn";
import axios from "axios";
import path from "../utils/path";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../components/Header";
import UseFetch from "../hooks/UseFetch";
import { ErrorMsg } from "../components/ErrorMsg";

export const CompleteReg = () => {
  const [NIN, setNIN] = useState("");
  const [stateOfOrigin, setStateOfOrigin] = useState("");
  const [lga, setLga] = useState("");
  const [homeTown, setHomeTown] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [gender, setGender] = useState("");
  const [maritalStatus, setMaritalStatus] = useState("");
  const [religion, setReligion] = useState("");
  const [err, setErr] = useState("");

  const { id } = useParams();
  const {
    data: user,
    error,
    loading,
  } = UseFetch(`${path}/user/get-user/${id}`);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !NIN ||
      !stateOfOrigin ||
      !lga ||
      !homeTown ||
      !dateOfBirth ||
      !gender ||
      !maritalStatus ||
      !religion
    ) {
      setErr("fill all the fields ");
      console.log(NIN, stateOfOrigin, lga, homeTown, dateOfBirth,gender,maritalStatus,religion);
      return;
    }
    try {
      const res = await axios.patch(`${path}/user/update-user/${id}`, {
        NIN,
        stateOfOrigin,
        lga,
        homeTown,
        dateOfBirth,
        gender,
        maritalStatus,
        religion,
      });
      navigate(`/user/${id}`);
    } catch (err) {
      console.log(err);
    }
  };

  // useEffect(() => {
  //   setTimeout(() => {
  //     user && setNIN(user.user.NIN);
  //     user && setStateOfOrigin(user.user.stateOfOrigin);
  //     user && setLga(user.user.lga);
  //     user && setHomeTown(user.user.homeTown);
  //     user && setDateOfBirth(user.user.dateOfBirth);
  //   }, 2000);
  // }, [NIN, stateOfOrigin, user, lga, homeTown, dateOfBirth]);

  return (
    <div>
      <Header />
      <div className="bg-green-400 m-6 md:w-2/4 md:mx-auto p-2">
        <form onSubmit={handleSubmit}>
          <h1 className="bg-green-700 text-white p-2">Complete Registration</h1>
          {err && <ErrorMsg err={err} />}
          <FormInput
            type={"text"}
            name={"NIN"}
            labelFor={"NIN"}
            lableName={"NIN"}
            value={NIN}
            onchange={(e) => setNIN(e.target.value)}
          />
          <FormInput
            type={"text"}
            name={"stateOfOrigin"}
            labelFor={"stateOforigin"}
            lableName={"stateOfOrigin"}
            value={stateOfOrigin}
            onchange={(e) => setStateOfOrigin(e.target.value)}
          />
          <FormInput
            type={"text"}
            name={"lga"}
            labelFor={"lga"}
            lableName={"local government"}
            value={lga}
            onchange={(e) => setLga(e.target.value)}
          />
          <FormInput
            type={"text"}
            name={"homeTown"}
            labelFor={"homeTown"}
            lableName={"home Town"}
            value={homeTown}
            onchange={(e) => setHomeTown(e.target.value)}
          />

          <FormInput
            type={"date"}
            name={"dateOfBirth"}
            labelFor={"dateOfBirth"}
            lableName={"date of birth"}
            value={dateOfBirth}
            onchange={(e) => setDateOfBirth(e.target.value)}
          />

          <div>
            <label htmlFor="gender">gender</label>
            <div className="flex gap-2 capitalize items-center">
              <label htmlFor="male">male</label>
              <input
                type="radio"
                value="male"
                name="gender"
                onChange={(e) => setGender(e.target.value)}
              />
            </div>
            <div className="flex gap-2 capitalize items-center">
              <label htmlFor="female">female</label>
              <input
                type="radio"
                value="female"
                name="gender"
                onChange={(e) => setGender(e.target.value)}
              />
            </div>
          </div>
          <div className="flex flex-col my-2">
            <label htmlFor="maritalStatus">marital status</label>
            <select
              className="p-2 border-2 border-green-600"
              name="maritalStatus"
              id="maritalStatus"
              onChange={(e) => setMaritalStatus(e.target.value)}
            >
              <option selected disabled>
                select status
              </option>
              <option value="single">single</option>
              <option value="married">married</option>
              <option value="divorced">divorced</option>
              <option value="widow">widow</option>
            </select>
          </div>
          <div className="flex flex-col">
            <label htmlFor="religion">Religion</label>
            <select
              className="p-2 mb-2 border-2 border-green-700"
              name="religion"
              id="religion"
              onChange={(e) => setReligion(e.target.value)}
            >
              <option selected disabled>
                choose religion
              </option>
              <option value="muslim">muslim</option>
              <option value="christian">christian</option>
              <option value="jew">jew</option>
              <option value="jew">others</option>
            </select>
          </div>
          <FormBtn text={"submit"} />
        </form>
      </div>
    </div>
  );
};
