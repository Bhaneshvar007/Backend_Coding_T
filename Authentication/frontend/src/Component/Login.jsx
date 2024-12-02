import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {
    let data = {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
    }

    let [input, setInput] = useState(data);

    let navigate = useNavigate();


    function inputHandler(e) {
        let { name, value } = e.target;
        setInput({ ...input, [name]: value });
    }

    async function submitHandler(e) {
        e.preventDefault();
        let res = await axios.post('http://localhost:3000/login', input);
        console.log(res);
        // console.log(res.data);   // Geting the token
        // console.log(res.data, " ressss");
        if (res.data.token) {
            navigate('/home');
        }
        else {
            alert(res.data)
        }
        localStorage.setItem('token', res.data.token);




        // hame jis page me needi hogi wha ham eska use krenge
        // let res = await axios.post('http://localhost:3000/admin', headers: {
        //     "Authorization": `Bearer ${token}`, // Include token in the Authorization header
        // });

    }

    return (
        <div className='flex items-center justify-center flex-col gap-8'>
            <h1 className='text-blue-600 font-bold text-4xl'>Authentication Page</h1>
            <fieldset className="border border-gray-300 p-6 rounded-lg shadow-md m-5 w-[450px]">
                <legend className="text-lg font-semibold text-gray-700">Login</legend>
                <form action="" className="space-y-4">

                    <div>
                        <input onChange={inputHandler} type="email" name="email" value={input.email} placeholder="e.g. Email"
                            className="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-indigo-300 focus:outline-none" />
                    </div>
                    <div>
                        <input onChange={inputHandler} type="text" name="password" value={input.password} placeholder="e.g. Password"
                            className="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-indigo-300 focus:outline-none" />
                    </div>
                    <div>
                        <button type="submit"
                            onClick={submitHandler}
                            className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition duration-200 mb-5">
                            Login
                        </button>
                    </div>
                </form>
                <span className="text-sm  font-semibold ">
                    If you don't have an account <Link to='/signup' className='text-blue-600 font-bold'>SignUp</Link>
                </span>
            </fieldset>
        </div>
    )
}

export default Login
