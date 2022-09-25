import axios from 'axios'

const candidate = async(req, res) => {

  const header = {
    'Content-Type': 'application/json',
  }

  const body = {
    "people": [ 
        {"word_to_search": "Jimmy Morales", 
            "question_object": { "1": { "question": "¿qué repercusión tuvo?" },
                        "2": { "question": "¿Quién estuvo implicado?" },
                        "3": { "question": "¿Corrupción?" }
                    }}
    ]
}

  axios
      .post( process.env.HOST+"/predict", body, header)
      .then((response) => {
        setPost(response.data);
      });
}

export default candidate