import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import useSignUp from '../Hooks/useSignUp.js';

function SignUp() {
    const [fullName, setFullName] = useState("");
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [confPassword, setConfPassword] = useState("");
    const [gender, setGender] = useState("");

    const {loading, signup} = useSignUp();

    const handleSubmit = async (e) => {
   
        e.preventDefault();
        await signup(fullName, userName, password, confPassword, gender);
    };

    return (
        <div className='flex flex-col items-center justify-center min-w-96 mx-auto '>
            <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
                <h1 className='text-3xl font-semibold text-center text-gray-300'>
                    SignUp on
                    <span className='text-blue-700'> Khatti</span>
                </h1>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label className='label p-2 mt-2'>
                            <span className='text-base label-text'>Full Name</span>
                        </label>
                        <input type='text' placeholder='Enter Full name' value={fullName} onChange={e => setFullName(e.target.value)} className='w-full input input-bordered h-10' />
                    </div>
                    <div>
                        <label className='label p-2 mt-1'>
                            <span className='text-base label-text'>Username</span>
                        </label>
                        <input type='text' placeholder='Enter username' value={userName} onChange={e => setUserName(e.target.value)} className='w-full input input-bordered h-10' />
                    </div>
                    <div className='mt-2'>
                        <label className='label'>
                            <span className='text-base label-text'>Password</span>
                        </label>
                        <input type='password' placeholder='Enter password' value={password} onChange={e => setPassword(e.target.value)} className='w-full input input-bordered h-10' />
                    </div>
                    <div className='mt-2'>
                        <label className='label'>
                            <span className='text-base label-text'>Confirm Password</span>
                        </label>
                        <input type='password' placeholder='Confirm password' value={confPassword} onChange={e => setConfPassword(e.target.value)} className='w-full input input-bordered h-10' />
                    </div>

                    <div className='flex mt-2'>
                        <div className='form-control'>
                            <label className='label gap-2 cursor-pointer'>
                                <span className='label-text'>Male</span>
                                <input type='radio' name='gender' value='male' checked={gender === 'male'} onChange={e => setGender(e.target.value)} className='radio border-slate-900' />
                            </label>
                        </div>

                        <div className='form-control'>
                            <label className='label gap-2 cursor-pointer'>
                                <span className='label-text'>Female</span>
                                <input type='radio' name='gender' value='female' checked={gender === 'female'} onChange={e => setGender(e.target.value)} className='radio border-slate-900' />
                            </label>
                        </div>
                    </div>

                    <Link to='/login' className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block'>
                        Already have an account?
                    </Link>

                    <div>
                        <button type='submit' disabled={loading} className='btn btn-block btn-sm my-2 h-10' >
                            {loading ? <span className='loading loading-spinner'></span> : "Sign Up"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default SignUp;
