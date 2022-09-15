import React from 'react'
import styles from './LineTime.module.css'

const LineTime = ({news}) => {
  let news_list = []
  let itemList2=Object.keys(news).forEach(function(key) {
    news_list.push(news[key])
  })
  let itemList=news_list.map((question)=>{
    return (<>
      <div class={styles.momento}>
        <h3>{question.question}</h3>
        <div class={styles.descripcion}>
          {question.response.answer}
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