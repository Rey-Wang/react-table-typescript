import React, { useState } from "react";
import { Cell } from "react-table";
import "./style.css";

type Props<DataType extends object = {}> = {
  cell: Cell<DataType>;
  updateData: (rowIndex: number, columnId: string, newValue: string) => void;
};

export const EditableCell = <DataType extends object = {}>({
  cell,
  updateData,
}: Props<DataType>) => {
  const [newCellValue, setNewCellValue] = useState<string>(cell.value);

  return (
    <input
      className="editable_input"
      defaultValue={cell.value}
      onChange={() => {
        setNewCellValue(cell.value);
      }}
      onBlur={() => {
        console.log(cell);
        updateData(cell.row.index, cell.column.id, newCellValue);
      }}
    />
  );
};
