import React from 'react'
import { Input } from 'semantic-ui-react'


const InputExampleIcon = ({onChange, value}) => {


  return(
    <>
      <Input onChange={(e) => onChange(e)} icon='search' placeholder='Buscar...' />
      {/* console.log(value) */}
    </>
  )
}


export default InputExampleIcon