import React from 'react'

function SignUp() {
    return (
        <div className='flex flex-col items-center justify-center min-w-96 mx-auto '>
            <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
                <h1 className='text-3xl font-semibold text-center text-gray-300'>
                    SignUp on
                    <span className='text-blue-700'> Khatti</span>
                </h1>
                <form>
                    <div>
                        <label className='label p-2 mt-2'>
                            <span className='text-base label-text'>Full Name</span>
                        </label>
                        <input type='text' placeholder='Enter Full name' className='w-full input input-bordered h-10' />
                    </div>
                    <div>
                        <label className='label p-2 mt-1'>
                            <span className='text-base label-text'>Username</span>
                        </label>
                        <input type='text' placeholder='Enter username' className='w-full input input-bordered h-10' />
                    </div>
                    <div className='mt-2'>
                        <label className='label'>
                            <span className='text-base label-text'>Password</span>
                        </label>
                        <input type='password' placeholder='Enter password' className='w-full input input-bordered h-10' />
                    </div>
                    <div className='mt-2'>
                        <label className='label'>
                            <span className='text-base label-text'>Confirm Password</span>
                        </label>
                        <input type='password' placeholder='Confirm password' className='w-full input input-bordered h-10' />
                    </div>

                    <div className='flex mt-2'>
                        <div className='form-control'>
                            <label className='label gap-2 cursor-pointer'>
                                <span className='label-text'>Male</span>
                                <input type='radio' name='gender' value='male' className='radio border-slate-900' />
                            </label>
                        </div>

                        <div className='form-control'>
                            <label className='label gap-2 cursor-pointer'>
                                <span className='label-text'>Female</span>
                                <input type='radio' name='gender' value='female' className='radio border-slate-900' />
                            </label>
                        </div>
                    </div>



                    <a href='#' className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block'>
                        Already have an account?
                    </a>

                    <div>
                        <button className='btn btn-block btn-sm my-2 h-10' >SignUp</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SignUp