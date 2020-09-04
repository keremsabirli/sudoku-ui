import React from "react";
import { SudokuGrid } from "../SudokuGrid/SudokuGrid";
import { Container, Row, Col } from "react-bootstrap";
import "./SudokuBoard.css"
export const SudokuBoard = () => {
    return (
        <div>
            <span>
                <SudokuGrid></SudokuGrid>
                <SudokuGrid></SudokuGrid>
                <SudokuGrid></SudokuGrid>
            </span>
        </div>
    );
}