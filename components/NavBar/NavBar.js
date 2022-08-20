import React from 'react'
import Link from 'next/link'
import styles from './NavBar.module.css'
import { Button } from 'semantic-ui-react'
import { Menu, Container } from 'semantic-ui-react'

const NavBar = () => {
  return (
    <div className={styles.container}>
        <Menu size="huge" borderless pointing as="header">
        <Container text>

          <Link href="/"><a> <Menu.Item color='blue'>Home</Menu.Item> </a></Link>
          <Link href="/candidatos"><a><Menu.Item color='blue'>Candidatos</Menu.Item></a></Link>
          <Link href="/equipos"><a><Menu.Item color='blue'>Equipos</Menu.Item></a></Link>

        </Container>
    
        </Menu>
    </div>
  );
}

export default NavBar;