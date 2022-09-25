import axios from 'axios'

const health = async(req, res) => {
  const host = process.env.HOST
  axios.get(host)
  .then(data => res.end(data.data))

}

export default health