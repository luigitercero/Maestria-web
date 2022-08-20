import React from "react";
import { useRouter } from 'next/router';

const Candidatos = () => {
  const {
    query: { id },
  } = useRouter()

  return <div>Esta es la pagina de candidatos {id}</div>
}

export default Candidatos;