import React from 'react'
import myImage from '../compo/cloud-server.png';

export default function Footer() {
    return (
        <div className="flex flex-col items-center justify-center gap-5 bg-slate-100 py-20 pb-10">
            <div className="flex items-center justify-center gap-3">
                <img className="w-12" src={myImage} alt="" />
                <div className="text-xl font-bold text-sky-700">logoipsum</div>
            </div>
            <div className="w-1/3 text-center mb-5 text-slate-600">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt consequuntur amet culpa cum itaque neque.
            </div>
            <div className="flex gap-10 justify-center text-slate-700">
                <div>About</div>
                <div>Careers</div>
                <div>History</div>
                <div>Services</div>
                <div>Projects</div>
                <div>Blog</div>
            </div>
            <div className="flex text-3xl gap-10 text-slate-700 mt-5">
                <div><i class="ri-facebook-box-fill"></i></div>
                <div><i class="ri-instagram-fill"></i></div>
                <div><i class="ri-twitter-fill"></i></div>
                <div><i class="ri-github-fill"></i></div>
                <div><i class="ri-dribbble-line"></i></div>
            </div>
        </div>
    )
}
