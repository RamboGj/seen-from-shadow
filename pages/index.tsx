import Link from 'next/link'
import { useEffect, useState } from 'react'
import { SearchIcon } from '@heroicons/react/outline'
import Pagination from '../components/Pagination'

export default function Home() {
  const [search, setSearch] = useState<string>('')
  const [isOption, setIsOption] = useState<string>("Selecione")
  const [allChapters, setAllChapters] = useState([])

  var lowerSearch = search.toLowerCase()

  useEffect(() => {
    const baseURL = 'http://localhost:3000'
    const url = `${baseURL}/api/chapters`
     fetch(url)
    .then(response => response.json())
    .then((response) => {
      console.log(response)
      setAllChapters(response)
      console.log('all chaps:', allChapters)
    })
  }, [])

  const filteredChapters = allChapters.filter((chapter) => {
    if (isOption != "Selecione") {
      return chapter.size === isOption
    } else {
      return chapter.title.toLowerCase().includes(lowerSearch)
    }
  })

  return (
    <>
      <body className="w-full h-full bg-zinc-900 bg-local">
        <div className="flex align-center items-center">
          <form method="GET" className='flex justify-center'>
            <div className="relative text-gray-600 focus-within:text-gray-400">
              <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                <button type="submit" className="p-1 focus:outline-none focus:shadow-outline">
                  <SearchIcon aria-hidden="true" className="md:mt-32 mt-28 w-6 h-6"/>
                </button>
              </span>
              <input 
              value={search}
              onChange={(e) => setSearch(e.target.value)} 
              type="search" 
              className="md:mt-32 mt-28 py-2 text-sm text-white bg-gray-900 rounded-lg border-gray-800 pl-10 focus:outline-none focus:bg-white focus:text-gray-900" placeholder="Search..."/>
            </div>
          </form>
          <select value={isOption} className="text-white bg-gray-500 w-48 h-12 mt-28 rounded-lg ml-12" onChange={(e) => setIsOption(e.target.value)}>
            <option value="">Selecione</option>
            <option value="Postado">Postado</option>
            <option value="Editar">Editar</option>
          </select>
        </div>
        <div className="relative flex mx-auto items-center justify-center w-10/12 h-screen flex-wrap justify-between">
          
           {filteredChapters.map((chapter) => {
            return (
              <div key={chapter.title} className="cursor-pointer mt-12 md:mt-24 mx-6 xl:mx-12">
                <Link href={chapter.href}>
                  <img className="object-contain" src={chapter.image}/>
                </Link>
                <h1 className="text-lg text-white mt-2 flex justify-center font-bold">{chapter.title}</h1>
              </div>
            )
          })}
        </div>
        <Pagination />
      </body>
    </>
  )
}
