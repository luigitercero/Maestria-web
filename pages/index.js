
import React, {useEffect, useState} from "react";
import NavBar from "../components/NavBar/NavBar";
import { Container, Input, Segment } from 'semantic-ui-react'

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

  const respons_test = {'1': {'question': '¿qué repercusión tuvo?',
  'response': {
    'score': 0.005354877095669508,  
    'start': 1003,   
    'end': 1009,   
    'answer': '2012.'}}, 
    '2': {'question': '¿Quién estuvo implicado?',  'response': {'score': 0.04098021984100342,   'start': 207,   'end': 221,   'answer': 'Sandra Torres.'}}, '3': {'question': '¿Corrupción?',  'response': {'score': 0.15366223454475403,   'start': 636,   'end': 654,   'answer': 'lavado de dinero.'}}}

    useEffect(() => {
      window
      .fetch('http://127.0.0.1:8888/')
      .then(res => res.json())
      .then(data => setcandidato(data))
    },[]);
  
  const response = (candidato) => {

    return (

          <Container>
            <Segment>
              <h2>{candidato['1'].question}</h2>
              <h3>{candidato['1'].response.answer}</h3>
            </Segment>

            <Segment>
              <h2>{candidato['2'].question}</h2>
              <h3>{candidato['2'].response.answer}</h3>
            </Segment>
            <Segment>
              <h2>{candidato['3'].question}</h2>
              <h3>{candidato['3'].response.answer}</h3>
            </Segment>
          </Container>

    )
  }
  
  return (
    <Container>
      <NavBar />
      <h1>Home {candidato} </h1>
      {response(respons_test)}
    </Container>
  );
}

export default Home;