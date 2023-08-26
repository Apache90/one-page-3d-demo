import React from 'react';
import styled, { css } from 'styled-components';

const data = [
  'Diseño Web',
  'Desarrollo de Apps',
  'Base de datos',
  'Asesorioamiento IT'
];

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
  position: relative;
  color: black;
  font-size: 14px;
  font-weight: 300;
`;

const Container = styled.div`
  width: 1400px;
  display: flex;
  justify-content: space-between;
`;

const fillTextEffect = css`
  position: relative;

  &:before {
    content: attr(data-text);
    position: absolute;
    top: 0;
    left: 0;
    color: #ffffff; /* Change color to pink */
    width: 0;
    white-space: nowrap; /* Prevent text wrapping */
    overflow: hidden; /* Hide overflow */
    transition: width 0.5s ease;
  }

  &:hover:before {
    width: 100%;
  }
`;

const ListItem = styled.li`
  font-size: 70px;
  font-weight: bold;
  cursor: pointer;
  color: transparent;
  -webkit-text-stroke: 1px white;
  ${fillTextEffect}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Right = styled.div`
  flex: 1;
`;

const Trabajos = () => {
  return (
    <Section>
      <Container>
        <Left>
          <List>
            {data.map((item) => (
              <ListItem key={item} data-text={item}>
                {item}
              </ListItem>
            ))}
          </List>
        </Left>
        <Right></Right>
      </Container>
    </Section>
  );
};

export default Trabajos;
