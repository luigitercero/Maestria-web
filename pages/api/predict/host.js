import axios from 'axios'

const candidate = async(req, res) => {

  res.end(JSON.stringify({ name: process.env.HOST }))
}

export default candidate