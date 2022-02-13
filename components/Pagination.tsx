import { useState } from "react"

export default function Pagination() {
    const [current, setCurrent] = useState<boolean>(false)

    return (
        <div className="w-full mt-64 mb-12">
            <ul className= "flex justify-center">
                <li onClick={() => setCurrent(true)} 
                className={current ?  
                "px-4 py-2 bg-white text-purple-500 font-bold border-2 border-purple-900 cursor-pointer rounded-xl mx-2"
                : 
                "px-4 py-2 bg-white text-gray-400 font-bold border-2 border-gray-200 cursor-pointer rounded-xl mx-2"}>1</li>
                <li onClick={() => setCurrent(true)}  
                className="px-4 py-2 bg-white text-gray-400 font-bold border-2 border-gray-200 cursor-pointer rounded-xl mx-2">2</li>
                <li onClick={() => setCurrent(true)} 
                className="px-4 py-2 bg-white text-purple-500 font-bold border-2 border-purple-900 cursor-pointer rounded-xl mx-2">3</li>
            </ul>
        </div>
    )
    
}