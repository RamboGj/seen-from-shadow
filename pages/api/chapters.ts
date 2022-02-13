import { NextApiRequest, NextApiResponse } from "next";

export default function getChapters(req: NextApiRequest, res: NextApiResponse) {
    const chapters = [
        {title: "Capítulo 1", image: '/thumb.png', href: "/author", size: "Postado"},
        {title: "Capítulo 2", image: '/thumb.png', href: "/author", size: "Editar"},
        {title: "Capítulo 3", image: '/thumb.png', href: "/author", size: "Postado"},
        {title: "Capítulo 4", image: '/thumb.png', href: "/author", size: "Editar"},
        {title: "Capítulo 5", image: '/thumb.png', href: "/author", size: "Postado"},
        {title: "Capítulo 6", image: '/thumb.png', href: "/author", size: "Postado"},
      ]

    if (req.method === 'GET') {
        return res.status(200).json(chapters)
    }
}