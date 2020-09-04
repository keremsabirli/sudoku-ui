import React from "react";
import { SudokuButton } from "../SudokuButton/SudokuButton";
import { Row, Container } from "react-bootstrap";
import "./SudokuButtons.css";

export const SudokuButtons = () => {
    return (
        <Container>
            <Row>
                <SudokuButton onHandleClick={(number: Number) => onButtonClicked(number)} number={1}></SudokuButton>
                <SudokuButton onHandleClick={(number: Number) => onButtonClicked(number)} number={2}></SudokuButton>
                <SudokuButton onHandleClick={(number: Number) => onButtonClicked(number)} number={3}></SudokuButton>
            </Row>
            <Row>
                <SudokuButton onHandleClick={(number: Number) => onButtonClicked(number)} number={4}></SudokuButton>
                <SudokuButton onHandleClick={(number: Number) => onButtonClicked(number)} number={5}></SudokuButton>
                <SudokuButton onHandleClick={(number: Number) => onButtonClicked(number)} number={6}></SudokuButton>
            </Row>
            <Row>
                <SudokuButton onHandleClick={(number: Number) => onButtonClicked(number)} number={7}></SudokuButton>
                <SudokuButton onHandleClick={(number: Number) => onButtonClicked(number)} number={8}></SudokuButton>
                <SudokuButton onHandleClick={(number: Number) => onButtonClicked(number)} number={9}></SudokuButton>
            </Row>
        </Container>
    );
}

export const onButtonClicked = (number: Number) => {
    console.log(number);
}

export type SudokuButtonsProps = {
    number: Number;
}