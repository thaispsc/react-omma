import React from 'react';
import Container from '../../components/Container';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

import "./styles.css"

const Contato: React.FC = () => {
  return (
    <Container>
    <Header />
    <div style={{marginTop: 300}}>
        Contato
    </div>
    <Footer />
    </Container>
  );
}

export default Contato;