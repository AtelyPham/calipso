import React, { useState } from 'react'
import Head from 'next/head'
import { TextInput } from 'flowbite-react'
import axios from 'axios'

const Login = () => {

    const [email, setEmail] = useState('')
    const [isCheck, setIsCheck] = useState(false)

    const handleLogin = (ev) => {
        setEmail(ev.target.value)
    }

    const handleSubmit = async (ev) => {
        ev.preventDefault()

        await axios.post('/api/login',{
            email: email,
        })

        setIsCheck(true)
    }

  return (
    <div className="container flex justify-center items-center w-screen h-screen mx-auto">
        <Head>
            <title>Login</title>
        </Head>
        
        { isCheck ? 
            <div className='px-20 py-14 bg-green-200 rounded-[2rem]'>
                <div>
                    <span className='text-2xl font-medium text-center text-bold'>Please check your email!</span>
                </div>
            </div> : <div className="flex flex-col items-center">
            <div>
                <h1 className="text-4xl text-center font-bold text-gray-700 py-7">Đăng nhập/đăng kí</h1>
            </div>
            <div className="w-full">
                <form onSubmit={handleSubmit}>
                    <TextInput 
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter your email...."
                    required
                    onChange={handleLogin}
                    />
                    <button type="submit" className="py-2 bg-red-400 rounded-md text-white hover:bg-red-500 active:bg-red-400 w-full mt-4 lg:mt-6">
                        Lấy link
                    </button>
                </form>
            </div>
        </div> }
        
    </div>
  )
}

export default Login
