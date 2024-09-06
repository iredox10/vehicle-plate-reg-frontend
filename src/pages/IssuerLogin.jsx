import axios from "axios";
import path from "../utils/path";
import FormInput from "../components/FormInput";
import { useState } from "react";
import FormBtn from "../components/FormBtn";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";

const IssuerLogin = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await axios.post(`${path}/issuer/login`,{email,password});
      const issuer = res.data
      navigate(`/issuer/${issuer._id}`)
      console.log(issuer)
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <Header />
      <h1 className="capitalize text-center text-2xl my-2 text-white font-bold">
        issuer login
      </h1>
      <div className="bg-green-400 mx-3 my-6 p-2 md:w-2/4 md:mx-auto">
        <h1 className="bg-green-700 p-2 text-white font-bold text-2xl">
           Login
        </h1>
        <form onSubmit={handleSubmit}>
          <FormInput
            type={"text"}
            labelFor={"email"}
            lableName={"email"}
            onchange={(e) => setEmail(e.target.value)}
          />
          <FormInput
            type={"password"}
            labelFor={"password"}
            lableName={"password"}
            onchange={(e) => setPassword(e.target.value)}
          />
          <FormBtn text={"login"} />
        </form>
      </div>
    </div>
  );
};

export default IssuerLogin;
