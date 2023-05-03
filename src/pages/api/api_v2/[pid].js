//dynamic api route
export default function handler(req, res) {
    const { pid } = req.query
    res.end(`Post: ${pid}`)
    }