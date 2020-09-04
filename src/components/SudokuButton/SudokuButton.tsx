import React from "react"
import { Button } from "react-bootstrap"
import "./SudokuButton.css"

export const SudokuButton = (props: SudokuButtonProps) => {
    return (
        <div onClick={() => props.onHandleClick(props.number)} className="button-cell">
            <p>
                {props.number}
            </p>
        </div>
    )
}

export type SudokuButtonProps = {
    number: Number;
    onHandleClick: Function,
}