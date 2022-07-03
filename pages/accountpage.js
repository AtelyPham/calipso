import React from 'react'

function accountpage() {
  return (
    <>
    <div className="h-screen">
    <div className="flex flex-wrap h-5/6 top-0">
        <div className="basis-1/3 flex flex-col  ">
            <div className="rounded-md h- w-80 bg-slate-100 absolute left-32 top-28 py-8">
                <div className="flex flex-col justify-center">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTftipWdyK514LenkAJmM-78YfYb-rx8Mdzrw&usqp=CAU" className="rounded-full object-cover h-32 w-32 mx-auto"></img>
                    <input type="submit" value="Upload a photo" />
                </div>
                <div className=" pt-7 px-10">
                    <p className=" font-bold pb-3">Identity Verification</p>
                    <p>So I started to walk into the water. I won't lie to you boys, I was terrified</p>  
                </div>
                <div className=" pt-7 px-10">
                    <p className="font-bold text-2xl pb-3">John Duo</p>
                    <p className="">Email confirmed</p>
                    <p className="">Mobile confirmed</p>
                </div>
            </ div>
        </div>
        <div className="basis-1/3">        
            <div className="rounded-md h-94 w-80 absolute top-28">
                <p className="font-bold text-2xl pb-3">Hello, John Duo</p>
                <p className="pb-5">Email confirmed</p>
                <form className="pb-3">
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm mb-2" for="name">
                        Display Name
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 font-light leading-tight focus:outline-none focus:shadow-outline" id="displayname" type="text" placeholder="Display Name"></input>
                    </label>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm mb-2" for="email">
                        Email
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 font-light leading-tight focus:outline-none focus:shadow-outline" id="email" type="text" placeholder="you.@gmail.com"></input>
                    </label>
                </div>
              
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm mb-2" for="Gender">
                        Gender
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 font-light leading-tight focus:outline-none focus:shadow-outline" id="Twitter" type="text" placeholder="-"></input>
                    </label>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm mb-2" for="Twitter">
                        Twitter
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 font-light leading-tight focus:outline-none focus:shadow-outline" id="Twitter" type="text" placeholder="@twitter_uername"></input>
                    </label>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm mb-2" for="linkedin">
                        Linkedin
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 font-light leading-tight focus:outline-none focus:shadow-outline" id="linkedin" type="text" placeholder="https://www.linkedin.com/"></input>
                    </label>
                </div>
                   
                </form>
            </ div>
        </div>
        <div className="basis-1/3">
        <div className="rounded-md h-94 w-80 absolute top-44">
                <p className="font-bold text-2xl pb-3"></p>
                <p className="pb-5"></p>
                <form className="pb-3">
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm mb-2" for="age">
                            Age
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 font-light leading-tight focus:outline-none focus:shadow-outline" id="age" type="text" placeholder="22"></input>
                        </label>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm mb-2" for="phone">
                            Phone
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 font-light leading-tight focus:outline-none focus:shadow-outline" id="phone" type="text" placeholder="1234.1234.1234"></input>
                        </label>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm mb-2" for="UserName">
                            UserName
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 font-light leading-tight focus:outline-none focus:shadow-outline" id="UserName" type="text" placeholder=""></input>
                        </label>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm mb-2" for="facebook">
                            Facebook URL
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 font-light leading-tight focus:outline-none focus:shadow-outline" id="Facebook" type="text" placeholder="URL"></input>
                        </label>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm mb-2" for="instagram">
                            Instagram
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 font-light leading-tight focus:outline-none focus:shadow-outline" id="Instagram" type="text" placeholder="@userintagram"></input>
                        </label>
                    </div>
                   
                </form>
            </ div>
        </div>
        
    </div>
    <div className="flex flex-col justify-center">
        <div className="text-center">
        <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
            Edit profile
        </button>
        </div>
            <a className="text-center pt-6" href="#" >Check in by you</a>
        </div>
    </div>
    </>
  )
}

export default accountpage