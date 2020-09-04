import React from "react"
import { SudokuCell } from "../SudokuCell/SudokuCell"
import './SudokuGrid.css'
export const SudokuGrid = () => {
    return (
        <div>
            <div className="grid-container">
                <div className="grid-row-container">
                    <SudokuCell assignValue={assignValue} select={select} number={1}></SudokuCell>
                    <SudokuCell assignValue={assignValue} select={select} number={2}></SudokuCell>
                    <SudokuCell assignValue={assignValue} select={select} number={3}></SudokuCell>
                </div>
                <div className="grid-row-container">
                    <SudokuCell assignValue={assignValue} select={select} number={4}></SudokuCell>
                    <SudokuCell assignValue={assignValue} select={select} number={5}></SudokuCell>
                    <SudokuCell assignValue={assignValue} select={select} number={6}></SudokuCell>
                </div>
                <div className="grid-row-container">
                    <SudokuCell assignValue={assignValue} select={select} number={7}></SudokuCell>
                    <SudokuCell assignValue={assignValue} select={select} number={8}></SudokuCell>
                    <SudokuCell assignValue={assignValue} select={select} number={9}></SudokuCell>
                </div>
            </div>
            <div className="grid-container">
                <div className="grid-row-container">
                    <SudokuCell assignValue={assignValue} select={select} number={1}></SudokuCell>
                    <SudokuCell assignValue={assignValue} select={select} number={2}></SudokuCell>
                    <SudokuCell assignValue={assignValue} select={select} number={3}></SudokuCell>
                </div>
                <div className="grid-row-container">
                    <SudokuCell assignValue={assignValue} select={select} number={4}></SudokuCell>
                    <SudokuCell assignValue={assignValue} select={select} number={5}></SudokuCell>
                    <SudokuCell assignValue={assignValue} select={select} number={6}></SudokuCell>
                </div>
                <div className="grid-row-container">
                    <SudokuCell assignValue={assignValue} select={select} number={7}></SudokuCell>
                    <SudokuCell assignValue={assignValue} select={select} number={8}></SudokuCell>
                    <SudokuCell assignValue={assignValue} select={select} number={9}></SudokuCell>
                </div>
            </div>
            <div className="grid-container">
                <div className="grid-row-container">
                    <SudokuCell assignValue={assignValue} select={select} number={1}></SudokuCell>
                    <SudokuCell assignValue={assignValue} select={select} number={2}></SudokuCell>
                    <SudokuCell assignValue={assignValue} select={select} number={3}></SudokuCell>
                </div>
                <div className="grid-row-container">
                    <SudokuCell assignValue={assignValue} select={select} number={4}></SudokuCell>
                    <SudokuCell assignValue={assignValue} select={select} number={5}></SudokuCell>
                    <SudokuCell assignValue={assignValue} select={select} number={6}></SudokuCell>
                </div>
                <div className="grid-row-container">
                    <SudokuCell assignValue={assignValue} select={select} number={7}></SudokuCell>
                    <SudokuCell assignValue={assignValue} select={select} number={8}></SudokuCell>
                    <SudokuCell assignValue={assignValue} select={select} number={9}></SudokuCell>
                </div>
            </div>
        </div>
    )
}
const select = () => {

}
const assignValue = () => {

}