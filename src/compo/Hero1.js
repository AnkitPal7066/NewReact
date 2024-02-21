import React from 'react';

export default function Hero1() {
    return (
        <div className=" pb-60 pl-44 pt-44 flex flex-col gap-8 relative bg-[url('https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80')] bg-cover bg-center bg-no-repeat">
            <div className="text-5xl text-center font-extrabold"style={{width: "500px"}}>Let us find your <span className="text-red-600">Forever Food.</span></div>
            <div className="text-xl text-center" style={{width: "500px"}}>Lorem ipsum dolor sit Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit.</div>
            <div className="text-center w-96 flex gap-4 text-sm">
                <button className="hover:bg-white hover:text-red-600 bg-red-600 text-white py-3 px-10 rounded-md font-semibold">Search Now</button>
                <button className="hover:bg-red-600 hover:text-white bg-white text-red-600 py-3 px-10 rounded-md font-semibold">Know More</button>
            </div>
        </div>

    );
}
