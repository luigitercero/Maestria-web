import React from 'react'
import Link from 'next/link'
import styles from './NavBar.module.css'
import { Button } from 'semantic-ui-react'
import { Menu, Container, Grid } from 'semantic-ui-react'
import Input from '../Input/Search'

const NavBar = () => {
  const [search, setSearch] = React.useState('')

  const handleSearch = (e) => {
    setSearch(e.target.value)
  }

  return (
    <div className={styles.container}>
        
        <Container text>
      
          <Menu size="huge" borderless pointing as="header">
              <Container text>
                <Link href="/"><a> <Menu.Item color='blue'>Home</Menu.Item> </a></Link>
                <Link href="/candidatos"><a><Menu.Item color='blue'>Candidatos</Menu.Item></a></Link>
                <Link href="/equipos"><a><Menu.Item color='blue'>Equipos</Menu.Item></a></Link>

              </Container>
            
                <Container textAlign='right' className={styles.search_container}>
                  <Input onChange={handleSearch} value={search}/>
                </Container>

          </Menu>
        </Container>
        
    </div>
  );
}

export default NavBar;