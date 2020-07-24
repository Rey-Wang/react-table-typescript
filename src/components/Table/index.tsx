import React from "react";
import { useTable, Column, useSortBy, Cell } from "react-table";
import "./style.css";
import { EditableCell } from "./Cells/EditableCell";

type Props<DataType extends object = any> = {
  columns: Column<DataType>[];
  data: DataType[];
};

export const Table = <DataType extends object = any>({
  columns,
  data,
}: Props<DataType>) => {
  const tableInstance = useTable(
    { columns, data, disableSortRemove: true },
    useSortBy
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = tableInstance;

  const getCell = (cell: Cell<DataType>) => {
    switch (cell.column.cellType) {
      case "EDITABLE":
        return (
          <EditableCell
            cell={cell}
            updatedData={(a, b, c) => {
              console.log(a, b, c);
            }}
          />
        );
      default:
        return "Cell";
    }
  };

  return (
    <table {...getTableProps()} className="table">
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                {column.render("Header")}
                <span>
                  {column.isSorted ? (column.isSortedDesc ? "▼" : "▲") : ""}
                </span>
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return (
                  <td {...cell.getCellProps()} onClick={}>
                    {getCell(cell)}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
