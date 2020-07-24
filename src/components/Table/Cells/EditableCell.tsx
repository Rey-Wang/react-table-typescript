import React, { useState } from "react";
import { Cell } from "react-table";

type Props<DataType extends object = {}> = {
  cell: Cell<DataType>;
  updatedData: (
    rowIndex: number,
    columnIndex: number,
    newValue: string
  ) => void;
};

export const EditableCell = <DataType extends object = {}>({
  cell,
  updatedData,
}: Props<DataType>) => {
  const [newCellValue, setNewCellValue] = useState<string>(cell.value);

  return (
    <input
      value={cell.value}
      onChange={() => {
        setNewCellValue(cell.value);
      }}
      onBlur={() => {
        updatedData(cell.row.index, cell.column.index, newCellValue);
      }}
    />
  );
};
