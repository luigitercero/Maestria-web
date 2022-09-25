
import React, {useEffect, useState} from "react";
import NavBar from "../components/NavBar/NavBar";
import { Container, Input, Segment } from 'semantic-ui-react'
import axios from 'axios'
import LineTime from "../components/LineTime/LineTime";
/* about:inspect to see debug type about:inspect int search bar  */
// http://127.0.0.1:8888/predict

const Home = () => {
  const [respons_test, setrespons_test] = useState(null);

  const req_data = {
      "people": [ 
          {"word_to_search": "Jimmy Morales", 
              "question_object": { "1": { "question": "¿qué repercusión tuvo?" },
                           "2": { "question": "¿Quién estuvo implicado?" },
                           "3": { "question": "¿Corrupción?" }
                       }},
           {"word_to_search": "alejandro giammattei", 
              "question_object": { "1": { "question": "¿qué repercusión tuvo?" },
                           "2": { "question": "¿Quién estuvo implicado?" },
                           "3": { "question": "¿Corrupción?" }
                       }} 
       ]                     
  }

    useEffect(() => {
      axios.post('http://127.0.0.1:8888/predict', req_data)
      .then(data => { 
        console.log(data);  
        setrespons_test(data.data.data)
      })
    },[]);
  
  const response = (candidato) => {

    return (

          <Container>
            
          </Container>

    )
  }
  if(!respons_test){
    return <></>
  }
  return (
    <Container>
      <NavBar />
      {respons_test.map((data)=> <LineTime news={data}/>)}
      {/**/}
      
    </Container>
  );
}

export default Home;