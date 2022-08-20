import React from 'react'
import Link from 'next/link'

const NavBar = () => {
  return (
    <div>
        <menu>
          <Link href="/"><a>Home</a></Link>
          <Link href="/candidatos"><a>Candidatos</a></Link>
          <Link href="/equipos"><a>Equipos</a></Link>
        </menu>
    </div>
  );
}

export default NavBar;