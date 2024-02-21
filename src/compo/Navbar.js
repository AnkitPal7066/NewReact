import React from 'react'

export default function Navbar() {
  return (
    <div className="flex justify-between px-28 py-2 items-center bg-black text-white sticky z-40 top-0">
        <div className="flex items-center">
            <div><img className="w-14 h-12" src="https://static.vecteezy.com/system/resources/previews/021/514/918/large_2x/microsoft-edge-browser-brand-logo-symbol-white-design-software-illustration-with-black-background-free-vector.jpg" alt="" /></div>
            <div className="text-2xl font-semibold">GeekFoods</div>
        </div>
        <div className="flex gap-10 font-semibold">
            <div className="hover:text-blue-700 hover:cursor-pointer">Home</div>
            <div className="hover:text-blue-700 hover:cursor-pointer">Quote</div>
            <div className="hover:text-blue-700 hover:cursor-pointer">Restaurants</div>
            <div className="hover:text-blue-700 hover:cursor-pointer">Foods</div>
            <div className="hover:text-blue-700 hover:cursor-pointer">Contact</div>
        </div>
        <div><button className="bg-blue-700 p-2 rounded-md px-4 hover:bg-white hover:text-blue-700 font-semibold">Get Started</button></div>
    </div>
  )
}
