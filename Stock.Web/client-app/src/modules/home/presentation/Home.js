import React from 'react';
import { Jumbotron, Container } from 'reactstrap';

const Home = (props) => {
  return (
    <div>
      <Jumbotron fluid>
        <Container fluid>
          <h1 className="display-3">Bienvenidos!</h1>
          <p className="lead">Esta es la página de HOME</p>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Home;