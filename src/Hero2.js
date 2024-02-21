import React from 'react'

export default function Hero2() {
    return (
        <div className="pb-20 pt-20 p-8 flex justify-between">
            <div className="mt-16"><img className="absolute z-20" style={{ width: "725px", height: "610px" }} src="https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" alt="" /></div>
            <div className="pr-16 bg-slate-100 z-10 flex flex-col pl-32 shadow gap-5 align-middle justify-center" style={{width:"800px",height:"740px"}}>
                <div className="text-3xl font-bold px-10">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore, debitis.</div>
                <div className="px-10 pr-8">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, molestiae! Quidem est esse numquam odio deleniti, beatae, magni dolores provident quaerat totam eos, aperiam architecto eius quis quibusdam fugiat dicta.
                </div>
                <div className="px-10"><button className="hover:bg-white hover:text-purple-600 border border-purple-600 bg-purple-600 text-white py-3 px-12 rounded-md font-semibold">Get in Touch</button></div>
            </div>
        </div>
    )
}
