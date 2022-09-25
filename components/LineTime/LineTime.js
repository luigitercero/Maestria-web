import React from 'react'
import styles from './LineTime.module.css'

const LineTime = ({news}) => {
  const {title, word_to_search, date, question_object} = news
  let news_list = []
  Object.keys(question_object).forEach(function(key) {
    news_list.push(question_object[key])
  })

  const news_list_render = (question, response) => {
    return (
      <div class={styles.momento}>
        <p>{question}</p>
        <div class={styles.descripcion}>
          {response.answer + " "}
          {response.score}
        </div>
      </div>
    )
    }
  let itemList=news_list.map((questioncontent)=>{
    
    const { question, response } = questioncontent
    return (<>
      {(response.score > 0.013) 
      && 
      news_list_render(question,response) }
    </>)
  })

  return (
    <>
      <h2>{title}</h2> 
      <h4>{word_to_search}</h4> 
      <h4>{date}</h4> 
      <div class={styles.linea_tiempo}>
      
        {itemList}
    </div>
    </>
    
  )
}



export default LineTime