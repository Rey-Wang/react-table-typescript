import React, { useState } from "react";
import { Table } from "./components/Table";
import { Column } from "react-table";

type Data = {
  col1: string;
  col2: string;
  col3: string;
  col4: string;
  col5: string;
  col6: string;
};

export const App = () => {
  const [data, setData] = useState([
    {
      col1: "1: 1*1",
      col2: "2: 1*2",
      col3: "3: 1*3",
      col4: "4: 1*4",
      col5: "5: 1*5",
      col6: "6: 1*6",
    },
    {
      col1: "2: 2*1",
      col2: "4: 2*2",
      col3: "6: 2*3",
      col4: "8: 2*4",
      col5: "10: 2*5",
      col6: "12: 2*6",
    },
    {
      col1: "3: 3*1",
      col2: "6: 3*2",
      col3: "9: 3*3",
      col4: "12: 3*4",
      col5: "15: 3*5",
      col6: "18: 3*6",
    },
    {
      col1: "4: 4*1",
      col2: "8: 4*2",
      col3: "12: 4*3",
      col4: "16: 4*4",
      col5: "20: 4*5",
      col6: "24: 4*6",
    },
    {
      col1: "5: 5*1",
      col2: "10: 5*2",
      col3: "15: 5*3",
      col4: "20: 5*4",
      col5: "25: 5*5",
      col6: "30: 5*6",
    },
    {
      col1: "6: 6*1",
      col2: "12: 6*2",
      col3: "18: 6*3",
      col4: "24: 6*4",
      col5: "30: 6*5",
      col6: "36: 6*6",
    },
  ]);

  const updateData = (rowIndex: number, columnId: string, newValue: string) => {
    setData((old) =>
      old.map((row, index) => {
        if (index === rowIndex) {
          return {
            ...row,
            [columnId]: newValue,
          };
        }
        return row;
      })
    );
  };
  const columns = React.useMemo(
    (): Column<Data>[] => [
      {
        Header: "Column 1",
        accessor: "col1", // accessor is the "key" in the data
        cellType: "EDITABLE",
      },
      {
        Header: "Column 2",
        accessor: "col2",
      },
      {
        Header: "Column 3",
        accessor: "col3",
      },
      {
        Header: "Column 4",
        accessor: "col4",
      },
      {
        Header: "Column 5",
        accessor: "col5",
      },
      {
        Header: "Column 6",
        accessor: "col6",
      },
    ],
    []
  );
  return <Table columns={columns} data={data} updateData={updateData} />;
};
