import React from 'react'
import styles from './LineTime.module.css'

const LineTime = ({news}) => {
  const {title, word_to_search, date, question_object} = news
  let news_list = []
  let itemList2=Object.keys(question_object).forEach(function(key) {
    news_list.push(question_object[key])
  })
  let itemList=news_list.map((questioncontent)=>{
    
    const { question, response } = questioncontent
    return (<>
      <h2>{title}</h2> 
      <h4>{word_to_search}</h4> 
      <h4>{date}</h4> 
      <div class={styles.momento}>
        <h2>{question}</h2>
        <div class={styles.descripcion}>
          {response.answer}
          {response.score}
        </div>
      </div>
    </>)
  })


  return (
    <div class={styles.linea_tiempo}>
        {itemList}
    </div>
  )
}



export default LineTime