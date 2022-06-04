import React from 'react';
import Container from '../../components/Container';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

import "./styles.css"

const Inicio: React.FC = () => {
  return (
    <Container>
    <Header />
    <div style={{marginTop: 300}}>
        Inicio
    </div>
    <Footer />
    </Container>
  );
}

export default Inicio;