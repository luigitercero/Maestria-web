
import React, {useEffect, useState} from "react";
import NavBar from "../components/NavBar/NavBar";
import { Container, Input, Segment } from 'semantic-ui-react'
import { Dimmer, Loader } from 'semantic-ui-react'
import axios from 'axios'
import LineTime from "../components/LineTime/LineTime";
import Countdown from 'react-countdown'
/* about:inspect to see debug type about:inspect int search bar  */
// http://127.0.0.1:8888/predict

const Home = () => {
  const [respons_test, setrespons_test] = useState(null);
  const [search, setSearch] = useState(null);
  const [click, setClick] = useState(false);
  const [reqData, setreqData] = useState(null);

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
              "question_object": { "1": { "question": "¿Qué sucedió?" },
                          "2": { "question": "¿Quienes son los actores del hecho?" },
                          "3": { "question": "¿De quienes se está hablando?" },
                          "4": { "question": `¿Qué ocurre con ${search}?` },
                          "5": { "question": `¿Qué dijo ${search}?` },
                          "6": { "question": `¿Qué expresa ${search}?` },
                          "7": { "question": `¿Quién es ${search}?` },
                          "7": { "question": `¿Existen otros actores diferentes a ${search}?` },
                          "8": { "question": `¿Qué sucede con ${search}?` },
                          "9": { "question": `¿Cómo ocurre el suceso?`},
                          "10": { "question": `¿Cuándo ocurrió?`},
                          "11": { "question": `¿Qué acción toma ${search}?`},

                      }}
      ] 

    }
    setreqData(reqData)
    return reqData
  }

  const getData= (req)=>{
    console.log(process.env.HOST)
    axios.post(`http://127.0.0.1:8888/predict`, req)
      .then(res => { 
        console.log(res);  
        setrespons_test(res.data.data)
        setClick(false)
      })

  }

  const LoaderDiv = () => <div>
      <br/>
      <h3>Por favor espere mientras obtenemos resultados</h3>
      <Loader active inline='centered' />
      <h4>Tiempo estimado: 2 minutos</h4>
      <h5>Cuenta regresiva: {<Countdown date={Date.now() + 120000} />}</h5>
      <p>Preguntas generadas:</p>
      {reqData &&  Object.keys(reqData["people"][0]["question_object"])?.map(
        (key) => (<p key={key}>{reqData["people"][0]["question_object"][key]["question"]}</p>))
      }
  </div>

  const renderData = () => {
    if(!respons_test && click){
      return  <LoaderDiv/>
    }


    if(!respons_test){
      return  <> </>
    }

    if(click){
      return  <LoaderDiv/>
    }
    return respons_test.map((data)=> <LineTime key={data.id} news={data}/>)
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