import { BookOpenIcon, InformationCircleIcon, CurrencyDollarIcon, LoginIcon } from '@heroicons/react/outline'
import Link from 'next/link'

export default function Header() {
    return (
        <header className="fixed z-10 flex w-full items-center bg-black text-white font-bold text-lg py-4 px-16 justify-between">
                <Link href="/"> 
                    <a className="hover:text-purple-900 hover:brightness-200" >Logo</a>
                </Link>
                <nav>
                    <ul className="flex">
                        <Link href="/chapters">
                            <li 
                            className="flex items-center ml-12 p-4 hover:brightness-200 hover:cursor-pointer hover:text-yellow-700 hover:underline">
                                <BookOpenIcon aria-hidden="true" className="mr-2 w-6 h-6"/>
                                Capítulos
                            </li>
                        </Link>
                        <Link href="/author">
                            <li 
                            className="flex items-center ml-12 p-4 hover:brightness-200 hover:cursor-pointer hover:text-yellow-700 hover:underline">
                                <InformationCircleIcon aria-hidden="true" className="mr-2 w-6 h-6"/>
                                Autor
                            </li>
                        </Link>
                        <Link href="/support">
                            <li 
                            className="flex items-center ml-12 p-4 hover:brightness-200 hover:cursor-pointer hover:text-yellow-700 hover:underline">
                                <CurrencyDollarIcon aria-hidden="true" className="mr-2 w-6 h-6"/>
                                Suporte
                            </li>
                        </Link>
                        <Link href="/login">
                            <li 
                            className="flex items-center ml-12 p-4 hover:brightness-200 hover:cursor-pointer hover:text-yellow-700 hover:underline">
                                <LoginIcon aria-hidden="true" className="mr-2 w-6 h-6"/>
                                Login
                            </li>
                        </Link>
                    </ul>
                </nav>
        </header>
    )
}