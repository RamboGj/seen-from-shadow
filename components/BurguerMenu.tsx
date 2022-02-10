import { useState } from "react"
import Link from 'next/link'

export default function BurguerMenu() {
    const [dropOpen, setDropOpen] = useState<boolean>(false)

    return (
        <>
        <div className="flex justify-between align-center">
            <div onClick={() => setDropOpen(!dropOpen)} className="overflow-auto items-end space-y-2 md:hidden">
                <span className="block w-8 h-0.5 bg-gray-600"></span>
                <span className="block w-8 h-0.5 bg-gray-600"></span>
                <span className="block w-5 h-0.5 bg-gray-600"></span>
            </div>
            <div>
                {dropOpen && 
                    <ul className="w-24 mt-12 h-24">
                        <li className="mt-2 text-base">
                            <Link href="/">
                                Suporte
                            </Link>
                        </li>
                        <li className="mt-2 text-base">
                            <Link href="/">
                                Autor
                            </Link>
                        </li>
                        <li className="mt-2 text-base">
                            <Link href="/">
                                Login
                            </Link>
                        </li>
                    </ul>
                }
            </div>
        </div>
        </>
    )
}