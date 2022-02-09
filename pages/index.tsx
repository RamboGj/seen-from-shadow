import Link from 'next/link'
import Pagination  from '../components/Pagination'

const chapters = [
  {number: "Capítulo 1", image: '/thumb.png', href: "/author"},
  {number: "Capítulo 2", image: '/thumb.png', href: "/author"},
  {number: "Capítulo 3", image: '/thumb.png', href: "/author"},
  {number: "Capítulo 4", image: '/thumb.png', href: "/author"},
  {number: "Capítulo 5", image: '/thumb.png', href: "/author"},
  {number: "Capítulo 6", image: '/thumb.png', href: "/author"},
]

export default function Home() {
  return (
    <>
      <div className="w-full">
        <div className="flex mx-auto items-center justify-center w-10/12 h-screen flex-wrap justify-between">
          {chapters.map((chapter) => {
            return (
              <div className="cursor-pointer mt-16 mx-12">
                <Link href={chapter.href}>
                  <img className="object-contain" src={chapter.image}/>
                </Link>
                <h1 className="text-lg mt-2 flex justify-center font-bold">{chapter.number}</h1>
              </div>
            )
          })}
          
        </div>
        <Pagination/>
      </div>
    </>
  )
}
