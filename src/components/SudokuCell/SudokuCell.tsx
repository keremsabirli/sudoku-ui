import React, { useState } from "react";
import "./SudokuCell.css";
export const SudokuCell = (props: SudokuCellProps) => {
    const [number, setNumber] = useState(props.number);
    return(
        <div className="sudoku-cell">
            <p>
                {number}
            </p>
        </div>
    )
    
}

export type SudokuCellProps = {
    number: Number;
    select: Function;
    assignValue: Function;
}