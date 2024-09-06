import Header from "../components/Header"
import { Link } from "react-router-dom"


const Home = () =>{
    return(
        <div>
            <Header />
            <div className="text-center py-20 bg-green-700 h-screen text-white">
                <h1 className="uppercase md:text-4xl font-bold">welcome to vehicle registration <span className='block'> and</span> plate number acquirement</h1>
                <p className="capitalize my-2">register and collect your assign plate number for your vehicle here</p>
                <div className='my-6'>
                <Link to='/login' className='bg-green-400 text-white px-6 py-2 capitalize my-4'>login</Link>
                </div>
            </div>
        </div>
    )
}

export default Home