import axios from 'axios';
import React from 'react'
import { Link } from 'react-router-dom';

const Home = () => {



    async function adminfn() {
        let token = localStorage.getItem('token');
        // console.log(token);
        let res = await axios.get('http://localhost:3000/admin', {
            headers: {
                Authorization: `${token}`
            }
        })
        alert(res.data);
        console.log(res.data, "res admin");


    }
    async function userfn() {
        let token = localStorage.getItem('token');
        // console.log(token, " ttttttt");

        let res = await axios.get('http://localhost:3000/user', {
            headers: {
                Authorization: `${token}`
            }
        })
        alert(res.data);
        console.log(res.data, "res user");

    }



    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <h1 className="text-4xl font-bold text-gray-800">
                Welcome, <span className="text-blue-500  capitelize">Sir/Mem ?</span>
            </h1>
            <p className="mt-4 text-gray-600 text-center max-w-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. A fugiat cumque et inventore provident id sed quis
                doloribus repellat iure nihil officia commodi ipsam dolorem, quos molestiae incidunt neque cum.
            </p>

            <Link to='/'>
                <button className="mt-6 px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition">explore</button>
            </Link>

            <div>
                <button onClick={adminfn} className="mt-6 px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition">get admin</button>
                <button onClick={userfn} className="mt-6 ml-5 px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition">get user</button>
            </div>
        </div>
    )
}

export default Home
