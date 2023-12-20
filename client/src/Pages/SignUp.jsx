import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const SignUp = () => {
    const [formData, setFormData] = useState({})
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    const handleChange = (e) => {
        setFormData({...formData, [e.target.id]: e.target.value})
        }
        console.log(formData);

        const handleSubmit = async (e) => {
            e.preventDefault()
            try {
                setError(false)
                setLoading(true)
                const res = await fetch('/app/auth/signup', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(formData),
                });
                const data = await res.json();
                setLoading(false)
                if(data.success === false){
                    setError(true)
                    return
                }
                navigate("/login")
                
              
             
                
            } catch (error) {
                setLoading(false);
                setError(true)
                
            }
       

        }
    return (
        <div className='p-3 max-w-lg mx-auto'>
            <h1 className='text-3xl text-center font-semibold my-7'>Sign Up</h1>
            <form className='flex flex-col gap-4' action="" onSubmit={handleSubmit}>
                <input type="text" placeholder='username'
                    id='username' className='bg-slate-100 p-3 rounded-lg' 
                    onChange={handleChange} />

                <input type="email" placeholder='email'
                    id='email' className='bg-slate-100 p-3 rounded-lg' 
                    onChange={handleChange} />

                <input type="password" placeholder='password'
                    id='password' className='bg-slate-100 p-3 rounded-lg' 
                    onChange={handleChange} />
                <button disabled={loading} className='bg-slate-700 text-white p-3  rounded-lg uppercase hover:opacity-95 disabled:opacity-80'>{loading ? 'loading...' : 'Sign Up'}</button>
            </form>
            <div className='flex gap-2 mt-3'>
                <p>Have an account?</p>
                <Link to='/login'>
                    <span className='text-blue-500'>Sign In</span>
                </Link>


            </div>

            <p className='text-red-500 mt-5'>{error && 'something went wrong' }</p>

        </div>
    )
}

export default SignUp
