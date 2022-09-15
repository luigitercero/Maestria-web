
import React, {useEffect, useState} from "react";
import NavBar from "../components/NavBar/NavBar";
import { Container, Input, Segment } from 'semantic-ui-react'
import axios from 'axios'
import LineTime from "../components/LineTime/LineTime";
/* about:inspect to see debug type about:inspect int search bar  */
// http://127.0.0.1:8888/predict

const Home = () => {
  const [candidato, setcandidato] = useState([]);

  const data = {
    "word_to_search": "Jimmy Morales",
    "question_object":  [{ "question": "¿qué repercusión tuvo?" },
                          { "question": "¿Quién estuvo implicado?" },
                          { "question": "¿Corrupción?" }]
                        
  }

  const respons_test = {'1': {'question': '¿qué repercusión tuvo?',
  'response': {
    'score': 0.005354877095669508,  
    'start': 1003,   
    'end': 1009,   
    'answer': '2012.'}}, 
    '2': {'question': '¿Quién estuvo implicado?',  'response': {'score': 0.04098021984100342,   'start': 207,   'end': 221,   'answer': 'Sandra Torres.'}}, '3': {'question': '¿Corrupción?',  'response': {'score': 0.15366223454475403,   'start': 636,   'end': 654,   'answer': 'lavado de dinero.'}}}



    useEffect(() => {
      axios.get('http://127.0.0.1:8888')
      .then(data => console.log(data))
    },[]);
  
  const response = (candidato) => {

    return (

          <Container>
            
          </Container>

    )
  }
  
  return (
    <Container>
      <NavBar />
      <h1>Home {candidato} </h1>

      <LineTime news={respons_test}/>
      
    </Container>
  );
}

export default Home;