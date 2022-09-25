
import React, {useEffect, useState} from "react";
import NavBar from "../components/NavBar/NavBar";
import { Container, Input, Segment } from 'semantic-ui-react'
import { Dimmer, Loader } from 'semantic-ui-react'
import axios from 'axios'
import LineTime from "../components/LineTime/LineTime";
/* about:inspect to see debug type about:inspect int search bar  */
// http://127.0.0.1:8888/predict

const Home = () => {
  const [respons_test, setrespons_test] = useState(null);
  const [search, setSearch] = useState(null);
  const [click, setClick] = useState(false);
  let reqData = null

  const handleSearch = (e) => {
    setSearch(e.target.value)
  }

  const handleClick = () => {
    setClick(true)
    console.log("start to ini query" + reqData + " " + search + " " + click)

      handleReqRequest()
      console.log("data is " + JSON.stringify(reqData))
      getData( reqData)

  
  }

  const handleReqRequest = () => {
    reqData = {
      "people": [ 
          {"word_to_search": search, 
              "question_object": { "1": { "question": "¿qué sucedió?" },
                          "2": { "question": "¿Quienes son los actores del Hecho?" },
                          "3": { "question": "¿de Quienes se está hablando?" },
                      }}
      ] 

    }
    return reqData
  }

  const getData= (req)=>{
    axios.post('http://127.0.0.1:8888/predict', req)
      .then(res => { 
        console.log(res);  
        setrespons_test(res.data.data)
        setClick(false)
      })

  }

  const renderData = () => {
    if(!respons_test && click){
      return  <Loader active inline='centered' />
    }


    if(!respons_test){
      return  <> </>
    }

    if(click){
      return  <Loader active inline='centered' />
    }
    return respons_test.map((data)=> <LineTime news={data}/>)
  }
  
  
  return (
    <Container>
      <NavBar handleSearch={handleSearch} search={search} handleClick={handleClick}/>
      {renderData()}
      {/**/}
      
    </Container>
  );
}

export default Home;