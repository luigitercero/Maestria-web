import React from 'react'
import styles from './LineTime.module.css'

const LineTime = ({news}) => {
  const {title, word_to_search, date, question_object} = news
  let news_list = []
  Object.keys(question_object).forEach(function(key) {
    news_list.push(question_object[key])
  })

  const news_list_render = (question, response, index) => {
    return (
      <div key={index} className={styles.momento}>
        <p>{question}</p>
        <div className={styles.descripcion}>
          <p>{response.answer + " "}</p>
          {response.score}
        </div>
      </div>
    )
    }

  return (
    <>
      <h2>{title}</h2> 
      <h4>{word_to_search}</h4> 
      <h4>{date}</h4> 
      <div className={styles.linea_tiempo}>
        {news_list?.map(({ question, response }, index)=>(
          (response.score > 0.013) 
              &&  news_list_render(question,response, index) 
        ))}
    </div>
    </>
    
  )
}



export default LineTime