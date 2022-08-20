import React, {useEffect, useState} from "react";
import NavBar from "../components/NavBar/NavBar";

/* about:inspect to see debug type about:inspect int search bar  */
// http://127.0.0.1:8888/predict

const Home = () => {
  const [candidato, setcandidato] = useState([]);

  const data = {
    "word_to_search": "Jimmy Morales",
    "question_object": { "1": { "question": "¿qué repercusión tuvo?" },
                          "2": { "question": "¿Quién estuvo implicado?" },
                          "3": { "question": "¿Corrupción?" }
                        }
  }

  useEffect(() => {
    window.fetch('http://127.0.0.1:8888/predict', data)
  .then(data => {
    setcandidato(data) // JSON data parsed by `data.json()` call
  });

  },[])
  
  return (
    <div>
      <NavBar />
      <h1>Home {candidato} </h1>
    </div>
  );
}

export default Home;