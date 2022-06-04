import React from 'react';
import Container from '../../components/Container';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ContentList from '../../components/ContentList';
import "./styles.css"


const Receitas: React.FC = () => {
  return (
    <Container>
    <Header />
    <ContentList />
    <Footer />
    </Container >
  );
}

export default Receitas;