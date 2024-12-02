import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Signup = () => {
    let data = {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        role: '',
    }

    let [input, setInput] = useState(data);
    let navigate = useNavigate();


    function inputHandler(e) {
        let { name, value } = e.target;
        setInput({ ...input, [name]: value });
    }



    async function submitHandler(e) {
        e.preventDefault();
        try {
            let res = await axios.post('http://localhost:3000/create', input);
            // console.log(res, "dolllll");
            alert(res.data);

            navigate('/home');
        } catch (error) {
            console.error('Error during signup:', error);
            alert('Signup failed. Please try again.');
        }
    }






    return (
        <div className='flex justify-center items-center  flex-col gap-8'>
            <h1 className='text-indigo-600 font-bold text-4xl'>Authentication Page</h1>
            <fieldset className="border border-gray-300 p-6 rounded-lg shadow-md m-5 w-[450px]">
                <legend className="text-lg font-semibold text-gray-700">Register</legend>
                <form action="" className="space-y-4">
                    <div>
                        <input onChange={inputHandler} type="text" name="firstName" value={input.firstName} placeholder="e.g. First Name"
                            className="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-indigo-300 focus:outline-none" />
                    </div>
                    <div>
                        <input onChange={inputHandler} type="text" name="lastName" value={input.lastName} placeholder="e.g. Last Name"
                            className="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-indigo-300 focus:outline-none" />
                    </div>
                    <div>
                        <input onChange={inputHandler} type="email" name="email" value={input.email} placeholder="e.g. Email"
                            className="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-indigo-300 focus:outline-none" />
                    </div>
                    <div>
                        <input onChange={inputHandler} type="text" name="password" value={input.password} placeholder="e.g. Password"
                            className="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-indigo-300 focus:outline-none" />
                    </div>
                    <div>
                        <input onChange={inputHandler} type="text" name="role" value={input.role} placeholder="e.g. admin/user"
                            className="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-indigo-300 focus:outline-none" />
                    </div>
                    <div>
                        <button type="submit"
                            onClick={submitHandler}
                            className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition duration-200 mb-5">
                            Continue
                        </button>
                    </div>


                </form>
                <span className="text-sm  font-semibold ">
                    If you have an account <Link to='/' className='text-blue-600 font-bold'>Login</Link>
                </span>

            </fieldset>
        </div>
    )
}

export default Signup
