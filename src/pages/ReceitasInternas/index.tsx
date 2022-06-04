import React from 'react';
import Container from '../../components/Container';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

import "./styles.css"

const ReceitasInternas: React.FC = () => {
  return (
    <Container>
    <Header />
    {/* {ContentList} */}
    <Footer />
    </Container >
  );
}

export default ReceitasInternas;