// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
    // res.status(200).json({ name: 'John Doe from api_v2' })
    const { pid } = req.query
    res.end(`Post: ${pid}`)
  }
  