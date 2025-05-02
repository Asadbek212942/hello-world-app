// src/App.jsx
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Menu from './components/Menu';
import Content from './components/Content';
import Button from './components/Button';
import Container from './components/Container';
import './App.css';

function App() {
  const [labsData, setLabsData] = useState([]);
  const [selectedLab, setSelectedLab] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const mockLabs = [
        { id: 1, title: 'Лаба 1', content: 'Реализуем компоненты Header, Footer, Menu и Content' },
        { id: 2, title: 'Лаба 2', content: 'В Content  выводим содержимое лабораторной работы ' },
      ];
      setLabsData(mockLabs);
    };
    fetchData();
  }, []);

  const handleLabSelect = (lab) => {
    setSelectedLab(lab);
  };

  const handleClick = () => {
    alert('Привет Асадбек!');
  };

  return (
    <div className="App">
      <Header />
      <Container>
        <Button onClick={handleClick}>Нажми на меня!</Button>
        <Menu labs={labsData} onSelect={handleLabSelect} />
        <Content selectedLab={selectedLab} />
      </Container>
      <Footer />
    </div>
  );
}

export default App;