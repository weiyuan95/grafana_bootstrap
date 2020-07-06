import React from 'react';
import { DataRow } from './DataRow';
import { css, cx } from 'emotion';
import { getTableStyles } from 'styles/styles';

interface Props {
  rawData: any;
}

export const DataTable: React.FC<Props> = ({ rawData }) => {
  const tableStyles = getTableStyles();
  rawData = rawData.series[0].fields;
  const headers = extractHeaders(rawData);
  console.log(headers);
  const tableData = extractData(rawData);

  return (
    <div>
      <table className={cx(tableStyles.border)}>
        <DataRow rowData={headers} isHeader={true} />
        {tableData.map(row => (
          <DataRow rowData={row} isHeader={false} />
        ))}
      </table>
    </div>
  );
};

// TODO: create a type instead of using any for the raw data from the datasource
function extractHeaders(rawData: any): string[] {
  let headers = [];
  for (const columnData of rawData) {
    headers.push(columnData.name);
  }

  return headers;
}

function extractData(rawData: any): string[][] {
  let extractedRowData = [];
  let numCols = rawData[0].values.length;

  for (let i = 0; i < numCols; i++) {
    let rowData = [];
    for (const columnData of rawData) {
      rowData.push(columnData.values.buffer[i]);
    }
    extractedRowData.push(rowData);
  }

  return extractedRowData;
}
