import React from 'react';
import { styled } from 'styled-components';

const Section = styled.div`
display: flex;
justify-content: center;
`
const Container = styled.div`
width: 1400px;
display: flex;
justify-content: space-between;
align-items: center;
padding: 10px 0px;
`
const Links = styled.div`
display:flex;
align-items: center;
gap: 20px;
`
const Logo = styled.img`
height:50px;
`
const List = styled.ul`
display: flex;
gap: 20px;
list-style: none;
`
const ListItem = styled.li`
cursor:pointer;
`
const Icons = styled.div`
display:flex;
align-items: center;
gap: 20px;
`
const Icon = styled.img`
height:25px;
cursor:pointer;
`
const Button = styled.button`
width: 100px;
padding: 10px;
background-color: #da4ea2;
color: white;
border: none;
border-radius: 5px;
cursor: pointer;
`

const Navbar = () => {
    return(
        <Section>
            <Container>
                <Links>
                <Logo src="../../public/img/logo1.png"/>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Servicios</ListItem>
                    <ListItem>Nosotros</ListItem>
                    <ListItem>Contacto</ListItem>
                </List>
                </Links>
                <Icons>
                    <Icon src="../../public/img/search.png"/>
                    <Button>Contactar</Button>
                </Icons>
            </Container>
        </Section>
    )
    
}
export default Navbar;