import Link from 'next/link'
import { useState } from 'react'
import { SearchIcon } from '@heroicons/react/outline'

const chapters = [
  {title: "Capítulo 1", image: '/thumb.png', href: "/author"},
  {title: "Capítulo 2", image: '/thumb.png', href: "/author"},
  {title: "Capítulo 3", image: '/thumb.png', href: "/author"},
  {title: "Capítulo 4", image: '/thumb.png', href: "/author"},
  {title: "Capítulo 5", image: '/thumb.png', href: "/author"},
  {title: "Capítulo 6", image: '/thumb.png', href: "/author"},
]

export default function Home() {
  const [search, setSearch] = useState<string>('')

  const lowerSearch = search.toLowerCase()

  const filteredChapters = chapters.filter((chapter) => {
    return chapter.title.toLowerCase().includes(lowerSearch)
  })

  return (
    <>
      <div className="w-full bg-zinc-900 fixed">
        <form method="GET" className='flex justify-center mx-auto mt-8'>
          <div className="relative text-gray-600 focus-within:text-gray-400">
            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
              <button type="submit" className="p-1 focus:outline-none focus:shadow-outline">
                <SearchIcon aria-hidden="true" className="w-6 h-6"/>
              </button>
            </span>
            <input 
            value={search}
            onChange={(e) => setSearch(e.target.value)} 
            type="search" 
            className="py-2 text-sm text-white bg-gray-900 rounded-lg border-gray-800 pl-10 focus:outline-none focus:bg-white focus:text-gray-900" placeholder="Search..."/>
          </div>
        </form>
        <div className="flex mx-auto items-center justify-center w-10/12 h-screen flex-wrap justify-between">
          {filteredChapters.map((chapter) => {
            return (
              <div key={chapter.title} className="cursor-pointer mt-16 mx-12">
                <Link href={chapter.href}>
                  <img className="object-contain" src={chapter.image}/>
                </Link>
                <h1 className="text-lg text-white mt-2 flex justify-center font-bold">{chapter.title}</h1>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}
