import React from 'react'
import a from '../../assets/a.png'
const Hero = () => {
    return (
        <div> 
            <div className=" flex items-center justify-center">
            <img className="mt-20 h-40 w-30 " src={a} />
            </div>
            <div className=" flex items-center justify-center">
            <div className="bg-white mt-9 w-2/3 h-16 flex items-center  backdrop-filter backdrop-blur-sm bg-opacity-20 rounded-lg">
                <p className="text-white text-sm text-center">Hi I am prajwal , I am a web dev I like desgining things that live on teh internet</p>
            </div>
            </div>
        </div>
    )
}

export default Hero
