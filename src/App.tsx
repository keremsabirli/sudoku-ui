import React, { useState } from 'react';
import './App.css';
import { Container, Row, Col } from "react-bootstrap";
import { SudokuBoard } from './components/SudokuBoard/SudokuBoard';
import { SudokuButtons } from "./components/SudokuButtons/SudokuButtons";

export const App = () => {
  const [selectedCell, setSelectedCell] = useState(null);
  return (
    <div>
      <Container fluid>
        <Row>
          {/* THIS IS THE SUDOKU BOARD */}
          <Col>
            <SudokuBoard></SudokuBoard>
          </Col>
          {/* THIS IS THE INPUT BUTTONS */}
          <Col>
            <SudokuButtons></SudokuButtons>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
