import axios from 'axios'

const candidate = async(req, res) => {
  res.end(JSON.stringify({ name: 'John Doe' }))
}

export default candidate