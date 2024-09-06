import axios from "axios"
import path from "../utils/path"
import { useParams } from "react-router-dom"
import UseFetch from "../hooks/UseFetch"
import { useEffect, useState } from "react"
import Btn from "../components/Btn"
import FormInput from "../components/FormInput"
import FormBtn from "../components/FormBtn"
import Header from "../components/Header"

const Admin = () =>{
    const {id} =useParams()
    const {data:admin,error,loading} = UseFetch(`${path}/admin/get-admin/${id}`)
    const [showModel, setShowModel] = useState(false)
    const [fullName, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [err, setErr] = useState('')
    const [newUser, setNewUser] = useState(false)
  // useEffect(()=>{
  //   const fetct = () =>{
  //     fetch(`${path}/admin/get-admin/${id}`);
  //   }
  //   fetct()
  // }, [id, newUser])

    const handleSubmit = async(e)=>{
        e.preventDefault()
        if(!fullName || !email || !password){
            setErr('please fill all the fields')
            console.log(err);
            return
        }
        try {
            const res = await axios.post(`${path}/admin/add-issuer/${id}`,{fullName,email,password})
            console.log(res.data);
            setShowModel(!showModel)
            setNewUser(true)
        } catch (err) {
            console.log(err)
        }
    }

    return (
      <div>
        <Header />
        <div>
          {admin && (
            <div className="flex items-center justify-between p-4">
              <div>
                <h1 className="capitalize underline text-white text-2xl font-bold">
                  admin info
                </h1>
                <p className="text-white my-2">
                  <span className="font-bold">full Name: </span>
                  {admin.admin.fullName}
                </p>
                <p className="text-white my-2">
                  <span className="font-bold">email: </span>
                  {admin.admin.email}
                </p>
                <Btn
                  text={"add issuer"}
                  onclick={() => setShowModel(!showModel)}
                />
              </div>
              <div>
                {admin && (
                  <div>
                    <h1 className="capitalize underline text-white text-2xl font-bold">
                      issuers list
                    </h1>
                    {admin.admin.issuers.map((issuer) => (
                      <div key={issuer._id}>
                        <p className="capitalize">
                          <span>issuer name:</span>
                          {issuer.fullName}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}

          {showModel && (
            <div className="md:w-[50%] mx-auto bg-green-400 p-2 shadow-lg shadow-green-600">
              <form onSubmit={handleSubmit}>
                <div className="flex items-center justify-between">
                  <h1>add issuer</h1>
                  <button onClick={() => setShowModel(!showModel)}>
                    close
                  </button>
                </div>
                {err && <p>{err}</p>}
                <FormInput
                  type={"text"}
                  labelFor={"fullName"}
                  lableName={"fullName"}
                  onchange={(e) => setFullName(e.target.value)}
                />
                <FormInput
                  type={"email"}
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
                <FormBtn text={"add"} />
              </form>
            </div>
          )}
        </div>
      </div>
    );
}

export default Admin